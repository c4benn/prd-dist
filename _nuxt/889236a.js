(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{352:function(t,e,r){var content=r(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("754fc240",content,!0,{sourceMap:!1})},443:function(t,e,r){"use strict";r(352)},444:function(t,e,r){var o=r(30)(!1);o.push([t.i,".root[data-sim]{--rounded:0.875rem;--size:500px;height:var(--size);display:grid;grid-template-rows:auto 1fr;position:relative;isolation:isolate;max-width:min(90vw,calc(var(--size) - 20px));border-radius:var(--rounded);overflow:hidden}.root[data-sim].buy-the-look-template{grid-template-rows:auto auto;min-height:384px;height:auto}.root[data-sim].product-image{background:linear-gradient(0deg,var(--background),var(--faded-theme-surface) 80%)}.footer[data-sim]:before,.root[data-sim]:before{opacity:var(--t-disabled);border:var(--ui-divide);z-index:1}.root[data-sim]>.background{overflow:hidden;background:var(--theme-primary)}.root[data-sim].product-image>.background{background:transparent}.root[data-sim] .__content[data-aig]{-o-object-fit:cover;object-fit:cover}.footer[data-sim]{position:absolute;height:calc(var(--size)*0.232);min-height:112px;width:100%;bottom:0;color:var(--color);padding:1rem 1.25rem}.footer[data-sim].buy-the-look-template{display:grid;grid-template-columns:1fr auto;align-items:center;height:auto;min-height:auto;position:relative;padding:0 1.25rem;min-height:80px}.footer[data-sim].buy-the-look-template .title[data-sim]{margin-bottom:0}.footer[data-sim]:before{border-width:1px 0 0}.footer[data-sim]:after{background:var(--background);z-index:-1}.root[data-sim].product-image .footer[data-sim]:after,.root[data-sim].product-image .footer[data-sim]:before,.root[data-sim].product-image:before{display:none}.price[data-sim]{opacity:var(--t-subtitle);font-size:.875rem;font-weight:500}.title[data-sim]{opacity:var(--t-body);font-size:1.5rem;margin:.25rem 0 .5rem}.order-btn[data-sim],.root[data-sim] .saved-btn{color:inherit}.root[data-sim] .saved-btn{position:absolute;top:.875rem;right:1rem}",""]),t.exports=o},552:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(11),r(13),r(9),r(14);var o=r(5);r(34);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"ShopItem",props:{template:{type:String,default:"default"},tag:{type:String,default:"div"},title:{type:String,default:"item name"},price:{type:Object,default:function(){return{real:"8000",sale:"5000"}}},img:{type:Object,default:function(){return{src:"",alt:""}}},size:{type:String,default:void 0}},data:function(){return{imgColorCode:null,imgTextColorCode:null}},render:function(t){var e,r,o,div,h2,h3,n,l,d,m,f=this;return o={"data-sim":""},div=function(e,r){return t("div",e,r)},h2=function(e,r){return t("h2",e,r)},h3=function(e,r){return t("h3",e,r)},n=function(e,r){return t("ui-btn",e,r)},l=parseFloat(f.size),d=f.imgColorCode||"var(--theme-banner)",m=f.img.productImage,function(e,r){return t(f.tag,e,r)}({attrs:c(c({},o),{},{"aria-label":f.title,title:f.title}),staticClass:"root fill-before",class:[{"product-image":m},"".concat(f.template,"-template")],style:{"--background":m?d:void 0,"--size":f.size}},[(e={staticClass:"background",props:{src:f.img.src,alt:f.img.alt,width:"100%",height:f.size?"".concat(l-l*(m?.25:.232),"px"):"384px",getColor:!0},on:{"color-code":function(t,e){f.imgColorCode=e},"text-color-code":function(t){f.imgTextColorCode=t}}},t("app-img",e,r)),div({attrs:c(c({},o),{},{"aria-label":"item footer"}),staticClass:"footer fill-before-after",class:["".concat(f.template,"-template")],style:{"--color":f.imgTextColorCode,"--background":m?void 0:d}},"default"==f.template?[h2({attrs:c({},o),staticClass:"price"},["".concat(f.$c4.currencies.naira).concat(f.price.real)]),h3({attrs:c({},o),staticClass:"title"},[f.title]),n({key:"order-btn",props:{flat:!0,filledText:!0,shape:"pill",size:"sm",radonly:!0},attrs:c({},o),staticClass:"order-btn"},"ORDER"),function(e,r){return t("savedBtn",e,r)}({key:"saved-btn",staticClass:"saved-btn",props:{componentProps:{filledText:!0}}})]:[div({attrs:c({},o),staticClass:"product-desc-wrap"},[h2({attrs:c({},o),staticClass:"price"},["".concat(f.$c4.currencies.naira).concat(f.price.real)]),h3({attrs:c({},o),staticClass:"title"},[f.title])]),n({props:{flat:!0,filledText:!0,shape:"pill",size:"sm",radonly:!0},attrs:c({},o),staticClass:"order-btn"},"ORDER")])])}},d=(r(443),r(7)),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);