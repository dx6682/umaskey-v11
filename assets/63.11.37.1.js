(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1063:function(e,t,a){"use strict";var s=a(789);a.n(s).a},1064:function(e,t,a){(t=a(4)(!1)).push([e.i,"main>.signed-in-as[data-v-4eb34315]{margin:16px;padding:16px;text-align:center;color:var(--mobileSignedInAsFg);background:var(--mobileSignedInAsBg);font-weight:700}main>.signed-in-as.round[data-v-4eb34315]{border-radius:6px}main>.signed-in-as.shadow[data-v-4eb34315]{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}main>.signout[data-v-4eb34315]{margin:16px;padding:16px;text-align:center;color:var(--mobileSignedInAsFg);background:var(--mobileSignedInAsBg)}main>.signout.round[data-v-4eb34315]{border-radius:6px}main>.signout.shadow[data-v-4eb34315]{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}main>footer[data-v-4eb34315]{margin:16px;text-align:center;color:var(--text);opacity:.7}",""]),e.exports=t},1127:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(3),i=a(813),o=a(6),r=s.default.extend({i18n:Object(n.a)("mobile/views/pages/settings.vue"),components:{XSettings:i.a},data:()=>({version:o.l,codename:o.b}),computed:{name(){return s.default.filter("userName")(this.$store.state.i)}},methods:{signout(){this.$root.signout()}}}),d=(a(1063),a(1)),c=Object(d.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mk-ui",{scopedSlots:e._u([{key:"header",fn:function(){return[a("span",{staticStyle:{"margin-right":"4px"}},[a("fa",{attrs:{icon:"cog"}})],1),e._v(e._s(e.$t("@.settings")))]},proxy:!0}])},[a("main",[a("div",{staticClass:"signed-in-as",class:{shadow:e.$store.state.device.useShadow,round:e.$store.state.device.roundedCorners}},[a("mfm",{attrs:{text:e.$t("signed-in-as").replace("{}",e.name),plain:!0,"custom-emojis":e.$store.state.i.emojis}})],1),a("x-settings"),a("div",{staticClass:"signout",class:{shadow:e.$store.state.device.useShadow,round:e.$store.state.device.roundedCorners},on:{click:e.signout}},[e._v(e._s(e.$t("@.signout")))]),a("footer",[a("small",[e._v("ver "+e._s(e.version)+" ("+e._s(e.codename)+")")])])],1)])}),[],!1,null,"4eb34315",null);t.default=c.exports},789:function(e,t,a){var s=a(1064);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(5).default)("2bcedc89",s,!0,{})}}]);
//# sourceMappingURL=63.11.37.1.js.map