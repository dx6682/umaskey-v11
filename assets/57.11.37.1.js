(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1091:function(t,e,i){"use strict";var a=i(804);i.n(a).a},1092:function(t,e,i){(e=i(4)(!1)).push([t.i,'.prlncendiewqqkrevzeruhndoakghvtx[data-v-c1024c90]{width:350px;background:var(--face)}.prlncendiewqqkrevzeruhndoakghvtx>header[data-v-c1024c90]{display:flex}.prlncendiewqqkrevzeruhndoakghvtx>header>button[data-v-c1024c90]{flex:1;padding:10px 0;font-size:16px;color:var(--text);transition:color .2s ease}.prlncendiewqqkrevzeruhndoakghvtx>header>button[data-v-c1024c90]:hover{color:var(--textHighlighted);transition:color 0s}.prlncendiewqqkrevzeruhndoakghvtx>header>button.active[data-v-c1024c90]{color:var(--primary);transition:color 0s}.prlncendiewqqkrevzeruhndoakghvtx>.emojis[data-v-c1024c90]{height:300px;overflow-y:auto;overflow-x:hidden}.prlncendiewqqkrevzeruhndoakghvtx>.emojis>header.category[data-v-c1024c90]{position:sticky;top:0;left:0;z-index:1;padding:8px;background:var(--faceHeader);color:var(--text);font-size:12px}.prlncendiewqqkrevzeruhndoakghvtx>.emojis[data-v-c1024c90] header.sub{padding:4px 8px;color:var(--text);font-size:12px}.prlncendiewqqkrevzeruhndoakghvtx>.emojis[data-v-c1024c90] div.list{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;gap:4px;padding:8px}.prlncendiewqqkrevzeruhndoakghvtx>.emojis[data-v-c1024c90] div.list>button{padding:0;width:100%}.prlncendiewqqkrevzeruhndoakghvtx>.emojis[data-v-c1024c90] div.list>button:before{content:"";display:block;width:1px;height:0;padding-bottom:100%}.prlncendiewqqkrevzeruhndoakghvtx>.emojis[data-v-c1024c90] div.list>button:hover>*{transform:scale(1.2);transition:transform 0s}.prlncendiewqqkrevzeruhndoakghvtx>.emojis[data-v-c1024c90] div.list>button>*{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;font-size:28px;transition:transform .2s ease;pointer-events:none}',""]),t.exports=e},1139:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i(3),o=i(814),s=i(19),r=i(2),c=i(8),d=i(12),l=a.default.extend({i18n:Object(n.a)("common/views/components/emoji-picker.vue"),data(){return{emojilist:o.a,getStaticImageUrl:s.a,customEmojis:{},faGlobe:r.Ab,faHistory:r.Gb,categories:[{text:this.$t("custom-emoji"),icon:r.n,isActive:!0},{name:"people",text:this.$t("people"),icon:["far","laugh"],isActive:!1},{name:"animals_and_nature",text:this.$t("animals-and-nature"),icon:r.Qb,isActive:!1},{name:"food_and_drink",text:this.$t("food-and-drink"),icon:r.jd,isActive:!1},{name:"activity",text:this.$t("activity"),icon:r.wb,isActive:!1},{name:"travel_and_places",text:this.$t("travel-and-places"),icon:r.J,isActive:!1},{name:"objects",text:this.$t("objects"),icon:r.V,isActive:!1},{name:"symbols",text:this.$t("symbols"),icon:c.r,isActive:!1},{name:"flags",text:this.$t("flags"),icon:c.m,isActive:!1}]}},created(){let t=(this.$root.getMetaSync()||{emojis:[]}).emojis||[];t=Object(d.f)(t,t=>t.category||""),this.customEmojis=t,this.$store.state.device.activeEmojiCategoryName&&this.goCategory(this.$store.state.device.activeEmojiCategoryName)},methods:{go(t){this.goCategory(t.name)},goCategory(t){let e=!1;for(const i of this.categories)i.isActive=i.name===t,i.isActive&&(e=!0,this.$store.commit("device/set",{key:"activeEmojiCategoryName",value:i.name}));e||(this.categories[0].isActive=!0)},chosen(t){const e=t=>t.char||`:${t.name}:`;let i=this.$store.state.device.recentEmojis||[];i=i.filter(i=>e(i)!==e(t)),i.unshift(t),this.$store.commit("device/set",{key:"recentEmojis",value:i.splice(0,16)}),this.$emit("chosen",e(t))}}}),v=(i(1091),i(1)),h=Object(v.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prlncendiewqqkrevzeruhndoakghvtx"},[i("header",t._l(t.categories,(function(e){return i("button",{key:e.text,class:{active:e.isActive},attrs:{title:e.text},on:{click:function(i){return t.go(e)}}},[i("fa",{attrs:{icon:e.icon,"fixed-width":""}})],1)})),0),i("div",{staticClass:"emojis"},[t.categories[0].isActive?[i("header",{staticClass:"category"},[i("fa",{attrs:{icon:t.faHistory,"fixed-width":""}}),t._v(" "+t._s(t.$t("recent-emoji")))],1),i("div",{staticClass:"list"},t._l(t.$store.state.device.recentEmojis||[],(function(e,a){return i("button",{key:a,attrs:{title:e.name},on:{click:function(i){return t.chosen(e)}}},[null!=e.char?i("mk-emoji",{attrs:{emoji:e.char}}):i("img",{attrs:{src:t.$store.state.device.disableShowingAnimatedImages?t.getStaticImageUrl(e.url):e.url}})],1)})),0)]:t._e(),i("header",{staticClass:"category"},[i("fa",{attrs:{icon:t.categories.find((function(t){return t.isActive})).icon,"fixed-width":""}}),t._v(" "+t._s(t.categories.find((function(t){return t.isActive})).text))],1),t.categories.find((function(t){return t.isActive})).name?[i("div",{staticClass:"list"},t._l(t.emojilist.filter((function(e){return e.category===t.categories.find((function(t){return t.isActive})).name})),(function(e){return i("button",{key:e.name,attrs:{title:e.name},on:{click:function(i){return t.chosen(e)}}},[i("mk-emoji",{attrs:{emoji:e.char}})],1)})),0)]:t._l(Object.keys(t.customEmojis),(function(e,a){return i("div",{key:a},[i("header",{staticClass:"sub"},[t._v(t._s(e||t.$t("no-category")))]),i("div",{staticClass:"list"},t._l(t.customEmojis[e],(function(e){return i("button",{key:e.name,attrs:{title:e.name},on:{click:function(i){return t.chosen(e)}}},[i("img",{attrs:{src:t.$store.state.device.disableShowingAnimatedImages?t.getStaticImageUrl(e.url):e.url}})])})),0)])}))],2)])}),[],!1,null,"c1024c90",null);e.default=h.exports},804:function(t,e,i){var a=i(1092);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(5).default)("6396074d",a,!0,{})}}]);
//# sourceMappingURL=57.11.37.1.js.map