!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define("Popup",["vue"],e):"object"==typeof exports?exports.Popup=e(require("vue")):t.Popup=e(t.Vue)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=32)}([function(t,e,n){var o=n(27)("wks"),r=n(29),i=n(1).Symbol,a="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)("Symbol."+t))}).store=o},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(5),r=n(11);t.exports=n(3)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(6),r=n(46),i=n(47),a=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(9);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(1),r=n(2),i=n(20),a=n(4),c=n(7),s=function(t,e,n){var u,l,f,p=t&s.F,d=t&s.G,v=t&s.S,h=t&s.P,y=t&s.B,_=t&s.W,g=d?r:r[e]||(r[e]={}),m=g.prototype,b=d?o:v?o[e]:(o[e]||{}).prototype;d&&(n=e);for(u in n)(l=!p&&b&&void 0!==b[u])&&c(g,u)||(f=l?b[u]:n[u],g[u]=d&&"function"!=typeof b[u]?n[u]:y&&l?i(f,o):_&&b[u]==f?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((g.virtual||(g.virtual={}))[u]=f,t&s.R&&m&&!m[u]&&a(m,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(27)("keys"),r=n(29);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var o=n(12);t.exports=function(t){return Object(o(t))}},function(t,e){t.exports={}},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function i(t){var e,n,o=document.querySelector("style["+_+'~="'+t.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(g){var i=d++;o=p||(p=r()),e=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),e=c.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function a(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function c(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),y.ssrId&&t.setAttribute(_,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(36),l={},f=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},y=null,_="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){v=n,y=r||{};var i=u(t,e);return o(i),function(e){for(var n=[],r=0;r<i.length;r++){var a=i[r],c=l[a.id];c.refs--,n.push(c)}e?(i=u(t,e),o(i)):i=[];for(var r=0;r<n.length;r++){var c=n[r];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete l[c.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";var o=n(40);e.a={name:"Popup",mixins:[o.a],props:{maskColor:{type:String,default:"rgba(0,0,0,.3)"},tween:{type:String,default:""}}}},function(t,e,n){var o=n(45);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(9),r=n(1).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){var o=n(49),r=n(30);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(24),r=n(12);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(13),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(2),r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(28)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!0},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(5).f,r=n(7),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(33);o.a.install=function(t){return t.component(o.a.name,o.a)},e.default=o.a},function(t,e,n){"use strict";function o(t){n(34),n(37)}var r=n(19),i=n(78),a=n(39),c=o,s=a(r.a,i.a,!1,c,"data-v-6c9da1f2",null);e.a=s.exports},function(t,e,n){var o=n(35);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(18)("71ffb23c",o,!0,{})},function(t,e,n){e=t.exports=n(17)(!1),e.push([t.i,".jdc-popup-container[data-v-6c9da1f2]{position:relative}.jdc-popup[data-v-6c9da1f2]{overflow:hidden}.jdc-popup[data-v-6c9da1f2],.jdc-popup__mask[data-v-6c9da1f2]{position:fixed;width:100%;height:100%;top:0;left:0}.jdc-popup__content[data-v-6c9da1f2]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) scale(1) rotateY(0deg);transform:translate(-50%,-50%) scale(1) rotateY(0deg)}.jdc-popup__content-container[data-v-6c9da1f2]{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-perspective:293.33333vw;perspective:293.33333vw;overflow:hidden;position:fixed;width:100%;height:100%;top:0;left:0}",""])},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],c=i[1],s=i[2],u=i[3],l={id:t+":"+r,css:c,media:s,sourceMap:u};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]})}return n}},function(t,e,n){var o=n(38);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(18)("e9a4d9ac",o,!0,{})},function(t,e,n){e=t.exports=n(17)(!1),e.push([t.i,".overflow-hidden{overflow:hidden}.fade-enter-active,.fade-enter-active .jdc-popup__content,.fade-leave-active,.fade-leave-active .jdc-popup__content{-webkit-transition:all .5s ease;transition:all .5s ease}.fade-enter,.fade-leave-active,.fade-leave-to{opacity:0}.flop-enter-active,.flop-enter-active .jdc-popup__content,.flop-leave-active,.flop-leave-active .jdc-popup__content{-webkit-transition:all .5s ease;transition:all .5s ease}.flop-enter,.flop-leave-active,.flop-leave-to{opacity:0}.bottom-enter-active,.bottom-enter-active .jdc-popup__content,.bottom-leave-active,.bottom-leave-active .jdc-popup__content{-webkit-transition:all .5s ease;transition:all .5s ease}.bottom-enter,.bottom-leave-active,.bottom-leave-to{opacity:0}.top-enter-active,.top-enter-active .jdc-popup__content,.top-leave-active,.top-leave-active .jdc-popup__content{-webkit-transition:all .5s ease;transition:all .5s ease}.top-enter,.top-leave-active,.top-leave-to{opacity:0}.left-enter-active,.left-enter-active .jdc-popup__content,.left-leave-active,.left-leave-active .jdc-popup__content{-webkit-transition:all .5s ease;transition:all .5s ease}.left-enter,.left-leave-active,.left-leave-to{opacity:0}.right-enter-active,.right-enter-active .jdc-popup__content,.right-leave-active,.right-leave-active .jdc-popup__content{-webkit-transition:all .5s ease;transition:all .5s ease}.right-enter,.right-leave-active,.right-leave-to{opacity:0}.bounce-enter-active,.bounce-enter-active .jdc-popup__content,.bounce-leave-active,.bounce-leave-active .jdc-popup__content{-webkit-transition:all .5s ease;transition:all .5s ease}.bounce-enter,.bounce-leave-active,.bounce-leave-to{opacity:0}.bottom-enter .jdc-popup__content,.bottom-leave-active .jdc-popup__content,.bottom-leave-to .jdc-popup__content{top:100%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.top-enter .jdc-popup__content,.top-leave-active .jdc-popup__content,.top-leave-to .jdc-popup__content{top:0;-webkit-transform:translate(-50%);transform:translate(-50%)}.left-enter .jdc-popup__content,.left-leave-active .jdc-popup__content,.left-leave-to .jdc-popup__content{left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.right-enter .jdc-popup__content,.right-leave-active .jdc-popup__content,.right-leave-to .jdc-popup__content{left:100%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.bounce-enter .jdc-popup__content,.bounce-leave-active .jdc-popup__content,.bounce-leave-to .jdc-popup__content{-webkit-transform:translate(-50%,-50%) scale(1.5) rotateY(0deg);transform:translate(-50%,-50%) scale(1.5) rotateY(0deg)}.flop-enter .jdc-popup__content,.flop-leave-active .jdc-popup__content,.flop-leave-to .jdc-popup__content{-webkit-transform:translate(-50%,-50%) scale(1) rotateY(-90deg);transform:translate(-50%,-50%) scale(1) rotateY(-90deg)}",""])},function(t,e){t.exports=function(t,e,n,o,r,i){var a,c=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,c=t.default);var u="function"==typeof c?c.options:c;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var l;if(i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):o&&(l=o),l){var f=u.functional,p=f?u.render:u.beforeCreate;f?(u._injectStyles=l,u.render=function(t,e){return l.call(e),p(t,e)}):u.beforeCreate=p?[].concat(p,l):[l]}return{esModule:a,exports:c,options:u}}},function(t,e,n){"use strict";n.d(e,"a",function(){return d});var o=n(41),r=n.n(o),i=n(54),a=n.n(i),c=n(73),s=n(75),u=n(76),l=n(77),f=["jdc-popup__mask"],p=["jdc-popup__content-container"],d={mixins:[c.a],props:{show:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0}},mounted:function(){this.show&&this.$nextTick(function(){this.$el.style.zIndex=l.a.zIndex+2,l.a.zIndex+=2,this.open()}),this._removeListener=[]},beforeDestroy:function(){this.close()},watch:{show:function(){this.show?this.$nextTick(function(){this.$el.style.zIndex=l.a.zIndex+2,l.a.zIndex+=2,this.open()}):this.close()}},methods:{open:function(){if(!this.opened&&this.lockScroll){for(var t=0;t<f.length;t++){this.maskEle=this._getChildren(this.$el,f[t])||[];for(var e=0;e<this.maskEle.length;e++){this.maskEle[e].style.zIndex=this.$el.style.zIndex-1}}for(var n=0;n<p.length;n++){this.contentEle=this._getChildren(this.$el,p[n])||[];for(var o=0;o<this.contentEle.length;o++){this.contentEle[o].style.zIndex=this.$el.style.zIndex}}this.preventAll(this.$el),this.scrollEle=this._getChildren(this.$el,"jdc-popup-scroll")||[];for(var r=0;r<this.scrollEle.length;r++){var i=this.scrollEle[r];i.style.overscrollBehavior="contain",i.addEventListener("touchstart",this.touchStart,!s.a||{passive:!1,capture:!1}),this._removeListener.push(this._addListener(i,"touchmove",this.onTouchMove,i))}l.a.lockCount<=0&&(document.body.classList.add("overflow-hidden"),console.log(Object(u.a)(),Object(u.a)().android),Object(u.a)().android&&(this._androidUnlock=this.setOverflowHiddenMobile())),this.opened=!0,l.a.lockCount++}},close:function(){if(this.opened&&(this.opened=!1,this.lockScroll)){this.removePreventAll(this.$el);for(var t=0;t<this.scrollEle.length;t++){var e=this.scrollEle[t];e.style.overscrollBehavior="auto",e.removeEventListener("touchstart",this.touchStart,!s.a||{capture:!1}),this._removeListener[t]()}this._removeListener=[],l.a.lockCount--,l.a.lockCount<=0&&(document.body.classList.remove("overflow-hidden"),Object(u.a)().android&&this._androidUnlock&&this._androidUnlock())}},onTouchMove:function(t,e){t.stopPropagation(),this.touchMove(t),1===t.targetTouches.length&&this.handleScroll(t,e)},handleScroll:function(t,e){if(e){var n=e.scrollTop,o=e.scrollHeight,r=e.clientHeight,i=this.deltaY>0&&n<=1,a=this.deltaY<0&&n+r+1>=o;(i||a)&&t.cancelable&&t.preventDefault()}return!0},preventAll:function(t){var e=this,n=[];return[].concat(a()(t.children)).forEach(function(t){for(var o=!1,r=t.className.split(" "),i=0;i<r.length;i++)"jdc-popup-scroll"===r[i]&&(o=!0);o||(t.addEventListener("touchmove",e.prevent,!!s.a&&{passive:!1,capture:!1}),n=n.concat(e.preventAll(t)))}),n},removePreventAll:function(t){var e=this,n=[];return[].concat(a()(t.children)).forEach(function(t){for(var o=!1,r=t.className.split(" "),i=0;i<r.length;i++)"jdc-popup-scroll"===r[i]&&(o=!0);o||(t.removeEventListener("touchmove",e.prevent,!!s.a&&{capture:!1}),n=n.concat(e.preventAll(t)))}),n},setOverflowHiddenMobile:function(){var t=document.documentElement,e=document.body,n=t.scrollTop||e.scrollTop,o=r()({},t.style),i=r()({},e.style);return t.style.height="100%",t.style.overflow="hidden",e.style.top="-"+n+"px",e.style.width="100%",e.style.height="auto",e.style.position="fixed",e.style.overflow="hidden",function(){t.style.height=o.height||"",t.style.overflow=o.overflow||"",["top","width","height","overflow","position"].forEach(function(t){e.style[t]=i[t]||""}),window.scrollTo(0,n)}},prevent:function(t){return t.stopPropagation(),t.cancelable&&t.preventDefault(),!1},_getChildren:function(t,e){var n=this,o=[];return[].concat(a()(t.children)).forEach(function(t){for(var r=t.className.split(" "),i=0;i<r.length;i++)if(r[i]===e){o.push(t);break}o=o.concat(n._getChildren(t,e))}),o},_addListener:function(t,e,n){function o(t){i?n.apply(void 0,[t].concat(a()(i))):n(t)}for(var r=arguments.length,i=Array(r>3?r-3:0),c=3;c<r;c++)i[c-3]=arguments[c];return t.addEventListener(e,o,!!s.a&&{passive:!1,capture:!1}),function(){t.removeEventListener(e,o,!!s.a&&{capture:!1})}}}}},function(t,e,n){"use strict";e.__esModule=!0;var o=n(42),r=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},function(t,e,n){t.exports={default:n(43),__esModule:!0}},function(t,e,n){n(44),t.exports=n(2).Object.assign},function(t,e,n){var o=n(8);o(o.S+o.F,"Object",{assign:n(48)})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(3)&&!n(10)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(9);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";var o=n(3),r=n(22),i=n(52),a=n(53),c=n(15),s=n(24),u=Object.assign;t.exports=!u||n(10)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=o})?function(t,e){for(var n=c(t),u=arguments.length,l=1,f=i.f,p=a.f;u>l;)for(var d,v=s(arguments[l++]),h=f?r(v).concat(f(v)):r(v),y=h.length,_=0;y>_;)d=h[_++],o&&!p.call(v,d)||(n[d]=v[d]);return n}:u},function(t,e,n){var o=n(7),r=n(23),i=n(50)(!1),a=n(14)("IE_PROTO");t.exports=function(t,e){var n,c=r(t),s=0,u=[];for(n in c)n!=a&&o(c,n)&&u.push(n);for(;e.length>s;)o(c,n=e[s++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){var o=n(23),r=n(26),i=n(51);t.exports=function(t){return function(e,n,a){var c,s=o(e),u=r(s.length),l=i(a,u);if(t&&n!=n){for(;u>l;)if((c=s[l++])!=c)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var o=n(13),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):i(t,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";e.__esModule=!0;var o=n(55),r=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}},function(t,e,n){t.exports={default:n(56),__esModule:!0}},function(t,e,n){n(57),n(66),t.exports=n(2).Array.from},function(t,e,n){"use strict";var o=n(58)(!0);n(59)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var o=n(13),r=n(12);t.exports=function(t){return function(e,n){var i,a,c=String(r(e)),s=o(n),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var o=n(28),r=n(8),i=n(60),a=n(4),c=n(16),s=n(61),u=n(31),l=n(65),f=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,h,y,_){s(n,e,v);var g,m,b,x=function(t){if(!p&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",w="values"==h,O=!1,k=t.prototype,E=k[f]||k["@@iterator"]||h&&k[h],S=E||x(h),C=h?w?x("entries"):S:void 0,M="Array"==e?k.entries||E:E;if(M&&(b=l(M.call(new t)))!==Object.prototype&&b.next&&(u(b,j,!0),o||"function"==typeof b[f]||a(b,f,d)),w&&E&&"values"!==E.name&&(O=!0,S=function(){return E.call(this)}),o&&!_||!p&&!O&&k[f]||a(k,f,S),c[e]=S,c[j]=d,h)if(g={values:w?S:x("values"),keys:y?S:x("keys"),entries:C},_)for(m in g)m in k||i(k,m,g[m]);else r(r.P+r.F*(p||O),e,g);return g}},function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";var o=n(62),r=n(11),i=n(31),a={};n(4)(a,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var o=n(6),r=n(63),i=n(30),a=n(14)("IE_PROTO"),c=function(){},s=function(){var t,e=n(21)("iframe"),o=i.length;for(e.style.display="none",n(64).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;o--;)delete s.prototype[i[o]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=o(t),n=new c,c.prototype=null,n[a]=t):n=s(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(5),r=n(6),i=n(22);t.exports=n(3)?Object.defineProperties:function(t,e){r(t);for(var n,a=i(e),c=a.length,s=0;c>s;)o.f(t,n=a[s++],e[n]);return t}},function(t,e,n){var o=n(1).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(7),r=n(15),i=n(14)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";var o=n(20),r=n(8),i=n(15),a=n(67),c=n(68),s=n(26),u=n(69),l=n(70);r(r.S+r.F*!n(72)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,f,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,_=0,g=l(p);if(y&&(h=o(h,v>2?arguments[2]:void 0,2)),void 0==g||d==Array&&c(g))for(e=s(p.length),n=new d(e);e>_;_++)u(n,_,y?h(p[_],_):p[_]);else for(f=g.call(p),n=new d;!(r=f.next()).done;_++)u(n,_,y?a(f,h,[r.value,_],!0):r.value);return n.length=_,n}})},function(t,e,n){var o=n(6);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},function(t,e,n){var o=n(16),r=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,e,n){"use strict";var o=n(5),r=n(11);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var o=n(71),r=n(0)("iterator"),i=n(16);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||i[o(t)]}},function(t,e,n){var o=n(25),r=n(0)("toStringTag"),i="Arguments"==o(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),r))?n:i?o(e):"Object"==(c=o(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var o=n(0)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],a=i[o]();a.next=function(){return{done:n=!0}},i[o]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){"use strict";function o(t,e){return t>e&&t>a?"horizontal":e>t&&e>a?"vertical":""}n.d(e,"a",function(){return c});var r=n(74),i=n.n(r),a=10,c=i.a.extend({data:function(){return{direction:"",startX:0,startY:0,deltaX:0,deltaY:0,offsetX:0,offsetY:0}},methods:{touchStart:function(t){this._resetTouchStatus(),this.startX=t.touches[0].clientX||t.targetTouches[0].clientX,this.startY=t.touches[0].clientY||t.targetTouches[0].clientY},touchMove:function(t){var e=t.touches[0]||t.targetTouches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||o(this.offsetX,this.offsetY)},_resetTouchStatus:function(){this.direction="",this.startX=0,this.startY=0,this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},function(e,n){e.exports=t},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=!1;try{window.addEventListener("test",function(){},Object.defineProperty({},"passive",{get:function(){o=!0}}))}catch(t){}},function(t,e,n){"use strict";function o(t){return t=t||navigator.userAgent,{ios:/ip(hone|od)|ipad/i.test(t),android:/android/i.test(t)&&!/ip(hone|od)|ipad/i.test(t)}}e.a=o},function(t,e,n){"use strict";e.a={zIndex:1e3,lockCount:0,scrollELe:[]}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jdc-popup-container"},[n("transition",{attrs:{name:t.tween,duration:500}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"jdc-popup"},[n("div",{staticClass:"jdc-popup__mask",style:{background:t.maskColor}}),t._v(" "),n("div",{staticClass:"jdc-popup__content-container"},[n("div",{ref:"popupContent",staticClass:"jdc-popup__content"},[t._t("default",[t._v("empty")])],2)])])])],1)},r=[],i={render:o,staticRenderFns:r};e.a=i}])});