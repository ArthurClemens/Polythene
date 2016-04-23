"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _config=require("polythene/config/config"),_config2=_interopRequireDefault(_config),_mixin=require("polythene/common/mixin"),_mixin2=_interopRequireDefault(_mixin),_flex=require("polythene/layout/theme/flex"),_flex2=_interopRequireDefault(_flex),createStyles=function(config){var padding=config.padding,lineHeightTitle=24;return[{".pe-dialog":[_flex2["default"].layoutCenterCenter,_mixin2["default"].vendorize({"transition-timing-function":"ease-out"},_config2["default"].prefixes_transition),_mixin2["default"].vendorize({"transition-property":"opacity"},_config2["default"].prefixes_transition),{position:"fixed",top:0,left:0,right:0,bottom:0,"z-index":_config2["default"].z_dialog,height:"100%",padding:padding+"px 40px",opacity:0,"&.pe-dialog--visible":{opacity:1},"&.pe-dialog--fullscreen":{padding:0," .pe-dialog__content":{"border-radius":0,"max-width":"none",height:"100%",width:"100%"," .pe-dialog__header, .pe-dialog__footer":{display:"none"}," .pe-dialog__body":{padding:0,height:"100%","max-height":"calc(100%)",border:"none"}}}," .pe-dialog__header, pe-dialog__body, pe-dialog__header":{"z-index":1}," .pe-dialog__content":[_flex2["default"].layoutVertical,{position:"relative","max-height":"100%","min-width":"280px","max-width":7*_config2["default"].grid_unit_menu+"px","border-radius":config.border_radius+"px"," > .pe-shadow":{"z-index":-1},"&.pe-menu__content":{" .pe-dialog__body":{padding:0,border:"none"}}}]," .pe-dialog__title":{"font-size":_config2["default"].font_size_title+"px","line-height":lineHeightTitle+"px","font-weight":_config2["default"].font_weight_medium,"& + div":{"margin-top":"16px"}}," .pe-dialog__header":{padding:[padding-4,padding,config.header_bottom-4,padding].map(function(v){return v+"px"}).join(" "),"min-height":config.header_height+"px"," .pe-dialog__title":[_mixin2["default"].ellipsis(1),{width:"100%"}]}," .pe-dialog__body":[_flex2["default"].selfStretch,_mixin2["default"].hairline("border-top"),{"border-top-style":"solid"},_mixin2["default"].hairline("border-top"),{"border-bottom-style":"solid"},{padding:[padding,padding,padding-5,padding].map(function(v){return v+"px"}).join(" "),"overflow-y":"auto","-webkit-overflow-scrolling":"touch","border-width":"1px","border-style":"solid none","border-color":"transparent","max-height":"calc(100vh - "+2*padding+"px - "+(config.header_height+config.footer_height)+"px)"}]," .pe-dialog__header + .pe-dialog__body":{"padding-top":0}," .pe-dialog__footer":{padding:"2px 8px","min-height":config.footer_height+"px","font-size":0,"&.pe-dialog__footer--high":{"padding-bottom":"8px"}}," .pe-dialog__actions":[_flex2["default"].layoutHorizontal,_flex2["default"].layoutEndJustified,_flex2["default"].layoutWrap,{margin:"0 -4px"," .pe-button":{height:"36px","margin-top":"6px","margin-bottom":"6px",padding:0}}]}]," body.pe-dialog--open":{overflow:"hidden",left:0,"-webkit-overflow-scrolling":"touch",position:"fixed",top:0,width:"100%"}}]};exports["default"]=function(config){return _mixin2["default"].createStyles(config,createStyles)},module.exports=exports["default"];
//# sourceMappingURL=layout.js.map