"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[2081,3327],{12081:(e,t,n)=>{n.r(t),n.d(t,{TestSound:()=>o,UpdateSetting:()=>r});var a=n(37030),r=function(e,t){return function(n){a.A.send("UpdateSetting",{type:e,val:t}).then((function(a){n({type:"UPDATE_DATA",payload:{type:"player",id:"PhoneSettings",key:e,data:t}})})).catch((function(e){console.log(e)}))}},o=function(e,t){return function(n){a.A.send("TestSound",{type:e,val:t})}}},43327:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(37951),r=n(11009),o=n(10947),l=n(82657),i=n(12081),c=n(27059),p=(0,l.A)((function(e){return{wrapper:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",userSelect:"none",border:"2px solid ".concat(e.palette.secondary.dark),padding:10,textAlign:"left","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,borderColor:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},wrapperActive:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",userSelect:"none",padding:10,textAlign:"left",border:"2px solid ".concat(e.palette.primary.main),"-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},img:{height:200,width:"100%",display:"block"}}}));const d=(0,r.Ng)(null,{UpdateSetting:i.UpdateSetting})((function(e){var t=(0,c.MW)(),n=p(),l=(0,r.d4)((function(e){return e.data.data.player.PhoneSettings}));return(0,a.useEffect)((function(){if(l.wallpaper===e.item){var t=document.querySelector("#".concat(l.wallpaper));t&&t.scrollIntoView({block:"end",behavior:"smooth"})}}),[l.wallpaper]),a.createElement(o.A,{className:l.wallpaper===e.item?n.wrapperActive:n.wrapper,onClick:function(n){n.preventDefault(),e.UpdateSetting("wallpaper",e.item),t("Wallpaper Updated")},id:e.item},a.createElement("img",{className:n.img,src:e.wallpaper.file,alt:e.wallpaper.label}),e.wallpaper.label)}))}}]);