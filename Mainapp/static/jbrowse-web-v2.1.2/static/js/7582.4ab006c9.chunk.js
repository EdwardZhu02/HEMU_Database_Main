"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7582],{47582:function(n,e,o){o.r(e);o(30969);var c=o(84636),i=o(38357),s=o(94551),r=o(59071),t=o(33359),l=o(6779),a=o(96074),d=o(72097),u=o(2374),h=o(88581),j=o(90550),x=o(9077),f=o(37574),Z=(0,u.ZL)()((function(n){return{closeButton:{position:"absolute",right:n.spacing(1),top:n.spacing(1),color:n.palette.grey[500]},connectionContainer:{margin:n.spacing(4),width:500}}}));e.default=(0,j.observer)((function(n){var e=n.session,o=n.handleClose,u=n.breakConnection,j=Z().classes,C=e.adminMode,p=e.connections,b=e.sessionConnections;return(0,f.jsxs)(c.Z,{open:!0,onClose:o,maxWidth:"lg",children:[(0,f.jsxs)(i.Z,{children:["Delete connections",(0,f.jsx)(s.Z,{className:j.closeButton,onClick:function(){return o()},children:(0,f.jsx)(h.Z,{})})]}),(0,f.jsxs)(r.Z,{children:[(0,f.jsx)(t.Z,{children:"Click the X icon to delete the connection from your config completely"}),(0,f.jsxs)("div",{className:j.connectionContainer,children:[p.map((function(n){var e=(0,x.readConfObject)(n,"name");return(0,f.jsx)("div",{children:(0,f.jsxs)(t.Z,{children:[C||null!==b&&void 0!==b&&b.includes(n)?(0,f.jsx)(s.Z,{onClick:function(){return u(n,!0)},children:(0,f.jsx)(h.Z,{color:"error"})}):(0,f.jsx)(l.Z,{title:"Unable to delete connection in config file as non-admin user",children:(0,f.jsx)(s.Z,{children:(0,f.jsx)(h.Z,{color:"disabled"})})}),e]})},"conn-".concat(e))})),p.length?null:(0,f.jsx)(t.Z,{children:"No connections found"})]})]}),(0,f.jsx)(a.Z,{children:(0,f.jsx)(d.Z,{onClick:function(){return o()},variant:"contained",color:"primary",children:"Close"})})]})}))}}]);
//# sourceMappingURL=7582.4ab006c9.chunk.js.map