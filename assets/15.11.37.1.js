(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1116:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(2),a=n(3),l=i.default.extend({i18n:Object(a.a)(),props:{platform:{type:String,required:!0}},data(){return{pagination:{endpoint:"notes/featured",limit:29},notesComponent:"desktop"===this.platform?()=>n.e(35).then(n.bind(null,1135)).then(t=>t.default):"mobile"===this.platform?()=>n.e(37).then(n.bind(null,1136)).then(t=>t.default):"deck"===this.platform?()=>n.e(34).then(n.bind(null,694)).then(t=>t.default):null}},created(){this.$emit("init",{title:this.$t("@.featured-notes"),icon:o.ic})},mounted(){document.title=this.$root.instanceName}}),s=n(1),r=Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.notesComponent,{tag:"component",attrs:{pagination:this.pagination}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=15.11.37.1.js.map