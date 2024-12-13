"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[2420,2637,3577,5018],{73577:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var a=r(37951),o=r(11009),n=r(9720),i=r(72637),l=r(82657),s=(r(27976),r(42420)),c=r(20879);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,o,n,i,l=[],s=!0,c=!1;try{if(n=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(a=n.call(r)).done)&&(l.push(a.value),l.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}var m=(0,l.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},add:{position:"absolute",bottom:"12%",right:"10%","&:hover":{filter:"brightness(0.75)",transition:"filter ease-in 0.15s"}},or:{fontSize:40,color:e.palette.primary.main,textAlign:"center",fontWeight:"bold"},contactList:{zIndex:"10001 !important",maxHeight:400,"& div::-webkit-scrollbar":{width:6},"& div::-webkit-scrollbar-thumb":{background:"#ffffff52"},"& div::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"& div::-webkit-scrollbar-track":{background:"transparent"}},contactListTrigger:{width:"100%",height:60,background:"red",textAlign:"center"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const b=function(e){var t=m(),r=(0,n.W6)(),l=(0,o.d4)((function(e){return e.data.data.messages})),u=d((0,a.useState)([]),2),b=u[0],h=u[1];return(0,a.useEffect)((function(){var e=[];l.length>0&&(l.sort((function(e,t){return t.time-e.time})).map((function(t,r){null!=e[t.number]?t.time>e[t.number].time&&(e[t.number]=t):e[t.number]=t})),e.sort((function(e,t){return t.time-e.time}))),h(e)}),[l]),a.createElement("div",{className:t.wrapper},Object.keys(b).length>0?Object.entries(b).map((function(e){var t=d(e,2),r=t[0],o=t[1];return a.createElement(s.default,{key:r,message:o,unread:l.filter((function(e){return e.number===o.number&&e.unread})).length})})):a.createElement("div",{className:t.emptyMsg},"You Have No Messages"),a.createElement(i.A,{className:t.add,color:"primary",onClick:function(){return r.push("/apps/messages/new")}},a.createElement(c.g,{icon:["fas","plus"]})))}},42420:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var a=r(37951),o=r(11009),n=r(9720),i=r(10947),l=r(218),s=r(39950),c=r(82657),d=r(71741),u=r.n(d),m=(0,c.A)((function(e){return{convo:{"&::before":{background:"transparent !important"},background:e.palette.secondary.dark,padding:"20px 12px",border:"1px solid rgba(0, 0, 0, .25)","&:not(:last-child)":{borderBottom:"none"},"&:hover":{background:e.palette.secondary.main,transition:"background ease-in 0.15s",cursor:"pointer"}},avatar:{color:"#fff",height:55,width:55,position:"relative",top:0},avatarFav:{color:"#fff",height:55,width:55,position:"relative",top:0,border:"2px solid gold"},number:{fontSize:16,fontWeight:"bold",color:e.palette.text.light},message:{fontSize:16,color:e.palette.text.light,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},time:{fontSize:12,color:e.palette.text.main},unread:{width:20,height:20,lineHeight:"23px",position:"absolute",bottom:"5%",right:"15%",textAlign:"center",background:e.palette.error.main,color:e.palette.text.light,borderRadius:100}}}));const b=function(e){var t=m(),r=(0,n.W6)(),c=(0,o.d4)((function(e){return e.data.data.contacts})).filter((function(t){return t.number===e.message.number}))[0];return a.createElement(i.A,{className:t.convo,onClick:function(){r.push("/apps/messages/convo/".concat(e.message.number))}},a.createElement(l.Ay,{container:!0},a.createElement(l.Ay,{item:!0,xs:2,style:{position:"relative"}},null!=c?null!=c.avatar&&""!==c.avatar?a.createElement(s.A,{className:c.favorite?t.avatarFav:t.avatar,src:c.avatar,alt:c.name.charAt(0)}):a.createElement(s.A,{className:c.favorite?t.avatarFav:t.avatar,style:{background:c.color}},c.name.charAt(0)):a.createElement(s.A,{className:t.avatar},"#"),e.unread>0?a.createElement("div",{className:t.unread},e.unread):null),a.createElement(l.Ay,{item:!0,xs:10},null!=c?a.createElement("div",{className:t.number},c.name):a.createElement("div",{className:t.number},e.message.number),a.createElement("div",{className:t.message},e.message.message),a.createElement("div",{className:t.time},a.createElement(u(),{fromNow:!0},+e.message.time)))))}},72637:(e,t,r)=>{r.d(t,{A:()=>v});var a=r(89353),o=r(50566),n=r(37951),i=r(93305),l=r(10063),s=r(1033),c=r(94202),d=r(85219),u=r(30525);function m(e){return(0,u.A)("MuiFab",e)}const b=(0,r(85793).A)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge"]);var h=r(45186),p=r(29127);const g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],f=(0,h.Ay)(s.A,{name:"MuiFab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,c.A)(r.size)}`],"inherit"===r.color&&t.colorInherit,"primary"===r.color&&t.primary,"secondary"===r.color&&t.secondary]}})((({theme:e,ownerState:t})=>(0,o.A)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},textDecoration:"none"},[`&.${b.focusVisible}`]:{boxShadow:e.shadows[6]},[`&.${b.disabled}`]:{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},"small"===t.size&&{width:40,height:40},"medium"===t.size&&{width:48,height:48},"extended"===t.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===t.variant&&"small"===t.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===t.variant&&"medium"===t.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===t.color&&{color:"inherit"})),(({theme:e,ownerState:t})=>(0,o.A)({},"primary"===t.color&&{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},"secondary"===t.color&&{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}}))),v=n.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiFab"}),{children:n,className:s,color:u="default",component:b="button",disabled:h=!1,disableFocusRipple:v=!1,focusVisibleClassName:y,size:w="large",variant:k="circular"}=r,A=(0,a.A)(r,g),x=(0,o.A)({},r,{color:u,component:b,disabled:h,disableFocusRipple:v,size:w,variant:k}),S=(e=>{const{color:t,variant:r,classes:a,size:o}=e,n={root:["root",r,`size${(0,c.A)(o)}`,"inherit"===t&&"colorInherit","primary"===t&&"primary","secondary"===t&&"secondary"]};return(0,l.A)(n,m,a)})(x);return(0,p.jsx)(f,(0,o.A)({className:(0,i.A)(S.root,s),component:b,disabled:h,focusRipple:!v,focusVisibleClassName:(0,i.A)(S.focusVisible,y),ownerState:x,ref:t},A,{children:n}))}))}}]);