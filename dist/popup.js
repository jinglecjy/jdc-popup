!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define("Popup",["vue"],e):"object"==typeof exports?exports.Popup=e(require("vue")):t.Popup=e(t.Vue)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var s=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(o[s]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(s(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(s(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function s(t){var e,n,o=document.querySelector("style["+_+'~="'+t.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(g){var s=d++;o=p||(p=r()),e=a.bind(null,o,s,!1),n=a.bind(null,o,s,!0)}else o=r(),e=i.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function a(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function i(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),m.ssrId&&t.setAttribute(_,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},m=null,_="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){h=n,m=r||{};var s=l(t,e);return o(s),function(e){for(var n=[],r=0;r<s.length;r++){var a=s[r],i=u[a.id];i.refs--,n.push(i)}e?(s=l(t,e),o(s)):s=[];for(var r=0;r<n.length;r++){var i=n[r];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete u[i.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";var o=n(11);e.a={name:"Popup",mixins:[o.a],props:{maskColor:String,tween:String}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4);o.a.install=function(t){return t.component(o.a.name,o.a)},e.default=o.a},function(t,e,n){"use strict";function o(t){n(5),n(8)}var r=n(2),s=n(15),a=n(10),i=o,c=a(r.a,s.a,!1,i,"data-v-58a7fc56",null);e.a=c.exports},function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(1)("77849fff",o,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".popup-container[data-v-58a7fc56],.popup[data-v-58a7fc56]{position:relative}.popup__mask[data-v-58a7fc56]{width:100%;height:100%;position:fixed;left:0;top:0;transition:all .5s ease}.popup__content[data-v-58a7fc56]{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);transition:all .5s ease}",""])},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var s=e[r],a=s[0],i=s[1],c=s[2],l=s[3],u={id:t+":"+r,css:i,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(1)("298f84a6",o,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".overflow-hidden{overflow:hidden}.bottom-enter-active,.bottom-leave-active,.fade-enter-active,.fade-leave-active,.flop-enter-active,.flop-leave-active,.left-enter-active,.left-leave-active,.right-enter-active,.right-leave-active,.scale-enter-active,.scale-leave-active,.top-enter-active,.top-leave-active{transition:all .5s ease}.bottom-enter,.bottom-leave-to,.fade-enter,.fade-leave-to,.left-enter,.left-leave-to,.right-enter,.right-leave-to,.top-enter,.top-leave-to{opacity:0}.flop-enter-to .popup__content{animation:flop .5s ease}.flop-leave-to .popup__content{animation:flop .5s ease reverse}@keyframes flop{0%{transform:translate(-50%,-50%) rotateY(-90deg)}to{transform:translate(-50%,-50%) rotateY(0deg)}}.bottom-enter .popup__content,.bottom-leave-to .popup__content{top:100%;transform:translate(-50%,-100%)}.top-enter .popup__content,.top-leave-to .popup__content{top:0;transform:translate(-50%)}.left-enter .popup__content,.left-leave-to .popup__content{left:0;transform:translateY(-50%)}.right-enter .popup__content,.right-leave-to .popup__content{left:100%;transform:translate(-100%,-50%)}.scale-enter-to .popup__content{animation:scaleAnim .5s ease}.scale-leave-to .popup__content{animation:scaleAnim .5s ease reverse}@keyframes scaleAnim{0%{transform:translate(-50%,-50%) scale(0)}50%{transform:translate(-50%,-50%) scale(1.5)}to{transform:translate(-50%,-50%) scale(1)}}",""])},function(t,e){t.exports=function(t,e,n,o,r,s){var a,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,i=t.default);var l="function"==typeof i?i.options:i;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var u;if(s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):o&&(u=o),u){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(t,e){return u.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,u):[u]}return{esModule:a,exports:i,options:l}}},function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}n.d(e,"a",function(){return a});var r=n(12),s=n(14),a={mixins:[r.a],props:{show:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0}},mounted:function(){this.show&&this.$nextTick(function(){this.$el.style.zIndex=s.a.zIndex+1,s.a.zIndex+=1,this.open()}),this._removeListener=[]},beforeDestroy:function(){this.close()},watch:{show:function(){this.show?this.$nextTick(function(){this.$el.style.zIndex=s.a.zIndex+1,s.a.zIndex+=1,this.open()}):this.close()}},methods:{open:function(){if(!this.opened&&this.lockScroll){this.maskEle=this._getChildren(this.$el,"popup__mask")||[];for(var t=0;t<this.maskEle.length;t++){this.maskEle[t].addEventListener("touchmove",this.preventDefault,{passive:!1},!1)}this.scrollEle=this._getChildren(this.$el,"container--scrollable")||[];for(var e=0;e<this.scrollEle.length;e++){var n=this.scrollEle[e];n.addEventListener("touchstart",this.touchStart,{passive:!1},!1),this._removeListener.push(this._addListener(n,"touchmove",this.onTouchMove,n))}document.body.classList.add("overflow-hidden"),this.opened=!0,s.a.lockCount++}},close:function(){if(this.opened&&(this.opened=!1,this.lockScroll)){for(var t=0;t<this.maskEle.length;t++){this.maskEle[t].removeEventListener("touchmove",this.preventDefault,{passive:!1},!1)}for(var e=0;e<this.scrollEle.length;e++){this.scrollEle[e].removeEventListener("touchstart",this.touchStart,{passive:!1},!1),this._removeListener[e]()}this._removeListener=[],s.a.lockCount--,s.a.lockCount<=0&&document.body.classList.remove("overflow-hidden")}},onTouchMove:function(t,e){console.log(e,t),this.touchMove(t),1===t.targetTouches.length&&this.handleScroll(t,e)},handleScroll:function(t,e){if(e){var n=e.scrollTop,o=e.scrollHeight,r=e.clientHeight,s=this.deltaY>0&&0===n,a=this.deltaY<0&&n+r+1>=o;(s||a)&&this.preventDefault(t)}return t.stopPropagation(),!0},preventDefault:function(t){t.cancelable&&t.preventDefault()},_getChildren:function(t,e){var n=this,r=[];return[].concat(o(t.children)).forEach(function(t){-1!==t.className.indexOf(e)?r.push(t):r=r.concat(n._getChildren(t,e))}),r},_addListener:function(t,e,n){function r(t){a?n.apply(void 0,[t].concat(o(a))):n(t)}for(var s=arguments.length,a=Array(s>3?s-3:0),i=3;i<s;i++)a[i-3]=arguments[i];return t.addEventListener(e,r,{passive:!1},!1),function(){t.removeEventListener(e,r,{passive:!1},!1)}}}}},function(t,e,n){"use strict";function o(t,e){return t>e&&t>a?"horizontal":e>t&&e>a?"vertical":""}n.d(e,"a",function(){return i});var r=n(13),s=n.n(r),a=10,i=s.a.extend({data:function(){return{direction:"",startX:0,startY:0,deltaX:0,deltaY:0,offsetX:0,offsetY:0}},methods:{touchStart:function(t){this._resetTouchStatus(),this.startX=t.touches[0].clientX||t.targetTouches[0].clientX,this.startY=t.touches[0].clientY||t.targetTouches[0].clientY},touchMove:function(t){var e=t.touches[0]||t.targetTouches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||o(this.offsetX,this.offsetY)},_resetTouchStatus:function(){this.direction="",this.startX=0,this.startY=0,this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},function(e,n){e.exports=t},function(t,e,n){"use strict";e.a={zIndex:1e3,lockCount:0}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-container"},[n("transition",{attrs:{name:t.tween||"fade"}},[t.show?n("div",{staticClass:"popup"},[n("div",{staticClass:"popup__mask",style:{background:t.maskColor||"rgba(0,0,0,.3)"}}),t._v(" "),n("div",{staticClass:"popup__content"},[t._t("default",[t._v("empty")])],2)]):t._e()])],1)},r=[],s={render:o,staticRenderFns:r};e.a=s}])});