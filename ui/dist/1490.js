"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[606,1490,3082,5951,6371],{86371:(e,t,n)=>{n.r(t),n.d(t,{getActualRemainingAmount:()=>a,getLoanIdentifierType:()=>o,getLoanTypeName:()=>r,getNextPaymentAmount:()=>i});var r=function(e){switch(e){case"vehicle":return"Vehicle";case"property":return"Property";default:return"Asset"}},o=function(e){switch(e){case"vehicle":return"Vehicle VIN";case"property":return"Property ID";default:return"Asset ID"}},a=function(e){if(e.Remaining>0){var t=(100+e.InterestRate)/100;return Math.ceil(e.Remaining*t)}return 0},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(e.Remaining>0){var n=(100+e.InterestRate)/100,r=e.TotalPayments-e.PaidPayments;e.MissedPayments>1&&1===t&&(t=e.MissedPayments),t>r&&(t=r);var o=e.Remaining/r*t*n;return Math.ceil(o)}return 0}},75951:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(37951),o=n(11009),a=n(82657),i=n(20879),c=n(13082),l=n(86371),s=(0,a.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},accountList:{},emptyLogo:{width:"100%",fontSize:170,textAlign:"center",marginTop:"25%",color:"#30518c29"},emptyMsg:{color:e.palette.text.alt,width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold"},subTitle:{textAlign:"center",borderBottom:"1px solid ".concat(e.palette.border.divider),marginBottom:10,"& h3":{color:"#30518c",fontWeight:400,fontSize:19,marginBottom:5}}}}));const u=(0,o.Ng)()((function(e){var t=e.loanType,n=s(),a=(0,o.d4)((function(e){return e.data.data.bankLoans.loans})),u=a&&a.filter((function(e){return e.Type===t&&e.Remaining>0})),f=a&&a.filter((function(e){return e.Type===t&&e.Remaining<=0}));return u&&u.length>0||f&&f.length>0?r.createElement("div",{className:n.wrapper},r.createElement("div",{className:n.accountList},u&&(null==u?void 0:u.length)>0&&u.sort((function(e,t){return e.NextPayment-t.NextPayment})).map((function(e){return r.createElement(c.default,{key:e._id,loan:e})})),(null==f?void 0:f.length)>0&&r.createElement("div",{className:n.subTitle},r.createElement("h3",null,"Paid Off ",(0,l.getLoanTypeName)(t)," Loans")),(null==f?void 0:f.length)>0&&f.sort((function(e,t){return t.LastPayment-e.LastPayment})).map((function(e){return r.createElement(c.default,{key:e._id,loan:e})})))):r.createElement("div",{className:n.wrapper},r.createElement("div",{className:n.emptyLogo},r.createElement(i.g,{icon:["fas","face-disappointed"]})),r.createElement("div",{className:n.emptyMsg},"You Have No ",(0,l.getLoanTypeName)(t)," Loans"))}))},13082:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(37951),o=(n(11009),n(82657)),a=n(10947),i=n(99135),c=n(20879),l=n(71741),s=n.n(l),u=n(86371),f=(0,o.A)((function(e){return{link:{textDecoration:"none"},account:{width:"100%",padding:"10px 15px",marginBottom:"5%",position:"relative",background:e.palette.secondary.dark,willChange:"background",transition:"background 400ms",borderRadius:5,boxShadow:"0px 0px 12px -2px rgba(0,0,0,0.3)","&:hover":{cursor:"pointer",background:"rgba(255, 255, 255, 0.01)"}},defaultedAccount:{border:"3px solid ".concat(e.palette.error.main)},missedLastPayment:{border:"3px solid ".concat(e.palette.warning.dark)},accountDetails:{borderBottom:"1px solid ".concat(e.palette.border.divider),"& h3":{fontWeight:400,fontSize:19,marginBottom:0,"& small":{fontSize:12,color:e.palette.text.alt,"&::before":{content:'" - "'}}}},accountBalance:{marginLeft:"5%","& h2":{fontWeight:400,color:e.palette.text.alt,marginTop:24},"& span":{fontWeight:400,color:e.palette.success.main,marginTop:24}},backIcon:{color:"#30518c29",position:"absolute",top:"6%",right:"4%",fontSize:80},cancelButton:{position:"absolute",marginLeft:"5%",bottom:"5%",color:e.palette.error.main}}}));const p=function(e){var t=e.loan,n=f(),o=(0,u.getActualRemainingAmount)(t),l=t.TotalPayments-t.PaidPayments,p=function(){return t.Defaulted?"This loan has been defaulted because you missed too many payments.":t.MissedPayments>0&&(t.MissedPayments>1?"You missed the last ".concat(t.MissedPayments," payments for this loan."):"You missed the last payment for this loan.")};return r.createElement(i.N_,{to:"/apps/loans/view/".concat(t._id),className:n.link},r.createElement(a.A,{className:"".concat(n.account," ").concat(t.Defaulted||t.MissablePayments>1&&t.MissedPayments>=t.MissablePayments-1?n.defaultedAccount:t.MissedPayments>0&&n.missedLastPayment)},r.createElement("div",{className:n.accountDetails},r.createElement("h3",null,(0,u.getLoanTypeName)(t.Type)," Loan"),r.createElement("p",null,"Interest Rate: ",t.InterestRate,"%",r.createElement("br",null),"Remaining Payments: ",l,r.createElement("br",null),"Next Payment Due: ",t.NextPayment?r.createElement(s(),{unix:!0,date:t.NextPayment,calendar:!0}):"No Due Payments",r.createElement("br",null),t.Remaining>0&&t.NextPayment&&r.createElement("span",null,"Next Payment Amount:"," ",r.createElement("span",{className:n.currency},"$",(0,u.getNextPaymentAmount)(t).toLocaleString("en-US")))),p()&&r.createElement("p",null,r.createElement("b",null,p()))),r.createElement("div",{className:n.accountBalance},r.createElement("h2",null,"Remaining:"," ",r.createElement("span",null,"$",o.toLocaleString("en-US")))),r.createElement(c.g,{className:n.backIcon,icon:["fas","hand-holding-dollar"]})))}},21490:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(37951),o=n(11009),a=n(82657),i=n(72563),c=n(42329),l=n(66178),s=n(38631),u=n(10606),f=n(218),p=n(892),m=n(4881),d=n(20879),h=n(75951),y=n(37030),g=n(27976);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(){b=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),c=new O(r||[]);return o(i,"_invoke",{value:S(e,n,c)}),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var p="suspendedStart",m="suspendedYield",d="executing",h="completed",y={};function g(){}function x(){}function E(){}var w={};s(w,i,(function(){return this}));var A=Object.getPrototypeOf,k=A&&A(A(C([])));k&&k!==n&&r.call(k,i)&&(w=k);var L=E.prototype=g.prototype=Object.create(w);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function n(o,a,i,c){var l=f(e[o],e,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==v(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(u).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function S(t,n,r){var o=p;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var l=T(c,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var s=f(t,n,r);if("normal"===s.type){if(o=r.done?h:m,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=h,r.method="throw",r.arg=s.arg)}}}function T(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=f(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function C(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(v(t)+" is not iterable")}return x.prototype=E,o(L,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:x,configurable:!0}),x.displayName=s(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,s(e,l,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},N(P.prototype),s(P.prototype,c,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new P(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(L),s(L,l,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function x(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){x(a,r,o,i,c,"next",e)}function c(e){x(a,r,o,i,c,"throw",e)}i(void 0)}))}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],l=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=(0,a.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},header:{background:"#30518c",fontSize:20,padding:15,lineHeight:"50px",height:78},headerAction:{},content:k(k(k(k(k({height:"83.6%",padding:15,overflowY:"auto",overflowX:"hidden"},"padding",10),"&::-webkit-scrollbar",{width:6}),"&::-webkit-scrollbar-thumb",{background:"#ffffff52"}),"&::-webkit-scrollbar-thumb:hover",{background:e.palette.primary.main}),"&::-webkit-scrollbar-track",{background:"transparent"}),highlight:{color:e.palette.info.light},editField:{marginTop:0,marginBottom:10,width:"100%"}}})),N=(0,i.A)((function(e){return{root:{borderBottom:"1px solid #30518c"},indicator:{backgroundColor:"#30518c"}}}))((function(e){return r.createElement(l.A,e)})),P=(0,i.A)((function(e){return{root:{width:"50%","&:hover":{color:"#30518c",transition:"color ease-in 0.15s"},"&$selected":{color:"#30518c",transition:"color ease-in 0.15s"},"&:focus":{color:"#30518c",transition:"color ease-in 0.15s"}},selected:{}}}))((function(e){return r.createElement(s.A,e)}));const S=function(e){var t=L(),n=(0,o.wA)(),a=(0,o.d4)((function(e){return e.loans.tab})),i=(0,o.d4)((function(e){return e.data.data.bankLoans})),l=(0,o.d4)((function(e){var t;return null===(t=e.data.data.bankLoans)||void 0===t?void 0:t.creditScore})),s=w((0,r.useState)(!1),2),v=s[0],x=s[1],A=w((0,r.useState)(!1),2),k=A[0],S=A[1],T=(0,r.useMemo)((function(){return(0,c.throttle)(E(b().mark((function e(){var t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v){e.next=2;break}return e.abrupt("return");case 2:return x(!0),e.prev=3,e.next=6,y.A.send("Loans:GetData");case 6:return e.next=8,e.sent.json();case 8:if(!(t=e.sent)){e.next=13;break}n({type:"SET_DATA",payload:{type:"bankLoans",data:t}}),e.next=14;break;case 13:throw t;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),n({type:"SET_DATA",payload:{type:"bankLoans",data:Array()}});case 19:x(!1);case 20:case"end":return e.stop()}}),e,null,[[3,16]])}))),3500)}),[]);(0,r.useEffect)((function(){T()}),[]);return r.createElement("div",{className:t.wrapper},r.createElement(u.A,{position:"static",className:t.header},r.createElement(f.Ay,{container:!0},r.createElement(f.Ay,{item:!0,xs:9,style:{lineHeight:"50px"}},"Loans - ",0===a?"Vehicle":"Property"),r.createElement(f.Ay,{item:!0,xs:2,style:{textAlign:"center"}},r.createElement(p.A,{title:"Credit Score"},r.createElement("span",null,r.createElement(m.A,{onClick:function(){S(!0)},disabled:v||k,className:t.headerAction},r.createElement(d.g,{icon:["fas","award"]}))))),r.createElement(f.Ay,{item:!0,xs:1,style:{textAlign:"center"}},r.createElement(p.A,{title:"Refresh"},r.createElement("span",null,r.createElement(m.A,{onClick:T,disabled:v,className:t.headerAction},r.createElement(d.g,{className:"fa ".concat(v?"fa-spin":""),icon:["fas","arrows-rotate"]}))))))),v||!i?r.createElement(g.aH,{static:!0,text:"Loading Loans"}):r.createElement(r.Fragment,null,r.createElement("div",{className:t.content},r.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:0!==a,id:"accounts"},0===a&&r.createElement(h.default,{loanType:"vehicle"})),r.createElement("div",{className:t.tabPanel,role:"tabpanel",hidden:1!==a,id:"bills"},1===a&&r.createElement(h.default,{loanType:"property"}))),r.createElement("div",{className:t.tabs},r.createElement(N,{value:a,onChange:function(e,t){n({type:"SET_LOAN_TAB",payload:{tab:t}})},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",scrollButtons:!1},r.createElement(P,{className:t.phoneTab,label:"Vehicle Loans"}),r.createElement(P,{className:t.phoneTab,label:"Property Loans"}))),r.createElement(g.aF,{open:k,title:"Credit Score",onClose:function(){return S(!1)}},r.createElement("p",{className:t.editField},"Your Credit Score is"," ",r.createElement("span",{className:t.highlight},null!=l?l:0),r.createElement("br",null),r.createElement("br",null),"You can improve your credit score by paying loans on time or in advanced. Missing loan payments will decrease your credit score."))))}},10606:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(89353),o=n(50566),a=n(37951),i=n(93305),c=n(10063),l=n(45186),s=n(85219),u=n(94202),f=n(10947),p=n(30525);function m(e){return(0,p.A)("MuiAppBar",e)}(0,n(85793).A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var d=n(29127);const h=["className","color","enableColorOnDark","position"],y=(0,l.Ay)(f.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${(0,u.A)(n.position)}`],t[`color${(0,u.A)(n.color)}`]]}})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,o.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:n,color:e.palette.getContrastText(n)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,o.A)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),g=a.forwardRef((function(e,t){const n=(0,s.A)({props:e,name:"MuiAppBar"}),{className:a,color:l="primary",enableColorOnDark:f=!1,position:p="fixed"}=n,g=(0,r.A)(n,h),v=(0,o.A)({},n,{color:l,position:p,enableColorOnDark:f}),b=(e=>{const{color:t,position:n,classes:r}=e,o={root:["root",`color${(0,u.A)(t)}`,`position${(0,u.A)(n)}`]};return(0,c.A)(o,m,r)})(v);return(0,d.jsx)(y,(0,o.A)({square:!0,component:"header",ownerState:v,elevation:4,className:(0,i.A)(b.root,a,"fixed"===p&&"mui-fixed"),ref:t},g))}))}}]);