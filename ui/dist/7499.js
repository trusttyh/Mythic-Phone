"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[70,204,7499],{70204:(e,t,n)=>{n.r(t),n.d(t,{getAccountName:()=>a,getAccountType:()=>c});var a=function(e){switch(e.Type){case"personal":return"Current Account";case"personal_savings":return"Savings Account";default:return e.Name}},c=function(e){switch(e.Type){case"personal":return"Current Account";case"personal_savings":return"Savings Account";case"organization":return"Organization Account";default:return"Bank Account"}}},17499:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(37951),c=n(11009),o=n(82657),r=n(20879),l=n(30070),i=(0,o.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main},accountList:{},emptyLogo:{width:"100%",fontSize:170,textAlign:"center",marginTop:"25%",color:"#30518c29"},emptyMsg:{color:e.palette.text.alt,width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold"}}}));const u=(0,c.Ng)()((function(e){var t,n=i(),o=null===(t=(0,c.d4)((function(e){return e.data.data.bankAccounts})))||void 0===t?void 0:t.accounts,u=o&&o.filter((function(e){return"personal"==e.Type}))[0],s=o&&o.filter((function(e){return"personal_savings"==e.Type})),p=o&&o.filter((function(e){return"organization"==e.Type}));return o&&s&&p?a.createElement("div",{className:n.wrapper},a.createElement("div",{className:n.accountList},u&&a.createElement(l.default,{key:u.Account,acc:u}),(null==s?void 0:s.length)>0&&s.map((function(e){return a.createElement(l.default,{key:e.Account,acc:e})})),p.length>0&&p.map((function(e){return a.createElement(l.default,{key:e.Account,acc:e})})))):a.createElement("div",{className:n.wrapper},a.createElement("div",{className:n.emptyLogo},a.createElement(r.g,{icon:["fas","face-disappointed"]})),a.createElement("div",{className:n.emptyMsg},"No Accounts?"))}))},30070:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(37951),c=n(82657),o=n(10947),r=n(99135),l=n(20879),i=n(70204),u=(0,c.A)((function(e){return{link:{textDecoration:"none"},account:{width:"100%",padding:"10px 15px",marginBottom:"5%",position:"relative",background:e.palette.secondary.dark,willChange:"background",transition:"background 400ms",borderRadius:5,boxShadow:"0px 0px 12px -2px rgba(0,0,0,0.3)","&:hover":{cursor:"pointer",background:"rgba(255, 255, 255, 0.01)"}},accountDetails:{borderBottom:"1px solid ".concat(e.palette.border.divider),"& h3":{color:e.palette.primary.main,fontWeight:400,fontSize:19,marginBottom:0,"& small":{fontSize:12,color:e.palette.text.alt,"&::before":{content:'" - "'}}}},accountBalance:{marginLeft:"5%","& h2":{fontWeight:400,color:e.palette.text.alt,marginTop:24},"& span":{fontWeight:400,color:e.palette.success.main,marginTop:24}},backIcon:{color:"".concat(e.palette.primary.main,"12"),position:"absolute",top:"6%",right:"4%",fontSize:80}}}));const s=function(e){var t,n=e.acc,c=u(),s=(0,i.getAccountName)(n),p=(0,i.getAccountType)(n);return a.createElement(r.N_,{to:"/apps/bank/view/".concat(n.Account),className:c.link},a.createElement(o.A,{className:c.account},a.createElement("div",{className:c.accountDetails},a.createElement("h3",null,s),a.createElement("p",null,"Account Number: ",n.Account,a.createElement("br",null),"Account Type: ",p)),a.createElement("div",{className:c.accountBalance},a.createElement("h2",null,"Balance:"," ",a.createElement("span",null,null!==(t=n.Permissions)&&void 0!==t&&t.BALANCE?"$".concat(n.Balance.toLocaleString("en-US")):"???"))),"personal_savings"===n.Type?a.createElement(l.g,{className:c.backIcon,icon:["fas","piggy-bank"]}):a.createElement(l.g,{className:c.backIcon,icon:["fas","bank"]})))}}}]);