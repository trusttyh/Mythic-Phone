"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[215],{30215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(37951),a=n(11009),c=n(68272),l=n(30455),o=n(34412),i=n(51105),s=n(41268),u=n(8102),m=n(66361),d=n(18260),f=n(82657),y=n(20879),p=n(9655),E=n.n(p),h=n(27976);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c,l,o=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(o.push(r.value),o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{if(!i&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=(0,f.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,"& span":{marginLeft:5,fontSize:12,color:e.palette.text.alt,"&::before":{content:'"("'},"&::after":{content:'")"'}}},track:{background:e.palette.secondary.dark},youindic:{color:"gold"},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"},owned:{color:"gold",marginLeft:5}}}));const S=function(e){var t=v(),n=(0,a.d4)((function(e){var t;return null===(t=e.data.data.player.Alias)||void 0===t?void 0:t.redline})),f=(0,a.d4)((function(e){return e.data.data.tracks})),p=(0,a.d4)((function(e){return e.race.races})).filter((function(e){return 2==e.state})).sort((function(e,t){return t.time-e.time})),A=g((0,r.useState)(null),2),S=A[0],b=A[1],k=g((0,r.useState)(null),2),w=k[0],N=k[1];return r.createElement("div",{className:t.wrapper},r.createElement("div",null,p.length>0?p.map((function(e,a){var p=f.filter((function(t){return t._id==e.track}))[0];return p?r.createElement(c.A,{key:"race-".concat(a),className:t.track,expanded:w===a,onChange:w===a?function(){return N(null)}:function(){return N(a)}},r.createElement(l.A,{expandIcon:r.createElement(y.g,{icon:["fas","chevron-down"]})},r.createElement(o.A,{className:t.heading},e.name,null!=e.racers[n]&&r.createElement("span",{className:t.youindic},"*")),r.createElement(o.A,{className:t.secondaryHeading},p.Name)),r.createElement(i.A,null,r.createElement(s.A,null,r.createElement(u.Ay,null,r.createElement(m.A,{primary:"Name",secondary:e.name})),r.createElement(u.Ay,null,r.createElement(m.A,{primary:"Host",secondary:"".concat(e.host)})),r.createElement(u.Ay,null,r.createElement(m.A,{primary:"Track",secondary:"".concat(p.Name," (").concat(p.Distance,")")})),r.createElement(u.Ay,null,r.createElement(m.A,{primary:"# of Laps",secondary:e.laps})),r.createElement(u.Ay,null,r.createElement(m.A,{primary:"Racers",secondary:Object.keys(e.racers).length>0?"".concat(Object.keys(e.racers).length," Racers"):null})),r.createElement(u.Ay,null,r.createElement(s.A,null,r.createElement(u.Ay,null,r.createElement(d.A,{variant:"contained",color:"primary",onClick:function(){return b(e)}},"View Racers"))))))):null})):r.createElement("div",{className:t.emptyMsg},"No Recent Races"),r.createElement(h.aF,{open:null!=S,title:"Race Results",onClose:function(){return b(null)}},null!=S&&r.createElement(s.A,null,Object.keys(S.racers).filter((function(e){return S.racers[e].finished})).sort((function(e,t){var n,r;return(null===(n=S.racers[e])||void 0===n?void 0:n.place)-(null===(r=S.racers[t])||void 0===r?void 0:r.place)})).map((function(e){var n=E().duration(S.racers[e].fastest.lapEnd-S.racers[e].fastest.lapStart);return r.createElement(u.Ay,null,r.createElement(m.A,{primary:r.createElement("span",null,"#".concat(S.racers[e].place," ").concat(e),Boolean(S.racers[e].isOwned)&&r.createElement(y.g,{className:t.owned,icon:["fas","award"]})),secondary:r.createElement("div",null,r.createElement("span",null,"Cash: $".concat(S.racers[e].reward.cash).concat(S.racers[e].reward.crypto>0?", $".concat(S.racers[e].reward.coin,": ").concat(S.racers[e].reward.crypto):"")),r.createElement("div",null,"Fastest Lap:"," ","".concat(String(n.hours()).padStart(2,"0"),":").concat(String(n.minutes()).padStart(2,"0"),":").concat(String(n.seconds()).padStart(2,"0"),":").concat(String(n.milliseconds()).padStart(3,"0"))))}))})),Object.keys(S.racers).filter((function(e){return!S.racers[e].finished})).map((function(e){return r.createElement(u.Ay,null,r.createElement(m.A,{primary:"".concat(e),secondary:"DNF"}))}))))))}}}]);