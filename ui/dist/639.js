"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[639],{60639:(e,a,t)=>{t.d(a,{A:()=>v});var r=t(89353),o=t(50566),n=t(37951),l=t(93305),i=t(10063),p=t(95884),s=t(34412),c=t(94202),m=t(45186),h=t(85219),g=t(30525);function d(e){return(0,g.A)("MuiFormControlLabel",e)}const b=(0,t(85793).A)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]);var u=t(29127);const y=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],A=(0,m.Ay)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[{[`& .${b.label}`]:a.label},a.root,a[`labelPlacement${(0,c.A)(t.labelPlacement)}`]]}})((({theme:e,ownerState:a})=>(0,o.A)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${b.disabled}`]:{cursor:"default"}},"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${b.label}`]:{[`&.${b.disabled}`]:{color:e.palette.text.disabled}}}))),v=n.forwardRef((function(e,a){const t=(0,h.A)({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:g={},control:b,disabled:v,disableTypography:f,label:P,labelPlacement:w="end"}=t,x=(0,r.A)(t,y),B=(0,p.A)();let M=v;void 0===M&&void 0!==b.props.disabled&&(M=b.props.disabled),void 0===M&&B&&(M=B.disabled);const R={disabled:M};["checked","name","onChange","value","inputRef"].forEach((e=>{void 0===b.props[e]&&void 0!==t[e]&&(R[e]=t[e])}));const C=(0,o.A)({},t,{disabled:M,label:P,labelPlacement:w}),W=(e=>{const{classes:a,disabled:t,labelPlacement:r}=e,o={root:["root",t&&"disabled",`labelPlacement${(0,c.A)(r)}`],label:["label",t&&"disabled"]};return(0,i.A)(o,d,a)})(C);return(0,u.jsxs)(A,(0,o.A)({className:(0,l.A)(W.root,m),ownerState:C,ref:a},x,{children:[n.cloneElement(b,R),P.type===s.A||f?P:(0,u.jsx)(s.A,(0,o.A)({component:"span",className:W.label},g.typography,{children:P}))]}))}))},34412:(e,a,t)=>{t.d(a,{A:()=>v});var r=t(89353),o=t(50566),n=t(37951),l=t(93305),i=t(39272),p=t(10063),s=t(45186),c=t(85219),m=t(94202),h=t(30525);function g(e){return(0,h.A)("MuiTypography",e)}(0,t(85793).A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var d=t(29127);const b=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],u=(0,s.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.variant&&a[t.variant],"inherit"!==t.align&&a[`align${(0,m.A)(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})((({theme:e,ownerState:a})=>(0,o.A)({margin:0},a.variant&&e.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},A={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=n.forwardRef((function(e,a){const t=(0,c.A)({props:e,name:"MuiTypography"}),n=(e=>A[e]||e)(t.color),s=(0,i.A)((0,o.A)({},t,{color:n})),{align:h="inherit",className:v,component:f,gutterBottom:P=!1,noWrap:w=!1,paragraph:x=!1,variant:B="body1",variantMapping:M=y}=s,R=(0,r.A)(s,b),C=(0,o.A)({},s,{align:h,color:n,className:v,component:f,gutterBottom:P,noWrap:w,paragraph:x,variant:B,variantMapping:M}),W=f||(x?"p":M[B]||y[B])||"span",L=(e=>{const{align:a,gutterBottom:t,noWrap:r,paragraph:o,variant:n,classes:l}=e,i={root:["root",n,"inherit"!==e.align&&`align${(0,m.A)(a)}`,t&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,p.A)(i,g,l)})(C);return(0,d.jsx)(u,(0,o.A)({as:W,ref:a,ownerState:C,className:(0,l.A)(L.root,v)},R))}))}}]);