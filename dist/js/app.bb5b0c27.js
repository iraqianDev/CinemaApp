(function(){"use strict";var e={2550:function(e,t,l){var a=l(9242),o=l(3396),i=l(4870),r=l(7139),n=l(4161);const s={class:"container mx-auto max-w-[95%]"},u={class:"py-5 block text-center md:text-right md:flex items-center gap-2"},c={class:"flex-1 relative"},d=["onKeyup"],v={key:0,class:"hideScroll z-[1000] md:w-1/2 absolute top-[110%] right-0 w-full bg-gray-800 rounded p-3 text-white overflow-y-scroll max-h-[80vh]"},h={key:0,class:"text-left"},p={key:1,class:"rounded grid gap-2"},w={class:"",key:"movie"},m={class:"aspect-square w-[80px] h-[80px] relative"},f=["src"],g={class:"text-left w-full"},y={class:"text-sm sm:text-base"},b={class:"w-[30ch] break-words truncate text-xs"};var x={__name:"App",setup(e){const t=l(3738),x=(0,i.iH)(!1),_=async()=>{let e=await n.Z.get("https://api.themoviedb.org/3/search/movie",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdkMDhhYzY2ZjUyYTQwNWNkMGJjOGIwNmZjMmQ1NiIsInN1YiI6IjY0NjhiNGIxYzM1MTRjMDExZGNhY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v_gEaIShb6Jsp9FdUIG2PuNTypNSuy0w5NINp6yc_0"},params:{query:N.value}}),t=await e.data.results;k.value=[...t]},I=t(_,300),N=(0,i.iH)(""),k=(0,i.iH)([]);return(e,t)=>{const l=(0,o.up)("router-link"),n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("nav",u,[(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>[(0,o._)("h1",{class:"text-3xl font-bold text-red-600 flex-1 pb-2 mb-3 md:mb-0",onClick:t[0]||(t[0]=e=>x.value=!1)}," Cinema ")])),_:1}),(0,o._)("div",c,[(0,o.wy)((0,o._)("input",{type:"text",class:"w-full md:w-1/2 p-2 outline-none rounded relative",onKeyup:(0,a.D2)(_,["enter"]),"onUpdate:modelValue":t[1]||(t[1]=e=>N.value=e),onInput:t[2]||(t[2]=(...e)=>(0,i.SU)(I)&&(0,i.SU)(I)(...e)),onClick:t[3]||(t[3]=e=>x.value=!0),placeholder:"Search for movie!"},null,40,d),[[a.nr,N.value]]),N.value.length>0&&x.value?((0,o.wg)(),(0,o.iD)("div",v,[0===k.value.length?((0,o.wg)(),(0,o.iD)("div",h,"Loading...")):((0,o.wg)(),(0,o.iD)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.value,(e=>((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(l,{to:{name:"Movie Details",params:{id:e.id}},onClick:t[4]||(t[4]=e=>x.value=!1),class:"hover:bg-gray-700 duration-300 grid colsSpan gap-4 items-center p-2 rounded grid-flow-col"},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("img",{src:`https://image.tmdb.org/t/p/w500${e.backdrop_path}`,class:"w-full h-full rounded"},null,8,f)]),(0,o._)("div",g,[(0,o._)("h3",y,(0,r.zw)(e.title),1),(0,o._)("p",b,(0,r.zw)(e.overview),1)])])),_:2},1032,["to"])])))),128))]))])):(0,o.kq)("",!0)])]),(0,o._)("div",{onClick:t[5]||(t[5]=e=>x.value=!1)},[((0,o.wg)(),(0,o.j4)(n,{key:e.$route.fullPath}))])])}}};const _=x;var I=_,N=l(2483),k=l(8278);const j={class:"w-full h-[80vh] relative"},D=["src"],J={class:"absolute inset-0 bg-opacity-50 bg-gray-800 p-10 flex items-center"},z={class:"text-white w-[30ch] md:w-[50ch] lg:w-[100ch]"},M={class:"text-4xl my-3 font-bold"},Y={class:"truncate"},G={key:1,class:"text-white text-center text-3xl"},Z={key:2,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden"},O={class:"relative overflow-hidden"},W=["src"],U={class:"text-white absolute bg-red-600 bottom-[-120%] duration-300 group-hover:bottom-0 left-0 style w-full p-4"},S={class:"relative z-10"},C={class:"text-4xl font-bold mb-8"},H={class:"h-14 truncate text-lg"};var Q={__name:"HomeView",setup(e){(0,o.bv)((async()=>{let e=await n.Z.get("https://api.themoviedb.org/3/trending/movie/day",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdkMDhhYzY2ZjUyYTQwNWNkMGJjOGIwNmZjMmQ1NiIsInN1YiI6IjY0NjhiNGIxYzM1MTRjMDExZGNhY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v_gEaIShb6Jsp9FdUIG2PuNTypNSuy0w5NINp6yc_0"}}),l=await e.data.results;t.value=l,console.log(t.value)}));const t=(0,i.iH)([]);return(e,l)=>{const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[t.value.length>0?((0,o.wg)(),(0,o.j4)((0,i.SU)(k.tq),{key:0,class:"mySwiper w-full h-[80vh] my-10"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,(e=>((0,o.wg)(),(0,o.j4)((0,i.SU)(k.o5),{key:e,class:"w-full h-full"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{to:{name:"Movie Details",params:{id:e.id}}},{default:(0,o.w5)((()=>[(0,o._)("div",j,[(0,o._)("img",{src:`https://image.tmdb.org/t/p/w500${e.backdrop_path}`,alt:"",class:"group-hover:blur-sm duration-200 w-full h-full object-cover"},null,8,D),(0,o._)("div",J,[(0,o._)("div",z,[(0,o._)("h2",M,(0,r.zw)(e.title),1),(0,o._)("p",Y,(0,r.zw)(e.overview),1)])])])])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})):(0,o.kq)("",!0),t.value.length<0?((0,o.wg)(),(0,o.iD)("div",G," Loading... ")):((0,o.wg)(),(0,o.iD)("div",Z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:"group"},[(0,o.Wm)(a,{to:{name:"Movie Details",params:{id:e.id}}},{default:(0,o.w5)((()=>[(0,o._)("div",O,[(0,o._)("img",{src:`https://image.tmdb.org/t/p/w500${e.backdrop_path}`,alt:"",class:"w-full h-full group-hover:blur-sm duration-200"},null,8,W),(0,o._)("div",U,[(0,o._)("div",S,[(0,o._)("h3",C,(0,r.zw)(e.title),1),(0,o._)("p",H,(0,r.zw)(e.overview),1)])])])])),_:2},1032,["to"])])))),128))]))],64)}}};const T=Q;var E=T;const P={class:"text-white text-center mt-5"},F=(0,o._)("h1",{class:"text-3xl font-bold"},"404 this page is not found",-1);function L(e,t){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",P,[F,(0,o._)("h2",null,[(0,o.Uk)(" Go back to the "),(0,o.Wm)(l,{to:{name:"home"},class:"text-blue-500"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home Page")])),_:1})])])}var B=l(89);const $={},q=(0,B.Z)($,[["render",L]]);var A=q;const K={key:0,class:"text-center text-white"},V={key:1,class:"text-white md:flex gap-5"},R={class:"w-[50vh] max-w-[100%] mx-auto md:mx-0"},X=["src"],ee={src:"/loading.gif",alt:"",class:"w-full h-full rounded"},te={class:"flex-1"},le={class:"text-3xl font-bold my-5"},ae={class:"mt-3 font-bold"},oe=["href"];var ie={__name:"Movieinfo",setup(e){const t=(0,N.yj)(),l=t.params.id;(0,o.bv)((async()=>{let e=await n.Z.get(`https://api.themoviedb.org/3/movie/${l}`,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDdkMDhhYzY2ZjUyYTQwNWNkMGJjOGIwNmZjMmQ1NiIsInN1YiI6IjY0NjhiNGIxYzM1MTRjMDExZGNhY2NiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5v_gEaIShb6Jsp9FdUIG2PuNTypNSuy0w5NINp6yc_0"}});console.log(e.data),s.value=e.data}));const s=(0,i.iH)(""),u=(0,i.iH)(!1),c=()=>{u.value=!0};return(e,t)=>s.value.length>0?((0,o.wg)(),(0,o.iD)("div",K,"Loading...")):((0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("div",R,[(0,o.wy)((0,o._)("img",{onLoad:c,src:`https://image.tmdb.org/t/p/w500${s.value.backdrop_path}`,alt:"",class:"w-full h-full rounded"},null,40,X),[[a.F8,u.value]]),(0,o.wy)((0,o._)("img",ee,null,512),[[a.F8,!u.value]])]),(0,o._)("div",te,[(0,o._)("h1",le,(0,r.zw)(s.value.title),1),(0,o._)("p",null,(0,r.zw)(s.value.overview),1),(0,o._)("p",ae,[(0,o.Uk)("Want to See ? Check it out on "),(0,o._)("a",{href:s.value.homepage,target:"_blank",class:"text-blue-500"},"Website",8,oe)])])]))}};const re=ie;var ne=re,se={__name:"MovieDetails",setup(e){return(e,t)=>((0,o.wg)(),(0,o.j4)(ne))}};const ue=se;var ce=ue;const de=[{path:"/",name:"Home page",component:E},{path:"/movie/:id",name:"Movie Details",component:ce},{path:"/home",redirect:"/"},{path:"/:catchAll(.*)",name:"Not Found",component:A}],ve=(0,N.p7)({history:(0,N.PO)("/"),routes:de});ve.beforeEach(((e,t,l)=>{document.title=e.name,l()}));var he=ve;(0,a.ri)(I).use(he).mount("#app")}},t={};function l(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(t,a,o,i){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],i=e[c][2];for(var n=!0,s=0;s<a.length;s++)(!1&i||r>=i)&&Object.keys(l.O).every((function(e){return l.O[e](a[s])}))?a.splice(s--,1):(n=!1,i<r&&(r=i));if(n){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,o,i]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,r=a[0],n=a[1],s=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(o in n)l.o(n,o)&&(l.m[o]=n[o]);if(s)var c=s(l)}for(t&&t(a);u<r.length;u++)i=r[u],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(c)},a=self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(2550)}));a=l.O(a)})();
//# sourceMappingURL=app.bb5b0c27.js.map