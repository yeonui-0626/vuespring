(function(){"use strict";var n={869:function(n,r,t){var e=t(963),o=t(252);function i(n,r,t,e,i,u){const c=(0,o.up)("hello-world");return(0,o.wg)(),(0,o.j4)(c)}var u=t(577);const c={style:{color:"deepskyblue"}};function f(n,r,t,e,i,f){return(0,o.wg)(),(0,o.iD)("h1",c,(0,u.zw)(i.msg),1)}var a={name:"HelloWorld",data(){return{msg:""}},mounted(){fetch("/api/messages/hello").then((n=>n.text())).then((n=>{this.msg=n}))}},l=t(744);const s=(0,l.Z)(a,[["render",f]]);var p=s,v={name:"App",components:{HelloWorld:p}};const h=(0,l.Z)(v,[["render",i]]);var d=h;(0,e.ri)(d).mount("#app")}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(r,e,o,i){if(!e){var u=1/0;for(l=0;l<n.length;l++){e=n[l][0],o=n[l][1],i=n[l][2];for(var c=!0,f=0;f<e.length;f++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](e[f])}))?e.splice(f--,1):(c=!1,i<u&&(u=i));if(c){n.splice(l--,1);var a=o();void 0!==a&&(r=a)}}return r}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[e,o,i]}}(),function(){t.d=function(n,r){for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}}(),function(){var n={143:0};t.O.j=function(r){return 0===n[r]};var r=function(r,e){var o,i,u=e[0],c=e[1],f=e[2],a=0;if(u.some((function(r){return 0!==n[r]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(f)var l=f(t)}for(r&&r(e);a<u.length;a++)i=u[a],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(l)},e=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(869)}));e=t.O(e)})();
//# sourceMappingURL=app.0b0f3f53.js.map