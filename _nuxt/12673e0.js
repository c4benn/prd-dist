(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{355:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("96d6a0e0",content,!0,{sourceMap:!1})},449:function(t,e,n){"use strict";n(355)},450:function(t,e,n){var r=n(30)(!1);r.push([t.i,".main[data-snin]{display:flex;max-width:100vw;overflow-x:auto;overflow-y:hidden;overflow:auto hidden;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.main[data-snin]>.image{flex-shrink:0;scroll-snap-align:center}.main[data-snin]>.image>.__content{-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top}.footer[data-snin]{display:grid;padding:1.5rem;text-align:center;grid-row-gap:.75rem;row-gap:.75rem}.title[data-snin]{font-size:1.75rem;opacity:var(--t-title)}.subtitle[data-snin]{font-size:.95rem;opacity:var(--t-subtitle);line-height:1.2;font-weight:400}",""]),t.exports=r},555:function(t,e,n){"use strict";n.r(e);n(12),n(10),n(11),n(13),n(9),n(14);var r=n(5),main=(n(37),n(0));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"ShopNewIn",props:{items:{type:Array,default:function(){return[{img:{src:"/img/campaign/3.jpg",alt:" "}},{img:{src:"/img/campaign/1.jpg",alt:" "}},{img:{src:"/img/campaign/2.jpg",alt:" "}},{img:{src:"/img/campaign/4.jpg",alt:" "}},{img:{src:"/img/campaign/5.jpg",alt:" "}},{img:{src:"/img/campaign/6.png",alt:" "}}]}}},data:function(){return{activeIndex:null,delayedActiveIndex:null,debounce:null}},created:function(){var t=this;this.debounce=new main.Debounce({callback:function(){t.delayedActiveIndex=t.activeIndex},delay:500})},render:function(t){var e,n,r,div,o=this;return(div=function(e,n){return t("div",e,n)})({attrs:c(c({},r={"data-snin":""}),{},{"aria-label":"shop new in"}),staticClass:"root"},[div({attrs:c({},r),staticClass:"main hide-scrollbar"},o.items.map((function(e,n){var r,c=e.img;return r={key:n,props:{config:{threshold:.6,rootMargin:"50% 0px"}},scopedSlots:{default:function(e){return e.isIntersecting&&requestAnimationFrame((function(){o.activeIndex=n,requestAnimationFrame((function(){return o.debounce.init()}))})),r={props:{height:"450px",width:"100%",src:c.src,alt:c.alt},staticClass:"image"},t("app-img",r);var r}}},t("ui-intersection",r)}))),div({key:o.delayedActiveIndex,attrs:c(c({},r),{},{"aria-label":"product description"}),staticClass:"footer fade-appear",class:[{hidden:null===o.delayedActiveIndex}]},[(e={attrs:c({},r),staticClass:"title"},n=["Item ".concat(o.delayedActiveIndex," title")],t("h2",e,n)),function(e,n){return t("h3",e,n)}({attrs:c({},r),staticClass:"subtitle"},["Item ".concat(o.delayedActiveIndex," subtitle that describes the product in a short and formal way that shouldn't exceed two lines.")])])])}},d=(n(449),n(7)),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);