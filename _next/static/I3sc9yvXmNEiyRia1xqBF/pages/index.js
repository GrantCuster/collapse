(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(i.AmpStateContext))}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,o=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=s},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),s=n("lwAK"),a=n("FYa8"),u=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var a=0,u=f.length;a<u;a++){var c=f[a];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var l=o.props[c],d=r[c]||new Set;d.has(l)?i=!1:(d.add(l),r[c]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var h=i.default();function p(e){var t=e.children;return o.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}p.rewind=h.rewind,t.default=p},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},MX0m:function(e,t,n){e.exports=n("3niX")},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||i()}},RNiq:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(t);var i=n("MX0m"),s=n.n(i),a=n("8Kt/"),u=n.n(a),c=n("q1tI"),l=n.n(c),f=n("LvDl"),d=l.a.createElement,h=16;function p(e){return e.map((function(e){return e*h}))}var m=function(){return d("div",{style:{height:h,width:"100%"}})},v=function(){return d("div",{style:{width:h/2}})},y=function(e){var t=e.label,n=(e.clearer,e.trigger),r=e.text_label,o=(e.press_gates,e.custom_style),i={fontFamily:"inherit",fontSize:"inherit",lineHeight:"inherit",border:"none",padding:0,margin:0,width:h,background:"black",color:"white",display:"block"};return void 0!==o&&(i=Object.assign(i,o)),d("div",{style:{display:"flex"}},d("button",{style:i,onMouseDown:function(e){n()}},t),void 0!==r?d("div",{style:{display:"flex",cursor:"default"},onMouseDown:function(e){n()}},d(v,null),d("div",null,r)):null)},w=function(e){var t=e.label,n=e.clearer,r=e.trigger,o=e.text_label,i=e.press_gates,s=e.custom_style,a=Object(c.useRef)(null),u=(Object(c.useRef)(!1),Object(c.useRef)(!1)),l={fontFamily:"inherit",fontSize:"inherit",lineHeight:"inherit",border:"none",padding:0,margin:0,width:h,background:"black",color:"white",display:"block"};return void 0!==s&&(l=Object.assign(l,s)),d("div",{style:{display:"flex"}},d("button",{style:l,onTouchStart:function(e){u.current=!0,i.current=!0,r(),setTimeout((function(){i.current&&(a.current=setInterval((function(){r()}),100),n(a.current))}),400)},onTouchEnd:function(e){setTimeout((function(){u.current=!1}),400),e.preventDefault()},onMouseDown:function(e){u.current||(i.current=!0,r(),setTimeout((function(){i.current&&(a.current=setInterval((function(){r()}),100),n(a.current))}),400))},onMouseUp:function(e){u.current||clearInterval(a.current)}},t),void 0!==o?d("div",{style:{display:"flex",cursor:"default"},onMouseDown:function(e){a.current=setInterval((function(){r()}),200),n(a.current),r()},onMouseUp:function(e){clearInterval(a.current)}},d(v,null),d("div",null,o)):null)};t.default=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(!1),n=Object(c.useRef)(!1),i=Object(c.useRef)({}),a=Object(c.useRef)({}),l=Object(c.useRef)(null),g=Object(c.useRef)(!1),_=Object(c.useRef)(!1),b=Object(c.useState)(null),S=b[0],x=b[1],j=Object(c.useRef)(null),R=Object(c.useRef)(null),O=Object(c.useRef)(null),k=Object(c.useState)("favicon.png"),E=k[0],C=k[1];function M(t){var n=e.current,r=(n.getContext("2d"),document.createElement("img"));r.onload=function(){var e,t;if(r.width/r.height<(window.innerWidth-h)/(window.innerHeight-8*h)){var s=Math.min(r.height,Math.floor(window.innerHeight-8*h)),a=(t=Math.round(s/h)*h)/r.height;e=Math.round(r.width*a/h)*h}else{var u=Math.min(r.width,Math.floor(window.innerWidth-h)-h/2),c=(e=Math.round(u/h)*h)/r.width;t=Math.round(r.height*c/h)*h}r.width=e,r.height=t,x(r.width),n.width=r.width,n.height=r.height;var l=r.width/h,d=r.height/h,p=l*d,m=R.current;m.width=r.width-4*h,m.height=2*h;var v=document.createElement("canvas");v.width=n.width,v.height=n.height,v.getContext("2d").drawImage(r,0,0,n.width,n.height),r=v;var y=document.createElement("canvas");y.width=n.width,y.height=n.height,y.getContext("2d").drawImage(r,0,0,n.width,n.height);for(var w=[],g=0;g<p;g++){var _=document.createElement("canvas");_.width=h,_.height=h;var b=_.getContext("2d"),S=g%l,j=Math.floor(g/l);b.drawImage(y,S*h,j*h,h,h,0,0,h,h);var O=_.toDataURL().length/(h*h);w.push({t:_,c:O,x:S,y:j,i:g})}w=f.sortBy(w,"c");var k=o(Array(d)).map((function(e,t){return o(Array(l)).map((function(e,n){var r=Math.sqrt(Math.pow(n-l/2,2)+Math.pow(t-d/2,2)).toFixed(8);return[n,t,r]}))})),E=f.flatten(k);E.sort((function(e,t){return e[2]-t[2]}));var M=p-Math.round(p/2);i.current.threshold=M,i.current.cells=p,i.current.ordered=E,i.current.grid=k,i.current.cols=l,i.current.rows=d,i.current.imc=y,i.current.tiles=w;var A=document.createElement("canvas");A.width=16,A.height=16;var I=A.getContext("2d");I.imageSmoothingEnabled=!1,I.drawImage(r,0,0,r.width,r.height,0,0,16,16),C(A.toDataURL()),T()},r.src=t}function T(){t.current=!1;for(var n=e.current,s=n.getContext("2d"),a=i.current,u=a.cells,c=a.threshold,l=a.ordered,d=a.grid,m=a.cols,v=a.rows,y=a.imc,w=a.tiles,g=o(Array(v)).map((function(e,t){return o(Array(m)).map((function(e,n){return[n,t,!1]}))})),_=c;_<u;_++){var b=w[_],S=b.x,x=b.y;g[x][S][2]=!0}var j=R.current,k=j.getContext("2d");k.fillStyle="#ddd",k.fillRect(0,0,j.width,2*h),k.fillStyle="#999";var E=Math.min(Math.max(1,Math.round(j.width*((u-c)/u))),j.width-2);function C(e,t){var n=[[0,-1],[1,-1],[1,1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]].map((function(n){return function(e,t){return void 0===g[t]?null:void 0===g[t][e]?null:!1===g[t][e][2]?d[t][e]:null}(e+n[0],t+n[1])})),r=d[t][e],o=n.filter((function(e){return null!==e})),i=o.map((function(e){return parseFloat(e[2])})),s=f.min(i);return s<r[2]?o[i.indexOf(s)]:null}k.fillRect(E-1,0,3,2*h),O.current.innerHTML=u-c+"/"+u,function e(){for(var i=!0,a=!1,c=0;c<u;c++){var f=r(l[c],2),d=f[0],h=f[1],v=g[h][d];if(!0===v[2]){i=!1;var w=C(d,h);if(null!==w){a=!0;var _=r(w,2),b=_[0],S=_[1];g[S][b]=v,g[h][d]=[null,null,!1]}}}if(i&&s.clearRect(0,0,n.width,n.height),a)a&&!t.current&&(s.clearRect(0,0,n.width,n.height),e());else for(var x=0;x<u;x++){var j=x%m,R=Math.floor(x/m),O=g[R][j];O[2]&&s.drawImage.apply(s,[y].concat(o(p([].concat(o(O.slice(0,2)),[1,1]))),o(p([j,R,1,1]))))}}()}function A(e){var t=(e-=R.current.getBoundingClientRect().left)/R.current.width,n=i.current,r=n.cells,o=(n.threshold,r-Math.min(r,Math.max(0,Math.round(t*r))));i.current.threshold=o,T()}function I(e){F(e,null)}function F(n,r){a.current;null===r&&(r={shiftKey:!1});var o=r.shiftKey;if("o"===(n=n.toLowerCase())){var s=j.current;s.addEventListener("change",(function e(t){var n=!0,r=!1,o=void 0;try{for(var i,s=this.files[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var a=i.value;if(console.log(a),a.name+"."+a.type,!(a.type.indexOf("image")<0))M(URL.createObjectURL(a))}}catch(u){r=!0,o=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}this.removeEventListener("change",e)})),s.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}else if("p"===n){var u=document.createElement("a");e.current.toBlob((function(e){u.setAttribute("download","collapse-"+(new Date).toISOString().slice(0,-4).replace(/-/g,"").replace(/:/g,"").replace(/_/g,"").replace(/\./g,"")+"Z.png"),u.setAttribute("href",URL.createObjectURL(e)),u.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}))}if("l"===n||"arrowright"===n){var c=10;o&&(c=1),i.current.threshold=Math.max(0,i.current.threshold-c),t.current=!0,T()}else if("h"===n||"arrowleft"===n){var l=10;o&&(l=1),i.current.threshold=Math.min(i.current.cells,i.current.threshold+l),t.current=!0,T()}}function L(e){a.current[e.key]=!0,F(e.key,e)}function N(e){a.current[e.key]=!1}function P(e){g.current||l.current&&A(e.clientX)}function z(e){n.current.push(e)}function B(){for(var e=0;e<n.current.length;e++){var t=n.current[e];clearInterval(t)}n.current=[]}function D(){_.current=!1}function U(e){g.current||l.current&&(l.current=!1,A(e.clientX)),D(),B()}function q(e){e.preventDefault(),e.stopPropagation();var t=e.dataTransfer.files[0];t.path?t.path:t.name&&t.name;M(URL.createObjectURL(t))}function X(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}function H(e){e.preventDefault(),e.stopPropagation();var t=!0,n=!1,r=void 0;try{for(var o,i=e.clipboardData.items[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;if(!(s.type.indexOf("image")<0)){var a=s.getAsFile();M(URL.createObjectURL(a))}}}catch(u){n=!0,r=u}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}function W(e){g.current&&l.current&&(A(e.changedTouches[0].clientX),e.preventDefault())}function Z(e){D(),B()}Object(c.useEffect)((function(){M("veilance-field-photo.jpg")}),[]),Object(c.useEffect)((function(){return window.addEventListener("keydown",L),window.addEventListener("keyup",N),window.addEventListener("mousemove",P),window.addEventListener("mouseup",U),window.addEventListener("paste",H),window.addEventListener("dragover",X),window.addEventListener("drop",q),window.addEventListener("touchend",Z),window.addEventListener("touchmove",W,{passive:!1}),function(){window.removeEventListener("keydown",L),window.removeEventListener("keyup",N),window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",U),window.removeEventListener("paste",H),window.removeEventListener("dragover",X),window.removeEventListener("drop",q),window.removeEventListener("touchend",Z),window.removeEventListener("touchmove",W)}}),[]);var J="Collapse an image into itself using ranked pixels.";return d("div",{className:"jsx-3026834861"},d(u.a,null,d("meta",{charset:"UTF-8",className:"jsx-3026834861"}),d("title",{className:"jsx-3026834861"},"Collapse"),d("link",{rel:"shortcut icon",href:E,className:"jsx-3026834861"}),d("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no",className:"jsx-3026834861"}),d("meta",{name:"theme-color",content:"#000000",className:"jsx-3026834861"}),d("title",{className:"jsx-3026834861"},"Collapse"),d("meta",{name:"description",content:J,className:"jsx-3026834861"}),d("meta",{property:"og:title",content:"Collapse",className:"jsx-3026834861"}),d("meta",{property:"og:description",content:J,className:"jsx-3026834861"}),d("meta",{property:"og:image",content:"https://collapse.constraint.systems/collapse.png",className:"jsx-3026834861"}),d("meta",{property:"og:url",content:"https://collapse.constraint.systems",className:"jsx-3026834861"}),d("meta",{name:"twitter:card",content:"summary_large_image",className:"jsx-3026834861"})),d("div",{style:{display:null!==S?"block":"none",width:null!==S?S+h:"auto",marginLeft:"auto",marginRight:"auto"},className:"jsx-3026834861"},d("input",{type:"file",ref:j,style:{display:"none"},className:"jsx-3026834861"}),d("div",{style:{paddingLeft:h/2,paddingRight:h/2},className:"jsx-3026834861 no-select"},d(m,null),d("div",{style:{display:"flex"},className:"jsx-3026834861"},d(y,{label:"o",press_gates:_,text_label:"Load image (or paste or drop)",clearer:z,trigger:function(){I("o")}}),d(v,null),d(y,{label:"p",press_gates:_,text_label:"Save result as png",clearer:z,trigger:function(){I("p")}})),d(m,null),d("canvas",{ref:e,className:"jsx-3026834861"}),d(m,null),d("div",{style:{display:"flex",textAlign:"center",width:"100%",position:"relative"},className:"jsx-3026834861"},d("canvas",{height:23*h,ref:R,style:{position:"absolute",height:2*h,left:2*h,top:0,cursor:"crosshair"},onTouchStart:function(e){l.current=!0,g.current=!0,A(e.changedTouches[0].clientX)},onTouchEnd:function(e){setTimeout((function(){l.current=!1,g.current=!1}),400)},onMouseDown:function(e){g.current||(l.current=!0,A(e.clientX))},className:"jsx-3026834861"}),d(w,{label:"h",press_gates:_,custom_style:{height:2*h,width:2*h},clearer:z,trigger:function(){I("h")}}),d("div",{ref:O,style:{flexGrow:1,position:"relative",pointerEvents:"none",lineHeight:2*h+"px"},className:"jsx-3026834861"}),d(w,{label:"l",press_gates:_,custom_style:{height:2*h,width:2*h},clearer:z,trigger:function(){I("l")}})),d(m,null),d("div",{className:"jsx-3026834861"},"Superpixels are ranked and selected based on their size when compressed (compression size is used as a proxy for complexity). Learn more about how selection works in"," ",d("a",{target:"_blank",href:"https://res.constraint.systems",className:"jsx-3026834861"},"Res"),". Superpixels are iteratively collapsed towards the center using a distance field."),d(m,null),d("div",{className:"jsx-3026834861"},"Original model photo from"," ",d("a",{target:"_blank",href:"https://www.ssense.com/en-us/men/product/veilance/black-field-lt-jacket/4784081",className:"jsx-3026834861"},"Ssense"),"."),d(m,null),d("div",{style:{display:"flex",justifyContent:"space-between"},className:"jsx-3026834861"},d("div",{className:"jsx-3026834861"},d("a",{target:"_blank",href:"https://constraint.systems",className:"jsx-3026834861"},"constraint.systems")),d("div",{className:"jsx-3026834861"},d("a",{target:"_blank",href:"https://github.com/constraint-systems/collapse",className:"jsx-3026834861"},"View source"))),d(m,null))),d(s.a,{id:"3026834861"},["@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}","@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}","html{background:#efefef;}","canvas{background:#fff;}","html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}","*{box-sizing:border-box;}","a{color:inherit;}","button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",".no-select{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]))}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("a1gu"),i=n("Nsbk"),s=n("PJYZ"),a=n("W8MJ"),u=n("7W2i"),c=n("RIqP");Object.defineProperty(t,"__esModule",{value:!0});var l=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function l(e){var a;return r(this,l),a=o(this,i(l).call(this,e)),f&&(t.add(s(a)),n(s(a))),a}return u(l,c),a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(l.Component)}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cDf5:function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["vlRD",0,1,3]]]);