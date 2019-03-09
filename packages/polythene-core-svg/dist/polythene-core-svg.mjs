import { filterSupportedAttributes } from 'polythene-core';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var classes = {
  component: "pe-svg"
};

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};
var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  } // Prevent that SVG gets keyboard focus


  var elem = vnode.dom.querySelector("svg");

  if (elem) {
    elem.setAttribute("focusable", "false");
  }
};
var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;
  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), attrs.testId && {
    "data-test-id": attrs.testId
  }, {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};
var createContent = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var svg = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  onMount: onMount,
  createProps: createProps,
  createContent: createContent
});

export { svg as coreSVG };
