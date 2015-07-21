/* Modernizr 2.8.0 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.0",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/**
 * h5Validate
 * @version v0.9.0
 * Using semantic versioning: http://semver.org/
 * @author Eric Hamilton http://ericleads.com/
 * @copyright 2010 - 2012 Eric Hamilton
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Developed under the sponsorship of RootMusic, Zumba Fitness, LLC, and Rese Property Management
 */

/*global jQuery, window, console */
(function ($) {
  'use strict';
  var console = window.console || function () {},
    h5 = { // Public API
      defaults : {
        debug: false,

        RODom: false,

        // HTML5-compatible validation pattern library that can be extended and/or overriden.
        patternLibrary : { //** TODO: Test the new regex patterns. Should I apply these to the new input types?
          // **TODO: password
          phone: /([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9A-Za-z \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)/,

          // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
          email: /((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?/,

          // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/iri/
          url: /(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,

          // Number, including positive, negative, and floating decimal. Credit: bassistance
          number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/,

          // Date in ISO format. Credit: bassistance
          dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,

          alpha: /[a-zA-Z]+/,
          alphaNumeric: /\w+/,
          integer: /-?\d+/
        },

        // The prefix to use for dynamically-created class names.
        classPrefix: 'h5-',

        errorClass: 'ui-state-error', // No prefix for these.
        validClass: 'ui-state-valid', // "
        activeClass: 'active', // Prefix will get prepended.
        requiredClass: 'required',
        requiredAttribute: 'required',
        patternAttribute: 'pattern',

        // Attribute which stores the ID of the error container element (without the hash).
        errorAttribute: 'data-h5-errorid',

        // Events API
        customEvents: {
          'validate': true
        },

        // Setup KB event delegation.
        kbSelectors: ':input:not(:button):not(:disabled):not(.novalidate)',
        focusout: true,
        focusin: false,
        change: true,
        keyup: false,
        activeKeyup: true,

        // Setup mouse event delegation.
        mSelectors: '[type="range"]:not(:disabled):not(.novalidate), :radio:not(:disabled):not(.novalidate), :checkbox:not(:disabled):not(.novalidate), select:not(:disabled):not(.novalidate), option:not(:disabled):not(.novalidate)',
        click: true,

        // What do we name the required .data variable?
        requiredVar: 'h5-required',

        // What do we name the pattern .data variable?
        patternVar: 'h5-pattern',
        stripMarkup: true,

        // Run submit related checks and prevent form submission if any fields are invalid?
        submit: true,

        // Move focus to the first invalid field on submit?
        focusFirstInvalidElementOnSubmit: true,

        // When submitting, validate elements that haven't been validated yet?
        validateOnSubmit: true,

        // Callback stubs
        invalidCallback: function () {},
        validCallback: function () {},

        // Elements to validate with allValid (only validating visible elements)
        allValidSelectors: ':input:visible:not(:button):not(:disabled):not(.novalidate)',

        // Mark field invalid.
        // ** TODO: Highlight labels
        // ** TODO: Implement setCustomValidity as per the spec:
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#dom-cva-setcustomvalidity
        markInvalid: function markInvalid(options) {
          var $element = $(options.element),
            $errorID = $(options.errorID);
          $element.addClass(options.errorClass).removeClass(options.validClass);

          // User needs help. Enable active validation.
          $element.addClass(options.settings.activeClass);

          if ($errorID.length) { // These ifs are technically not needed, but improve server-side performance 
            if ($element.attr('title')) {
              $errorID.text($element.attr('title'));
            }
            $errorID.show();
          }
          $element.data('valid', false);
          options.settings.invalidCallback.call(options.element, options.validity);
          return $element;
        },

        // Mark field valid.
        markValid: function markValid(options) {
          var $element = $(options.element),
            $errorID = $(options.errorID);

          $element.addClass(options.validClass).removeClass(options.errorClass);
          if ($errorID.length) {
            $errorID.hide();
          }
          $element.data('valid', true);
          options.settings.validCallback.call(options.element, options.validity);
          return $element;
        },

        // Unmark field
        unmark: function unmark(options) {
          var $element = $(options.element);
          $element.removeClass(options.errorClass).removeClass(options.validClass);
          $element.form.find("#" + options.element.id).removeClass(options.errorClass).removeClass(options.validClass);
          return $element;
        }
      }
    },

    // Aliases
    defaults = h5.defaults,
    patternLibrary = defaults.patternLibrary,

    createValidity = function createValidity(validity) {
      return $.extend({
        customError: validity.customError || false,
        patternMismatch: validity.patternMismatch || false,
        rangeOverflow: validity.rangeOverflow || false,
        rangeUnderflow: validity.rangeUnderflow || false,
        stepMismatch: validity.stepMismatch || false,
        tooLong: validity.tooLong || false,
        typeMismatch: validity.typeMismatch || false,
        valid: validity.valid || true,
        valueMissing: validity.valueMissing || false
      }, validity);
    },

    methods = {
      /**
       * Check the validity of the current field
       * @param  {object}  settings   instance settings
       * @param  {object}  options
       *      .revalidate - trigger validation function first?
       * @return {Boolean}
       */
      isValid: function (settings, options) {
        var $this = $(this);

        options = (settings && options) || {};

        // Revalidate defaults to true
        if (options.revalidate !== false) {
          $this.trigger('validate');
        }

        return $this.data('valid'); // get the validation result
      },
      allValid: function (config, options) {
        var valid = true,
          formValidity = [],
          $this = $(this),
          $allFields,
          $filteredFields,
          radioNames = [],
          getValidity = function getValidity(e, data) {
            data.e = e;
            formValidity.push(data);
          },
          settings = $.extend({}, config, options); // allow options to override settings

        options = options || {};

        $this.trigger('formValidate', {settings: $.extend(true, {}, settings)});

        // Make sure we're not triggering handlers more than we need to.
        $this.undelegate(settings.allValidSelectors,
          '.allValid', getValidity);
        $this.delegate(settings.allValidSelectors,
          'validated.allValid', getValidity);

        $allFields = $this.find(settings.allValidSelectors);

        // Filter radio buttons with the same name and keep only one,
        // since they will be checked as a group by isValid()
        $filteredFields = $allFields.filter(function(index) {
          var name;

          if(this.tagName === "INPUT"
            && this.type === "radio") {
            name = this.name;
            if(radioNames[name] === true) {
              return false;
            }
            radioNames[name] = true;
          }
          return true;
        });

        $filteredFields.each(function () {
          var $this = $(this);
          valid = $this.h5Validate('isValid', options) && valid;
        });

        $this.trigger('formValidated', {valid: valid, elements: formValidity});
        return valid;
      },
      validate: function (settings) {
        // Get the HTML5 pattern attribute if it exists.
        // ** TODO: If a pattern class exists, grab the pattern from the patternLibrary, but the pattern attrib should override that value.
        var $this = $(this),
          pattern = $this.filter('[pattern]')[0] ? $this.attr('pattern') : false,

          // The pattern attribute must match the whole value, not just a subset:
          // "...as if it implied a ^(?: at the start of the pattern and a )$ at the end."
          re = new RegExp('^(?:' + pattern + ')$'),
          $radiosWithSameName = null,
          value = ($this.is('[type=checkbox]')) ?
              $this.is(':checked') : ($this.is('[type=radio]') ?
                // Cache all radio buttons (in the same form) with the same name as this one
                ($radiosWithSameName = $this.parents('form')
                  // **TODO: escape the radio buttons' name before using it in the jQuery selector
                  .find('input[name="' + $this.attr('name') + '"]'))
                  .filter(':checked')
                  .length > 0 : $this.val()),
          errorClass = settings.errorClass,
          validClass = settings.validClass,
          errorIDbare = $this.attr(settings.errorAttribute) || false, // Get the ID of the error element.
          errorID = errorIDbare ? '#' + errorIDbare.replace(/(:|\.|\[|\])/g,'\\$1') : false, // Add the hash for convenience. This is done in two steps to avoid two attribute lookups.
          required = false,
          validity = createValidity({element: this, valid: true}),
          $checkRequired = $('<input required>'),
          maxlength;

        /*  If the required attribute exists, set it required to true, unless it's set 'false'.
        *   This is a minor deviation from the spec, but it seems some browsers have falsey 
        *   required values if the attribute is empty (should be true). The more conformant 
        *   version of this failed sanity checking in the browser environment.
        *   This plugin is meant to be practical, not ideologically married to the spec.
        */
        // Feature fork
        if ($checkRequired.filter('[required]') && $checkRequired.filter('[required]').length) {
          required = ($this.filter('[required]').length && $this.attr('required') !== 'false');
        } else {
          required = ($this.attr('required') !== undefined);
        }

        if (settings.debug && window.console) {
          console.log('Validate called on "' + value + '" with regex "' + re + '". Required: ' + required); // **DEBUG
          console.log('Regex test: ' + re.test(value) + ', Pattern: ' + pattern); // **DEBUG
        }

        maxlength = parseInt($this.attr('maxlength'), 10);
        if (!isNaN(maxlength) && value.length > maxlength) {
            validity.valid = false; 
            validity.tooLong = true;
        }

        if (required && !value) {
          validity.valid = false;
          validity.valueMissing = true;
        } else if (pattern && !re.test(value) && value) {
          validity.valid = false;
          validity.patternMismatch = true;
        } else {
          if (!settings.RODom) {
            settings.markValid({
              element: this,
              validity: validity,
              errorClass: errorClass,
              validClass: validClass,
              errorID: errorID,
              settings: settings
            });
          }
        }

        if (!validity.valid) {
          if (!settings.RODom) {
            settings.markInvalid({
              element: this,
              validity: validity,
              errorClass: errorClass,
              validClass: validClass,
              errorID: errorID,
              settings: settings
            });
          }
        }
        $this.trigger('validated', validity);

        // If it's a radio button, also validate the other radio buttons with the same name
        // (while making sure the call is not recursive)
        if($radiosWithSameName !== null
          && settings.alreadyCheckingRelatedRadioButtons !== true) {

          settings.alreadyCheckingRelatedRadioButtons = true;

          $radiosWithSameName
            .not($this)
            .trigger('validate');

          settings.alreadyCheckingRelatedRadioButtons = false;

        }
      },

      /**
       * Take the event preferences and delegate the events to selected
       * objects.
       * 
       * @param {object} eventFlags The object containing event flags.
       * 
       * @returns {element} The passed element (for method chaining).
       */
      delegateEvents: function (selectors, eventFlags, element, settings) {
        var events = {},
          key = 0,
          validate = function () {
            settings.validate.call(this, settings);
          };
        $.each(eventFlags, function (key, value) {
          if (value) {
            events[key] = key;
          }
        });
        // key = 0;
        for (key in events) {
          if (events.hasOwnProperty(key)) {
            $(element).delegate(selectors, events[key] + '.h5Validate', validate);
          }
        }
        return element;
      },
      /**
       * Prepare for event delegation.
       * 
       * @param {object} settings The full plugin state, including
       * options. 
       * 
       * @returns {object} jQuery object for chaining.
       */
      bindDelegation: function (settings) {
        var $this = $(this),
          $forms;
        // Attach patterns from the library to elements.
        // **TODO: pattern / validation method matching should
        // take place inside the validate action.
        $.each(patternLibrary, function (key, value) {
          var pattern = value.toString();
          pattern = pattern.substring(1, pattern.length - 1);
          $('.' + settings.classPrefix + key).attr('pattern', pattern);
        });

        $forms = $this.filter('form')
            .add($this.find('form'))
            .add($this.parents('form'));

        $forms
          .attr('novalidate', 'novalidate')
          .submit(checkValidityOnSubmitHandler);
          
        $forms.find("input[formnovalidate][type='submit']").click(function(){
          $(this).closest("form").unbind('submit', checkValidityOnSubmitHandler);
        });

        return this.each(function () {
          var kbEvents = {
              focusout: settings.focusout,
              focusin: settings.focusin,
              change: settings.change,
              keyup: settings.keyup
            },
            mEvents = {
              click: settings.click
            },
            activeEvents = {
              keyup: settings.activeKeyup
            };

          settings.delegateEvents(':input', settings.customEvents, this, settings);
          settings.delegateEvents(settings.kbSelectors, kbEvents, this, settings);
          settings.delegateEvents(settings.mSelectors, mEvents, this, settings);
          settings.delegateEvents(settings.activeClassSelector, activeEvents, this, settings);
          settings.delegateEvents('textarea[maxlength]', {keyup: true}, this, settings);
        });
      }
    },

    /**
     * Event handler for the form submit event.
     * When settings.submit is enabled:
     *  - prevents submission if any invalid fields are found.
     *  - Optionally validates all fields.
     *  - Optionally moves focus to the first invalid field.
     * 
     * @param {object} evt The jQuery Event object as from the submit event. 
     * 
     * @returns {object} undefined if no validation was done, true if validation passed, false if validation didn't.
     */
    checkValidityOnSubmitHandler = function(evt) {

      var $this,
        settings = getInstance.call(this),
        allValid;

      if(settings.submit !== true) {
        return;
      }

      $this = $(this);
      allValid = $this.h5Validate('allValid', { revalidate: settings.validateOnSubmit === true });

      if(allValid !== true) {
        evt.preventDefault();

        if(settings.focusFirstInvalidElementOnSubmit === true){
          var $invalid = $(settings.allValidSelectors, $this)
                  .filter(function(index){
                    return $(this).h5Validate('isValid', { revalidate: false }) !== true;
                  });

          $invalid.first().focus();
        }
      }

      return allValid;
    },

    instances = [],

    buildSettings = function buildSettings(options) {
      // Combine defaults and options to get current settings.
      var settings = $.extend({}, defaults, options, methods),
        activeClass = settings.classPrefix + settings.activeClass;

      return $.extend(settings, {
        activeClass: activeClass,
        activeClassSelector: '.' + activeClass,
        requiredClass: settings.classPrefix + settings.requiredClass,
        el: this
      });
    },

    getInstance = function getInstance() {
      var $parent = $(this).closest('[data-h5-instanceId]');
      return instances[$parent.attr('data-h5-instanceId')];
    },

    setInstance = function setInstance(settings) {
      var instanceId = instances.push(settings) - 1;
      if (settings.RODom !== true) {
        $(this).attr('data-h5-instanceId', instanceId);
      }
      $(this).trigger('instance', { 'data-h5-instanceId': instanceId });
    };

  $.h5Validate = {
    /**
     * Take a map of pattern names and HTML5-compatible regular
     * expressions, and add them to the patternLibrary. Patterns in
     * the library are automatically assigned to HTML element pattern
     * attributes for validation.
     * 
     * @param {Object} patterns A map of pattern names and HTML5 compatible
     * regular expressions.
     * 
     * @returns {Object} patternLibrary The modified pattern library
     */
    addPatterns: function (patterns) {
      var patternLibrary = defaults.patternLibrary,
        key;
      for (key in patterns) {
        if (patterns.hasOwnProperty(key)) {
          patternLibrary[key] = patterns[key];
        }
      }
      return patternLibrary;
    },
    /**
     * Take a valid jQuery selector, and a list of valid values to
     * validate against.
     * If the user input isn't in the list, validation fails.
     * 
     * @param {String} selector Any valid jQuery selector.
     *
     * @param {Array} values A list of valid values to validate selected 
     * fields against.
     */
    validValues: function (selector, values) {
      var i = 0,
        ln = values.length,
        pattern = '',
        re;
      // Build regex pattern
      for (i = 0; i < ln; i += 1) {
        pattern = pattern ? pattern + '|' + values[i] : values[i];
      }
      re = new RegExp('^(?:' + pattern + ')$');
      $(selector).data('regex', re);
    }
  };

  $.fn.h5Validate = function h5Validate(options) {
    var action,
      args,
      settings;

    if (typeof options === 'string' && typeof methods[options] === 'function') {
      // Whoah, hold on there! First we need to get the instance:
      settings = getInstance.call(this);

      args = [].slice.call(arguments, 0);
      action = options;
      args.shift();
      args = $.merge([settings], args);

      // Use settings here so we can plug methods into the instance dynamically?
      return settings[action].apply(this, args);
    }

    settings = buildSettings.call(this, options);
    setInstance.call(this, settings);

    // Returning the jQuery object allows for method chaining.
    return methods.bindDelegation.call(this, settings);
  };
}(jQuery));