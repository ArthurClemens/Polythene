!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-css-classes"),require("polythene-core-selection-control")):"function"==typeof define&&define.amd?define(["exports","polythene-css-classes","polythene-core-selection-control"],t):t(e.polythene={},e["polythene-css-classes"],e["polythene-core-selection-control"])}(this,function(e,t,o){"use strict";var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},n={iconOff:'<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>',iconOn:'<svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>'},r=function(e){var o=e.attrs;return s({},o,{icons:n,selectable:o.selectable||function(e){return!e},instanceClass:t.radioButtonClasses.component,type:"radio"})},c=Object.freeze({createProps:r});e.coreRadioButton=c,e.classes=t.radioButtonClasses,e.vars=o.vars,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-radio-button.js.map
