import { StateComponent, renderer } from 'polythene-react-base';
import { Conditional } from 'polythene-core';
import { coreDrawer } from 'polythene-core-drawer';
import { DialogInstance } from 'polythene-react-dialog';

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
  component: "pe-dialog pe-drawer",
  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

var DrawerInstance = StateComponent(_extends({}, coreDrawer, {
  component: DialogInstance
}));
var DrawerToggle = StateComponent(Conditional);
DrawerToggle.displayName = "DrawerToggle";
var Drawer = function Drawer(props) {
  return renderer(DrawerToggle, _extends({}, props, {
    placeholderClassName: classes.placeholder,
    instance: DrawerInstance,
    permanent: props.permanent || props.mini // passed to Conditional

  }));
};
Drawer.displayName = "Drawer";

export { Drawer };
