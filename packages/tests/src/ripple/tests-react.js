import React from "react"; // eslint-disable-line no-unused-vars
import { Ripple } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import genericTests from "./tests-generic";
import { compose, withState, withHandlers } from "recompose";
import { RippleCSS } from "polythene-css";

const reactTests = ({ Ripple, h }) => { // eslint-disable-line no-unused-vars

  const withCounter = compose(
    withState("counter", "setCounter", 0),
    withHandlers({
      increment: ({ setCounter }) => () => setCounter(n => n + 1)
    })
  );

  RippleCSS.addStyle(".react-ripple-themed-ripple", {
    color_light: "#F44336"
  });

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Appended to an element (JSX)",
      interactive: true,
      exclude: true,
      component: () =>
        <div
          style={{
            position: "relative",
            width:    "100px",
            height:   "100px",
          }}
        >
          <Ripple />
        </div>
    },
    {
      name: "Option: start (after click) (JSX)",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        <Ripple
          before={<div>{`start called: ${counter}`}</div>}
          start={() => increment()}
        />
      )
    },
    {
      name: "Option: end (after click) (JSX)",
      interactive: true,
      exclude: true,
      component: withCounter(({ counter, increment }) =>
        <Ripple
          before={<div>{`start called: ${counter}`}</div>}
          end={() => increment()}
        />
      )
    },
    {
      name: "Option: center (JSX)",
      component: () => <Ripple center={true} />
    },
    {
      name: "Themed (should be red and permanent)",
      component: () => <Ripple
        className="react-ripple-themed-ripple"
        endOpacity={1.0}
        persistent
      />
    },
  ];
};
export default []
  .concat(genericTests({ Ripple, h }))
  .concat(reactTests({ Ripple, h }));
