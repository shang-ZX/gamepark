(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],d=0,m=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0a1fc27a":"f75a07a5","chunk-3d15e897":"704caf58","chunk-482f07a2":"ac720245","chunk-dccda022":"7b109d5f"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0a1fc27a":1,"chunk-3d15e897":1,"chunk-482f07a2":1,"chunk-dccda022":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0a1fc27a":"7d25fa92","chunk-3d15e897":"dc2ca130","chunk-482f07a2":"a1cde571","chunk-dccda022":"8f82669f"}[e]+".css",i=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===i))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){u=m[c],d=u.getAttribute("data-href");if(d===a||d===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=i;var l=document.getElementsByTagName("head")[0];l.appendChild(p)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var m=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var p=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"440a":function(e,t,n){"use strict";var a=n("653a"),r=n("a18c");t["a"]={todetails:function(e,t){var n=!1;if(a["a"].commit("gameid",e),0==a["a"].state.user[a["a"].state.userid].history.length)a["a"].commit("addhistory",t);else{for(var i in a["a"].state.user[a["a"].state.userid].history)if(t.img==a["a"].state.user[a["a"].state.userid].history[i].img){n=!0,a["a"].commit("addhistory2",{item:t,i:i});break}0==n&&a["a"].commit("addhistory",t)}r["a"].push("/details")}}},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("b680"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav",[n("span",{attrs:{slot:"home"},slot:"home"},[n("router-link",{staticClass:"a",attrs:{to:"/home"}},[e._v("主页")])],1),n("span",{attrs:{slot:"list"},slot:"list"},[n("router-link",{staticClass:"a",attrs:{to:"/Shopcar"}},[e._v("购物车")])],1),n("span",{attrs:{slot:"about"},slot:"about"},[n("router-link",{staticClass:"a",attrs:{to:"/about"}},[e._v("关于我")])],1)]),n("router-view"),n("Footer")],1)},i=[],o=(n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[e._m(0),n("div",{staticClass:"navright"},[e._t("home"),e._t("list"),e._t("about")],2)])}),c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navleft"},[e._v("游戏"),n("span",{staticClass:"navspan"},[e._v("公园")])])}],s={name:"Nav"},u=s,d=(n("5b49"),n("2877")),m=Object(d["a"])(u,o,c,!1,null,null,null),p=m.exports,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"span"},[n("span",[e._v("主页"),n("el-divider",{attrs:{direction:"vertical"}}),e._v("购物车"),n("el-divider",{attrs:{direction:"vertical"}}),e._v("关于我")],1),n("br"),n("span",[e._v("游戏公园"),n("el-divider",{attrs:{direction:"vertical"}}),e._v("张锦山 - 广州航海学院")],1)])])},f=[],h={name:"Footer"},g=h,v=(n("760c"),Object(d["a"])(g,l,f,!1,null,null,null)),b=v.exports,y={name:"app",components:{Nav:p,Footer:b},mounted:function(){var e=this;window.addEventListener("load",(function(){"/home"!=e.$route.path&&e.$router.replace("/home")}))}},k=y,j=(n("034f"),Object(d["a"])(k,r,i,!1,null,null,null)),_=j.exports,w=n("440a"),S=n("a18c"),C=n("5c96"),E=n.n(C);n("0fae");a["default"].config.productionTip=!1,a["default"].use(E.a),S["a"].afterEach((function(e,t,n){window.scrollTo(0,0)})),a["default"].prototype.common=w["a"],a["default"].filter("pricefilter",(function(e){return"￥"+e.toFixed(2)})),new a["default"]({render:function(e){return e(_)},router:S["a"]}).$mount("#app")},"58de":function(e,t,n){},"5b49":function(e,t,n){"use strict";var a=n("58de"),r=n.n(a);r.a},"653a":function(e,t,n){"use strict";var a=n("a026"),r=n("2f62"),i={game:[{img:"a1.jpg",content:"神庙逃亡",price:25.9,stock:11,comment:[{id:0,headimg:"si.png",name:"张三",rate:5,content:"神庙逃亡很好玩，建议大家购买来玩玩。"},{id:1,headimg:"si.png",name:"李四",rate:4,content:"不错不错，价格实惠。"},{id:2,headimg:"si.png",name:"吴凯",rate:1,content:"垃圾游戏毁我青春。"}],present:"《神庙逃亡》是由Imangi Studios开发制作的一款跑酷冒险类单机类系列游戏，于2012-7-26发行，内容主题有生存，丛林，冒险等",details:"背景设定:神庙逃亡的场景是，一名冒险家来到古老的庙宇中寻宝，却碰上怪兽的追赶。玩家所需要做的动作只是转弯、跳跃和向后卧倒，\n      需要翻过古庙围墙,爬上悬崖峭壁,在此过程中，你可以晃动设备收集金币。游戏操作很简单易懂，只需要一只手就能玩，但是它又如此困难，任何一\n      个失误你都需要从头再来。游戏内容和大多数跑酷游戏都非常相似，越过重重障碍和陷阱，不断向前飞奔。不过在神庙逃亡里玩家控制的是一个印第\n      安纳琼斯似的人物，在热带雨林的某个古老神庙中逃出，被神庙中一群猴子模样的恶魔守卫追赶。人物是自动不断向前飞奔的，而玩家则需要控制他\n      避开逃亡路上遇到的各种危险。不过和大多数跑酷游戏不同的是，游戏并未采用常见的2D横版画面，取而代之的是全3D的第三人称视角。在每部探险\n      片中,总有这样一幕:英雄最终获得宝藏,但不得不在陷阱丛生的迷宫中穿行,以期活着离开。"},{img:"a2.jpg",content:"暴力摩托",price:20.5,stock:9,comment:[{id:0,headimg:"si.png",name:"张三",rate:4,content:"暴力摩托很好玩，建议大家购买来玩玩。"}],present:"《暴力摩托》是一款与众不同的竞速类游戏，主要人物有：迈克、杰斐逊、塞利娜等。在正式版中，可以使用全部5条赛道、5个游戏级别、8人联机对战。",details:"游戏中玩家扮演的是街头飙车族，有8位比赛选手任君挑选，5个级别速度的比拼向冠军宝座发起冲击。通过进行多场亡命的比赛，\n      赚钱购买属于你梦想中的的跑车。在商店里有废旧摩托车（2999~5489），运动型摩托车（6994~16875）和超级跑车（18999~40000）。在游\n      戏中有三种模式分别是练习模式，比赛模式和网络模式。在比赛中因为你是飙车族，所以比赛时你可以出到拳脚棍棒的手段，不必讲什么体育\n      道德啦。暴力摩托”是一款与众不同的竞速类游戏，它拥有非常逼真的画面和音响效果，如疾驰而过的汽车呼啸声，摩托车的引擎声和转弯时轮\n      胎与地面摩擦而产生的声音。而且它在游戏中加入了对抗成份，比赛中你可以使用拳、脚去干扰对方，使其落后于你，是不是很卑鄙啊？但 游\n      戏中是千万不能手下留情，因为对手也会主动攻击你。如果遇到开摩托车的警察，虽然也可以对他踢上一脚，但可得小心点呀！如果你摔\n      倒了，就回不到车上去了。"},{img:"a3.jpg",content:"愤怒的小鸟",price:33.3,stock:6,comment:[{id:0,headimg:"si.png",name:"张三",rate:5,content:"愤怒的小鸟很好玩，建议大家购买来玩玩。"},{id:1,headimg:"si.png",name:"吴凯",rate:3,content:"害行巴。"}],present:"《愤怒的小鸟》是由Rovio开发的一款休闲益智类游戏，游戏以小鸟报复偷走鸟蛋的肥猪为背景，讲述了小鸟与肥猪的一系列故事。",details:"为了报复偷走鸟蛋的肥猪们，鸟儿以自己的身体为武器，仿佛炮弹一样去攻击肥猪们的堡垒。愤怒的红色小鸟，奋不顾身的往绿色的肥猪\n      的堡垒砸去。游戏的玩法很简单，将弹弓上的小鸟弹出去，砸到绿色的肥猪，将肥猪全部砸到就能过关。鸟儿的弹出角度和力度由玩家的手指来控制，\n      要注意考虑好力度和角度的综合计算，这样才能更准确的砸到肥猪。而被弹出的鸟儿会留下弹射轨迹，可供参考角度和力度的调整。另外每个关卡的分\n      数越多，评价将会越高 。"},{img:"a4.jpg",content:"蜘蛛侠",price:19.9,stock:16,comment:[{id:0,headimg:"si.png",name:"李四",rate:5,content:"蜘蛛侠很好玩，建议大家购买来玩玩。"},{id:1,headimg:"si.png",name:"陈有钱",rate:4,content:"这价格也太便宜了吧？不买个10个怎么对的起自己。"},{id:2,headimg:"si.png",name:"张三",rate:3,content:"楼上的诸位慢慢打，我已经打通了。"}],present:"《蜘蛛侠》是一款角色扮演游戏。2017年6月，在知名游戏娱乐媒体IGN评选的E3各项最佳上，《蜘蛛侠》获得最佳PS4游戏奖及最佳动作游戏奖。",details:"无论是根据影片改编的PC游戏，还是根据漫画书改编的PC游戏，在过去的几年中一直默默无闻，没有引起玩家太大的注意。但是《蜘蛛侠：\n      电影版》这部动作类游戏横空出世，一口气推出了五个不同平台的游戏版本（其中包括电脑游戏），获得了极大的成功，因为该游戏捉住了原作的精髓，\n      成功地塑造出Marvel Comics笔下的超人英雄。当然，该游戏的开发组成员是之前Activision公司推出的电脑游戏《蜘蛛侠》的核心开发者，这是该游\n      戏成功的原因之一。正因为如此，《蜘蛛侠：电影版》虽然拥有许多精美的画面（玩家当然得配置高档的显卡才能享受到超极的视觉效果），却也承袭\n      了原作游戏的部分缺点——镜头移动起来非常地不灵活，虽然PC版游戏中提供了额外的镜头选择。另外，操控也具有一点难度，敌人的AI做得奇差。不过，\n      虽然如此，大多数蜘蛛侠迷们仍然很喜欢在游戏中高空翱翔或是躲在阴暗角落中等候着那些毫无防备的坏人的感觉。正是因为这些逼真的画面，让蜘蛛侠\n      迷们原谅了游戏本身存在的一些小毛病。 如果你以前玩过Activision制作的那部《蜘蛛侠》，那么玩起《蜘蛛侠：电影版》来一定是驾轻就熟，因为这\n      两部游戏的情节基本相似。"},{img:"a5.jpg",content:"地铁跑酷",price:36.6,stock:19,comment:[{id:0,headimg:"si.png",name:"张三",rate:5,content:"地铁跑酷很好玩，建议大家购买来玩玩。"},{id:1,headimg:"si.png",name:"李四",rate:3,content:"价格实惠。"}],present:"《地铁跑酷》是一款由Kiloo Games公司开发发行的在iOS、Android平台上上线的益智休闲手机游戏，游戏于2012年10月发行。",details:"该游戏是一款堪比神庙逃亡的经典跑酷游戏。游戏的画面绚丽精致，色彩繁多让人感觉很舒服，在操作上非常顺畅，并且干净利落。通过简\n      单的向上划，向下划，向左向右划来躲避障碍和迎面而来的火车，帮助主人公躲避脾气暴躁的警察和他的狗的追捕。在空中也可以左右改变方向，还可\n      以通过双击屏幕调出滑板，在有限的时间里相当于增加一次生命。游戏中还包含了如弹簧鞋等多种道具。"},{img:"a6.jpg",content:"钢铁侠3",price:11.1,stock:8,comment:[{id:0,headimg:"si.png",name:"张三",rate:5,content:"钢铁侠3很好玩，建议大家购买来玩玩。"},{id:1,headimg:"si.png",name:"陈有钱",rate:4,content:"这价格也太便宜了吧？不买个10个怎么对的起自己。"}],present:"《钢铁侠3》是一款动作游戏，节奏明快、极速飞行、不停奔跑、即将上映的电影官方授权游戏中，成为亿万富翁 Tony Stark ，扮演钢铁人Iron Man！",details:"钢铁侠3 [1]  （Iron Man 3 - The official game）是一款动作游戏，节奏明快、极速飞行、不停奔跑、即将上映的电影官方授权游戏\n      中，成为亿万富翁 Tony Stark ，扮演钢铁人Iron Man！在 Iron Man 3 (铁甲奇侠3/钢铁人3)事件之后，Tony Stark 成为和平守护者，但新的威胁\n      经常出现在世界各地，能够解决这些威胁的只有钢铁人Iron Man。 准备迎接这款免费、令人上瘾且无止境的 3D 奔跑游戏中的刺激动作！最受期待的超\n      级英雄电影官方授权免费游戏！"},{img:"a7.jpg",content:"山脊赛车",price:22.4,stock:12,comment:[{id:0,headimg:"si.png",name:"张三",rate:5,content:"山脊赛车很好玩，建议大家购买来玩玩。"},{id:1,headimg:"si.png",name:"李四",rate:4,content:"不错不错，价格实惠。"}],present:"《山脊赛车》是一款集合了系列众多作品精华的游戏。目标很简单，就是领先其他车辆跑到终点即可。",details:"本作是PSP首发游戏《山脊赛车》的续作，游戏收录了前作中的赛道以并新增了多条赛道，使总数达到系列最多的42条(包含逆向赛道)，\n      其中还囊括了《山脊赛车：革命》、《山脊赛车》、《山脊赛车4》的全部赛道。本作中收录的车种在前作的54种的基础上新增8款特别车辆。此外还\n      将新增“街机”、“决斗”、“生存”三大游戏模式，而必不可少的动听BGM乐曲也将增加至42首。前作中备受好评的“氮气加速”系统仍将在本作中予以保\n      留，“世界之旅”模式也将会在本作中登场，而且还加入了供短时间游戏的关卡以及新赛道。在“世界之旅”模式的另一大魅力所在“委托巡游”中，玩家\n      可以通过设定时间体验原创的巡游历程。通过无线通信，本作支持最多8位玩家同时进行比赛。"},{img:"a8.jpg",content:"愤怒的小鸟2",price:30,stock:2,comment:[{id:0,headimg:"si.png",name:"张三",rate:5,content:"愤怒的小鸟2很好玩，建议大家购买来玩玩。"},{id:1,headimg:"si.png",name:"李四",rate:4,content:"好评不解释。"}],present:"《愤怒的小鸟2》是由Rovio开发的一款休闲益智类游戏，游戏以小鸟报复偷走鸟蛋的肥猪为背景，讲述了小鸟与肥猪的一系列故事。",details:"为了报复偷走鸟蛋的肥猪们，鸟儿以自己的身体为武器，仿佛炮弹一样去攻击肥猪们的堡垒。愤怒的红色小鸟，奋不顾身的往绿色的肥猪\n      的堡垒砸去。游戏的玩法很简单，将弹弓上的小鸟弹出去，砸到绿色的肥猪，将肥猪全部砸到就能过关。鸟儿的弹出角度和力度由玩家的手指来控制，\n      要注意考虑好力度和角度的综合计算，这样才能更准确的砸到肥猪。而被弹出的鸟儿会留下弹射轨迹，可供参考角度和力度的调整。另外每个关卡的分\n      数越多，评价将会越高 。"},{img:"a9.jpg",content:"神庙逃亡2",price:29.9,stock:14,comment:[{id:0,headimg:"si.png",name:"张三",rate:5,content:"神庙逃亡2很好玩，建议大家购买来玩玩。"},{id:1,headimg:"si.png",name:"李四",rate:4,content:"害行，价格便宜。"}],present:"《神庙逃亡2》是由Imangi Studios开发制作的一款跑酷冒险类单机类系列游戏，于2012-7-26发行，内容主题有生存，丛林，冒险等",details:"背景设定:神庙逃亡的场景是，一名冒险家来到古老的庙宇中寻宝，却碰上怪兽的追赶。玩家所需要做的动作只是转弯、跳跃和向后卧倒，\n      需要翻过古庙围墙,爬上悬崖峭壁,在此过程中，你可以晃动设备收集金币。游戏操作很简单易懂，只需要一只手就能玩，但是它又如此困难，任何一\n      个失误你都需要从头再来。游戏内容和大多数跑酷游戏都非常相似，越过重重障碍和陷阱，不断向前飞奔。不过在神庙逃亡里玩家控制的是一个印第\n      安纳琼斯似的人物，在热带雨林的某个古老神庙中逃出，被神庙中一群猴子模样的恶魔守卫追赶。人物是自动不断向前飞奔的，而玩家则需要控制他\n      避开逃亡路上遇到的各种危险。不过和大多数跑酷游戏不同的是，游戏并未采用常见的2D横版画面，取而代之的是全3D的第三人称视角。在每部探险\n      片中,总有这样一幕:英雄最终获得宝藏,但不得不在陷阱丛生的迷宫中穿行,以期活着离开。"}],game2:[{img:"b1.jpg",content:"蜘蛛侠",price:19.9,present:"《蜘蛛侠》是一款角色扮演游戏。2017年6月，在知名游戏娱乐媒体IGN评选的E3各项最佳上，《蜘蛛侠》获得最佳PS4游戏奖及最佳动作游戏奖。"},{img:"b2.jpg",content:"神庙逃亡",price:12.5,present:"《神庙逃亡》是由Imangi Studios开发制作的一款跑酷冒险类单机类系列游戏，于2012-7-26发行，内容主题有生存，丛林，冒险等"},{img:"b3.jpg",content:"地铁跑酷",price:20,present:"《地铁跑酷》是一款由Kiloo Games公司开发发行的在iOS、Android平台上上线的益智休闲手机游戏，游戏于2012年10月发行。"},{img:"b4.jpg",content:"蝙蝠侠",price:21.1,present:"在游戏中玩家可以从蝙蝠侠和罗宾之中选择一名角色与经典的老对手们进行一番较量。能够直接控制那些在原作中无恶不作的恶棍与蝙蝠侠和罗宾对抗。"},{img:"b5.jpg",content:"愤怒的小鸟",price:18.7,present:"《愤怒的小鸟》是由Rovio开发的一款休闲益智类游戏，游戏以小鸟报复偷走鸟蛋的肥猪为背景，讲述了小鸟与肥猪的一系列故事。"},{img:"b6.jpg",content:"刺客信条",price:16.6,present:"其游戏故事背景发生在古老的埃及，作为世界上历史最悠久的文明古国之一，它一直在人们的印象中扮演着神秘的角色，黄沙满地的荒漠中矗立起的宏伟金字塔和狮身人面像，横跨城市的尼罗河，加上全身金闪闪的法老，"}],user:[{name:"李三光",headimg:"team-2.jpg",shopcar:[],order:[],history:[]},{name:"李四光",headimg:"team-1.jpg",shopcar:[],order:[],history:[]}],gameid:"",userid:0,baseUrl:""},o=(n("a434"),{gameid:function(e,t){e.gameid=t},addcomment:function(e,t){e.game[t.id].comment.push(t.obj)},addshopcar:function(e,t){e.user[e.userid].shopcar.push(t)},addnum:function(e,t){e.user[e.userid].shopcar[t].num++},remove:function(e,t){e.user[e.userid].shopcar.splice(t,1)},addhistory:function(e,t){e.user[e.userid].history.unshift(t)},addhistory2:function(e,t){e.user[e.userid].history.splice(t.i,1),e.user[e.userid].history.unshift(t.item)},buy:function(e,t){for(var n in e.user[e.userid].order.push(t.order),t.id)e.game[t.id[n]].stock-=t.order.content[n].num;e.user[e.userid].shopcar.splice(0)},shop:function(e,t){e.user[e.userid].order.push(t.order),e.game[t.id].stock--},deleteorder:function(e,t){e.user[e.userid].order.splice(t,1)},numberChange:function(e,t){e.user[e.userid].shopcar[t.i].num=t.value},uesrswitch:function(e,t){e.userid=t},zero:function(e,t){e.user[e.userid].shopcar[t].num=0}});a["default"].use(r["a"]);var c=new r["a"].Store({state:i,mutations:o,getters:{},actions:{},modules:{}});t["a"]=c},"760c":function(e,t,n){"use strict";var a=n("c3f5"),r=n.n(a);r.a},"85ec":function(e,t,n){},a18c:function(e,t,n){"use strict";var a=n("8c4f"),r=n("a026"),i=(n("d3b7"),function(){return n.e("chunk-0a1fc27a").then(n.bind(null,"57da"))}),o=function(){return n.e("chunk-dccda022").then(n.bind(null,"b613"))},c=function(){return n.e("chunk-3d15e897").then(n.bind(null,"84ba"))},s=function(){return n.e("chunk-482f07a2").then(n.bind(null,"2959"))},u=[{path:"",redirect:"/home",meta:{title:"首页"}},{path:"/home",component:i,meta:{title:"首页"}},{path:"/Shopcar",component:o,meta:{title:"购物车"}},{path:"/about",component:c,meta:{title:"关于我"}},{path:"/details",component:s,meta:{title:"游戏详情"}}];r["default"].use(a["a"]);var d=new a["a"]({routes:u});d.beforeEach((function(e,t,n){document.title=e.matched[0].meta.title,n()}));t["a"]=d},c3f5:function(e,t,n){}});
//# sourceMappingURL=app.117d907c.js.map