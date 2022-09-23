"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7323],{94982:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(30969),o=r.createContext({});function a(){return r.useContext(o)}t.Z=o},58116:function(e,t,n){var r=n(31461),o=n(7896),a=n(30969),i=n(81856),l=n(26540),c=n(24099),u=n(45971),s=n(17363),v=n(40679),d=n(94982),p=n(24217),f=n(37574),b=["className"],Z=(0,u.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})})),m=(0,u.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:function(e,t){var n=e.ownerState;return[t.line,t["line".concat((0,c.Z)(n.orientation))]]}})((function(e){var t=e.ownerState,n=e.theme,r="light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600];return(0,o.Z)({display:"block",borderColor:n.vars?n.vars.palette.StepConnector.border:r},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})})),S=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiStepConnector"}),u=n.className,S=(0,r.Z)(n,b),L=a.useContext(v.Z),h=L.alternativeLabel,x=L.orientation,C=void 0===x?"horizontal":x,w=a.useContext(d.Z),M=w.active,g=w.disabled,y=w.completed,j=(0,o.Z)({},n,{alternativeLabel:h,orientation:C,active:M,completed:y,disabled:g}),z=function(e){var t=e.classes,n=e.orientation,r={root:["root",n,e.alternativeLabel&&"alternativeLabel",e.active&&"active",e.completed&&"completed",e.disabled&&"disabled"],line:["line","line".concat((0,c.Z)(n))]};return(0,l.Z)(r,p.M,t)}(j);return(0,f.jsx)(Z,(0,o.Z)({className:(0,i.default)(z.root,u),ref:t,ownerState:j},S,{children:(0,f.jsx)(m,{className:z.line,ownerState:j})}))}));t.Z=S},24217:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(2975);function o(e){return(0,r.Z)("MuiStepConnector",e)}var a=(0,n(62746).Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);t.Z=a},60548:function(e,t,n){var r=n(31461),o=n(7896),a=n(30969),i=n(81856),l=n(26540),c=n(17363),u=n(45971),s=n(50693),v=n(58116),d=n(40679),p=n(37574),f=["activeStep","alternativeLabel","children","className","connector","nonLinear","orientation"],b=(0,u.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})})),Z=(0,p.jsx)(v.Z,{}),m=a.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiStepper"}),u=n.activeStep,v=void 0===u?0:u,m=n.alternativeLabel,S=void 0!==m&&m,L=n.children,h=n.className,x=n.connector,C=void 0===x?Z:x,w=n.nonLinear,M=void 0!==w&&w,g=n.orientation,y=void 0===g?"horizontal":g,j=(0,r.Z)(n,f),z=(0,o.Z)({},n,{alternativeLabel:S,orientation:y}),N=function(e){var t=e.orientation,n=e.alternativeLabel,r=e.classes,o={root:["root",t,n&&"alternativeLabel"]};return(0,l.Z)(o,s.c,r)}(z),R=a.Children.toArray(L).filter(Boolean),k=R.map((function(e,t){return a.cloneElement(e,(0,o.Z)({index:t,last:t+1===R.length},e.props))})),P=a.useMemo((function(){return{activeStep:v,alternativeLabel:S,connector:C,nonLinear:M,orientation:y}}),[v,S,C,M,y]);return(0,p.jsx)(d.Z.Provider,{value:P,children:(0,p.jsx)(b,(0,o.Z)({ownerState:z,className:(0,i.default)(N.root,h),ref:t},j,{children:k}))})}));t.Z=m},40679:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(30969),o=r.createContext({});function a(){return r.useContext(o)}t.Z=o},37323:function(e,t,n){n.r(t),n.d(t,{StepperContext:function(){return a.Z},default:function(){return r.Z},getStepperUtilityClass:function(){return o.c},stepperClasses:function(){return o.Z},useStepperContext:function(){return a.s}});var r=n(60548),o=n(50693),a=n(40679)},50693:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(2975);function o(e){return(0,r.Z)("MuiStepper",e)}var a=(0,n(62746).Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);t.Z=a}}]);
//# sourceMappingURL=7323.e093f336.chunk.js.map