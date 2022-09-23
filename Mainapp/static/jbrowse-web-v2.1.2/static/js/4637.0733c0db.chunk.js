"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4637],{94637:function(n,e,r){r.r(e);r(30969);var o=r(90550),t=r(40909),i=r(81073),a=r(622),l=r(33359),c=r(2374),s=r(37574),u=(0,c.ZL)()((function(n){return{root:{margin:n.spacing(2),paddingTop:n.spacing(2)},subtitle:{margin:n.spacing(1)},pluginList:{margin:n.spacing(1),marginTop:n.spacing(5)}}}));e.default=(0,o.observer)((function(n){var e=n.model,r=u().classes,o=(0,i.getSession)(e).version,c=(0,t.getEnv)(e).pluginManager,d=c.plugins,p=d.filter((function(n){var e;return null===(e=c.pluginMetadata[n.name])||void 0===e?void 0:e.isCore})).map((function(n){return n.name})),m=d.filter((function(n){return p.includes(n.name)})).map((function(n){return(0,s.jsxs)("li",{children:[n.name," ",n.version||""]},n.name)})),f=d.filter((function(n){return!p.includes(n.name)})).map((function(n){var e="".concat(n.name," ").concat(n.version||"");return(0,s.jsx)("li",{children:n.url?(0,s.jsx)(a.Z,{target:"_blank",rel:"noopener noreferrer",href:n.url,children:e}):e},n.name)}));return(0,s.jsxs)("div",{className:r.root,children:[(0,s.jsx)(l.Z,{variant:"h4",align:"center",color:"primary",children:"JBrowse 2"}),(0,s.jsx)(l.Z,{variant:"h6",align:"center",className:r.subtitle,children:o}),(0,s.jsxs)(l.Z,{align:"center",variant:"body2",children:["JBrowse is a"," ",(0,s.jsx)(a.Z,{href:"http://gmod.org/",target:"_blank",rel:"noopener noreferrer",children:"GMOD"})," ","project"]}),(0,s.jsx)("br",{}),(0,s.jsx)(l.Z,{align:"center",children:"\xa9 2019-2021 The Evolutionary Software Foundation"}),(0,s.jsxs)("div",{className:r.pluginList,children:[f.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{variant:"h6",children:"External plugins loaded"}),(0,s.jsx)("ul",{children:f})]}):null,m.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{variant:"h6",children:"Core plugins loaded"}),(0,s.jsx)("ul",{children:m})]}):null]})]})}))},622:function(n,e,r){r.d(e,{Z:function(){return C}});var o=r(68079),t=r(96234),i=r(56666),a=r(31461),l=r(7896),c=r(30969),s=r(81856),u=r(26540),d=r(24099),p=r(45971),m=r(17363),f=r(65139),v=r(87352),h=r(33359),g=r(11808),b=r(43565),x=r(74262),Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=function(n){var e=n.theme,r=n.ownerState,o=function(n){return Z[n]||n}(r.color),t=(0,b.D)(e,"palette.".concat(o),!1)||r.color,i=(0,b.D)(e,"palette.".concat(o,"Channel"));return"vars"in e&&i?"rgba(".concat(i," / 0.4)"):(0,x.Fq)(t,.4)},j=r(37574),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,p.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,e["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&e.button]}})((function(n){var e=n.theme,r=n.ownerState;return(0,l.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,l.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:y({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.Z.focusVisible),{outline:"auto"}))})),C=c.forwardRef((function(n,e){var r=(0,m.Z)({props:n,name:"MuiLink"}),i=r.className,p=r.color,h=void 0===p?"primary":p,b=r.component,x=void 0===b?"a":b,y=r.onBlur,C=r.onFocus,S=r.TypographyClasses,D=r.underline,F=void 0===D?"always":D,M=r.variant,L=void 0===M?"inherit":M,N=r.sx,A=(0,a.Z)(r,w),B=(0,f.Z)(),T=B.isFocusVisibleRef,V=B.onBlur,_=B.onFocus,R=B.ref,E=c.useState(!1),z=(0,t.Z)(E,2),H=z[0],J=z[1],O=(0,v.Z)(e,R),P=(0,l.Z)({},r,{color:h,component:x,focusVisible:H,underline:F,variant:L}),W=function(n){var e=n.classes,r=n.component,o=n.focusVisible,t=n.underline,i={root:["root","underline".concat((0,d.Z)(t)),"button"===r&&"button",o&&"focusVisible"]};return(0,u.Z)(i,g.w,e)}(P);return(0,j.jsx)(k,(0,l.Z)({color:h,className:(0,s.default)(W.root,i),classes:S,component:x,onBlur:function(n){V(n),!1===T.current&&J(!1),y&&y(n)},onFocus:function(n){_(n),!0===T.current&&J(!0),C&&C(n)},ref:O,ownerState:P,variant:L,sx:[].concat((0,o.Z)(Object.keys(Z).includes(h)?[]:[{color:h}]),(0,o.Z)(Array.isArray(N)?N:[N]))},A))}))},11808:function(n,e,r){r.d(e,{w:function(){return t}});var o=r(2975);function t(n){return(0,o.Z)("MuiLink",n)}var i=(0,r(62746).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);e.Z=i}}]);
//# sourceMappingURL=4637.0733c0db.chunk.js.map