const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./firebase-CfN7CkhM.js","./index.esm-9zF9TOPL.js"])))=>i.map(i=>d[i]);
var mn=Object.defineProperty;var gn=(w,v,T)=>v in w?mn(w,v,{enumerable:!0,configurable:!0,writable:!0,value:T}):w[v]=T;var gt=(w,v,T)=>gn(w,typeof v!="symbol"?v+"":v,T);(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))S(x);new MutationObserver(x=>{for(const O of x)if(O.type==="childList")for(const U of O.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&S(U)}).observe(document,{childList:!0,subtree:!0});function T(x){const O={};return x.integrity&&(O.integrity=x.integrity),x.referrerPolicy&&(O.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?O.credentials="include":x.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function S(x){if(x.ep)return;x.ep=!0;const O=T(x);fetch(x.href,O)}})();const xn="modulepreload",bn=function(w,v){return new URL(w,v).href},xr={},we=function(v,T,S){let x=Promise.resolve();if(T&&T.length>0){const U=document.getElementsByTagName("link"),L=document.querySelector("meta[property=csp-nonce]"),et=(L==null?void 0:L.nonce)||(L==null?void 0:L.getAttribute("nonce"));x=Promise.allSettled(T.map(D=>{if(D=bn(D,S),D in xr)return;xr[D]=!0;const $=D.endsWith(".css"),tt=$?'[rel="stylesheet"]':"";if(!!S)for(let f=U.length-1;f>=0;f--){const g=U[f];if(g.href===D&&(!$||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${D}"]${tt}`))return;const Y=document.createElement("link");if(Y.rel=$?"stylesheet":xn,$||(Y.as="script"),Y.crossOrigin="",Y.href=D,et&&Y.setAttribute("nonce",et),document.head.appendChild(Y),$)return new Promise((f,g)=>{Y.addEventListener("load",f),Y.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${D}`)))})}))}function O(U){const L=new Event("vite:preloadError",{cancelable:!0});if(L.payload=U,window.dispatchEvent(L),!L.defaultPrevented)throw U}return x.then(U=>{for(const L of U||[])L.status==="rejected"&&O(L.reason);return v().catch(O)})};var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},br={};(function(){var w;function v(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}var T=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,e,r){return t==Array.prototype||t==Object.prototype||(t[e]=r.value),t};function S(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof xt=="object"&&xt];for(var e=0;e<t.length;++e){var r=t[e];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var x=S(this);function O(t,e){if(e)t:{var r=x;t=t.split(".");for(var n=0;n<t.length-1;n++){var i=t[n];if(!(i in r))break t;r=r[i]}t=t[t.length-1],n=r[t],e=e(n),e!=n&&e!=null&&T(r,t,{configurable:!0,writable:!0,value:e})}}O("Symbol",function(t){function e(s){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new r(n+(s||"")+"_"+i++,s)}function r(s,o){this.h=s,T(this,"description",{configurable:!0,writable:!0,value:o})}if(t)return t;r.prototype.toString=function(){return this.h};var n="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",i=0;return e}),O("Symbol.iterator",function(t){if(t)return t;t=Symbol("Symbol.iterator");for(var e="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),r=0;r<e.length;r++){var n=x[e[r]];typeof n=="function"&&typeof n.prototype[t]!="function"&&T(n.prototype,t,{configurable:!0,writable:!0,value:function(){return U(v(this))}})}return t});function U(t){return t={next:t},t[Symbol.iterator]=function(){return this},t}function L(t){var e=typeof Symbol<"u"&&Symbol.iterator&&t[Symbol.iterator];return e?e.call(t):{next:v(t)}}function et(t){if(!(t instanceof Array)){t=L(t);for(var e,r=[];!(e=t.next()).done;)r.push(e.value);t=r}return t}var D=typeof Object.assign=="function"?Object.assign:function(t,e){for(var r=1;r<arguments.length;r++){var n=arguments[r];if(n)for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};O("Object.assign",function(t){return t||D});var $=typeof Object.create=="function"?Object.create:function(t){function e(){}return e.prototype=t,new e},tt;if(typeof Object.setPrototypeOf=="function")tt=Object.setPrototypeOf;else{var X;t:{var Y={a:!0},f={};try{f.__proto__=Y,X=f.a;break t}catch{}X=!1}tt=X?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw new TypeError(t+" is not extensible");return t}:null}var g=tt;function y(t,e){if(t.prototype=$(e.prototype),t.prototype.constructor=t,g)g(t,e);else for(var r in e)if(r!="prototype")if(Object.defineProperties){var n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n)}else t[r]=e[r];t.za=e.prototype}function b(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function I(t){if(t.m)throw new TypeError("Generator is already running");t.m=!0}b.prototype.u=function(t){this.i=t};function N(t,e){t.l={ma:e,na:!0},t.h=t.s||t.v}b.prototype.return=function(t){this.l={return:t},this.h=this.v};function R(t,e,r){return t.h=r,{value:e}}function Z(t){this.h=new b,this.i=t}function bt(t,e){I(t.h);var r=t.h.j;return r?nt(t,"return"in r?r.return:function(n){return{value:n,done:!0}},e,t.h.return):(t.h.return(e),q(t))}function nt(t,e,r,n){try{var i=e.call(t.h.j,r);if(!(i instanceof Object))throw new TypeError("Iterator result "+i+" is not an object");if(!i.done)return t.h.m=!1,i;var s=i.value}catch(o){return t.h.j=null,N(t.h,o),q(t)}return t.h.j=null,n.call(t.h,s),q(t)}function q(t){for(;t.h.h;)try{var e=t.i(t.h);if(e)return t.h.m=!1,{value:e.value,done:!1}}catch(r){t.h.i=void 0,N(t.h,r)}if(t.h.m=!1,t.h.l){if(e=t.h.l,t.h.l=null,e.na)throw e.ma;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function yt(t){this.next=function(e){return I(t.h),t.h.j?e=nt(t,t.h.j.next,e,t.h.u):(t.h.u(e),e=q(t)),e},this.throw=function(e){return I(t.h),t.h.j?e=nt(t,t.h.j.throw,e,t.h.u):(N(t.h,e),e=q(t)),e},this.return=function(e){return bt(t,e)},this[Symbol.iterator]=function(){return this}}function u(t){function e(n){return t.next(n)}function r(n){return t.throw(n)}return new Promise(function(n,i){function s(o){o.done?n(o.value):Promise.resolve(o.value).then(e,r).then(s,i)}s(t.next())})}function c(t){return u(new yt(new Z(t)))}O("Promise",function(t){function e(o){this.i=0,this.j=void 0,this.h=[],this.u=!1;var a=this.l();try{o(a.resolve,a.reject)}catch(l){a.reject(l)}}function r(){this.h=null}function n(o){return o instanceof e?o:new e(function(a){a(o)})}if(t)return t;r.prototype.i=function(o){if(this.h==null){this.h=[];var a=this;this.j(function(){a.m()})}this.h.push(o)};var i=x.setTimeout;r.prototype.j=function(o){i(o,0)},r.prototype.m=function(){for(;this.h&&this.h.length;){var o=this.h;this.h=[];for(var a=0;a<o.length;++a){var l=o[a];o[a]=null;try{l()}catch(d){this.l(d)}}}this.h=null},r.prototype.l=function(o){this.j(function(){throw o})},e.prototype.l=function(){function o(d){return function(h){l||(l=!0,d.call(a,h))}}var a=this,l=!1;return{resolve:o(this.I),reject:o(this.m)}},e.prototype.I=function(o){if(o===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(o instanceof e)this.L(o);else{t:switch(typeof o){case"object":var a=o!=null;break t;case"function":a=!0;break t;default:a=!1}a?this.F(o):this.s(o)}},e.prototype.F=function(o){var a=void 0;try{a=o.then}catch(l){this.m(l);return}typeof a=="function"?this.M(a,o):this.s(o)},e.prototype.m=function(o){this.v(2,o)},e.prototype.s=function(o){this.v(1,o)},e.prototype.v=function(o,a){if(this.i!=0)throw Error("Cannot settle("+o+", "+a+"): Promise already settled in state"+this.i);this.i=o,this.j=a,this.i===2&&this.K(),this.H()},e.prototype.K=function(){var o=this;i(function(){if(o.D()){var a=x.console;typeof a<"u"&&a.error(o.j)}},1)},e.prototype.D=function(){if(this.u)return!1;var o=x.CustomEvent,a=x.Event,l=x.dispatchEvent;return typeof l>"u"?!0:(typeof o=="function"?o=new o("unhandledrejection",{cancelable:!0}):typeof a=="function"?o=new a("unhandledrejection",{cancelable:!0}):(o=x.document.createEvent("CustomEvent"),o.initCustomEvent("unhandledrejection",!1,!0,o)),o.promise=this,o.reason=this.j,l(o))},e.prototype.H=function(){if(this.h!=null){for(var o=0;o<this.h.length;++o)s.i(this.h[o]);this.h=null}};var s=new r;return e.prototype.L=function(o){var a=this.l();o.T(a.resolve,a.reject)},e.prototype.M=function(o,a){var l=this.l();try{o.call(a,l.resolve,l.reject)}catch(d){l.reject(d)}},e.prototype.then=function(o,a){function l(k,m){return typeof k=="function"?function(_){try{d(k(_))}catch(C){h(C)}}:m}var d,h,j=new e(function(k,m){d=k,h=m});return this.T(l(o,d),l(a,h)),j},e.prototype.catch=function(o){return this.then(void 0,o)},e.prototype.T=function(o,a){function l(){switch(d.i){case 1:o(d.j);break;case 2:a(d.j);break;default:throw Error("Unexpected state: "+d.i)}}var d=this;this.h==null?s.i(l):this.h.push(l),this.u=!0},e.resolve=n,e.reject=function(o){return new e(function(a,l){l(o)})},e.race=function(o){return new e(function(a,l){for(var d=L(o),h=d.next();!h.done;h=d.next())n(h.value).T(a,l)})},e.all=function(o){var a=L(o),l=a.next();return l.done?n([]):new e(function(d,h){function j(_){return function(C){k[_]=C,m--,m==0&&d(k)}}var k=[],m=0;do k.push(void 0),m++,n(l.value).T(j(k.length-1),h),l=a.next();while(!l.done)})},e});function F(t,e){t instanceof String&&(t+="");var r=0,n=!1,i={next:function(){if(!n&&r<t.length){var s=r++;return{value:e(s,t[s]),done:!1}}return n=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}O("Array.prototype.keys",function(t){return t||function(){return F(this,function(e){return e})}}),O("Array.prototype.fill",function(t){return t||function(e,r,n){var i=this.length||0;for(0>r&&(r=Math.max(0,i+r)),(n==null||n>i)&&(n=i),n=Number(n),0>n&&(n=Math.max(0,i+n)),r=Number(r||0);r<n;r++)this[r]=e;return this}});function E(t){return t||Array.prototype.fill}O("Int8Array.prototype.fill",E),O("Uint8Array.prototype.fill",E),O("Uint8ClampedArray.prototype.fill",E),O("Int16Array.prototype.fill",E),O("Uint16Array.prototype.fill",E),O("Int32Array.prototype.fill",E),O("Uint32Array.prototype.fill",E),O("Float32Array.prototype.fill",E),O("Float64Array.prototype.fill",E),O("Object.is",function(t){return t||function(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r}}),O("Array.prototype.includes",function(t){return t||function(e,r){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(r=r||0,0>r&&(r=Math.max(r+i,0));r<i;r++){var s=n[r];if(s===e||Object.is(s,e))return!0}return!1}}),O("String.prototype.includes",function(t){return t||function(e,r){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(e instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(e,r||0)!==-1}});var H=this||self;function W(t,e){t=t.split(".");var r=H;t[0]in r||typeof r.execScript>"u"||r.execScript("var "+t[0]);for(var n;t.length&&(n=t.shift());)t.length||e===void 0?r[n]&&r[n]!==Object.prototype[n]?r=r[n]:r=r[n]={}:r[n]=e}function p(t){var e;t:{if((e=H.navigator)&&(e=e.userAgent))break t;e=""}return e.indexOf(t)!=-1}var A=Array.prototype.map?function(t,e){return Array.prototype.map.call(t,e,void 0)}:function(t,e){for(var r=t.length,n=Array(r),i=typeof t=="string"?t.split(""):t,s=0;s<r;s++)s in i&&(n[s]=e.call(void 0,i[s],s,t));return n},P={},G=null;function st(t){var e=t.length,r=3*e/4;r%3?r=Math.floor(r):"=.".indexOf(t[e-1])!=-1&&(r="=.".indexOf(t[e-2])!=-1?r-2:r-1);var n=new Uint8Array(r),i=0;return Lt(t,function(s){n[i++]=s}),i!==r?n.subarray(0,i):n}function Lt(t,e){function r(l){for(;n<t.length;){var d=t.charAt(n++),h=G[d];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(d))throw Error("Unknown base64 encoding at char: "+d)}return l}at();for(var n=0;;){var i=r(-1),s=r(0),o=r(64),a=r(64);if(a===64&&i===-1)break;e(i<<2|s>>4),o!=64&&(e(s<<4&240|o>>2),a!=64&&e(o<<6&192|a))}}function at(){if(!G){G={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],r=0;5>r;r++){var n=t.concat(e[r].split(""));P[r]=n;for(var i=0;i<n.length;i++){var s=n[i];G[s]===void 0&&(G[s]=i)}}}}var ut=typeof Uint8Array<"u",_t=!(p("Trident")||p("MSIE"))&&typeof H.btoa=="function";function Tt(t){if(!_t){var e;e===void 0&&(e=0),at(),e=P[e];for(var r=Array(Math.floor(t.length/3)),n=e[64]||"",i=0,s=0;i<t.length-2;i+=3){var o=t[i],a=t[i+1],l=t[i+2],d=e[o>>2];o=e[(o&3)<<4|a>>4],a=e[(a&15)<<2|l>>6],l=e[l&63],r[s++]=d+o+a+l}switch(d=0,l=n,t.length-i){case 2:d=t[i+1],l=e[(d&15)<<2]||n;case 1:t=t[i],r[s]=e[t>>2]+e[(t&3)<<4|d>>4]+l+n}return r.join("")}for(e="";10240<t.length;)e+=String.fromCharCode.apply(null,t.subarray(0,10240)),t=t.subarray(10240);return e+=String.fromCharCode.apply(null,t),btoa(e)}var ke=RegExp("[-_.]","g");function kr(t){switch(t){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Ee(t){if(!_t)return st(t);ke.test(t)&&(t=t.replace(ke,kr)),t=atob(t);for(var e=new Uint8Array(t.length),r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}var Ae;function Qt(){return Ae||(Ae=new Uint8Array(0))}var Ft={},Er=typeof Uint8Array.prototype.slice=="function",V=0,rt=0;function je(t){var e=0>t;t=Math.abs(t);var r=t>>>0;t=Math.floor((t-r)/4294967296),e&&(r=L(_e(r,t)),e=r.next().value,t=r.next().value,r=e),V=r>>>0,rt=t>>>0}var Ar=typeof BigInt=="function";function _e(t,e){return e=~e,t?t=~t+1:e+=1,[t,e]}function Te(t,e){this.i=t>>>0,this.h=e>>>0}function Se(t){if(!t)return Oe||(Oe=new Te(0,0));if(!/^-?\d+$/.test(t))return null;if(16>t.length)je(Number(t));else if(Ar)t=BigInt(t),V=Number(t&BigInt(4294967295))>>>0,rt=Number(t>>BigInt(32)&BigInt(4294967295));else{var e=+(t[0]==="-");rt=V=0;for(var r=t.length,n=e,i=(r-e)%6+e;i<=r;n=i,i+=6)n=Number(t.slice(n,i)),rt*=1e6,V=1e6*V+n,4294967296<=V&&(rt+=V/4294967296|0,V%=4294967296);e&&(e=L(_e(V,rt)),t=e.next().value,e=e.next().value,V=t,rt=e)}return new Te(V,rt)}var Oe;function Le(t,e){return Error("Invalid wire type: "+t+" (at position "+e+")")}function Jt(){return Error("Failed to read varint, encoding is invalid.")}function Fe(t,e){return Error("Tried to read past the end of the data "+e+" > "+t)}function kt(){throw Error("Invalid UTF8")}function Re(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}var Dt=void 0,te,jr=typeof TextDecoder<"u",Ce,_r=typeof TextEncoder<"u",Ie;function Pe(t){if(t!==Ft)throw Error("illegal external caller")}function Rt(t,e){if(Pe(e),this.V=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}function ee(){return Ie||(Ie=new Rt(null,Ft))}function Ne(t){Pe(Ft);var e=t.V;return e=e==null||ut&&e!=null&&e instanceof Uint8Array?e:typeof e=="string"?Ee(e):null,e==null?e:t.V=e}function Tr(t){if(typeof t=="string")return{buffer:Ee(t),C:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),C:!1};if(t.constructor===Uint8Array)return{buffer:t,C:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),C:!1};if(t.constructor===Rt)return{buffer:Ne(t)||Qt(),C:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Me(t,e){this.i=null,this.m=!1,this.h=this.j=this.l=0,re(this,t,e)}function re(t,e,r){r=r===void 0?{}:r,t.S=r.S===void 0?!1:r.S,e&&(e=Tr(e),t.i=e.buffer,t.m=e.C,t.l=0,t.j=t.i.length,t.h=t.l)}Me.prototype.reset=function(){this.h=this.l};function Et(t,e){if(t.h=e,e>t.j)throw Fe(t.j,e)}function Ct(t){var e=t.i,r=t.h,n=e[r++],i=n&127;if(n&128&&(n=e[r++],i|=(n&127)<<7,n&128&&(n=e[r++],i|=(n&127)<<14,n&128&&(n=e[r++],i|=(n&127)<<21,n&128&&(n=e[r++],i|=n<<28,n&128&&e[r++]&128&&e[r++]&128&&e[r++]&128&&e[r++]&128&&e[r++]&128)))))throw Jt();return Et(t,r),i}function Ue(t,e){if(0>e)throw Error("Tried to read a negative byte length: "+e);var r=t.h,n=r+e;if(n>t.j)throw Fe(e,t.j-r);return t.h=n,r}var He=[];function ne(){this.h=[]}ne.prototype.length=function(){return this.h.length},ne.prototype.end=function(){var t=this.h;return this.h=[],t};function De(t,e,r){for(;0<r||127<e;)t.h.push(e&127|128),e=(e>>>7|r<<25)>>>0,r>>>=7;t.h.push(e)}function At(t,e){for(;127<e;)t.h.push(e&127|128),e>>>=7;t.h.push(e)}function ie(t,e){if(He.length){var r=He.pop();re(r,t,e),t=r}else t=new Me(t,e);this.h=t,this.j=this.h.h,this.i=this.l=-1,this.setOptions(e)}ie.prototype.setOptions=function(t){t=t===void 0?{}:t,this.ca=t.ca===void 0?!1:t.ca},ie.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function Be(t){var e=t.h;if(e.h==e.j)return!1;t.j=t.h.h;var r=Ct(t.h)>>>0;if(e=r>>>3,r&=7,!(0<=r&&5>=r))throw Le(r,t.j);if(1>e)throw Error("Invalid field number: "+e+" (at position "+t.j+")");return t.l=e,t.i=r,!0}function Bt(t){switch(t.i){case 0:if(t.i!=0)Bt(t);else t:{t=t.h;for(var e=t.h,r=e+10,n=t.i;e<r;)if(!(n[e++]&128)){Et(t,e);break t}throw Jt()}break;case 1:t=t.h,Et(t,t.h+8);break;case 2:t.i!=2?Bt(t):(e=Ct(t.h)>>>0,t=t.h,Et(t,t.h+e));break;case 5:t=t.h,Et(t,t.h+4);break;case 3:e=t.l;do{if(!Be(t))throw Error("Unmatched start-group tag: stream EOF");if(t.i==4){if(t.l!=e)throw Error("Unmatched end-group tag");break}Bt(t)}while(!0);break;default:throw Le(t.i,t.j)}}var Gt=[];function Sr(){this.j=[],this.i=0,this.h=new ne}function St(t,e){e.length!==0&&(t.j.push(e),t.i+=e.length)}function Or(t,e){if(e=e.R){St(t,t.h.end());for(var r=0;r<e.length;r++)St(t,Ne(e[r])||Qt())}}var mt=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function jt(t,e){return mt?t[mt]|=e:t.A!==void 0?t.A|=e:(Object.defineProperties(t,{A:{value:e,configurable:!0,writable:!0,enumerable:!1}}),e)}function Ge(t,e){mt?t[mt]&&(t[mt]&=~e):t.A!==void 0&&(t.A&=~e)}function K(t){var e;return mt?e=t[mt]:e=t.A,e??0}function dt(t,e){mt?t[mt]=e:t.A!==void 0?t.A=e:Object.defineProperties(t,{A:{value:e,configurable:!0,writable:!0,enumerable:!1}})}function oe(t){return jt(t,1),t}function Lr(t,e){dt(e,(t|0)&-51)}function zt(t,e){dt(e,(t|18)&-41)}var se={};function Wt(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}var It,ze=[];dt(ze,23),It=Object.freeze(ze);function ae(t){if(K(t.o)&2)throw Error("Cannot mutate an immutable Message")}function le(t){var e=t.length;(e=e?t[e-1]:void 0)&&Wt(e)?e.g=1:(e={},t.push((e.g=1,e)))}function We(t){var e=t.i+t.G;return t.B||(t.B=t.o[e]={})}function ct(t,e){return e===-1?null:e>=t.i?t.B?t.B[e]:void 0:t.o[e+t.G]}function pt(t,e,r,n){ae(t),Pt(t,e,r,n)}function Pt(t,e,r,n){t.j&&(t.j=void 0),e>=t.i||n?We(t)[e]=r:(t.o[e+t.G]=r,(t=t.B)&&e in t&&delete t[e])}function ue(t,e,r,n){var i=ct(t,e);Array.isArray(i)||(i=It);var s=K(i);if(s&1||oe(i),n)s&2||jt(i,2),r&1||Object.freeze(i);else{n=!(r&2);var o=s&2;r&1||!o?n&&s&16&&!o&&Ge(i,16):(i=oe(Array.prototype.slice.call(i)),Pt(t,e,i))}return i}function ce(t,e){var r=ct(t,e),n=r==null?r:typeof r=="number"||r==="NaN"||r==="Infinity"||r==="-Infinity"?Number(r):void 0;return n!=null&&n!==r&&Pt(t,e,n),n}function Ye(t,e,r,n,i){t.h||(t.h={});var s=t.h[r],o=ue(t,r,3,i);if(!s){var a=o;s=[];var l=!!(K(t.o)&16);o=!!(K(a)&2);var d=a;!i&&o&&(a=Array.prototype.slice.call(a));for(var h=o,j=0;j<a.length;j++){var k=a[j],m=e,_=!1;if(_=_===void 0?!1:_,k=Array.isArray(k)?new m(k):_?new m:void 0,k!==void 0){m=k.o;var C=_=K(m);o&&(C|=2),l&&(C|=16),C!=_&&dt(m,C),m=C,h=h||!!(2&m),s.push(k)}}return t.h[r]=s,l=K(a),e=l|33,e=h?e&-9:e|8,l!=e&&(h=a,Object.isFrozen(h)&&(h=Array.prototype.slice.call(h)),dt(h,e),a=h),d!==a&&Pt(t,r,a),(i||n&&o)&&jt(s,2),n&&Object.freeze(s),s}return i||(i=Object.isFrozen(s),n&&!i?Object.freeze(s):!n&&i&&(s=Array.prototype.slice.call(s),t.h[r]=s)),s}function fe(t,e,r){var n=!!(K(t.o)&2);if(e=Ye(t,e,r,n,n),t=ue(t,r,3,n),!(n||K(t)&8)){for(n=0;n<e.length;n++){if(r=e[n],K(r.o)&2){var i=qe(r,!1);i.j=r}else i=r;r!==i&&(e[n]=i,t[n]=i.o)}jt(t,8)}return e}function ht(t,e,r){if(r!=null&&typeof r!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof r+": "+r);pt(t,e,r)}function Xe(t,e,r,n,i){ae(t);var s=Ye(t,r,e,!1,!1);return r=n??new r,t=ue(t,e,2,!1),i!=null?(s.splice(i,0,r),t.splice(i,0,r.o)):(s.push(r),t.push(r.o)),r.C()&&Ge(t,8),r}function Yt(t,e){return t??e}function vt(t,e,r){return r=r===void 0?0:r,Yt(ce(t,e),r)}var Xt;function Fr(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"object":if(t)if(Array.isArray(t)){if(K(t)&128)return t=Array.prototype.slice.call(t),le(t),t}else{if(ut&&t!=null&&t instanceof Uint8Array)return Tt(t);if(t instanceof Rt){var e=t.V;return e==null?"":typeof e=="string"?e:t.V=Tt(e)}}}return t}function Ke(t,e,r,n){if(t!=null){if(Array.isArray(t))t=de(t,e,r,n!==void 0);else if(Wt(t)){var i={},s;for(s in t)i[s]=Ke(t[s],e,r,n);t=i}else t=e(t,n);return t}}function de(t,e,r,n){var i=K(t);n=n?!!(i&16):void 0,t=Array.prototype.slice.call(t);for(var s=0;s<t.length;s++)t[s]=Ke(t[s],e,r,n);return r(i,t),t}function Rr(t){return t.ja===se?t.toJSON():Fr(t)}function Cr(t,e){t&128&&le(e)}function $e(t,e,r){if(r=r===void 0?zt:r,t!=null){if(ut&&t instanceof Uint8Array)return t.length?new Rt(new Uint8Array(t),Ft):ee();if(Array.isArray(t)){var n=K(t);return n&2?t:e&&!(n&32)&&(n&16||n===0)?(dt(t,n|2),t):(t=de(t,$e,n&4?zt:r,!0),e=K(t),e&4&&e&2&&Object.freeze(t),t)}return t.ja===se?Ze(t):t}}function Ve(t,e,r,n,i,s,o){if(t=t.h&&t.h[r]){if(n=K(t),n&2?n=t:(s=A(t,Ze),zt(n,s),Object.freeze(s),n=s),ae(e),o=n==null?It:oe([]),n!=null){for(s=!!n.length,t=0;t<n.length;t++){var a=n[t];s=s&&!(K(a.o)&2),o[t]=a.o}s=(s?8:0)|1,t=K(o),(t&s)!==s&&(Object.isFrozen(o)&&(o=Array.prototype.slice.call(o)),dt(o,t|s)),e.h||(e.h={}),e.h[r]=n}else e.h&&(e.h[r]=void 0);Pt(e,r,o,i)}else pt(e,r,$e(n,s,o),i)}function Ze(t){return K(t.o)&2||(t=qe(t,!0),jt(t.o,2)),t}function qe(t,e){var r=t.o,n=[];jt(n,16);var i=t.constructor.h;if(i&&n.push(i),i=t.B,i){n.length=r.length,n.fill(void 0,n.length,r.length);var s={};n[n.length-1]=s}K(r)&128&&le(n),e=e||t.C()?zt:Lr,s=t.constructor,Xt=n,n=new s(n),Xt=void 0,t.R&&(n.R=t.R.slice()),s=!!(K(r)&16);for(var o=i?r.length-1:r.length,a=0;a<o;a++)Ve(t,n,a-t.G,r[a],!1,s,e);if(i)for(var l in i)Ve(t,n,+l,i[l],!0,s,e);return n}function it(t,e,r){t==null&&(t=Xt),Xt=void 0;var n=this.constructor.i||0,i=0<n,s=this.constructor.h,o=!1;if(t==null){t=s?[s]:[];var a=48,l=!0;i&&(n=0,a|=128),dt(t,a)}else{if(!Array.isArray(t)||s&&s!==t[0])throw Error();var d=a=jt(t,0);if((l=(16&d)!==0)&&((o=(32&d)!==0)||(d|=32)),i){if(128&d)n=0;else if(0<t.length){var h=t[t.length-1];if(Wt(h)&&"g"in h){n=0,d|=128,delete h.g;var j=!0,k;for(k in h){j=!1;break}j&&t.pop()}}}else if(128&d)throw Error();a!==d&&dt(t,d)}this.G=(s?0:-1)-n,this.h=void 0,this.o=t;t:{if(s=this.o.length,n=s-1,s&&(s=this.o[n],Wt(s))){this.B=s,this.i=n-this.G;break t}e!==void 0&&-1<e?(this.i=Math.max(e,n+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!i&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(r){e=l&&!o&&!0,i=this.i;var m;for(l=0;l<r.length;l++)o=r[l],o<i?(o+=this.G,(n=t[o])?Qe(n,e):t[o]=It):(m||(m=We(this)),(n=m[o])?Qe(n,e):m[o]=It)}}it.prototype.toJSON=function(){return de(this.o,Rr,Cr)},it.prototype.C=function(){return!!(K(this.o)&2)};function Qe(t,e){if(Array.isArray(t)){var r=K(t),n=1;!e||r&2||(n|=16),(r&n)!==n&&dt(t,r|n)}}it.prototype.ja=se,it.prototype.toString=function(){return this.o.toString()};function Je(t,e,r){if(r){var n={},i;for(i in r){var s=r[i],o=s.ra;o||(n.J=s.xa||s.oa.W,s.ia?(n.aa=ir(s.ia),o=function(a){return function(l,d,h){return a.J(l,d,h,a.aa)}}(n)):s.ka?(n.Z=or(s.da.P,s.ka),o=function(a){return function(l,d,h){return a.J(l,d,h,a.Z)}}(n)):o=n.J,s.ra=o),o(e,t,s.da),n={J:n.J,aa:n.aa,Z:n.Z}}}Or(e,t)}var Kt=Symbol();function tr(t,e,r){return t[Kt]||(t[Kt]=function(n,i){return e(n,i,r)})}function er(t){var e=t[Kt];if(!e){var r=he(t);e=function(n,i){return sr(n,i,r)},t[Kt]=e}return e}function Ir(t){var e=t.ia;if(e)return er(e);if(e=t.wa)return tr(t.da.P,e,t.ka)}function Pr(t){var e=Ir(t),r=t.da,n=t.oa.U;return e?function(i,s){return n(i,s,r,e)}:function(i,s){return n(i,s,r)}}function rr(t,e){var r=t[e];return typeof r=="function"&&r.length===0&&(r=r(),t[e]=r),Array.isArray(r)&&(Mt in r||Nt in r||0<r.length&&typeof r[0]=="function")?r:void 0}function nr(t,e,r,n,i,s){e.P=t[0];var o=1;if(t.length>o&&typeof t[o]!="number"){var a=t[o++];r(e,a)}for(;o<t.length;){r=t[o++];for(var l=o+1;l<t.length&&typeof t[l]!="number";)l++;switch(a=t[o++],l-=o,l){case 0:n(e,r,a);break;case 1:(l=rr(t,o))?(o++,i(e,r,a,l)):n(e,r,a,t[o++]);break;case 2:l=o++,l=rr(t,l),i(e,r,a,l,t[o++]);break;case 3:s(e,r,a,t[o++],t[o++],t[o++]);break;case 4:s(e,r,a,t[o++],t[o++],t[o++],t[o++]);break;default:throw Error("unexpected number of binary field arguments: "+l)}}return e}var $t=Symbol();function ir(t){var e=t[$t];if(!e){var r=pe(t);e=function(n,i){return ar(n,i,r)},t[$t]=e}return e}function or(t,e){var r=t[$t];return r||(r=function(n,i){return Je(n,i,e)},t[$t]=r),r}var Nt=Symbol();function Nr(t,e){t.push(e)}function Mr(t,e,r){t.push(e,r.W)}function Ur(t,e,r,n){var i=ir(n),s=pe(n).P,o=r.W;t.push(e,function(a,l,d){return o(a,l,d,s,i)})}function Hr(t,e,r,n,i,s){var o=or(n,s),a=r.W;t.push(e,function(l,d,h){return a(l,d,h,n,o)})}function pe(t){var e=t[Nt];return e||(e=nr(t,t[Nt]=[],Nr,Mr,Ur,Hr),Mt in t&&Nt in t&&(t.length=0),e)}var Mt=Symbol();function Dr(t,e){t[0]=e}function Br(t,e,r,n){var i=r.U;t[e]=n?function(s,o,a){return i(s,o,a,n)}:i}function Gr(t,e,r,n,i){var s=r.U,o=er(n),a=he(n).P;t[e]=function(l,d,h){return s(l,d,h,a,o,i)}}function zr(t,e,r,n,i,s,o){var a=r.U,l=tr(n,i,s);t[e]=function(d,h,j){return a(d,h,j,n,l,o)}}function he(t){var e=t[Mt];return e||(e=nr(t,t[Mt]={},Dr,Br,Gr,zr),Mt in t&&Nt in t&&(t.length=0),e)}function sr(t,e,r){for(;Be(e)&&e.i!=4;){var n=e.l,i=r[n];if(!i){var s=r[0];s&&(s=s[n])&&(i=r[n]=Pr(s))}if(!i||!i(e,t,n)){i=e,n=t,s=i.j,Bt(i);var o=i;if(!o.ca){if(i=o.h.h-s,o.h.h=s,o=o.h,i==0)i=ee();else{if(s=Ue(o,i),o.S&&o.m)i=o.i.subarray(s,s+i);else{o=o.i;var a=s;i=s+i,i=a===i?Qt():Er?o.slice(a,i):new Uint8Array(o.subarray(a,i))}i=i.length==0?ee():new Rt(i,Ft)}(s=n.R)?s.push(i):n.R=[i]}}}return t}function ar(t,e,r){for(var n=r.length,i=n%2==1,s=i?1:0;s<n;s+=2)(0,r[s+1])(e,t,r[s]);Je(t,e,i?r[0]:void 0)}function Ut(t,e){return{U:t,W:e}}var ft=Ut(function(t,e,r){if(t.i!==5)return!1;t=t.h;var n=t.i,i=t.h,s=n[i],o=n[i+1],a=n[i+2];return n=n[i+3],Et(t,t.h+4),o=(s<<0|o<<8|a<<16|n<<24)>>>0,t=2*(o>>31)+1,s=o>>>23&255,o&=8388607,pt(e,r,s==255?o?NaN:1/0*t:s==0?t*Math.pow(2,-149)*o:t*Math.pow(2,s-150)*(o+Math.pow(2,23))),!0},function(t,e,r){if(e=ce(e,r),e!=null){At(t.h,8*r+5),t=t.h;var n=+e;n===0?0<1/n?V=rt=0:(rt=0,V=2147483648):isNaN(n)?(rt=0,V=2147483647):(n=(r=0>n?-2147483648:0)?-n:n,34028234663852886e22<n?(rt=0,V=(r|2139095040)>>>0):11754943508222875e-54>n?(n=Math.round(n/Math.pow(2,-149)),rt=0,V=(r|n)>>>0):(e=Math.floor(Math.log(n)/Math.LN2),n*=Math.pow(2,-e),n=Math.round(8388608*n),16777216<=n&&++e,rt=0,V=(r|e+127<<23|n&8388607)>>>0)),r=V,t.h.push(r>>>0&255),t.h.push(r>>>8&255),t.h.push(r>>>16&255),t.h.push(r>>>24&255)}}),Wr=Ut(function(t,e,r){if(t.i!==0)return!1;var n=t.h,i=0,s=t=0,o=n.i,a=n.h;do{var l=o[a++];i|=(l&127)<<s,s+=7}while(32>s&&l&128);for(32<s&&(t|=(l&127)>>4),s=3;32>s&&l&128;s+=7)l=o[a++],t|=(l&127)<<s;if(Et(n,a),128>l)n=i>>>0,l=t>>>0,(t=l&2147483648)&&(n=~n+1>>>0,l=~l>>>0,n==0&&(l=l+1>>>0)),n=4294967296*l+(n>>>0);else throw Jt();return pt(e,r,t?-n:n),!0},function(t,e,r){e=ct(e,r),e!=null&&(typeof e=="string"&&Se(e),e!=null&&(At(t.h,8*r),typeof e=="number"?(t=t.h,je(e),De(t,V,rt)):(r=Se(e),De(t.h,r.i,r.h))))}),Yr=Ut(function(t,e,r){return t.i!==0?!1:(pt(e,r,Ct(t.h)),!0)},function(t,e,r){if(e=ct(e,r),e!=null&&e!=null)if(At(t.h,8*r),t=t.h,r=e,0<=r)At(t,r);else{for(e=0;9>e;e++)t.h.push(r&127|128),r>>=7;t.h.push(1)}}),lr=Ut(function(t,e,r){if(t.i!==2)return!1;var n=Ct(t.h)>>>0;t=t.h;var i=Ue(t,n);if(t=t.i,jr){var s=t,o;(o=te)||(o=te=new TextDecoder("utf-8",{fatal:!0})),t=i+n,s=i===0&&t===s.length?s:s.subarray(i,t);try{var a=o.decode(s)}catch(j){if(Dt===void 0){try{o.decode(new Uint8Array([128]))}catch{}try{o.decode(new Uint8Array([97])),Dt=!0}catch{Dt=!1}}throw!Dt&&(te=void 0),j}}else{a=i,n=a+n,i=[];for(var l=null,d,h;a<n;)d=t[a++],128>d?i.push(d):224>d?a>=n?kt():(h=t[a++],194>d||(h&192)!==128?(a--,kt()):i.push((d&31)<<6|h&63)):240>d?a>=n-1?kt():(h=t[a++],(h&192)!==128||d===224&&160>h||d===237&&160<=h||((s=t[a++])&192)!==128?(a--,kt()):i.push((d&15)<<12|(h&63)<<6|s&63)):244>=d?a>=n-2?kt():(h=t[a++],(h&192)!==128||(d<<28)+(h-144)>>30||((s=t[a++])&192)!==128||((o=t[a++])&192)!==128?(a--,kt()):(d=(d&7)<<18|(h&63)<<12|(s&63)<<6|o&63,d-=65536,i.push((d>>10&1023)+55296,(d&1023)+56320))):kt(),8192<=i.length&&(l=Re(l,i),i.length=0);a=Re(l,i)}return pt(e,r,a),!0},function(t,e,r){if(e=ct(e,r),e!=null){var n=!1;if(n=n===void 0?!1:n,_r){if(n&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(e))throw Error("Found an unpaired surrogate");e=(Ce||(Ce=new TextEncoder)).encode(e)}else{for(var i=0,s=new Uint8Array(3*e.length),o=0;o<e.length;o++){var a=e.charCodeAt(o);if(128>a)s[i++]=a;else{if(2048>a)s[i++]=a>>6|192;else{if(55296<=a&&57343>=a){if(56319>=a&&o<e.length){var l=e.charCodeAt(++o);if(56320<=l&&57343>=l){a=1024*(a-55296)+l-56320+65536,s[i++]=a>>18|240,s[i++]=a>>12&63|128,s[i++]=a>>6&63|128,s[i++]=a&63|128;continue}else o--}if(n)throw Error("Found an unpaired surrogate");a=65533}s[i++]=a>>12|224,s[i++]=a>>6&63|128}s[i++]=a&63|128}}e=i===s.length?s:s.subarray(0,i)}At(t.h,8*r+2),At(t.h,e.length),St(t,t.h.end()),St(t,e)}}),ur=Ut(function(t,e,r,n,i){if(t.i!==2)return!1;e=Xe(e,r,n),r=t.h.j,n=Ct(t.h)>>>0;var s=t.h.h+n,o=s-r;if(0>=o&&(t.h.j=s,i(e,t,void 0,void 0,void 0),o=s-t.h.h),o)throw Error("Message parsing ended unexpectedly. Expected to read "+(n+" bytes, instead read "+(n-o)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return t.h.h=s,t.h.j=r,!0},function(t,e,r,n,i){if(e=fe(e,n,r),e!=null)for(n=0;n<e.length;n++){var s=t;At(s.h,8*r+2);var o=s.h.end();St(s,o),o.push(s.i),s=o,i(e[n],t),o=t;var a=s.pop();for(a=o.i+o.h.length()-a;127<a;)s.push(a&127|128),a>>>=7,o.i++;s.push(a),o.i++}});function ve(t){return function(e,r){t:{if(Gt.length){var n=Gt.pop();n.setOptions(r),re(n.h,e,r),e=n}else e=new ie(e,r);try{var i=he(t),s=sr(new i.P,e,i);break t}finally{i=e.h,i.i=null,i.m=!1,i.l=0,i.j=0,i.h=0,i.S=!1,e.l=-1,e.i=-1,100>Gt.length&&Gt.push(e)}s=void 0}return s}}function ye(t){return function(){var e=new Sr;ar(this,e,pe(t)),St(e,e.h.end());for(var r=new Uint8Array(e.i),n=e.j,i=n.length,s=0,o=0;o<i;o++){var a=n[o];r.set(a,s),s+=a.length}return e.j=[r],r}}function Ot(t){it.call(this,t)}y(Ot,it);var cr=[Ot,1,Yr,2,ft,3,lr,4,lr];Ot.prototype.l=ye(cr);function me(t){it.call(this,t,-1,Xr)}y(me,it),me.prototype.addClassification=function(t,e){return Xe(this,1,Ot,t,e),this};var Xr=[1],Kr=ve([me,1,ur,cr]);function Ht(t){it.call(this,t)}y(Ht,it);var fr=[Ht,1,ft,2,ft,3,ft,4,ft,5,ft];Ht.prototype.l=ye(fr);function dr(t){it.call(this,t,-1,$r)}y(dr,it);var $r=[1],Vr=ve([dr,1,ur,fr]);function Vt(t){it.call(this,t)}y(Vt,it);var pr=[Vt,1,ft,2,ft,3,ft,4,ft,5,ft,6,Wr],Zr=ve(pr);Vt.prototype.l=ye(pr);function hr(t,e,r){if(r=t.createShader(r===0?t.VERTEX_SHADER:t.FRAGMENT_SHADER),t.shaderSource(r,e),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+t.getShaderInfoLog(r));return r}function qr(t){return fe(t,Ot,1).map(function(e){var r=ct(e,1);return{index:r??0,qa:vt(e,2),label:ct(e,3)!=null?Yt(ct(e,3),""):void 0,displayName:ct(e,4)!=null?Yt(ct(e,4),""):void 0}})}function Qr(t){return{x:vt(t,1),y:vt(t,2),z:vt(t,3),visibility:ce(t,4)!=null?vt(t,4):void 0}}function ge(t){return fe(Vr(t),Ht,1).map(Qr)}function xe(t,e){this.i=t,this.h=e,this.m=0}function vr(t,e,r){return Jr(t,e),typeof t.h.canvas.transferToImageBitmap=="function"?Promise.resolve(t.h.canvas.transferToImageBitmap()):r?Promise.resolve(t.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(t.h.canvas):(t.j===void 0&&(t.j=document.createElement("canvas")),new Promise(function(n){t.j.height=t.h.canvas.height,t.j.width=t.h.canvas.width,t.j.getContext("2d",{}).drawImage(t.h.canvas,0,0,t.h.canvas.width,t.h.canvas.height),n(t.j)}))}function Jr(t,e){var r=t.h;if(t.s===void 0){var n=hr(r,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),i=hr(r,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),s=r.createProgram();if(r.attachShader(s,n),r.attachShader(s,i),r.linkProgram(s),!r.getProgramParameter(s,r.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+r.getProgramInfoLog(s));n=t.s=s,r.useProgram(n),i=r.getUniformLocation(n,"sampler0"),t.l={O:r.getAttribLocation(n,"aVertex"),N:r.getAttribLocation(n,"aTex"),ya:i},t.v=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,t.v),r.enableVertexAttribArray(t.l.O),r.vertexAttribPointer(t.l.O,2,r.FLOAT,!1,0,0),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),t.u=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,t.u),r.enableVertexAttribArray(t.l.N),r.vertexAttribPointer(t.l.N,2,r.FLOAT,!1,0,0),r.bufferData(r.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),r.uniform1i(i,0)}n=t.l,r.useProgram(t.s),r.canvas.width=e.width,r.canvas.height=e.height,r.viewport(0,0,e.width,e.height),r.activeTexture(r.TEXTURE0),t.i.bindTexture2d(e.glName),r.enableVertexAttribArray(n.O),r.bindBuffer(r.ARRAY_BUFFER,t.v),r.vertexAttribPointer(n.O,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(n.N),r.bindBuffer(r.ARRAY_BUFFER,t.u),r.vertexAttribPointer(n.N,2,r.FLOAT,!1,0,0),r.bindFramebuffer(r.DRAW_FRAMEBUFFER?r.DRAW_FRAMEBUFFER:r.FRAMEBUFFER,null),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.colorMask(!0,!0,!0,!0),r.drawArrays(r.TRIANGLE_FAN,0,4),r.disableVertexAttribArray(n.O),r.disableVertexAttribArray(n.N),r.bindBuffer(r.ARRAY_BUFFER,null),t.i.bindTexture2d(0)}function tn(t){this.h=t}var en=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function rn(t,e){return e+t}function yr(t,e){window[t]=e}function nn(t){var e=document.createElement("script");return e.setAttribute("src",t),e.setAttribute("crossorigin","anonymous"),new Promise(function(r){e.addEventListener("load",function(){r()},!1),e.addEventListener("error",function(){r()},!1),document.body.appendChild(e)})}function on(){return c(function(t){switch(t.h){case 1:return t.s=2,R(t,WebAssembly.instantiate(en),4);case 4:t.h=3,t.s=0;break;case 2:return t.s=0,t.l=null,t.return(!1);case 3:return t.return(!0)}})}function be(t){if(this.h=t,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=t&&t.locateFile||rn,typeof window=="object")var e=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")e=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=e,t.options){e=L(Object.keys(t.options));for(var r=e.next();!r.done;r=e.next()){r=r.value;var n=t.options[r].default;n!==void 0&&(this.l[r]=typeof n=="function"?n():n)}}}w=be.prototype,w.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function sn(t){var e,r,n,i,s,o,a,l,d,h,j;return c(function(k){switch(k.h){case 1:return t.ga?(e=t.h.files===void 0?[]:typeof t.h.files=="function"?t.h.files(t.l):t.h.files,R(k,on(),2)):k.return();case 2:if(r=k.i,typeof window=="object")return yr("createMediapipeSolutionsWasm",{locateFile:t.locateFile}),yr("createMediapipeSolutionsPackedAssets",{locateFile:t.locateFile}),o=e.filter(function(m){return m.data!==void 0}),a=e.filter(function(m){return m.data===void 0}),l=Promise.all(o.map(function(m){var _=Zt(t,m.url);if(m.path!==void 0){var C=m.path;_=_.then(function(z){return t.overrideFile(C,z),Promise.resolve(z)})}return _})),d=Promise.all(a.map(function(m){return m.simd===void 0||m.simd&&r||!m.simd&&!r?nn(t.locateFile(m.url,t.ha)):Promise.resolve()})).then(function(){var m,_,C;return c(function(z){if(z.h==1)return m=window.createMediapipeSolutionsWasm,_=window.createMediapipeSolutionsPackedAssets,C=t,R(z,m(_),2);C.i=z.i,z.h=0})}),h=function(){return c(function(m){return t.h.graph&&t.h.graph.url?m=R(m,Zt(t,t.h.graph.url),0):(m.h=0,m=void 0),m})}(),R(k,Promise.all([d,l,h]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return n=e.filter(function(m){return m.simd===void 0||m.simd&&r||!m.simd&&!r}).map(function(m){return t.locateFile(m.url,t.ha)}),importScripts.apply(null,et(n)),i=t,R(k,createMediapipeSolutionsWasm(Module),6);case 6:i.i=k.i,t.m=new OffscreenCanvas(1,1),t.i.canvas=t.m,s=t.i.GL.createContext(t.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),t.i.GL.makeContextCurrent(s),k.h=4;break;case 7:if(t.m=document.createElement("canvas"),j=t.m.getContext("webgl2",{}),!j&&(j=t.m.getContext("webgl",{}),!j))return alert("Failed to create WebGL canvas context when passing video frame."),k.return();t.K=j,t.i.canvas=t.m,t.i.createContext(t.m,!0,!0,{});case 4:t.j=new t.i.SolutionWasm,t.ga=!1,k.h=0}})}function an(t){var e,r,n,i,s,o,a,l;return c(function(d){if(d.h==1){if(t.h.graph&&t.h.graph.url&&t.fa===t.h.graph.url)return d.return();if(t.u=!0,!t.h.graph||!t.h.graph.url){d.h=2;return}return t.fa=t.h.graph.url,R(d,Zt(t,t.h.graph.url),3)}for(d.h!=2&&(e=d.i,t.j.loadGraph(e)),r=L(Object.keys(t.D)),n=r.next();!n.done;n=r.next())i=n.value,t.j.overrideFile(i,t.D[i]);if(t.D={},t.h.listeners)for(s=L(t.h.listeners),o=s.next();!o.done;o=s.next())a=o.value,fn(t,a);l=t.l,t.l={},t.setOptions(l),d.h=0})}w.reset=function(){var t=this;return c(function(e){t.j&&(t.j.reset(),t.s={},t.v={}),e.h=0})},w.setOptions=function(t,e){var r=this;if(e=e||this.h.options){for(var n=[],i=[],s={},o=L(Object.keys(t)),a=o.next();!a.done;s={X:s.X,Y:s.Y},a=o.next())if(a=a.value,!(a in this.l&&this.l[a]===t[a])){this.l[a]=t[a];var l=e[a];l!==void 0&&(l.onChange&&(s.X=l.onChange,s.Y=t[a],n.push(function(d){return function(){var h;return c(function(j){if(j.h==1)return R(j,d.X(d.Y),2);h=j.i,h===!0&&(r.u=!0),j.h=0})}}(s))),l.graphOptionXref&&(a=Object.assign({},{calculatorName:"",calculatorIndex:0},l.graphOptionXref,{valueNumber:l.type===1?t[a]:0,valueBoolean:l.type===0?t[a]:!1,valueString:l.type===2?t[a]:""}),i.push(a)))}(n.length!==0||i.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(i),this.F=(this.F===void 0?[]:this.F).concat(n))}};function ln(t){var e,r,n,i,s,o,a;return c(function(l){switch(l.h){case 1:if(!t.u)return l.return();if(!t.F){l.h=2;break}e=L(t.F),r=e.next();case 3:if(r.done){l.h=5;break}return n=r.value,R(l,n(),4);case 4:r=e.next(),l.h=3;break;case 5:t.F=void 0;case 2:if(t.H){for(i=new t.i.GraphOptionChangeRequestList,s=L(t.H),o=s.next();!o.done;o=s.next())a=o.value,i.push_back(a);t.j.changeOptions(i),i.delete(),t.H=void 0}t.u=!1,l.h=0}})}w.initialize=function(){var t=this;return c(function(e){return e.h==1?R(e,sn(t),2):e.h!=3?R(e,an(t),3):R(e,ln(t),0)})};function Zt(t,e){var r,n;return c(function(i){return e in t.L?i.return(t.L[e]):(r=t.locateFile(e,""),n=fetch(r).then(function(s){return s.arrayBuffer()}),t.L[e]=n,i.return(n))})}w.overrideFile=function(t,e){this.j?this.j.overrideFile(t,e):this.D[t]=e},w.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},w.send=function(t,e){var r=this,n,i,s,o,a,l,d,h,j;return c(function(k){switch(k.h){case 1:return r.h.inputs?(n=1e3*(e??performance.now()),R(k,r.I,2)):k.return();case 2:return R(k,r.initialize(),3);case 3:for(i=new r.i.PacketDataList,s=L(Object.keys(t)),o=s.next();!o.done;o=s.next())if(a=o.value,l=r.h.inputs[a]){t:{var m=t[a];switch(l.type){case"video":var _=r.s[l.stream];if(_||(_=new xe(r.i,r.K),r.s[l.stream]=_),_.m===0&&(_.m=_.i.createTexture()),typeof HTMLVideoElement<"u"&&m instanceof HTMLVideoElement)var C=m.videoWidth,z=m.videoHeight;else typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement?(C=m.naturalWidth,z=m.naturalHeight):(C=m.width,z=m.height);z={glName:_.m,width:C,height:z},C=_.h,C.canvas.width=z.width,C.canvas.height=z.height,C.activeTexture(C.TEXTURE0),_.i.bindTexture2d(_.m),C.texImage2D(C.TEXTURE_2D,0,C.RGBA,C.RGBA,C.UNSIGNED_BYTE,m),_.i.bindTexture2d(0),_=z;break t;case"detections":for(_=r.s[l.stream],_||(_=new tn(r.i),r.s[l.stream]=_),_.data||(_.data=new _.h.DetectionListData),_.data.reset(m.length),z=0;z<m.length;++z){C=m[z];var B=_.data,Q=B.setBoundingBox,lt=z,ot=C.la,M=new Vt;if(ht(M,1,ot.sa),ht(M,2,ot.ta),ht(M,3,ot.height),ht(M,4,ot.width),ht(M,5,ot.rotation),pt(M,6,ot.pa),ot=M.l(),Q.call(B,lt,ot),C.ea)for(B=0;B<C.ea.length;++B){M=C.ea[B],Q=_.data,lt=Q.addNormalizedLandmark,ot=z,M=Object.assign({},M,{visibility:M.visibility?M.visibility:0});var J=new Ht;ht(J,1,M.x),ht(J,2,M.y),ht(J,3,M.z),M.visibility&&ht(J,4,M.visibility),M=J.l(),lt.call(Q,ot,M)}if(C.ba)for(B=0;B<C.ba.length;++B)Q=_.data,lt=Q.addClassification,ot=z,M=C.ba[B],J=new Ot,ht(J,2,M.qa),M.index&&pt(J,1,M.index),M.label&&pt(J,3,M.label),M.displayName&&pt(J,4,M.displayName),M=J.l(),lt.call(Q,ot,M)}_=_.data;break t;default:_={}}}switch(d=_,h=l.stream,l.type){case"video":i.pushTexture2d(Object.assign({},d,{stream:h,timestamp:n}));break;case"detections":j=d,j.stream=h,j.timestamp=n,i.pushDetectionList(j);break;default:throw Error("Unknown input config type: '"+l.type+"'")}}return r.j.send(i),R(k,r.I,4);case 4:i.delete(),k.h=0}})};function un(t,e,r){var n,i,s,o,a,l,d,h,j,k,m,_,C,z;return c(function(B){switch(B.h){case 1:if(!r)return B.return(e);for(n={},i=0,s=L(Object.keys(r)),o=s.next();!o.done;o=s.next())a=o.value,l=r[a],typeof l!="string"&&l.type==="texture"&&e[l.stream]!==void 0&&++i;1<i&&(t.M=!1),d=L(Object.keys(r)),o=d.next();case 2:if(o.done){B.h=4;break}if(h=o.value,j=r[h],typeof j=="string")return C=n,z=h,R(B,cn(t,h,e[j]),14);if(k=e[j.stream],j.type==="detection_list"){if(k){for(var Q=k.getRectList(),lt=k.getLandmarksList(),ot=k.getClassificationsList(),M=[],J=0;J<Q.size();++J){var wt=Zr(Q.get(J)),dn=vt(wt,1),pn=vt(wt,2),hn=vt(wt,3),vn=vt(wt,4),yn=vt(wt,5,0),qt=void 0;qt=qt===void 0?0:qt,wt={la:{sa:dn,ta:pn,height:hn,width:vn,rotation:yn,pa:Yt(ct(wt,6),qt)},ea:ge(lt.get(J)),ba:qr(Kr(ot.get(J)))},M.push(wt)}Q=M}else Q=[];n[h]=Q,B.h=7;break}if(j.type==="proto_list"){if(k){for(Q=Array(k.size()),lt=0;lt<k.size();lt++)Q[lt]=k.get(lt);k.delete()}else Q=[];n[h]=Q,B.h=7;break}if(k===void 0){B.h=3;break}if(j.type==="float_list"){n[h]=k,B.h=7;break}if(j.type==="proto"){n[h]=k,B.h=7;break}if(j.type!=="texture")throw Error("Unknown output config type: '"+j.type+"'");return m=t.v[h],m||(m=new xe(t.i,t.K),t.v[h]=m),R(B,vr(m,k,t.M),13);case 13:_=B.i,n[h]=_;case 7:j.transform&&n[h]&&(n[h]=j.transform(n[h])),B.h=3;break;case 14:C[z]=B.i;case 3:o=d.next(),B.h=2;break;case 4:return B.return(n)}})}function cn(t,e,r){var n;return c(function(i){return typeof r=="number"||r instanceof Uint8Array||r instanceof t.i.Uint8BlobList?i.return(r):r instanceof t.i.Texture2dDataOut?(n=t.v[e],n||(n=new xe(t.i,t.K),t.v[e]=n),i.return(vr(n,r,t.M))):i.return(void 0)})}function fn(t,e){for(var r=e.name||"$",n=[].concat(et(e.wants)),i=new t.i.StringList,s=L(e.wants),o=s.next();!o.done;o=s.next())i.push_back(o.value);s=t.i.PacketListener.implement({onResults:function(a){for(var l={},d=0;d<e.wants.length;++d)l[n[d]]=a.get(d);var h=t.listeners[r];h&&(t.I=un(t,l,e.outs).then(function(j){j=h(j);for(var k=0;k<e.wants.length;++k){var m=l[n[k]];typeof m=="object"&&m.hasOwnProperty&&m.hasOwnProperty("delete")&&m.delete()}j&&(t.I=j)}))}}),t.j.attachMultiListener(i,s),i.delete()}w.onResults=function(t,e){this.listeners[e||"$"]=t},W("Solution",be),W("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function mr(t){switch(t===void 0&&(t=0),t){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}function gr(t){var e=this;t=t||{},this.h=new be({locateFile:t.locateFile,files:function(r){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:mr(r.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",transform:ge},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:ge},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(r){var n,i,s;return c(function(o){return o.h==1?(n=mr(r),i="third_party/mediapipe/modules/pose_landmark/"+n,R(o,Zt(e.h,n),2)):(s=o.i,e.h.overrideFile(i,s),o.return(!0))})}},smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}w=gr.prototype,w.reset=function(){this.h.reset()},w.close=function(){return this.h.close(),Promise.resolve()},w.onResults=function(t){this.h.onResults(t)},w.initialize=function(){var t=this;return c(function(e){return R(e,t.h.initialize(),0)})},w.send=function(t,e){var r=this;return c(function(n){return R(n,r.h.send(t,e),0)})},w.setOptions=function(t){this.h.setOptions(t)},W("Pose",gr),W("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]),W("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32}),W("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31}),W("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32}),W("POSE_LANDMARKS_NEUTRAL",{NOSE:0}),W("VERSION","0.5.1675469404")}).call(xt);var wn={};(function(){function w(u){var c=0;return function(){return c<u.length?{done:!1,value:u[c++]}:{done:!0}}}var v=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,c,F){return u==Array.prototype||u==Object.prototype||(u[c]=F.value),u};function T(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof xt=="object"&&xt];for(var c=0;c<u.length;++c){var F=u[c];if(F&&F.Math==Math)return F}throw Error("Cannot find global object")}var S=T(this);function x(u,c){if(c)t:{var F=S;u=u.split(".");for(var E=0;E<u.length-1;E++){var H=u[E];if(!(H in F))break t;F=F[H]}u=u[u.length-1],E=F[u],c=c(E),c!=E&&c!=null&&v(F,u,{configurable:!0,writable:!0,value:c})}}x("Symbol",function(u){function c(W){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new F(E+(W||"")+"_"+H++,W)}function F(W,p){this.g=W,v(this,"description",{configurable:!0,writable:!0,value:p})}if(u)return u;F.prototype.toString=function(){return this.g};var E="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",H=0;return c}),x("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),F=0;F<c.length;F++){var E=S[c[F]];typeof E=="function"&&typeof E.prototype[u]!="function"&&v(E.prototype,u,{configurable:!0,writable:!0,value:function(){return O(w(this))}})}return u});function O(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}function U(u){var c=typeof Symbol<"u"&&Symbol.iterator&&u[Symbol.iterator];return c?c.call(u):{next:w(u)}}function L(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function et(u){if(u.i)throw new TypeError("Generator is already running");u.i=!0}L.prototype.l=function(u){this.o=u};function D(u,c){u.h={F:c,G:!0},u.j=u.m}L.prototype.return=function(u){this.h={return:u},this.j=this.m};function $(u){this.g=new L,this.h=u}function tt(u,c){et(u.g);var F=u.g.g;return F?X(u,"return"in F?F.return:function(E){return{value:E,done:!0}},c,u.g.return):(u.g.return(c),Y(u))}function X(u,c,F,E){try{var H=c.call(u.g.g,F);if(!(H instanceof Object))throw new TypeError("Iterator result "+H+" is not an object");if(!H.done)return u.g.i=!1,H;var W=H.value}catch(p){return u.g.g=null,D(u.g,p),Y(u)}return u.g.g=null,E.call(u.g,W),Y(u)}function Y(u){for(;u.g.j;)try{var c=u.h(u.g);if(c)return u.g.i=!1,{value:c.value,done:!1}}catch(F){u.g.o=void 0,D(u.g,F)}if(u.g.i=!1,u.g.h){if(c=u.g.h,u.g.h=null,c.G)throw c.F;return{value:c.return,done:!0}}return{value:void 0,done:!0}}function f(u){this.next=function(c){return et(u.g),u.g.g?c=X(u,u.g.g.next,c,u.g.l):(u.g.l(c),c=Y(u)),c},this.throw=function(c){return et(u.g),u.g.g?c=X(u,u.g.g.throw,c,u.g.l):(D(u.g,c),c=Y(u)),c},this.return=function(c){return tt(u,c)},this[Symbol.iterator]=function(){return this}}function g(u){function c(E){return u.next(E)}function F(E){return u.throw(E)}return new Promise(function(E,H){function W(p){p.done?E(p.value):Promise.resolve(p.value).then(c,F).then(W,H)}W(u.next())})}x("Promise",function(u){function c(p){this.h=0,this.i=void 0,this.g=[],this.o=!1;var A=this.j();try{p(A.resolve,A.reject)}catch(P){A.reject(P)}}function F(){this.g=null}function E(p){return p instanceof c?p:new c(function(A){A(p)})}if(u)return u;F.prototype.h=function(p){if(this.g==null){this.g=[];var A=this;this.i(function(){A.l()})}this.g.push(p)};var H=S.setTimeout;F.prototype.i=function(p){H(p,0)},F.prototype.l=function(){for(;this.g&&this.g.length;){var p=this.g;this.g=[];for(var A=0;A<p.length;++A){var P=p[A];p[A]=null;try{P()}catch(G){this.j(G)}}}this.g=null},F.prototype.j=function(p){this.i(function(){throw p})},c.prototype.j=function(){function p(G){return function(st){P||(P=!0,G.call(A,st))}}var A=this,P=!1;return{resolve:p(this.A),reject:p(this.l)}},c.prototype.A=function(p){if(p===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(p instanceof c)this.C(p);else{t:switch(typeof p){case"object":var A=p!=null;break t;case"function":A=!0;break t;default:A=!1}A?this.v(p):this.m(p)}},c.prototype.v=function(p){var A=void 0;try{A=p.then}catch(P){this.l(P);return}typeof A=="function"?this.D(A,p):this.m(p)},c.prototype.l=function(p){this.u(2,p)},c.prototype.m=function(p){this.u(1,p)},c.prototype.u=function(p,A){if(this.h!=0)throw Error("Cannot settle("+p+", "+A+"): Promise already settled in state"+this.h);this.h=p,this.i=A,this.h===2&&this.B(),this.H()},c.prototype.B=function(){var p=this;H(function(){if(p.I()){var A=S.console;typeof A<"u"&&A.error(p.i)}},1)},c.prototype.I=function(){if(this.o)return!1;var p=S.CustomEvent,A=S.Event,P=S.dispatchEvent;return typeof P>"u"?!0:(typeof p=="function"?p=new p("unhandledrejection",{cancelable:!0}):typeof A=="function"?p=new A("unhandledrejection",{cancelable:!0}):(p=S.document.createEvent("CustomEvent"),p.initCustomEvent("unhandledrejection",!1,!0,p)),p.promise=this,p.reason=this.i,P(p))},c.prototype.H=function(){if(this.g!=null){for(var p=0;p<this.g.length;++p)W.h(this.g[p]);this.g=null}};var W=new F;return c.prototype.C=function(p){var A=this.j();p.s(A.resolve,A.reject)},c.prototype.D=function(p,A){var P=this.j();try{p.call(A,P.resolve,P.reject)}catch(G){P.reject(G)}},c.prototype.then=function(p,A){function P(at,ut){return typeof at=="function"?function(_t){try{G(at(_t))}catch(Tt){st(Tt)}}:ut}var G,st,Lt=new c(function(at,ut){G=at,st=ut});return this.s(P(p,G),P(A,st)),Lt},c.prototype.catch=function(p){return this.then(void 0,p)},c.prototype.s=function(p,A){function P(){switch(G.h){case 1:p(G.i);break;case 2:A(G.i);break;default:throw Error("Unexpected state: "+G.h)}}var G=this;this.g==null?W.h(P):this.g.push(P),this.o=!0},c.resolve=E,c.reject=function(p){return new c(function(A,P){P(p)})},c.race=function(p){return new c(function(A,P){for(var G=U(p),st=G.next();!st.done;st=G.next())E(st.value).s(A,P)})},c.all=function(p){var A=U(p),P=A.next();return P.done?E([]):new c(function(G,st){function Lt(_t){return function(Tt){at[_t]=Tt,ut--,ut==0&&G(at)}}var at=[],ut=0;do at.push(void 0),ut++,E(P.value).s(Lt(at.length-1),st),P=A.next();while(!P.done)})},c});var y=typeof Object.assign=="function"?Object.assign:function(u,c){for(var F=1;F<arguments.length;F++){var E=arguments[F];if(E)for(var H in E)Object.prototype.hasOwnProperty.call(E,H)&&(u[H]=E[H])}return u};x("Object.assign",function(u){return u||y});var b=this||self,I={facingMode:"user",width:640,height:480};function N(u,c){this.video=u,this.i=0,this.h=Object.assign(Object.assign({},I),c)}N.prototype.stop=function(){var u=this,c,F,E,H;return g(new f(new $(function(W){if(u.g){for(c=u.g.getTracks(),F=U(c),E=F.next();!E.done;E=F.next())H=E.value,H.stop();u.g=void 0}W.j=0})))},N.prototype.start=function(){var u=this,c;return g(new f(new $(function(F){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),c=u.h,F.return(navigator.mediaDevices.getUserMedia({video:{facingMode:c.facingMode,width:c.width,height:c.height}}).then(function(E){Z(u,E)}).catch(function(E){var H="Failed to acquire camera feed: "+E;throw console.error(H),alert(H),E}))})))};function R(u){window.requestAnimationFrame(function(){bt(u)})}function Z(u,c){u.g=c,u.video.srcObject=c,u.video.onloadedmetadata=function(){u.video.play(),R(u)}}function bt(u){var c=null;u.video.paused||u.video.currentTime===u.i||(u.i=u.video.currentTime,c=u.h.onFrame()),c?c.then(function(){R(u)}):R(u)}var nt=["Camera"],q=b;nt[0]in q||typeof q.execScript>"u"||q.execScript("var "+nt[0]);for(var yt;nt.length&&(yt=nt.shift());)nt.length||N===void 0?q[yt]&&q[yt]!==Object.prototype[yt]?q=q[yt]:q=q[yt]={}:q[yt]=N}).call(xt);var wr={};(function(){function w(f){var g=0;return function(){return g<f.length?{done:!1,value:f[g++]}:{done:!0}}}var v=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,g,y){return f==Array.prototype||f==Object.prototype||(f[g]=y.value),f};function T(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof xt=="object"&&xt];for(var g=0;g<f.length;++g){var y=f[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var S=T(this);function x(f,g){if(g)t:{var y=S;f=f.split(".");for(var b=0;b<f.length-1;b++){var I=f[b];if(!(I in y))break t;y=y[I]}f=f[f.length-1],b=y[f],g=g(b),g!=b&&g!=null&&v(y,f,{configurable:!0,writable:!0,value:g})}}function O(f){var g=typeof Symbol<"u"&&Symbol.iterator&&f[Symbol.iterator];return g?g.call(f):{next:w(f)}}var U=typeof Object.assign=="function"?Object.assign:function(f,g){for(var y=1;y<arguments.length;y++){var b=arguments[y];if(b)for(var I in b)Object.prototype.hasOwnProperty.call(b,I)&&(f[I]=b[I])}return f};x("Object.assign",function(f){return f||U}),x("Array.prototype.fill",function(f){return f||function(g,y,b){var I=this.length||0;for(0>y&&(y=Math.max(0,I+y)),(b==null||b>I)&&(b=I),b=Number(b),0>b&&(b=Math.max(0,I+b)),y=Number(y||0);y<b;y++)this[y]=g;return this}});function L(f){return f||Array.prototype.fill}x("Int8Array.prototype.fill",L),x("Uint8Array.prototype.fill",L),x("Uint8ClampedArray.prototype.fill",L),x("Int16Array.prototype.fill",L),x("Uint16Array.prototype.fill",L),x("Int32Array.prototype.fill",L),x("Uint32Array.prototype.fill",L),x("Float32Array.prototype.fill",L),x("Float64Array.prototype.fill",L);var et=this||self;function D(f,g){f=f.split(".");var y=et;f[0]in y||typeof y.execScript>"u"||y.execScript("var "+f[0]);for(var b;f.length&&(b=f.shift());)f.length||g===void 0?y[b]&&y[b]!==Object.prototype[b]?y=y[b]:y=y[b]={}:y[b]=g}var $={color:"white",lineWidth:4,radius:6,visibilityMin:.5};function tt(f){return f=f||{},Object.assign({},$,{fillColor:f.color},f)}function X(f,g){return f instanceof Function?f(g):f}function Y(f,g,y){return Math.max(Math.min(g,y),Math.min(Math.max(g,y),f))}D("clamp",Y),D("drawLandmarks",function(f,g,y){if(g){y=tt(y),f.save();var b=f.canvas,I=0;g=O(g);for(var N=g.next();!N.done;N=g.next())if(N=N.value,N!==void 0&&(N.visibility===void 0||N.visibility>y.visibilityMin)){f.fillStyle=X(y.fillColor,{index:I,from:N}),f.strokeStyle=X(y.color,{index:I,from:N}),f.lineWidth=X(y.lineWidth,{index:I,from:N});var R=new Path2D;R.arc(N.x*b.width,N.y*b.height,X(y.radius,{index:I,from:N}),0,2*Math.PI),f.fill(R),f.stroke(R),++I}f.restore()}}),D("drawConnectors",function(f,g,y,b){if(g&&y){b=tt(b),f.save();var I=f.canvas,N=0;y=O(y);for(var R=y.next();!R.done;R=y.next()){var Z=R.value;f.beginPath(),R=g[Z[0]],Z=g[Z[1]],R&&Z&&(R.visibility===void 0||R.visibility>b.visibilityMin)&&(Z.visibility===void 0||Z.visibility>b.visibilityMin)&&(f.strokeStyle=X(b.color,{index:N,from:R,to:Z}),f.lineWidth=X(b.lineWidth,{index:N,from:R,to:Z}),f.moveTo(R.x*I.width,R.y*I.height),f.lineTo(Z.x*I.width,Z.y*I.height)),++N,f.stroke()}f.restore()}}),D("drawRectangle",function(f,g,y){y=tt(y),f.save();var b=f.canvas;f.beginPath(),f.lineWidth=X(y.lineWidth,{}),f.strokeStyle=X(y.color,{}),f.fillStyle=X(y.fillColor,{}),f.translate(g.xCenter*b.width,g.yCenter*b.height),f.rotate(g.rotation*Math.PI/180),f.rect(-g.width/2*b.width,-g.height/2*b.height,g.width*b.width,g.height*b.height),f.translate(-g.xCenter*b.width,-g.yCenter*b.height),f.stroke(),f.fill(),f.restore()}),D("lerp",function(f,g,y,b,I){return Y(b*(1-(f-g)/(y-g))+I*(1-(y-f)/(y-g)),b,I)})}).call(xt);class kn{constructor(v,T,S){gt(this,"pose");gt(this,"camera",null);gt(this,"videoElement");gt(this,"canvasElement");gt(this,"canvasCtx");gt(this,"audioContext",null);gt(this,"onFocusChange");this.videoElement=v,this.canvasElement=T,this.canvasCtx=T.getContext("2d"),this.onFocusChange=S,this.pose=new br.Pose({locateFile:x=>`https://cdn.jsdelivr.net/npm/@mediapipe/pose/${x}`}),this.pose.setOptions({modelComplexity:1,smoothLandmarks:!0,enableSegmentation:!1,smoothSegmentation:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),this.pose.onResults(x=>this.processResults(x)),window.addEventListener("resize",()=>this.syncCanvasSize()),this.camera=new wn.Camera(v,{onFrame:async()=>{await this.pose.send({image:v})},width:640,height:480})}syncCanvasSize(){this.videoElement.videoWidth&&(this.canvasElement.width=this.videoElement.clientWidth,this.canvasElement.height=this.videoElement.clientHeight)}start(){var v;this.initSilentAudio(),(v=this.camera)==null||v.start()}initSilentAudio(){if(this.audioContext)this.audioContext.state==="suspended"&&this.audioContext.resume();else{this.audioContext=new(window.AudioContext||window.webkitAudioContext);const v=this.audioContext.createOscillator(),T=this.audioContext.createGain();T.gain.value=.001,v.connect(T),T.connect(this.audioContext.destination),v.start()}}stop(){var v;(v=this.camera)==null||v.stop()}processResults(v){if(this.syncCanvasSize(),this.canvasCtx.save(),this.canvasCtx.clearRect(0,0,this.canvasElement.width,this.canvasElement.height),this.canvasCtx.scale(-1,1),this.canvasCtx.translate(-this.canvasElement.width,0),v.poseLandmarks&&(wr.drawConnectors(this.canvasCtx,v.poseLandmarks,br.POSE_CONNECTIONS,{color:"#13EC80",lineWidth:4}),wr.drawLandmarks(this.canvasCtx,v.poseLandmarks,{color:"#FFFFFF",lineWidth:1,radius:3})),this.canvasCtx.restore(),!v.poseLandmarks){this.onFocusChange(!1);return}const T=v.poseLandmarks[7],S=v.poseLandmarks[8],x=v.poseLandmarks[11],O=v.poseLandmarks[12];if(!T||!S||!x||!O){this.onFocusChange(!1);return}const U=(x.y+O.y)/2,et=(T.y+S.y)/2<U&&Math.abs(T.x-S.x)>.03;this.onFocusChange(et)}}const En=w=>{var b,I;w.innerHTML=`
    <div class="flex flex-col h-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div class="flex items-center p-4 pb-2 justify-between sticky top-0 z-10">
        <div class="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start">
          <span class="material-symbols-outlined text-2xl">settings</span>
        </div>
        <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
          STAI 몰입 타이머</h2>
        <div class="flex w-12 items-center justify-end">
          <span class="material-symbols-outlined text-2xl text-primary">help</span>
        </div>
      </div>

      <main class="flex-1 flex flex-col items-center justify-center px-6 gap-8 overflow-y-auto">
        <!-- Warning Badge -->
        <div id="warning-badge" class="w-full max-w-sm flex flex-col items-center gap-3 transition-opacity duration-300 opacity-0">
          <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-500">
            <span class="material-symbols-outlined text-sm">warning</span>
            <span class="text-sm font-bold tracking-tight">거북목 경고: 자세 상태 위험</span>
          </div>
        </div>

        <div class="relative group">
          <!-- Pause Overlay -->
          <div id="pause-overlay" class="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-full timer-blur bg-background-dark/70 border border-red-500/30 transition-all duration-500 opacity-0 pointer-events-none">
            <span class="material-symbols-outlined text-5xl text-white mb-3">pause_circle</span>
            <p class="text-white text-sm font-bold tracking-tight text-center px-6 leading-relaxed">
              타이머 일시정지<br /><span class="text-xs font-normal opacity-80">올바른 자세를 취해주세요</span>
            </p>
          </div>

          <div class="relative flex items-center justify-center w-72 h-72">
            <!-- Camera & Canvas Overlay -->
            <div class="absolute inset-0 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800 z-0">
              <video id="webcam" autoplay playsinline class="w-full h-full object-cover scale-x-[-1]"></video>
              <canvas id="pose-canvas" class="absolute inset-0 w-full h-full"></canvas>
            </div>

            <!-- Progress Ring -->
            <svg class="w-full h-full transform -rotate-90 z-10 pointer-events-none">
              <circle class="text-slate-200/20 dark:text-slate-800/50" cx="144" cy="144" fill="transparent" r="130" stroke="currentColor" stroke-width="8"></circle>
              <circle id="progress-circle" class="text-primary transition-all duration-300" cx="144" cy="144" fill="transparent" r="130" stroke="currentColor" stroke-dasharray="816" stroke-dashoffset="816" stroke-linecap="round" stroke-width="12"></circle>
            </svg>

            <!-- Stats Central -->
            <div class="absolute flex flex-col items-center z-10 pointer-events-none">
              <span class="text-primary text-xs font-bold tracking-widest mb-1 uppercase">STAI 몰입 지수</span>
              <span id="stai-score" class="text-6xl font-bold font-display">--</span>
              <div class="flex items-center gap-1 mt-2 text-slate-400">
                <span class="material-symbols-outlined text-sm">timer</span>
                <span id="time-count" class="text-lg font-medium font-display">00:00</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Dashboard Widgets -->
        <div class="w-full max-w-sm grid grid-cols-2 gap-4">
          <div class="bg-slate-100 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 flex flex-col items-center">
            <span class="text-xs text-slate-500 dark:text-primary/60 font-bold tracking-tight mb-1">몰입 포인트</span>
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-primary text-sm">bolt</span>
              <span id="points" class="text-2xl font-bold font-display">1,240</span>
            </div>
          </div>
          <div class="bg-slate-100 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 flex flex-col items-center">
            <span class="text-xs text-slate-500 dark:text-primary/60 font-bold tracking-tight mb-1">연속 달성</span>
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-orange-400 text-sm">local_fire_department</span>
              <span id="streak" class="text-2xl font-bold font-display">12일</span>
            </div>
          </div>
        </div>

        <!-- Progress Bar & Actions -->
        <div class="w-full max-w-sm flex flex-col gap-4 mb-8">
          <div class="flex flex-col gap-2">
            <div class="flex justify-between text-xs font-bold tracking-tight text-slate-500">
              <span>현재 몰입도</span>
              <span id="focus-level-text" class="text-primary">분석 중...</span>
            </div>
            <div class="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div id="focus-progress-bar" class="h-full bg-primary rounded-full transition-all duration-500" style="width: 0%;"></div>
            </div>
          </div>
          <div class="flex gap-4">
            <button id="stop-btn" class="flex-1 py-4 rounded-xl bg-slate-200 dark:bg-slate-800 font-bold hover:opacity-90 transition-opacity">
              세션 종료
            </button>
            <button id="start-btn" class="flex-[1.5] py-4 rounded-xl bg-primary text-background-dark font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">play_arrow</span>
              몰입 시작
            </button>
          </div>
        </div>
      </main>

      <!-- Bottom Nav -->
      <div class="mt-auto border-t border-slate-200 dark:border-white/10 bg-background-light dark:bg-[#0d1b26] px-4 pb-8 pt-2">
        <div class="flex gap-2">
          <a class="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-primary" href="#/">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined font-variation-fill">timer</span>
            </div>
            <p class="text-[10px] font-bold tracking-tight">몰입</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="#/leaderboard">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined">emoji_events</span>
            </div>
            <p class="text-[10px] font-bold tracking-tight">랭킹</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="#/study-room">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined">groups</span>
            </div>
            <p class="text-[10px] font-bold tracking-tight">공부방</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="#/profile">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined">account_circle</span>
            </div>
            <p class="text-[10px] font-bold tracking-tight">프로필</p>
          </a>
        </div>
      </div>
    </div>
  `;const v=w.querySelector("#webcam"),T=w.querySelector("#pose-canvas"),S=w.querySelector("#pause-overlay"),x=w.querySelector("#warning-badge"),O=w.querySelector("#time-count"),U=w.querySelector("#stai-score"),L=w.querySelector("#progress-circle"),et=w.querySelector("#focus-progress-bar"),D=w.querySelector("#focus-level-text");let $=0,tt=null;const X=816,Y=()=>{T.width=v.clientWidth,T.height=v.clientHeight};v.onloadedmetadata=Y,window.addEventListener("resize",Y);const f=new kn(v,T,N=>{N?(S.style.opacity="0",S.style.pointerEvents="none",x.style.opacity="0",D.textContent="최상",D.classList.replace("text-red-500","text-primary"),tt||g()):(S.style.opacity="1",S.style.pointerEvents="auto",x.style.opacity="1",D.textContent="경고",D.classList.replace("text-primary","text-red-500"),y())}),g=()=>{tt=setInterval(()=>{$++;const N=Math.floor($/60).toString().padStart(2,"0"),R=($%60).toString().padStart(2,"0");O.textContent=`${N}:${R}`;const Z=$%3600/3600,bt=X-Z*X;L.style.strokeDashoffset=bt.toString();const nt=80+Math.floor(Math.random()*20);U.textContent=nt.toString(),et.style.width=`${nt}%`},1e3)},y=()=>{clearInterval(tt),tt=null};(b=w.querySelector("#start-btn"))==null||b.addEventListener("click",()=>{f.start(),w.querySelector("#start-btn").style.opacity="0.5",w.querySelector("#start-btn").disabled=!0,w.querySelector("#start-btn").innerText="몰입 중..."}),(I=w.querySelector("#stop-btn"))==null||I.addEventListener("click",async()=>{var bt;f.stop(),y();const{saveSession:N,auth:R}=await we(async()=>{const{saveSession:nt,auth:q}=await import("./firebase-CfN7CkhM.js");return{saveSession:nt,auth:q}},__vite__mapDeps([0,1]),import.meta.url),Z=((bt=R.currentUser)==null?void 0:bt.uid)||"guest_user";await N(Z,$,parseInt(U.textContent||"0")),alert(`고생하셨습니다! 총 ${$}초 동안 몰입하셨습니다.`),window.location.hash="#/leaderboard"})},An=w=>{w.innerHTML=`
    <div class="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden border-x border-primary/10 shadow-2xl bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div class="sticky top-0 z-20 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between">
        <div class="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 cursor-pointer" onclick="window.location.hash='#/'">
          <span class="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
          상대적 리더보드</h2>
        <div class="flex w-10 items-center justify-end">
          <div class="text-slate-900 dark:text-slate-100 flex size-10 items-center justify-center rounded-full bg-primary/10">
            <span class="material-symbols-outlined">info</span>
          </div>
        </div>
      </div>

      <div class="flex px-4 py-4">
        <div class="flex h-12 flex-1 items-center justify-center rounded-xl bg-primary/10 p-1.5">
          <label class="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 transition-all duration-200 bg-primary text-background-dark font-bold text-sm">
            <span class="truncate">내 주변 라이벌</span>
          </label>
          <label class="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 transition-all duration-200 text-slate-600 dark:text-primary font-bold text-sm">
            <span class="truncate">전체 순위</span>
          </label>
        </div>
      </div>

      <div class="px-4 py-2">
        <div class="flex items-center gap-2 mb-1">
          <span class="material-symbols-outlined text-primary text-sm">location_on</span>
          <h3 class="text-slate-500 dark:text-primary/70 text-xs font-bold uppercase tracking-widest">서울 지역 라이벌</h3>
        </div>
        <p class="text-slate-900 dark:text-slate-100 text-sm font-medium">STAI (초단위 몰입 지수) 기준 순위</p>
      </div>

      <div id="leaderboard-list" class="flex flex-col gap-2 px-4 py-2 flex-grow overflow-y-auto hide-scrollbar">
        <!-- User Rank (My High Score Mockup) -->
        <div class="relative flex items-center gap-4 bg-primary p-4 rounded-xl shadow-lg shadow-primary/20 ring-4 ring-primary/20 my-2">
          <div class="text-background-dark font-black w-6 text-sm italic">121</div>
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 border-background-dark"
            style="background-image: url('https://api.dicebear.com/7.x/avataaars/svg?seed=Me')">
          </div>
          <div class="flex flex-col flex-1">
            <div class="flex items-center gap-2">
              <p class="text-background-dark text-lg font-black uppercase">나 (김몰입)</p>
              <span class="bg-background-dark text-primary text-[10px] px-1.5 py-0.5 rounded font-black tracking-widest">활동 중</span>
            </div>
            <p class="text-background-dark/70 text-xs font-bold">자세 유지: 98%</p>
          </div>
          <div class="text-right">
            <p class="text-background-dark text-xl font-black">145</p>
            <p class="text-background-dark/60 text-[10px] uppercase font-bold tracking-tighter">STAI</p>
          </div>
        </div>

        <!-- Rival Items -->
        ${[1,2,3,4,5].map(v=>`
          <div class="flex items-center gap-4 bg-white dark:bg-slate-800/40 p-4 rounded-xl border border-primary/5 shadow-sm">
            <div class="text-slate-400 dark:text-slate-500 font-bold w-6 text-sm">${115+v}</div>
            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-12 w-12 border-2 border-slate-200 dark:border-primary/20"
              style="background-image: url('https://api.dicebear.com/7.x/avataaars/svg?seed=User${v}')">
            </div>
            <div class="flex flex-col flex-1">
              <p class="text-slate-900 dark:text-slate-100 text-base font-bold">User ${v}</p>
              <div class="flex items-center gap-1">
                <span class="size-2 rounded-full ${v%2===0?"bg-primary animate-pulse":"bg-slate-300"}"></span>
                <p class="${v%2===0?"text-primary":"text-slate-500"} text-xs">${v%2===0?"현재 몰입 중":"2시간 전"}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-primary text-sm font-bold">${150-v*5}</p>
              <p class="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">STAI</p>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Bottom Nav -->
      <nav class="mt-auto border-t border-primary/10 bg-background-light dark:bg-background-dark px-4 pb-8 pt-2">
        <div class="flex gap-2">
          <a class="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-slate-500 dark:text-primary/40" href="#/">
            <span class="material-symbols-outlined">timer</span>
            <p class="text-[10px] font-bold uppercase tracking-wider">몰입</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-primary border-t-2 border-primary" href="#/leaderboard">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">groups</span>
            <p class="text-[10px] font-bold uppercase tracking-wider">라이벌</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-slate-500 dark:text-primary/40" href="#/study-room">
            <span class="material-symbols-outlined">grid_view</span>
            <p class="text-[10px] font-bold uppercase tracking-wider">공부방</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-slate-500 dark:text-primary/40" href="#/profile">
            <span class="material-symbols-outlined">person</span>
            <p class="text-[10px] font-bold uppercase tracking-wider">프로필</p>
          </a>
        </div>
      </nav>
    </div>
  `},jn=w=>{w.innerHTML=`
    <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden">
      <header class="flex items-center justify-between p-4 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button class="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-primary/10 transition-colors" onclick="window.location.hash='#/'">
          <span class="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back_ios_new</span>
        </button>
        <div class="flex flex-col items-center text-center">
          <h1 class="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 uppercase text-[10px] opacity-60">세션 활성 중</h1>
          <h2 class="text-xl font-bold text-primary font-display">가상 집중 공부방</h2>
        </div>
        <button class="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-primary/10 transition-colors">
          <span class="material-symbols-outlined text-slate-900 dark:text-slate-100">settings</span>
        </button>
      </header>

      <main class="flex-1 overflow-y-auto px-4 pb-24 h-full">
        <div class="flex gap-3 my-6">
          <div class="flex-1 timer-blur bg-primary/5 rounded-xl p-4 flex flex-col gap-1 border border-primary/20">
            <p class="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">나의 STAI 지수</p>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold text-slate-900 dark:text-slate-100 font-display">0.94</span>
              <span class="text-primary text-xs font-bold">최고조</span>
            </div>
            <div class="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
              <div class="bg-primary h-full w-[94%]"></div>
            </div>
          </div>
          <div class="flex-1 timer-blur bg-primary/5 rounded-xl p-4 flex flex-col gap-1 border border-primary/20">
            <p class="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">공부방 분위기</p>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-bold text-slate-900 dark:text-slate-100">높음</span>
              <span class="text-primary text-xs font-bold">+5%</span>
            </div>
            <div class="flex gap-1 mt-2">
              <div class="h-1 flex-1 bg-primary rounded-full"></div>
              <div class="h-1 flex-1 bg-primary rounded-full"></div>
              <div class="h-1 flex-1 bg-primary rounded-full"></div>
              <div class="h-1 flex-1 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mb-4">
          <h3 class="font-bold text-lg">바디 더블링 현황</h3>
          <span class="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full font-bold">라이무</span>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <!-- My Profile card in grid -->
          <div class="flex flex-col items-center gap-2 group">
            <div class="relative w-20 h-20 rounded-full border-2 border-primary shadow-[0_0_15px_rgba(19,236,128,0.4)] p-1">
              <div class="w-full h-full rounded-full bg-cover bg-center overflow-hidden"
                style="background-image: url('https://api.dicebear.com/7.x/avataaars/svg?seed=Me')">
              </div>
              <div class="absolute -bottom-1 -right-1 bg-primary text-background-dark text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase">나</div>
            </div>
            <p class="text-xs font-medium opacity-80">Me</p>
          </div>

          <!-- Other rivals -->
          ${[1,2,3,4,5,6,7].map(v=>`
            <div class="flex flex-col items-center gap-2">
              <div class="relative w-20 h-20 rounded-full border-2 border-primary/40 p-1">
                <div class="w-full h-full rounded-full bg-cover bg-center grayscale opacity-80 overflow-hidden"
                  style="background-image: url('https://api.dicebear.com/7.x/avataaars/svg?seed=Rival${v}')">
                </div>
              </div>
              <p class="text-xs font-medium opacity-60">Rival ${v}</p>
            </div>
          `).join("")}
          
          <div class="flex flex-col items-center gap-2">
            <div class="w-20 h-20 rounded-full border-2 border-dashed border-primary/10 flex items-center justify-center">
              <span class="material-symbols-outlined text-primary/20 scale-150">add</span>
            </div>
            <p class="text-[10px] font-medium text-primary/30 uppercase tracking-tighter">친구 초대</p>
          </div>
        </div>

        <div class="mt-8 flex justify-center">
          <div class="timer-blur bg-primary/5 px-5 py-3 rounded-full flex items-center gap-3 border border-primary/30">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <p class="text-sm font-medium">
              <span class="opacity-60">시스템:</span> 현재 42명이 함께 몰입하고 있습니다
            </p>
          </div>
        </div>
      </main>

      <nav class="fixed bottom-0 left-0 right-0 timer-blur bg-background-light/90 dark:bg-background-dark/90 border-t border-primary/10 px-6 pb-8 pt-4 z-50">
        <div class="flex justify-between items-center max-w-md mx-auto">
          <a class="flex flex-col items-center gap-1 text-primary" href="#/study-room">
            <span class="material-symbols-outlined font-variation-fill">grid_view</span>
            <span class="text-[10px] font-bold uppercase">공부방</span>
          </a>
          <a class="flex flex-col items-center gap-1 text-slate-400" href="#/leaderboard">
            <span class="material-symbols-outlined">emoji_events</span>
            <span class="text-[10px] font-bold uppercase">랭킹</span>
          </a>
          <div class="relative -top-10">
            <button class="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 border-4 border-background-dark" onclick="window.location.hash='#/'">
              <span class="material-symbols-outlined text-background-dark font-bold text-3xl">play_arrow</span>
            </button>
          </div>
          <a class="flex flex-col items-center gap-1 text-slate-400" href="#" onclick="alert('준비 중입니다!')">
            <span class="material-symbols-outlined">group</span>
            <span class="text-[10px] font-bold uppercase">친구</span>
          </a>
          <a class="flex flex-col items-center gap-1 text-slate-400" href="#/profile">
            <span class="material-symbols-outlined">person</span>
            <span class="text-[10px] font-bold uppercase">프로필</span>
          </a>
        </div>
      </nav>
    </div>
  `},_n=w=>{w.innerHTML=`
    <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header class="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200/10">
        <button class="flex items-center justify-center size-10 rounded-full bg-slate-200/50 dark:bg-primary/10 text-slate-900 dark:text-primary" onclick="window.location.hash='#/'">
          <span class="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 class="text-xl font-bold tracking-tight">사용자 프로필 등록</h1>
        <div class="size-10"></div>
      </header>
      <main class="flex-1 px-6 pt-4 pb-12 max-w-md mx-auto w-full">
        <section class="flex flex-col items-center mb-10">
          <div class="relative group">
            <div class="size-40 rounded-full bg-gradient-to-tr from-primary/20 to-primary/40 p-1 mb-4 shadow-[0_0_30px_rgba(37,244,157,0.2)]">
              <div class="size-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-primary/30">
                <img alt="3D Avatar" class="size-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                  src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=STAI" />
              </div>
            </div>
            <button class="absolute bottom-2 right-2 bg-primary text-background-dark size-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
              <span class="material-symbols-outlined font-bold">photo_camera</span>
            </button>
          </div>
          <div class="text-center mt-2">
            <h2 class="text-2xl font-bold font-display">동반 캐릭터 선택</h2>
            <p class="text-slate-500 dark:text-primary/70 text-sm">함께 학습할 3D 파트너를 선택하세요</p>
          </div>
        </section>
        <form class="space-y-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-primary/60 px-1" for="nickname">닉네임</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-primary/40">person</span>
              <input class="w-full h-16 pl-12 pr-4 bg-white dark:bg-slate-800/40 border-2 border-slate-200 dark:border-primary/20 rounded-xl focus:border-primary focus:ring-0 text-lg font-medium transition-all"
                id="nickname" placeholder="어떤 이름으로 불러드릴까요?" type="text" value="김몰입" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-primary/60 px-1" for="focus-goal">집중 목표</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-primary/40">target</span>
              <select class="w-full h-16 pl-12 pr-12 bg-white dark:bg-slate-800/40 border-2 border-slate-200 dark:border-primary/20 rounded-xl focus:border-primary focus:ring-0 text-lg font-medium transition-all appearance-none" id="focus-goal">
                <option value="exam">자격증 및 시험 공부</option>
                <option value="coding" selected>소프트웨어 개발/코딩</option>
                <option value="reading">독서 및 자료 조사</option>
              </select>
            </div>
          </div>
        </form>

        <!-- Premium Membership Link -->
        <a href="#/subscription" class="mt-8 block p-5 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 group hover:border-primary transition-all duration-300">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="size-12 rounded-xl bg-primary flex items-center justify-center text-background-dark shadow-[0_0_15px_rgba(19,236,128,0.3)]">
                <span class="material-symbols-outlined font-black">workspace_premium</span>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-slate-100 italic">STAI 프리미엄 멤버십</h4>
                <p class="text-xs text-slate-500 dark:text-primary/70 font-medium">더 심층적인 AI 분석 리포트 확인</p>
              </div>
            </div>
            <span class="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </a>

        <div class="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary">analytics</span>
            <div>
              <h4 class="font-bold text-primary text-sm uppercase">STAI 지수 활성화됨</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                시스템이 사용자의 몰입 상태를 최적으로 분석하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer class="p-6 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent">
        <button class="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold text-lg h-16 rounded-2xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2" onclick="window.location.hash='#/'">
          <span>설정 저장 및 시작</span>
          <span class="material-symbols-outlined">bolt</span>
        </button>
      </footer>
    </div>
  `},Tn=(w,v)=>{const T=window.paypal;if(!T){console.error("PayPal SDK not loaded");return}T.Buttons({createOrder:(S,x)=>x.order.create({purchase_units:[{amount:{value:v}}]}),onApprove:async(S,x)=>{const O=await x.order.capture();console.log("Payment Approved:",O)}}).render(`#${w}`)},Sn=w=>{w.innerHTML=`
    <div class="relative flex h-full min-h-screen w-full max-w-[430px] flex-col bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl mx-auto text-slate-900 dark:text-slate-100">
      <div class="flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 p-4 justify-between border-b border-primary/10">
        <div class="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors cursor-pointer" onclick="window.location.hash='#/profile'">
          <span class="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
          STAI 프리미엄</h2>
        <div class="size-10"></div>
      </div>

      <div class="relative px-4 pt-6 pb-4">
        <div class="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-primary/20 flex items-center justify-center group">
          <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
          <img class="absolute inset-0 w-full h-full object-cover grayscale opacity-50" src="https://api.dicebear.com/7.x/identicon/svg?seed=Premium" />
          <div class="relative z-20 text-center px-4">
            <span class="inline-block px-3 py-1 bg-primary text-background-dark text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">PRO ACCESS</span>
            <h1 class="text-white text-3xl font-bold leading-tight font-display">최고의 몰입 시작하기</h1>
          </div>
        </div>
      </div>

      <div class="px-4 space-y-3 mb-8">
        <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-primary/10">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <span class="material-symbols-outlined">accessibility_new</span>
          </div>
          <div>
            <h3 class="font-bold">고도화된 자세 AI</h3>
            <p class="text-sm opacity-60">실시간 자세 교정으로 피로를 방지하고 몰입을 유지합니다.</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-primary/10">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <span class="material-symbols-outlined">analytics</span>
          </div>
          <div>
            <h3 class="font-bold">심층 통계 리포트</h3>
            <p class="text-sm opacity-60">주간 몰입 지수를 분석하여 최적의 시간을 추천합니다.</p>
          </div>
        </div>
      </div>

      <div class="px-4 space-y-4 mb-32">
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-primary shadow-lg flex justify-between items-center cursor-pointer" id="paypal-plan-monthly">
           <div class="absolute -top-3 right-6 bg-primary text-background-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase">선택됨</div>
          <div>
            <p class="text-primary text-xs font-semibold uppercase tracking-wider">월간 구독</p>
            <h4 class="text-2xl font-bold font-display">₩12,000<span class="text-sm font-normal opacity-50">/월</span></h4>
          </div>
          <div class="size-6 rounded-full border-2 border-primary bg-primary flex items-center justify-center">
            <div class="size-2 rounded-full bg-background-dark"></div>
          </div>
        </div>
        <div id="paypal-button-container" class="mt-4"></div>
      </div>
    </div>
  `,setTimeout(()=>{Tn("paypal-button-container","12000")},300)};class On{constructor(){gt(this,"appElement");this.appElement=document.querySelector("#app"),window.addEventListener("hashchange",()=>this.handleRoute()),this.initApp()}async initApp(){try{const{auth:v}=await we(async()=>{const{auth:T}=await import("./firebase-CfN7CkhM.js");return{auth:T}},__vite__mapDeps([0,1]),import.meta.url);if(v){const{signInAnonymously:T}=await we(async()=>{const{signInAnonymously:S}=await import("./index.esm-9zF9TOPL.js").then(x=>x.k);return{signInAnonymously:S}},[],import.meta.url);await T(v).catch(S=>console.warn("Firebase Auth failed:",S))}}catch(v){console.warn("Firebase module load failed:",v)}document.body.addEventListener("click",v=>{var S;const T=v.target.closest("a");T&&((S=T.getAttribute("href"))!=null&&S.startsWith("#/"))}),(!window.location.hash||window.location.hash==="#")&&(window.location.hash="#/"),this.handleRoute()}handleRoute(){const T=(window.location.hash||"#/").replace(/^#/,"");switch(window.scrollTo(0,0),this.appElement.innerHTML="",T){case"/":En(this.appElement);break;case"/leaderboard":An(this.appElement);break;case"/study-room":jn(this.appElement);break;case"/profile":_n(this.appElement);break;case"/subscription":Sn(this.appElement);break;default:window.location.hash="#/";return}this.updateNavStatus(T)}updateNavStatus(v){document.querySelectorAll("a[href]").forEach(S=>{const x=S.getAttribute("href");if(x===`#${v}`||v==="/"&&x==="#/"){S.classList.add("text-primary"),S.classList.remove("text-slate-400","text-slate-500");const U=S.querySelector(".material-symbols-outlined");U&&U.classList.add("font-variation-fill")}else{S.classList.remove("text-primary"),S.classList.add("text-slate-400");const U=S.querySelector(".material-symbols-outlined");U&&U.classList.remove("font-variation-fill")}})}navigateTo(v){window.location.hash=`#${v}`}}new On;
