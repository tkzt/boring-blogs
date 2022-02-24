__NUXT_JSONP__("/%E5%86%9B%E4%BD%93%E6%8B%B3/2019-10-10_%E5%89%8D%E7%BC%80%E5%92%8C", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{article:{slug:"2019-10-10_前缀和",toc:[{id:i,depth:m,text:i},{id:n,depth:m,text:o}],body:{type:"root",children:[{type:a,tag:p,props:{id:i},children:[{type:a,tag:q,props:{ariaHidden:r,href:"#%E7%AE%80%E5%8D%95%E6%9D%A5%E8%AF%B4",tabIndex:s},children:[{type:a,tag:c,props:{className:[t,u]},children:[]}]},{type:b,value:i}]},{type:b,value:g},{type:a,tag:v,props:{},children:[{type:b,value:"前缀和主要是减少了重复的运算，比如有一个问题，每一次处理需要得到 ∑a"},{type:a,tag:w,props:{},children:[{type:b,value:x}]},{type:b,value:"(i = m-\u003En-1)，其中，n 为定值而 m 不定，那么常规操作是每一次处理都重新对索引 m-\u003En-1 的数求和。但实际上，可以用一个数组来专门存储 m-\u003En-1 的和（比如那个数组叫做 sum，那么 sum[m]则表示 ∑a"},{type:a,tag:w,props:{},children:[{type:b,value:x}]},{type:b,value:"(i = m-\u003En-1)）。这样，预先构造好 sum 数组，每次处理只需要要直接访问 sum 数组就好（最大可将复杂度从 O(n"},{type:a,tag:"sup",props:{},children:[{type:b,value:"2"}]},{type:b,value:") 降到 O(n)）。"}]},{type:b,value:g},{type:a,tag:p,props:{id:n},children:[{type:a,tag:q,props:{ariaHidden:r,href:"#show-me-the-code",tabIndex:s},children:[{type:a,tag:c,props:{className:[t,u]},children:[]}]},{type:b,value:o}]},{type:b,value:g},{type:a,tag:v,props:{},children:[{type:b,value:"sum 数组的构造过程大概就是："}]},{type:b,value:g},{type:a,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:a,tag:"pre",props:{className:["shiki"],style:"background-color: #ffffff"},children:[{type:a,tag:"code",props:{},children:[{type:a,tag:c,props:{className:[h]},children:[{type:a,tag:c,props:{style:f},children:[{type:b,value:y}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:",sumNums "}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:" ["}]},{type:a,tag:c,props:{style:f},children:[{type:b,value:A}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:B}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:C}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:D}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{style:f},children:[{type:b,value:E}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:"(n)],"}]},{type:a,tag:c,props:{style:f},children:[{type:b,value:A}]}]},{type:b,value:g},{type:a,tag:c,props:{className:[h]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:B}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:C}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:D}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:j}]},{type:a,tag:c,props:{style:f},children:[{type:b,value:E}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:"(n"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:k}]},{type:a,tag:c,props:{style:f},children:[{type:b,value:l}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:F}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:k}]},{type:a,tag:c,props:{style:f},children:[{type:b,value:l}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:F}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:k}]},{type:a,tag:c,props:{style:f},children:[{type:b,value:l}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:"):"}]}]},{type:b,value:g},{type:a,tag:c,props:{className:[h]},children:[{type:a,tag:c,props:{style:d},children:[{type:b,value:"    sumNums "}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:"+="}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:" a[i]"}]}]},{type:b,value:g},{type:a,tag:c,props:{className:[h]},children:[{type:a,tag:c,props:{style:d},children:[{type:b,value:"    "}]},{type:a,tag:c,props:{style:f},children:[{type:b,value:y}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:"[i] "}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:d},children:[{type:b,value:" sumNums"}]}]},{type:b,value:g},{type:a,tag:c,props:{className:[h]},children:[]}]}]}]}]},dir:"\u002F军体拳",path:"\u002F军体拳\u002F2019-10-10_前缀和",extension:".md",createdAt:G,updatedAt:G},articles:[]}],fetch:{},mutations:[]}}("element","text","span","color: #24292F","color: #CF222E","color: #0550AE","\n","line","简单来说"," ","-","1",2,"show-me-the-code","Show Me The Code","h2","a","true",-1,"icon","icon-link","p","sub","i","sum","=","0","for"," i ","in","range",",","2022-02-23T12:57:24.007Z")));