(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1125:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a(3),i=a(22),s=n.default.extend({i18n:Object(o.a)("desktop/views/pages/note.vue"),data:()=>({fetching:!0,note:null}),watch:{$route:"fetch"},created(){this.fetch()},methods:{fetch(){i.a.start(),this.fetching=!0,this.$root.api("notes/show",{noteId:this.$route.params.note}).then(t=>{this.note=t,this.fetching=!1,i.a.done()})}}}),r=(a(897),a(1)),c=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.fetching?t._e():a("div",{staticClass:"kcthdwmv"},[a("mk-note-detail",{key:t.note.id,attrs:{note:t.note}}),a("footer",[t.note.next?a("router-link",{attrs:{to:t.note.next}},[a("fa",{attrs:{icon:"angle-left"}}),t._v(" "+t._s(t.$t("next")))],1):t._e(),t.note.prev?a("router-link",{attrs:{to:t.note.prev}},[t._v(t._s(t.$t("prev"))+" "),a("fa",{attrs:{icon:"angle-right"}})],1):t._e()],1)],1)}),[],!1,null,"e5c3baa4",null);e.default=c.exports},747:function(t,e,a){var n=a(898);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(5).default)("4a6e1d39",n,!0,{})},897:function(t,e,a){"use strict";var n=a(747);a.n(n).a},898:function(t,e,a){(e=a(4)(!1)).push([t.i,".kcthdwmv[data-v-e5c3baa4]{text-align:center}.kcthdwmv>footer[data-v-e5c3baa4]{margin-top:16px}.kcthdwmv>footer>a[data-v-e5c3baa4]{display:inline-block;margin:0 16px}",""]),t.exports=e}}]);
//# sourceMappingURL=61.11.37.1.js.map