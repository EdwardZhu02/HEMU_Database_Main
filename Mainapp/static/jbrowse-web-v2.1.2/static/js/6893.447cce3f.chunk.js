"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6893,5144],{66893:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(32723),a=n(34795),s=n(9249),u=n(87371),i=n(45754),c=n(13820),o=n(33528),f=n(42098);function l(e){return 31===e[0]&&139===e[1]&&8===e[2]}function p(e){for(var t="",n="",r=0,a=0,s=0,u=0,i=0,c=0,o=[],f=0,l=0,p=!1,h=[],m=new RegExp(/^>(\S+)\s+(\S+)\s+(\d+)\s+(\d+)/),v=0;v<e.length;v++){var d=e[v],g=m.exec(d);if(null===g){if(p){var x=d.split(" ");if(7===x.length){var b=+x[0],y=+x[1],Z=+x[2],w=+x[3];i=b<y&&Z<w||b>y&&Z>w?1:-1,s=+(b<y?b:y)-1,u=+(y>b?y:b),r=+(Z<w?Z:w)-1,a=+(w>Z?w:Z),f=l=0,c=+x[4],o=[]}else if(1===x.length){var k=+x[0];if(0===k){var q=0,N=[];if(u-s-f!==a-r-l)throw new Error("inconsistent alignment on line ".concat(v));o.push(u-s-f<<4);for(var M=0;M<o.length;++M){var C=o[M]>>4;q+=C,N.push(C+"MID".charAt(15&o[M]))}h.push({qname:n,qstart:r,qend:a,tname:t,tstart:s,tend:u,strand:i,extra:{numMatches:q-c,blockLen:q,mappingQual:0,NM:c,cg:N.join("")}})}else if(k>0){var A=k-1;f+=A+1,l+=A,A>0&&o.push(A<<4),o.length>0&&2===(15&o[o.length-1])?o[o.length-1]+=16:o.push(18)}else{var S=-k-1;f+=S,l+=S+1,S>0&&o.push(S<<4),o.length>0&&1===(15&o[o.length-1])?o[o.length-1]+=16:o.push(17)}}}}else t=g[1],n=g[2],p=!0}return h}var h=function(e){(0,i.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"setupPre",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.openLocation)(this.getConf("deltaLocation"),this.pluginManager),e.next=3,n.readFile(t);case 3:if(!l(a=e.sent)){e.next=10;break}return e.next=7,(0,f.unzip)(a);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=a;case 11:if(!((s=e.t0).length>536870888)){e.next=14;break}throw new Error("Data exceeds maximum string length (512MB)");case 14:return u=new TextDecoder("utf8",{fatal:!0}).decode(s),e.abrupt("return",p(u.split("\n").filter((function(e){return!!e}))));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(n(5144).default)},5144:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(33028),a=n(46840),s=n(32723),u=n(34795),i=n(9249),c=n(87371),o=n(45754),f=n(13820),l=n(96234),p=n(29598),h=n(37654),m=n(33528),v=n(26131),d=n(81073),g=n(9077),x=n(42098);function b(e){return 31===e[0]&&139===e[1]&&8===e[2]}function y(e){for(var t={},n=0;n<e.length;n++){var r=e[n],a=r.qname+"-"+r.tname;t[a]||(t[a]={quals:[],len:[]}),t[a].quals.push(r.extra.mappingQual),t[a].len.push(r.extra.blockLen||1)}for(var s=Object.fromEntries(Object.entries(t).map((function(e){var t=(0,l.Z)(e,2),n=t[0],r=t[1],a=function(e,t){return e.map((function(e,n){return[e,t[n]]}))}(r.quals,r.len);return[n,Z(a)]}))),u=0;u<e.length;u++){var i=e[u],c=i.qname+"-"+i.tname;i.extra.meanScore=s[c]}for(var o=1e4,f=0,p=0;p<e.length;p++){var h=e[p];o=Math.min(h.extra.meanScore||0,o),f=Math.max(h.extra.meanScore||0,f)}for(var m=0;m<e.length;m++){var v=e[m],d=v.extra.meanScore||0;v.extra.meanScore=(d-o)/(f-o)}return e}function Z(e){var t=e.reduce((function(e,t){var n=(0,l.Z)(e,2),r=n[0],a=n[1],s=(0,l.Z)(t,2),u=s[0],i=s[1];return[r+u*i,a+i]}),[0,0]),n=(0,l.Z)(t,2);return n[0]/n[1]}var w=function(e){(0,o.Z)(n,e);var t=(0,f.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).setupP=void 0,e}return(0,c.Z)(n,[{key:"setup",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre(t).catch((function(e){throw n.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupPre",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(t){var n,u,i,c,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.pluginManager,u=(0,m.openLocation)(this.getConf("pafLocation"),n),e.next=4,u.readFile(t);case 4:if(!b(i=e.sent)){e.next=11;break}return e.next=8,(0,x.unzip)(i);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=i;case 12:if(!((c=e.t0).length>536870888)){e.next=15;break}throw new Error("Data exceeds maximum string length (512MB)");case 15:return o=new TextDecoder("utf8",{fatal:!0}).decode(c),e.abrupt("return",o.split("\n").filter((function(e){return!!e})).map((function(e){var t=e.split("\t"),n=(0,a.Z)(t),s=n[0],u=n[2],i=n[3],c=n[4],o=n[5],f=n[7],l=n[8],p=n[9],h=n[10],m=n[11],v=n.slice(12),d=Object.fromEntries(v.map((function(e){var t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})));return{tname:o,tstart:+f,tend:+l,qname:s,qstart:+u,qend:+i,strand:"-"===c?-1:1,extra:(0,r.Z)({numMatches:+p,blockLen:+h,mappingQual:+m},d)}})));case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasDataForRefName",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getAssemblyNames",value:function(){var e=this.getConf("assemblyNames");0===e.length&&(e=[this.getConf("queryAssembly"),this.getConf("targetAssembly")]);return e}},{key:"getRefNames",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n,r,a,u,i,c,o=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:{},r=null===(t=n.regions)||void 0===t?void 0:t[0].assemblyName,e.next=4,this.setup(n);case 4:if(a=e.sent,-1===(u=this.getAssemblyNames().indexOf(r))){e.next=10;break}for(i=new Set,c=0;c<a.length;c++)i.add(0===u?a[c].qname:a[c].tname);return e.abrupt("return",Array.from(i));case 10:return console.warn("Unable to do ref renaming on adapter"),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,v.ObservableCreate)(function(){var a=(0,u.Z)((0,s.Z)().mark((function a(u){var i,c,o,f,l,p,m,v,x,b,Z,w,k,q,N,M,C;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.setup(n);case 2:if(i=a.sent,(c=n.config)&&"meanQueryIdentity"===(0,g.readConfObject)(c,"colorBy")&&(i=y(i)),o=t.getAssemblyNames(),f=e.assemblyName,-1!==(l=o.indexOf(f)))for(p=0;p<i.length;p++)m=i[p],v=0,x=0,b="",Z="",w=0,k=0,0===l?(v=m.qstart,x=m.qend,b=m.qname,Z=m.tname,w=m.tstart,k=m.tend):(v=m.tstart,x=m.tend,b=m.tname,Z=m.qname,w=m.qstart,k=m.qend),q=m.extra,N=m.strand,b===e.refName&&(0,h.qY)(e.start,e.end,v,x)&&(M=q.numMatches,C=q.blockLen,u.next(new d.SimpleFeature((0,r.Z)((0,r.Z)({uniqueId:"".concat(p),start:v,end:x,refName:b,strand:N,assemblyName:f,revCigar:!0,syntenyId:p},M&&C?{identity:M/C}:{}),{},{mate:{start:w,end:k,refName:Z}},q))));u.complete();case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),n}(p.BaseFeatureDataAdapter);w.capabilities=["getFeatures","getRefNames"]}}]);
//# sourceMappingURL=6893.447cce3f.chunk.js.map