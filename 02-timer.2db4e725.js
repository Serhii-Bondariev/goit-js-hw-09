!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a=o("dbdyf"),u=o("6JpON"),d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(t){var n=t[0];if(n<=new Date)return e(u).Notify.warning("Please choose a date in the future"),void(document.getElementById("datetime-picker").value="");!function(t){var n=setInterval(r,1e3);function r(){var r=new Date,o=t-r;if(o<=0)return clearInterval(n),document.querySelector("[data-start]"),e(u).Notify.success("Відлік завершено!");var a=function(e){var t=1e3,n=60*t,r=60*n,o=24*r,a=Math.floor(e/o),u=Math.floor(e%o/r),d=Math.floor(e%o%r/n),i=Math.floor(e%o%r%n/t);return{days:a,hours:u,minutes:d,seconds:i}}(o),d=a.days,l=a.hours,c=a.minutes,f=a.seconds;document.querySelector("[data-days]").textContent=i(d),document.querySelector("[data-hours]").textContent=i(l),document.querySelector("[data-minutes]").textContent=i(c),document.querySelector("[data-seconds]").textContent=i(f)}}(n)}};(0,a.default)("#datetime-picker",d);function i(e){return e.toString().padStart(2,"0")}}();
//# sourceMappingURL=02-timer.2db4e725.js.map
