"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6537],{48815:function(r,a,t){t.d(a,{Z:function(){return b}});var e=t(96234),o=t(31461),n=t(7896),i=t(30969),l=t(81856),s=t(26540),c=t(45971),u=t(17363),v=t(17469),d=t(37574),f=(0,v.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=t(63088),p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(r,a){var t=r.ownerState;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})((function(r){var a=r.theme,t=r.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(a.vars||a).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,n.Z)({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[600]}))})),h=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(r,a){return a.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(r,a){return a.fallback}})({width:"75%",height:"75%"});var b=i.forwardRef((function(r,a){var t=(0,u.Z)({props:r,name:"MuiAvatar"}),c=t.alt,v=t.children,f=t.className,b=t.component,x=void 0===b?"div":b,w=t.imgProps,y=t.sizes,A=t.src,S=t.srcSet,k=t.variant,M=void 0===k?"circular":k,R=(0,o.Z)(t,p),N=null,P=function(r){var a=r.crossOrigin,t=r.referrerPolicy,o=r.src,n=r.srcSet,l=i.useState(!1),s=(0,e.Z)(l,2),c=s[0],u=s[1];return i.useEffect((function(){if(o||n){u(!1);var r=!0,e=new Image;return e.onload=function(){r&&u("loaded")},e.onerror=function(){r&&u("error")},e.crossOrigin=a,e.referrerPolicy=t,e.src=o,n&&(e.srcset=n),function(){r=!1}}}),[a,t,o,n]),c}((0,n.Z)({},w,{src:A,srcSet:S})),j=A||S,z=j&&"error"!==P,C=(0,n.Z)({},t,{colorDefault:!z,component:x,variant:M}),D=function(r){var a=r.classes,t={root:["root",r.variant,r.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(t,m.$,a)}(C);return N=z?(0,d.jsx)(h,(0,n.Z)({alt:c,src:A,srcSet:S,sizes:y,ownerState:C,className:D.img},w)):null!=v?v:j&&c?c[0]:(0,d.jsx)(Z,{className:D.fallback}),(0,d.jsx)(g,(0,n.Z)({as:x,ownerState:C,className:(0,l.default)(D.root,f),ref:a},R,{children:N}))}))},63088:function(r,a,t){t.d(a,{$:function(){return o}});var e=t(2975);function o(r){return(0,e.Z)("MuiAvatar",r)}var n=(0,t(62746).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);a.Z=n},16537:function(r,a,t){t.r(a),t.d(a,{avatarGroupClasses:function(){return p},default:function(){return w},getAvatarGroupUtilityClass:function(){return m}});var e=t(56666),o=t(31461),n=t(7896),i=t(30969),l=(t(9479),t(81856)),s=t(26540),c=t(45971),u=t(17363),v=t(63088),d=t(48815),f=t(2975);function m(r){return(0,f.Z)("MuiAvatarGroup",r)}var p=(0,t(62746).Z)("MuiAvatarGroup",["root","avatar"]),g=t(37574),h=["children","className","componentsProps","max","spacing","total","variant"],Z={small:-16,medium:null},b=(0,c.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(r,a){return(0,n.Z)((0,e.Z)({},"& .".concat(p.avatar),a.avatar),a.root)}})((function(r){var a,t=r.theme;return a={},(0,e.Z)(a,"& .".concat(v.Z.root),{border:"2px solid ".concat((t.vars||t).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),(0,e.Z)(a,"display","flex"),(0,e.Z)(a,"flexDirection","row-reverse"),a})),x=(0,c.ZP)(d.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(r,a){return a.avatar}})((function(r){var a=r.theme;return{border:"2px solid ".concat((a.vars||a).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),w=i.forwardRef((function(r,a){var t,e,c=(0,u.Z)({props:r,name:"MuiAvatarGroup"}),v=c.children,d=c.className,f=c.componentsProps,p=void 0===f?{}:f,w=c.max,y=void 0===w?5:w,A=c.spacing,S=void 0===A?"medium":A,k=c.total,M=c.variant,R=void 0===M?"circular":M,N=(0,o.Z)(c,h),P=y<2?2:y,j=(0,n.Z)({},c,{max:y,spacing:S,variant:R}),z=function(r){var a=r.classes;return(0,s.Z)({root:["root"],avatar:["avatar"]},m,a)}(j),C=i.Children.toArray(v).filter((function(r){return i.isValidElement(r)})),D=k||C.length;D===P&&(P+=1),P=Math.min(D+1,P);var G=Math.min(C.length,P-1),L=Math.max(D-P,D-G,0),F=S&&void 0!==Z[S]?Z[S]:-S;return(0,g.jsxs)(b,(0,n.Z)({ownerState:j,className:(0,l.default)(z.root,d),ref:a},N,{children:[L?(0,g.jsxs)(x,(0,n.Z)({ownerState:j,variant:R},p.additionalAvatar,{className:(0,l.default)(z.avatar,null==(t=p.additionalAvatar)?void 0:t.className),style:(0,n.Z)({marginLeft:F},null==(e=p.additionalAvatar)?void 0:e.style),children:["+",L]})):null,C.slice(0,G).reverse().map((function(r,a){return i.cloneElement(r,{className:(0,l.default)(r.props.className,z.avatar),style:(0,n.Z)({marginLeft:a===G-1?void 0:F},r.props.style),variant:r.props.variant||R})}))]}))}))}}]);
//# sourceMappingURL=6537.09073f61.chunk.js.map