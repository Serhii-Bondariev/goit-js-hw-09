function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("fbklV"),u=r("7Y9D8");const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0];if(n<=new Date)return e(u).Notify.warning("Please choose a date in the future"),void(document.getElementById("datetime-picker").value="");!function(t){const n=setInterval(o,1e3);function o(){const o=new Date,r=t-o;if(r<=0)return clearInterval(n),document.querySelector("[data-start]"),e(u).Notify.success("Відлік завершено!");const{days:a,hours:d,minutes:c,seconds:l}=function(e){const t=1e3,n=60*t,o=60*n,r=24*o,a=Math.floor(e/r),u=Math.floor(e%r/o),d=Math.floor(e%r%o/n),i=Math.floor(e%r%o%n/t);return{days:a,hours:u,minutes:d,seconds:i}}(r);document.querySelector("[data-days]").textContent=i(a),document.querySelector("[data-hours]").textContent=i(d),document.querySelector("[data-minutes]").textContent=i(c),document.querySelector("[data-seconds]").textContent=i(l)}}(n)}};(0,a.default)("#datetime-picker",d);function i(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=02-timer.fa685e4c.js.map
