(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core'), require('polythene-core-notification')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core', 'polythene-core-notification'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core'],global['polythene-core-notification']));
}(this, (function (exports,polytheneMithrilBase,polytheneCore,polytheneCoreNotification) { 'use strict';

  var classes = {
    component: "pe-notification",
    // elements
    action: "pe-notification__action",
    content: "pe-notification__content",
    holder: "pe-notification__holder",
    placeholder: "pe-notification__placeholder",
    title: "pe-notification__title",
    // states
    hasContainer: "pe-notification--container",
    horizontal: "pe-notification--horizontal",
    multilineTitle: "pe-notification__title--multi-line",
    vertical: "pe-notification--vertical",
    visible: "pe-notification--visible"
  };

  const NotificationInstance = polytheneMithrilBase.StateComponent(polytheneCoreNotification.coreNotificationInstance);
  NotificationInstance.displayName = "NotificationInstance";
  const options = {
    name: "notification",
    className: classes.component,
    htmlShowClass: classes.open,
    defaultId: "default_notification",
    holderSelector: `.${classes.holder}`,
    instance: NotificationInstance,
    placeholder: `span.${classes.placeholder}`,
    queue: true
  };
  const Multiple = polytheneCore.Multi({
    options,
    renderer: polytheneMithrilBase.renderer
  });
  const Notification = polytheneMithrilBase.StateComponent(Multiple);
  Object.getOwnPropertyNames(Multiple).forEach(p => Notification[p] = Multiple[p]);
  Notification.displayName = "Notification";

  exports.NotificationInstance = NotificationInstance;
  exports.Notification = Notification;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-notification.js.map
