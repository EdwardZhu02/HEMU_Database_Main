(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2917],{23038:function(e,a,r){"use strict";var t=r(71600);a.Z=void 0;var o=t(r(48035)),n=r(37574),i=(0,o.default)((0,n.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.Z=i},50501:function(e,a,r){"use strict";var t=r(7896),o=r(31461),n=r(30969),i=r(81856),s=r(26540),u=r(45971),c=r(17363),l=r(34096),d=r(37574),p=["className"],m=(0,u.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,a){return a.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),f=n.forwardRef((function(e,a){var r=(0,c.Z)({props:e,name:"MuiAccordionDetails"}),n=r.className,u=(0,o.Z)(r,p),f=r,h=function(e){var a=e.classes;return(0,s.Z)({root:["root"]},l.s,a)}(f);return(0,d.jsx)(m,(0,t.Z)({className:(0,i.default)(h.root,n),ref:a,ownerState:f},u))}));a.Z=f},34096:function(e,a,r){"use strict";r.d(a,{s:function(){return o}});var t=r(2975);function o(e){return(0,t.Z)("MuiAccordionDetails",e)}var n=(0,r(62746).Z)("MuiAccordionDetails",["root"]);a.Z=n},80928:function(e,a,r){"use strict";r.d(a,{Z:function(){return y}});var t=r(56666),o=r(31461),n=r(7896),i=r(30969),s=r(81856),u=r(26540),c=r(45971),l=r(17363),d=r(6596),p=r(56325),m=r(2975);function f(e){return(0,m.Z)("MuiAccordionSummary",e)}var h=(0,r(62746).Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),v=r(37574),$=["children","className","expandIcon","focusVisibleClassName","onClick"],g=(0,c.ZP)(d.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,a){return a.root}})((function(e){var a,r=e.theme,o=e.ownerState,i={duration:r.transitions.duration.shortest};return(0,n.Z)((a={display:"flex",minHeight:48,padding:r.spacing(0,2),transition:r.transitions.create(["min-height","background-color"],i)},(0,t.Z)(a,"&.".concat(h.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,t.Z)(a,"&.".concat(h.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),(0,t.Z)(a,"&:hover:not(.".concat(h.disabled,")"),{cursor:"pointer"}),a),!o.disableGutters&&(0,t.Z)({},"&.".concat(h.expanded),{minHeight:64}))})),b=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,a){return a.content}})((function(e){var a=e.theme,r=e.ownerState;return(0,n.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!r.disableGutters&&(0,t.Z)({transition:a.transitions.create(["margin"],{duration:a.transitions.duration.shortest})},"&.".concat(h.expanded),{margin:"20px 0"}))})),Z=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,a){return a.expandIconWrapper}})((function(e){var a=e.theme;return(0,t.Z)({display:"flex",color:(a.vars||a).palette.action.active,transform:"rotate(0deg)",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest})},"&.".concat(h.expanded),{transform:"rotate(180deg)"})})),y=i.forwardRef((function(e,a){var r=(0,l.Z)({props:e,name:"MuiAccordionSummary"}),t=r.children,c=r.className,d=r.expandIcon,m=r.focusVisibleClassName,h=r.onClick,y=(0,o.Z)(r,$),x=i.useContext(p.Z),w=x.disabled,C=void 0!==w&&w,R=x.disableGutters,M=x.expanded,N=x.toggle,k=(0,n.Z)({},r,{expanded:M,disabled:C,disableGutters:R}),P=function(e){var a=e.classes,r=e.expanded,t=e.disabled,o=e.disableGutters,n={root:["root",r&&"expanded",t&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,u.Z)(n,f,a)}(k);return(0,v.jsxs)(g,(0,n.Z)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":M,className:(0,s.default)(P.root,c),focusVisibleClassName:(0,s.default)(P.focusVisible,m),onClick:function(e){N&&N(e),h&&h(e)},ref:a,ownerState:k},y,{children:[(0,v.jsx)(b,{className:P.content,ownerState:k,children:t}),d&&(0,v.jsx)(Z,{className:P.expandIconWrapper,ownerState:k,children:d})]}))}))},61369:function(e,a,r){"use strict";var t=r(7896),o=r(31461),n=r(30969),i=r(81856),s=r(26540),u=r(45971),c=r(17363),l=r(46672),d=r(64734),p=r(37574),m=["className","raised"],f=(0,u.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,a){return a.root}})((function(){return{overflow:"hidden"}})),h=n.forwardRef((function(e,a){var r=(0,c.Z)({props:e,name:"MuiCard"}),n=r.className,u=r.raised,l=void 0!==u&&u,h=(0,o.Z)(r,m),v=(0,t.Z)({},r,{raised:l}),$=function(e){var a=e.classes;return(0,s.Z)({root:["root"]},d.y,a)}(v);return(0,p.jsx)(f,(0,t.Z)({className:(0,i.default)($.root,n),elevation:l?8:void 0,ref:a,ownerState:v},h))}));a.Z=h},64734:function(e,a,r){"use strict";r.d(a,{y:function(){return o}});var t=r(2975);function o(e){return(0,t.Z)("MuiCard",e)}var n=(0,r(62746).Z)("MuiCard",["root"]);a.Z=n},58119:function(e,a,r){"use strict";var t=r(7896),o=r(31461),n=r(30969),i=r(81856),s=r(26540),u=r(45971),c=r(17363),l=r(76262),d=r(37574),p=["className","component"],m=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,a){return a.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=n.forwardRef((function(e,a){var r=(0,c.Z)({props:e,name:"MuiCardContent"}),n=r.className,u=r.component,f=void 0===u?"div":u,h=(0,o.Z)(r,p),v=(0,t.Z)({},r,{component:f}),$=function(e){var a=e.classes;return(0,s.Z)({root:["root"]},l.N,a)}(v);return(0,d.jsx)(m,(0,t.Z)({as:f,className:(0,i.default)($.root,n),ownerState:v,ref:a},h))}));a.Z=f},76262:function(e,a,r){"use strict";r.d(a,{N:function(){return o}});var t=r(2975);function o(e){return(0,t.Z)("MuiCardContent",e)}var n=(0,r(62746).Z)("MuiCardContent",["root"]);a.Z=n},37626:function(e,a,r){"use strict";var t=r(56666),o=r(31461),n=r(7896),i=r(30969),s=r(81856),u=r(26540),c=r(33359),l=r(17363),d=r(45971),p=r(54127),m=r(37574),f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],h=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,a){var r;return(0,n.Z)((r={},(0,t.Z)(r,"& .".concat(p.Z.title),a.title),(0,t.Z)(r,"& .".concat(p.Z.subheader),a.subheader),r),a.root)}})({display:"flex",alignItems:"center",padding:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,a){return a.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),$=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,a){return a.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,a){return a.content}})({flex:"1 1 auto"}),b=i.forwardRef((function(e,a){var r=(0,l.Z)({props:e,name:"MuiCardHeader"}),t=r.action,i=r.avatar,d=r.className,b=r.component,Z=void 0===b?"div":b,y=r.disableTypography,x=void 0!==y&&y,w=r.subheader,C=r.subheaderTypographyProps,R=r.title,M=r.titleTypographyProps,N=(0,o.Z)(r,f),k=(0,n.Z)({},r,{component:Z,disableTypography:x}),P=function(e){var a=e.classes;return(0,u.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p.J,a)}(k),S=R;null==S||S.type===c.Z||x||(S=(0,m.jsx)(c.Z,(0,n.Z)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},M,{children:S})));var j=w;return null==j||j.type===c.Z||x||(j=(0,m.jsx)(c.Z,(0,n.Z)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:j}))),(0,m.jsxs)(h,(0,n.Z)({className:(0,s.default)(P.root,d),as:Z,ref:a,ownerState:k},N,{children:[i&&(0,m.jsx)(v,{className:P.avatar,ownerState:k,children:i}),(0,m.jsxs)(g,{className:P.content,ownerState:k,children:[S,j]}),t&&(0,m.jsx)($,{className:P.action,ownerState:k,children:t})]}))}));a.Z=b},54127:function(e,a,r){"use strict";r.d(a,{J:function(){return o}});var t=r(2975);function o(e){return(0,t.Z)("MuiCardHeader",e)}var n=(0,r(62746).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);a.Z=n},74125:function(e){e.exports=function(){var e=[],a=[],r={},t={},o={};function n(e){return"string"===typeof e?new RegExp("^"+e+"$","i"):e}function i(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function s(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,r){return a[r]||""}))}function u(e,a){return e.replace(a[0],(function(r,t){var o=s(a[1],arguments);return i(""===r?e[t-1]:r,o)}))}function c(e,a,t){if(!e.length||r.hasOwnProperty(e))return a;for(var o=t.length;o--;){var n=t[o];if(n[0].test(a))return u(a,n)}return a}function l(e,a,r){return function(t){var o=t.toLowerCase();return a.hasOwnProperty(o)?i(t,o):e.hasOwnProperty(o)?i(t,e[o]):c(o,t,r)}}function d(e,a,r,t){return function(t){var o=t.toLowerCase();return!!a.hasOwnProperty(o)||!e.hasOwnProperty(o)&&c(o,o,r)===o}}function p(e,a,r){return(r?a+" ":"")+(1===a?p.singular(e):p.plural(e))}return p.plural=l(o,t,e),p.isPlural=d(o,t,e),p.singular=l(t,o,a),p.isSingular=d(t,o,a),p.addPluralRule=function(a,r){e.push([n(a),r])},p.addSingularRule=function(e,r){a.push([n(e),r])},p.addUncountableRule=function(e){"string"!==typeof e?(p.addPluralRule(e,"$0"),p.addSingularRule(e,"$0")):r[e.toLowerCase()]=!0},p.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),o[e]=a,t[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return p.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return p.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return p.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[e\xe9]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(p.addUncountableRule),p}()}}]);
//# sourceMappingURL=2917.26d9ad28.chunk.js.map