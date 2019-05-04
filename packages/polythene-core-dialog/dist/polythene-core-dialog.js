!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],n):n((e=e||self).polythene={},e["polythene-core"])}(this,function(e,n){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],o=!0,r=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(o=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a={component:"pe-dialog",placeholder:"pe-dialog__placeholder",holder:"pe-dialog__holder",content:"pe-dialog__content",backdrop:"pe-dialog__backdrop",touch:"pe-dialog__touch",fullScreen:"pe-dialog--full-screen",modal:"pe-dialog--modal",open:"pe-dialog--open",visible:"pe-dialog--visible",showBackdrop:"pe-dialog--backdrop",transition:"pe-dialog--transition",menuContent:"pe-menu__content"};e._Dialog=function(e){var l=e.h,i=e.a,c=e.useState,s=e.useEffect,u=e.useRef,p=e.getRef,d=e.Pane,f=e.Shadow,h=o(e,["h","a","useState","useEffect","useRef","getRef","Pane","Shadow"]),y=r(c(),2),m=y[0],b=y[1],g=r(c(!1),2),v=g[0],w=g[1],S=u(!1),k=u(),O=u(),_=u(),j=u(!1),P=function(e){return S.current=e},C=S.current,E=j.current,N=function(e){var n=e.isShow,o=e.hideDelay,r=void 0===o?h.hideDelay:o;return{isTransitioning:v,setIsTransitioning:w,setIsVisible:P,instanceId:h.instanceId,props:t({},h,{hideDelay:r}),isShow:n,domElements:{el:m,contentEl:_.current,backdropEl:k.current},showClass:a.visible,transitionClass:a.transition}},D=function(e){return t=!0,j.current=t,n.transitionComponent(N({isShow:!1,hideDelay:e}));var t},I=function(){return h.modal||n.stylePropCompare({element:m,pseudoSelector:":before",prop:"content",contains:'"'.concat("modal",'"')})};s(function(){m&&(k.current=m.querySelector(".".concat(a.backdrop)),O.current=m.querySelector(".".concat(a.touch)),_.current=m.querySelector(".".concat(a.content)))},[m]),s(function(){if(m&&!h.inactive){var e=function(e){if(!(h.fullScreen||n.stylePropCompare({element:m,pseudoSelector:":before",prop:"content",contains:'"'.concat("full_screen",'"')})||I()||"Escape"!==e.key&&"Esc"!==e.key)){var t=document.querySelectorAll(".".concat(a.component));t[t.length-1]===m&&D(0)}};return n.subscribe("keydown",e),function(){n.unsubscribe("keydown",e)}}},[m]),s(function(){!m||v||E||(h.hide?C&&D():h.show&&(C||n.transitionComponent(N({isShow:!0}))))},[m,v,C,h.hide,h.show]);var x,B,q,A=t({},n.filterSupportedAttributes(h,{remove:["style"]}),p(function(e){return e&&!m&&(b(e),h.ref&&h.ref(e))}),(x={className:[h.parentClassName||a.component,h.fromMultipleClassName,h.fullScreen?a.fullScreen:null,h.modal?a.modal:null,h.backdrop?a.showBackdrop:null,"dark"===h.tone?"pe-dark-tone":null,"light"===h.tone?"pe-light-tone":null,h.className||h[i.class]].join(" "),"data-spawn-id":h.spawnId,"data-instance-id":h.instanceId},B=i.onclick,q=function(e){e.target!==m&&e.target!==k.current&&e.target!==O.current||I()||D()},B in x?Object.defineProperty(x,B,{value:q,enumerable:!0,configurable:!0,writable:!0}):x[B]=q,x)),R=h.panesOptions&&h.panesOptions.length?l(d,h.panesOptions[0]):h.panes&&h.panes.length?h.panes[0]:function(e){var n=e.h,t=e.Pane,o=e.props;return n(t,{body:o.content||o.body||o.menu||o.children,borders:o.borders,className:o.className,footer:o.footer,footerButtons:o.footerButtons,formOptions:o.formOptions,fullBleed:o.fullBleed,header:o.header,style:o.style,title:o.title})}({h:l,Pane:d,props:h}),T=void 0!==h.shadowDepth?h.shadowDepth:h.z,M=[l("div",{key:"backdrop",className:a.backdrop}),l("div",{key:"touch",className:a.touch}),l("div",{className:[a.content,h.menu?a.menuContent:null].join(" "),key:"content"},[h.fullScreen?null:l(f,{shadowDepth:void 0!==T?T:3,animated:!0,key:"shadow"}),h.before,R,h.after])];return l(h.element||"div",A,M)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-dialog.js.map
