import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

const touch_height = vars.unit_touch_height;
const height = 36;

export default {
  margin_h:               vars.grid_unit,
  border_radius:          vars.unit_item_border_radius,
  font_size:              14,
  font_weight:            500,
  outer_padding_v:        (touch_height - height) / 2,
  padding_h:              2 * vars.grid_unit,
  padding_v:              11,
  min_width:              8 * vars.grid_unit_component,
  text_transform:         "uppercase",
  border_width:           0, // no border in MD, but used to correctly set the height when a theme does set a border
  animation_duration:     vars.animation_duration,
  dropdown_icon_size:     24,

  color_light_background:               "transparent",
  color_light_text:                     rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_wash_background:          rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_background:         rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_active_background:        rgba(vars.color_light_foreground, vars.blend_light_background_active),
  color_light_disabled_background:      "transparent",
  color_light_disabled_text:            rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_icon:                     rgba(vars.color_light_foreground, vars.blend_light_text_secondary),

  color_dark_background:                "transparent",
  color_dark_text:                      rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_wash_background:           rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_focus_background:          rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_active_background:         rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
  color_dark_disabled_background:       "transparent",
  color_dark_disabled_text:             rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_icon:                      rgba(vars.color_light_foreground, vars.blend_light_text_secondary),

  // border colors may be set in theme; disabled by default

  // color_light_border:                   "transparent", // only specify this variable to get all 4 states
  // color_light_hover_border:             "transparent",
  // color_light_active_border:            "transparent",
  // color_light_disabled_border:          "transparent",
  //
  // color_dark_border:                    "transparent", // only specify this variable to get all 4 states
  // color_dark_hover_border:              "transparent",
  // color_dark_active_border:             "transparent",
  // color_dark_disabled_border:           "transparent"

  // hover colors may be set in theme; disabled by default

  // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  // color_light_hover_background:         "transparent",
  // color_light_hover_icon:               "inherit",
  //
  // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  // color_dark_hover_background:          "transparent",
  // color_dark_hover_icon:                "inherit",

};