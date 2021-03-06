
import classes from "polythene-css-classes/radio-button";

const iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";
const iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";

const icons = {
  iconOff,
  iconOn
};

export const _RadioButton = ({ h, SelectionControl, ...props }) => {
  const componentProps = Object.assign({},
    props,
    {
      icons,
      selectable: props.selectable || (selected => !selected), // default: only selectable when not checked
      instanceClass: classes.component,
      type: "radio"
    }
  );
  return h(SelectionControl, componentProps);
};
