// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreTab as core } from "polythene-core-tabs";
import { Icon } from "polythene-mithril-icon";
import { Button } from "polythene-mithril-button";

export const Tab = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon })),
  component: Button
});

Tab["displayName"] = "Tab";
