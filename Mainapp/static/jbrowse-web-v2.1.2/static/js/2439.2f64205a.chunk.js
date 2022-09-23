"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2439],{72439:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var n=a(96234),s=a(30969),o=a(90550),i=a(2374),r=a(84636),c=a(38357),l=a(94551),d=a(59071),u=a(96074),p=a(72097),m=a(15405),h=a(88581),x=a(3715),j=a(92725),Z=a(61758),f=a(70993),b=a(46672),g=a(49922),y=a(36149),v=a(33359),L=a(79465),C=a(1873),w=a(10814),A=a(9077),B=a(37574),S=(0,i.ZL)()((function(){return{table:{minWidth:500,minHeight:150},buttonCell:{padding:3},button:{display:"inline-block",padding:3,minHeight:0,minWidth:0}}})),k=(0,o.observer)((function(e){var t=e.rootModel,a=e.setIsAssemblyBeingEdited,n=e.setAssemblyBeingEdited,s=S().classes;var o=t.jbrowse.assemblies.map((function(e){var o=(0,A.readConfObject)(e,"name"),i=(0,A.readConfObject)(e,"displayName"),r=(0,A.readConfObject)(e,"aliases");return(0,B.jsxs)(j.Z,{children:[(0,B.jsx)(Z.Z,{children:o}),(0,B.jsx)(Z.Z,{children:i}),(0,B.jsx)(Z.Z,{children:r?r.toString():""}),(0,B.jsxs)(Z.Z,{className:s.buttonCell,children:[(0,B.jsx)(l.Z,{"data-testid":"".concat(o,"-edit"),className:s.button,onClick:function(){a(!0),n(e)},children:(0,B.jsx)(C.Z,{color:"primary"})}),(0,B.jsx)(l.Z,{"data-testid":"".concat(o,"-delete"),className:s.button,onClick:function(){!function(e){t.jbrowse.removeAssemblyConf(e)}(o)},children:(0,B.jsx)(w.Z,{color:"error"})})]})]},o)}));return(0,B.jsx)(f.Z,{component:b.Z,children:(0,B.jsxs)(g.Z,{className:s.table,children:[(0,B.jsx)(y.Z,{children:(0,B.jsxs)(j.Z,{children:[(0,B.jsx)(Z.Z,{children:(0,B.jsx)(v.Z,{variant:"h5",children:"Name"})}),(0,B.jsx)(Z.Z,{children:(0,B.jsx)(v.Z,{variant:"h5",children:"Display name"})}),(0,B.jsx)(Z.Z,{children:(0,B.jsx)(v.Z,{variant:"h5",children:"Aliases"})}),(0,B.jsx)(Z.Z,{children:(0,B.jsx)(v.Z,{variant:"h5",children:"Actions"})})]})}),(0,B.jsx)(L.Z,{children:o})]})})})),z=a(98553),F=a(87006),N=a(2689),T=a(3994),P=(0,i.ZL)()((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)},createButton:{marginTop:"1em",justifyContent:"center"},paperContent:{flex:"auto",margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(1),overflow:"auto"}}})),I=(0,o.observer)((function(e){var t=e.adapterSelection,a=e.setAdapterSelection,n=e.adapterTypes;return(0,B.jsx)(F.Z,{value:t,label:"Type",select:!0,helperText:"Type of adapter to use",fullWidth:!0,onChange:function(e){a(e.target.value)},children:n.map((function(e){return(0,B.jsx)(N.Z,{value:e,children:e},e)}))})})),M=(0,o.observer)((function(e){var t=e.adapterSelection,a=e.fastaLocation,n=e.setFastaLocation,s=e.faiLocation,o=e.setFaiLocation,i=e.gziLocation,r=e.setGziLocation,c=e.twoBitLocation,l=e.setTwoBitLocation,d=e.chromSizesLocation,u=e.setChromSizesLocation;return"IndexedFastaAdapter"===t||"BgzipFastaAdapter"===t?(0,B.jsxs)(T.ZP,{container:!0,spacing:2,children:[(0,B.jsx)(T.ZP,{item:!0,children:(0,B.jsx)(z.Z,{name:"fastaLocation",location:a,setLocation:function(e){return n(e)}})}),(0,B.jsx)(T.ZP,{item:!0,children:(0,B.jsx)(z.Z,{name:"faiLocation",location:s,setLocation:function(e){return o(e)}})}),"BgzipFastaAdapter"===t?(0,B.jsx)(T.ZP,{item:!0,children:(0,B.jsx)(z.Z,{name:"gziLocation",location:i,setLocation:function(e){return r(e)}})}):null]}):"TwoBitAdapter"===t?(0,B.jsxs)(T.ZP,{container:!0,spacing:2,children:[(0,B.jsx)(T.ZP,{item:!0,children:(0,B.jsx)(z.Z,{name:"twoBitLocation",location:c,setLocation:function(e){return l(e)}})}),(0,B.jsx)(T.ZP,{item:!0,children:(0,B.jsx)(z.Z,{name:"chromSizesLocation (optional, can be added to speed up loading 2bit files with many contigs)",location:d,setLocation:function(e){return u(e)}})})]}):null})),O={uri:""},E=(0,o.observer)((function(e){var t=e.rootModel,a=e.setFormOpen,o=P().classes,i=["IndexedFastaAdapter","BgzipFastaAdapter","TwoBitAdapter"],r=(0,s.useState)(""),c=(0,n.Z)(r,2),l=c[0],d=c[1],u=(0,s.useState)(""),m=(0,n.Z)(u,2),h=m[0],j=m[1],Z=(0,s.useState)(i[0]),f=(0,n.Z)(Z,2),g=f[0],y=f[1],v=(0,s.useState)(O),L=(0,n.Z)(v,2),C=L[0],w=L[1],A=(0,s.useState)(O),S=(0,n.Z)(A,2),k=S[0],z=S[1],N=(0,s.useState)(O),E=(0,n.Z)(N,2),_=E[0],q=E[1],G=(0,s.useState)(O),H=(0,n.Z)(G,2),W=H[0],D=H[1],J=(0,s.useState)(O),V=(0,n.Z)(J,2),K=V[0],Q=V[1];return(0,B.jsxs)("div",{className:o.root,children:[(0,B.jsxs)(b.Z,{className:o.paper,children:[(0,B.jsx)(F.Z,{id:"assembly-name",inputProps:{"data-testid":"assembly-name"},label:"Assembly name",helperText:"The assembly name e.g. hg38",variant:"outlined",value:l,onChange:function(e){return d(e.target.value)}}),(0,B.jsx)(F.Z,{id:"assembly-name",inputProps:{"data-testid":"assembly-display-name"},label:"Assembly display name",helperText:'A human readable display name for the assembly e.g. "Homo sapiens (hg38)"',variant:"outlined",value:h,onChange:function(e){return j(e.target.value)}}),(0,B.jsx)(I,{adapterSelection:g,setAdapterSelection:y,adapterTypes:i}),(0,B.jsx)("div",{className:o.paperContent,children:(0,B.jsx)(M,{adapterSelection:g,fastaLocation:C,setFastaLocation:w,faiLocation:k,setFaiLocation:z,gziLocation:_,setGziLocation:q,twoBitLocation:W,setTwoBitLocation:D,chromSizesLocation:K,setChromSizesLocation:Q})})]}),(0,B.jsx)(T.ZP,{container:!0,className:o.createButton,children:(0,B.jsx)(T.ZP,{item:!0,children:(0,B.jsx)(p.Z,{variant:"contained",color:"secondary",startIcon:(0,B.jsx)(x.Z,{}),onClick:function(){var e;""===l?t.session.notify("Can't create an assembly without a name"):(a(!1),"IndexedFastaAdapter"===g?e={name:l,displayName:h,sequence:{adapter:{type:"IndexedFastaAdapter",fastaLocation:C,faiLocation:k}}}:"BgzipFastaAdapter"===g?e={name:l,displayName:h,sequence:{adapter:{type:"BgzipFastaAdapter",fastaLocation:C,faiLocation:k,gziLocation:_}}}:"TwoBitAdapter"===g&&(e={name:l,displayName:h,sequence:{adapter:{type:"TwoBitAdapter",twoBitLocation:W,chromSizesLocation:K}}}),t.jbrowse.addAssemblyConf(e),t.session.notify("Successfully added ".concat(l," assembly to JBrowse 2"),"success"))},children:"Create new assembly"})})})]})})),_=a(56699),q=(0,o.observer)((function(e){var t=e.assembly;return(0,B.jsx)(_.wP,{model:{target:t}})})),G=(0,i.ZL)()((function(e){return{titleBox:{color:"#fff",backgroundColor:e.palette.primary.main,textAlign:"center"},dialogContent:{width:"100%"},backButton:{color:"#fff",position:"absolute",left:e.spacing(4),top:e.spacing(4)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}));function H(e){return void 0!==e?e.name:null}var W=(0,o.observer)((function(e){var t=e.rootModel,a=e.onClose,o=G().classes,i=(0,s.useState)(!1),j=(0,n.Z)(i,2),Z=j[0],f=j[1],b=(0,s.useState)(!1),g=(0,n.Z)(b,2),y=g[0],v=g[1],L=(0,s.useState)(),C=(0,n.Z)(L,2),w=C[0],A=C[1],S=!Z&&!y;return(0,B.jsxs)(r.Z,{open:!0,onClose:function(){return a(!1)},children:[(0,B.jsxs)(c.Z,{className:o.titleBox,children:[S?"Assembly manager":null,Z?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l.Z,{"aria-label":"back",className:o.backButton,onClick:function(){return f(!1)},children:(0,B.jsx)(m.Z,{})}),"Add new assembly"]}):null,y?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l.Z,{"aria-label":"back",className:o.backButton,onClick:function(){return v(!1)},children:(0,B.jsx)(m.Z,{})}),H(w)]}):null,(0,B.jsx)(l.Z,{"aria-label":"close",className:o.closeButton,onClick:function(){return a(!1)},children:(0,B.jsx)(h.Z,{})})]}),(0,B.jsx)(d.Z,{children:(0,B.jsxs)("div",{className:o.dialogContent,children:[S?(0,B.jsx)(k,{rootModel:t,setIsAssemblyBeingEdited:v,setAssemblyBeingEdited:A}):null,y?(0,B.jsx)(q,{assembly:w}):null,Z?(0,B.jsx)(E,{rootModel:t,setFormOpen:f}):null]})}),(0,B.jsx)(u.Z,{children:S?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(p.Z,{color:"secondary",variant:"contained",onClick:function(){return a(!1)},children:"Close"}),(0,B.jsx)(p.Z,{variant:"contained",color:"secondary",startIcon:(0,B.jsx)(x.Z,{}),onClick:function(){return f(!0)},children:"Add new assembly"})]}):null})]})}))},15405:function(e,t,a){var n=a(71600);t.Z=void 0;var s=n(a(48035)),o=a(37574),i=(0,s.default)((0,o.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.Z=i},1873:function(e,t,a){var n=a(71600);t.Z=void 0;var s=n(a(48035)),o=a(37574),i=(0,s.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.Z=i}}]);
//# sourceMappingURL=2439.2f64205a.chunk.js.map