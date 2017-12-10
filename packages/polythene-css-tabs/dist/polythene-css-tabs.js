!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core-css"),require("polythene-core-tabs"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-tabs","polythene-theme"],e):e(t.polythene={},t["polythene-core-css"],t["polythene-core-tabs"],t["polythene-theme"])}(this,function(t,e,n,o){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r={component:"pe-tabs",indicator:"pe-tabs__indicator",scrollButton:"pe-tabs__scroll-button",scrollButtonAtEnd:"pe-tabs__scroll-button-end",scrollButtonAtStart:"pe-tabs__scroll-button-start",scrollButtonOffset:"pe-tabs__scroll-button-offset",tab:"pe-tabs__tab",tabContent:"pe-tabs__tab-content",tabRow:"pe-tabs__row",activeSelectable:"pe-tabs__active--selectable",isAtEnd:"pe-tabs--end",isAtStart:"pe-tabs--start",isAutofit:"pe-tabs--autofit",isMenu:"pe-tabs--menu",scrollable:"pe-tabs--scrollable",compactTabs:"pe-tabs--compact",tabHasIcon:"pe-tabs__tab---icon",tabRowCentered:"pe-tabs__row--centered",tabRowIndent:"pe-tabs__row--indent",label:{base:"pe-button",component:"pe-button pe-text-button",content:"pe-button__content",focus:"pe-button__focus",label:"pe-button__label",wash:"pe-button__wash",borders:"pe-button--borders",disabled:"pe-button--disabled",focused:"pe-button--focus",inactive:"pe-button--inactive",selected:"pe-button--selected"}.label},l=function(t,n){return[a({},t,{userSelect:"none",transform:"translate3d(0,0,0)","-webkit-overflow-scrolling":"touch","& ::-webkit-scrollbar":{display:"none"},".pe-tabs--menu":{" .pe-tabs__tab":{height:n.menu_tab_height+"px"}," .pe-tabs__tab---icon":{height:n.menu_tab_icon_label_height+"px"}," .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon, .pe-tabs__tab.pe-text-button":{minWidth:0,height:n.menu_tab_icon_label_height+"px"," .pe-button__content":{padding:"0 "+n.tab_menu_content_padding_v+"px",height:n.menu_tab_height+"px"," .pe-icon":{marginBottom:0}," .pe-button__content":{fontSize:"10px",lineHeight:"12px",textTransform:"none"}}}},".pe-tabs--scrollable":{"max-height":n.tab_height+"px","-ms-overflow-style":"none"," .pe-tabs__scroll-button":{display:"none"}," .pe-tabs__row":{marginBottom:-n.scrollbar_offset+"px"}}," .pe-no-touch &":{".pe-tabs--scrollable":{backgroundColor:"inherit"}," .pe-tabs__scroll-button":{position:"absolute",display:"block",top:0,backgroundColor:"inherit",zIndex:1,borderRadius:0," .pe-button__content":{borderRadius:0,backgroundColor:"inherit",transitionProperty:n.tab_label_transition_property,transitionDuration:n.scroll_button_fade_duration+"s",transitionTimingFunction:"ease-out",transitionDelay:n.scroll_button_fade_delay+"s",opacity:n.scroll_button_opacity}},".pe-tabs--start .pe-tabs__scroll-button-start":{pointerEvents:"none",cursor:"default"," .pe-button__content":{opacity:0}},".pe-tabs--end .pe-tabs__scroll-button-end":{pointerEvents:"none",cursor:"default"," .pe-button__content":{opacity:0}}," .pe-tabs__scroll-button-start":{left:0}," .pe-tabs__scroll-button-end":{right:0}}," .pe-tabs__row":[e.flex.layoutHorizontal,{userSelect:"none",position:"relative",whiteSpace:"nowrap",".pe-tabs__row--indent":{margin:0,paddingLeft:n.tabs_indent+"px",overflow:"auto"},".pe-tabs__row--centered":e.flex.layoutCenterJustified}]," .pe-tabs__scroll-button-offset":[e.flex.flex(),e.flex.flexIndex("none")]," .pe-tabs__tab":[e.flex.flex(),e.flex.flexIndex("none"),e.mixin.defaultTransition("color"),{userSelect:"none",margin:0,borderRadius:0,height:n.tab_height+"px",padding:0,color:"inherit",minWidth:isNaN(n.tab_min_width)?n.tab_min_width:n.tab_min_width+"px",maxWidth:isNaN(n.tab_max_width)?n.tab_max_width:n.tab_max_width+"px",".pe-text-button .pe-button__content":{padding:"0 "+n.tab_content_padding_v+"px",height:n.tab_height+"px",lineHeight:o.vars.line_height+"em",borderRadius:0," .pe-button__label, .pe-icon":{maxWidth:n.label_max_width+"px",lineHeight:n.tab_label_line_height+"px",maxHeight:2*n.tab_label_line_height+"px",overflow:"hidden",whiteSpace:"normal"}," .pe-button__label":[e.mixin.defaultTransition("opacity",n.animation_duration),{margin:n.tab_label_vertical_offset+"px 0 0 0",padding:0,opacity:n.label_opacity,width:"100%"}]," .pe-icon":{marginLeft:"auto",marginRight:"auto"}," .pe-button__focus":{display:"none"}},".pe-button--selected .pe-button__content":{" .pe-button__label":{opacity:1}},".pe-tabs__tab---icon":{"&, .pe-button__content":[{height:n.tab_icon_label_height+"px"},{" .pe-button__content, .pe-icon":{margin:"0 auto"}},{" .pe-icon":{marginBottom:n.tab_icon_label_icon_spacing+"px"}}]}}],".pe-tabs--compact":{" .pe-tabs__tab":{minWidth:"initial"}}," .pe-tabs__tab-content":[e.flex.layoutCenterCenter,e.flex.layoutVertical,{height:"inherit"}],".pe-tabs--autofit .pe-tabs__tab":[e.flex.flex(),{minWidth:"initial",maxWidth:"none"}],".pe-tabs__active--selectable":{" .pe-tabs__tab.pe-button--selected":{cursor:"pointer",pointerEvents:"initial"}}," .pe-tabs__indicator":{transform:"translate3d(0,0,0)",transformOrigin:"left 50%",transitionProperty:"all",transitionTimingFunction:"ease-out",position:"absolute",height:n.tab_indicator_height+"px",bottom:0,left:0,width:"100%"}," .pe-toolbar--tabs .pe-toolbar__bar &":[e.mixin.fit(),{width:"auto",margin:0,top:"auto"}]})]},b=function(t,e,n,o){return[i({},t.map(function(t){return t+e}).join(","),{color:n["color_"+o]," .pe-tabs__tab.pe-button--selected":{color:n["color_"+o+"_selected"]," .pe-button__content":{background:n["color_"+o+"_selected_background"]}}," .pe-tabs__tab:not(.pe-button--selected) .pe-icon":{color:n["color_"+o+"_icon"]}," .pe-tabs__indicator":{backgroundColor:n["color_"+o+"_tab_indicator"]}," .pe-tabs__scroll-button":{color:"inherit"}})]},_=function(t,e){return[b([".pe-dark-tone",".pe-dark-tone "],t,e,"dark"),b(["",".pe-light-tone",".pe-light-tone "],t,e,"light")]},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},p=[l,_],c="."+r.component,u=function(t,o){return e.styler.generateStyles([t,c],s({},n.vars,o),p)},d=function(t,o){return t?e.styler.createStyleSheets([t,c],s({},n.vars,o),p):e.styler.createStyleSheets([c],n.vars,p)};e.styler.generateStyles([c],n.vars,p),t.addStyle=u,t.getStyle=d,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-tabs.js.map
