(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{505:function(t,e,r){"use strict";r.r(e);r(9),r(10),r(15),r(8),r(16);var n=r(2),o=r(27);r(96),r(3),r(31),r(71),r(11),r(312);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"CategoryPage",layout:"category",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,c=t.store,f=c.state.categories.reduce((function(pre,t){return l(l({},pre),{},Object(n.a)({},t.name,t.alias))}),{}),e.next=4,r({deep:!0}).only(["path","title","date","category"]).fetch();case 4:return(v=e.sent.filter((function(t){return"all-posts"===o.category.toLowerCase()||f[t.category]===o.category})).map((function(p){return{title:p.title,date:p.date,to:"/"+f[p.category]+p.path}}))).sort((function(t,e){return new Date(e.date)-new Date(t.date)})),e.abrupt("return",{articles:v});case 7:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.$store.state.categories.reduce((function(pre,t){return l(l({},pre),{},Object(n.a)({},t.alias,t.name))}),{})[this.$route.params.category]||"All Posts",titleTemplate:"Category - %s"}}},v=r(55),y=r(62),d=r.n(y),m=r(456),O=r(210),w=r(136),j=r(103),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{class:{"px-0":t.$vuetify.breakpoint.xs},attrs:{dense:"",rounded:""}},[t._l(t.articles,(function(e,n){var title=e.title,o=e.to,c=e.date;return[r("v-list-item",{key:n,attrs:{to:o}},[t.$vuetify.breakpoint.smAndUp?[t._v("\n        "+t._s(title)+"\n        "),r("v-divider",{staticClass:"mx-2"}),t._v(" "),r("span",{staticClass:"text-caption"},[t._v("\n          "+t._s(new Date(c).toDateString())+"\n        ")])]:r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(title))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(new Date(c).toDateString()))])],1)],2),t._v(" "),t.$vuetify.breakpoint.xs&&n<t.articles.length-1?r("v-divider",{key:"divider-"+n,staticClass:"mx-4 my-1"}):t._e()]}))],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VDivider:m.a,VList:O.a,VListItem:w.a,VListItemContent:j.a,VListItemSubtitle:j.b,VListItemTitle:j.c})}}]);