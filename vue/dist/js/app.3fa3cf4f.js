(function(e){function n(n){for(var a,t,o=n[0],h=n[1],f=n[2],i=0,d=[];i<o.length;i++)t=o[i],Object.prototype.hasOwnProperty.call(u,t)&&u[t]&&d.push(u[t][0]),u[t]=0;for(a in h)Object.prototype.hasOwnProperty.call(h,a)&&(e[a]=h[a]);l&&l(n);while(d.length)d.shift()();return r.push.apply(r,f||[]),c()}function c(){for(var e,n=0;n<r.length;n++){for(var c=r[n],a=!0,t=1;t<c.length;t++){var o=c[t];0!==u[o]&&(a=!1)}a&&(r.splice(n--,1),e=h(h.s=c[0]))}return e}var a={},t={app:0},u={app:0},r=[];function o(e){return h.p+"js/"+({}[e]||e)+"."+{"chunk-2d221fb8":"9c7d1606","chunk-302e70d4":"2840f716","chunk-4c698bc1":"ca9cda01","chunk-0c179dbc":"81a08da3","chunk-0e1b7743":"011969fc","chunk-10d865a4":"22cd3a0c","chunk-2c8b5f16":"e8f2104e","chunk-3c7a4aee":"9a12e019","chunk-3fb2c31c":"87bf39a1","chunk-611a13f8":"c211726e","chunk-67d8bbae":"b40f04ae","chunk-76a5381f":"982d0cd8","chunk-81c5d524":"fbc07244","chunk-e7feee38":"aaf77d08","chunk-5d40a1b9":"a0915249","chunk-6bc59e89":"942d07ef","chunk-7c204b5e":"76f7a91e"}[e]+".js"}function h(n){if(a[n])return a[n].exports;var c=a[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,h),c.l=!0,c.exports}h.e=function(e){var n=[],c={"chunk-302e70d4":1,"chunk-0c179dbc":1,"chunk-0e1b7743":1,"chunk-10d865a4":1,"chunk-2c8b5f16":1,"chunk-3c7a4aee":1,"chunk-3fb2c31c":1,"chunk-611a13f8":1,"chunk-67d8bbae":1,"chunk-76a5381f":1,"chunk-81c5d524":1,"chunk-e7feee38":1,"chunk-5d40a1b9":1,"chunk-6bc59e89":1,"chunk-7c204b5e":1};t[e]?n.push(t[e]):0!==t[e]&&c[e]&&n.push(t[e]=new Promise((function(n,c){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d221fb8":"31d6cfe0","chunk-302e70d4":"0f884901","chunk-4c698bc1":"31d6cfe0","chunk-0c179dbc":"87098ace","chunk-0e1b7743":"07f72c75","chunk-10d865a4":"e8a82692","chunk-2c8b5f16":"2b23708e","chunk-3c7a4aee":"268a6462","chunk-3fb2c31c":"4601cb9a","chunk-611a13f8":"d1a23341","chunk-67d8bbae":"098c9fb8","chunk-76a5381f":"78040857","chunk-81c5d524":"8fb10b41","chunk-e7feee38":"226a3b1c","chunk-5d40a1b9":"4e4017bf","chunk-6bc59e89":"c7b99a3e","chunk-7c204b5e":"74d5b1c1"}[e]+".css",u=h.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var f=r[o],i=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(i===a||i===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){f=d[o],i=f.getAttribute("data-href");if(i===a||i===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete t[e],l.parentNode.removeChild(l),c(r)},l.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){t[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,c){a=u[e]=[n,c]}));n.push(a[2]=r);var f,i=document.createElement("script");i.charset="utf-8",i.timeout=120,h.nc&&i.setAttribute("nonce",h.nc),i.src=o(e);var d=new Error;f=function(n){i.onerror=i.onload=null,clearTimeout(l);var c=u[e];if(0!==c){if(c){var a=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+t+")",d.name="ChunkLoadError",d.type=a,d.request=t,c[1](d)}u[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:i})}),12e4);i.onerror=i.onload=f,document.head.appendChild(i)}return Promise.all(n)},h.m=e,h.c=a,h.d=function(e,n,c){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(h.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)h.d(c,a,function(n){return e[n]}.bind(null,a));return c},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="",h.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var l=i;r.push([0,"chunk-vendors"]),c()})({0:function(e,n,c){e.exports=c("56d7")},2395:function(e,n,c){},"56d7":function(e,n,c){"use strict";c.r(n);c("66b9");var a=c("b650"),t=(c("8a58"),c("e41f")),u=(c("c194"),c("7744")),r=(c("e7e5"),c("d399")),o=(c("4142"),c("39d1")),h=(c("5246"),c("6b41")),f=(c("be7f"),c("565f")),i=(c("537a"),c("ac28")),d=(c("a52c"),c("2ed4")),l=(c("9a83"),c("f564")),s=(c("7844"),c("5596")),b=(c("4b0a"),c("2bb1")),p=(c("66cf"),c("343b")),k=(c("da3c"),c("0b33")),m=(c("bda7"),c("5e46")),g=(c("c3a6"),c("ad06")),v=(c("5852"),c("d961")),y=(c("0209"),c("7d5e")),w=(c("f06a"),c("20fb")),P=(c("93ac"),c("bb33")),j=(c("591c"),c("7713")),O=(c("ef6f"),c("82a8")),S=(c("4467"),c("c36e")),A=(c("9cb7"),c("66fd")),x=(c("be39"),c("efa0")),_=(c("3c32"),c("417e")),C=(c("a909"),c("3acc")),E=(c("91d5"),c("f0ca")),L=(c("acb7"),c("67bb")),T=(c("869a"),c("6869")),N=(c("e930"),c("8f80")),M=(c("38d5"),c("772a")),B=(c("e260"),c("e6cf"),c("cca6"),c("a79d"),c("2b0e")),F=function(){var e=this,n=e.$createElement,c=e._self._c||n;return c("div",{attrs:{id:"app"}},[c("router-view")],1)},D=[],U={},q=U,H=(c("7c55"),c("2877")),J=Object(H["a"])(q,F,D,!1,null,null,null),R=J.exports,V=c("8c4f"),$=(c("d3b7"),[{path:"/login",name:"Login",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-10d865a4")]).then(c.bind(null,"a55b"))}},{path:"/main",name:"Main",component:function(){return c.e("chunk-2d221fb8").then(c.bind(null,"cd56"))},children:[{path:"home",name:"Home",component:function(){return c.e("chunk-6bc59e89").then(c.bind(null,"b288"))}},{path:"menu",name:"Menu",component:function(){return c.e("chunk-7c204b5e").then(c.bind(null,"0f38"))}},{path:"shopbag",name:"Shopbag",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-76a5381f")]).then(c.bind(null,"6707"))}},{path:"my",name:"My",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-3c7a4aee")]).then(c.bind(null,"3837"))}}]},{path:"/details",name:"Details",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-67d8bbae")]).then(c.bind(null,"9f52"))}},{path:"/pay",name:"Pay",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-2c8b5f16")]).then(c.bind(null,"76a1"))}},{path:"/newAddress",name:"NewAddress",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-3fb2c31c")]).then(c.bind(null,"5f65"))}},{path:"/address",name:"Address",component:function(){return c.e("chunk-302e70d4").then(c.bind(null,"a821"))}},{path:"/order",name:"Order",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-81c5d524")]).then(c.bind(null,"cf2a"))}},{path:"/acount",name:"Acount",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-611a13f8")]).then(c.bind(null,"d53c"))}},{path:"/allLike",name:"AllLike",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-0e1b7743")]).then(c.bind(null,"2573"))}},{path:"/secure",name:"Secure",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-0c179dbc")]).then(c.bind(null,"305b"))}},{path:"/forgot",name:"Forgot",component:function(){return Promise.all([c.e("chunk-4c698bc1"),c.e("chunk-e7feee38")]).then(c.bind(null,"0fdf"))}},{path:"/search",name:"Search",component:function(){return c.e("chunk-5d40a1b9").then(c.bind(null,"2d3b"))}},{path:"*",redirect:"/login"}]);B["a"].use(V["a"]);var G=new V["a"]({routes:$}),I=G,K=c("bc3a"),Q=c.n(K),W=c("a7fe"),X=c.n(W);c("499a");B["a"].use(a["a"]).use(t["a"]).use(u["a"]).use(r["a"]).use(o["a"]).use(h["a"]).use(M["a"]).use(f["a"]).use(i["a"]).use(d["a"]).use(l["a"]).use(s["a"]).use(b["a"]).use(p["a"]).use(k["a"]).use(m["a"]).use(g["a"]).use(v["a"]).use(y["a"]).use(w["a"]).use(P["a"]).use(j["a"]).use(O["a"]).use(S["a"]).use(A["a"]).use(x["a"]).use(_["a"]).use(C["a"]).use(E["a"]).use(L["a"]).use(T["a"]).use(N["a"]).use(M["a"]),B["a"].config.productionTip=!1,B["a"].use(X.a,Q.a),Q.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",Q.a.defaults.baseURL="http://www.kangliuyong.com:10002",B["a"].prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",new B["a"]({router:I,render:function(e){return e(R)}}).$mount("#app")},"7c55":function(e,n,c){"use strict";var a=c("2395"),t=c.n(a);t.a}});
//# sourceMappingURL=app.3fa3cf4f.js.map