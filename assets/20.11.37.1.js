/*! For license information please see 20.11.37.1.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1025:function(e,t,a){"use strict";var s=a(779);a.n(s).a},1026:function(e,t,a){(t=a(4)(!1)).push([e.i,'.message[data-v-1b217a8a]{padding:10px 12px;background-color:transparent}.message>.avatar[data-v-1b217a8a]{display:block;position:absolute;top:10px;width:54px;height:54px;border-radius:8px;transition:all .1s ease}.message>.content>.balloon[data-v-1b217a8a]{display:flex;align-items:center;padding:0;max-width:calc(100% - 16px);min-height:38px;border-radius:16px}.message>.content>.balloon[data-v-1b217a8a]:before{content:"";pointer-events:none;display:block;position:absolute;top:12px}.message>.content>.balloon+*[data-v-1b217a8a]{clear:both}.message>.content>.balloon:hover>.delete-button[data-v-1b217a8a]{display:block}.message>.content>.balloon>.delete-button[data-v-1b217a8a]{display:none;position:absolute;z-index:1;top:-4px;right:-4px;margin:0;padding:0;cursor:pointer;outline:none;border:none;border-radius:0;box-shadow:none;background:transparent}.message>.content>.balloon>.delete-button>img[data-v-1b217a8a]{vertical-align:bottom;width:16px;height:16px;cursor:pointer}.message>.content>.balloon>.content[data-v-1b217a8a]{max-width:100%}.message>.content>.balloon>.content>.is-deleted[data-v-1b217a8a]{display:block;margin:0;padding:0;overflow:hidden;overflow-wrap:break-word;font-size:1em;color:rgba(0,0,0,.5)}.message>.content>.balloon>.content>.text[data-v-1b217a8a]{display:block;margin:0;padding:8px 16px;overflow:hidden;overflow-wrap:break-word;word-break:break-word;font-size:1em;color:rgba(0,0,0,.8)}.message>.content>.balloon>.content>.text+.file>a[data-v-1b217a8a]{border-radius:0 0 16px 16px}.message>.content>.balloon>.content>.file>a[data-v-1b217a8a]{display:block;max-width:100%;border-radius:16px;overflow:hidden;text-decoration:none}.message>.content>.balloon>.content>.file>a[data-v-1b217a8a]:hover{text-decoration:none}.message>.content>.balloon>.content>.file>a:hover>p[data-v-1b217a8a]{background:#ccc}.message>.content>.balloon>.content>.file>a>*[data-v-1b217a8a]{display:block;margin:0;width:100%;max-height:512px;object-fit:contain}.message>.content>.balloon>.content>.file>a>p[data-v-1b217a8a]{padding:30px;text-align:center;color:#555;background:#ddd}.message>.content>.mk-url-preview[data-v-1b217a8a]{margin:8px 0}.message>.content>footer[data-v-1b217a8a]{display:block;margin:2px 0 0;font-size:10px;color:var(--messagingRoomMessageInfo)}.message>.content>footer>.read[data-v-1b217a8a]{margin:0 8px}.message>.content>footer>[data-icon][data-v-1b217a8a]{margin-left:4px}.message:not([data-is-me])>.avatar[data-v-1b217a8a]{left:12px}.message:not([data-is-me])>.content[data-v-1b217a8a]{padding-left:66px}.message:not([data-is-me])>.content>.balloon[data-v-1b217a8a]{float:left;background:var(--messagingRoomMessageBg)}.message:not([data-is-me])>.content>.balloon[data-no-text][data-v-1b217a8a]{background:transparent}.message:not([data-is-me])>.content>.balloon[data-v-1b217a8a]:not([data-no-text]):before{left:-14px;border:8px solid transparent;border-right:8px solid var(--messagingRoomMessageBg)}.message:not([data-is-me])>.content>.balloon>.content>.text[data-v-1b217a8a]{color:var(--messagingRoomMessageFg)}.message:not([data-is-me])>.content>footer[data-v-1b217a8a]{text-align:left}.message[data-is-me]>.avatar[data-v-1b217a8a]{right:12px}.message[data-is-me]>.content[data-v-1b217a8a]{padding-right:66px}.message[data-is-me]>.content>.balloon[data-v-1b217a8a]{float:right;background:var(--primary)}.message[data-is-me]>.content>.balloon[data-no-text][data-v-1b217a8a]{background:transparent}.message[data-is-me]>.content>.balloon[data-v-1b217a8a]:not([data-no-text]):before{right:-14px;left:auto;border:8px solid transparent;border-left:8px solid var(--primary)}.message[data-is-me]>.content>.balloon>.content>p.is-deleted[data-v-1b217a8a]{color:hsla(0,0%,100%,.5)}.message[data-is-me]>.content>.balloon>.content>.text[data-v-1b217a8a] ,.message[data-is-me]>.content>.balloon>.content>.text[data-v-1b217a8a] *{color:#fff!important}.message[data-is-me]>.content>footer[data-v-1b217a8a]{text-align:right}.message[data-is-me]>.content>footer>.read[data-v-1b217a8a]{user-select:none}.message[data-is-deleted]>.balloon[data-v-1b217a8a]{opacity:.5}',""]),e.exports=t},1027:function(e,t,a){var s,o,i;o=[e,t],void 0===(i="function"==typeof(s=function(e,t){"use strict";var a,s,o="function"==typeof Map?new Map:(a=[],s=[],{has:function(e){return a.indexOf(e)>-1},get:function(e){return s[a.indexOf(e)]},set:function(e,t){-1===a.indexOf(e)&&(a.push(e),s.push(t))},delete:function(e){var t=a.indexOf(e);t>-1&&(a.splice(t,1),s.splice(t,1))}}),i=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){i=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function n(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!o.has(e)){var t,a=null,s=null,n=null,r=function(){e.clientWidth!==s&&g()},d=function(t){window.removeEventListener("resize",r,!1),e.removeEventListener("input",g,!1),e.removeEventListener("keyup",g,!1),e.removeEventListener("autosize:destroy",d,!1),e.removeEventListener("autosize:update",g,!1),Object.keys(t).forEach((function(a){e.style[a]=t[a]})),o.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",d,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",g,!1),window.addEventListener("resize",r,!1),e.addEventListener("input",g,!1),e.addEventListener("autosize:update",g,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",o.set(e,{destroy:d,update:g}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),a="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(a)&&(a=0),g()}function l(t){var a=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=a,e.style.overflowY=t}function c(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+a+"px",s=e.clientWidth,t.forEach((function(e){e.node.scrollTop=e.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function g(){c();var t=Math.round(parseFloat(e.style.height)),a=window.getComputedStyle(e,null),s="content-box"===a.boxSizing?Math.round(parseFloat(a.height)):e.offsetHeight;if(s<t?"hidden"===a.overflowY&&(l("scroll"),c(),s="content-box"===a.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==a.overflowY&&(l("hidden"),c(),s="content-box"===a.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),n!==s){n=s;var o=i("autosize:resized");try{e.dispatchEvent(o)}catch(e){}}}}function r(e){var t=o.get(e);t&&t.destroy()}function d(e){var t=o.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return n(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e}),t.default=l,e.exports=t.default})?s.apply(t,o):s)||(e.exports=i)},1028:function(e,t,a){"use strict";var s=a(780);a.n(s).a},1029:function(e,t,a){(t=a(4)(!1)).push([e.i,'.mk-messaging-form>textarea[data-v-8baa3026]{cursor:auto;display:block;width:100%;min-width:100%;max-width:100%;height:64px;margin:0;padding:8px;resize:none;font-size:1em;color:var(--inputText);outline:none;border:none;border-top:1px solid var(--faceDivider);border-radius:0;box-shadow:none;background:transparent}.mk-messaging-form>.file[data-v-8baa3026]{padding:8px;color:#444;background:#eee;cursor:pointer}.mk-messaging-form>.send[data-v-8baa3026]{position:absolute;bottom:0;right:0;margin:0;padding:10px 14px;font-size:1em;color:#aaa;transition:color .1s ease}.mk-messaging-form>.send[data-v-8baa3026]:hover{color:var(--primary)}.mk-messaging-form>.send[data-v-8baa3026]:active{color:var(--primaryDarken10);transition:color 0s ease}.mk-messaging-form .files[data-v-8baa3026]{display:block;margin:0;padding:0 8px;list-style:none}.mk-messaging-form .files[data-v-8baa3026]:after{content:"";display:block;clear:both}.mk-messaging-form .files>li[data-v-8baa3026]{display:block;float:left;margin:4px;padding:0;width:64px;height:64px;background-color:#eee;background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:move}.mk-messaging-form .files>li:hover>.remove[data-v-8baa3026]{display:block}.mk-messaging-form .files>li>.remove[data-v-8baa3026]{display:none;position:absolute;right:-6px;top:-6px;margin:0;padding:0;background:transparent;outline:none;border:none;border-radius:0;box-shadow:none;cursor:pointer}.mk-messaging-form .attach-from-drive[data-v-8baa3026],.mk-messaging-form .attach-from-local[data-v-8baa3026]{margin:0;padding:10px 14px;font-size:1em;font-weight:400;text-decoration:none;color:#aaa;transition:color .1s ease}.mk-messaging-form .attach-from-drive[data-v-8baa3026]:hover,.mk-messaging-form .attach-from-local[data-v-8baa3026]:hover{color:var(--primary)}.mk-messaging-form .attach-from-drive[data-v-8baa3026]:active,.mk-messaging-form .attach-from-local[data-v-8baa3026]:active{color:var(--primaryDarken10);transition:color 0s ease}.mk-messaging-form input[type=file][data-v-8baa3026]{display:none}',""]),e.exports=t},1030:function(e,t,a){"use strict";var s=a(781);a.n(s).a},1031:function(e,t,a){(t=a(4)(!1)).push([e.i,'.mk-messaging-room[data-v-131e2baa]{background:var(--messagingRoomBg)}.mk-messaging-room>.body[data-v-131e2baa]{width:100%;max-width:600px;margin:0 auto;min-height:calc(100% - 103px)}.mk-messaging-room>.body>.empty[data-v-131e2baa],.mk-messaging-room>.body>.init[data-v-131e2baa]{width:100%;margin:0;padding:16px 8px 8px;text-align:center;font-size:.8em;color:var(--messagingRoomInfo);opacity:.5}.mk-messaging-room>.body>.empty [data-icon][data-v-131e2baa],.mk-messaging-room>.body>.init [data-icon][data-v-131e2baa]{margin-right:4px}.mk-messaging-room>.body>.no-history[data-v-131e2baa]{display:block;margin:0;padding:16px;text-align:center;font-size:.8em;color:var(--messagingRoomInfo);opacity:.5}.mk-messaging-room>.body>.no-history [data-icon][data-v-131e2baa]{margin-right:4px}.mk-messaging-room>.body>.more[data-v-131e2baa]{display:block;margin:16px auto;padding:0 12px;line-height:24px;color:#fff;background:rgba(0,0,0,.3);border-radius:12px}.mk-messaging-room>.body>.more[data-v-131e2baa]:hover{background:rgba(0,0,0,.4)}.mk-messaging-room>.body>.more[data-v-131e2baa]:active{background:rgba(0,0,0,.5)}.mk-messaging-room>.body>.more.fetching[data-v-131e2baa]{cursor:wait}.mk-messaging-room>.body>.more>[data-icon][data-v-131e2baa]{margin-right:4px}.mk-messaging-room>.body>.date[data-v-131e2baa]{display:block;margin:8px 0;text-align:center}.mk-messaging-room>.body>.date[data-v-131e2baa]:before{content:"";display:block;position:absolute;height:1px;width:90%;top:16px;left:0;right:0;margin:0 auto;background:var(--messagingRoomDateDividerLine)}.mk-messaging-room>.body>.date>span[data-v-131e2baa]{display:inline-block;margin:0;padding:0 16px;line-height:32px;color:var(--messagingRoomDateDividerText);background:var(--messagingRoomBg)}.mk-messaging-room>footer[data-v-131e2baa]{position:-webkit-sticky;position:sticky;z-index:2;bottom:0;width:100%;max-width:600px;margin:0 auto;padding:0;background:var(--messagingRoomBg);background-clip:content-box}.mk-messaging-room>footer>.new-message[data-v-131e2baa]{position:absolute;top:-48px;width:100%;padding:8px 0;text-align:center}.mk-messaging-room>footer>.new-message>button[data-v-131e2baa]{display:inline-block;margin:0;padding:0 12px 0 30px;cursor:pointer;line-height:32px;font-size:12px;color:var(--primaryForeground);background:var(--primary);border-radius:16px}.mk-messaging-room>footer>.new-message>button[data-v-131e2baa]:hover{background:var(--primaryLighten10)}.mk-messaging-room>footer>.new-message>button[data-v-131e2baa]:active{background:var(--primaryDarken10)}.mk-messaging-room>footer>.new-message>button>i[data-v-131e2baa]{position:absolute;top:0;left:10px;line-height:32px;font-size:16px}.fade-enter-active[data-v-131e2baa],.fade-leave-active[data-v-131e2baa]{transition:opacity .1s}.fade-enter[data-v-131e2baa],.fade-leave-to[data-v-131e2baa]{transition:opacity .5s;opacity:0}',""]),e.exports=t},1112:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a(3),i=a(29),n=a(12),r=s.default.extend({i18n:Object(o.a)("common/views/components/messaging-room.message.vue"),props:{message:{required:!0},isGroup:{required:!1}},computed:{isMe(){return this.message.userId==this.$store.state.i.id},urls(){if(this.message.text){const e=Object(i.a)(this.message.text);return Object(n.j)(e.filter(e=>("url"==e.node.type||"link"==e.node.type)&&e.node.props.url&&!e.node.props.silent).map(e=>e.node.props.url))}return null}},methods:{del(){this.$root.api("messaging/messages/delete",{messageId:this.message.id})}}}),d=(a(1025),a(1)),l=Object(d.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message",attrs:{"data-is-me":e.isMe}},[a("mk-avatar",{staticClass:"avatar",attrs:{user:e.message.user,target:"_blank"}}),a("div",{staticClass:"content"},[a("div",{staticClass:"balloon",attrs:{"data-no-text":null==e.message.text}},[e.isMe?a("button",{staticClass:"delete-button",attrs:{title:e.$t("@.delete")},on:{click:e.del}},[a("img",{attrs:{src:"/assets/desktop/remove.png",alt:"Delete"}})]):e._e(),e.message.isDeleted?a("div",{staticClass:"content"},[a("p",{staticClass:"is-deleted"},[e._v(e._s(e.$t("deleted")))])]):a("div",{staticClass:"content"},[e.message.text?a("mfm",{ref:"text",staticClass:"text",attrs:{text:e.message.text,i:e.$store.state.i}}):e._e(),e.message.file?a("div",{staticClass:"file"},[a("a",{attrs:{href:e.message.file.url,rel:"noopener",target:"_blank",title:e.message.file.name}},["image"==e.message.file.type.split("/")[0]?a("img",{style:{backgroundColor:e.message.file.properties.avgColor||"transparent"},attrs:{src:e.message.file.url,alt:e.message.file.name}}):a("p",[e._v(e._s(e.message.file.name))])])]):e._e()],1)]),a("div"),e._l(e.urls,(function(e){return a("mk-url-preview",{key:e,attrs:{url:e}})})),a("footer",[e.isGroup?[e.message.reads.length>0?a("span",{staticClass:"read"},[e._v(e._s(e.$t("is-read"))+" "+e._s(e.message.reads.length))]):e._e()]:[e.isMe&&e.message.isRead?a("span",{staticClass:"read"},[e._v(e._s(e.$t("is-read")))]):e._e()],a("mk-time",{attrs:{time:e.message.createdAt}}),e.message.is_edited?[a("fa",{attrs:{icon:"pencil-alt"}})]:e._e()],2)],2)],1)}),[],!1,null,"1b217a8a",null).exports,c=a(1027),g=a(111),m=s.default.extend({i18n:Object(o.a)("common/views/components/messaging-room.form.vue"),props:{user:{type:Object,requird:!1},group:{type:Object,requird:!1}},data:()=>({text:null,file:null,sending:!1}),computed:{draftId(){return this.user?"user:"+this.user.id:"group:"+this.group.id},canSend(){return null!=this.text&&""!=this.text||null!=this.file},room(){return this.$parent}},watch:{text(){this.saveDraft()},file(){this.saveDraft(),this.room.isBottom()&&this.room.scrollToBottom()}},mounted(){c(this.$refs.textarea);const e=JSON.parse(localStorage.getItem("message_drafts")||"{}")[this.draftId];e&&(this.text=e.data.text,this.file=e.data.file)},methods:{async onPaste(e){const t=e.clipboardData.items;if(1==t.length){if("file"==t[0].kind){const e=t[0].getAsFile(),a=e.name.lastIndexOf("."),s=a>=0?e.name.slice(a):"",o=`${Object(g.b)(new Date(e.lastModified),this.$store.state.settings.pastedFileName).replace(/{{number}}/g,"1")}${s}`,i=this.$store.state.settings.pasteDialog?await this.$root.dialog({title:this.$t("@.post-form.enter-file-name"),input:{default:o},allowEmpty:!1}).then(({canceled:e,result:t})=>!e&&t):o;i&&this.upload(e,i)}}else"file"==t[0].kind&&this.$root.dialog({type:"error",text:this.$t("only-one-file-attached")})},onDragover(e){const t="file"==e.dataTransfer.items[0].kind,a="mk_drive_file"==e.dataTransfer.types[0];(t||a)&&(e.preventDefault(),e.dataTransfer.dropEffect="all"==e.dataTransfer.effectAllowed?"copy":"move")},onDrop(e){if(1==e.dataTransfer.files.length)return e.preventDefault(),void this.upload(e.dataTransfer.files[0]);if(e.dataTransfer.files.length>1)return e.preventDefault(),void this.$root.dialog({type:"error",text:this.$t("only-one-file-attached")});const t=e.dataTransfer.getData("mk_drive_file");null!=t&&""!=t&&(this.file=JSON.parse(t),e.preventDefault())},onKeypress(e){(10==e.which||13==e.which)&&e.ctrlKey&&this.canSend&&this.send()},chooseFile(){this.$refs.file.click()},chooseFileFromDrive(){this.$chooseDriveFile({multiple:!1}).then(e=>{this.file=e})},onChangeFile(){this.upload(this.$refs.file.files[0])},upload(e,t){this.$refs.uploader.upload(e,this.$store.state.settings.uploadFolder,t)},onUploaded(e){this.file=e},send(){this.sending=!0,this.$root.api("messaging/messages/create",{userId:this.user?this.user.id:void 0,groupId:this.group?this.group.id:void 0,text:this.text?this.text:void 0,fileId:this.file?this.file.id:void 0}).then(e=>{this.clear()}).catch(e=>{console.error(e)}).then(()=>{this.sending=!1})},clear(){this.text="",this.file=null,this.deleteDraft()},saveDraft(){const e=JSON.parse(localStorage.getItem("message_drafts")||"{}");e[this.draftId]={updatedAt:new Date,data:{text:this.text,file:this.file}},localStorage.setItem("message_drafts",JSON.stringify(e))},deleteDraft(){const e=JSON.parse(localStorage.getItem("message_drafts")||"{}");delete e[this.draftId],localStorage.setItem("message_drafts",JSON.stringify(e))}}}),p=(a(1028),Object(d.a)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mk-messaging-form",on:{dragover:function(t){return t.stopPropagation(),e.onDragover(t)},drop:function(t){return t.stopPropagation(),e.onDrop(t)}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"},{name:"autocomplete",rawName:"v-autocomplete",value:{model:"text"},expression:"{ model: 'text' }"}],ref:"textarea",attrs:{placeholder:e.$t("input-message-here")},domProps:{value:e.text},on:{keypress:e.onKeypress,paste:e.onPaste,input:function(t){t.target.composing||(e.text=t.target.value)}}}),e.file?a("div",{staticClass:"file",on:{click:function(t){e.file=null}}},[e._v(e._s(e.file.name))]):e._e(),a("mk-uploader",{ref:"uploader",on:{uploaded:e.onUploaded}}),a("button",{staticClass:"send",attrs:{disabled:!e.canSend||e.sending,title:e.$t("send")},on:{click:e.send}},[e.sending?e._e():[a("fa",{attrs:{icon:"paper-plane"}})],e.sending?[a("fa",{attrs:{icon:"spinner .spin"}})]:e._e()],2),a("button",{staticClass:"attach-from-local",attrs:{title:e.$t("attach-from-local")},on:{click:e.chooseFile}},[a("fa",{attrs:{icon:"upload"}})],1),a("button",{staticClass:"attach-from-drive",attrs:{title:e.$t("attach-from-drive")},on:{click:e.chooseFileFromDrive}},[a("fa",{attrs:{icon:["far","folder-open"]}})],1),a("input",{ref:"file",attrs:{type:"file"},on:{change:e.onChangeFile}})],1)}),[],!1,null,"8baa3026",null).exports),f=a(6),h=a(2),u=s.default.extend({i18n:Object(o.a)("common/views/components/messaging-room.vue"),components:{XMessage:l,XForm:p},props:{user:{type:Object,requird:!1},group:{type:Object,requird:!1},isNaked:{type:Boolean,requird:!1}},data:()=>({init:!0,fetchingMoreMessages:!1,messages:[],existMoreMessages:!1,connection:null,showIndicator:!1,timer:null,faArrowCircleDown:h.h,faFlag:h.tb}),computed:{_messages(){return this.messages.map(e=>{const t=new Date(e.createdAt).getDate(),a=new Date(e.createdAt).getMonth()+1;return e._date=t,e._datetext=this.$t("@.month-and-day").replace("{month}",a.toString()).replace("{day}",t.toString()),e})},form(){return this.$refs.form}},mounted(){this.connection=this.$root.stream.connectToChannel("messaging",{otherparty:this.user?this.user.id:void 0,group:this.group?this.group.id:void 0}),this.connection.on("message",this.onMessage),this.connection.on("read",this.onRead),this.connection.on("deleted",this.onDeleted),this.isNaked?window.addEventListener("scroll",this.onScroll,{passive:!0}):this.$el.addEventListener("scroll",this.onScroll,{passive:!0}),document.addEventListener("visibilitychange",this.onVisibilitychange),this.fetchMessages().then(()=>{this.init=!1,this.scrollToBottom()})},beforeDestroy(){this.connection.dispose(),this.isNaked?window.removeEventListener("scroll",this.onScroll):this.$el.removeEventListener("scroll",this.onScroll),document.removeEventListener("visibilitychange",this.onVisibilitychange)},methods:{onDragover(e){const t="file"==e.dataTransfer.items[0].kind,a="mk_drive_file"==e.dataTransfer.types[0];e.dataTransfer.dropEffect=t||a?"all"==e.dataTransfer.effectAllowed?"copy":"move":"none"},onDrop(e){if(1==e.dataTransfer.files.length)return void this.form.upload(e.dataTransfer.files[0]);if(e.dataTransfer.files.length>1)return void this.$root.dialog({type:"error",text:this.$t("only-one-file-attached")});const t=e.dataTransfer.getData("mk_drive_file");if(null!=t&&""!=t){const e=JSON.parse(t);this.form.file=e}},fetchMessages(){return new Promise((e,t)=>{const a=this.existMoreMessages?20:10;this.$root.api("messaging/messages",{userId:this.user?this.user.id:void 0,groupId:this.group?this.group.id:void 0,limit:a+1,untilId:this.existMoreMessages?this.messages[0].id:void 0}).then(t=>{t.length==a+1?(this.existMoreMessages=!0,t.pop()):this.existMoreMessages=!1,this.messages.unshift.apply(this.messages,t.reverse()),e()})})},fetchMoreMessages(){this.fetchingMoreMessages=!0,this.fetchMessages().then(()=>{this.fetchingMoreMessages=!1})},onMessage(e){if(this.$store.state.device.enableSounds){const e=new Audio(f.k+"/assets/message.mp3");e.volume=this.$store.state.device.soundVolume,e.play()}const t=this.isBottom();this.messages.push(e),e.userId==this.$store.state.i.id||document.hidden||this.connection.send("read",{id:e.id}),t?this.$nextTick(()=>{this.scrollToBottom()}):e.userId!=this.$store.state.i.id&&this.notifyNewMessage()},onRead(e){if(this.user){Array.isArray(e)||(e=[e]);for(const t of e)if(this.messages.some(e=>e.id==t)){const e=this.messages.map(e=>e.id).indexOf(t);this.messages[e].isRead=!0}}else if(this.group)for(const t of e.ids)if(this.messages.some(e=>e.id==t)){const a=this.messages.map(e=>e.id).indexOf(t);this.messages[a].reads.push(e.userId)}},onDeleted(e){const t=this.messages.find(t=>t.id===e);t&&(this.messages=this.messages.filter(e=>e.id!==t.id))},isBottom(){return(this.isNaked?window.scrollY+window.innerHeight:this.$el.scrollTop+this.$el.offsetHeight)>(this.isNaked?document.body.offsetHeight:this.$el.scrollHeight)-64},scrollToBottom(){this.isNaked?window.scroll(0,document.body.offsetHeight):this.$el.scrollTop=this.$el.scrollHeight},onIndicatorClick(){this.showIndicator=!1,this.scrollToBottom()},notifyNewMessage(){this.showIndicator=!0,this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.showIndicator=!1},4e3)},onScroll(){const e=this.isNaked?window.document.documentElement:this.$el;e.scrollTop+e.clientHeight>e.scrollHeight-1&&(this.showIndicator=!1)},onVisibilitychange(){if(!document.hidden)for(const e of this.messages)e.userId===this.$store.state.i.id||e.isRead||this.connection.send("read",{id:e.id})}}}),v=(a(1030),Object(d.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mk-messaging-room",on:{dragover:function(t){return t.preventDefault(),t.stopPropagation(),e.onDragover(t)},drop:function(t){return t.preventDefault(),t.stopPropagation(),e.onDrop(t)}}},[a("div",{staticClass:"body"},[e.init?a("p",{staticClass:"init"},[a("fa",{attrs:{icon:"spinner",pulse:"","fixed-width":""}}),e._v(e._s(e.$t("@.loading")))],1):e._e(),e.init||0!=e.messages.length?e._e():a("p",{staticClass:"empty"},[a("fa",{attrs:{icon:"info-circle"}}),e._v(e._s(e.user?e.$t("not-talked-user"):e.$t("not-talked-group")))],1),!e.init&&e.messages.length>0&&!e.existMoreMessages?a("p",{staticClass:"no-history"},[a("fa",{attrs:{icon:e.faFlag}}),e._v(e._s(e.$t("no-history")))],1):e._e(),e.existMoreMessages?a("button",{staticClass:"more",class:{fetching:e.fetchingMoreMessages},attrs:{disabled:e.fetchingMoreMessages},on:{click:e.fetchMoreMessages}},[e.fetchingMoreMessages?[a("fa",{attrs:{icon:"spinner",pulse:"","fixed-width":""}})]:e._e(),e._v(e._s(e.fetchingMoreMessages?e.$t("@.loading"):e.$t("@.load-more"))+"\n\t\t")],2):e._e(),e._l(e._messages,(function(t,s){return[a("x-message",{key:t.id,attrs:{message:t,"is-group":null!=e.group}}),s!=e.messages.length-1&&t._date!=e._messages[s+1]._date?a("p",{staticClass:"date"},[a("span",[e._v(e._s(e._messages[s+1]._datetext))])]):e._e()]}))],2),a("footer",[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showIndicator,expression:"showIndicator"}],staticClass:"new-message"},[a("button",{on:{click:e.onIndicatorClick}},[a("i",[a("fa",{attrs:{icon:e.faArrowCircleDown}})],1),e._v(e._s(e.$t("new-message")))])])]),a("x-form",{ref:"form",attrs:{user:e.user,group:e.group}})],1)])}),[],!1,null,"131e2baa",null));t.default=v.exports},779:function(e,t,a){var s=a(1026);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(5).default)("3862f770",s,!0,{})},780:function(e,t,a){var s=a(1029);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(5).default)("176120e6",s,!0,{})},781:function(e,t,a){var s=a(1031);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(5).default)("bbcebaca",s,!0,{})}}]);
//# sourceMappingURL=20.11.37.1.js.map