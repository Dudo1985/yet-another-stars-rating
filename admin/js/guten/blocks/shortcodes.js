(()=>{"use strict";var e={288:(e,t,r)=>{var a=r(434);const s=JSON.parse('{"title":"Yasr: Ranking by overall rating","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/overall-rating-ranking","description":"This ranking shows the highest rated posts rated through the overall_rating shortcode.","icon":"star-half","category":"yet-another-stars-rating","keywords":["ranking","highest","chart"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),n=JSON.parse('{"title":"Yasr: Ranking by visitors votes","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/visitor-votes-ranking","description":"This ranking shows both the highest and most rated posts rated through the yasr_visitor_votes shortcode. For an item to appear in this chart, it has to be rated at least twice.","icon":"star-half","category":"yet-another-stars-rating","keywords":["ranking","highest","most","chart"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}');var o=wp.blocks.registerBlockType,i=wp.components.PanelBody,l=wp.element.Fragment,c=wp.blockEditor,u=c.useBlockProps,g=c.InspectorControls;o(s,{edit:function(e){var t=u({className:"yasr-ov-ranking-block"}),r=[React.createElement(a.pP,{key:0})];function s(e){return React.createElement(g,null,React.createElement(i,{title:"Settings"},React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("div",null,r))))}return wp.hooks.doAction("yasr_overall_rating_rankings",r),React.createElement(l,null,React.createElement(s,null),React.createElement("div",t,"[yasr_ov_ranking]"))},save:function(e){var t=u.save({className:"yasr-ov-ranking-block"});return React.createElement("div",t,"[yasr_ov_ranking]")}}),o(n,{edit:function(e){var t=u({className:"yasr-vv-ranking-block"}),r=[React.createElement(a.pP,{key:0})];function s(e){return React.createElement(g,null,React.createElement(i,{title:"Settings"},React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("div",null,r))))}return wp.hooks.doAction("yasr_visitor_votes_rankings",r),React.createElement(l,null,React.createElement(s,null),React.createElement("div",t,"[yasr_most_or_highest_rated_posts]"))},save:function(e){var t=u.save({className:"yasr-vv-ranking-block"});return React.createElement("div",t,"[yasr_most_or_highest_rated_posts]")}})},371:(e,t,r)=>{const a=JSON.parse('{"title":"Yasr: Overall Rating","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/overall-rating","description":"Insert the author rating.","icon":"star-half","category":"yet-another-stars-rating","keywords":["rating","author","overall"],"attributes":{"size":{"type":"string","default":"large"},"postId":{"type":"string","default":false}},"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),s=JSON.parse('{"title":"Yasr: Visitor Votes","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/visitor-votes","description":"Insert the ability for your visitors to vote.","icon":"star-half","category":"yet-another-stars-rating","keywords":["rating","visitor","votes","stars"],"attributes":{"size":{"type":"string","default":"large"},"postId":{"type":"string","default":false}},"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),n=JSON.parse('{"title":"Yasr: Most Active Visitors","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/most-active-users","description":"This ranking shows the most active users, displaying the login name if logged in or \\"Anonymous\\" if not","icon":"star-half","category":"yet-another-stars-rating","keywords":["ranking","highest","most","chart","visitors"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),o=JSON.parse('{"title":"Yasr: Most Active Authors","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/most-active-reviewers","description":"This ranking shows the most active reviewers on your site.","icon":"star-half","category":"yet-another-stars-rating","keywords":["ranking","highest","most","chart","authors"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),i=JSON.parse('{"title":"Yasr: User Rate History","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/user-rate-history","description":"If user is logged in, this shortcode shows a list of all the ratings provided by the user on [yasr_visitor_votes] shortcode","icon":"star-half","category":"yet-another-stars-rating","keywords":["ratings","list","history"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}');var l=r(434),c=wp.components.PanelBody,u=wp.blockEditor.InspectorControls,g=function(e){var t=e.block,r=e.hookName,a=m(t),s=a.overallRating,n=a.blockSettings,o=a.bottomDesc,i=React.createElement(React.Fragment,null);return!1!==r&&(i=[React.createElement(l.pP,{key:0})],wp.hooks.doAction(r,i)),!0!==n&&!1===r?React.createElement(React.Fragment,null):React.createElement(u,null,!0===s&&React.createElement(l.Sg,null),React.createElement(c,{title:"Settings"},i,!0===n&&React.createElement(h,e),React.createElement("div",{className:"yasr-guten-block-panel"},o)))},m=function(e){var t={bottomDesc:!1,overallRating:!1,blockSettings:!1};return"yet-another-stars-rating/visitor-votes"===e&&(t.blockSettings=!0,t.bottomDesc=l.SY),"yet-another-stars-rating/overall-rating"===e&&(t.overallRating=!0,t.blockSettings=!0,t.bottomDesc=l.Ag),t},h=function(e){var t=e.block,r=e.setAttributes,a={size:t,postId:e.postId,setAttributes:r};return React.createElement(React.Fragment,null,React.createElement("h3",null,l.pD),React.createElement(p,a),React.createElement(d,a))},p=function(e){return React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,l.lN),React.createElement("div",null,React.createElement(l.aF,{size:e.size,setAttributes:e.setAttributes})))},d=function(e){return React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,"Post ID"),React.createElement(l.yG,{postId:e.postId,setAttributes:e.setAttributes}),React.createElement("div",{className:"yasr-guten-block-explain"},"Use return (↵) to save."),React.createElement("p",null,l.Mp))},v=wp.element.Fragment,y=wp.blockEditor.useBlockProps;const k=function(e){var t=e.attributes,r=t.size,a=t.postId,s=e.name,n=e.isSelected,o=e.setAttributes,i=(0,l.rl)(s),c=i.className,u=i.shortCode,m={block:s,size:r,postId:a,setAttributes:o,hookName:i.hookName},h=y({className:c,name:s}),p=(0,l.YD)(r,"edit"),d=(0,l.rn)(a);return React.createElement(v,null,n&&React.createElement(g,m),React.createElement("div",h,"[",u,p,d,"]",n&&React.createElement(l.aF,{size:r,setAttributes:o})))};var b=wp.blockEditor.useBlockProps;for(var R=wp.blocks.registerBlockType,f={overallRating:a,visitorVotes:s,mostActiveUsers:n,topReviewers:o,userRateHistory:i},E=function(){var e=w[_];R(f[e],{edit:k,save:function(t){return function(e,t){var r=e.attributes,a=r.size,s=r.postId,n=t.name,o=(0,l.rl)(n),i=o.className,c=o.shortCode,u=b.save({className:i}),g=(0,l.YD)(a,"save"),m=(0,l.rn)(s);return React.createElement("div",u,"[",c,g,m,"]")}(t,f[e])}})},_=0,w=Object.keys(f);_<w.length;_++)E()},434:(e,t,r)=>{r.d(t,{Ag:()=>g,Mp:()=>u,SY:()=>m,Sg:()=>d,YD:()=>v,aF:()=>p,lN:()=>n,pD:()=>s,pP:()=>R,rl:()=>k,rn:()=>y,yG:()=>h});var a=wp.i18n.__,s=a("All these settings are optional","yet-another-stars-rating"),n=a("Choose Size","yet-another-stars-rating"),o=a("Choose stars size","yet-another-stars-rating"),i=a("Small","yet-another-stars-rating"),l=a("Medium","yet-another-stars-rating"),c=a("Large","yet-another-stars-rating"),u=a("Leave this blank if you don't know what you're doing.","yet-another-stars-rating"),g=a("Remember: only the post author can rate here.","yet-another-stars-rating"),m=a("This is the star set where your users will be able to vote","yet-another-stars-rating"),h=function(e){var t;return!1!==e.postId&&(t=e.postId),React.createElement("div",null,React.createElement("input",{type:"text",size:"4",defaultValue:t,onKeyPress:function(t){return function(e,t){if("Enter"===t.key){var r=t.target.value;!0!==/^\d+$/.test(r)&&""!==r||e({postId:r}),t.preventDefault()}}(e.setAttributes,t)}}))},p=function(e){return React.createElement("form",null,React.createElement("select",{value:e.size,onChange:function(t){return(0,e.setAttributes)({size:(r=t).target.querySelector("option:checked").value}),void r.preventDefault();var r}},React.createElement("option",{value:"--"},o,"    "),React.createElement("option",{value:"small"},i,"  "),React.createElement("option",{value:"medium"},l),React.createElement("option",{value:"large"},c,"  ")))},d=function(e){if(!0===JSON.parse(yasrConstantGutenberg.isFseElement))return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},React.createElement("div",null,a("This is a template file, you can't rate here. You need to insert the rating inside the single post or page","yet-another-stars-rating")),React.createElement("br",null));if(null===wp.data.select("core/editor"))return React.createElement(React.Fragment,null);var t=a("Rate this article / item","yet-another-stars-rating"),r=wp.data.select("core/editor").getCurrentPost().meta.yasr_overall_rating,s=function(e,t){e=e.toFixed(1),e=parseFloat(e),wp.data.dispatch("core/editor").editPost({meta:{yasr_overall_rating:e}}),this.setRating(e),t()};return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},t,React.createElement("div",{id:"overall-rater",ref:function(){return yasrSetRaterValue(32,"overall-rater",!1,.1,!1,r,s)}}))},v=function(e,t){var r=null;return"edit"===t?("small"!==e&&"medium"!==e||(r=' size="'.concat(e,'"')),r):("small"!==e&&"medium"!==e&&"large"!==e||(r=' size="'.concat(e,'"')),r)},y=function(e){var t=null;return!0===/^\d+$/.test(e)&&(t=' postid="'.concat(e,'"')),t},k=function(e){var t={className:null,shortCode:null,hookName:!1};return"yet-another-stars-rating/overall-rating"===e&&(t.className="yasr-overall-block",t.shortCode="yasr_overall_rating"),"yet-another-stars-rating/visitor-votes"===e&&(t.className="yasr-vv-block",t.shortCode="yasr_visitor_votes"),"yet-another-stars-rating/most-active-users"===e&&(t.className="yasr-active-users-block",t.shortCode="yasr_most_active_users",t.hookName="yasr_top_visitor_setting"),"yet-another-stars-rating/most-active-reviewers"===e&&(t.className="yasr-reviewers-block",t.shortCode="yasr_top_reviewers",t.hookName="yasr_top_reviewers_setting"),"yet-another-stars-rating/user-rate-history"===e&&(t.className="yasr-user-rate-history",t.shortCode="yasr_user_rate_history"),t},b=function(){var e=a("To be able to customize this ranking, you need","yet-another-stars-rating"),t=a("You can buy the plugin, including support, updates and upgrades, on","yet-another-stars-rating");return React.createElement("h3",null,e," ",React.createElement("a",{href:"admin/js/src/guten/yasrGutenUtils?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings#yasr-pro"},"Yasr Pro."),React.createElement("br",null),t," ",React.createElement("a",{href:"admin/js/src/guten/yasrGutenUtils?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings"},"yetanotherstarsrating.com"))},R=function(){return React.createElement("div",null,React.createElement(b,null))}}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(434),r(371),r(288)})();