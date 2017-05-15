import m from 'mithril';
import { filterSupportedAttributes } from 'polythene-core';
import { Icon, iconButton } from 'polythene-mithril';
import { vars } from 'polythene-theme';
import { flex, mixin } from 'polythene-core-css';

var classes = {
  component: "pe-control",

  // elements
  formLabel: "pe-control__form-label",
  input: "pe-control__input",
  label: "pe-control__label",

  // states
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  large: "pe-control--large",
  medium: "pe-control--medium",
  off: "pe-control--off",
  on: "pe-control--on",
  regular: "pe-control--regular",
  small: "pe-control--small",

  // control view elements
  box: "pe-control__box",
  button: "pe-control__button",

  // control view states
  buttonOff: "pe-control__button--off",
  buttonOn: "pe-control__button--on"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var typeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForType = function classForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return typeClasses[mode];
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  if (typeof attrs.checked === "function") {
    state.setChecked(attrs.checked());
  }
  var checked = state.checked();
  var selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
  var inactive = attrs.disabled || !selectable;
  var element = attrs.element || "div";
  var name = attrs.name || "";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.instanceClass, checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForType(attrs.size), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = [m("input", {
    class: classes.input,
    name: name,
    value: state.value(),
    type: attrs.type, // set by checkbox / radio-button
    tabindex: -1, // set in controlView / icon-button
    checked: checked,
    oncreate: function oncreate(vnode) {
      return state.setInputEl(vnode.dom);
    }
  }), m("label", {
    class: classes.formLabel
  }, [attrs.controlView ? attrs.controlView(checked, _extends({}, attrs, { events: { onclick: state.toggle } })) : null, attrs.label ? m("." + classes.label, inactive ? null : {
    onclick: state.toggle
  }, attrs.label) : null])];
  return m(element, props, [attrs.before, content, attrs.after]);
};

var selectionControl = {
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    // Because this module also supports radio buttons (paired control elements)
    // we won"t keep a separate "checked" value but instead keep the checked value
    // as a HTMLElement checked state.
    var defaultChecked = false;
    var _value = attrs.value || "1";
    var inputEl = void 0;

    var setInputElChecked = function setInputElChecked(isChecked) {
      if (inputEl) {
        inputEl.checked = isChecked;
      }
    };

    var getAttrsChecked = function getAttrsChecked() {
      if (typeof attrs.checked === "function") {
        var v = attrs.checked();
        return v !== undefined ? v : defaultChecked;
      } else {
        return attrs.checked !== undefined ? attrs.checked : defaultChecked;
      }
    };

    var setInputEl = function setInputEl(el) {
      inputEl = el;
      setInputElChecked(getAttrsChecked());
    };

    var setChecked = function setChecked(isChecked) {
      setInputElChecked(isChecked);
      if (attrs.getState) {
        attrs.getState({
          checked: inputEl ? inputEl.checked : getAttrsChecked(),
          value: _value,
          el: inputEl
        });
      }
    };

    var toggle = function toggle() {
      return setChecked(!inputEl.checked);
    };

    vnode.state = _extends(vnode.state, {
      setInputEl: setInputEl,
      setChecked: setChecked,
      checked: function checked() {
        return inputEl ? inputEl.checked : getAttrsChecked();
      },
      toggle: toggle,
      value: function value() {
        return _value;
      }
    });
  },
  view: view
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createIcon = function createIcon(onOffType, attrs) {
  return (
    // if attrs.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends$1({}, attrs[onOffType] ? attrs[onOffType] : { msvg: attrs.theme[onOffType] }, { class: attrs.class }, attrs.icon, attrs.size ? { type: attrs.size } : null)
  );
};

var controlView = function controlView(checked, attrs) {
  return m("div", {
    class: classes.box
  }, m(iconButton, _extends$1({}, {
    element: "div",
    class: classes.button,
    content: [m(Icon, createIcon("iconOn", _extends$1({}, attrs, { class: classes.buttonOn }))), m(Icon, createIcon("iconOff", _extends$1({}, attrs, { class: classes.buttonOff })))],
    ripple: { center: true },
    disabled: attrs.disabled,
    events: attrs.events
  }, attrs.selectable !== undefined ? { inactive: !attrs.selectable(checked) } : null, attrs.iconButton)));
};

var rgba = vars.rgba;

var vars$1 = {
  label_font_size: 2 * vars.grid_unit_component, // 16
  label_height: 3 * vars.grid_unit_component, // 24
  label_padding_before: vars.grid_unit * 4, // 16
  label_padding_after: 0,
  button_size: 6 * vars.grid_unit_component,
  icon_size: 3 * vars.grid_unit_component,
  animation_duration: vars.animation_duration,

  color_light_on: vars.rgba(vars.color_primary),
  color_light_off: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity: .11,

  // icon colors may be set in theme; disabled by default
  // color_light_on_icon
  // color_light_off_icon

  color_light_focus_on: rgba(vars.color_primary),
  color_light_focus_on_opacity: .11,
  color_light_focus_off: rgba(vars.color_light_foreground),
  color_light_focus_off_opacity: .07,

  color_dark_on: vars.rgba(vars.color_primary),
  color_dark_off: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on_focus_opacity: .11,

  // icon color may be set in theme; disabled by default
  // color_dark_on_icon
  // color_dark_off_icon

  color_dark_focus_on: rgba(vars.color_primary), // or '#80cbc4'
  color_dark_focus_on_opacity: .14,
  color_dark_focus_off: rgba(vars.color_dark_foreground),
  color_dark_focus_off_opacity: .09
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_on"], // override by specifying "color"

    " .pe-control__label": {
      color: componentVars["color_" + tint + "_label"]
    },
    " .pe-control__box": {
      " .pe-control__button": {
        color: "inherit",

        " .pe-control__button--on": {
          color: componentVars["color_" + tint + "_on_icon"] || "inherit"
        },

        " .pe-control__button--off": {
          color: componentVars["color_" + tint + "_off_icon"] || componentVars["color_" + tint + "_off"]
        }
      }
    },
    ".pe-control--off": {
      " .pe-button--focus .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_off_opacity"],
        backgroundColor: componentVars["color_" + tint + "_focus_off"]
      }
    },
    ".pe-control--on": {
      " .pe-button--focus .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_on_opacity"],
        backgroundColor: componentVars["color_" + tint + "_focus_on"]
      }
    },

    ".pe-control--disabled": {
      " .pe-control__label": {
        color: componentVars["color_" + tint + "_disabled"]
      },
      " .pe-control__box": {
        " .pe-control__button--on, .pe-control__button--off": {
          color: componentVars["color_" + tint + "_disabled"]
        }
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var makeSize = function makeSize(componentVars, height) {
  var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars.unit_icon_size;

  var labelSize = iconSize + componentVars.label_height;
  var iconOffset = (labelSize - iconSize) / 2;
  return {
    " .pe-control__form-label": {
      height: height + "px"
    },
    " .pe-control__box": {
      width: iconSize + "px",
      height: iconSize + "px"
    },
    " .pe-button__content": {
      width: labelSize + "px",
      height: labelSize + "px",

      " .pe-icon": [mixin.fit(iconOffset)]
    }
  };
};

var activeButton = function activeButton() {
  return {
    opacity: 1,
    zIndex: 1
  };
};

var inactiveButton = function inactiveButton() {
  return {
    opacity: 0,
    zIndex: 0
  };
};

var layout = (function (selector, componentVars, type) {
  var _selector;

  return [_defineProperty$1({}, selector, (_selector = {
    display: "inline-block",
    boxSizing: "border-box",
    margin: 0,
    padding: 0

  }, _defineProperty$1(_selector, " input[type=" + type + "].pe-control__input", {
    appearance: "none",
    lineHeight: componentVars.label_height + "px",
    // Hide input element
    position: "absolute",
    zIndex: "-1",
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0,
    border: "none",
    pointerEvents: "none"
  }), _defineProperty$1(_selector, " .pe-control__form-label", [flex.layoutHorizontal, flex.layoutCenter, {
    position: "relative",
    cursor: "pointer",
    fontSize: componentVars.label_font_size + "px",
    lineHeight: componentVars.label_height + "px",
    margin: 0,
    color: "inherit",

    ":focus": {
      outline: 0
    }
  }]), _defineProperty$1(_selector, ".pe-control--inactive", {
    " .pe-control__form-label": {
      cursor: "default"
    }
  }), _defineProperty$1(_selector, " .pe-control__box", {
    position: "relative",
    display: "inline-block",
    boxSizing: "border-box",
    width: componentVars.label_height + "px",
    height: componentVars.label_height + "px",
    color: "inherit",

    ":focus": {
      outline: 0
    }
  }), _defineProperty$1(_selector, " .pe-button.pe-control__button", [mixin.defaultTransition("opacity", componentVars.animation_duration), {
    position: "absolute",
    left: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
    top: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
    zIndex: 1
  }]), _defineProperty$1(_selector, ".pe-control--off", {
    " .pe-control__button--on": inactiveButton(),
    " .pe-control__button--off": activeButton()
  }), _defineProperty$1(_selector, ".pe-control--on", {
    " .pe-control__button--on": activeButton(),
    " .pe-control__button--off": inactiveButton()
  }), _defineProperty$1(_selector, " .pe-control__label", {
    paddingLeft: componentVars.label_padding_before + "px",
    paddingRight: componentVars.label_padding_after + "px"
  }), _defineProperty$1(_selector, ".pe-control--disabled", {
    " .pe-control__form-label": {
      cursor: "auto"
    },
    " .pe-control__button": {
      pointerEvents: "none"
    }
  }), _defineProperty$1(_selector, " .pe-button__content", {
    " .pe-icon": {
      position: "absolute"
    }
  }), _defineProperty$1(_selector, ".pe-control--small", makeSize(componentVars, vars.unit_icon_size_small, vars.unit_icon_size_small)), _defineProperty$1(_selector, ".pe-control--regular", makeSize(componentVars, componentVars.label_height, vars.unit_icon_size)), _defineProperty$1(_selector, ".pe-control--medium", makeSize(componentVars, vars.unit_icon_size_medium, vars.unit_icon_size_medium)), _defineProperty$1(_selector, ".pe-control--large", makeSize(componentVars, vars.unit_icon_size_large, vars.unit_icon_size_large)), _selector))];
});

export { selectionControl, classes, controlView, vars$1 as vars, color, layout };
