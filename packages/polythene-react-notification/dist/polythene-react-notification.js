!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core"),require("polythene-core-notification")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core","polythene-core-notification"],t):t(e.polythene={},e["polythene-react-base"],e["polythene-core"],e["polythene-core-notification"])}(this,function(e,t,o,n){"use strict";var i={component:"pe-notification",action:"pe-notification__action",content:"pe-notification__content",holder:"pe-notification__holder",placeholder:"pe-notification__placeholder",title:"pe-notification__title",hasContainer:"pe-notification--container",horizontal:"pe-notification--horizontal",multilineTitle:"pe-notification__title--multiline",vertical:"pe-notification--vertical"},a=t.StateComponent(n.coreNotificationInstance);a.displayName="NotificationInstance";var c={name:"notification",className:i.component,bodyShowClass:i.open,defaultId:"default_notification",holderSelector:"."+i.holder,instance:a,placeholder:"span."+i.placeholder,queue:!0,transitions:n.transitions},r=o.Multi({options:c,renderer:t.renderer}),l=t.StateComponent(r);Object.getOwnPropertyNames(r).forEach(function(e){return l[e]=r[e]}),l.displayName="Notification",e.NotificationInstance=a,e.Notification=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-notification.js.map
