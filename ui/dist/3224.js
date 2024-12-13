"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[3224,9418],{59418:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(37951),a=n(11009),l=n(7396),o=n(218),c=n(10947),i=n(39950),u=n(34412),s=n(72637),f=n(82657),d=n(20879),m=n(27059),p=n(3744);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,c=[],i=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var b=(0,f.A)((function(e){return{wrapper:{height:"100%",backgroundColor:"#1c1c1e",padding:20,overflow:"hidden"},banner:{width:"100%",borderRadius:20,marginBottom:20},search:{marginBottom:20},searchInput:{width:"100%",backgroundColor:"#2c2c2e",borderRadius:12,"& .MuiInputBase-root":{color:"#f0f0f5"},"& .MuiInputLabel-root":{color:"#b0b0b0"}},appList:{},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"600",color:"#b0b0b0",marginTop:"25%"},appPaper:{backgroundColor:"#2c2c2e",borderRadius:12,padding:15,position:"relative",overflow:"hidden",display:"flex",alignItems:"center"},appIcon:{width:60,height:60,display:"flex",alignItems:"center",justifyContent:"center",marginRight:15,borderRadius:"0.6rem",background:"linear-gradient(135deg, #ff6f00, #d32f2f)",border:"1px solid rgba(255, 255, 255, 0.5)"},appName:{flex:1,color:"#f0f0f5",fontSize:20,fontWeight:"600"},actionButton:{position:"absolute",top:20,right:20,height:"55%",width:"12%",backgroundColor:"#007aff",color:"#fff","&:hover":{backgroundColor:"#005bb5"}}}}));const h=function(){var e=b(),t=(0,m.K3)(),n=(0,a.d4)((function(e){var t;return null===(t=e.data.data.player)||void 0===t||null===(t=t.Apps)||void 0===t?void 0:t.installed})),f=(0,a.wA)(),v=g((0,r.useState)(""),2),h=v[0],y=v[1],A=g((0,r.useState)([]),2),B=A[0],w=A[1];return(0,r.useEffect)((function(){w(Object.keys(t).filter((function(e){return!t[e].hidden&&(t[e].label.toUpperCase().includes(h.toUpperCase())||""===h)&&!n.includes(e)})).map((function(e){return t[e]})))}),[h,n,t]),r.createElement("div",{className:e.wrapper},r.createElement("img",{src:"data:image/png;base64,UklGRhAVAABXRUJQVlA4IAQVAAAwUwCdASqkAUsAPpE+m0oloyIkp3KccLASCU1yq0XWm+89a6Hv2Hd37fo6yDba//I9dHlN+m70+eZLzTv+p64uiD9b/eoca6mN8uP0P5Reg/nz+T+4nND667en8z1s9rfARe5+Oswj2k+2+A3qm+E+jbwLPTPYD/ln+B9GnQc9jewp0w/SAM6U+kJcqrjziJct/+G4YEpmOYu7XAYVZNgHbB3rH3vh/50WZ96Gstk2Hs+tx5PH0SAOOvZsu1elZTQg/6ZvJrARrioFeOr1R0T88Z6Xs2ijlH7HIv9/+ctXsU4xXp0Y8JT7pVIRXjxSXornQg++faTYvpoMf3b6IcgeGm7/plVtk7vORX8NrXhdTA8U4uuK0wTtBBcnmnf1ikrpL/z6D+KRWoiTFvREkNWF3tyFYyeNNDwiFludtkrE9HftmFuwuvh+8xbGyaB+ANKBOfOA1uNT88QwiqeyG7vnaV6RsiOm9LTMtJrOSCVqKIrx9GI6hFRfRQv+y4PKWZErVx47g3C/etErnns2gULTD+FnUTzalLdlrKJ4IYsjaADZeox5Ow6G3H4vBYwoosUNJf1BkLDNwyfuO2A1Tz7Dw3rLN9JC7JGhc7n5HZWSrzFnucXa8h1w8b1B0vB4AhHdw0G9pxIv9x+s20lj4kDZX8UE7DrfloS6FPLTobEy+Rr7JOdV0xUn6F1fo09saBZUsjKVH/OSEpBfz61dUt7+HQeNUMg696FCUNxSS03cPWBdSRVn8laNJUOLLzCl5hMdvr2eSjBp1aXBkhV+u7ygT6DHN4VShnwgkjy5GUZtRyl9Vdd4YdmQwb9s4MN2Go3oWkTYE80Gw5tjofY4WFEN0Ws76zbjElIAnqPypz0WuNmgoULqNCvVRwVxkGHUvXB8AAD9G8Tkkr16zin+Koy8ZnlLRr/ayl+YZCVQ1kS34Wce5b7OhFt73qPVNYbeG3OL318RX/CDG6lihNqi96/ZyQ+ryhumNFWHi3pVBNSqnfId7QD5093KRVTKM1L0lBqus5XXE7mcb50tAAovCoikAG+WDPDg1bwCRiSGeKoBa9FthDdBKCHZcw9a4cidA6ix6CDoPlf6GAyt7zTQJg6jH9ZQl+V8ZROsQOTZucma9+CnNv/63BJleqnyrQK5NJYnhoqUY7nahNsEEOp15LV622NmaCfvYE/C+WJSmecDVC1ZY8276gJZGLybzDsuG0eW9IJ5a//+GhHhcD45IRoJ+o+xZshKO2yVyHvzVkj8Qfsu+wGOcAQyuUJozP8CmpvO9+AwwrSwXlc00W4KBUOJA4S83HpvU34Q3AEXrt7DGKlZ1ucjhCMH6OGo/pVFy8T90V9kR9mx/ylx0vL6KFMtFHDW157kBFdMqRBHnxvD9FCTJB4Ugy9Z5qo9bkEr/mZz62XxxQd1S03LaZ4tIfKYUjeKQo6jfslFrLm5zV35jtVHieGez42V1KkgGE7yAgQOPHsf3p+hYa8OFHjM6DfmT+NmIcBeVO/xYI2TbkdPhReF6R2oT6CA85ggCSCaFLIBjlJuHol16OXNVfyQG9jV5KP/zF8lJNDGG/5Rv3Hs+oK8DV2EqQT49684lfjU/duzkrRo1RdUZyrsievoalvsu4hAxAD5LUM/Lr//UbdTP6tAVJ/4t4Fv8ylyFw6+q58moq2vw09vvhsYdUBpLTtQfBnnMkbVR1/UX7MMtgC26jEBZGruerk9xUGGdNCabtjOdRkZ5zrKpDROCm6D+ss4kKklSpYwLwmv8y7/e850pihmcBJRx2t7Cz1vsOSihsph4lVMQ1hZqIvNBuVomlPNHGPXgxK9zTHn1HCdgImFN6i8u2Cj3qYDdTJp00YVVnR+W/lb1UYJ815gK744lHxdDQCzZl0xzIH1pZZboLgvOfnbTwOzmtf+6unI2L6RRSE/o6aoo7Ryx/JNl54/73dGHRVzbVCHoTj3zUYqot5O+coh3zgPehEpBWK+bKTrOD4/dfpo+P4q5FsMT6yXEopq8IwGNrBwvRC6M6ZQga6hH6hLYnE0UBNrjgeX/BnG5et1ltqWGvD38ol1RU7cB5XQ2gg3Ee5SK2lOhvQ8yQUnyA/7fIASYy1W4HrwxjCRxzbiZMN6DmNkZD/gvOI3CNQo/+n2jaMmhVErvtAN974rByTiphZ2bQqqEun6/mw7w9YEO1OrmZkB6lRunvfEblSl5k/UoCGgFkEP7CoGYUkMv1kLq4rxF7Jkqah+u8OpCUnD0mPBsfmQcqmwyEaIz4nXeQg+PtH220l9Efp1tF2E8gEQAixf6OfOUQcZXFa3ODUYurAxwEnXULuKkfy5NTOi1otloPCZ9VmbL68MKBFA96QxOGlTbm5WrgKgpcW+MN8ROTOfo6nSLqToVTL88NnGBTO1bsm+Dlce7hDPmxxEowfoULSGEHpLljbPqxyuQ44J/hAXMmMWENiu+CurXvqXpCtqH8MO+wUMbmE1qTBpd+sMYOhc9M88S6zvf2H23wssSIz+Q1gr6N57LJwOaK6PNALLqsbQr5mv5vX0wj7duP86Z1rnKuQU5oYn42iImUalfXbNPGVvrpe/vclsANEfC54ntMYc6kM/pDQ0yyLda3/1cH4HnleQkUjPT4VT7iPG6So6ot/xQ7x9Ho3BvTW6w7iHcVzv35NUDTrduS28agpy+qu/TYrdVkgFYYfZO8klVh2blf/NXHuu3bU9izbJ7+sWeUiPtBEYRKP7/7Km8xPM7iqfiP8GVQBOcQ4+ZhFVd0qmE38uQ5rERKMImCtZkgKcLgG09syT5Slk/lLZYv17iEvh7Ab0jWM9Q2a7xDZJC/gaBnZQa6lf/G8uycwo8vgsXwW93amXyiZfBvZtzgm8jcj1DjnyUo6j86sxsWQkTZdeHeztIpL8gA3kUhraO+e431Sv2VMKJiTyuV0UifqvfMV3FibeLZZPKw2c8jdtjG/9ajHctoRzQfEjRQ4z6DrMgDEcbggm1+Bhk9qrDwRyE2qlO/NofhBCBemfY4vJt5dXmOph2gZvU6maHPs/FqFrLciThwtb7yg8WlgbmppC5WfEZz4rQ/GlV5OW8byZ/z3ooIM4Z8UO0YucyMlDVtkaf3SarDliUj1sDo2J/gTv4KK1kxmBZvthH1/oZCZY8C3IZ+6cZMJdpqGoSrSXeFaHxUJZ09APKhEMwOC5eUu3Ca9gpRMUfCIhsORF9YiaHZFWT7RraPbJ49/qvPDO1+zN1lYXqkhGafgPHt1zAjbdAkx39yfD/6rrJhGmvZ487E7tiy+VQuMblAvyzhQl/dG+OqzXDBgBrwBbAyZo2oIOV1JcTqz6dQuL/VvmlVK2PGM7z8BhMjzq6IzeaarBRBSPbSxcUeXxEIV0HBM444+3BvgSsV/ANSnqEpdpmA+pKa3O+PhDdM5C+hUtK34SVti47iEFPIqS99LV17Abot4WPISuJZiTYdFYgxQvLMUO/lwlQfAllbn6Bf0jyhf3zjxZHINwyZiG5TjDhw5v1x0ZpjrZcbZWm9BsdPPG/5wovGTNuLEadWB451D4BolT8waCPVlj5bc0RN93Lmg5DzYOT2b87RXlO4Wa0DLwB6U3/tbCRsyItOAS8emeHfk/o13VL0QioABDByMbTktvmjwC6UiM4HCVouF178lEx9Ig4NE0iBlt1plwl0I+2wIFd0rrp5AvKSvYbk54NjQ0m3KTYI7a6k2LAFFD+nEzelsAtTbjfon5KQXQi5c6w5xUNE6YlnK3R2p63gKofw6w/apUyc69XigrepO4MRmoChnegR59LDLCC8QtuJeCPeeCqiSi50YOGJ9DdUuAXZcWJ7B68Vt5mmRZKOo+YTzC3vUjx9GR8EDew9H9J/ac8MGh6j+n6FBnotK9hK8oApgC/tTU5EOQR0o1DVoiHvT3ITMrDFBJyvl8jCQn2gYA0c4ThBoEhVPLfEN8PZRs+kCFlYuj41RceI0xRyWVr1l1mU+gs6T/Dyk/z5C9p+iC/QnGjl33tEWkd9S7tIMuvIQ1YWLVUjeByDqcdkwKPLoNxkvPNPW6Gz5Vuak8sMCVH+Qr4G4AtMd4CW0j/Pv8cgnbdaR5yW6PTDfKwjGAeOQYoRWa5RYG8PcdtO5Wiq5JT48TYjj7xfKg5Nl4jB6AVOy80D0WHxFtgv1ftbttCCufCqVsyAfoFiOPEhuWYJGr0RlqvUwtI+drRI2O3VwlX34iY7+fWyrZBUECDyIPB9h0HZkv8HnC5dLfa37oMRr47KopbMOTDgxYVVmF5u0sGKbbAoUn4/hHPwg3OE430ChLUG9yrKT8YcX0T3PQCGCN5d0gzKsgsCy0UiwUEmHdz1yim2SQmjYnncaYRwICIUE/ynv0pw/LxzU1Lp0lBSN6n9O9AY6zxvN9z2cGO+PXKvN13oz6NlaBcPnx++jZ/uUTeL+CZ+tOVMTmfdfwF6YYdyXMTUYAlNKTo2VsI5cD/QQs15l/EWmSES/QPSWQAWIWHyfb7pQ8uDGHy3BhJlgHvpcq9FSDRPGc4JHGDDCHNe02Ef9MpCOGckws+MXd9KYQrDjENfCPiX96TzIYiv37TU8E7DoWM+HAQdxDAqNc5V6xJHOLlm8BtuoX1SPhTcig2FzFAn9uB0wx3YPJxBW8fkCkReKi39MaA9L+o/fB7zHOqk+i86l0/4u+li4bSQtI3ULdUoEhJmoD4c2Zx9/7F0SDbXLMVawRDHl5jkb2z4ORP1QYiL1fKzR/BTSz1wsiI81qjvbmR8PkqRqufW6RsTUUW9j7nxlMoOwMUXad9/KPFsFjmfM0GJhIzOeUP2ugufzQNqQnNlTIf25JCq0jAnKeS7UA70LDl0JvoJqm7iyq+ce86xFikJPQZbZgDXkBSMbeD32VxmtyA5WyiBYgo6N0pKK0ycysC3wJxa7C+OPZY8H4nPuRXtF/ar9kjSbPvjTCSoe2/1cG/lwSHxrVfi275WBvGbARlzM+bmQxN8ZY3fRqEWX4JZ6znnp7Thq5U0cS8PcjluVff08xUn9//kJeyDZIztwkpOMjvBGp1mM528nyruRdWEHVVnqBaH66DauiHBfdv8IMwbDny2z83q9nhIHGH/5n6/uIp4Ngv2p9eHvP/iFLrnQlrH4nrgc1kvLvl5qndAbBGYRul87B0TdULKeGH3xaVneGsM2T3eBK3Kes9mgRx2+nMB4LUCASLt7sU9DChAehVSeER7oAAsTK7k4XWMW1qjfTUsHZ0SKzwo/NnE+MdOf3a9PGvbcreADsfJXLCfbnDm7fIE+YQPjPIpqWxBXGyKVMWzj/QSNkOrmxYWX3jBZ5hkuoVRZY4A+eaV59l+3QYmb5VBcHkgjUrJUotcI2hl2RMuPt5PJNbFUYWBI17Lb7XY/eaayweTW7LrgQQ/vrf60mYz5Bk/sax/Nr6BDdZj3XeRTukjT2S8z6qM6iOVhQjmaIi/Fw9y/inLVl1yaDT/Hw0L/mKjXMVwn9eABWzCr8phZvlQ6hmAXDdxwppgnzAF0Y6kgzhfWLU5DuTiVdWYQexL/ZV5wJBngPicaxcGVY4STrMO0wWE92DsZx1DMomTpiy/lMM70iSrDE1t27C2RFSRnvMEFNhPRzxn06s+rew7oeRwZFZM2soVsIKLPcnDuc0NZpm8DTiYwm9QNJbzNOtSSN0G+demT0952U25j1wClTDk0ulcxxxRoWCs6zeN2wdke8tzhwmylVuprdE0fdIKbvqBYH+UeUyQYNrt3Zrgn7dFlqtfaqr2JWZ72an2gQOM6ZQFNe2I0BMW5lDqvZnvGB4GNUEOCXMMicOkokTjnf265x40GIop8IV6Pbn9diMKXXxSwaj+0q0XrQmY+UyP8EppocAgIYeneIEazBxEKOGXPdK+LlIIozsHNfNG30yh6ETG3FurcqkVcCbTK85AHAqxjBJjzI4i6rq66aZNMO256vegyrllxk4M0FnmaEY6bH/SNFmx/IxILb2Ou0CriSbUNI8SWMu02RDxgVGMDcUY3TM14fzPqxs9j5BzQXTB43jko8ltoa78HE7y3h/VCQzrYz5hYnUYZ4G34Ut3bCycu9bUzNCOq64T7gBPbb414zBYa+jKDKKxL2GzQDUxNvd+CFUXZA3rMMs3l50KH4/Z4GtyYidPV+/nlVFavXX8AkrUkI02HAH6xg4EWSxRL7BpP4VkWmIlPogYMv/Y+QQOlLPZpeZfzJgho9dLCGhQ9HhqxNAjCc/tR/z7DlcaQ4mc2YQmYlgzj2nIpX/5+TKDhzUjzUjvTlWvcaBUnoiSMSuMXvg0JlOr2EGS43MAdDXFtu1Mcawr7lcxjpIUtqBFy91dcIQ7gggdAuPVlpR2YkD4qgpqQLkNcsTXxSiKXPHzuLq910UZHcx5/HnwbbbI3SCzxOyndxBkzEG7Hmczg81HerldJKyga6sF9mezNk0OTldCHRdL6V49jfrc85dquKOvu5hoEiQl7QRVE3/1SgrA/e3uf9b09ImLvfn8FtspXInQN6tu6VhWWN5VyWlMDLcJzuaUKvR4uBQXv1LLgK5IFb1iB9NXXRY7xW41pp67WDUeCWSol9N2AwLThi9mRvZbsOOea3NE3d3/PMdZjzcPXkwRb2/+N4dHbL1P32G6ixs6utd41ymRBhSSd2pSj5QyveYgqOBP8pHxXOeRxAhNinAZx3IqGhGhpptxv7MdRMR5kuMZkrWWkXfj2alF0uc6vHDySlCmc8RNtNMxOb+wLvMOfkV5YGfeCUhIC2o53FNFw+Y9yXUscshg33ANTq8wWUnXvZzLOuRui2R+Ve6S36TBB8KRWnYwHne0bwrukDbsIE1eJleE7GzdgQutsqNs6Q8IeInoWLB/nRIY6mh9pBPW3AIrnDwwLJA7wohMCkTZY35ulopsSXlfsop6YhBcB3AA9xYiTmMCK+ompesx/pJOR99IB2rhprrgJgxUlZYTOIpxwouLuc+hgKaVK/6k14CMDrOaa8+l+7PjuvPipV1uVQYTH4LyD/Yl+DfgDv0Jw/oV2alcme4YJG87x19Fsev6jMvqvNdvEZ7k2uFgWyFTR1W8QLPoZtJDxX69oJ9e2SBQSpatUtsDhHqJE7Vswccbb3uJDK+LSJj20BQVEGPV/r0xPno56TBiqkXyPBWkjR2Q6iDAmz+3kkF9sJJwcQfsA/qFkPVJsZgs/NPAuFAAAA",alt:"App Store Banner",className:e.banner}),r.createElement("div",{className:e.search},r.createElement(l.A,{variant:"outlined",className:e.searchInput,label:"Search For App",value:h,onChange:function(e){y(e.target.value)}})),r.createElement(o.Ay,{className:e.appList,container:!0,spacing:2,justifyContent:"flex-start"},B.length>0?B.map((function(t){return r.createElement(o.Ay,{item:!0,xs:12,key:t.name},r.createElement(c.A,{className:e.appPaper},r.createElement(i.A,{variant:"rounded",className:e.appIcon,style:{background:t.color||"linear-gradient(135deg, #ff6f00, #d32f2f)"}},r.createElement(d.g,{icon:t.icon,style:{color:"#fff"}})),r.createElement(u.A,{className:e.appName},t.label),r.createElement(s.A,{size:"small","aria-label":"Install",className:e.actionButton,onClick:function(){n&&f((0,p.install)(t.name))}},r.createElement(d.g,{icon:"download"}))))})):r.createElement("div",{className:e.emptyMsg},"No Apps Available To Download")))}},43224:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(37951),a=n(11009),l=n(82657),o=n(80008),c=n(59418),i=(0,l.A)((function(e){return{wrapper:{height:"100%",boxShadow:"0px 4px 8px rgba(0,0,0,0.1)",display:"flex",flexDirection:"column"},content:{flex:1,overflowY:"auto",background:"#1c1c1e",height:"100%"},indicator:{backgroundColor:e.palette.primary.main}}}));const u=function(){var e=i(),t=((0,a.wA)(),(0,a.d4)((function(e){return e.store.tab})));return r.createElement("div",{className:e.wrapper},r.createElement("div",{className:e.content},r.createElement("div",{className:e.tabPanel,role:"tabpanel",hidden:0!==t},0===t&&r.createElement(c.default,null)),r.createElement("div",{className:e.tabPanel,role:"tabpanel",hidden:1!==t},1===t&&r.createElement(o.default,null))))}}}]);