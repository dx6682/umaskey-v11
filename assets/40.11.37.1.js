(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1130:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(8),s=a(3),p=a(328),r=a(814),o=n.default.extend({i18n:Object(s.a)(),components:{XColumn:p.a,XPage:r.default},props:{pageName:{type:String,required:!0},username:{type:String,required:!0}},data:()=>({page:null,faStickyNote:i.D}),watch:{$route:"fetch"},created(){this.fetch()},methods:{fetch(){this.$root.api("pages/show",{name:this.pageName,username:this.username}).then((e=>{this.page=e,this.$emit("init",{title:this.page.title,icon:i.D})}))}}}),u=a(1),c=Object(u.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("x-column",{scopedSlots:e._u([{key:"header",fn:function(){return[a("fa",{attrs:{icon:e.faStickyNote}}),e._v(e._s(e.page?e.page.name:"")+"\n\t")]},proxy:!0}])},[e.page?a("div",[a("x-page",{key:e.page.id,attrs:{page:e.page}})],1):e._e()])}),[],!1,null,null,null);t.default=c.exports}}]);
//# sourceMappingURL=40.11.37.1.js.map