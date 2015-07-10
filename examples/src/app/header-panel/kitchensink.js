"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneHeaderPanelHeaderPanel=require("polythene/header-panel/header-panel");var _polytheneHeaderPanelHeaderPanel2=_interopRequireDefault(_polytheneHeaderPanelHeaderPanel);var _polytheneIconButtonIconButton=require("polythene/icon-button/icon-button");var _polytheneIconButtonIconButton2=_interopRequireDefault(_polytheneIconButtonIconButton);require("./kitchensink.css!");var repeatText=function repeatText(text,count){var out="";while(count>0){out+=text;count--}return out};var template=['<div class="demo-content">',repeatText("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",16),"</div>"].join("");var btn=function btn(group,name){return _mithril2["default"].component(_polytheneIconButtonIconButton2["default"],{icon:{svg:{group:group,name:name}}})};var toolbarRow=function toolbarRow(title){return[btn("navigation","menu","#"),(0,_mithril2["default"])("span.flex",title),btn("navigation","refresh")]};function _ref(panel1){return(0,_mithril2["default"])(".container",[_mithril2["default"].component(_polytheneHeaderPanelHeaderPanel2["default"],panel1)])}var panelBlock={view:function view(ctrl,args){return(0,_mithril2["default"])(".p-block",[(0,_mithril2["default"])(".p-block-header",args.title),(0,_mithril2["default"])(".horizontal.layout.wrap",{"class":"panel-row"},[args.content.map(_ref)])])}};var content=(0,_mithril2["default"])(".demo-content",[_mithril2["default"].component(panelBlock,{title:"Scroll modes",content:[{fixed:true,header:{content:"Standard"},content:_mithril2["default"].trust(template)},{mode:"seamed",fixed:true,header:{content:"Seamed"},content:_mithril2["default"].trust(template)},{mode:"waterfall",fixed:true,header:{content:"Waterfall"},content:_mithril2["default"].trust(template)},{mode:"waterfall-tall",fixed:true,header:{content:"Waterfall tall"},content:_mithril2["default"].trust(template)},{mode:"waterfall-tall",tallClass:"medium-tall",fixed:true,header:{content:"Waterfall medium-tall"},content:_mithril2["default"].trust(template)},{mode:"scroll",header:{content:"Scroll"},content:_mithril2["default"].trust(template)},{mode:"waterfall-tall",fixed:true,animated:true,header:{content:"Waterfall tall animated"},content:_mithril2["default"].trust(template)}]}),_mithril2["default"].component(panelBlock,{title:"Toolbar as header",content:[{fixed:true,header:{toolbar:{content:toolbarRow("Toolbar component")}},content:_mithril2["default"].trust(template)},{mode:"waterfall",fixed:true,header:{toolbar:{content:toolbarRow("Toolbar waterfall")}},content:_mithril2["default"].trust(template)},{mode:"tall",fixed:true,animated:true,header:{toolbar:{mode:"tall",content:toolbarRow("Tall animated")}},content:_mithril2["default"].trust(template)},{mode:"waterfall-tall",fixed:true,shadow:false,animated:true,header:{toolbar:{mode:"tall",content:toolbarRow("Animated no shadow")}},content:_mithril2["default"].trust(template)}]}),_mithril2["default"].component(panelBlock,{title:"Condensing",content:[{mode:"waterfall-tall",condenses:true,header:{toolbar:{mode:"tall",topBar:toolbarRow(),bottomBar:_mithril2["default"].trust('<div flex class="bottom indent">Not fixed condenses</div>')}},content:_mithril2["default"].trust(template)},{mode:"waterfall-tall",condenses:true,tallClass:"medium-tall",header:{toolbar:{mode:"tall",topBar:toolbarRow(),bottomBar:_mithril2["default"].trust('<div flex class="bottom indent">tallClass "medium-tall"</div>')}},content:_mithril2["default"].trust(template)},{mode:"waterfall-tall",condenses:true,keepCondensedHeader:true,header:{toolbar:{mode:"tall",topBar:toolbarRow(),bottomBar:_mithril2["default"].trust('<div flex class="bottom indent">Keep condensed header</div>')}},content:_mithril2["default"].trust(template)}]}),_mithril2["default"].component(panelBlock,{title:"Custom style",content:[{fixed:true,header:(0,_mithril2["default"])(".header.demo-header","Custom styled header"),content:_mithril2["default"].trust(template)}]})]);exports["default"]=content;module.exports=exports["default"];