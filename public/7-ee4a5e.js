(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(t,n,e){var i=e(163);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(21).default)("5993df1e",i,!0,{})},159:function(t,n,e){"use strict";var i=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loading"},[n("img",{attrs:{width:"34",height:"34",src:e(161)}})])}],s=(e(162),e(5)),r=Object(s.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},i,!1,null,"b9ec40c6",null);n.a=r.exports},161:function(t,n,e){t.exports=e.p+"images/loading-55b41.gif"},162:function(t,n,e){"use strict";var i=e(156);e.n(i).a},163:function(t,n,e){(t.exports=e(20)(!1)).push([t.i,".loading[data-v-b9ec40c6] {\n  width: 100%;\n  text-align: center;\n}\n.loading .desc[data-v-b9ec40c6] {\n  line-height: 20px;\n  font-size: 12px;\n  color: #555;\n}\n",""])},164:function(t,n,e){"use strict";e.d(n,"a",function(){return a});e(90),e(91),e(92),e(93),e(94),e(88);var i=e(57),s=e(18);function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}var a={computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(e,!0).forEach(function(n){Object(i.a)(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}({},Object(s.c)("player",["playList"])),mounted:function(){this.handlePlaylist(this.playList)},activated:function(){this.handlePlaylist(this.playList)},watch:{playList:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("handlePlaylist must be defined")}}}},166:function(t,n,e){"use strict";e(165);var i={methods:{recomStart:function(t){this.touchs.isStart=!0,this.touchs.startX=t.touches[0].pageX,this.touchs.cname=this.$route.name},recomMove:function(t){this.touchs.isMove=!0,this.touchs.isStart&&(this.touchs.distanceX=t.touches[0].pageX-this.touchs.startX)},recomEnd:function(t){if(this.touchs.isMove){this.touchs.isStart=!1,this.touchs.isMove=!1;var n=document.documentElement.clientWidth;Math.abs(this.touchs.distanceX)<n/6||("singer"===this.touchs.cname&&(this.touchs.distanceX>0?this.$router.push({path:"/recommend"}):this.$router.push({path:"/rank"})),"rank"===this.touchs.cname&&(this.touchs.distanceX>0?this.$router.push({path:"/singer"}):this.$router.push({path:"/search"})),"recommend"===this.touchs.cname&&this.touchs.distanceX<0&&this.$router.push({path:"/singer"}),"search"===this.touchs.cname&&this.touchs.distanceX>0&&this.$router.push({path:"/rank"}))}else this.touchs={}}},created:function(){this.touchs={}}},s=e(5),r=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{on:{touchstart:this.recomStart,touchmove:this.recomMove,touchend:this.recomEnd}},[this._t("default")],2)},[],!1,null,null,null);n.a=r.exports},172:function(t,n,e){"use strict";e.d(n,"b",function(){return a}),e.d(n,"a",function(){return o});e(158),e(56),e(89);var i=e(13),s=e(160),r=e.n(s),a=function(){var t=Object.assign({},i.b,{uin:0,platform:"h5",needNewCode:1});return r.a.get("/v8/fcg-bin/fcg_myqq_toplist.fcg",{params:t}).then(function(t){if(0===t.data.code)return Promise.resolve(t.data)})},o=function(t){var n=Object.assign({},i.b,{topid:t,uin:0,tpl:3,page:"detail",type:"top",platform:"h5",needNewCode:1});return r.a.get("/v8/fcg-bin/fcg_v8_toplist_cp.fcg",{params:n}).then(function(t){if(0===t.data.code)return Promise.resolve(t.data)})}},173:function(t,n,e){var i=e(226);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(21).default)("3e1f4c2b",i,!0,{})},225:function(t,n,e){"use strict";var i=e(173);e.n(i).a},226:function(t,n,e){(t.exports=e(20)(!1)).push([t.i,".rank[data-v-6f832984] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-6f832984] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-6f832984] {\n  display: flex;\n  margin: 0 20px;\n  padding-top: 10px;\n}\n.rank .toplist .item[data-v-6f832984]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-6f832984] {\n  flex: 0 0 100px;\n  width: 120px;\n}\n.rank .toplist .item .icon img[data-v-6f832984] {\n  border-radius: 0 8px 8px 0;\n}\n.rank .toplist .item .songlist[data-v-6f832984] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 20px;\n  height: 120px;\n  overflow: hidden;\n  background: rgba(230,230,230,0.2);\n  color: #222;\n  font-size: 16px;\n  border-radius: 8px 0 0 8px;\n}\n.rank .toplist .item .songlist .song[data-v-6f832984] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .item .songlist .song .name[data-v-6f832984] {\n  color: #888;\n}\n.rank .toplist .loading-container[data-v-6f832984] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n",""])},247:function(t,n,e){"use strict";e.r(n);e(90),e(91),e(92),e(93),e(94),e(88);var i=e(57),s=e(172),r=e(58),a=e(18),o=e(164),c=e(159),l=e(166);function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}var h={name:"rank",mixins:[o.a],components:{Scroll:r.a,loading:c.a,tabSlide:l.a},data:function(){return{ranklist:[]}},created:function(){this._getRanklist()},methods:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(e,!0).forEach(function(n){Object(i.a)(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}({},Object(a.d)("rankSong",["setRankSong"]),{_getRanklist:function(){var t=this;Object(s.b)().then(function(n){0===n.code&&(t.ranklist=n.data.topList)})},selectItem:function(t){this.setRankSong(t),this.$router.push({path:"/rank/".concat(t.id)})},handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rank.$el.style.bottom=n,this.$refs.toplist.refresh()}})},p=(e(225),e(5)),f=Object(p.a)(h,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tab-slide",{ref:"rank",staticClass:"rank"},[e("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.ranklist}},[e("ul",t._l(t.ranklist,function(n,i){return e("li",{key:i,staticClass:"item",on:{click:function(e){return t.selectItem(n)}}},[e("ol",{staticClass:"songlist"},t._l(n.songList,function(n,i){return e("li",{key:i,staticClass:"song"},[e("span",[t._v(t._s(i+1)+". "+t._s(n.songname))]),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(n.singername))])])}),0),t._v(" "),e("div",{staticClass:"icon"},[e("img",{attrs:{width:"120",height:"120",src:n.picUrl}})])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.ranklist.length,expression:"!ranklist.length"}],staticClass:"loading-container"},[e("loading")],1)]),t._v(" "),e("router-view")],1)},[],!1,null,"6f832984",null);n.default=f.exports}}]);