import"./assets/styles-785298d5.js";import{f as m,i as h}from"./assets/vendor-651d7991.js";const y=document.querySelector("#datetime-picker"),o=document.querySelector("button"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]"),b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()<Date.now()?(h.error({title:"ERROR",message:"Please choose a date in the future",titleColor:"#ffffff",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight"}),o.disabled=!0):o.disabled=!1}},g=m(y,b);let s=null;function q(){s=setInterval(()=>{let e=g.selectedDates[0]-Date.now();if(e<=0){clearInterval(s),c(i(0));return}else o.disabled=!1;c(i(e))},1e3)}function c({days:e,hours:n,minutes:r,seconds:a}){S.textContent=t(e),p.textContent=t(n),C.textContent=t(r),D.textContent=t(a)}function i(e){const u=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:f}}function t(e){return String(e).padStart(2,"0")}o.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
