(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1073:function(t,e,i){"use strict";var a=i(798);i.n(a).a},1074:function(t,e,i){(e=i(4)(!1)).push([t.i,"main[data-v-041d7c72]{margin:0 auto;padding:8px;max-width:500px;width:100%}@media (min-width:500px){main[data-v-041d7c72]{padding:16px 8px}}@media (min-width:600px){main[data-v-041d7c72]{padding:32px 8px}}main>header[data-v-041d7c72]{padding:8px;background:#fff}main .widget[data-v-041d7c72]{margin-bottom:8px}@media (min-width:600px){main .widget[data-v-041d7c72]{margin-bottom:16px}}main .customize-container[data-v-041d7c72]{margin:8px;background:#fff}main .customize-container>header[data-v-041d7c72]{line-height:32px;background:#eee}main .customize-container>header>.handle[data-v-041d7c72]{padding:0 8px}main .customize-container>header>.remove[data-v-041d7c72]{position:absolute;top:0;right:0;padding:0 8px;line-height:32px}main .customize-container>div[data-v-041d7c72]{padding:8px}main .customize-container>div>*[data-v-041d7c72]{pointer-events:none}",""]),t.exports=e},1136:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i(3),o=i(465),s=i(16),d=a.default.extend({i18n:Object(n.a)("mobile/views/pages/widgets.vue"),components:{XDraggable:o},data:()=>({showNav:!1,customizing:!1,widgetAdderSelected:null}),computed:{widgets(){return this.$store.getters.mobileHome||[]}},created(){0==this.widgets.length&&this.$store.commit("setMobileHome",[{name:"calendar",id:"a",data:{}},{name:"activity",id:"b",data:{}},{name:"rss",id:"c",data:{}},{name:"photo-stream",id:"d",data:{}},{name:"nav",id:"f",data:{}},{name:"version",id:"g",data:{}}])},mounted(){document.title=this.$root.instanceName},methods:{hint(){this.$root.dialog({type:"info",text:this.$t("widgets-hints")})},widgetFunc(t){const e=this.$refs[t][0];e.func&&e.func()},onWidgetSort(){this.saveHome()},addWidget(){null!=this.widgetAdderSelected&&this.$store.commit("addMobileHomeWidget",{name:this.widgetAdderSelected,id:Object(s.v4)(),data:{}})},removeWidget(t){this.$store.commit("removeMobileHomeWidget",t)},saveHome(){this.$store.commit("setMobileHome",this.widgets)}}}),r=(i(1073),i(1)),c=Object(r.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mk-ui",{scopedSlots:t._u([{key:"header",fn:function(){return[i("span",{staticStyle:{"margin-right":"4px"}},[i("fa",{attrs:{icon:"home"}})],1),t._v(t._s(t.$t("dashboard")))]},proxy:!0},{key:"func",fn:function(){return[i("button",{on:{click:function(e){t.customizing=!t.customizing}}},[i("fa",{attrs:{icon:"cog"}})],1)]},proxy:!0}])},[i("main",[t.customizing?[i("header",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.widgetAdderSelected,expression:"widgetAdderSelected"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.widgetAdderSelected=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"profile"}},[t._v(t._s(t.$t("@.widgets.profile")))]),i("option",{attrs:{value:"analog-clock"}},[t._v(t._s(t.$t("@.widgets.analog-clock")))]),i("option",{attrs:{value:"calendar"}},[t._v(t._s(t.$t("@.widgets.calendar")))]),i("option",{attrs:{value:"activity"}},[t._v(t._s(t.$t("@.widgets.activity")))]),i("option",{attrs:{value:"rss"}},[t._v(t._s(t.$t("@.widgets.rss")))]),i("option",{attrs:{value:"photo-stream"}},[t._v(t._s(t.$t("@.widgets.photo-stream")))]),i("option",{attrs:{value:"slideshow"}},[t._v(t._s(t.$t("@.widgets.slideshow")))]),i("option",{attrs:{value:"hashtags"}},[t._v(t._s(t.$t("@.widgets.hashtags")))]),i("option",{attrs:{value:"posts-monitor"}},[t._v(t._s(t.$t("@.widgets.posts-monitor")))]),i("option",{attrs:{value:"version"}},[t._v(t._s(t.$t("@.widgets.version")))]),i("option",{attrs:{value:"server"}},[t._v(t._s(t.$t("@.widgets.server")))]),i("option",{attrs:{value:"queue"}},[t._v(t._s(t.$t("@.widgets.queue")))]),i("option",{attrs:{value:"memo"}},[t._v(t._s(t.$t("@.widgets.memo")))]),i("option",{attrs:{value:"nav"}},[t._v(t._s(t.$t("@.widgets.nav")))]),i("option",{attrs:{value:"tips"}},[t._v(t._s(t.$t("@.widgets.tips")))])]),i("button",{on:{click:t.addWidget}},[t._v(t._s(t.$t("add-widget")))]),i("p",[i("a",{on:{click:t.hint}},[t._v(t._s(t.$t("customization-tips")))])])]),i("x-draggable",{attrs:{list:t.widgets,handle:".handle",animation:"150"},on:{sort:t.onWidgetSort}},t._l(t.widgets,(function(e){return i("div",{key:e.id,staticClass:"customize-container"},[i("header",[i("span",{staticClass:"handle"},[i("fa",{attrs:{icon:"bars"}})],1),t._v(t._s(e.name)),i("button",{staticClass:"remove",on:{click:function(i){return t.removeWidget(e)}}},[i("fa",{attrs:{icon:"times"}})],1)]),i("div",{on:{click:function(i){return t.widgetFunc(e.id)}}},[i("mkw-"+e.name,{ref:e.id,refInFor:!0,tag:"component",attrs:{widget:e,"is-customize-mode":!0,platform:"mobile"}})],1)])})),0)]:t._l(t.widgets,(function(t){return i("mkw-"+t.name,{key:t.id,ref:t.id,refInFor:!0,tag:"component",staticClass:"widget",attrs:{widget:t,platform:"mobile"}})}))],2)])}),[],!1,null,"041d7c72",null);e.default=c.exports},798:function(t,e,i){var a=i(1074);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(5).default)("6f9875c8",a,!0,{})}}]);
//# sourceMappingURL=64.11.37.1.js.map