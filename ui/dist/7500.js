"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[2081,7500],{12081:(e,t,a)=>{a.r(t),a.d(t,{TestSound:()=>l,UpdateSetting:()=>r});var n=a(37030),r=function(e,t){return function(a){n.A.send("UpdateSetting",{type:e,val:t}).then((function(n){a({type:"UPDATE_DATA",payload:{type:"player",id:"PhoneSettings",key:e,data:t}})})).catch((function(e){console.log(e)}))}},l=function(e,t){return function(a){n.A.send("TestSound",{type:e,val:t})}}},67500:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(37951),r=a(11009),l=a(10947),o=a(66279),i=a(83394),c=a(7396),u=a(82657),s=a(20879),d=(a(41518),a(12081)),p=a(27059),m=a(27976),g=a(89039);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l,o,i=[],c=!0,u=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(n=l.call(a)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}var b=(0,u.A)((function(e){return{wrapper:{background:"#1e1f24",height:"100%",userSelect:"none",padding:10,textAlign:"center",borderRadius:7,"-webkit-user-select":"none",overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.4)","&:hover":{background:"#3A3A3C",borderColor:"#007AFF",transition:"background 0.3s, border-color 0.3s",cursor:"pointer"}},wrapperActive:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",padding:10,userSelect:"none",border:"2px solid ".concat(e.palette.primary.main),textAlign:"left","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,borderColor:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},img:{height:200,width:"100%",display:"block"},addContainer:{height:"90%",lineHeight:"200px",position:"relative",width:"100%",display:"block",backgroundColor:e.palette.primary.main,marginBottom:7},addIcon:{position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",fontSize:35},editField:{width:"100%",marginBottom:20,fontSize:20},buttons:{width:"100%",display:"flex",margin:"auto"},buttonNeg:{width:"-webkit-fill-available",padding:20,color:e.palette.error.main,"&:hover":{backgroundColor:"".concat(e.palette.error.main,"14")}},buttonPos:{width:"-webkit-fill-available",padding:20,color:e.palette.success.main,"&:hover":{backgroundColor:"".concat(e.palette.success.main,"14")}},customPH:{position:"relative",height:425,width:250,margin:"auto",background:e.palette.secondary.dark,marginBottom:25},customImg:{display:"block",height:425,width:250,margin:"auto",marginBottom:25},label:{color:"#F2F2F7",fontSize:"14px",marginTop:"0px",fontWeight:"bold"}}}));const v=(0,r.Ng)(null,{UpdateSetting:d.UpdateSetting})((function(e){var t=(0,p.MW)(),a=b(),u=(0,r.d4)((function(e){return e.data.data.player.PhoneSettings})),d=null==g._[u.wallpaper],h=f((0,n.useState)(!1),2),v=h[0],y=h[1],w=f((0,n.useState)(""),2),k=w[0],S=(w[1],f((0,n.useState)(!1),2)),A=S[0],C=S[1],E=f((0,n.useState)(d?u.wallpaper:""),2),N=E[0],x=E[1],I=function(e){A&&v||y(e)};return n.createElement(n.Fragment,null,n.createElement(l.A,{className:d?a.wrapperActive:a.wrapper,onClick:function(){return I(!0)}},d?n.createElement("img",{className:a.img,src:u.wallpaper,alt:"Custom Wallpaper"}):n.createElement("div",{className:a.addContainer},n.createElement(s.g,{icon:["fas","plus"],className:a.addIcon})),n.createElement("div",{className:a.label},"Custom")),v?n.createElement(m.aF,{open:v,title:"Custom Wallpaper",onClose:function(){return I(!1)},onDelete:d?function(a){a.preventDefault(),I(!1),x(""),e.UpdateSetting("wallpaper","wallpaper"),t("Wallpaper Deleted")}:null,onAccept:function(){C(!1),I(!1),""!==N&&(e.UpdateSetting("wallpaper",N),t("Custom Wallpaper Saved"))},acceptLang:"Save"},A?n.createElement("div",null,n.createElement("div",{className:a.customPH},n.createElement(o.A,{size:70,className:a.addIcon})),n.createElement("div",null,"Checking Link")):n.createElement("div",null,""!=N?n.createElement("img",{className:a.customImg,src:N,alt:"Custom Wallpaper"}):n.createElement("div",{className:a.customPH},n.createElement(s.g,{icon:["fas","plus"],className:a.addIcon})),""!==k?n.createElement(i.A,{variant:"filled",severity:"error",elevation:6,className:a.error},k):null,n.createElement(c.A,{className:a.editField,label:"Wallpaper Link",name:"wallpaper",type:"text",onChange:function(e){e.preventDefault(),x(e.target.value)},value:N,InputLabelProps:{style:{fontSize:20}}}))):null)}))}}]);