(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4996c75e"],{"13d9":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],c=0;c<e.rangeCount;c++)a.push(e.getRangeAt(c));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},"6d9f":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o={class:"frame"},n={class:"frame__header u-text-center"},r=Object(c["i"])("h1",null,"FeedME.IO",-1),s=[r],i=Object(c["i"])("div",{class:"frame__subtitle"},"為飢餓的你而生",-1),l=Object(c["i"])("div",{class:"content-no-padding"},[Object(c["i"])("div",{class:"divider m-0"})],-1),d={class:"frame__body"},u={class:"content u-text-center"},p={class:"hero fullscreen bg-yellow-200"},b=Object(c["i"])("div",{class:"mx-auto"},[Object(c["i"])("h1",{class:"title uppercase"},"看!"),Object(c["i"])("h3",{class:"subtitle text-gray-600"},"快按這!")],-1),f=[b],m=Object(c["i"])("div",{class:"content-no-padding"},[Object(c["i"])("div",{class:"divider m-0"})],-1),y=Object(c["i"])("div",{class:"frame__footer"},[Object(c["i"])("div",{class:"frame__subtitle u-text-center"},[Object(c["i"])("i",null,"這是一個開發階段的頁面")])],-1);function v(e,t,a,r,b,v){return Object(c["w"])(),Object(c["h"])("div",o,[Object(c["i"])("div",n,[Object(c["i"])("div",null,[Object(c["i"])("div",{onClick:t[0]||(t[0]=(...t)=>e.frontPage&&e.frontPage(...t)),class:"frame__title"},s),i])]),l,Object(c["i"])("div",d,[Object(c["i"])("div",u,[Object(c["i"])("div",p,[Object(c["i"])("div",{onClick:t[1]||(t[1]=t=>e.copyToMy("link")),class:"hero-body"},f)])])]),m,y])}var g=a("6c02"),w=a("afbc"),O=a("f904"),j=a.n(O),h=a("6c42");const x=Object(h["b"])();var C=Object(c["m"])({name:"order",components:{},setup(){const e=Object(g["e"])(),t=Object(c["y"])({key:e.params.keys}),a=e=>{"link"===e&&(j()("https://lwcjacky.github.io/FeedME.IO/#/user/"+t.key),x.success("已複製到剪貼簿")),w["a"].go(-1)};return{copyToMy:a,data:t}}});C.render=v;t["default"]=C},f904:function(e,t,a){"use strict";var c=a("13d9"),o={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function r(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function s(e,t){var a,s,i,l,d,u,p=!1;t||(t={}),a=t.debug||!1;try{i=c(),l=document.createRange(),d=document.getSelection(),u=document.createElement("span"),u.textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(c){if(c.stopPropagation(),t.format)if(c.preventDefault(),"undefined"===typeof c.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=o[t.format]||o["default"];window.clipboardData.setData(n,e)}else c.clipboardData.clearData(),c.clipboardData.setData(t.format,e);t.onCopy&&(c.preventDefault(),t.onCopy(c.clipboardData))})),document.body.appendChild(u),l.selectNodeContents(u),d.addRange(l);var b=document.execCommand("copy");if(!b)throw new Error("copy command was unsuccessful");p=!0}catch(f){a&&console.error("unable to copy using execCommand: ",f),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(f){a&&console.error("unable to copy using clipboardData: ",f),a&&console.error("falling back to prompt"),s=r("message"in t?t.message:n),window.prompt(s,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(l):d.removeAllRanges()),u&&document.body.removeChild(u),i()}return p}e.exports=s}}]);
//# sourceMappingURL=chunk-4996c75e.b23023a6.js.map