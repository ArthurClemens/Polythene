import { _RadioButton } from 'polythene-core-radio-button';
import { _ViewControl, _SelectionControl } from 'polythene-core-selection-control';
import { cast, h, a, useState } from 'cyano-mithril';
import { Icon } from 'polythene-mithril-icon';
import { IconButton } from 'polythene-mithril-icon-button';

var ViewControl = cast(_ViewControl, {
  h: h,
  Icon: Icon,
  IconButton: IconButton
});
ViewControl["displayName"] = "ViewControl";
var SelectionControl = cast(_SelectionControl, {
  h: h,
  a: a,
  useState: useState,
  ViewControl: ViewControl
});
SelectionControl["displayName"] = "SelectionControl";
var RadioButton = cast(_RadioButton, {
  h: h,
  SelectionControl: SelectionControl
});
RadioButton["displayName"] = "RadioButton";

export { SelectionControl, RadioButton };
