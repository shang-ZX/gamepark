(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a1fc27a"],{"24e0":function(t,e,n){"use strict";var s=n("fd37"),i=n.n(s);i.a},"57da":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Homeup"),n("h1",[t._v("最新游戏")]),n("ul",{staticClass:"homeul"},t._l(t.$store.state.game,(function(e,s){return n("li",{key:e.img},[n("div",{staticClass:"shadow"},[n("img",{attrs:{src:t.$store.state.baseUrl+"images/"+e.img},on:{mouseover:function(e){return t.mover(s)}}}),n("div",{staticClass:"licontent",attrs:{id:s},on:{mouseout:function(e){return t.mout(s)}}},[n("h1",[t._v(t._s(e.content))]),n("h3",[t._v(t._s(e.present))])]),n("div",{staticClass:"lidiv"},[n("h2",[t._v(t._s(e.content))]),n("h3",[t._v(t._s(t._f("pricefilter")(e.price)))]),n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.common.todetails(s,e)}}},[t._v("查看详情")])],1)])])})),0)],1)},i=[],a=n("653a"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeup"},[n("div",{staticClass:"cont"},[n("div",{staticClass:"img",staticStyle:{left:"0px"},attrs:{id:"img"}},t._l(t.$store.state.game,(function(e,s){return n("img",{key:e.img,attrs:{src:t.$store.state.baseUrl+"images/"+e.img},on:{click:function(n){return t.common.todetails(s,e)}}})})),0),n("div",{staticClass:"spot",attrs:{id:"spot"}},[n("span",{class:{on:t.isspot[0]}}),n("span",{class:{on:t.isspot[1]}}),n("span",{class:{on:t.isspot[2]}})])]),n("div",{staticClass:"lr"},[n("img",{attrs:{src:t.$store.state.baseUrl+"images/left.png",id:"left"}}),n("img",{attrs:{src:t.$store.state.baseUrl+"images/right.png",id:"right"}})])])},r=[],c=(n("e25e"),n("a026")),l={name:"homeup",data:function(){return{isspot:[!0,!1,!1]}},store:a["a"],mounted:function(){var t=this,e=document.getElementById("img"),n=document.getElementById("left"),s=document.getElementById("right");function i(n){var s=parseInt(e.style.left)+n;s<-2400&&(s=0),s>0&&(s=-2400),e.style.left=s+"px";var i=-s/1200;for(var a in t.isspot)c["default"].set(t.isspot,a,!1);c["default"].set(t.isspot,i,!0)}function a(){setInterval((function(){i(-1200)}),3e3)}n.onclick=function(){i(1200)},s.onclick=function(){i(-1200)},a()}},u=l,m=(n("24e0"),n("2877")),f=Object(m["a"])(u,o,r,!1,null,null,null),d=f.exports,p=(n("440a"),{name:"home",store:a["a"],components:{Homeup:d},methods:{mover:function(t){document.getElementById(t).style.display="inline"},mout:function(t){document.getElementById(t).style.display="none"}}}),v=p,g=(n("8b71"),Object(m["a"])(v,s,i,!1,null,null,null));e["default"]=g.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var s=n("1d80"),i=n("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),c=function(t){return function(e){var n=String(s(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"88d7":function(t,e,n){},"8b71":function(t,e,n){"use strict";var s=n("88d7"),i=n.n(s);i.a},e25e:function(t,e,n){var s=n("23e7"),i=n("e583");s({global:!0,forced:parseInt!=i},{parseInt:i})},e583:function(t,e,n){var s=n("da84"),i=n("58a8").trim,a=n("5899"),o=s.parseInt,r=/^[+-]?0[Xx]/,c=8!==o(a+"08")||22!==o(a+"0x16");t.exports=c?function(t,e){var n=i(String(t));return o(n,e>>>0||(r.test(n)?16:10))}:o},fd37:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0a1fc27a.f75a07a5.js.map