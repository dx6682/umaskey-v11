(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1126:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a(3),r=a(2),n=a(8),o=s.default.extend({i18n:Object(i.a)("common/views/pages/explore.vue"),props:{tag:{type:String,required:!1}},inject:{inNakedDeckColumn:{default:!1}},data:()=>({pinnedUsers:{endpoint:"pinned-users"},popularUsers:{endpoint:"users",limit:10,params:{state:"alive",origin:"local",sort:"+follower"}},recentlyUpdatedUsers:{endpoint:"users",limit:10,params:{origin:"local",sort:"+updatedAt"}},recentlyRegisteredUsers:{endpoint:"users",limit:10,params:{origin:"local",state:"alive",sort:"+createdAt"}},popularUsersF:{endpoint:"users",limit:10,params:{state:"alive",origin:"remote",sort:"+follower"}},recentlyUpdatedUsersF:{endpoint:"users",limit:10,params:{origin:"combined",sort:"+updatedAt"}},recentlyRegisteredUsersF:{endpoint:"users",limit:10,params:{origin:"combined",sort:"+createdAt"}},tagsLocal:[],tagsRemote:[],stats:null,meta:null,num:s.default.filter("number"),faBookmark:n.b,faChartLine:r.D,faCommentAlt:n.g,faPlus:r.pc,faHashtag:r.Db,faRocket:r.Bc}),computed:{tagUsers(){return{endpoint:"hashtags/users",limit:30,params:{tag:this.tag,origin:"combined",sort:"+follower"}}}},watch:{tag(){this.$refs.tags&&this.$refs.tags.toggleContent(null==this.tag)}},created(){this.$emit("init",{title:this.$t("@.explore"),icon:r.Db}),this.$root.api("hashtags/list",{sort:"+attachedLocalUsers",attachedToLocalUserOnly:!0,limit:30}).then(t=>{this.tagsLocal=t}),this.$root.api("hashtags/list",{sort:"+attachedRemoteUsers",attachedToRemoteUserOnly:!0,limit:30}).then(t=>{this.tagsRemote=t}),this.$root.api("stats").then(t=>{this.stats=t}),this.$root.getMeta().then(t=>{this.meta=t})},mounted(){document.title=this.$root.instanceName}}),l=(a(851),a(1)),d=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.meta&&t.stats&&null==t.tag?a("div",{staticClass:"localfedi7",style:{backgroundImage:t.meta.bannerUrl?"url("+t.meta.bannerUrl+")":null}},[a("header",[t._v(t._s(t.$t("explore",{host:t.meta.name||"Misskey"})))]),a("div",[t._v(t._s(t.$t("users-info",{users:t.num(t.stats.originalUsersCount)})))])]):t._e(),null==t.tag?[a("mk-user-list",{attrs:{pagination:t.pinnedUsers,expanded:!1}},[a("fa",{attrs:{icon:t.faBookmark,"fixed-width":""}}),t._v(t._s(t.$t("pinned-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:t.popularUsers,expanded:!1}},[a("fa",{attrs:{icon:t.faChartLine,"fixed-width":""}}),t._v(t._s(t.$t("popular-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:t.recentlyUpdatedUsers,expanded:!1}},[a("fa",{attrs:{icon:t.faCommentAlt,"fixed-width":""}}),t._v(t._s(t.$t("recently-updated-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:t.recentlyRegisteredUsers,expanded:!1}},[a("fa",{attrs:{icon:t.faPlus,"fixed-width":""}}),t._v(t._s(t.$t("recently-registered-users"))+"\n\t\t")],1)]:t._e(),null==t.tag?a("div",{staticClass:"localfedi7",style:{backgroundImage:"url(/assets/fedi.jpg)"}},[a("header",[t._v(t._s(t.$t("explore-fediverse")))])]):t._e(),a("ui-container",{ref:"tags",attrs:{"body-togglable":!0,expanded:!1},scopedSlots:t._u([{key:"header",fn:function(){return[a("fa",{attrs:{icon:t.faHashtag,"fixed-width":""}}),t._v(t._s(t.$t("popular-tags")))]},proxy:!0}])},[a("div",{staticClass:"vxjfqztj"},[t._l(t.tagsLocal,(function(e){return a("router-link",{key:"local:"+e.tag,staticClass:"local",attrs:{to:"/explore/tags/"+e.tag}},[t._v(t._s(e.tag))])})),t._l(t.tagsRemote,(function(e){return a("router-link",{key:"remote:"+e.tag,attrs:{to:"/explore/tags/"+e.tag}},[t._v(t._s(e.tag))])}))],2)]),null!=t.tag?a("mk-user-list",{key:""+t.tag,attrs:{pagination:t.tagUsers}},[a("fa",{attrs:{icon:t.faHashtag,"fixed-width":""}}),t._v(t._s(t.tag)+"\n\t")],1):t._e(),null==t.tag?[a("mk-user-list",{attrs:{pagination:t.popularUsersF,expanded:!1}},[a("fa",{attrs:{icon:t.faChartLine,"fixed-width":""}}),t._v(t._s(t.$t("popular-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:t.recentlyUpdatedUsersF,expanded:!1}},[a("fa",{attrs:{icon:t.faCommentAlt,"fixed-width":""}}),t._v(t._s(t.$t("recently-updated-users"))+"\n\t\t")],1),a("mk-user-list",{attrs:{pagination:t.recentlyRegisteredUsersF,expanded:!1}},[a("fa",{attrs:{icon:t.faRocket,"fixed-width":""}}),t._v(t._s(t.$t("recently-discovered-users"))+"\n\t\t")],1)]:t._e()],2)}),[],!1,null,"22c28940",null);e.default=d.exports},727:function(t,e,a){var s=a(852);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(5).default)("3f66412b",s,!0,{})},851:function(t,e,a){"use strict";var s=a(727);a.n(s).a},852:function(t,e,a){(e=a(4)(!1)).push([t.i,".localfedi7[data-v-22c28940]{overflow:hidden;background:var(--face);color:#fff;text-shadow:0 0 8px #000;border-radius:6px;padding:16px;margin-top:16px;margin-bottom:16px;height:80px;background-position:50%;background-size:cover}.localfedi7>header[data-v-22c28940]{font-size:20px;font-weight:700}.localfedi7>div[data-v-22c28940]{font-size:14px;opacity:.8}.localfedi7[data-v-22c28940]:first-child{margin-top:0}.vxjfqztj[data-v-22c28940]{padding:16px}.vxjfqztj>*[data-v-22c28940]{margin-right:16px}.vxjfqztj>.local[data-v-22c28940]{font-weight:700}",""]),t.exports=e}}]);
//# sourceMappingURL=2.11.37.1.js.map