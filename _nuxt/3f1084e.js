(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{466:function(t,e,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("48af223a",content,!0,{sourceMap:!1})},474:function(t,e,r){"use strict";r(466)},475:function(t,e,r){var o=r(18)(!1);o.push([t.i,"code{color:#c7254e!important;background-color:#f9f2f4!important;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace}.shiki{background-color:#f6f8fa!important;padding:6px 12px;border-radius:5px;margin:10px 0;overflow:auto}.shiki code{padding:0;background:transparent!important;font-size:14px!important}article p{text-align:justify;letter-spacing:1.5px;font-size:15px!important;margin-bottom:10px!important}article h2,article h3,article h4,article h5,article h6{cursor:pointer;margin-bottom:10px}article h2{font-size:22px}article h3{font-size:20px}article h4{font-size:18px}article h5{font-size:16px}article h6{font-size:15px;font-style:italic}article h2 a,article h3 a,article h4 a,article h5 a,article h6 a{text-decoration:none;color:rgba(0,0,0,.87)!important}article h2 a:hover,article h3 a:hover,article h4 a:hover,article h5 a:hover,article h6 a:hover{text-decoration:underline}article img{max-width:100%;display:block;margin:0 auto}article ul{margin-bottom:12px}article td,article th{padding:0}article .table-wrapper,article table{max-width:100%;overflow:auto}article table{border-collapse:collapse;empty-cells:show;margin:0 auto 12px;border:thin solid #f0f0f0;font-size:15px!important}article td,article th{margin:0;padding:.5em 1em}article thead{background-color:#f0f0f0;text-align:left}article tbody tr:nth-child(odd){background-color:transparent}article tbody tr:nth-child(2n){background-color:#fafafa}.text-line-through{text-decoration:line-through}",""]),t.exports=o},487:function(t,e,r){"use strict";r.r(e);r(9),r(10),r(15),r(16);var o=r(2),n=r(27),c=(r(96),r(3),r(31),r(25),r(80),r(312),r(101),r(8),r(11),r(140));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"PostPage",layout:"post",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,h,path,d,m,y,x,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=t.store,l=t.error,h=c.state.categories.reduce((function(pre,t){return f(f({},pre),{},Object(o.a)({},t.name,t.alias))}),{}),path="/".concat(n.pathMatch.split("/").pop()),e.next=5,r({deep:!0}).fetch();case 5:if((d=e.sent).sort((function(t,e){return new Date(e.date)-new Date(t.date)})),-1!==(m=d.indexOf(d.find((function(p){return p.path===path}))))){e.next=10;break}return e.abrupt("return",l({statusCode:404,message:"Article not found"}));case 10:return y=d[m],x=d[m-1]||{title:"Back to home",path:"/",category:""},O=d[m+1]||{title:"Back to home",path:"/",category:""},y.categoryAlias=h[y.category],x.category&&(x.category=h[x.category]),O.category&&(O.category=h[O.category]),y.body.children.filter((function(t){return"table"===t.tag})).forEach((function(t){Object.assign(t,{type:"element",tag:"div",props:{className:"table-wrapper"},children:[JSON.parse(JSON.stringify(t))]})})),c.commit("SET_POST",y),c.commit("SET_LAST_POST",x),c.commit("SET_NEXT_POST",O),e.abrupt("return",{post:y});case 21:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.post&&this.post.title,titleTemplate:"%s"}},mounted:function(){Object(c.visit)(this.$route.path)}},d=(r(474),r(55)),m=r(62),y=r.n(m),x=r(213),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("article",[r("nuxt-content",{attrs:{document:t.post}})],1)])}),[],!1,null,null,null);e.default=component.exports;y()(component,{VCard:x.a})}}]);