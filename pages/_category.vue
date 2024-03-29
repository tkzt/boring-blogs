<template>
  <v-list dense rounded :class="{ 'px-0': $vuetify.breakpoint.xs }">
    <template v-for="({ title, to, date }, index) in articles">
      <v-list-item :key="index" :to="to">
        <template v-if="$vuetify.breakpoint.smAndUp">
          {{ title }}
          <v-divider class="mx-2" />
          <span class="text-caption">
            {{ new Date(date).toDateString() }}
          </span>
        </template>
        <v-list-item-content v-else>
          <v-list-item-title>{{ title }}</v-list-item-title>
          <v-list-item-subtitle>{{
            new Date(date).toDateString()
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider
        v-if="$vuetify.breakpoint.xs && index < articles.length - 1"
        :key="'divider-' + index"
        class="mx-4 my-1"
      />
    </template>
  </v-list>
</template>
<script>
export default {
  name: 'CategoryPage',
  layout: 'category',
  async asyncData({ $content, params, store }) {
    const nameAliasMap = store.state.categories.reduce(
      (pre, curr) => ({ ...pre, [curr.name]: curr.alias }),
      {}
    )
    const articles = (
      await $content({ deep: true })
        .only(['path', 'title', 'date', 'category'])
        .fetch()
    )
      .filter(
        (c) =>
          params.category.toLowerCase() === 'all-posts' ||
          nameAliasMap[c.category] === params.category
      )
      .map((p) => ({
        title: p.title,
        date: p.date,
        to: '/' + nameAliasMap[p.category] + p.path,
      }))

    articles.sort((a1, a2) => new Date(a2.date) - new Date(a1.date))

    return {
      articles,
    }
  },
  head() {
    const aliasNameMap = this.$store.state.categories.reduce(
      (pre, curr) => ({ ...pre, [curr.alias]: curr.name }),
      {}
    )
    return {
      title: aliasNameMap[this.$route.params.category] || 'All Posts',
      titleTemplate: 'Category - %s',
    }
  },
}
</script>
