"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[606,2085,9289],{92085:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var n=r(37951),o=r(8102),i=r(66361),a=r(2710),c=r(892),l=r(4881),u=r(82657),s=r(20879),f=r(35855),p=(0,u.A)((function(t){return{}}));const h=function(t){var e=t.service,r=t.onSelect;p();return n.createElement(n.Fragment,null,n.createElement(o.Ay,{divider:!0},n.createElement(i.A,{primary:e.Label,secondary:f.v3.format(e.Price)}),n.createElement(a.A,null,n.createElement(c.A,{title:"Purchase ".concat(e.Label)},n.createElement(l.A,{disabled:Boolean(e.Disabled),onClick:function(){return r(e)}},n.createElement(s.g,{icon:["fas","cart-shopping"]}))))))}},19289:(t,e,r)=>{r.r(e),r.d(e,{default:()=>w});var n=r(37951),o=r(11009),i=r(10606),a=r(218),c=r(41268),l=r(82657),u=(r(20879),r(35855)),s=r(27976),f=r(92085),p=r(27059),h=r(37030);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(){d=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new C(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function x(){}var A={};u(A,a,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(I([])));k&&k!==r&&n.call(k,a)&&(A=k);var S=x.prototype=b.prototype=Object.create(A);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var l=f(t[o],t,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==y(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,r,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=_(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?m:h,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(y(e)+" is not iterable")}return w.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=u(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},L(O.prototype),u(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(S),u(S,l,"Generator"),u(S,a,(function(){return this})),u(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function v(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var b=(0,l.A)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main},header:{background:"#5597d0",fontSize:20,padding:15,lineHeight:"50px",height:78},headerAction:{}}}));const w=(0,o.Ng)()((function(t){var e=b(),r=(0,p.MW)(),l=(0,o.d4)((function(t){return t.data.data.govtServices})),y=m((0,n.useState)(null),2),g=y[0],w=y[1],x=m((0,n.useState)(!1),2),A=(x[0],x[1]),E=function(){var t,e=(t=d().mark((function t(){var e;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A(!0),t.prev=1,t.next=4,h.A.send("Govt:PurchaseService",g._id);case 4:return t.next=6,t.sent.json();case 6:if((e=t.sent).error){t.next=11;break}r("You've Successfully Registered A New Company"),t.next=20;break;case 11:t.t0=e.code,t.next=1===t.t0?14:2===t.t0?16:3===t.t0?18:20;break;case 14:return r("Unable to Purchase Service"),t.abrupt("break",20);case 16:return r(e.message),t.abrupt("break",20);case 18:return r("You Dont Have Enough Money, Broke Ass"),t.abrupt("break",20);case 20:t.next=26;break;case 22:t.prev=22,t.t1=t.catch(1),console.log(t.t1),r("Unable to Purchase Service");case 26:w(null),A(!1);case 28:case"end":return t.stop()}}),t,null,[[1,22]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return n.createElement(n.Fragment,null,n.createElement("div",{className:e.wrapper},n.createElement(i.A,{position:"static",className:e.header},n.createElement(a.Ay,{container:!0},n.createElement(a.Ay,{item:!0,xs:8},"Los Santos Services"),n.createElement(a.Ay,{item:!0,xs:4,style:{textAlign:"right"}}))),n.createElement(c.A,null,l.map((function(t){return n.createElement(f.default,{key:"srvc-".concat(t._id),service:t,onSelect:w})})))),Boolean(g)&&n.createElement(s.pT,{title:"Purchase Service?",open:!0,confirm:"Yes",decline:"No",onConfirm:E,onDecline:function(){return w(null)}},n.createElement("p",null,(0,u.WX)(g.Disclaimer))))}))},10606:(t,e,r)=>{r.d(e,{A:()=>m});var n=r(89353),o=r(50566),i=r(37951),a=r(93305),c=r(10063),l=r(45186),u=r(85219),s=r(94202),f=r(10947),p=r(30525);function h(t){return(0,p.A)("MuiAppBar",t)}(0,r(85793).A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var y=r(29127);const d=["className","color","enableColorOnDark","position"],v=(0,l.Ay)(f.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${(0,s.A)(r.position)}`],e[`color${(0,s.A)(r.color)}`]]}})((({theme:t,ownerState:e})=>{const r="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,o.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===e.position&&{position:"fixed",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===e.position&&{position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===e.position&&{position:"sticky",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"static"===e.position&&{position:"static"},"relative"===e.position&&{position:"relative"},"default"===e.color&&{backgroundColor:r,color:t.palette.getContrastText(r)},e.color&&"default"!==e.color&&"inherit"!==e.color&&"transparent"!==e.color&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},"inherit"===e.color&&{color:"inherit"},"dark"===t.palette.mode&&!e.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===e.color&&(0,o.A)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"}))})),m=i.forwardRef((function(t,e){const r=(0,u.A)({props:t,name:"MuiAppBar"}),{className:i,color:l="primary",enableColorOnDark:f=!1,position:p="fixed"}=r,m=(0,n.A)(r,d),g=(0,o.A)({},r,{color:l,position:p,enableColorOnDark:f}),b=(t=>{const{color:e,position:r,classes:n}=t,o={root:["root",`color${(0,s.A)(e)}`,`position${(0,s.A)(r)}`]};return(0,c.A)(o,h,n)})(g);return(0,y.jsx)(v,(0,o.A)({square:!0,component:"header",ownerState:g,elevation:4,className:(0,a.A)(b.root,i,"fixed"===p&&"mui-fixed"),ref:e},m))}))}}]);