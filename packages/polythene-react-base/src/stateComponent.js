// @ts-check

/**
 * @typedef {import("../index").StateComponentAssemblyOptions} StateComponentAssemblyOptions
 */

import React from "react";
import ReactDOM from "react-dom";
import stream from "mithril/stream";
import { renderer } from "./renderer";
import { keys } from "./keys";
import { isClient } from "polythene-core";

const requiresKeys = true;

/**
 * @param {StateComponentAssemblyOptions} params
 */
export const StateComponent = ({
  createContent = () => {},
  createProps = () => ({}),
  getElement = () => "div",
  component,
  getInitialState = () => ({}),
  onMount = () => {},
  onUnMount = () => {},
  onUpdate = () => {},
  view = null
}) => {
  
  return class extends React.Component {
    
    constructor(props) {
      super(props);
      this.dom = null;
      const protoState = Object.assign(
        {},
        component,
        this.createVirtualNode(),
        {
          redrawValues: undefined
        }
      );
      this.state = getInitialState(protoState, stream, { keys });
      this.registerDOM = this.registerDOM.bind(this);
      this._render = this._render.bind(this);      
    }
    
    componentDidMount() {
      this._mounted = true;
      this.state.redrawOnUpdate && this.state.redrawOnUpdate.map(values => (
        setTimeout(() => this._mounted && this.setState({ redrawValues: values }), 0)
      ));
      onMount(this.createVirtualNode(), { keys });
    }

    componentDidUpdate() {
      onUpdate(this.createVirtualNode());
    }

    componentWillUnmount() {
      this._mounted = false;
      onUnMount(this.createVirtualNode());
    }

    createVirtualNode() {
      return {
        state: this.state,
        attrs: this.props,
        children: this.props.children,
        dom: this.dom,
      };
    }

    registerDOM(el) {
      if (isClient && !this.dom && el) {
        this.dom = el instanceof HTMLElement
          ? el
          : ReactDOM.findDOMNode(el);
      }
    }

    _render() {
      const vnode = this.createVirtualNode();
      return renderer(
        component || getElement(vnode),
        Object.assign(
          {},
          createProps(vnode, { renderer, requiresKeys, keys }),
          { ref: this.registerDOM }
        ),
        [
          vnode.attrs.before,
          createContent(vnode, { renderer, requiresKeys, keys }),
          vnode.attrs.after
        ]
      );
    }

    render() {
      return view
        ? view(this.createVirtualNode(), { renderer, render: this._render })
        : this._render();
    }
  };
};