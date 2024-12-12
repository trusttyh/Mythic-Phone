"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[2081,5749,6873,7660],{12081:(e,t,n)=>{n.r(t),n.d(t,{TestSound:()=>a,UpdateSetting:()=>o});var r=n(37030),o=function(e,t){return function(n){r.A.send("UpdateSetting",{type:e,val:t}).then((function(r){n({type:"UPDATE_DATA",payload:{type:"player",id:"PhoneSettings",key:e,data:t}})})).catch((function(e){console.log(e)}))}},a=function(e,t){return function(n){r.A.send("TestSound",{type:e,val:t})}}},76873:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(37951),o=n(11009),a=n(83394),i=n(218),l=n(82657),c=n(27059),u=n(7660),s=n(75749),p=(0,l.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},listWrapper:{height:"95%",overflowY:"auto",overflowX:"hidden",flexDirection:"column","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},listWrapperShort:{height:"86%",overflowY:"auto",overflowX:"hidden",flexDirection:"column","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},error:{fontWeight:"bold",height:"9%"}}}));const f=function(e){var t=p(),n=(0,c.K3)(),l=(0,o.d4)((function(e){var t;return null===(t=e.data.data.player)||void 0===t||null===(t=t.Apps)||void 0===t?void 0:t.installed})),f=(0,o.d4)((function(e){return e.data.data.player.PhoneSettings}));return r.createElement("div",{className:t.wrapper},f.notifications?null:r.createElement(a.A,{variant:"filled",severity:"error",elevation:6,className:t.error},"Notifications Are Currently Disabled System-wide, enable them to control on a per-app level."),r.createElement(i.Ay,{container:!0,spacing:0,wrap:"nowrap",className:f.notifications?t.listWrapper:t.listWrapperShort},l.map((function(e,t){var o=n[e];return null==o?null:r.createElement(u.default,{key:t,app:o})}))),r.createElement(s.default,null))}},7660:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(37951),o=n(11009),a=n(10947),i=n(218),l=n(39950),c=n(3673),u=n(82657),s=n(20879),p=n(12081);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var g=(0,u.A)((function(e){return{rowWrapper:{background:e.palette.secondary.main,padding:12,marginBottom:5,width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},appIcon:{fontSize:25,width:50,height:50,margin:"auto",color:"#fff"},appLabel:{display:"block",fontSize:20,fontWeight:"bold",lineHeight:"50px",textAlign:"left"},arrow:{fontSize:35,position:"absolute",top:0,bottom:0,right:0,margin:"auto"}}}));const v=(0,o.Ng)(null,{UpdateSetting:p.UpdateSetting})((function(e){var t=g(),n=(0,o.d4)((function(e){return e.data.data.player.PhoneSettings})),u=y((0,r.useState)(null==n.appNotifications[e.app.name]),2),p=u[0],f=u[1];return r.createElement(a.A,{className:t.rowWrapper,onClick:function(){n.notifications&&(e.UpdateSetting("appNotifications",p?m(m({},n.appNotifications),{},b({},e.app.name,!0)):Object.keys(n.appNotifications).reduce((function(t,r){return r!==e.app.name&&(t[r]=n.appNotifications[r]),t}),{})),f(!p))}},r.createElement(i.Ay,{item:!0,xs:12},r.createElement(i.Ay,{container:!0},r.createElement(i.Ay,{item:!0,xs:2,style:{position:"relative"}},r.createElement(l.A,{variant:"rounded",className:t.appIcon,style:{background:"".concat(e.app.color)}},r.createElement(s.g,{icon:e.app.icon}))),r.createElement(i.Ay,{item:!0,xs:8,style:{paddingLeft:5,position:"relative"}},r.createElement("span",{className:t.appLabel},e.app.label)),r.createElement(i.Ay,{item:!0,xs:2,style:{position:"relative"}},r.createElement(c.A,{className:t.arrow,checked:p&&n.notifications,disabled:!n.notifications,color:"primary"})))))}))},75749:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(37951),o=n(9720),a=(0,n(82657).A)((function(e){return{phoneVers:{height:40,lineHeight:"40px",textAlign:"center",fontFamily:"Aclonica",width:"100%",userSelect:"none","-webkit-user-select":"none"}}}));const i=function(e){var t=a(),n=(0,o.W6)();(0,r.useEffect)((function(){return function(){clearTimeout(i)}}),[]);var i=null,l=function(){clearTimeout(i)};return r.createElement("div",{className:t.phoneVers,onMouseDown:function(){i=setTimeout((function(){n.push("/apps/settings/software")}),2e3)},onMouseUp:l,onMouseLeave:l},"Angry Boi OS ",r.createElement("small",null,"v","1.0.0"))}}}]);