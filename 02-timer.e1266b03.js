!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("dbdyf"),d=r("6JpON"),u=!1,i={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(t){if(t[0]<=new Date)return e(d).Notify.warning("Please choose a date in the future"),void(document.getElementById("datetime-picker").value="")}},l=(0,a.default)("#datetime-picker",i);function s(e){return e.toString().padStart(2,"0")}document.getElementById("start-button").addEventListener("click",(function(){if(!u){var t=l.selectedDates[0];if(t<=new Date)return e(d).Notify.warning("Please choose a date in the future"),void(document.getElementById("datetime-picker").value="");document.getElementById("start-button").setAttribute("disabled",!0),u=!0,function(t){var n=setInterval(o,1e3);function o(){var o=new Date,r=t-o;if(r<=0)return clearInterval(n),u=!1,document.getElementById("start-button").removeAttribute("disabled"),e(d).Notify.success("Countdown finished!");var a=function(e){var t=1e3,n=60*t,o=60*n,r=24*o,a=Math.floor(e/r),d=Math.floor(e%r/o),u=Math.floor(e%r%o/n),i=Math.floor(e%r%o%n/t);return{days:a,hours:d,minutes:u,seconds:i}}(r),i=a.days,l=a.hours,c=a.minutes,f=a.seconds;document.querySelector("[data-days]").textContent=s(i),document.querySelector("[data-hours]").textContent=s(l),document.querySelector("[data-minutes]").textContent=s(c),document.querySelector("[data-seconds]").textContent=s(f)}}(t)}}))}();
//# sourceMappingURL=02-timer.e1266b03.js.map
