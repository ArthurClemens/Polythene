!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-core-card"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-core-card","polythene-theme"],t):t(e.polythene={},e["polythene-core-css"],e["polythene-core-card"],e["polythene-theme"])}(this,function(e,t,i,a){"use strict";function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var _={component:"pe-card",actions:"pe-card__actions",content:"pe-card__content",header:"pe-card__header",headerTitle:"pe-card__header-title",media:"pe-card__media",mediaDimmer:"pe-card__media__dimmer",overlay:"pe-card__overlay",overlayContent:"pe-card__overlay__content",primary:"pe-card__primary",primaryMedia:"pe-card__primary-media",subtitle:"pe-card__subtitle",text:"pe-card__text",title:"pe-card__title",actionsBordered:"pe-card__actions--borders",actionsHorizontal:"pe-card__actions--horizontal",actionsJustified:"pe-card__actions--justified",actionsTight:"pe-card__actions--tight",actionsVertical:"pe-card__actions--vertical",mediaCropX:"pe-card__media--crop-x",mediaCropY:"pe-card__media--crop-y",mediaLarge:"pe-card__media--large",mediaMedium:"pe-card__media--medium",mediaRatioLandscape:"pe-card__media--landscape",mediaRatioSquare:"pe-card__media--square",mediaRegular:"pe-card__media--regular",mediaSmall:"pe-card__media--small",overlaySheet:"pe-card__overlay--sheet",primaryHasMedia:"pe-card__primary--media",primaryTight:"pe-card__primary--tight",textTight:"pe-card__text--tight"},p=function(e,i){return[r({},e,{display:"block",position:"relative",borderRadius:i.border_radius+"px","&, a:link, a:visited":{textDecoration:"none"}," .pe-card__content":{position:"relative",borderRadius:"inherit",overflow:"hidden",width:"inherit",height:"inherit"}," .pe-card__media":{position:"relative",overflow:"hidden",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit",zIndex:1,"&.pe-card__media--landscape":{paddingBottom:"56.25%"},"&.pe-card__media--square":{paddingBottom:"100%"},"&:last-child":{"&, img":{borderBottomLeftRadius:i.border_radius+"px",borderBottomRightRadius:i.border_radius+"px"}}," img":[t.mixin.fit(),{display:"none",width:"100%",maxWidth:"none","&.pe-card__media--crop-x":{width:"100%",height:"auto",display:"block"},"&.pe-card__media--crop-y":{height:"100%",width:"auto",display:"block"}}]}," .pe-card__header + .pe-card__media":{borderTopLeftRadius:0,borderTopRightRadius:0}," .pe-card__primary-media":{margin:"16px 16px 0 16px"," .pe-card__media--small":{width:i.image_size_small+"px"}," .pe-card__media--regular":{width:i.image_size_regular+"px"}," .pe-card__media--medium":{width:i.image_size_medium+"px"}," .pe-card__media--large":{width:i.image_size_large+"px",marginBottom:"16px"}," .pe-card__media":{"&, img":{borderRadius:0}}," .pe-shadow + &":{"&, img":{borderTopLeftRadius:i.border_radius+"px",borderTopRightRadius:i.border_radius+"px"}}}," .pe-card__overlay":t.mixin.fit()," .pe-card__media__dimmer":[t.mixin.fit(),{zIndex:1}]," .pe-card__overlay__content":{position:"absolute",bottom:0,top:"auto",right:0,left:0,zIndex:2}," .pe-card__header":{height:i.one_line_height_with_icon+"px"," .pe-list-tile__title":{fontSize:"14px",fontWeight:a.vars.font_weight_normal,lineHeight:"20px",marginTop:"2px"}," .pe-list-tile__subtitle":{marginTop:"-1px"}}," .pe-card__primary":[t.flex.layoutHorizontal,{position:"relative","&.pe-card__primary--media:not(:last-child)":{paddingBottom:"16px"},"&.pe-card__primary--media + .pe-card__actions":{marginTop:"-16px"},"& + .pe-card__text":{marginTop:"-16px"},"&.pe-card__primary--tight":{" .pe-card__title":{paddingBottom:i.tight_title_padding_bottom-i.subtitle_line_height_padding_bottom+"px"}}}]," .pe-card__title":[t.flex.flex(),{padding:[i.title_padding_v,i.title_padding_h,i.title_padding_v-i.subtitle_line_height_padding_bottom,i.title_padding_h].map(function(e){return e+"px"}).join(" "),fontSize:"24px",lineHeight:"29px"}]," .pe-card__subtitle":{fontSize:"14px",lineHeight:"24px"}," .pe-card__actions":[{minHeight:"52px",padding:i.actions_padding_v+"px "+i.padding_actions_h+"px","&.pe-card__actions--tight":{minHeight:0,padding:0},"&.pe-card__actions--horizontal:not(.pe-card__actions--justified)":[t.flex.layoutHorizontal,t.flex.layoutCenter,{" :first-child":{marginLeft:0}," .pe-button":{minWidth:0}," .pe-button--icon":{marginRight:"8px"}}],"&.pe-card__actions--justified":[t.flex.layoutJustified],"&.pe-card__actions--vertical":[t.flex.layoutVertical,{":not(.pe-card__actions--tight)":{paddingTop:i.actions_vertical_padding_v+"px",paddingBottom:i.actions_vertical_padding_v+"px"}," .pe-card__actions":[{marginLeft:-i.padding_actions_h+"px",marginRight:-i.padding_actions_h+"px",minHeight:0,"&:first-child":{marginTop:-i.actions_vertical_padding_v+"px"},"&:last-child":{marginBottom:-i.actions_vertical_padding_v+"px"}}]," .pe-button":{height:"36px",padding:0,marginTop:i.actions_button_margin_v+"px",marginBottom:i.actions_button_margin_v+"px"}," .pe-list":{padding:0}}]}]," .pe-card__text":{paddingTop:i.text_padding_v-i.text_line_height_padding_top+"px",paddingRight:i.text_padding_h+"px",paddingLeft:i.text_padding_h+"px",paddingBottom:i.tight_text_padding_bottom-i.text_line_height_padding_bottom+"px",fontSize:"14px",lineHeight:"24px","&:last-child":{paddingBottom:i.text_padding_bottom-i.text_line_height_padding_bottom+"px"},"&.pe-card__text--tight, &.pe-card__text--tight:last-child":{paddingBottom:i.tight_text_padding_bottom-i.text_line_height_padding_bottom+"px"}," .pe-card__actions + &":{marginTop:"8px"}}," .pe-card__text, .pe-card__primary":{"& + .pe-card__actions:not(:last-child)":{marginTop:-(i.offset_small_padding_v+1)+"px",marginBottom:-(i.offset_small_padding_v-1)+"px"}}})]},c=function(e,t,i,a){return[o({},e.map(function(e){return e+t}).join(","),{backgroundColor:i["color_"+a+"_main_background"]})]},l=function(e,t){return[c([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),c(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},s=function(e,t,i,a){return[d({},e.map(function(e){return e+t}).join(","),{" .pe-card__title":{color:i["color_"+a+"_title_text"]}," .pe-card__subtitle":{color:i["color_"+a+"_subtitle_text"]}," .pe-card__text":{color:i["color_"+a+"_text"]}," .pe-card__actions--borders":{borderTop:"1px solid "+i["color_"+a+"_actions_border"]}})]},g=function(e,t){return[s([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),s(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},m=function(e,t,i,a){return[n({},e.map(function(e){return e+t}).join(","),{" .pe-card__overlay__content":{backgroundColor:i["color_"+a+"_overlay_background"]}})]},h=function(e,t){return[m([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),m(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},x="."+_.component,y="."+_.content,f="."+_.overlaySheet,b="."+_.overlayContent,v=function(e,a){t.styler.generateStyles([e,x],u({},i.vars,a),[p,l]),t.styler.generateStyles([e," "+f],u({},i.vars,a),[h]),t.styler.generateStyles([e," "+y],u({},i.vars,a),[g]),t.styler.generateStyles([e," "+b],u({},i.vars,a),[g])},S=function(e,a){return e?t.styler.createStyleSheets([e,x],u({},i.vars,a),[p,l]).concat(t.styler.createStyleSheets([e," "+f],u({},i.vars,a),[h])).concat(t.styler.createStyleSheets([e," "+y],u({},i.vars,a),[g])).concat(t.styler.createStyleSheets([e," "+b],u({},i.vars,a),[g])):t.styler.createStyleSheets([x],i.vars,[p,l]).concat(t.styler.createStyleSheets([f],i.vars,[h])).concat(t.styler.createStyleSheets([y],i.vars,[g])).concat(t.styler.createStyleSheets([b],i.vars,[g]))};t.styler.generateStyles([x],i.vars,[p,l]),t.styler.generateStyles([f],i.vars,[h]),t.styler.generateStyles([y],i.vars,[g]),t.styler.generateStyles([b],i.vars,[g]),e.addStyle=v,e.getStyle=S,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-card.js.map
