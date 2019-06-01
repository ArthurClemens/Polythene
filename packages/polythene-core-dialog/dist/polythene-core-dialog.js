!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],n):n((e=e||self).polythene={},e["polythene-core"])}(this,function(e,n){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a={component:"pe-dialog",placeholder:"pe-dialog__placeholder",holder:"pe-dialog__holder",content:"pe-dialog__content",backdrop:"pe-dialog__backdrop",touch:"pe-dialog__touch",fullScreen:"pe-dialog--full-screen",modal:"pe-dialog--modal",open:"pe-dialog--open",visible:"pe-dialog--visible",showBackdrop:"pe-dialog--backdrop",transition:"pe-dialog--transition",menuContent:"pe-menu__content"},i=".".concat(a.component),l={isVisible:!1,isTransitioning:!1,isHiding:!1};e._Dialog=function(e){var i=e.h,c=e.a,s=e.useState,u=e.useEffect,p=e.useRef,d=e.getRef,f=e.useReducer,h=e.Pane,y=e.Shadow,m=e.openDialogsSelector,b=o(e,["h","a","useState","useEffect","useRef","getRef","useReducer","Pane","Shadow","openDialogsSelector"]),g=r(f(n.transitionStateReducer,l),2),v=g[0],S=g[1],w=r(s(),2),k=w[0],O=w[1],_=p(),j=p(),P=p(),C=v.isVisible,D=v.isTransitioning,E=v.isHiding,N=function(e){var n=e.isShow,o=e.hideDelay,r=void 0===o?b.hideDelay:o;return{dispatchTransitionState:S,instanceId:b.instanceId,props:t({},b,{hideDelay:r}),isShow:n,domElements:{el:k,contentEl:P.current,backdropEl:_.current},showClass:a.visible,transitionClass:a.transition}},R=function(e){return n.transitionComponent(N({isShow:!1,hideDelay:e}))},x=function(){return b.modal||k&&k.classList.contains(a.modal)||n.stylePropCompare({element:k,pseudoSelector:":before",prop:"content",contains:'"'.concat("modal",'"')})};u(function(){k&&(_.current=k.querySelector(".".concat(a.backdrop)),j.current=k.querySelector(".".concat(a.touch)),P.current=k.querySelector(".".concat(a.content)))},[k]),u(function(){if(k&&!b.inactive){var e=function(e){if(!(b.disableEscape&&(b.fullScreen||n.stylePropCompare({element:k,pseudoSelector:":before",prop:"content",contains:'"'.concat("full_screen",'"')})||x())||"Escape"!==e.key&&"Esc"!==e.key)){var t=document.querySelectorAll(m);t[t.length-1]===k&&R(0)}};return n.subscribe("keydown",e),function(){n.unsubscribe("keydown",e)}}},[k,b.inactive]),u(function(){!k||D||E||(b.hide?C&&R():b.show&&(C||n.transitionComponent(N({isShow:!0}))))},[k,D,E,C,b.hide,b.show]);var B,I,q,A=t({},n.filterSupportedAttributes(b,{remove:["style"]}),d(function(e){return e&&!k&&(O(e),b.ref&&b.ref(e))}),(B={className:[b.parentClassName||a.component,b.fromMultipleClassName,b.fullScreen?a.fullScreen:null,b.modal?a.modal:null,b.backdrop?a.showBackdrop:null,"dark"===b.tone?"pe-dark-tone":null,"light"===b.tone?"pe-light-tone":null,b.className||b[c.class]].join(" "),"data-spawn-id":b.spawnId,"data-instance-id":b.instanceId},I=c.onclick,q=function(e){e.target!==k&&e.target!==_.current&&e.target!==j.current||x()||R()},I in B?Object.defineProperty(B,I,{value:q,enumerable:!0,configurable:!0,writable:!0}):B[I]=q,B)),T=b.panesOptions&&b.panesOptions.length?i(h,b.panesOptions[0]):b.panes&&b.panes.length?b.panes[0]:function(e){var n=e.h,t=e.Pane,o=e.props;return n(t,{body:o.content||o.body||o.menu||o.children,borders:o.borders,className:o.className,footer:o.footer,footerButtons:o.footerButtons,formOptions:o.formOptions,fullBleed:o.fullBleed,header:o.header,style:o.style,title:o.title})}({h:i,Pane:h,props:b}),H=b.shadowDepth,M=[i("div",{key:"backdrop",className:a.backdrop}),i("div",{key:"touch",className:a.touch}),i("div",{className:[a.content,b.menu?a.menuContent:null].join(" "),key:"content"},[b.fullScreen?null:i(y,{shadowDepth:void 0!==H?H:3,animated:!0,key:"shadow"}),b.before,T,b.after])];return i(b.element||"div",A,M)},e.openDialogsSelector=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-dialog.js.map
