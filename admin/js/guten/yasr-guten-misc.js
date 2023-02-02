(()=>{var e={434:(e,t,a)=>{"use strict";a.d(t,{Sg:()=>n});var r=wp.i18n.__,n=(r("All these settings are optional","yet-another-stars-rating"),r("Size","yet-another-stars-rating"),r("Stars size","yet-another-stars-rating"),r("Small","yet-another-stars-rating"),r("Medium","yet-another-stars-rating"),r("Large","yet-another-stars-rating"),r("Leave this blank if you don't know what you're doing.","yet-another-stars-rating"),r("Remember: only the post author can rate here.","yet-another-stars-rating"),r("This is the star set where your users will be able to vote","yet-another-stars-rating"),r("by Visitor Votes, most rated posts first ","yet-another-stars-rating"),r("by Visitor Votes, highest rated posts first ","yet-another-stars-rating"),r("by OverallRating ","yet-another-stars-rating"),function(e){if(!0===JSON.parse(yasrConstantGutenberg.isFseElement))return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},React.createElement("div",null,r("This is a template file, you can't rate here. You need to insert the rating inside the single post or page","yet-another-stars-rating")),React.createElement("br",null));if(null===wp.data.select("core/editor"))return React.createElement(React.Fragment,null);var t=r("Rate this article / item","yet-another-stars-rating"),a=wp.data.select("core/editor").getCurrentPost().meta.yasr_overall_rating,n=function(e,t){e=e.toFixed(1),e=parseFloat(e),wp.data.dispatch("core/editor").editPost({meta:{yasr_overall_rating:e}}),this.setRating(e),t()};return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},t,React.createElement("div",{id:"overall-rater",ref:function(){return yasrSetRaterValue(32,"overall-rater",!1,.1,!1,a,n)}}))})}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,a),l.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=l(e);if(t){var s=l(this).constructor;a=Reflect.construct(r,arguments,s)}else a=r.apply(this,arguments);return n(this,a)}}function n(t,a){if(a&&("object"===e(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var s=wp.i18n.__,o=wp.blocks.registerBlockType,i=wp.components,c=i.PanelBody,u=(i.PanelRow,wp.element.Fragment),y=wp.editor,p=(y.BlockControls,y.InspectorControls),d=s("All these settings are optional","yet-another-stars-rating"),m=s("Choose Size","yet-another-stars-rating"),g=s("Choose stars size","yet-another-stars-rating"),h=s("Small","yet-another-stars-rating"),f=s("Medium","yet-another-stars-rating"),v=s("Large","yet-another-stars-rating"),R=s("Leave this blank if you don't know what you're doing.","yet-another-stars-rating"),b=s("Remember: only the post author can rate here.","yet-another-stars-rating"),E=s("This is the star set where your users will be able to vote","yet-another-stars-rating"),w=s('This block is now deprecated. It will still work, but I suggest to replace it with the new one by simply removing it and adding "Yasr Overall Rating" again.',"yet-another-stars-rating"),k=s('This block is now deprecated. It will still work, but I suggest to replace it with the new one by simply removing it and adding "Yasr Visitors Votes" again.',"yet-another-stars-rating");o("yet-another-stars-rating/yasr-overall-rating",{title:s("[DEPRECATED]Yasr: Overall Rating","yet-another-stars-rating"),description:w,icon:"star-half",keywords:[s("rating","yet-another-stars-rating"),s("author","yet-another-stars-rating"),s("overall","yet-another-stars-rating")],attributes:{overallRatingMeta:{type:"number",source:"meta",meta:"yasr_overall_rating"},size:{type:"string",default:"--"},postId:{type:"string",default:"--"}},edit:function(e){var n,l=e.attributes,o=l.overallRatingMeta,i=l.size,y=l.postId,E=e.setAttributes,w=e.isSelected,k=o,_=null,P=null;"--"!==i&&(_=' size="'+i+'"'),n=/^\d+$/.test(y),"--"!==y&&!0===n&&(P=' postid="'+y+'"');var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(c,React.Component);var n,l,o,i=r(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).yasrOverallRateThis=s("Rate this article / item","yet-another-stars-rating"),t}return n=c,(l=[{key:"render",value:function(){return React.createElement("div",null,this.yasrOverallRateThis,React.createElement("div",null,React.createElement("div",{id:"overall-rater",ref:function(){return raterJs({starSize:32,step:.1,showToolTip:!1,rating:k,readOnly:!1,element:document.querySelector("#overall-rater"),rateCallback:function(e,t){e=e.toFixed(1),e=parseFloat(e),E({overallRatingMeta:e}),this.setRating(e),t()}})}})))}}])&&t(n.prototype,l),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),c}();function O(){return React.createElement("form",null,React.createElement("select",{value:i,onChange:N},React.createElement("option",{value:"--"},g),React.createElement("option",{value:"small"},h),React.createElement("option",{value:"medium"},f),React.createElement("option",{value:"large"},v)))}function N(e){var t=e.target.querySelector("option:checked");E({size:t.value}),e.preventDefault()}function z(){return React.createElement("div",null,React.createElement("input",{type:"text",size:"4",onKeyPress:C}))}function C(e){if("Enter"===e.key){var t=e.target.value;!0!==/^\d+$/.test(t)&&""!==t||E({postId:t}),e.preventDefault()}}function I(e){return React.createElement(p,null,React.createElement("div",{class:"yasr-guten-block-panel yasr-guten-block-panel-center"},React.createElement(S,null)),React.createElement(c,{title:"Settings"},React.createElement("h3",null,d),React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,m),React.createElement("div",null,React.createElement(O,null))),React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,"Post ID"),React.createElement(z,null),React.createElement("div",{className:"yasr-guten-block-explain"},R)),React.createElement("div",{className:"yasr-guten-block-panel"},b)))}return React.createElement(u,null,React.createElement(I,null),React.createElement("div",{className:e.className},"[yasr_overall_rating",_,P,"]",w&&React.createElement(O,null)))},save:function(e){var t=e.attributes,a=t.size,r=t.postId,n="",l=r;return a&&(n+='size="'+a+'"'),r&&("--"===r&&(l=wp.data.select("core/editor").getCurrentPostId()),n+=' postid="'+l+'"'),React.createElement("div",null,"[yasr_overall_rating ",n,"]")}}),o("yet-another-stars-rating/yasr-visitor-votes",{title:s("[DEPRECATED]Yasr: Visitor Votes","yet-another-stars-rating"),description:k,icon:"star-half",keywords:[s("rating","yet-another-stars-rating"),s("visitor","yet-another-stars-rating"),s("votes","yet-another-stars-rating")],attributes:{size:{type:"string",default:"--"},postId:{type:"string",default:"--"}},edit:function(e){var t,a=e.attributes,r=a.size,n=a.postId,l=e.setAttributes,s=e.isSelected,o=null,i=null;function y(){return React.createElement("form",null,React.createElement("select",{value:r,onChange:b},React.createElement("option",{value:"--"},g),React.createElement("option",{value:"small"},h),React.createElement("option",{value:"medium"},f),React.createElement("option",{value:"large"},v)))}function b(e){var t=e.target.querySelector("option:checked");l({size:t.value}),e.preventDefault()}function w(){return React.createElement("div",null,React.createElement("input",{type:"text",size:"4",onKeyPress:k}))}function k(e){if("Enter"===e.key){var t=e.target.value;!0!==/^\d+$/.test(t)&&""!==t||l({postId:t}),e.preventDefault()}}function _(e){return React.createElement(p,null,React.createElement(c,{title:"Settings"},React.createElement("h3",null,d),React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,m),React.createElement("div",null,React.createElement(y,null))),React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,"Post ID"),React.createElement(w,null),React.createElement("div",{className:"yasr-guten-block-explain"},R)),React.createElement("div",{className:"yasr-guten-block-panel"},E)))}return t=/^\d+$/.test(n),"--"!==r&&(o=' size="'+r+'"'),"--"!==n&&!0===t&&(i=' postid="'+n+'"'),React.createElement(u,null,React.createElement(_,null),React.createElement("div",{className:e.className},"[yasr_visitor_votes",o,i,"]",s&&React.createElement(y,null)))},save:function(e){var t=e.attributes,a=t.size,r=t.postId,n="",l=r;return a&&(n+='size="'+a+'"'),r&&("--"===r&&(l=wp.data.select("core/editor").getCurrentPostId()),n+=' postid="'+l+'"'),React.createElement("div",null,"[yasr_visitor_votes ",n,"]")}}),wp.data.dispatch("core/edit-post").hideBlockTypes("yet-another-stars-rating/yasr-overall-rating"),wp.data.dispatch("core/edit-post").hideBlockTypes("yet-another-stars-rating/yasr-visitor-votes")})(),(()=>{"use strict";var e=a(434),t=wp.i18n.__,r=wp.plugins.registerPlugin,n=wp.editPost,l=n.PluginSidebar,s=n.PluginSidebarMoreMenuItem,o=wp.components.PanelBody,i=wp.element.Fragment,c=function(){return React.createElement("div",null)},u=function(e){if("disabled"===yasrConstantGutenberg.autoInsert)return React.createElement(React.Fragment,null);var a=wp.data.select("core/editor").getCurrentPost().meta.yasr_auto_insert_disabled,r=!1;"yes"===a&&(r=!0);return React.createElement("div",{className:"yasr-guten-block-panel-center"},React.createElement("hr",null),React.createElement("label",null,React.createElement("span",null,t("Disable auto insert for this post or page?","yet-another-stars-rating"))),React.createElement("div",{className:"yasr-onoffswitch-big yasr-onoffswitch-big-center",id:"yasr-switcher-disable-auto-insert"},React.createElement("input",{type:"checkbox",name:"yasr_auto_insert_disabled",className:"yasr-onoffswitch-checkbox",value:"yes",id:"yasr-auto-insert-disabled-switch",defaultChecked:r,onChange:function(e){var t=e.target,a="yes";!0!==(r="checkbox"===t.type?t.checked:t.value)&&(a="no"),wp.data.dispatch("core/editor").editPost({meta:{yasr_auto_insert_disabled:a}})}}),React.createElement("label",{className:"yasr-onoffswitch-label",htmlFor:"yasr-auto-insert-disabled-switch"},React.createElement("span",{className:"yasr-onoffswitch-inner"}),React.createElement("span",{className:"yasr-onoffswitch-switch"}))))};r("yasr-sidebar",{icon:"star-half",title:t("Yasr: Settings","yet-another-stars-rating"),render:function(){var a=[React.createElement(c,{key:0})];return wp.hooks.doAction("yasr_below_panel",a),React.createElement(i,null,React.createElement(s,{target:"yasr-guten-sidebar"},t("YASR post settings","yet-another-stars-rating")),React.createElement(l,{name:"yasr-guten-sidebar",title:"YASR Settings"},React.createElement(o,null,React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},React.createElement(e.Sg,null),React.createElement("div",null,t('This is the same value that you find the "Yasr: Overall Rating" block.',"yet-another-stars-rating")),React.createElement(u,null),a))))}})})()})();