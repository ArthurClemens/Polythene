import { Component } from "mithril";
import { Options } from "polythene-core-checkbox";

interface Checkbox extends Options{}
declare namespace Checkbox {}
declare const Checkbox: Component<Options>;

export { Checkbox };
export as namespace Checkbox;
