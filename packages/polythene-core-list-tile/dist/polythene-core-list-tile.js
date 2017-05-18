!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,l,i){"use strict";function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var r={component:"pe-list-tile",content:"pe-list-tile__content",highSubtitle:"pe-list-tile__high-subtitle",primary:"pe-list-tile__primary",secondary:"pe-list-tile__secondary",subtitle:"pe-list-tile__subtitle",title:"pe-list-tile__title",compact:"pe-list-tile--compact",contentFront:"pe-list-tile__content--front",disabled:"pe-list-tile--disabled",hasFront:"pe-list-tile--front",hasHighSubtitle:"pe-list-tile--high-subtitle",hasSubtitle:"pe-list-tile--subtitle",hoverable:"pe-list-tile--hoverable",selectable:"pe-list-tile--selectable",selected:"pe-list-tile--selected",sticky:"pe-list-tile--sticky"},s=i.vars.rgba,_={single_height:48,single_line_height:21,single_with_icon_height:56,single_with_icon_line_height:29,padding:13,compact_padding:9,subtitle_line_count:1,has_subtitle_padding:15,high_subtitle_line_count:2,has_high_subtitle_padding:13,front_item_width:72,side_padding:2*i.vars.grid_unit_component,font_size_title:16,font_size_subtitle:14,line_height_subtitle:20,font_size_list_header:14,font_size_small:12,color_light_title:s(i.vars.color_light_foreground,i.vars.blend_light_text_primary),color_light_subtitle:s(i.vars.color_light_foreground,i.vars.blend_light_text_secondary),color_light_info:s(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_text_disabled:s(i.vars.color_light_foreground,i.vars.blend_light_text_disabled),color_light_list_header:s(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_secondary:s(i.vars.color_light_foreground,i.vars.blend_light_text_secondary),color_light_background_hover:s(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_light_background_selected:s(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_dark_title:s(i.vars.color_dark_foreground,i.vars.blend_dark_text_primary),color_dark_subtitle:s(i.vars.color_dark_foreground,i.vars.blend_dark_text_secondary),color_dark_info:s(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_text_disabled:s(i.vars.color_dark_foreground,i.vars.blend_dark_text_disabled),color_dark_list_header:s(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_secondary:s(i.vars.color_dark_foreground,i.vars.blend_dark_text_secondary),color_dark_background_hover:s(i.vars.color_dark_foreground,i.vars.blend_dark_background_hover),color_dark_background_selected:s(i.vars.color_dark_foreground,i.vars.blend_dark_background_hover)},a=function(e){return{"padding-left":e+"px","padding-right":e+"px"}},d=function(e,t){return{"padding-top":e+"px","padding-bottom":(t||e)+"px"}},c=function(e,t){return[o({},e,[l.flex.layout,{position:"relative",overflow:"hidden",".pe-list-tile--sticky":[l.mixin.sticky(2)]," .pe-list-tile__primary, .pe-list-tile__secondary":[l.flex.layoutHorizontal,{textDecoration:"none",color:"inherit",border:"none"}]," .pe-list-tile__primary":[l.flex.flex(),{position:"relative"," .pe-list-tile__content:not(.pe-list-tile__content--front)":[l.flex.flex(),d(t.padding,t.padding+1)]}]," .pe-list-tile__secondary":{textAlign:"right",fontSize:t.font_size_title+"px",position:"relative"}," .pe-list-tile__content":[l.flex.layoutVertical,l.flex.selfCenter,a(t.side_padding),{".pe-list-tile__content--front":[d(t.padding-5),{width:t.front_item_width+"px"}]," small":{fontSize:t.font_size_small+"px"}}]," .pe-list-tile__content--front + .pe-list-tile__content":{paddingLeft:0}," .pe-list-tile__title":[l.mixin.ellipsis(1,t.single_line_height,"px"),{fontSize:t.font_size_title+"px",fontWeight:i.vars.font_weight_normal,lineHeight:t.single_line_height+"px"}]," .pe-list-tile__subtitle":[l.mixin.ellipsis(t.subtitle_line_count,t.line_height_subtitle,"px"),{fontSize:t.font_size_subtitle+"px",lineHeight:t.line_height_subtitle+"px",".pe-list-tile__high-subtitle":[l.mixin.ellipsis(t.high_subtitle_line_count,t.line_height_subtitle,"px"),{whiteSpace:"normal"}]}],".pe-list-tile--selected, &.pe-list-tile--disabled":{" a":{pointerEvents:"none"}},".pe-list-tile--subtitle":{" .pe-list-tile__content":[d(t.has_subtitle_padding,t.has_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list-tile--high-subtitle":{" .pe-list-tile--high-subtitle .pe-list-tile__secondary":[l.flex.layoutHorizontal,l.flex.layoutStart]," .pe-list-tile__content":[l.flex.selfStart,d(t.has_high_subtitle_padding,t.has_high_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list__header":{height:t.single_height+"px"," .pe-list-tile__content":{paddingTop:0,paddingBottom:0}," .pe-list-tile__title":[l.mixin.ellipsis(1,t.single_height,"px"),{fontSize:t.font_size_list_header+"px",fontWeight:i.vars.font_weight_medium,lineHeight:t.single_height+"px",padding:0}]}," .pe-list--compact &, &.pe-list-tile--compact":{":not(.pe-list__header)":{" .pe-list-tile__content":d(t.compact_padding,t.compact_padding+1)}},"@supports (-moz-appearance:none) and (display:contents)":{" .pe-list-tile__primary, .pe-list-tile__content":{overflow:"hidden"}},".pe-dialog .pe-menu__content &":{" .pe-list-tile__title":l.mixin.ellipsis("none")},".pe-menu__content &":{":not(.pe-list-tile--disabled)":{cursor:"default","&, .pe-list-tile__primary, .pe-list-tile__secondary":{" .pe-list-tile__title, .pe-list-tile__subtitle":{userSelect:"none"}}}},"html.pe-no-touch &.pe-list-tile--hoverable,       html.pe-no-touch &.pe-list-tile--selectable":{":not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover":{cursor:"pointer"}}}])]},p=function(e,t,l,i){return[n({},e.map(function(e){return e+t}).join(","),{color:l["color_"+i+"_title"],backgroundColor:l["color_"+i+"_background"]||"initial",".pe-list__header":{color:l["color_"+i+"_list_header"]," .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:"inherit"}}," .pe-list-tile__subtitle":{color:l["color_"+i+"_subtitle"]}," .pe-list-tile__secondary":{color:l["color_"+i+"_secondary"]},".pe-list-tile--disabled":{"&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle":{color:l["color_"+i+"_text_disabled"]}},".pe-list-tile--selected":{" .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_background_selected"]}},"&.pe-list-tile--sticky":{backgroundColor:l["color_"+i+"_background"]||"inherit"}})]},h=function(e,t,l,i){return[n({},e.map(function(e){return e+t+":hover"}).join(","),{":not(.pe-list__header):not(.pe-list-tile--disabled)":{" .pe-list-tile__primary, .pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_background_hover"]}}})]},u=function(e,t){return[p([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,t,"light"),h(["html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable "],e,t,"dark"),h(["html.pe-no-touch .pe-list-tile--hoverable","html.pe-no-touch .pe-list-tile--hoverable ","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable "],e,t,"light")]},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},b=[c,u],f="."+r.component,v=function(e,t){return l.styler.generateStyles([e,f],g({},_,t),b)};l.styler.generateStyles([f],_,b);var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},y=v,k=function(e,l){var i=l.keys,o=e.attrs,n=o.subtitle?r.hasSubtitle:o.highSubtitle?r.hasHighSubtitle:o.front||o.indent?r.hasFront:null;return m({},t.filterSupportedAttributes(o),{className:[r.component,o.selected?r.selected:null,o.disabled?r.disabled:null,o.sticky?r.sticky:null,o.compact?r.compact:null,o.hoverable?r.hoverable:null,o.selectable?r.selectable:null,"dark"===o.tone?"pe-dark-tone":null,"light"===o.tone?"pe-light-tone":null,n,o.className||o[i.class]].join(" ")})},x=function(e,l,i){var o=l.element?l.element:l.url?"a":"div",n=r.content+" "+r.contentFront,s=l.front?e("div",{className:n},l.front):l.indent?e("div",{className:n}):null;return e(o,m({},t.filterSupportedAttributes(l),l.url,l.events,{className:r.primary,style:null}),[s,e("div",{className:r.content,style:l.style},[l.content?l.content:i,l.title&&!l.content?e("div",{className:r.title},l.title):null,l.subtitle?e("div",{className:r.subtitle},l.subtitle):null,l.highSubtitle?e("div",{className:r.subtitle+" "+r.highSubtitle},l.highSubtitle):null])])},S=function(e,l){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e(i.element?i.element:i.url?"a":"div",m({},t.filterSupportedAttributes(i),i.url,{className:r.secondary}),e("div",{className:r.content},[i.icon?e(l,i.icon):null,i.content?i.content:null]))},z=function(e,t){var l=t.renderer,i=t.keys,o=t.Ripple,n=t.Icon,r=e.attrs,s=m({},r);return delete s.id,delete s[i.class],[r.ink&&!r.disabled?l(o,r.ripple):null,x(l,s,r.children||e.children),r.secondary?S(l,n,r.secondary):null]},w={createProps:k,createContent:z,theme:y,element:"div",classes:r,vars:_};e.CoreListTile=w,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-list-tile.js.map
