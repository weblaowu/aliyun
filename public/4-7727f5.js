(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{156:function(t,e,n){var i=n(163);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(21).default)("5993df1e",i,!0,{})},159:function(t,e,n){"use strict";var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("img",{attrs:{width:"34",height:"34",src:n(161)}})])}],r=(n(162),n(5)),s=Object(r.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},i,!1,null,"b9ec40c6",null);e.a=s.exports},161:function(t,e,n){t.exports=n.p+"images/loading-55b41.gif"},162:function(t,e,n){"use strict";var i=n(156);n.n(i).a},163:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,".loading[data-v-b9ec40c6] {\n  width: 100%;\n  text-align: center;\n}\n.loading .desc[data-v-b9ec40c6] {\n  line-height: 20px;\n  font-size: 12px;\n  color: #555;\n}\n",""])},164:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(90),n(91),n(92),n(93),n(94),n(88);var i=n(57),r=n(18);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}var a={computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){Object(i.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(r.c)("player",["playList"])),mounted:function(){this.handlePlaylist(this.playList)},activated:function(){this.handlePlaylist(this.playList)},watch:{playList:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("handlePlaylist must be defined")}}}},166:function(t,e,n){"use strict";n(165);var i={methods:{recomStart:function(t){this.touchs.isStart=!0,this.touchs.startX=t.touches[0].pageX,this.touchs.cname=this.$route.name},recomMove:function(t){this.touchs.isMove=!0,this.touchs.isStart&&(this.touchs.distanceX=t.touches[0].pageX-this.touchs.startX)},recomEnd:function(t){if(this.touchs.isMove){this.touchs.isStart=!1,this.touchs.isMove=!1;var e=document.documentElement.clientWidth;Math.abs(this.touchs.distanceX)<e/6||("singer"===this.touchs.cname&&(this.touchs.distanceX>0?this.$router.push({path:"/recommend"}):this.$router.push({path:"/rank"})),"rank"===this.touchs.cname&&(this.touchs.distanceX>0?this.$router.push({path:"/singer"}):this.$router.push({path:"/search"})),"recommend"===this.touchs.cname&&this.touchs.distanceX<0&&this.$router.push({path:"/singer"}),"search"===this.touchs.cname&&this.touchs.distanceX>0&&this.$router.push({path:"/rank"}))}else this.touchs={}}},created:function(){this.touchs={}}},r=n(5),s=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{on:{touchstart:this.recomStart,touchmove:this.recomMove,touchend:this.recomEnd}},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},170:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o});n(158),n(56),n(89);var i=n(13),r=n(160),s=n.n(r),a=function(){var t=Object.assign({},i.b,{hostUin:0,needNewCode:0,platform:"yqq.json",page:"list",channel:"singer",key:"all_all_all",pagesize:100,pagenum:1});return s.a.get("/v8/fcg-bin/v8.fcg",{params:t}).then(function(t){return Promise.resolve(t.data)}).catch(function(t){console.log(t)})},o=function(t){var e=Object.assign({},i.b,{singermid:t,hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:100,songstatus:1});return s.a.get("/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",{params:e}).then(function(t){return Promise.resolve(t.data)}).catch(function(t){console.log(t)})}},171:function(t,e,n){var i=n(224);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(21).default)("c341d908",i,!0,{})},194:function(t,e,n){"use strict";var i,r,s=n(99),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,l=(i=/a/,r=/b*/g,a.call(i,"a"),a.call(r,"a"),0!==i.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var e,n,i,r,c=this;return u&&(n=new RegExp("^"+c.source+"$(?!\\s)",s.call(c))),l&&(e=c.lastIndex),i=a.call(c,t),l&&i&&(c.lastIndex=c.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i}),t.exports=c},216:function(t,e,n){"use strict";var i=n(9),r=n(27).map;i({target:"Array",proto:!0,forced:!n(41)("map")},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},217:function(t,e,n){"use strict";var i=n(9),r=n(26),s=n(25),a=n(3),o=n(96),c=[].sort,l=[1,2,3],u=a(function(){l.sort(void 0)}),h=a(function(){l.sort(null)}),f=o("sort");i({target:"Array",proto:!0,forced:u||!h||f},{sort:function(t){return void 0===t?c.call(s(this)):c.call(s(this),r(t))}})},218:function(t,e,n){"use strict";var i=n(219),r=n(6),s=n(22),a=n(39),o=n(220),c=n(222);i("match",1,function(t,e,n){return[function(e){var n=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),l=String(this);if(!a.global)return c(a,l);var u=a.unicode;a.lastIndex=0;for(var h,f=[],p=0;null!==(h=c(a,l));){var d=String(h[0]);f[p]=d,""===d&&(a.lastIndex=o(l,s(a.lastIndex),u)),p++}return 0===p?null:f}]})},219:function(t,e,n){"use strict";var i=n(15),r=n(14),s=n(3),a=n(2),o=n(194),c=a("species"),l=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),u=!s(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]});t.exports=function(t,e,n,h){var f=a(t),p=!s(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),d=p&&!s(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[f](""),!e});if(!p||!d||"replace"===t&&!l||"split"===t&&!u){var g=/./[f],v=n(f,""[t],function(t,e,n,i,r){return e.exec===o?p&&!r?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=v[0],x=v[1];r(String.prototype,t,m),r(RegExp.prototype,f,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)}),h&&i(RegExp.prototype[f],"sham",!0)}}},220:function(t,e,n){"use strict";var i=n(221).charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},221:function(t,e,n){var i=n(61),r=n(39),s=function(t){return function(e,n){var s,a,o=String(r(e)),c=i(n),l=o.length;return c<0||c>=l?t?"":void 0:(s=o.charCodeAt(c))<55296||s>56319||c+1===l||(a=o.charCodeAt(c+1))<56320||a>57343?t?o.charAt(c):s:t?o.slice(c,c+2):a-56320+(s-55296<<10)+65536}};t.exports={codeAt:s(!1),charAt:s(!0)}},222:function(t,e,n){var i=n(16),r=n(194);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var s=n.call(t,e);if("object"!=typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},223:function(t,e,n){"use strict";var i=n(171);n.n(i).a},224:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,".singer[data-v-07a41f00] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}\n.singer .slide-enter-active[data-v-07a41f00],\n.singer .slide-leave-active[data-v-07a41f00] {\n  transition: all 0.5s;\n}\n.singer .slide-enter[data-v-07a41f00],\n.singer .slide-leave-to[data-v-07a41f00] {\n  transform: translateX(100%);\n}\n.singer .listview[data-v-07a41f00] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #fff;\n}\n.singer .listview .list-group[data-v-07a41f00] {\n  padding-bottom: 30px;\n}\n.singer .listview .list-group .list-group-title[data-v-07a41f00] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: #555;\n  background: #f2f2f2;\n}\n.singer .listview .list-group .list-group-item[data-v-07a41f00] {\n  display: flex;\n  align-items: center;\n  padding: 20px 0 0 30px;\n}\n.singer .listview .list-group .list-group-item .avatar[data-v-07a41f00] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n}\n.singer .listview .list-group .list-group-item .name[data-v-07a41f00] {\n  margin-left: 20px;\n  color: #555;\n  font-size: 16px;\n}\n.singer .listview .list-shortcut[data-v-07a41f00] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(200,200,200,0.1);\n  font-family: Helvetica;\n}\n.singer .listview .list-shortcut .item[data-v-07a41f00] {\n  padding: 3px;\n  line-height: 1;\n  color: #333;\n  font-size: 12px;\n}\n.singer .listview .list-shortcut .item.current[data-v-07a41f00] {\n  color: #31c27c;\n}\n.singer .listview .list-fixed[data-v-07a41f00] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.singer .listview .list-fixed .fixed-title[data-v-07a41f00] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: #555;\n  background: #333;\n}\n.singer .listview .loading-container[data-v-07a41f00] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: translateY(100%);\n}\n",""])},246:function(t,e,n){"use strict";n.r(e);n(90),n(95),n(91),n(216),n(97),n(217),n(92),n(93),n(94),n(218),n(88);var i=n(57),r=n(58),s=n(159),a=n(170),o=n(18),c=n(164),l=n(166);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}var h={name:"singer",mixins:[c.a],data:function(){return{singerlist:[]}},computed:{getCheckIndex:function(){return this.singerlist.map(function(t,e){return t.title.slice(0,1)})}},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){Object(i.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(o.d)("singer",["setSinger"]),{_getSingerlist:function(){var t=this;Object(a.a)().then(function(e){t.singerlist=t.sortSingerlist(e.data.list)})},sortSingerlist:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,n){n<10&&e.hot.items.push({Fid:t.Fsinger_mid,sname:t.Fsinger_name,headImg:"http://y.gtimg.cn/music/photo_new/T001R300x300M000".concat(t.Fsinger_mid,".jpg?max_age=2592000")});var i=t.Findex;e[i]||(e[i]={title:i,items:[]}),e[i].items.push({Fid:t.Fsinger_mid,sname:t.Fsinger_name,headImg:"http://y.gtimg.cn/music/photo_new/T001R300x300M000".concat(t.Fsinger_mid,".jpg?max_age=2592000")})});var n=[],i=[];for(var r in e){var s=e[r];s.title.match(/[a-zA-Z]/)?i.push(s):"热门"===s.title&&n.push(s)}return i.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),n.concat(i)},selectSinger:function(t){this.setSinger(t),this.$router.push({path:"/singer/".concat(t.Fid)})},handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.singer.$el.style.bottom=e,this.$refs.listview.refresh()},scrollTo:function(t){var e=this.$refs.listGroup[t];this.$refs.listview.scrollToElement(e)}}),created:function(){this._getSingerlist()},components:{scroll:r.a,loading:s.a,tabSlide:l.a}},f=(n(223),n(5)),p=Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tab-slide",{ref:"singer",staticClass:"singer"},[n("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.singerlist}},[n("ul",t._l(t.singerlist,function(e,i){return n("li",{key:i,ref:"listGroup",refInFor:!0,staticClass:"list-group"},[n("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),n("ul",t._l(e.items,function(e,i){return n("li",{key:i,staticClass:"list-group-item",on:{click:function(n){return t.selectSinger(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.headImg,expression:"item.headImg"}],staticClass:"avatar",attrs:{alt:""}}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(e.sname))])])}),0)])}),0),t._v(" "),n("div",{staticClass:"list-shortcut"},[n("ul",t._l(t.getCheckIndex,function(e,i){return n("li",{key:i,staticClass:"item",on:{click:function(e){return t.scrollTo(i)}}},[t._v(t._s(e))])}),0)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.singerlist.length,expression:"!singerlist.length"}],staticClass:"loading-container"},[n("loading")],1)]),t._v(" "),n("transition",{attrs:{name:"slide"}},[n("router-view")],1)],1)},[],!1,null,"07a41f00",null);e.default=p.exports}}]);