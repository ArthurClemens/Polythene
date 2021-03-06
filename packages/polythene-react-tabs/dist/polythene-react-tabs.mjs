import { _ScrollButton, _Tab, _Tabs } from 'polythene-core-tabs';
import { Button } from 'polythene-react-button';
import { Icon } from 'polythene-react-icon';
import { IconButton } from 'polythene-react-icon-button';
import { cast, h, a, getRef, useRef, useState, useEffect } from 'cyano-react';

var ScrollButton = cast(_ScrollButton, {
  h: h,
  a: a,
  IconButton: IconButton
});
var Tab = cast(_Tab, {
  h: h,
  a: a,
  Button: Button,
  Icon: Icon
});
var Tabs = cast(_Tabs, {
  h: h,
  a: a,
  getRef: getRef,
  useRef: useRef,
  useState: useState,
  useEffect: useEffect,
  ScrollButton: ScrollButton,
  Tab: Tab
});
Tabs["displayName"] = "Tabs";

export { Tabs };
