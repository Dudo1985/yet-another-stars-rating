(()=>{"use strict";const t=["yasr-rater-stars","yasr-multiset-visitors-rater"];for(let s=0;s<t.length;s++)e(t[s]);function e(t){const e=document.getElementsByClassName(t);e.length>0&&("yasr-rater-stars"===t&&function(t){for(let e=0;e<t.length;e++)if(!1===t.item(e).classList.contains("yasr-star-rating")){const s=t.item(e),a=s.id,r=s.getAttribute("data-rater-starsize");yasrSetRaterValue(r,a,s)}}(e),"yasr-multiset-visitors-rater"===t&&function(t){const e=document.getElementsByClassName("yasr-send-visitor-multiset");var s="",a=[];const r=document.getElementById("yasr-pro-multiset-review-rating");for(let e=0;e<t.length;e++)!function(e){if(!1!==t.item(e).classList.contains("yasr-star-rating"))return;let i=t.item(e),n=i.id,o=i.getAttribute("data-rater-readonly"),l=i.getAttribute("data-rater-starsize");l||(l=16),o=yasrTrueFalseStringConvertion(o);const d=function(t,e){const n=i.getAttribute("data-rater-postid"),o=i.getAttribute("data-rater-setid"),l=i.getAttribute("data-rater-set-field-id");t=t.toFixed(1);const d=parseInt(t);this.setRating(d),s={postid:n,setid:o,field:l,rating:d},a.push(s),r&&(r.value=JSON.stringify(a)),e()};yasrSetRaterValue(l,n,i,1,o,!1,d)}(e);for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){const t=this.getAttribute("data-postid"),e=this.getAttribute("data-setid"),s=this.getAttribute("data-nonce"),r=document.getElementById(`yasr-send-visitor-multiset-${t}-${e}`),i=document.getElementById(`yasr-loader-multiset-visitor-${t}-${e}`);r.style.display="none",i.style.display="block";const n=JSON.parse(yasrWindowVar.isUserLoggedIn),o={action:"yasr_visitor_multiset_field_vote",post_id:t,rating:a,set_id:e};!0===n&&Object.assign(o,{nonce:s}),jQuery.post(yasrWindowVar.ajaxurl,o).done((function(t){let e;e=(t=JSON.parse(t)).text,i.innerText=e})).fail((function(t,e,s,a){console.error("YASR ajax call failed. Can't save data"),console.log(t)}))}))}(e))}})();