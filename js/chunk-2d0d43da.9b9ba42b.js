(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d43da"],{"5fd7":function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",(function(){return I}));var n=i("9ab4"),r=i("6d28"),o=i("61cf"),s="item",l="header",h="footer",a=0,c=1,u=2,d=2,p=function(t,e,i,n){for(var r=0,o=t;r<o.length;r++){var s=o[r];s.change=a,s.d=!0}for(var l=[],h=n.offset+n.length,d=function(n){var r=i[n],o=t.find((function(t){return t.d&&t.cell===r}));if(o){var s=e[n];s!==o.top&&(o.top=s,o.change=c),o.d=!1}else l.push(r)},p=n.offset;p<h;p++)d(p);for(var f=t.filter((function(t){return t.d})),g=function(i){var n=f.find((function(t){return t.d&&t.cell.type===i.type})),r=i.i;n?(n.d=!1,n.change=u,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:u,top:e[r]})},v=0,m=l;v<m.length;v++){var b=m[v];g(b)}t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=c,t.top=-9999}))},f=function(t,e,i,n){for(var r,o=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),s=o.length,l=0;l<i.length;l++){var h=i[l],c=h.cell;if(h.change===u){if(l<s)r=o[l],e(r,c,l);else{var d=g(t,c.type);r=e(d,c,l)||d,r.classList.add("virtual-item"),t.appendChild(r)}r["$ionCell"]=c}else r=o[l];h.change!==a&&(r.style.transform="translate3d(0,"+h.top+"px,0)");var p=c.visible;h.visible!==p&&(p?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),h.visible=p),c.reads>0&&(n(c,r),c.reads--)}},g=function(t,e){var i=v(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},v=function(t,e){switch(e){case s:return t.querySelector("template:not([name])");case l:return t.querySelector("template[name=header]");case h:return t.querySelector("template[name=footer]")}},m=function(t,e,i){return{top:Math.max(t-i,0),bottom:t+e+i}},b=function(t,e,i){for(var n=e.top,r=e.bottom,o=0;o<t.length;o++)if(t[o]>n)break;for(var s=Math.max(o-i-1,0);o<t.length;o++)if(t[o]>=r)break;var l=Math.min(o+i,t.length),h=l-s;return{offset:s,length:h}},y=function(t,e,i){var n=i.offset+i.length;return t<=n||e.offset!==i.offset||e.length!==i.length},x=function(t,e){var i=t.length>0?t[t.length-1].index:0;return 0===e?0:e===i+1?t.length:t.findIndex((function(t){return t.index===e}))},H=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t},w=function(t,e,i,n,r,o,a,c,u,p,f,g){for(var v=[],m=g+f,b=f;b<m;b++){var y=t[b];if(r){var x=r(y,b,t);null!=x&&v.push({i:p++,type:l,value:x,index:b,height:i?i(x,b):a,reads:i?0:d,visible:!!i})}if(v.push({i:p++,type:s,value:y,index:b,height:e?e(y,b):u,reads:e?0:d,visible:!!e}),o){x=o(y,b,t);null!=x&&v.push({i:p++,type:h,value:x,index:b,height:n?n(x,b):c,reads:n?0:d,visible:!!n})}}return v},S=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n},E=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)},O=function(t,e,i){var n=e.find((function(e){return e.type===s&&e.index===t}));return n?i[n.i]:-1},j="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}",I=function(){function t(t){var e=this;Object(r["o"])(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){e.updateVirtualScroll()}}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.componentWillLoad=function(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")},t.prototype.connectedCallback=function(){return Object(n["b"])(this,void 0,void 0,(function(){var t,e;return Object(n["d"])(this,(function(i){switch(i.label){case 0:return t=this.el.closest("ion-content"),t?(e=this,[4,t.getScrollElement()]):(console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),[2]);case 1:return e.scrollEl=i.sent(),this.contentEl=t,this.calcCells(),this.updateState(),[2]}}))}))},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.disconnectedCallback=function(){this.scrollEl=void 0},t.prototype.onResize=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(O(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){return void 0===e&&(e=-1),Object(n["b"])(this,void 0,void 0,(function(){var i,r,o;return Object(n["d"])(this,(function(n){return this.items?(i=-1===e?this.items.length-t:e,r=x(this.cells,t),o=w(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,i),this.cells=H(this.cells,o,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate(),[2]):[2]}))}))},t.prototype.checkEnd=function(){return Object(n["b"])(this,void 0,void 0,(function(){return Object(n["d"])(this,(function(t){return this.items&&this.checkRange(this.lastItemLen),[2]}))}))},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(r["h"])(this.readVS.bind(this)),Object(r["f"])(this.writeVS.bind(this)))},t.prototype.readVS=function(){var t=this,e=t.contentEl,i=t.scrollEl,n=t.el,r=0,o=n;while(o&&o!==e)r+=o.offsetTop,o=o.offsetParent;this.viewportOffset=r,i&&(this.viewportHeight=i.offsetHeight,this.currentScrollTop=i.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=this.currentScrollTop-this.viewportOffset,i=m(e,this.viewportHeight,100),n=this.getHeightIndex(),o=b(n,i,2),s=y(t,this.range,o);s&&(this.range=o,p(this.virtualDom,n,this.cells,o),this.nodeRender?f(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(r["l"])(this))},t.prototype.updateCellHeight=function(t,e){var i=this,n=function(){if(e["$ionCell"]===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e?Object(o["c"])(e,n):n()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=w(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=E(this.heightIndex,this.cells.length),this.totalHeight=S(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,n=e.value,r=e.index;switch(i){case s:return this.renderItem(n,r);case l:return this.renderHeader(n,r);case h:return this.renderFooter(n,r)}},t.prototype.render=function(){var t=this;return Object(r["j"])(r["c"],{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(r["j"])(C,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r["k"])(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:!1,configurable:!0}),t}(),C=function(t,e,i){var n=t.dom;return i.map(e,(function(t,e){var i=n[e],r=t.vattrs||{},o=r.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},r),{class:o,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,"+i.top+"px,0)"})})})}))};I.style=j}}]);
//# sourceMappingURL=chunk-2d0d43da.9b9ba42b.js.map