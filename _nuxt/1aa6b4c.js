(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{360:function(t,e,r){var content=r(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("f453b0dc",content,!0,{sourceMap:!1})},459:function(t,e,r){"use strict";r(360)},460:function(t,e,r){var n=r(30)(!1);n.push([t.i,".root[data-sdct]{display:grid;transition:opacity .15s}.main[data-sdct]{max-height:calc(100% - max(var(--header-height), 48px));overflow-x:hidden;overflow-y:auto;overflow:hidden auto}.content[data-sdct]{padding:1rem 1.5rem;line-height:1.75}",""]),t.exports=n},560:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(11),r(13),r(9),r(14);var n=r(5),o=r(3);r(37),r(56),r(38);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"SizeDialogContent",functional:!0,props:{showBackButton:Boolean,showCloseButton:{type:Boolean,default:!0},opacity:{type:String,default:void 0}},render:function(t,e){var r=e.props,n=e.data,c=n.attrs,d=n.staticClass?" ".concat(n.staticClass):"",style="object"==Object(o.a)(n.style)?l({},n.style):{},f={"data-sdct":""};return function(e,r){return t("div",e,r)}(l(l({},n),{},{attrs:l(l({},f),c),staticClass:"root".concat(d),style:l({opacity:r.opacity},style)}),[function(e,r){return t("header",e,r)}({attrs:l({},f),class:"header sheet-header fill-before-after"},[function(e,r){return t("h1",e,r)}({attrs:l({},f),class:"title sheet-heading"},"Size Guide"),r.showCloseButton&&function(e,r){return t("ui-btn",e,r)}({props:{size:"md",text:!0,persistent:!0},attrs:l({},f),staticClass:"close-btn sheet-close-btn",on:{"!click":function(t){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return e.listeners[t]&&e.listeners[t](r)}("close-button-clicked",t)}}},"Close")]),function(e,r){return t("article",e,r)}({attrs:l({},f),class:"main"},[function(e,r){return t("p",e,r)}({attrs:l({},f),class:"content"},[Array.from({length:10},(function(t,i){return i})).map((function(){return"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem commodi velit facere ad sequi nulla maiores doloribus illum libero, repellat."}))])])])}},f=(r(459),r(7)),component=Object(f.a)(d,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);