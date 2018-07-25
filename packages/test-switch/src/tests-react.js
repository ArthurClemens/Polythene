import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Switch, Icon, Button, keys } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Switch, renderer: h }) => { // eslint-disable-line no-unused-vars

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Option: defaultChecked (JSX)",
      component: () =>
        <Switch
          label="Label"
          defaultChecked
        />
    },
  ];
};

export default []
  .concat(genericTests({ Switch, Icon, Button, renderer, keys }))
  .concat(reactTests({ Switch, Icon, Button, renderer, keys }));
