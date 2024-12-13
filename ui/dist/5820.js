"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[2081,5749,5820,8547],{12081:(e,t,n)=>{n.r(t),n.d(t,{TestSound:()=>a,UpdateSetting:()=>o});var r=n(37030),o=function(e,t){return function(n){r.A.send("UpdateSetting",{type:e,val:t}).then((function(r){n({type:"UPDATE_DATA",payload:{type:"player",id:"PhoneSettings",key:e,data:t}})})).catch((function(e){console.log(e)}))}},a=function(e,t){return function(n){r.A.send("TestSound",{type:e,val:t})}}},75820:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(37951),o=n(11009),a=n(218),i=n(82657),l=n(8547),c=n(75749),u=n(12081);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=(0,i.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,textAlign:"center",padding:"0 2px"},colorsList:{height:"95%",overflowY:"auto",overflowX:"hidden",margin:"0 !important","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}}}}));const y=(0,o.Ng)(null,{UpdateSetting:u.UpdateSetting})((function(e){var t=m(),n=(0,o.d4)((function(e){return e.data.data.player.PhoneSettings}));return r.createElement("div",{className:t.wrapper},r.createElement(a.Ay,{container:!0,className:t.colorsList},r.createElement(a.Ay,{item:!0,xs:12},r.createElement(l.default,{label:"Accent Color",color:Boolean(null==n?void 0:n.colors)?n.colors.accent:"#dd1e36",onSave:function(t){e.UpdateSetting("colors",p(p({},n.colors),{},{accent:t}))}}))),r.createElement(c.default,null))}))},8547:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(37951),o=n(11009),a=n(218),i=n(10947),l=n(39950),c=n(82657),u=n(20879),s=n(27976);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d=(0,c.A)((function(e){return{div:{width:"100%",textDecoration:"none",whiteSpace:"nowrap",verticalAlign:"middle",userSelect:"none","-webkit-user-select":"none",textAlign:"left"},rowWrapper:{background:e.palette.secondary.main,padding:"25px 12px",width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},avatar:{color:e.palette.text.dark,height:55,width:55,fontSize:35,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto"},avatarIcon:{fontSize:35,color:e.palette.text.light},sectionHeader:{display:"block",fontSize:20,fontWeight:"bold",lineHeight:"35px"},arrow:{fontSize:35,position:"absolute",top:0,bottom:0,right:0,margin:"auto"},selectedItem:{color:e.palette.text.main,fontWeight:"bold"}}}));const m=function(e){var t=d(),n=((0,o.d4)((function(e){return e.data.data.player.PhoneSettings})),f((0,r.useState)(!1),2)),c=n[0],p=n[1],m=f((0,r.useState)(e.color),2),y=m[0],b=m[1],g=function(){p(!c)},h=e.disabled?"".concat(t.div," disabled"):t.div,v=e.disabled?{opacity:.5}:{};return r.createElement("div",{className:h,style:v},r.createElement(a.Ay,{container:!0},r.createElement(i.A,{className:t.rowWrapper,onClick:g},r.createElement(a.Ay,{item:!0,xs:12},r.createElement(a.Ay,{container:!0},r.createElement(a.Ay,{item:!0,xs:2,style:{position:"relative"}},r.createElement(l.A,{className:t.avatar,style:{backgroundColor:e.color}},r.createElement(u.g,{icon:["fas","eye-dropper-half"],className:t.avatarIcon}))),r.createElement(a.Ay,{item:!0,xs:8,style:{paddingLeft:5,position:"relative"}},r.createElement("span",{className:t.sectionHeader},e.label),r.createElement("span",{className:t.selectedItem,style:{color:e.color}},e.color)),r.createElement(a.Ay,{item:!0,xs:2,style:{position:"relative"}},r.createElement(u.g,{icon:["fas","chevron-right"],className:t.arrow})))))),c?r.createElement(s.aF,{open:c,title:"Select ".concat(e.label),onClose:function(){return g()},onAccept:function(t){g(),e.onSave(y)},acceptLang:"Save"},r.createElement(s.sk,{color:y,onChange:function(e){b(e.hex)}})):null)}},75749:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(37951),o=n(9720),a=(0,n(82657).A)((function(e){return{phoneVers:{height:40,lineHeight:"40px",textAlign:"center",fontFamily:"Aclonica",width:"100%",userSelect:"none","-webkit-user-select":"none"}}}));const i=function(e){var t=a(),n=(0,o.W6)();(0,r.useEffect)((function(){return function(){clearTimeout(i)}}),[]);var i=null,l=function(){clearTimeout(i)};return r.createElement("div",{className:t.phoneVers,onMouseDown:function(){i=setTimeout((function(){n.push("/apps/settings/software")}),2e3)},onMouseUp:l,onMouseLeave:l},"Angry Boi OS ",r.createElement("small",null,"v","1.0.0"))}}}]);