!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var r={component:"pe-search",content:"pe-search__content",searchFullWidth:"pe-search--full-width",searchInset:"pe-search--inset"},o=Object.freeze({getElement:function(e){return e.attrs.element||"div"},getInitialState:function(e,t){return{searchState:t({})}},createProps:function(e,o){var a=o.keys,s=e.attrs;return n({},t.filterSupportedAttributes(s),s.testId&&{"data-test-id":s.testId},{className:[r.component,s.fullWidth?r.searchFullWidth:r.searchInset,"dark"===s.tone?"pe-dark-tone":null,"light"===s.tone?"pe-light-tone":null,s.className||s[a.class]].join(" ")},s.events)},createContent:function(e,t){var o=t.renderer,a=t.TextField,s=e.state,c=e.attrs,i=function(e){return e.focus&&e.dirty?"focus_dirty":e.focus?"focus":e.dirty?"dirty":"none"}(s.searchState()),u=(c.buttons||{})[i]||{},l=c.textfield||{};return o("div",{className:r.content},[u.before,o(a,n({},l,{key:"input",onChange:function(e){s.searchState(e),l.onChange&&l.onChange(e)}})),u.after])}});e.coreSearch=o,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-search.js.map
