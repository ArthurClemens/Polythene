// @ts-check

/*
Takes a Mithril component object and returns a React component (for keys oninit and view).
Automatically redraws when the stream `vnode.state.redrawOnUpdate` exists, and the stream is updated.

Example: 

import stream from "mithril/stream";
import { renderer as h, Button } from "polythene-react";

const StateComponent = {
  oninit: vnode => {
    const checked = stream(false);
    Object.assign(vnode.state, {
      checked,
      redrawOnUpdate: stream.merge([checked])
    });
  },
  view: vnode => {
    const state = vnode.state;
    const attrs = vnode.attrs;
    const checked = state.checked();
    return h(Button, {
      raised: true,
      label: `Click ${attrs.subject} to switch ${checked ? "Off" : "On"}`,
      events: {
        [keys.onclick]: () => state.checked(!checked)
      }
    });
  }
};

h(StateComponent, { subject: "airco"});
*/

import React from "react";

export const MithrilToReact = component => (

  class extends React.Component {

    constructor(props) {
      super(props);
      const vnode = {
        ...component,
        state: {},
        attrs: this.props,
        redrawValues: undefined
      };
      if (component.oninit) {
        component.oninit(vnode);
      }
      this.state = vnode;
    }

    componentDidMount() {
      this._mounted = true;
      this.state.state.redrawOnUpdate && this.state.state.redrawOnUpdate.map(values => {
        if (this._mounted) {
          this.setState({ redrawValues: values });
        }
      });
    }

    componentWillUnmount() {
      this._mounted = false;
    }

    render() {
      return component.view({ state: this.state.state, attrs: this.props }, this.props.children);
    }
  }
);
