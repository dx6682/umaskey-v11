(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1124:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(3),o=n(23),a=n(457),r=i.default.extend({i18n:Object(s.a)("desktop/views/pages/search.vue"),data(){return{pagination:{endpoint:"notes/search",limit:20,params:()=>Object(a.a)(this,this.q)}}},computed:{q(){return this.$route.query.q}},watch:{$route(){this.$refs.timeline.reload()}},mounted(){document.addEventListener("keydown",this.onDocumentKeydown),window.addEventListener("scroll",this.onScroll,{passive:!0}),o.a.start()},beforeDestroy(){document.removeEventListener("keydown",this.onDocumentKeydown),window.removeEventListener("scroll",this.onScroll)},methods:{onDocumentKeydown(e){"INPUT"!=e.target.tagName&&"TEXTAREA"!=e.target.tagName&&84==e.which&&this.$refs.timeline.focus()},inited(){o.a.done()}}}),d=(n(897),n(1)),c=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mk-notes",{ref:"timeline",attrs:{pagination:e.pagination},on:{inited:e.inited},scopedSlots:e._u([{key:"header",fn:function(){return[n("header",{staticClass:"oxgbmvii"},[n("span",[n("fa",{attrs:{icon:"search"}}),e._v(" "+e._s(e.q))],1)])]},proxy:!0}])})],1)}),[],!1,null,"04eb3e1f",null);t.default=c.exports},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(19),s=n(6);async function o(e,t){let n,o;if(t.split(" ").some(e=>e.startsWith("@")))for(const a of t.split(" ").filter(e=>e.startsWith("@")).map(e=>e.substr(1)))if(a.includes("."))n=a===s.e||"."===a?null:a;else{const t=await e.$root.api("users/show",Object(i.a)(a)).catch(e=>null);t&&(o=t.id)}return{query:t.split(" ").filter(e=>!e.startsWith("/")&&!e.startsWith("@")).join(" "),host:n,userId:o}}},746:function(e,t,n){var i=n(898);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(5).default)("6d7422af",i,!0,{})},897:function(e,t,n){"use strict";var i=n(746);n.n(i).a},898:function(e,t,n){(t=n(4)(!1)).push([e.i,".oxgbmvii[data-v-04eb3e1f]{padding:0 8px;z-index:10;background:var(--faceHeader);box-shadow:0 var(--lineWidth) var(--desktopTimelineHeaderShadow)}.oxgbmvii>span[data-v-04eb3e1f]{padding:0 8px;font-size:.9em;line-height:42px;color:var(--text)}",""]),e.exports=t}}]);
//# sourceMappingURL=55.11.37.1.js.map