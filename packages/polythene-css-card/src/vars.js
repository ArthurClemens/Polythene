// @ts-check

/**
 * @typedef {import("../index").CardVars} CardVars
 */

import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

const padding_v = 24;
const padding_actions_v = 8;
const actions_button_margin_v = 2;

/**
 * @type {CardVars} cardVars
 */
const cardVars = {
  general_styles:                      true,

  actions_button_margin_h:             vars.grid_unit,
  actions_button_margin_v,
  actions_padding_h:                   8,
  actions_padding_v:                   0,
  actions_vertical_padding_v:          padding_actions_v - actions_button_margin_v,
  border_radius:                       vars.unit_block_border_radius,
  icon_element_width:                  72 - 4,
  image_size_large:                    3 * 80,
  image_size_medium:                   2 * 80,
  image_size_regular:                  1.4 * 80,
  image_size_small:                    1 * 80,
  offset_small_padding_v:              padding_v - 16,
  one_line_height_with_icon:           72,
  one_line_padding_v:                  8,
  padding_h:                           16,
  subtitle_line_height_padding_bottom: 7,
  text_line_height_padding_bottom:     7,
  text_line_height_padding_top:        6,
  text_padding_bottom:                 24,
  text_padding_h:                      16,
  text_padding_v:                      16,
  tight_text_padding_bottom:           16,
  tight_title_padding_bottom:          16,
  title_padding_h:                     16,
  title_padding_v:                     24,

  color_light_main_background:         rgba(vars.color_light_background),
  color_light_title_text:              rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_subtitle_text:           rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_text:                    rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_light_actions_border:          rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_overlay_background:      rgba(vars.color_light_background, vars.blend_light_overlay_background),
     
  color_dark_main_background:          rgba(vars.color_dark_background),
  color_dark_title_text:               rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_subtitle_text:            rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_text:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
  color_dark_actions_border:           rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_overlay_background:       rgba(vars.color_dark_background, vars.blend_dark_overlay_background)
};

export default cardVars;
