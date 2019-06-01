!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core-css"),require("polythene-theme"),require("polythene-css-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme","polythene-css-shadow"],n):n((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"],e["polythene-css-shadow"])}(this,function(e,n,t,o){"use strict";var r={component:"pe-dialog pe-drawer",cover:"pe-drawer--cover",push:"pe-drawer--push",mini:"pe-drawer--mini",permanent:"pe-drawer--permanent",border:"pe-drawer--border",floating:"pe-drawer--floating",fixed:"pe-drawer--fixed",anchorEnd:"pe-drawer--anchor-end",visible:"pe-dialog--visible"};function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){i(e,n,t[n])})}return e}var l={general_styles:function(){return[{" .pe-dialog__content":{background:"none"}}]}},d=function(e){var t;return i(t={},"color_"+e+"_border",function(t,o){return[n.sel(t,{" .pe-dialog__content":{borderColor:o["color_"+e+"_border"]}})]}),i(t,"color_"+e+"_background",function(t,o){return[n.sel(t,{" .pe-dialog-pane":{backgroundColor:o["color_"+e+"_background"]}})]}),i(t,"color_"+e+"_backdrop_background",function(t,o){return[n.sel(t,{" .pe-dialog__backdrop":{backgroundColor:o["color_"+e+"_backdrop_background"]}})]}),t},p=a({},l,d("light")),u=a({},l,d("dark")),_=n.createColor({varFns:{lightTintFns:p,darkTintFns:u}}),s=function(e,t,o){return n.sel(e,{" .pe-dialog__content":{borderWidth:"".concat(t.border?1:0,"px"),borderStyle:o?"none none none solid":"none solid none none"}})},g=function(e,t){return[s(e,t,!1),s(n.selectorRTL(e),t,!0)]},f=function(e){return function(n,t){var o;return[{".pe-drawer--fixed":(o={},i(o,e?"right":"left",0),i(o,e?"left":"right","auto"),o)},s("".concat(n,".pe-drawer--border"),a({},t,{border:!0}),e)]}},h=f(!1),b=f(!0),m=function(e){return n.sel(e,{".pe-dialog--visible .pe-dialog__backdrop":{opacity:1}})},v=function(e){return"".concat(e,".pe-drawer--anchor-end")},w=function(e,t){return n.sel(e,{":not(.pe-dialog--visible) .pe-dialog__content":{width:"".concat(t.content_width_mini_collapsed,"px")}})},y=function(e,t,o){var r,a;return n.sel(e,{" .pe-dialog__content":(r={maxWidth:"".concat(t.content_max_width,"px")},i(r,o?"right":"left","".concat(-t.content_max_width-15,"px")),i(r,o?"left":"right","auto"),r),".pe-dialog--visible .pe-dialog__content":(a={},i(a,o?"right":"left",0),i(a,o?"left":"right","auto"),a)})},k=function(e,t){return[y(e,t,!1),y(n.selectorRTL(e),t,!0),y(v(e),t,!0),y(v(n.selectorRTL(e)),t,!1)]},x=function(e,t){return n.sel(e,{" .pe-dialog__content":{width:"".concat(t.content_width,"px")}})},L=function(e,t,o){var r,a;return n.sel(e,{" .pe-dialog__content":(r={},i(r,o?"marginRight":"marginLeft","".concat(-t.content_width-15,"px")),i(r,o?"marginLeft":"marginRight","auto"),r),".pe-dialog--visible .pe-dialog__content":(a={width:"".concat(t.content_width,"px")},i(a,o?"marginRight":"marginLeft",0),i(a,o?"marginLeft":"marginRight","auto"),a)})},R=function(e,t){return[L(e,t,!1),L(n.selectorRTL(e),t,!0),L(v(e),t,!0),L(v(n.selectorRTL(e)),t,!1)]},O=function(e,t){return n.sel(e,{" .pe-dialog__content":{position:"absolute",top:0,zIndex:t.z_index},".pe-dialog--visible":{" .pe-dialog__touch":{display:"block"}}})},j=function(e,t){return n.sel(e,{" .pe-dialog__content":{marginLeft:0,marginRight:0}})},S=function(e,t){return n.sel(e,{position:"static",display:"block",padding:0,overflow:"initial"," .pe-dialog__content":{overflow:"visible",maxHeight:"initial",marginLeft:0,marginRight:0}})},T=function(e,t){return n.sel(e,{position:"static"})},z=function(e,t){return n.sel(e,{" .pe-dialog__content":{borderRadius:t.border_radius+"px"}})},P=function(e,t){return n.sel(e,{height:"auto"," .pe-dialog__content":{height:"auto"}})},F=c({general_styles:function(e,o){return[n.sel(e,[h(e,o),{justifyContent:"flex-start",position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1,height:"100%",minWidth:0,padding:0,opacity:1,flexShrink:0,transitionProperty:"all",":not(.pe-dialog--transition)":{" .pe-dialog__content":{transitionDuration:"0s"}}," .pe-dialog__content":{position:"relative",height:"100%",overflow:"visible",minWidth:0,flexShrink:0}," .pe-dialog-pane__content":{height:"100%",overflowY:"auto",overflowX:"hidden"}," .pe-dialog-pane":{height:"100%",maxHeight:"none",minWidth:0}," .pe-dialog-pane__body":{overflow:"visible",maxHeight:"none",border:"none"},".pe-drawer--fixed":{position:"fixed",top:0,width:"100%",zIndex:t.vars.z_drawer},".pe-drawer--mini":j(e),".pe-drawer--permanent":S(e),".pe-drawer--floating":P(e),".pe-drawer--cover":O(e,o),".pe-drawer--push":T(e)," .pe-dialog__backdrop":{pointerEvents:"none",opacity:0,display:"block"}," .pe-dialog__touch":{display:"none",position:"absolute",top:0,left:0,right:0,bottom:0},".pe-dialog--backdrop":m(e)}]),[n.sel(n.selectorRTL(e),b(e,o))]]},animation_delay:function(e,t){return[n.sel(e,{"&, .pe-dialog__content, .pe-dialog__backdrop":{transitionDelay:t.animation_delay}})]},animation_duration:function(e,t){return[n.sel(e,{"&, .pe-dialog__content, .pe-dialog__backdrop":{transitionDuration:t.animation_duration}})]},animation_timing_function:function(e,t){return[n.sel(e,{"&, .pe-dialog__content, .pe-dialog__backdrop":{transitionTimingFunction:t.animation_timing_function}})]},border_radius:function(e,n){return[z(e,n)]},content_max_width:function(e,n){return[k("".concat(e,".pe-drawer--cover"),n)]},content_width:function(e,n){return[x(e,n),x("".concat(e,".pe-dialog--visible"),n),x("".concat(e,".pe-drawer--permanent"),n),R("".concat(e,".pe-drawer--push"),n)]},content_width_mini_collapsed:function(e,n){return[w("".concat(e,".pe-drawer--mini"),n)]},cover:function(e,n){return n.cover&&[O(e,n),k(e,n)]},backdrop:function(e,n){return[n.backdrop&&m(e)]},border:function(e,n){return[g(e,n)]},mini:function(e,n){return n.mini&&[j(e),w(e,n)]},permanent:function(e,n){return[n.permanent&&S(e)]},floating:function(e,n){return[n.floating&&P(e)]},push:function(e,n){return n.push&&[T(e),R(e,n)]}},o.sharedVarFns),C=n.createLayout({varFns:F}),W=c({backdrop:!1,border:void 0,cover:!1,floating:!1,mini:!1,permanent:!1,push:!1,z_index:t.vars.z_drawer},o.sharedVars),D=c({general_styles:!0,animation_delay:"0s",animation_duration:".260s",animation_timing_function:"ease-in-out",border_radius:0,content_max_width:5*t.vars.increment,content_width:240,content_width_mini_collapsed:t.vars.increment,color_light_backdrop_background:"rgba(0, 0, 0, .4)",color_dark_backdrop_background:"rgba(0, 0, 0, .5)",color_light_background:n.rgba(t.vars.color_light_background),color_dark_background:n.rgba(t.vars.color_dark_background),color_light_border:n.rgba(t.vars.color_light_foreground,t.vars.blend_light_border_light),color_dark_border:n.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_border_light)},W),q=[C,_],E=".".concat(r.component.replace(/ /g,".")),H=n.styler.createAddStyle(E,q,D),I=n.styler.createGetStyle(E,q,D);n.styler.addStyle({selectors:[E],fns:q,vars:D}),e.addStyle=H,e.color=_,e.getStyle=I,e.layout=C,e.vars=D,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-drawer.js.map
