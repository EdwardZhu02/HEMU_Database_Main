"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[847,5997],{90847:function(e,t,r){r.r(t),r.d(t,{parseBedBuffer:function(){return f},parseBedPEBuffer:function(){return l},removeBedHeaders:function(){return m}});var n=r(32723),a=r(34795),u=r(45997),s="browser ".split("").map((function(e){return e.charCodeAt(0)})),o="track ".split("").map((function(e){return e.charCodeAt(0)})),c="#".split("").map((function(e){return e.charCodeAt(0)}));function i(e,t,r){for(var n=0;n<r.length;n+=1)if(t[e+n]!==r[n])return!1;return!0}function m(e){for(var t=0;t<e.length&&(i(t,e,s)||i(t,e,o)||i(t,e,c));t+=1)do{t+=1}while(10!==e[t]);return t?e.slice(t):e}function f(e,t){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m(t),e.next=3,(0,u.parseTsvBuffer)(a);case 3:return s=e.sent,o=[{name:"chrom",dataType:{type:"LocRef"}},{name:"chromStart",dataType:{type:"LocStart"}},{name:"chromEnd",dataType:{type:"LocEnd"}},{name:"name",dataType:{type:"Text"}},{name:"score",dataType:{type:"Number"}},{name:"strand",dataType:{type:"Text"}}],s.columns.forEach((function(e,t){var r=o[t];r&&(e.name=r.name,e.dataType=r.dataType)})),s.hasColumnNames=!0,s.assemblyName=r.selectedAssemblyName,s.columnDisplayOrder.push(s.columnDisplayOrder.length),s.columns.unshift({name:"Location",dataType:{type:"LocString"},isDerived:!0,derivationFunctionText:"jexl:{text:row.cells[0].text+':'+row.cells[1].text+'..'+row.cells[2].text,\n\n    extendedData: {refName: row.cells.ref.text, start: parseInt(row.cells.start.text,10), end: parseInt(row.cells.end.text,10)}}"}),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m(t),e.next=3,(0,u.parseTsvBuffer)(a);case 3:return s=e.sent,o=[{name:"chrom1",dataType:{type:"Text"},featureField:["refName"]},{name:"start1",dataType:{type:"Number"},featureField:["start"]},{name:"end1",dataType:{type:"Number"},featureField:["end"]},{name:"chrom2",dataType:{type:"Text"},featureField:["mate","refName"]},{name:"start2",dataType:{type:"Number"},featureField:["mate","start"]},{name:"end2",dataType:{type:"Number"},featureField:["mate","end"]},{name:"name",dataType:{type:"Text"},featureField:["name"]},{name:"score",dataType:{type:"Number"},featureField:["score"]},{name:"strand1",dataType:{type:"Text"},featureField:["strand"]},{name:"strand2",dataType:{type:"Text"},featureField:["mate","strand"]}],s.columns.forEach((function(e,t){var r=o[t];r&&(e.name=r.name,e.dataType=r.dataType)})),s.hasColumnNames=!0,s.rowSet.rows.forEach((function(e,t){var r={};e.cells.forEach((function(e,t){var n=e.text,a=o[t],u=a&&"Number"===a.dataType.type&&n?parseFloat(n):n;a?2===a.featureField.length?(r[a.featureField[0]]||(r[a.featureField[0]]={}),r[a.featureField[0]][a.featureField[1]]=u):r[a.featureField[0]]=u:r["column".concat(t+1)]=u})),r.uniqueId="bedpe-".concat(t),e.extendedData={feature:r}})),s.assemblyName=r.selectedAssemblyName,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},45997:function(e,t,r){r.r(t),r.d(t,{bufferToString:function(){return c},parseCsvBuffer:function(){return l},parseTsvBuffer:function(){return y}});var n=r(32723),a=r(33028),u=r(96234),s=r(34795),o=r(81073);function c(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function i(e){return m.apply(this,arguments)}function m(){return m=(0,s.Z)((0,n.Z)().mark((function e(t){var u,s,o=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,r.e(2745).then(r.t.bind(r,12745,23)).then((function(e){return e.default}));case 3:return s=e.sent,e.abrupt("return",s((0,a.Z)({noheader:!0,output:"csv"},u)).fromString(c(t)));case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function f(e,t,r){var n,a=e.rows[0].cells[t].text||"",u="Text";try{n=(0,o.parseLocString)(a,r)}catch(s){}return n&&n.refName&&"number"===typeof n.start?u="LocString":/^\d+(\.\d+)?$/.test(a)&&(u="Number"),u}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},r=0,n={isLoaded:!0,rows:e.map((function(e,n){var a=n+(t.hasColumnNameLine?0:1);return e.length>r&&(r=e.length),{id:String(a),cells:e.map((function(e,t){return{columnNumber:t,text:e}}))}}))},a={};if(t.hasColumnNameLine&&void 0!==t.columnNameLineNumber){var s=n.rows.splice(t.columnNameLineNumber-1,1),c=(0,u.Z)(s,1),i=c[0];i&&i.cells.forEach((function(e,t){a[t]=e.text||""}))}for(var m=[],p=[],l=function(e){p.push(e);var r=f(n,e,t.isValidRefName);"LocString"===r&&n.rows.forEach((function(r){var n=r.cells[e];n.extendedData=(0,o.parseLocString)(n.text,t.isValidRefName)})),m[e]={name:a[e],dataType:{type:r}}},d=0;d<r;d+=1)l(d);return{rowSet:n,columnDisplayOrder:p,hasColumnNames:!!t.hasColumnNameLine,columns:m,assemblyName:t.selectedAssemblyName}}function l(e){return d.apply(this,arguments)}function d(){return d=(0,s.Z)((0,n.Z)().mark((function e(t){var r,a,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,i(t);case 3:return a=e.sent,e.abrupt("return",p(a,r));case 5:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function y(e){return h.apply(this,arguments)}function h(){return h=(0,s.Z)((0,n.Z)().mark((function e(t){var r,a,u=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,i(t,{delimiter:"\t"});case 3:return a=e.sent,e.abrupt("return",p(a,r));case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}}}]);
//# sourceMappingURL=847.c82aa25c.chunk.js.map