import { StateComponent, renderer as h } from "polythene-react-base";
import { Conditional } from "polythene-core";
import { coreMenu as core, classes } from "polythene-core-menu";
import { Shadow } from "polythene-react-shadow";

const MenuInstance = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow }))
  }
));

const MenuToggle = StateComponent(Conditional);
MenuToggle.displayName = "MenuToggle";

export const Menu = props => (
  h(MenuToggle, Object.assign(
    {},
    props,
    {
      placeholderClassName: classes.placeholder,
      instance: MenuInstance
    }
  ))
);

Menu.theme = core.theme;
Menu.displayName = "Menu";
