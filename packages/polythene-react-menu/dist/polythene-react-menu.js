!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core"),require("polythene-core-menu"),require("polythene-react-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core","polythene-core-menu","polythene-react-shadow"],t):t(e.polythene={},e["polythene-react-base"],e["polythene-core"],e["polythene-core-menu"],e["polythene-react-shadow"])}(this,function(e,t,n,o,r){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=t.StateComponent(a({},o.coreMenu,{createContent:function(e,t){return o.coreMenu.createContent(e,a(t,{Shadow:r.Shadow}))}})),l=t.StateComponent(n.Conditional);l.displayName="MenuToggle";var p=function(e){return t.renderer(l,a({},e,{placeholderClassName:o.classes.placeholder,instance:c}))};p.theme=o.coreMenu.theme,p.displayName="Menu",e.Menu=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-menu.js.map
