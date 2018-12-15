(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core'), require('polythene-core-ios-spinner'), require('polythene-react-base-spinner')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core', 'polythene-core-ios-spinner', 'polythene-react-base-spinner'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core'],global['polythene-core-ios-spinner'],global['polythene-react-base-spinner']));
}(this, (function (exports,polytheneReactBase,polytheneCore,polytheneCoreIosSpinner,polytheneReactBaseSpinner) { 'use strict';

  var classes = {
    component: "pe-ios-spinner",
    // elements
    blades: "pe-ios-spinner__blades",
    blade: "pe-ios-spinner__blade"
  };

  var baseSpinnerClasses = {
    component: "pe-spinner",
    // elements
    animation: "pe-spinner__animation",
    placeholder: "pe-spinner__placeholder",
    // states
    animated: "pe-spinner--animated",
    fab: "pe-spinner--fab",
    large: "pe-spinner--large",
    medium: "pe-spinner--medium",
    permanent: "pe-spinner--permanent",
    raised: "pe-spinner--raised",
    regular: "pe-spinner--regular",
    singleColor: "pe-spinner--single-color",
    small: "pe-spinner--small",
    visible: "pe-spinner--visible"
  };

  const SpinnerInstance = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreIosSpinner.coreIOSSpinner, {
    component: polytheneReactBaseSpinner.BaseSpinner
  }));
  const SpinnerToggle = polytheneReactBase.StateComponent(polytheneCore.Conditional);
  SpinnerToggle.displayName = "IOSSpinnerToggle";
  const IOSSpinner = props => polytheneReactBase.renderer(SpinnerToggle, Object.assign({}, props, {
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: SpinnerInstance
  }));
  IOSSpinner.classes = classes;
  IOSSpinner.displayName = "IOSSpinner";

  exports.IOSSpinner = IOSSpinner;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-ios-spinner.js.map
