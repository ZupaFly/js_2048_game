parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var t=document.querySelectorAll(".game-field .field-cell"),e=0,n=document.querySelector(".game-score"),r=!1,o=function(t){var e=t.textContent;t.className="field-cell",e&&t.classList.add("field-cell--".concat(e))},a=function(){var t=c();if(0!==t.length){var e=t[Math.floor(Math.random()*t.length)];Math.random()<.9?(e.textContent="2",e.classList.add("field-cell--2")):(e.textContent="4",e.classList.add("field-cell--4")),e.classList.add("animate"),setTimeout(function(){e.classList.remove("animate")},200)}},c=function(){return Array.from(t).filter(function(t){return!t.textContent.trim()})},i=function(t){for(var r=t.filter(function(t){return""!==t}).concat(Array(4-t.length).fill("")),o=0;o<r.length-1;o++)""!==r[o]&&r[o]===r[o+1]&&(r[o]=(2*parseInt(r[o])).toString(),r[o+1]="",e+=parseInt(r[o]),n.textContent=e,o++);return r.filter(function(t){return""!==t}).concat(Array(4-r.filter(function(t){return""!==t}).length).fill(""))},s=function(e){var n=Array.from(t).map(function(t){return t.textContent.trim()}),r=!1,c=function(t,e){for(var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=[],c=0;c<4;c++)a.push(n[t+c*e]);o&&(a=a.reverse());var s=i(a);o&&s.reverse();for(var l=0;l<4;l++)n[t+l*e]!==s[l]&&(r=!0),n[t+l*e]=s[l]};if("left"===e||"right"===e)for(var s=0;s<4;s++){c(4*s,1,"right"===e)}else if("up"===e||"down"===e)for(var l=0;l<4;l++)c(l,4,"down"===e);t.forEach(function(t,e){t.textContent=n[e]||"",o(t),"2048"===t.textContent&&document.querySelector(".message-win").classList.remove("hidden")}),r&&a()},l=function(){if(c().length>0)return!1;for(var e=0;e<4;e++)for(var n=0;n<3;n++){if(t[4*e+n].textContent===t[4*e+n+1].textContent)return!1;if(t[4*n+e].textContent===t[4*(n+1)+e].textContent)return!1}return!0},d=function(){t.forEach(function(t){t.textContent="",t.className="field-cell"}),e=0,n.textContent=e,r=!1,a(),a();var o=document.querySelector("button");o.textContent="Restart",o.classList.remove("start"),o.classList.add("restart"),document.querySelector(".message-start").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden"),document.querySelector(".message-win").classList.add("hidden")};document.addEventListener("keydown",function(t){r||("ArrowRight"===t.key?s("right"):"ArrowLeft"===t.key?s("left"):"ArrowUp"===t.key?s("up"):"ArrowDown"===t.key&&s("down"),l()&&(r=!0,document.querySelector(".message-lose").classList.remove("hidden")))}),document.querySelector(".start").addEventListener("click",d),document.addEventListener("DOMContentLoaded",function(){var t=0,e=0,n=document.querySelector(".game-field");n.addEventListener("touchstart",function(n){n.preventDefault();var r=n.touches[0];t=r.clientX,e=r.clientY}),n.addEventListener("touchmove",function(n){var r=n.touches[0],o=r.clientX-t,a=r.clientY-e;a>0&&Math.abs(a)>Math.abs(o)&&n.preventDefault()}),n.addEventListener("touchend",function(n){var r=n.changedTouches[0],o=r.clientX,a=r.clientY,c=o-t,i=a-e;Math.abs(c)>Math.abs(i)?Math.abs(c)>20&&s(c>0?"right":"left"):Math.abs(i)>20&&s(i>0?"down":"up")})});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.61eb4c3d.js.map