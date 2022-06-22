(()=>{"use strict";var t={613:(t,e,a)=>{let r;a.d(e,{N:()=>B});var n,s=function(t){var e=t.colClass,a=t.post,n=a.link,s=a.title;return React.createElement("td",{className:e},React.createElement("a",{href:n},function(t){if("string"!=typeof t||-1===t.indexOf("&"))return t;void 0===r&&(r=document.implementation&&document.implementation.createHTMLDocument?document.implementation.createHTMLDocument("").createElement("textarea"):document.createElement("textarea")),r.innerHTML=t;const e=r.textContent;return r.innerHTML="",e}(s)))},o=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}const l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const c=function(t){return"string"==typeof t&&l.test(t)};for(var d=[],u=0;u<256;++u)d.push((u+256).toString(16).substr(1));const m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]).toLowerCase();if(!c(a))throw TypeError("Stringified UUID is invalid");return a};const g=function(t,e,a){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){a=a||0;for(var n=0;n<16;++n)e[a+n]=r[n];return e}return m(r)};var f=a(726),y=a.n(f),v=function(t){var e=t.html;return React.createElement("div",{dangerouslySetInnerHTML:{__html:y()(e,"<strong><p>")}})},p=function(t){var e=t.post,a=e.number_of_votes,r=e.rating,n=t.text;if(void 0!==a){var s=JSON.parse(yasrWindowVar.textAfterVr);return s=(s=s.replace("%total_count%",a)).replace("%average%",r),React.createElement("div",{className:"yasr-most-rated-text"},React.createElement(v,{html:s}))}return React.createElement(React.Fragment,null,n," ",r)},h=function(t){var e=t.size,a=t.htmlId,r=t.element,n=t.step,s=t.readonly,o=t.rating;return React.createElement("div",{id:a,ref:function(){return yasrSetRaterValue(e,a,r,n,s,o)}})},_=function(t){var e=t.rankingParams,a=t.tableId,r=t.colClass,n=t.post,s="after",o=JSON.parse(yasrWindowVar.textRating),i=new URLSearchParams(e);null!==i.get("text_position")&&(s=i.get("text_position")),null!==i.get("custom_txt")&&(o=i.get("custom_txt"));var l={rating:n.rating,htmlId:"yasr-ranking-element-"+g(),size:document.getElementById(a).dataset.rankingSize};return"before"===s?React.createElement("td",{className:r},React.createElement(p,{post:n,text:o}),React.createElement(h,l)):React.createElement("td",{className:r},React.createElement(h,l),React.createElement(p,{post:n,text:o}))},b=function(t){return React.createElement("tr",{className:t.trClass},React.createElement(s,{colClass:t.leftClass,post:t.post}),React.createElement(_,t))},E=function(t){var e=t.tBodyId,a=t.show,r=t.data,n=t.source,s=t.rankingParams,o=t.tableId;return React.createElement("tbody",{id:e,style:{display:a}},r.map((function(t,e){var a="yasr-rankings-td-colored",r="yasr-top-10-most-highest-left",i="yasr-top-10-most-highest-right";return"author_ranking"===n&&(a="yasr-rankings-td-white",r="yasr-top-10-overall-left",i="yasr-top-10-overall-right"),e%2==0&&(a="yasr-rankings-td-white","author_ranking"===n&&(a="yasr-rankings-td-colored")),React.createElement(b,{key:t.post_id,source:n,tableId:o,rankingParams:s,post:t,trClass:a,leftClass:r,rightClass:i})})))},w=function(t){return function(e){e.preventDefault();var a=e.target.id,r=t.tableId,n="link-most-rated-posts-"+r,s="link-highest-rated-posts-"+r,o="most-rated-posts-"+r,i="highest-rated-posts-"+r,l=document.getElementById(a),c=document.createElement("span");c.innerHTML=l.innerHTML,c.id=l.id,l.parentNode.replaceChild(c,l),a===n&&(document.getElementById(i).style.display="none",document.getElementById(o).style.display="",c=document.getElementById(s),l.innerHTML=c.innerHTML,l.id=c.id,c.parentNode.replaceChild(l,c)),a===s&&(document.getElementById(o).style.display="none",document.getElementById(i).style.display="",c=document.getElementById(n),l.innerHTML=c.innerHTML,l.id=c.id,c.parentNode.replaceChild(l,c))}},R=function(t){var e=t.tableId,a=t.source,r=t.defaultView,n="link-most-rated-posts-"+e,s="link-highest-rated-posts-"+e;if("author_ranking"!==a){var o=React.createElement("span",null,React.createElement("span",{id:n},JSON.parse(yasrWindowVar.textMostRated))," | ",React.createElement("a",{href:"#",id:s,onClick:w(t)},JSON.parse(yasrWindowVar.textHighestRated)));return"highest"===r&&(o=React.createElement("span",null,React.createElement("span",{id:s},JSON.parse(yasrWindowVar.textHighestRated))," | ",React.createElement("a",{href:"#",id:n,onClick:w(t)},JSON.parse(yasrWindowVar.textMostRated)))),React.createElement("thead",null,React.createElement("tr",{className:"yasr-rankings-td-colored yasr-rankings-heading"},React.createElement("th",null,JSON.parse(yasrWindowVar.textLeftColumnHeader)),React.createElement("th",null,JSON.parse(yasrWindowVar.textOrderBy),":  ",o)))}return React.createElement(React.Fragment,null)},x=function(t){var e=t.error,a=t.isLoaded,r=t.data,n=t.source,s=t.rankingParams,o=t.tableId;if(e)return React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,console.log(e),"Error")));if(!1===a)return React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,JSON.parse(yasrWindowVar.textLoadRanking))));if("overall_rating"===n||"author_multi"===n)return React.createElement(E,{data:r,tableId:o,tBodyId:"overall_"+o,rankingParams:s,show:"table-row-group",source:n});var i=r.most,l=r.highest,c="table-row-group",d="none",u="most",m=c,g=d,f=new URLSearchParams(s);return null!==f.get("view")&&(u=f.get("view")),"highest"===u&&(m=d,g=c),React.createElement(React.Fragment,null,React.createElement(R,{tableId:o,source:n,defaultView:u}),React.createElement(E,{data:i,tableId:o,tBodyId:"most-rated-posts-"+o,rankingParams:s,show:m,source:n}),React.createElement(E,{data:l,tableId:o,tBodyId:"highest-rated-posts-"+o,rankingParams:s,show:g,source:n}))};function S(){return S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},S.apply(this,arguments)}function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var r,n,s=[],o=!0,i=!1;try{for(a=a.call(t);!(o=(r=a.next()).done)&&(s.push(r.value),!e||s.length!==e);o=!0);}catch(t){i=!0,n=t}finally{try{o||null==a.return||a.return()}finally{if(i)throw n}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var V=wp.element,N=V.useState,C=V.useEffect,j=function(t,e,a){var r=e,n="&nonce_rankings="+a,s=function(t,e){var a="";if(""!==t&&!1!==t){var r=new URLSearchParams(t);null!==r.get("order_by")&&(a+="order_by="+r.get("order_by")),null!==r.get("limit")&&(a+="&limit="+r.get("limit")),null!==r.get("start_date")&&"0"!==r.get("start_date")&&(a+="&start_date="+r.get("start_date")),null!==r.get("end_date")&&"0"!==r.get("end_date")&&(a+="&end_date="+r.get("end_date")),null!==r.get("ctg")?a+="&ctg="+r.get("ctg"):null!==r.get("cpt")&&(a+="&cpt="+r.get("cpt")),""!==a&&(a="&"+(a=a.replace(/\s+/g,""))),"visitor_multi"!==e&&"author_multi"!==e||null!==r.get("setid")&&(a+="&setid="+r.get("setid")),"visitor_votes"===e&&(null!==r.get("required_votes[most]")&&(a="&required_votes="+r.get("required_votes[most]")),null!==r.get("required_votes[highest]")&&(a="&required_votes="+r.get("required_votes[highest]")))}return a}(""!==t?t:"",r);return"author_ranking"===r||"author_multi"===r||"overall_rating"===r?[yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&source="+r+s+n]:[yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&show=most&source="+r+s+n,yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&show=highest&source="+r+s+n]},O=function(t){var e=t.tableId,a=t.source,r=t.params,n=t.nonce,s={tableId:e,source:a,rankingParams:r},o=k(N(null),2),i=o[0],l=o[1],c=k(N(!1),2),d=c[0],u=c[1],m=k(N([]),2),g=m[0],f=m[1],y=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=JSON.parse(document.getElementById(e).dataset.rankingData);!0===t&&console.info("Ajax Disabled, getting data from source"),f(a)};return C((function(){var t,e;"yes"!==yasrWindowVar.ajaxEnabled?(y(!0),u(!0)):a?(t=[],e=j(r,a,n),Promise.all(e.map((function(e){return fetch(e).then((function(t){return!0===t.ok?t.json():(console.info("Ajax Call Failed. Getting data from source"),"KO")})).then((function(e){"KO"===e?y():("overall_rating"===e.source||"author_multi"===e.source?t="overall_rating"===e.source?e.data_overall:e.data_mv:t[e.show]=e.data_vv,f(t))})).catch((function(t){y(),console.info(t)}))}))).then((function(t){u(!0)})).catch((function(t){y(),console.info(t)}))):l("Invalid Data Source")}),[]),React.createElement(React.Fragment,null,React.createElement(x,S({error:i,isLoaded:d,data:g},s)))},A=wp.element.render;function B(){var t=document.getElementsByClassName("yasr-stars-rankings");if(t.length>0)for(var e=0;e<t.length;e++){var a=t.item(e).id,r=JSON.parse(t.item(e).dataset.rankingSource),n=JSON.parse(t.item(e).dataset.rankingParams),s=JSON.parse(t.item(e).dataset.rankingNonce),o=document.getElementById(a);A(React.createElement(O,{source:r,tableId:a,params:n,nonce:s}),o)}}B()},726:function(t,e,a){var r;!function(n){if("function"!=typeof s){var s=function(t){return t};s.nonNative=!0}const o=s("plaintext"),i=s("html"),l=s("comment"),c=/<(\w*)>/g,d=/<\/?([^\s\/>]+)/;function u(t,e,a){return g(t=t||"",m(e=e||[],a=a||""))}function m(t,e){return{allowable_tags:t=function(t){let e=new Set;if("string"==typeof t){let a;for(;a=c.exec(t);)e.add(a[1])}else s.nonNative||"function"!=typeof t[s.iterator]?"function"==typeof t.forEach&&t.forEach(e.add,e):e=new Set(t);return e}(t),tag_replacement:e,state:o,tag_buffer:"",depth:0,in_quote_char:""}}function g(t,e){if("string"!=typeof t)throw new TypeError("'html' parameter must be a string");let a=e.allowable_tags,r=e.tag_replacement,n=e.state,s=e.tag_buffer,c=e.depth,d=e.in_quote_char,u="";for(let e=0,m=t.length;e<m;e++){let m=t[e];if(n===o)if("<"===m)n=i,s+=m;else u+=m;else if(n===i)switch(m){case"<":if(d)break;c++;break;case">":if(d)break;if(c){c--;break}d="",n=o,s+=">",a.has(f(s))?u+=s:u+=r,s="";break;case'"':case"'":d=m===d?"":d||m,s+=m;break;case"-":"<!-"===s&&(n=l),s+=m;break;case" ":case"\n":if("<"===s){n=o,u+="< ",s="";break}s+=m;break;default:s+=m}else if(n===l)if(">"===m)"--"==s.slice(-2)&&(n=o),s="";else s+=m}return e.state=n,e.tag_buffer=s,e.depth=c,e.in_quote_char=d,u}function f(t){let e=d.exec(t);return e?e[1].toLowerCase():null}u.init_streaming_mode=function(t,e){let a=m(t=t||[],e=e||"");return function(t){return g(t||"",a)}},void 0===(r=function(){return u}.call(e,a,e,t))||(t.exports=r)}()}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,a),s.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{for(var t=["yasr-rater-stars","yasr-multiset-visitors-rater"],e=0;e<t.length;e++)r(t[e]);function r(t){var e=document.getElementsByClassName(t);e.length>0&&("yasr-rater-stars"===t&&function(t){for(var e=0;e<t.length;e++)if(!1===t.item(e).classList.contains("yasr-star-rating")){var a=t.item(e),r=a.id,n=a.getAttribute("data-rater-starsize");yasrSetRaterValue(n,r,a)}}(e),"yasr-multiset-visitors-rater"===t&&function(t){for(var e="",a=[],r=document.getElementById("yasr-pro-multiset-review-rating"),n=0;n<t.length;n++)!function(n){if(!1===t.item(n).classList.contains("yasr-star-rating")){var s=t.item(n),o=s.id,i=s.getAttribute("data-rater-readonly"),l=s.getAttribute("data-rater-starsize");l||(l=16),i=yasrTrueFalseStringConvertion(i);var c=function(t,n){var o=s.getAttribute("data-rater-postid"),i=s.getAttribute("data-rater-setid"),l=s.getAttribute("data-rater-set-field-id");t=t.toFixed(1);var c=parseInt(t);this.setRating(c),e={postid:o,setid:i,field:l,rating:c},a.push(e),r&&(r.value=JSON.stringify(a)),n()};yasrSetRaterValue(l,o,s,1,i,!1,c)}}(n);jQuery(".yasr-send-visitor-multiset").on("click",(function(){var t=this.getAttribute("data-postid"),e=this.getAttribute("data-setid"),r=this.getAttribute("data-nonce");jQuery("#yasr-send-visitor-multiset-"+t+"-"+e).hide(),jQuery("#yasr-loader-multiset-visitor-"+t+"-"+e).show();var n=JSON.parse(yasrWindowVar.isUserLoggedIn),s={action:"yasr_visitor_multiset_field_vote",post_id:t,rating:a,set_id:e};!0===n&&Object.assign(s,{nonce:r}),jQuery.post(yasrWindowVar.ajaxurl,s).done((function(a){var r;r=(a=JSON.parse(a)).text,jQuery("#yasr-loader-multiset-visitor-"+t+"-"+e).text(r)})).fail((function(t,e,a,r){console.error("YASR ajax call failed. Can't save data"),console.log(t)}))}))}(e))}function n(t){if(t.length>0&&(function(t){for(var e=0;e<t.length;e++)!function(e){if(!1===t.item(e).classList.contains("yasr-star-rating")){var a=t.item(e),r=a.getAttribute("data-rater-postid"),n=a.id,l=n.replace("yasr-visitor-votes-rater-",""),c=document.getElementById("yasr_visitor_votes_"+l),d=parseInt(a.getAttribute("data-rater-starsize")),u=a.getAttribute("data-rater-nonce"),m=a.getAttribute("data-issingular"),g="yasr-vv-votes-number-container-"+l,f="yasr-vv-average-container-"+l,y="yasr-vv-bottom-container-"+l,v="yasr-vv-loader-"+l,p=document.getElementById(g),h=document.getElementById(f),_=document.getElementById(y),b=document.getElementById(v),E=a.getAttribute("data-rating"),w=a.getAttribute("data-readonly-attribute"),R=a.getAttribute("data-rater-readonly");if(null===w&&(w=!1),w=yasrTrueFalseStringConvertion(w),R=yasrTrueFalseStringConvertion(R),!0===w&&(R=!0),"yes"===yasrWindowVar.ajaxEnabled){i(b);var x={action:"yasr_load_vv",post_id:r};jQuery.get(yasrWindowVar.ajaxurl,x).done((function(t){var e,a=yasrValidJson(t);if(!1===a){var g="Not a valid Json Element";return i(b,!1),void o(c,g)}if(e=!0===w||a.yasr_visitor_votes.stars_attributes.read_only,E=(E=a.yasr_visitor_votes.number_of_votes>0?a.yasr_visitor_votes.sum_votes/a.yasr_visitor_votes.number_of_votes:0).toFixed(1),E=parseFloat(E),s(d,E,r,e,n,l,u,m,p,h,b,_),!0!==w&&(o(p,a.yasr_visitor_votes.number_of_votes),o(h,E),!1!==a.yasr_visitor_votes.stars_attributes.span_bottom)){var f=a.yasr_visitor_votes.stars_attributes.span_bottom;o(_,f)}})).fail((function(t,e,a,o){console.info("YASR ajax call failed. Showing ratings from html"),s(d,E,r,R,n,l,u,m,p,h,b,_),!0!==w&&(_.style.display="")}))}else s(d,E,r,R,n,l,u,m,p,h,b,_)}}(e)}(t),"yes"===yasrWindowVar.visitorStatsEnabled)){var e=document.getElementsByClassName("yasr-dashicons-visitor-stats");e&&function(t){for(var e,a,r=!1,n=0;n<t.length;n++)!function(n){var s="#"+t.item(n).id,o=t.item(n).getAttribute("data-postid");(0===n&&null!==(e=document.getElementsByClassName("yasr-vv-text-container"))&&(a=window.getComputedStyle(e[0],null).getPropertyValue("color")),a)&&(document.getElementById(t.item(n).id).style.fill=a);var i={action:"yasr_stats_visitors_votes",post_id:o};"function"==typeof tippy&&tippy(s,{allowHTML:!0,content:'<span style="color: #0a0a0a">Loading...</span>',theme:"yasr",arrow:!0,arrowType:"round",onShow:function(t){s!==r&&jQuery.post(yasrWindowVar.ajaxurl,i,(function(e){if(!1!==(e=yasrValidJson(e)))return"error"===e.status?(console.error(e.text),void t.setContent(e.text)):void t.setContent(l(e));t.setContent("Error!")})).fail((function(e,a,r,n){var s="YASR ajax call failed.";console.log(e),t.setContent(s)}))},onHidden:function(){r=s}})}(n)}(e)}}function s(t,e,a,r,n,s,l,c,d,u,m,g){e=parseFloat(e),r=yasrTrueFalseStringConvertion(r);var f=document.getElementById(n),y=JSON.parse(yasrWindowVar.isUserLoggedIn);i(m,!1);yasrSetRaterValue(t,n,f,1,r,e,(function(t,e){i(m,!0);var r={action:"yasr_send_visitor_rating",rating:t,post_id:a,is_singular:c};!0===y&&Object.assign(r,{nonce_visitor:l}),this.setRating(t),this.disable(),jQuery.post(yasrWindowVar.ajaxurl,r).done((function(t){if(!1===(t=yasrValidJson(t)))return i(m,!1),void o(g,"<span>Not a valid Json Element, rating can't be saved.</span>");var a,r="yasr-vote-".concat(t.status);"success"===t.status&&(o(d,t.number_of_votes),o(u,t.average_rating)),a='<span class="yasr-small-block-bold" id="'.concat(r,'"> ').concat(t.text," </span>"),o(g,a),i(m,!1),e()})).fail((function(t,e,a,r){console.error("YASR ajax call failed. Can't save data"),console.log(t)}))}))}function o(t,e){null!==t&&(t.innerHTML=e,t.style.display="")}function i(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a="";!0===e&&(a=yasrWindowVar.loaderHtml),o(t,a)}function l(t){var e=t.medium_rating;delete t.medium_rating;for(var a=0,r=1;r<=5;r++)(1===r||t[r].n_of_votes>a)&&(a=t[r].n_of_votes);var n=Math.log(a)*Math.LOG10E+1|0,s="5%";n<=3&&(s="5%"),n>3&&n<=5&&(s="10%"),n>5&&(s="15%");var o='<div class="yasr-visitors-stats-tooltip">';o+='<span id="yasr-medium-rating-tooltip">'+e+" "+JSON.parse(yasrWindowVar.textVvStats)+"</span>",o+='<div class="yasr-progress-bars-container">';for(var i=JSON.parse(yasrWindowVar.starsPluralForm),l=0,c=0,d=5;d>0;d--)1===d&&(i=JSON.parse(yasrWindowVar.starSingleForm)),void 0!==t[d]&&(l=t[d].progressbar,c=t[d].n_of_votes),o+="<div class='yasr-progress-bar-row-container yasr-w3-container'>\n                               <div class='yasr-progress-bar-name'>".concat(d," ").concat(i,"</div> \n                               <div class='yasr-single-progress-bar-container'> \n                                   <div class='yasr-w3-border'> \n                                       <div class='yasr-w3-amber' style='height:17px;width:").concat(l,"'></div> \n                                   </div>\n                               </div> \n                               <div class='yasr-progress-bar-votes-count' style=\"flex-basis:").concat(s,' ">').concat(c,"</div>\n                           </div>");return o+="</div></div>"}n(document.getElementsByClassName("yasr-rater-stars-vv"));var c=a(613);jQuery(document).ajaxComplete((function(t,e,a){var s=yasrWindowVar.siteUrl+"/page/";a.url.includes(s)&&(!function(){for(var t=["yasr-rater-stars","yasr-multiset-visitors-rater"],e=0;e<t.length;e++)r(t[e])}(),n(document.getElementsByClassName("yasr-rater-stars-vv")),(0,c.N)())}))})()})();