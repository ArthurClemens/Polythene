!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core"),require("polythene-css-classes"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-css-classes","polythene-theme"],r):r(e.polythene={},e["polythene-core"],e["polythene-css-classes"],e["polythene-theme"])}(this,function(e,r,t,o){"use strict";var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=void 0,d=function(){},s=[];r.subscribe(r.pointerEndEvent,function(){return d()});var i=function(e,r){var t=r.state.zBase,o=r.attrs.increase||1,n=r.state.z(),a="down"===e&&t<5?Math.min(t+o,5):"up"===e?Math.max(n-o,t):n;a!==n&&r.state.z(a)},c=function(e,r){"down"===e&&s.push(n({},r)),!1!==r.attrs.animateOnTap&&i(e,r)},l=function(e){r.isServer||(a=function(){return c("down",e)},d=function(){s.map(function(e){return c("up",e)}),s=[]},e.dom.addEventListener(r.pointerStartMoveEvent,a))},_=function(e){return e.dom.removeEventListener(r.pointerStartMoveEvent,a)},u=function(e,r){var t=e.attrs,o=void 0!==t.z?t.z:1,n=r(o);return{zBase:o,z:n,tapEventsInited:r(!1),redrawOnUpdate:r.merge([n])}},v=function(e){var r=e.state;e.dom&&!r.tapEventsInited()&&(l(e),r.tapEventsInited(!0))},h=function(e){e.state.tapEventsInited()&&_(e)},p=function(e,r){var o=r.renderer,a=r.Shadow,d=e.attrs,s=e.state,i=d.children||e.children||[];return n({},{parentClassName:[d.parentClassName||t.raisedButtonClasses.component].join(" "),animateOnTap:!1,shadowComponent:o(a,{z:d.disabled?0:s.z,animated:!0}),children:i},d)},g=function(){return null},f=Object.freeze({getInitialState:u,onMount:v,onUnMount:h,createProps:p,createContent:g}),b=function(e){return"rgba("+e+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+")"},k={color_light_background:"#fff",color_light_text:b(o.vars.color_light_foreground,o.vars.blend_light_text_primary),color_light_hover_background:"transparent",color_light_focus_background:b(o.vars.color_light_foreground,o.vars.blend_light_background_hover),color_light_active_background:b(o.vars.color_light_foreground,o.vars.blend_light_background_hover),color_light_disabled_background:b(o.vars.color_light_foreground,o.vars.blend_light_background_disabled),color_light_disabled_text:b(o.vars.color_light_foreground,o.vars.blend_light_text_disabled),color_dark_background:b(o.vars.color_primary),color_dark_text:b(o.vars.color_dark_foreground,o.vars.blend_dark_text_primary),color_dark_hover_background:o.vars.color_primary_active,color_dark_focus_background:o.vars.color_primary_active,color_dark_active_background:o.vars.color_primary_dark,color_dark_disabled_background:b(o.vars.color_dark_foreground,o.vars.blend_dark_background_disabled),color_dark_disabled_text:b(o.vars.color_dark_foreground,o.vars.blend_dark_text_disabled)};e.coreRaisedButton=f,e.classes=t.raisedButtonClasses,e.vars=k,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-raised-button.js.map
