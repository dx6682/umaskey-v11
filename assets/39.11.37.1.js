(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{816:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a(129),s=a.n(r),n=i.default.extend({props:{user:{type:Object,required:!0},limit:{type:Number,required:!1,default:21}},data:()=>({fetching:!0,data:[],peak:null}),mounted(){this.$root.api("charts/user/notes",{userId:this.user.id,span:"day",limit:this.limit}).then(e=>{const t=[],a=[],i=[],r=new Date,n=r.getFullYear(),d=r.getMonth(),l=r.getDate();for(let r=0;r<this.limit;r++){const s=new Date(n,d,l-r);t.push([s,e.diffs.normal[r]]),a.push([s,e.diffs.reply[r]]),i.push([s,e.diffs.renote[r]])}new s.a(this.$refs.chart,{chart:{type:"bar",stacked:!0,height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"80%"}},dataLabels:{enabled:!1},grid:{clipMarkers:!1,padding:{top:0,right:8,bottom:0,left:8}},tooltip:{shared:!0,intersect:!1},series:[{name:"Normal",data:t},{name:"Reply",data:a},{name:"Renote",data:i}],xaxis:{type:"datetime",crosshairs:{width:1,opacity:1}}}).render()})}}),d=a(1),l=Object(d.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{ref:"chart"})])}),[],!1,null,null,null);t.default=l.exports}}]);
//# sourceMappingURL=39.11.37.1.js.map