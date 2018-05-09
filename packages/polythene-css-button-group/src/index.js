import { styler } from "polythene-core-css";
import { vars } from "polythene-core-button-group";
import classes from "polythene-css-classes/button-group";
import layout from "./layout";
import color from "./color";

const fns = [layout, color];
const selector = `.${classes.component}`;

export const addStyle = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

export const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createStyleSheets([customSelector, selector], {...vars, ...customVars}, fns)
    : styler.createStyleSheets([selector], vars, fns);

styler.generateStyles([selector], vars, fns);
