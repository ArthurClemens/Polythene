!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],n):n((e=e||self).polythene={},e["polythene-core"])}(this,function(e,n){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var r={component:"pe-spinner",animation:"pe-spinner__animation",placeholder:"pe-spinner__placeholder",animated:"pe-spinner--animated",fab:"pe-spinner--fab",large:"pe-spinner--large",medium:"pe-spinner--medium",permanent:"pe-spinner--permanent",raised:"pe-spinner--raised",regular:"pe-spinner--regular",singleColor:"pe-spinner--single-color",small:"pe-spinner--small",visible:"pe-spinner--visible"},i=function(e,n,t){return{state:e,attrs:n,isShow:t,domElements:{el:e.dom()},showClass:r.visible}},o=Object.freeze({getInitialState:function(e,n){var t=n(!1),r=n(!1);return{dom:n(null),visible:r,transitioning:t,redrawOnUpdate:n.merge([t])}},onMount:function(e){if(e.dom){var t=e.state,r=e.attrs;void 0!==r.z&&n.deprecation("Spinner",{option:"z",newOption:"shadowDepth"}),t.dom(e.dom),r.permanent||function(e,t){n.transitionComponent(i(e,t,!0))}(t,r)}},createProps:function(e,i){var o=i.keys,a=e.attrs;return t({},n.filterSupportedAttributes(a),a.testId&&{"data-test-id":a.testId},{className:[r.component,a.instanceClass,n.classForSize(r,a.size),a.singleColor?r.singleColor:null,a.raised?r.raised:null,a.animated?r.animated:null,a.permanent?r.permanent:null,a.permanent?r.visible:null,a.className||a[o.class]].join(" ")},a.events)},createContent:function(e,t){var r=t.renderer,o=t.Shadow,a=e.state,s=e.attrs;a.hide&&setTimeout(function(){!function(e,t){n.transitionComponent(i(e,t,!1))}(a,s)},0);var p=void 0!==s.shadowDepth?s.shadowDepth:s.z;return[s.raised&&s.content?r(o,{key:"shadow",shadowDepth:p}):null,s.content]}});e.coreBaseSpinner=o,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-base-spinner.js.map
