if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const c=e=>i(e,l),u={module:{uri:l},exports:o,require:c};s[l]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vuetify"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/686.392b631c.css",revision:null},{url:"/css/chunk-vendors.8683cd29.css",revision:null},{url:"/img/bg.6665bdbf.jpg",revision:null},{url:"/index.html",revision:"bcd0217e997e6c4a4f1a658a98cfbf98"},{url:"/js/272.1380c202.js",revision:null},{url:"/js/686.556a5df1.js",revision:null},{url:"/js/app.ca53fa30.js",revision:null},{url:"/js/chunk-vendors.9bfc9381.js",revision:null},{url:"/manifest.json",revision:"bf25b323445f400bac07c14b2140e57f"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map