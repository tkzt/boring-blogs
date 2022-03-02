window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo){return {staticAssetsBase:"\u002Fboring-blogs\u002F_nuxt\u002Fstatic\u002F1646195732",layout:"post",error:ay,state:{"404":["4","9",ah,"14","16","24"],categories:[{name:"Cheap Talk",description:"写程序以前, 他是个诗人",alias:"cheap-talk"},{name:"Stereotyped",description:"有趣的八股文",alias:"stereotyped"},{name:az,description:"记录了一些, 偶尔迫不得已而探索的一些过时、冷门或无趣的技术, 很显然用了尼大师的典, 「What Doesn't Kill You Makes You Stronger」",alias:ai},{name:"军体拳",description:"天下绝学千千万, 军体神拳只此般",alias:"basic-skill"},{name:"Boring Plans",description:"一些 Pet Projects 的开发日志",alias:"boring-plans"},{name:"AC!AC!AC!",description:"主要是 LeetCode 刷题",alias:"accepted"},{name:"Quick Start",description:"快速了解",alias:"quick-start"},{name:"掉落",description:"比如丘丘胶、蝙蝠翅膀、禽肉等等",alias:aA}],apps:[{name:"2048",to:"\u002Fboring-plans\u002F2020-001"}],error:["32","25"],post:{slug:"2021-012",title:"Ace Editor 获取选中内容",date:"2021-12-27T00:00:00.000Z",category:az,toc:[{id:E,depth:t,text:F},{id:G,depth:t,text:H},{id:I,depth:t,text:J}],body:{type:aj,children:[{type:b,tag:u,props:{id:E},children:[{type:b,tag:m,props:{href:ak,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:F}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"上回书说到目前正在基于 ACE DIY 一个 SQL 编辑器。今天开发涉及到 获取选中内容 的模块的时候发现 ACE 获取选中内容，并不像直觉猜想的那样。"}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"直接上代码。"}]},{type:a,value:e},{type:b,tag:u,props:{id:G},children:[{type:b,tag:m,props:{href:al,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:H}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"省略初始化编辑器等等操作。"}]},{type:a,value:e},{type:b,tag:K,props:{className:[W]},children:[{type:b,tag:X,props:{className:[Y],style:Z},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:k},children:[{type:a,value:"getSelectedContent"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aB}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:L}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"range"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aC}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"getSelectionRange"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"return"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:".editor.session."}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"getTextRange"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"(range);"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"},"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"主要是想和 ACE 提供出来的 "},{type:b,tag:j,props:{},children:[{type:a,value:"getSelection"}]},{type:a,value:" 区分一下，该函数返回的是一个所谓的 "},{type:b,tag:j,props:{},children:[{type:a,value:"Selection"}]},{type:a,value:"\n实例。"}]},{type:a,value:e},{type:b,tag:u,props:{id:I},children:[{type:b,tag:m,props:{href:am,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:an,props:{},children:[{type:a,value:e},{type:b,tag:_,props:{},children:[{type:b,tag:m,props:{href:"https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F24906120\u002Face-editor-get-current-selected-line-number-and-text",rel:[P,Q,R],target:S},children:[{type:a,value:"Ace Editor get current selected line number and text"}]}]},{type:a,value:e}]}]},dir:ao,path:"\u002F2021-012",extension:ap,createdAt:N,updatedAt:N,categoryAlias:ai},lastPost:{slug:"2021-013",title:"简单魔改网页滚动条",date:"2021-12-30T00:00:00.000Z",category:aA,toc:[{id:E,depth:t,text:F},{id:$,depth:t,text:aa},{id:G,depth:t,text:H},{id:I,depth:t,text:J}],body:{type:aj,children:[{type:b,tag:u,props:{id:E},children:[{type:b,tag:m,props:{href:ak,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:F}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"定制网页滚动条样式是很常见的业务需求。"}]},{type:a,value:e},{type:b,tag:u,props:{id:$},children:[{type:b,tag:m,props:{href:aD,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:aa}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"众所周知：\n"},{type:b,tag:"img",props:{alt:"在这里插入图片描述",src:"https:\u002F\u002Fimg-blog.csdnimg.cn\u002F9a46e911c3b34e2a87eeb886104bc41e.png?x-oss-process=image\u002Fwatermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6Zm25riF56eL,size_20,color_FFFFFF,t_70,g_se,x_16"},children:[]}]},{type:a,value:e},{type:b,tag:u,props:{id:G},children:[{type:b,tag:m,props:{href:al,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:H}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"通过以下样式，可以将滚动条魔改成上述图中的样子："}]},{type:a,value:e},{type:b,tag:K,props:{className:[W]},children:[{type:b,tag:X,props:{className:[Y],style:Z},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:g},children:[{type:a,value:"::-webkit-scrollbar"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"width"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ah}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aq}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"height"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ah}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aq}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:g},children:[{type:a,value:"::-webkit-scrollbar-thumb"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"border-radius"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"em"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ar}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:as}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"0.28"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"border"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aq}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"solid"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"transparent"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:at}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aE}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:g},children:[{type:a,value:"::-webkit-scrollbar-track"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ar}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:as}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aF}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:g},children:[{type:a,value:"::-webkit-scrollbar-corner"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:ar}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:C}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:as}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:B}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aF}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ab}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"其中需要注意的是，thumb 的宽度是无法设置的，为了实现 thumb 悬浮的效果，为 thumb 设置了透明的 border。而默认的 "},{type:b,tag:j,props:{},children:[{type:a,value:at}]},{type:a,value:" 是 "},{type:b,tag:j,props:{},children:[{type:a,value:"border-box"}]},{type:a,value:" 的，这意味着背景会蔓延到边框下，这样同样是无法呈现悬浮效果的，于是将其设置成为 "},{type:b,tag:j,props:{},children:[{type:a,value:aE}]},{type:a,value:" 限制背景区域仅为内容区。"}]},{type:a,value:e},{type:b,tag:u,props:{id:I},children:[{type:b,tag:m,props:{href:am,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:an,props:{},children:[{type:a,value:e},{type:b,tag:_,props:{},children:[{type:b,tag:m,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fzh-CN\u002Fdocs\u002FWeb\u002FCSS\u002Fbackground-clip",rel:[P,Q,R],target:S},children:[{type:a,value:at}]}]},{type:a,value:e}]}]},dir:ao,path:"\u002F2021-013",extension:ap,createdAt:N,updatedAt:N},nextPost:{slug:"2021-011",title:"Ace Editor 自定义高亮",date:"2021-12-22T00:00:00.000Z",category:ai,toc:[{id:E,depth:t,text:F},{id:$,depth:t,text:aa},{id:G,depth:t,text:H},{id:I,depth:t,text:J}],body:{type:aj,children:[{type:b,tag:u,props:{id:E},children:[{type:b,tag:m,props:{href:ak,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:F}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"这次的副本是基于 "},{type:b,tag:m,props:{href:"https:\u002F\u002Face.c9.io\u002F",rel:[P,Q,R],target:S},children:[{type:a,value:"ACE"}]},{type:a,value:" DIY 一个 SQL 编辑器，现阶段主要要支持（也就是高亮）所有 Hive 关键词。"}]},{type:a,value:e},{type:b,tag:u,props:{id:$},children:[{type:b,tag:m,props:{href:aD,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:aa}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"众所周知，ACE 默认支持了很多模式（比如 sql、JavaScript 等等），但这些模式只会高亮特定的一些关键词，当我想要高亮额外的关键字时（比如我在 "},{type:b,tag:j,props:{},children:[{type:a,value:"sql"}]},{type:a,value:" 模式想高亮 "},{type:b,tag:j,props:{},children:[{type:a,value:"HIVE"}]},{type:a,value:" 中的 "},{type:b,tag:j,props:{},children:[{type:a,value:aG}]},{type:a,value:"），则需要配置一番。"}]},{type:a,value:e},{type:b,tag:u,props:{id:G},children:[{type:b,tag:m,props:{href:al,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:H}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"比如，当我们在一个 VUE APP 中（Vue2），"},{type:b,tag:j,props:{},children:[{type:a,value:"yarn add ace-builds"}]},{type:a,value:" 安装了 ACE 之后，一个在 "},{type:b,tag:j,props:{},children:[{type:a,value:"sql 模式"}]},{type:a,value:"、"},{type:b,tag:j,props:{},children:[{type:a,value:"sqlserver 主题"}]},{type:a,value:" 下，扩充了 "},{type:b,tag:j,props:{},children:[{type:a,value:aG}]},{type:a,value:" 关键字的例子如下："}]},{type:a,value:e},{type:b,tag:K,props:{className:[W]},children:[{type:b,tag:X,props:{className:[Y],style:Z},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aH}]},{type:b,tag:c,props:{style:O},children:[{type:a,value:aI}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:V}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"  \u003C"}]},{type:b,tag:c,props:{style:O},children:[{type:a,value:K}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"ref"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"style"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:"\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"height: 400px; width: 500px\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"\u003E\u003C\u002F"}]},{type:b,tag:c,props:{style:O},children:[{type:a,value:K}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:V}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aK}]},{type:b,tag:c,props:{style:O},children:[{type:a,value:aI}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:V}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aH}]},{type:b,tag:c,props:{style:O},children:[{type:a,value:aL}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:V}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:ac}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" ace "}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"from"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:"\"ace-builds\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:ac}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:"\"ace-builds\u002Fwebpack-resolver\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:ac}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:"\"ace-builds\u002Fsrc-noconflict\u002Fmode-sql\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:ac}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:"\"ace-builds\u002Fsrc-noconflict\u002Ftheme-sqlserver\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"export"}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"default"}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:q},children:[{type:a,value:ad}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"data"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:": () "}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"=\u003E"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" ({"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"      editor: "}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:au}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"    })"}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:q},children:[{type:a,value:ad}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"mounted"}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:aM}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aN}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:av}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"."}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aO}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aw}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:q},children:[{type:a,value:ad}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"beforeDestroy"}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:aM}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aN}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:av}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:"if"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ax}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:".editor) {"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ae}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aC}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"destroy"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ae}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:".editor.container."}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"remove"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"      }"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aw}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:q},children:[{type:a,value:ad}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"methods: {"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:av}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aO}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aB}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ae}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:".editor "}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:" ace."}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:"edit"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:".$refs["}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:"], {"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"          theme: "}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:"\"ace\u002Ftheme\u002Fsqlserver\""}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aP}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:ae}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:L}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:"session"}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:A}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:".editor.session;"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"        session."}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:aR}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aS}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aT}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:L}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aU}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aV}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aW}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aX}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ax}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:L}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aY}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:a_}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"            rules[stateName]."}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:a$}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ba}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"              token: "}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:bb}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"              regex: "}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:bc}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"              caseInsensitive: "}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:p}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"            });"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"          }"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:ag},children:[{type:a,value:bd}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"          session.$mode.$tokenizer "}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:au}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:be}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:bf}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:bg}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:bh}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:bi}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:af}]},{type:b,tag:c,props:{style:ag},children:[{type:a,value:bj}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:be}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:bk}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:bl}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aP}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"      },"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aw}]},{type:b,tag:c,props:{style:q},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:q},children:[{type:a,value:bm}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:aK}]},{type:b,tag:c,props:{style:O},children:[{type:a,value:aL}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:V}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"其中，关键部分在于："}]},{type:a,value:e},{type:b,tag:K,props:{className:[W]},children:[{type:b,tag:X,props:{className:[Y],style:Z},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"session."}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:aR}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:y}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aS}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aT}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:L}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aU}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:aV}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:aW}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:M}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aX}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ax}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:L}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:aY}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:a_}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"    rules[stateName]."}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:a$}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:ba}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"      token: "}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:bb}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"      regex: "}]},{type:b,tag:c,props:{style:o},children:[{type:a,value:bc}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"      caseInsensitive: "}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:p}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:s}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"    });"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:bm}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:ag},children:[{type:a,value:bd}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"  session.$mode.$tokenizer "}]},{type:b,tag:c,props:{style:h},children:[{type:a,value:z}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:i}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:au}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:bn}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:bf}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:bg}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:bh}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:bi}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:l}]},{type:b,tag:c,props:{style:ag},children:[{type:a,value:bj}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:bn}]},{type:b,tag:c,props:{style:k},children:[{type:a,value:bk}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:D}]},{type:b,tag:c,props:{style:g},children:[{type:a,value:bl}]},{type:b,tag:c,props:{style:d},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[{type:b,tag:c,props:{style:d},children:[{type:a,value:"});"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[f]},children:[]}]}]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"简单来说，regex 是字符串或者正则表达式，用于匹配内容的一部分。而 token 用于标识 regex 命中的这部分的高亮规则，它可以是字符串或者是函数（输入为命中内容，输出为规则标识）。"}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"需要注意的是，虽然 regex 可以是诸如 "},{type:b,tag:j,props:{},children:[{type:a,value:"[a-zA-Z_$][a-zA-Z0-9_$]*\\\\b"}]},{type:a,value:" 正则表达式，但实践表明，无论是 "},{type:b,tag:j,props:{},children:[{type:a,value:"\u002Fmsck\u002Fi"}]},{type:a,value:bo},{type:b,tag:j,props:{},children:[{type:a,value:"(?i)msck"}]},{type:a,value:bo},{type:b,tag:j,props:{},children:[{type:a,value:"new Regex('msck', 'i')"}]},{type:a,value:" 都无法生效，最终经过不懈 google，发现忽略大小写的匹配需要通过如上述代码中的 "},{type:b,tag:j,props:{},children:[{type:a,value:"caseInsensitive"}]},{type:a,value:" 属性来设置。"}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:a,value:"通过阅读源码不难发现，各个模式下会预先配置一些高亮规则，通常包括关键字、运算符、类型等等，而 token 便是用于将内容对应到高亮规则上的。换句话说，token 会作为最终高亮的类别依据，具体而言，会体现在一个形如 "},{type:b,tag:j,props:{},children:[{type:a,value:"ace_token_name"}]},{type:a,value:" 的 css class 上。而我们的目的是使得 "},{type:b,tag:j,props:{},children:[{type:a,value:"msck"}]},{type:a,value:" 像关键词那样高亮，故直接用模式中已经定义的 "},{type:b,tag:j,props:{},children:[{type:a,value:"keyword"}]},{type:a,value:" 作为 token。而如果想要自定义高亮的样式，可以将 token 命名成某个自定义的名称，比如 'customized-keyword'，而后通过 css 类 "},{type:b,tag:j,props:{},children:[{type:a,value:"ace_customized-keyword"}]},{type:a,value:" 来自定义样式。"}]},{type:a,value:e},{type:b,tag:u,props:{id:I},children:[{type:b,tag:m,props:{href:am,ariaHidden:p,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:an,props:{},children:[{type:a,value:e},{type:b,tag:_,props:{},children:[{type:b,tag:m,props:{href:"https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F39353174\u002Fhow-do-i-add-new-highlight-rules-at-runtime-with-ace-code-editor",rel:[P,Q,R],target:S},children:[{type:a,value:"How do I add new highlight rules at runtime with Ace Code Editor?"}]}]},{type:a,value:e},{type:b,tag:_,props:{},children:[{type:b,tag:m,props:{href:"https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F25213824\u002Face-editor-non-capturing-group-issue",rel:[P,Q,R],target:S},children:[{type:a,value:"ace editor non capturing group issue"}]}]},{type:a,value:e}]}]},dir:ao,path:"\u002F2021-011",extension:ap,createdAt:N,updatedAt:N},snackbar:false,snackbarText:"",starredFeedbackArr:["You've already starred!","U've already starred : )","Stop! Stop your repeatedly boring behavior!","Waahoo!"]},serverRendered:true,routePath:"\u002Fwhat-doesnt-kill-you\u002F2021-012",config:{_app:{basePath:"\u002Fboring-blogs\u002F",assetsPath:"\u002Fboring-blogs\u002F_nuxt\u002F",cdnURL:ay},content:{dbHash:"265f36a8"}}}}("text","element","span","color: #24292F","\n","line","color: #0550AE","color: #CF222E"," ","code","color: #8250DF","  ","a","p","color: #0A3069","true","color: #953800",";",",",2,"h2",-1,"icon","icon-link",", ","=","this","50",": ","(","preface","Preface","show-code","Show Code","reference","Reference","div","const","();","2022-03-02T04:33:55.565Z","color: #116329","nofollow","noopener","noreferrer","_blank"," {",");","\u003E","nuxt-content-highlight","pre","shiki","background-color: #ffffff","li","analysis","Analysis","}","import","    ","        ","          ","color: #6E7781","13","what-doesnt-kill-you","root","#preface","#show-code","#reference","ul","\u002F",".md","px","background-color","rgba","background-clip","null","      ","    }"," (",null,"那些杀不死我的","assorted-harvest","() {",".editor.","#analysis","content-box","0.06","MSCK","\u003C","template","\"editor\"","\u003C\u002F","script","() ","{","initializeEditor","        });","setMode","\"ace\u002Fmode\u002Fsql\"","function"," () {","rules"," session.$mode.$highlightRules.","getRules","for","stateName","in"," rules) {","unshift","({","\"keyword\"","\"msck\"","\u002F\u002F force recreation of tokenizer","          session.bgTokenizer.","setTokenizer","(session.$mode.","getTokenizer","());","\u002F\u002F force re-highlight whole document","start","0","  }","  session.bgTokenizer."," 还是 "));