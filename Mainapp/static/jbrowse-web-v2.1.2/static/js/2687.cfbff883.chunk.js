(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2687],{74375:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(32723),a=r(34795),i=r(9249),o=r(87371),u=r(45754),s=r(13820),c=r(29598),f=r(33528),l=r(26131),p=r(16362),h=r(14956),d=r(42098),v=r(78141),m=r(33028);function y(e){var t=(0,m.Z)({},e);t.start-=1,t.strand={"+":1,"-":-1,".":0,"?":void 0}[e.strand],t.phase=Number(e.frame),t.refName=e.seq_name,null===e.score&&delete t.score,null===e.frame&&delete t.score;var r=["start","end","seq_name","score","featureType","source","frame","strand"];return Object.keys(e.attributes).forEach((function(n){var a=n.toLowerCase();if(r.includes(a)&&(a+="2"),null!==e.attributes[n]){var i=e.attributes[n];if(Array.isArray(i)&&1===i.length){var o=i[0].replace(/^"|"$/g,"");i=o}t[a]=i}})),t.refName=t.seq_name,t.type=t.featureType,e.child_features&&e.child_features.length&&(t.subfeatures=e.child_features.map((function(e){return e.map((function(e){return y(e)}))})).flat()),delete t.child_features,delete t.data,delete t.derived_features,delete t._linehash,delete t.attributes,delete t.seq_name,delete t.featureType,delete t.frame,t.transcript_id&&(t.name=t.transcript_id),t}function b(e){return 31===e[0]&&139===e[1]&&8===e[2]}var g=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(){var e;(0,i.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).gtfFeatures=void 0,e.intervalTrees={},e}return(0,o.Z)(r,[{key:"loadDataP",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,i,o,u,s,c,l,p,h,v=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.length>0&&void 0!==v[0]?v[0]:{},r=this.getConf("gtfLocation"),e.next=4,(0,f.openLocation)(r,this.pluginManager).readFile(t);case 4:if(!b(a=e.sent)){e.next=11;break}return e.next=8,(0,d.unzip)(a);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a;case 12:if(!((i=e.t0).length>536870888)){e.next=15;break}throw new Error("Data exceeds maximum string length (512MB)");case 15:o=new TextDecoder("utf8",{fatal:!0}).decode(i),u=o.split("\n").filter((function(e){return!!e&&!e.startsWith("#")})),s={},c=0;case 19:if(!(c<u.length)){e.next=30;break}if(!(l=u[c]).startsWith("#")){e.next=23;break}return e.abrupt("continue",27);case 23:p=l.indexOf("\t"),h=l.slice(0,p),s[h]||(s[h]=[]),s[h].push(u[c]);case 27:c++,e.next=19;break;case 30:return e.abrupt("return",{feats:s});case 31:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r=this,a=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},this.gtfFeatures||(this.gtfFeatures=this.loadDataP(t).catch((function(e){throw r.gtfFeatures=void 0,e}))),e.abrupt("return",this.gtfFeatures);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,i=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},e.next=3,this.loadData(t);case 3:return r=e.sent,a=r.feats,e.abrupt("return",Object.keys(a));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadFeatureIntervalTreeHelper",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,i,o,u,s,c,f,l=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:if(r=e.sent,a=r.feats,i=a[t]){e.next=7;break}return e.abrupt("return",void 0);case 7:for(o=v.Z.parseStringSync(i.join("\n"),{parseFeatures:!0,parseComments:!1,parseDirectives:!1,parseSequences:!1}),u=new p.ZP,s=o.flat().map((function(e,r){return new h.Z({data:y(e),id:"".concat(l.id,"-").concat(t,"-").concat(r)})})),c=0;c<s.length;c++)f=s[c],u.insert([f.get("start"),f.get("end")],f);return e.abrupt("return",u);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadFeatureIntervalTree",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.intervalTrees[t]||(this.intervalTrees[t]=this.loadFeatureIntervalTreeHelper(t).catch((function(e){throw r.intervalTrees[t]=void 0,e}))),e.abrupt("return",this.intervalTrees[t]);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,l.ObservableCreate)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(a){var i,o,u,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i=e.start,o=e.end,u=e.refName,r.next=4,t.loadFeatureIntervalTree(u);case 4:null===(s=r.sent)||void 0===s||s.search([i,o]).forEach((function(e){return a.next(e)})),a.complete(),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),a.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(c.BaseFeatureDataAdapter)},30226:function(e,t,r){"use strict";var n=r(40475);function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.formatFile=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=Object.assign({insertVersionDirective:!1},r);return new Promise((function(r,a){e.pipe(new C(n)).on("end",(function(){return r(t)})).on("error",a).pipe(g.createWriteStream(t,{encoding:n.encoding||"utf8"}))}))},t.formatStream=function(e){return new C(e)},t.formatSync=function(e){var t=[],r=[];e.forEach((function(e){e.sequence?r.push(e):t.push(e)}));var n=t.map(u.formatItem).join("");r.length&&(n+="##FASTA\n",n+=r.map(u.formatSequence).join(""));return n},t.parseFile=function(e,t){return g.createReadStream(e).pipe(w(t))},t.parseStream=w,t.parseStringSync=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return[];var r=S(t),n=[],a=n.push.bind(n),i=new o.default({featureCallback:r.parseFeatures?a:null,directiveCallback:r.parseDirectives?a:null,commentCallback:r.parseComments?a:null,sequenceCallback:r.parseSequences?a:null,bufferSize:1/0,errorCallback:function(e){throw e}});return e.split(/\r?\n/).forEach(i.addLine.bind(i)),i.finish(),n};var i,o=(i=r(80084))&&i.__esModule?i:{default:i},u=r(47359);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var a=m(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){if(t&&("object"===a(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var y=r(51032).Transform,b=r(3377).s,g=null;function _(e){n&&n.nextTick?n.nextTick(e):e()}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object.assign({parseFeatures:!0,parseDirectives:!1,parseSequences:!0,parseComments:!1},t,e);return e.parseAll&&(r.parseFeatures=!0,r.parseDirectives=!0,r.parseComments=!0,r.parseSequences=!0),r}var k=function(e){l(r,e);var t=h(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,r);var a=S(n);(e=t.call(this,{objectMode:!0})).encoding=n.encoding||"utf8",e.decoder=new b,e.textBuffer="";var i=e.push.bind(v(e));return e.parser=new o.default({featureCallback:a.parseFeatures?i:null,directiveCallback:a.parseDirectives?i:null,commentCallback:a.parseComments?i:null,sequenceCallback:a.parseSequences?i:null,errorCallback:function(t){return e.emit("error",t)},bufferSize:a.bufferSize}),e}return f(r,[{key:"_addLine",value:function(e){var t=e.toString("utf8");t&&this.parser.addLine(t)}},{key:"_nextText",value:function(e){var t=this,r=(this.textBuffer+e).split(/\r?\n/);this.textBuffer=r.pop(),this.maxLineLength&&this.textBuffer.length>this.maxLineLength?this.emit("error",new Error("maximum line size exceeded")):r.forEach((function(e){return t._addLine(e)}))}},{key:"_transform",value:function(e,t,r){this._nextText(this.decoder.write(e)),_(r)}},{key:"_flush",value:function(e){this.decoder.end&&this._nextText(this.decoder.end()),null!=this.textBuffer&&this._addLine(this.textBuffer),this.parser.finish(),_(e)}}]),r}(y);function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({bufferSize:1e3},e);return new k(t)}var C=function(e){l(r,e);var t=h(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s(this,r),(e=t.call(this,Object.assign(n,{objectMode:!0}))).linesSinceLastSyncMark=0,e.minLinesBetweenSyncMarks=n.minSyncLines||100,e.insertVersionDirective=n.insertVersionDirective||!1,e.haveWeEmittedData=!1,e.fastaMode=!1,e}return f(r,[{key:"_transform",value:function(e,t,r){var n;if(!this.haveWeEmittedData&&this.insertVersionDirective&&"gtf"!==(e[0]||e).directive&&this.push("##gtf\n"),e.sequence&&!this.fastaMode&&(this.push("##FASTA\n"),this.fastaMode=!0),n=Array.isArray(e)?e.map(u.formatItem).join(""):(0,u.formatItem)(e),this.push(n),this.linesSinceLastSyncMark>=this.minLinesBetweenSyncMarks)this.push("###\n"),this.linesSinceLastSyncMark=0;else{for(var a=0,i=0;i<n.length;i+=1)"\n"===n[i]&&(a+=1);this.linesSinceLastSyncMark+=a}this.haveWeEmittedData=!0,_(r)}}]),r}(y)},78141:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var a=r(30226),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=i?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(a,u,s):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(47359));function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}var u={parseStream:a.parseStream,parseFile:a.parseFile,parseStringSync:a.parseStringSync,formatSync:a.formatSync,formatStream:a.formatStream,formatFile:a.formatFile,util:i};t.Z=u},80084:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=o?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(a,u,s):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(r(47359));function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(s){u=!0,a=s}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var h={Parent:"child_features",Derives_from:"derived_features"},d=function(){function e(t){f(this,e),this.seqCallback=t,this.currentSequence=void 0}return p(e,[{key:"addLine",value:function(e){var t=/^>\s*(\S+)\s*(.*)/.exec(e);t?(this._flush(),this.currentSequence={id:t[1],sequence:""},t[2]&&(this.currentSequence.description=t[2].trim())):this.currentSequence&&/\S/.test(e)&&(this.currentSequence.sequence+=e.replace(/\s/g,""))}},{key:"_flush",value:function(){this.currentSequence&&this.seqCallback(this.currentSequence)}},{key:"finish",value:function(){this._flush()}}]),e}(),v=function(){function e(t){f(this,e);var r=function(){};Object.assign(this,{featureCallback:t.featureCallback||r,endCallback:t.endCallback||r,commentCallback:t.commentCallback||r,errorCallback:t.errorCallback||r,directiveCallback:t.directiveCallback||r,sequenceCallback:t.sequenceCallback||r,bufferSize:void 0===t.bufferSize?1e3:t.bufferSize,_underConstructionTopLevel:[],_underConstructionById:{},_completedReferences:{},_underConstructionOrphans:{},eof:!1,lineNumber:0})}return p(e,[{key:"addLine",value:function(e){if(this.fastaParser)this.fastaParser.addLine(e);else if(!this.eof)if(this.lineNumber+=1,/^\s*[^#\s>]/.test(e))this._bufferLine(e);else{var t=/^\s*(#+)(.*)/.exec(e);if(t){var r=u(t,3),n=r[1],i=r[2];if(3===n.length)this._emitAllUnderConstructionFeatures();else if(2===n.length){var o=a.parseDirective(e);"FASTA"===o.directive?(this._emitAllUnderConstructionFeatures(),this.eof=!0,this.fastaParser=new d(this.sequenceCallback)):this._emitItem(o)}else i=i.replace(/\s*/,""),this._emitItem({comment:i})}else if(/^\s*$/.test(e));else{if(!/^\s*>/.test(e)){var s=e.replace(/\r?\n?$/g,"");throw new Error("GTF parse error.  Cannot parse '".concat(s,"'."))}this._emitAllUnderConstructionFeatures(),this.eof=!0,this.fastaParser=new d(this.sequenceCallback),this.fastaParser.addLine(e)}}}},{key:"_emitItem",value:function(e){e[0]?this.featureCallback(e):e.directive?this.directiveCallback(e):e.comment&&this.commentCallback(e)}},{key:"finish",value:function(){this._emitAllUnderConstructionFeatures(),this.fastaParser&&this.fastaParser.finish(),this.endCallback()}},{key:"_enforceBufferSizeLimit",value:function(){for(var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=function t(r){r&&r[0]&&r[0].attributes&&r[0].attributes.ID&&r[0].attributes.ID[0]&&(r[0].attributes.ID.forEach((function(t){delete e._underConstructionById[t],delete e._completedReferences[t]})),r.forEach((function(e){e.child_features&&e.child_features.forEach((function(e){return t(e)})),e.derived_features&&e.derived_features.forEach((function(e){return t(e)}))})))};this._underConstructionTopLevel.length+t>this.bufferSize;){var n=this._underConstructionTopLevel.shift();this._emitItem(n),r(n)}}},{key:"_emitAllUnderConstructionFeatures",value:function(){if(this._underConstructionTopLevel.forEach(this._emitItem.bind(this)),this._underConstructionTopLevel=[],this._underConstructionById={},this._completedReferences={},Object.values(this._underConstructionOrphans).filter((function(e){return Object.keys(e).length})).length)throw new Error("some features reference other features that do not exist in the file (or in the same '###' scope). ".concat(JSON.stringify(this._underConstructionOrphans)))}},{key:"_bufferLine",value:function(e){var t=this,r=a.parseFeature(e);r.child_features=[],r.derived_features=[];var n,i=this.lineNumber,o="transcript"===r.featureType,u=o?r.attributes.transcript_id||[]:[i],s=o?[]:r.attributes.transcript_id||[],c=r.attributes.Derives_from||[];u.length||s.length||c.length?(s.forEach((function(e){t._underConstructionById[e]||t._bufferLine(function(e){var t=JSON.parse(JSON.stringify(e));return t.featureType="transcript",a.formatFeature(t)}(r))})),u.forEach((function(e){var a=t._underConstructionById[e];a?(a.push(r),n=a):(n=[r],t._enforceBufferSizeLimit(1),s.length||c.length||t._underConstructionTopLevel.push(n),t._underConstructionById[e]=n,t._resolveReferencesTo(n,e))})),this._resolveReferencesFrom(n||[r],{Parent:s,Derives_from:c},u)):this._emitItem([r])}},{key:"_resolveReferencesTo",value:function(e,t){var r=this._underConstructionOrphans[t];r&&Object.keys(r).forEach((function(t){var n=h[t]||t.toLowerCase();e.forEach((function(e){var a;(a=e[n]).push.apply(a,o(r[t])),delete r[t]}))}))}},{key:"_parseError",value:function(e){this.eof=!0,this.errorCallback("".concat(this.lineNumber,": ").concat(e))}},{key:"_resolveReferencesFrom",value:function(e,t,r){var n=this;Object.entries(t).forEach((function(t){var a,i=u(t,2),o=i[0];i[1].forEach((function(t){var i,u,s=n._underConstructionById[t];s?(u=e,(i=s)[0].start=Math.min(i[0].start,u[0].start),i[0].end=Math.max(i[0].end,u[0].end),a||(a=h[o]||o.toLowerCase()),r.filter((function(e){return function(e,t,r){var n=e[t];n||(n={},e[t]=n);var a=n[r]||!1;return n[r]=!0,a}(n._completedReferences,e,"".concat(o,",").concat(t))})).length||s.forEach((function(t){t[a].push(e)}))):(n._underConstructionOrphans[t]||(n._underConstructionOrphans[t]={}),n._underConstructionOrphans[t][o]||(n._underConstructionOrphans[t][o]=[]),n._underConstructionOrphans[t][o].push(e))}))}))}}]),e}();t.default=v},47359:function(e,t){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(s){u=!0,a=s}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.escape=c,t.escapeColumn=f,t.formatAttributes=p,t.formatComment=b,t.formatDirective=y,t.formatFeature=m,t.formatItem=function(e){function t(e){return e[0]||e.attributes?m(e):e.directive?y(e):e.sequence?g(e):e.comment?b(e):"# (invalid item found during format)\n"}if(Array.isArray(e))return e.map((function(e){return t(e)}));return t(e)},t.formatSequence=g,t.parseAttributes=l,t.parseDirective=function(e){var t=/^\s*##\s*(\S+)\s*(.*)/.exec(e);if(!t)return null;var n=t[1],a=t[2],i={directive:n};a.length&&(a=a.replace(/\r?\n$/,""),i.value=a);if("sequence-region"===n){var o=r(a.split(/\s+/,3),3),u=o[0],s=o[1],c=o[2];i.seq_id=u,i.start=s&&s.replace(/\D/g,""),i.end=c&&c.replace(/\D/g,"")}else if("genome-build"===n){var f=r(a.split(/\s+/,2),2),l=f[0],p=f[1];i.source=l,i.buildname=p}return i},t.parseFeature=function(e){var t=e.split("\t").map((function(e){return"."===e?null:e}));t[0]=u(t[0]),t[1]=u(t[1]),t[2]=u(t[2]),t[8]=l(t[8]);for(var r={},n=0;n<o.length;n+=1)r[o[n]]="."===t[n]?null:t[n];null!==r.start&&(r.start=parseInt(r.start,10));null!==r.end&&(r.end=parseInt(r.end,10));null!==r.score&&(r.score=parseFloat(r.score,10));null!=r.strand&&(r.strand=r.strand);return r},t.unescape=u;var o=["seq_name","source","featureType","start","end","score","strand","frame","attributes"];function u(e){return null===e?null:String(e).replace(/%([0-9A-Fa-f]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))}))}function s(e,t){return String(t).replace(e,(function(e){var t=e.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0".concat(t)),"%".concat(t)}))}function c(e){return s(/[\n;\r\t=%&,\x00-\x1f\x7f-\xff]/g,e)}function f(e){return s(/[\n\r\t%\x00-\x1f\x7f-\xff]/g,e)}function l(e){if(!e||!e.length||"."===e)return{};var t={};return e.replace(/\r?\n$/,"").slice(0,-1).split(";").forEach((function(e){var r;if(e){var a=e.trim().split(" ");if(a[1]&&a[1].length){a[0]=a[0].trim();var i=t[a[0].trim()];i||(i=[],t[a[0]]=i),(r=i).push.apply(r,n(a[1].split(",").map((function(e){return e.trim()})).map(u)))}}})),t}function p(e){var t=[];return Object.keys(e).forEach((function(r){var n,a=e[r];n=a.hasOwnProperty("toString")?c(a.toString()):Array.isArray(a.values)?a.values.map(c).join(","):Array.isArray(a)?a.map(c).join(","):c(a),t.push("".concat(c(r)," ").concat(n))})),t.length?t.join("; ").concat(";"):"."}var h=["-",".","+"];function d(e,t){for(var r=null===e.attributes||void 0===e.attributes?".":p(e.attributes),n=[],a=0;a<8;a+=1){var i=e[o[a]];n[a]=6===a?null===i||void 0===i?".":h[i+1]||i:null===i||void 0===i?".":f(String(i))}n[8]=r;var u="".concat(n.join("\t"),"\n");return t[u]?"":(t[u]=!0,u)}function v(e,t){if(Array.isArray(e))return e.map((function(e){return v(e,t)})).join("");var r=[d(e,t)];return["child_features","derived_features"].forEach((function(a){e[a]&&r.push.apply(r,n(e[a].map((function(e){return v(e,t)}))))})),r.join("")}function m(e){return v(e,{})}function y(e){var t="##".concat(e.directive);return e.value&&(t+=" ".concat(e.value)),t+="\n"}function b(e){return"# ".concat(e.comment,"\n")}function g(e){return">".concat(e.id).concat(e.description?" ".concat(e.description):"","\n").concat(e.sequence,"\n")}},57267:function(){},48732:function(){}}]);
//# sourceMappingURL=2687.cfbff883.chunk.js.map