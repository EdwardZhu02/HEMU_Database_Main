"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7502],{77502:function(e,n,r){r.r(n);var t=r(96234),i=r(30969),c=r(84636),a=r(38357),o=r(59071),l=r(33359),u=r(87006),s=r(96074),h=r(72097),k=r(9077),f=r(37574);n.default=function(e){var n=e.tracks,r=e.onClose,d=(0,i.useState)("MultiWiggle "+Date.now()),j=(0,t.Z)(d,2),x=j[0],m=j[1],p=n.every((function(e){return"QuantitativeTrack"===e.type}));return(0,f.jsxs)(c.Z,{open:!0,onClose:function(){return r(!1)},children:[(0,f.jsx)(a.Z,{children:"Confirm multi-wiggle track create"}),(0,f.jsxs)(o.Z,{children:[(0,f.jsxs)(l.Z,{children:[p?null:"Not every track looks like a QuantitativeTrack. This could have unexpected behavior, confirm if it looks ok.","Listing:"]}),(0,f.jsx)("ul",{children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,k.readConfObject)(e,"name")," - ",e.type]},e.trackId)}))}),(0,f.jsx)(u.Z,{value:x,onChange:function(e){return m(e.target.value)},helperText:"Track name"}),(0,f.jsx)(l.Z,{children:"Confirm creation of track?"})]}),(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(h.Z,{onClick:function(){return r(!1)},color:"primary",children:"Cancel"}),(0,f.jsx)(h.Z,{onClick:function(){return r(!0,{name:x})},color:"primary",variant:"contained",autoFocus:!0,children:"Submit"})]})]})}}}]);
//# sourceMappingURL=7502.ca6c72d2.chunk.js.map