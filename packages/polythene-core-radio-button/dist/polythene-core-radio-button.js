!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-selection-control")):"function"==typeof define&&define.amd?define(["exports","polythene-core-selection-control"],t):t(e.polythene={},e["polythene-core-selection-control"])}(this,function(e,t){"use strict";var o={component:"pe-radio-control"},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r={iconOff:'<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>',iconOn:'<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>'},c=function(e){var t=e.attrs;return n({},t,{icons:r,selectable:t.selectable||function(e){return!e},instanceClass:o.component,type:"radio"})},i=Object.freeze({createProps:c});e.coreRadioButton=i,e.vars=t.vars,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-radio-button.js.map
