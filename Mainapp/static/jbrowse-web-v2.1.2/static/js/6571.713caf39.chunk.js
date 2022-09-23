(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6571,1921],{27468:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return V}});var t=r(33028),o=r(59740),i=r(30969),a=r(90550),s=r(46672),l=r(75295),c=r(83534),u=r(6556),d=r(56666),f=r(68079),p=r(96234),h=r(33359),v=r(49884),m=r(88876),y=r(87006),b=r(66125),w=r(37574);function Z(e){var n=(0,i.useState)({}),r=(0,p.Z)(n,2),o=r[0],a=r[1],s=(0,i.useState)(!1),l=(0,p.Z)(s,2),u=l[0],Z=l[1],j=e.feature.samples,x=void 0===j?{}:j,g=Object.entries(x);if(!g.length)return null;var k,C=["sample"].concat((0,f.Z)(Object.keys(g[0][1]))).map((function(e){return{field:e}})),S=[],O=Object.keys(o);try{S=g.map((function(e){return(0,t.Z)((0,t.Z)({},Object.fromEntries(Object.entries(e[1]).map((function(e){return[e[0],String(e[1])]})))),{},{sample:e[0],id:e[0]})})).filter((function(e){return!O.length||O.every((function(n){var r=e[n],t=o[n];return!t||r.match(new RegExp(t,"i"))}))}))}catch(N){k=N}return(0,w.jsxs)(c.BaseCard,(0,t.Z)((0,t.Z)({},e),{},{title:"Samples",children:[k?(0,w.jsx)(h.Z,{color:"error",children:"".concat(k)}):null,(0,w.jsx)(v.Z,{control:(0,w.jsx)(m.Z,{checked:u,onChange:function(){return Z((function(e){return!e}))}}),label:"Show sample filters"}),u?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h.Z,{children:"These filters can use a plain text search or regex style query, e.g. in the genotype field, entering 1 will query for all genotypes that include the first alternate allele e.g. 0|1 or 1|1, entering [1-9]\\d* will find any non-zero allele e.g. 0|2 or 2/33"}),C.map((function(e){var n=e.field;return(0,w.jsx)(y.Z,{placeholder:"Filter ".concat(n),value:o[n]||"",onChange:function(e){return a((0,t.Z)((0,t.Z)({},o),{},(0,d.Z)({},n,e.target.value)))}},"filter-".concat(n))}))]}):null,(0,w.jsx)("div",{style:{height:600,width:"100%",overflow:"auto"},children:(0,w.jsx)(b._,{rows:S,columns:C,disableSelectionOnClick:!0,rowHeight:25,disableColumnMenu:!0})})]}))}function j(e){var n=e.rows,r=e.columns,t=n.length<100;return n.length?(0,w.jsx)("div",{style:{height:25*Math.min(n.length,100)+80+(t?0:50),width:"100%"},children:(0,w.jsx)(b._,{rowHeight:25,rows:n,columns:r})}):null}function x(e){var n,r,o,i,a=e.feature,s=e.descriptions,l=(null===s||void 0===s||null===(n=s.INFO)||void 0===n||null===(r=n.CSQ)||void 0===r||null===(o=r.Description)||void 0===o||null===(i=o.match(/.*Format: (.*)/))||void 0===i?void 0:i[1].split("|"))||[],u=a.INFO.CSQ||[],d=u.map((function(e,n){return(0,t.Z)({id:n},Object.fromEntries(e.split("|").map((function(e,n){return[l[n],e]}))))}))||[],f=l.map((function(e){return{field:e}}));return u.length?(0,w.jsx)(c.BaseCard,{title:"CSQ table",children:(0,w.jsx)(j,{rows:d,columns:f})}):null}function g(e){var n,r,o,i,a=e.feature,s=e.descriptions,l=(null===s||void 0===s||null===(n=s.INFO)||void 0===n||null===(r=n.ANN)||void 0===r||null===(o=r.Description)||void 0===o||null===(i=o.match(/.*Functional annotations:'(.*)'$/))||void 0===i?void 0:i[1].split("|"))||[],u=a.INFO.ANN||[],d=u.map((function(e,n){return(0,t.Z)({id:n},Object.fromEntries(e.split("|").map((function(e,n){return[l[n],e]}))))}))||[],f=l.map((function(e){return{field:e}}));return u.length?(0,w.jsx)(c.BaseCard,{title:"ANN table",children:(0,w.jsx)(j,{rows:d,columns:f})}):null}var k=r(622),C=r(14956),S=r(81073),O=r(40909),N=r(84636),E=r(38357),F=r(94551),B=r(59071),D=r(96074),A=r(72097),R=r(2374),L=r(88581),T=(0,R.ZL)()((function(e){return{closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},block:{display:"block"}}}));var _=(0,a.observer)((function(e){var n=e.model,r=e.handleClose,t=e.feature,o=e.viewType,a=T().classes,s=(0,i.useState)(!0),c=(0,p.Z)(s,2),u=c[0],d=c[1],f=(0,i.useState)(!0),h=(0,p.Z)(f,2),y=h[0],b=h[1];return(0,w.jsxs)(N.Z,{open:!0,onClose:r,children:[(0,w.jsxs)(E.Z,{children:["Breakpoint split view options",r?(0,w.jsx)(F.Z,{className:a.closeButton,onClick:function(){return r()},children:(0,w.jsx)(L.Z,{})}):null]}),(0,w.jsx)(l.Z,{}),(0,w.jsxs)(B.Z,{children:[(0,w.jsx)(v.Z,{className:a.block,control:(0,w.jsx)(m.Z,{checked:u,onChange:function(){return d((function(e){return!e}))}}),label:"Copy tracks into the new view"}),(0,w.jsx)(v.Z,{className:a.block,control:(0,w.jsx)(m.Z,{checked:y,onChange:function(){return b((function(e){return!e}))}}),label:"Mirror tracks vertically in vertically stacked view"})]}),(0,w.jsxs)(D.Z,{children:[(0,w.jsx)(A.Z,{onClick:function(){var e=n.view,i=(0,S.getSession)(n);try{var a=o.snapshotFromBreakendFeature(t,e);a.views[0].offsetPx-=e.width/2+100,a.views[1].offsetPx-=e.width/2+100,a.featureData=t;var s=(0,O.getSnapshot)(e.tracks);a.views[0].tracks=s,a.views[1].tracks=y?s.slice().reverse():s,i.addView("BreakpointSplitView",a)}catch(l){console.error(l),i.notify("".concat(l))}r()},variant:"contained",color:"primary",autoFocus:!0,children:"OK"}),(0,w.jsx)(A.Z,{onClick:function(){return r()},color:"secondary",variant:"contained",children:"Cancel"})]})]})}));function M(e){var n,r=e.model,o=e.locStrings,a=e.feature,s=(0,S.getSession)(r),l=(0,O.getEnv)(s).pluginManager,u=(0,i.useState)(!1),d=(0,p.Z)(u,2),f=d[0],v=d[1];try{n=l.getViewType("BreakpointSplitView")}catch(y){}var m=new C.Z(a);return(0,w.jsxs)(c.BaseCard,(0,t.Z)((0,t.Z)({},e),{},{title:"Breakends",children:[(0,w.jsx)(h.Z,{children:"Link to linear view of breakend endpoints"}),(0,w.jsx)("ul",{children:o.map((function(e){return(0,w.jsx)("li",{children:(0,w.jsx)(k.Z,{href:"#",onClick:function(n){n.preventDefault();var t=r.view;try{if(!t)throw new Error("No view associated with this feature detail panel anymore");var o;null===(o=t.navToLocString)||void 0===o||o.call(t,e)}catch(y){console.error(y),s.notify("".concat(y))}},children:"LGV - ".concat(e)})},"".concat(JSON.stringify(e)))}))}),n?(0,w.jsxs)("div",{children:[(0,w.jsx)(h.Z,{children:"Launch split views with breakend source and target"}),(0,w.jsx)("ul",{children:o.map((function(e){return(0,w.jsx)("li",{children:(0,w.jsx)(k.Z,{href:"#",onClick:function(e){e.preventDefault(),v(!0)},children:"".concat(a.refName,":").concat(a.start," // ").concat(e," (split view)")})},"".concat(JSON.stringify(e)))}))}),f?(0,w.jsx)(_,{model:r,feature:m,viewType:n,handleClose:function(){v(!1)}}):null]}):null]}))}var P=["samples"];var V=(0,a.observer)((function(e){var n=e.model,r=n.featureData,i=n.descriptions,a=JSON.parse(JSON.stringify(r)),d=(a.samples,(0,o.Z)(a,P));return(0,w.jsxs)(s.Z,{"data-testid":"variant-side-drawer",children:[(0,w.jsx)(c.FeatureDetails,(0,t.Z)({feature:d,descriptions:(0,t.Z)((0,t.Z)({},{CHROM:"chromosome: An identifier from the reference genome",POS:"position: The reference position, with the 1st base having position 1",ID:"identifier: Semi-colon separated list of unique identifiers where available",REF:"reference base(s): Each base must be one of A,C,G,T,N (case insensitive).",ALT:"alternate base(s): Comma-separated list of alternate non-reference alleles",QUAL:"quality: Phred-scaled quality score for the assertion made in ALT",FILTER:"filter status: PASS if this position has passed all filters, otherwise a semicolon-separated list of codes for filters that fail"}),i)},e)),(0,w.jsx)(l.Z,{}),(0,w.jsx)(x,{feature:d,descriptions:i}),(0,w.jsx)(l.Z,{}),(0,w.jsx)(g,{feature:d,descriptions:i}),(0,w.jsx)(l.Z,{}),"breakend"===a.type?(0,w.jsx)(M,{feature:a,locStrings:a.ALT.map((function(e){var n;return(null===(n=(0,u.I)(e))||void 0===n?void 0:n.MatePosition)||""})),model:n}):null,"translocation"===a.type?(0,w.jsx)(M,{feature:a,model:n,locStrings:["".concat(a.INFO.CHR2[0],":").concat(a.INFO.END)]}):null,(0,w.jsx)(Z,(0,t.Z)({feature:a},e))]})}))},622:function(e,n,r){"use strict";r.d(n,{Z:function(){return C}});var t=r(68079),o=r(96234),i=r(56666),a=r(31461),s=r(7896),l=r(30969),c=r(81856),u=r(26540),d=r(24099),f=r(45971),p=r(17363),h=r(65139),v=r(87352),m=r(33359),y=r(11808),b=r(43565),w=r(74262),Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=function(e){var n=e.theme,r=e.ownerState,t=function(e){return Z[e]||e}(r.color),o=(0,b.D)(n,"palette.".concat(t),!1)||r.color,i=(0,b.D)(n,"palette.".concat(t,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,w.Fq)(o,.4)},x=r(37574),g=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,f.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:j({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.Z.focusVisible),{outline:"auto"}))})),C=l.forwardRef((function(e,n){var r=(0,p.Z)({props:e,name:"MuiLink"}),i=r.className,f=r.color,m=void 0===f?"primary":f,b=r.component,w=void 0===b?"a":b,j=r.onBlur,C=r.onFocus,S=r.TypographyClasses,O=r.underline,N=void 0===O?"always":O,E=r.variant,F=void 0===E?"inherit":E,B=r.sx,D=(0,a.Z)(r,g),A=(0,h.Z)(),R=A.isFocusVisibleRef,L=A.onBlur,T=A.onFocus,_=A.ref,M=l.useState(!1),P=(0,o.Z)(M,2),V=P[0],I=P[1],q=(0,v.Z)(n,_),H=(0,s.Z)({},r,{color:m,component:w,focusVisible:V,underline:N,variant:F}),K=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,d.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,u.Z)(i,y.w,n)}(H);return(0,x.jsx)(k,(0,s.Z)({color:m,className:(0,c.default)(K.root,i),classes:S,component:w,onBlur:function(e){L(e),!1===R.current&&I(!1),j&&j(e)},onFocus:function(e){T(e),!0===R.current&&I(!0),C&&C(e)},ref:q,ownerState:H,variant:F,sx:[].concat((0,t.Z)(Object.keys(Z).includes(m)?[]:[{color:m}]),(0,t.Z)(Array.isArray(B)?B:[B]))},D))}))},11808:function(e,n,r){"use strict";r.d(n,{w:function(){return o}});var t=r(2975);function o(e){return(0,t.Z)("MuiLink",e)}var i=(0,r(62746).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);n.Z=i},51921:function(e,n,r){!function(e,n){"use strict";function r(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})}})),n.default=e,Object.freeze(n)}var t=r(n);function o(e,n){return o=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},o(e,n)}function i(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,o(e,n)}var a=function(e,n){return void 0===e&&(e=[]),void 0===n&&(n=[]),e.length!==n.length||e.some((function(e,r){return!Object.is(e,n[r])}))},s={error:null},l=function(e){function n(){for(var n,r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return(n=e.call.apply(e,[this].concat(t))||this).state=s,n.resetErrorBoundary=function(){for(var e,r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];null==n.props.onReset||(e=n.props).onReset.apply(e,t),n.reset()},n}i(n,e),n.getDerivedStateFromError=function(e){return{error:e}};var r=n.prototype;return r.reset=function(){this.setState(s)},r.componentDidCatch=function(e,n){var r,t;null==(r=(t=this.props).onError)||r.call(t,e,n)},r.componentDidUpdate=function(e,n){var r,t,o=this.state.error,i=this.props.resetKeys;null!==o&&null!==n.error&&a(e.resetKeys,i)&&(null==(r=(t=this.props).onResetKeysChange)||r.call(t,e.resetKeys,i),this.reset())},r.render=function(){var e=this.state.error,n=this.props,r=n.fallbackRender,o=n.FallbackComponent,i=n.fallback;if(null!==e){var a={error:e,resetErrorBoundary:this.resetErrorBoundary};if(t.isValidElement(i))return i;if("function"===typeof r)return r(a);if(o)return t.createElement(o,a);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},n}(t.Component);function c(e,n){var r=function(r){return t.createElement(l,n,t.createElement(e,r))},o=e.displayName||e.name||"Unknown";return r.displayName="withErrorBoundary("+o+")",r}function u(e){var n=t.useState(null),r=n[0],o=n[1];if(null!=e)throw e;if(null!=r)throw r;return o}e.ErrorBoundary=l,e.useErrorHandler=u,e.withErrorBoundary=c,Object.defineProperty(e,"__esModule",{value:!0})}(n,r(30969))}}]);
//# sourceMappingURL=6571.713caf39.chunk.js.map