!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";t.__esModule=!0;var r,i=(r=document.createElement("DIV"),function(e){r.innerHTML=e;var t=r.children[0];return r.innerHTML="",t});t.renderHTML=i},function(e,t,n){"use strict";t.__esModule=!0,n(2),n(3),n(4),n(6),console.log("\nCreated by TroyTae\nhttps://github.com/TroyTae/time-timer\n")},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";t.__esModule=!0,n(5);var r=n(0),i=document.getElementById("clock");i&&Array(12).fill(null).forEach(function(e,t){var n=5*t,o=r.renderHTML('<div class="dot m'+n+'"></div>');i.appendChild(o);var c=r.renderHTML('<span class="min m'+n+'">'+n+"</span>");i.appendChild(c)})},function(e,t,n){},function(e,t,n){"use strict";t.__esModule=!0,n(7);var r=n(8),i=n(0),o=document.getElementById("timer");if(window.addEventListener("resize",function(){r.resize(),r.draw()}),r.resize(),r.draw(),o){var c=i.renderHTML('<button class="btn reset"></button>');c.addEventListener("click",function(){console.log("Reset Event!")}),o.appendChild(c);var u=i.renderHTML('<span class="time">15:25</span>');o.appendChild(u);var d=i.renderHTML('<button class="btn start"></button>');d.addEventListener("click",function(){console.log("Start Event!")}),o.appendChild(d)}},function(e,t,n){},function(e,t,n){"use strict";t.__esModule=!0;var r=function(){var e=document.querySelector("#clock > .circle");if(e){var t=document.createElement("canvas"),n=t.getContext("2d");if(n)return e.appendChild(t),{draw:function(){n.fillStyle="#E31936",n.beginPath(),n.arc(t.width/2,t.height/2,t.width/2,Math.PI/2*3,Math.PI/3*2,!0),n.lineTo(t.width/2,t.height/2),n.closePath(),n.fill()},resize:function(){t.width=e.clientWidth,t.height=e.clientHeight}}}throw"Reminder is not rendered properly."}();t.draw=r.draw,t.resize=r.resize}]);