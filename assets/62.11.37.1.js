(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1133:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(3),i=a(23),r=n.default.extend({i18n:Object(o.a)("desktop/views/pages/tag.vue"),computed:{pagination(){return{endpoint:"notes/search-by-tag",limit:20,params:{tag:this.$route.params.tag}}}},mounted(){document.addEventListener("keydown",this.onDocumentKeydown),i.a.start()},beforeDestroy(){document.removeEventListener("keydown",this.onDocumentKeydown)},methods:{onDocumentKeydown(e){"INPUT"!=e.target.tagName&&"TEXTAREA"!=e.target.tagName&&84==e.which&&this.$refs.timeline.focus()},inited(){i.a.done()}}}),s=(a(907),a(1)),d=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("mk-notes",{ref:"timeline",attrs:{pagination:e.pagination},on:{loaded:e.inited},scopedSlots:e._u([{key:"header",fn:function(){return[a("header",{staticClass:"wqraeznr"},[a("span",[a("fa",{attrs:{icon:"hashtag"}}),e._v(" "+e._s(e.$route.params.tag))],1)])]},proxy:!0}])})],1)}),[],!1,null,"55e7a22f",null);t.default=d.exports},755:function(e,t,a){var n=a(908);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(5).default)("1a560a02",n,!0,{})},907:function(e,t,a){"use strict";var n=a(755);a.n(n).a},908:function(e,t,a){(t=a(4)(!1)).push([e.i,".wqraeznr[data-v-55e7a22f]{padding:0 8px;z-index:10;background:var(--faceHeader);box-shadow:0 var(--lineWidth) var(--desktopTimelineHeaderShadow)}.wqraeznr>span[data-v-55e7a22f]{padding:0 8px;font-size:.9em;line-height:42px;color:var(--text)}",""]),e.exports=t}}]);
//# sourceMappingURL=62.11.37.1.js.map