!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);var o={name:null,iconClass:null,uniqueClassName:null,canBeSavedToLibrary:!1,settingsCssPath:null,previewCssPath:null,i18n:{},blockName:null,emptyContainerIcon:!1,blockType:null,blockConfigAttributeNames:[],controlsToCreate:[],blockControls:[],isEnabled:function(){return!0},emailInitialized:function(t){},onSelectBlock:function(t){},getBlockLayoutToDrop:function(){return"<td>Default block</td>"},blockDropped:function(t){},getBlockLabel:function(t){return"Default block"},getDefaultSettingsPanelState:function(t){return{}},onCleanLayout:function(t,e){},onBlockCopy:function(t,e){}},r="".concat("customBlock","_blockGroups_control"),i="".concat("customBlock","_blockText_control"),l={en:{"block.name":"Custom-Block","preview.label":"Custom-Block","preview.empty.description":"CUSTOM BLOCK","settings.controls.blockBorder.label":"Block border","settings.controls.blockPadding.label":"Row padding","settings.controls.blockPadding.mobile.label":"Row mobile padding","settings.controls.blockMargin.label":"Block margin","settings.controls.bgColor.label":"Card background color","settings.controls.cardBorder.label":"Card border","settings.controls.cardButtonExternalPadding.label":"External padding","settings.controls.cardButtonExternalPadding.mobile.label":"External mobile padding","settings.controls.groups.empty":"Select the Block Type","settings.controls.text-title.empty":"Enter the title","settings.controls.orientation.label":"Orientation","settings.controls.orientation.horizontal":"Horizontal","settings.controls.orientation.vertical":"Vertical"}},s={onActivated:function(){this.registerSettingsEventListener("layoutChanged",this.layoutChanged.bind(this))},layoutChanged:function(){this.applyThemeFromConfig(),this.updateControlVisibility()},applyThemeFromConfig:function(){this.themeKey&&this.isControlVisible()&&this.panelState.blockConfig.theme[this.themeKey]&&this.updateControlValue(this.panelState.blockConfig.theme[this.themeKey])},controlValueUpdated:function(t){this.themeKey&&(this.panelState.blockConfig.theme[this.themeKey]=t,this.updateBlockConfiguration())},updateLayout:function(){this.extension.updateLayout(this.jElement,this.panelState.blockConfig)},updateBlockText:function(t,e){this.extension.updateBlockText(t,e)},addBlockCustomAttibutes:function(t,e,n){this.extension.addBlockCustomAttibutes(t,e,n)},updateBlockConfiguration:function(){this.extension.blockConfigurationService.setBlockConfiguration(this.jElement,this.panelState.blockConfig)},translate:function(t,e){return this.extension.stripoApi.translate(t,e)},isValuableBlock:function(){return!!this.panelState.blockConfig.groups.length}};function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=a(a({},s),{},{name:r,render:function(){this.options=this.getOptions(),this.selectedGroups=this.getSelectedGroups(),this.jContainer.html(this.getControlMarkup()),this.dropDown=this.jContainer.find("dropdown-input")[0],this.updateSeparatorVisibility()},getOptions:function(){return this.getGroupsFromStripoConfig()?this.getGroupsFromStripoConfig().map((function(t){return{value:t.id,label:t.name}})):[]},getSelectedGroups:function(){if(null!=this.panelState.blockConfig.groups&&0!=this.panelState.blockConfig.groups.length)return(this.panelState.blockConfig.groups||[]).map((function(t){return t.id}));console.log("Panel state block config group is blank.")},updateSeparatorVisibility:function(){this.setControlsSeparatorVisible(!!this.jElement.attr("data-custom-groups"))},onChange:function(t){var e=this;setTimeout((function(){var n=e.getGroupsFromStripoConfig().find((function(e){return e.id==t}));e.panelState.blockConfig.groups=[],e.panelState.blockConfig.groups.push(n),e.panelState.blockConfig=e.extension.wrapBlockWithTypeIdentifierAttributesAndGetConfig(e.jElement,e.panelState.blockConfig),e.updateBlockText(e.jElement,e.panelState.blockConfig),e.addBlockCustomAttibutes(e.jElement,"selectedBlocktypeuid",n.id),e.addBlockCustomAttibutes(e.jElement,"selectedBlocktypename",n.name.toLowerCase()),e.addBlockCustomAttibutes(e.jElement,"selectedcontenttype",n.contenttype.toLowerCase()),e.addBlockCustomAttibutes(e.jElement,"selectedlocale",n.locale.toLowerCase()),e.applyChanges()}),0)},getGroupsFromStripoConfig:function(){return this.extension.stripoConfig.blockConfiguration.groups},layoutChanged:function(){this.isControlVisible()&&(this.dropDown.props.value=this.getSelectedGroups()),this.updateControlVisibility(),this.updateSeparatorVisibility()},getControlMarkup:function(){return'<div class="form-group">\n            <div class="col-xs-4">\n              Block Type\n            </div>\n            <div class="col-xs-8">\n                <dropdown-input classes="custom-groups-picker"\n                                buttonWrapperClasses="form-control"\n                                optionTextClass="text"\n                                globalScope = "'.concat(this.name,'"\n                                mbBindProp-values="options"\n                                mbBindProp-value="selectedGroups"\n                                mbBindProp-on-selected="onChange"\n                                placeholder="').concat(this.translate("settings.controls.groups.empty"),'">                                       \n                </dropdown-input>\n            </div>\n        </div>')}});function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}f(f({},s),{},{name:i,render:function(){this.jContainer.html(this.getControlMarkup());var t=this.jContainer[0].querySelector("#txtTitle");t.value=this.panelState.blockConfig.propertyText,t.addEventListener("keyup",function(e){this.onTextChange(e,t)}.bind(this))},onTextChange:function(t,e){this.panelState.blockConfig.propertyText=e.value,this.panelState.blockConfig=this.extension.wrapBlockWithTypeIdentifierAttributesAndGetConfig(this.jElement,this.panelState.blockConfig),this.addBlockCustomAttibutes(this.jElement,"BlockTitle",this.panelState.blockConfig.propertyText),this.applyChanges()},layoutChanged:function(){console.log("TextControl-LayoutChanged")},getControlMarkup:function(){return'<div class="form-group">\n            <div class="col-xs-4">\n              Title\n            </div>\n            <div class="col-xs-8">\n                <input classes="form-control" style="width: 98%"\n                                id="txtTitle"\n                                buttonWrapperClasses="form-control"\n                                optionTextClass="text"\n                                globalScope = "'.concat(this.name,'"\n                                type="text"\n                                value="TEst"\n                                placeholder="').concat(this.translate("settings.controls.text-title.empty"),'">                                       \n                </input>\n            </div>\n        </div>')}});function b(t,e,n){var o=function(t){function e(t){var e=t.attr("esd-dev-custom-config");return e?JSON.parse(e.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&#x27;/g,"'").replace(/&quot;/g,'"')):null}return{getBlockConfiguration:e,setBlockConfiguration:function(t,e){t.attr("esd-dev-custom-config",JSON.stringify(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;"))},getOrCreateConfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.groups=e.groups||[],e.properties=e.properties||[],e.rowCount=e.rowCount||t.blockConfiguration.rowCount||3,e.totalCount=e.groups.reduce((function(t,e){return t+e.count}),0),e.propertyText=e.propertyText||"",e},getBlockConfigurationForCopiedBlock:function(t){var n=e(t);return n.recommendationsOrientation="vertical",n.rowCount=3,n.groups=[],n}}}(t);function i(t,n){e.jQuery(this);s(t,n)}function s(t,e){if(void 0===e)throw new Error("Group selected cannot be undefined.");var n=(new DOMParser).parseFromString(e.groups[0].multilinecontent,"text/html");console.log(n),t[0].querySelector(".custom-block-text").innerHTML=e.groups[0].multilinecontent}function c(t,e){e||(e=o.getBlockConfiguration(t)||{});var n=o.getOrCreateConfig(e);return n.groups.length?t.attr("data-custom-groups",n.groups.map((function(t){return t.id})).join(",")).removeClass("custom-block-empty"):t.removeAttr("data-custom-groups").addClass("custom-block-empty"),o.setBlockConfiguration(t,n),n}return{name:"CustomBlocks",iconClass:"es-icon-product",uniqueClassName:"custom-block",canBeSavedToLibrary:!0,settingsCssPath:"/assets/css/settings.css",previewCssPath:"/assets/css/preview.css",i18n:l,blockName:"block.name",emptyContainerIcon:!0,blockType:"multi-orientation",blockConfigAttributeNames:["esd-dev-custom-config"],controlsToCreate:[{control:p}],blockControls:[r],emailInitialized:function(t){},getBlockLayoutToDrop:function(){if(t.blockConfiguration&&t.blockConfiguration.enabled){var n=e.jQuery('<td class="esd-structure es-p20t es-p20r es-p20l esd-product-empty-layout" align="left">\n    <table cellpadding="0" cellspacing="0">\n        <tbody>\n            <tr>\n                <td class="esd-container-frame" width="600" align="center" valign="top">\n                    <table cellpadding="0" cellspacing="0" width="100%">\n                        <tbody>\n                            <tr>\n                                <td class="esd-block-html">\n                                    <custom-block class="custom-block-text" type="#SELECT_BLOCK#">\n                                        <p style="text-align:center;"\n                                            class="custom-block-text-html">#SELECT_BLOCK#</p>\n                                    </custom-block>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</td>'.replace(/#SELECT_BLOCK#/g,e.translate("preview.empty.description")));return c(n),n[0].outerHTML}},blockDropped:function(t){},getBlockLabel:function(t){return o.getBlockConfiguration(t).groups.map((function(t){return t.name})).join(", ")||e.translate("preview.empty.description")},getDefaultSettingsPanelState:function(t){return{blockConfig:o.getBlockConfiguration(t)}},onBlockCopy:function(t,e){var n=o.getBlockConfigurationForCopiedBlock(e);i(e,n=c(e,n))},updateLayout:i,wrapBlockWithTypeIdentifierAttributesAndGetConfig:c,updateBlockText:s,addBlockCustomAttibutes:function(t,e,n){t[0].querySelector(".custom-block-text").hasAttribute(e)&&t[0].querySelector(".custom-block-text").removeAttribute(e),t[0].querySelector(".custom-block-text").setAttribute(e,n)},blockConfigurationService:o}}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={create:function(t,e,n){return Object.assign(C(C({stripoConfig:t,stripoApi:e,extensionBasePath:n},o),b(t,e)))}};self.CustomBlockExtension=y}]);