(function(){var e={6352:function(e,t,n){var o={"./":[9274,7,274],"./index":[9274,7,274],"./index-1c5c47b4":[9644,9],"./index-1c5c47b4.js":[9644,9],"./index.js":[9274,7,274],"./ionicpwaelements":[8910,9,910],"./ionicpwaelements.js":[8910,9,910],"./loader":[8317,9],"./loader.js":[8317,9],"./pwa-action-sheet.entry":[3807,9,807],"./pwa-action-sheet.entry.js":[3807,9,807],"./pwa-camera-modal-instance.entry":[7890,9,890],"./pwa-camera-modal-instance.entry.js":[7890,9,890],"./pwa-camera-modal.entry":[9238,9,238],"./pwa-camera-modal.entry.js":[9238,9,238],"./pwa-camera.entry":[3099,9,99],"./pwa-camera.entry.js":[3099,9,99],"./pwa-toast.entry":[5816,9,816],"./pwa-toast.entry.js":[5816,9,816]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(r,16|t[1])}))}r.keys=function(){return Object.keys(o)},r.id=6352,e.exports=r},1105:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=1105,e.exports=t},1993:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=1993,e.exports=t},7877:function(e,t,n){"use strict";var o=n(9669),r=n.n(o),a=n(4571);const i="https://pferreirafabricio.github.io/ionic-vue-boilerplate",u=r().create({baseURL:i,headers:{Accept:"application/json","Content-Type":"application/json"}});u.interceptors.request.use((async e=>{const t=await a.u.get({key:"token"});return e.headers.Authorization=`Bearer ${t.value||null}`,e})),u.interceptors.response.use((e=>e),(e=>(401===e.response.status&&(window.location="/logout"),Promise.reject(e)))),t.Z=u},2281:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(7658);var o=n(2201),r=n(9985);function a(){const e=(0,o.tv)(),t={[r.Z.CLIENT]:"client-home",[r.Z.ADMINISTRATOR]:"admin-home"};function n(n,o,r=!1){if(!r)return void e.push({name:t[n]||"logout",params:o});const a=e.resolve({name:t[n]||"logout",params:o});window.location=a.href}return{routes:t,redirectTo:n}}},1583:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(9652);function r(){const e=(0,o.Z)();return{emitter:e}}},9985:function(e,t){"use strict";t.Z={CLIENT:1,ADMINISTRATOR:2}},6755:function(e,t,n){"use strict";var o=n(9963),r=n(9876),a=n(2442),i=n(4571),u=n(5523),c=n(6252),l=n(2262),s=(n(7658),n(3577)),d=n(8903),f=n(2201),p=n(9985);const m=(0,r.Q_)("menu",{state:()=>({publicItems:[{title:"Contact",url:"/contact",icon:d.REe},{title:"Not found",url:"/any-router-that-dont-exists",icon:d.no6},{title:"Not authorized",url:"/not-authorized",icon:d.up},{title:"Division",type:2}],withoutAuth:[{title:"Home",url:"/home",icon:d.LEH},{title:"Division",type:2},{title:"Login",url:"/login",icon:d.IOP},{title:"Logout",url:"/logout",icon:d.qux},{title:"Register",url:"/register",icon:d.vi8},{title:"Division",type:2}],needAuth:[{title:"Logout",url:"/logout",icon:d.qux}],[p.Z.CLIENT]:[{title:"Home",url:"/client/home",icon:d.LEH},{title:"Division",type:2}],[p.Z.ADMINISTRATOR]:[{title:"Dashboard",url:"/admin/dashboard",icon:d.LEH},{title:"Division",type:2}]}),getters:{getPublic(e){return e.publicItems},getWithoutAuth(e){return e.withoutAuth},getNeedAuth(e){return e.needAuth},getMenuByUserType:e=>t=>e[t]||[]}});var h=n(2094),v=n(1583);const g=e=>((0,c.dD)("data-v-b2b47ab8"),e=e(),(0,c.Cn)(),e),y={key:1},w=g((()=>(0,c._)("hr",null,null,-1))),b=[w],_={key:2},k={class:""};var S={__name:"Menu",setup(e){const{emitter:t}=(0,v.Z)(),n=m(),o=(0,h.L)(),r=(0,c.Fl)((()=>n.getPublic)),u=(0,c.Fl)((()=>n.getWithoutAuth)),p=(0,c.Fl)((()=>n.getNeedAuth)),g=(0,c.Fl)((()=>n.getMenuByUserType)),w=(0,c.Fl)((()=>o.getUserType)),S=(0,c.Fl)((()=>o.getUserName)),U=(0,l.iH)(0),O=(0,l.iH)(!1),j=(0,f.tv)(),T=(0,l.iH)(""),N=(0,l.iH)({build:d.J_Q,paperPlane:d.IAR,wallet:d.gUi,megaphone:d.m5g,book:d.s9D,personAdd:d.vi8,power:d.qux,enter:d.IOP,openOutline:d.gmo}),A=(0,l.iH)([]);async function E(){const e=await i.u.get({key:"token"});O.value=!!e.value}async function D(){await E();let e=await w;e=await w;const t=await g.value(e.value);A.value=[...O.value&&t?t:[],...O.value?p.value:u.value,...r.value]}function I(e,t){U.value=e,t.link?window.open(t.link,"_blank"):"/logout"!==t.url?j.push(t.url):window.location=t.url}async function C(){const e=await S.value;e&&(T.value=e.split(" ")[0]||"")}return(0,c.bv)((()=>{t.on("logged",(async()=>{await D(),C()})),D(),C()})),(0,c.Jd)((()=>{D()})),(e,t)=>((0,c.wg)(),(0,c.j4)((0,l.SU)(a.z0),{"content-id":"main-content",type:"overlay"},{default:(0,c.w5)((()=>[(0,c.Wm)((0,l.SU)(a.Gu),null,{default:(0,c.w5)((()=>[(0,c.Wm)((0,l.SU)(a.sr),{class:"ion-text-center",color:O.value?"primary":""},{default:(0,c.w5)((()=>[O.value?((0,c.wg)(),(0,c.j4)((0,l.SU)(a.wd),{key:0,class:"remove-padding"},{default:(0,c.w5)((()=>[(0,c.Uk)("Welcome "+(0,s.zw)(T.value),1)])),_:1})):(0,c.kq)("",!0)])),_:1},8,["color"])])),_:1}),(0,c.Wm)((0,l.SU)(a.W2),null,{default:(0,c.w5)((()=>[(0,c.Wm)((0,l.SU)(a.q_),{id:"inbox-list"},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(A.value,((e,t)=>((0,c.wg)(),(0,c.j4)((0,l.SU)(a.zc),{key:`${e.title}${t}`,"auto-hide":!1},{default:(0,c.w5)((()=>[2!==e.type&&"category"!==e.type?((0,c.wg)(),(0,c.j4)((0,l.SU)(a.Ie),{key:0,lines:"none",detail:"false",class:(0,s.C_)(["hydrated",{selected:U.value===t}]),"router-direction":"root",onClick:n=>I(t,e)},{default:(0,c.w5)((()=>[(0,c.Wm)((0,l.SU)(a.gu),{slot:"start",icon:e.icon},null,8,["icon"]),(0,c.Wm)((0,l.SU)(a.Q$),null,{default:(0,c.w5)((()=>[(0,c.Uk)((0,s.zw)(e.title),1)])),_:2},1024),e.link?((0,c.wg)(),(0,c.j4)((0,l.SU)(a.gu),{key:0,icon:N.value.openOutline,class:"fs-16"},null,8,["icon"])):(0,c.kq)("",!0)])),_:2},1032,["class","onClick"])):2===e.type&&t!==A.value.length-1?((0,c.wg)(),(0,c.iD)("span",y,b)):"category"===e.type&&t!==A.value.length-1?((0,c.wg)(),(0,c.iD)("span",_,[(0,c.Wm)((0,l.SU)(a.Ie),null,{default:(0,c.w5)((()=>[(0,c._)("h1",k,[(0,c._)("b",null,(0,s.zw)(e.title),1)])])),_:2},1024)])):(0,c.kq)("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}))}},U=n(3744);const O=(0,U.Z)(S,[["__scopeId","data-v-b2b47ab8"]]);var j=O,T={__name:"App",setup(e){return(e,t)=>((0,c.wg)(),(0,c.j4)((0,l.SU)(a.dr),null,{default:(0,c.w5)((()=>[(0,c.Wm)((0,l.SU)(a.jI),{"content-id":"main-content"},{default:(0,c.w5)((()=>[(0,c.Wm)(j),(0,c.Wm)((0,l.SU)(a.jP),{id:"main-content"})])),_:1})])),_:1}))}};const N=T;var A=N,E=n(4297),D=[{path:"/client/home",name:"client-home",component:()=>n.e(268).then(n.bind(n,2268)),meta:{userType:p.Z.CLIENT}}],I=[{path:"/admin/dashboard",name:"admin-dashboard",component:()=>n.e(626).then(n.bind(n,6626)),meta:{userType:p.Z.ADMINISTRATOR}}];const C=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>n.e(681).then(n.bind(n,1681))},...D,...I,{path:"/login",name:"login",component:()=>n.e(169).then(n.bind(n,7169))},{path:"/recovery-password",name:"recovery-password",component:()=>n.e(110).then(n.bind(n,9110))},{path:"/register",name:"register",component:()=>n.e(532).then(n.bind(n,8532))},{path:"/contact",name:"contact",component:()=>n.e(652).then(n.bind(n,1652))},{path:"/logout",name:"logout",component:()=>n.e(516).then(n.bind(n,516))},{path:"/not-authorized",name:"not-authorized",component:()=>n.e(30).then(n.bind(n,2030))},{path:"/:catchAll(.*)",name:"not-found",component:()=>n.e(532).then(n.bind(n,8532))}],W=(0,E.p7)({history:(0,E.PO)("/ionic-vue-boilerplate/"),routes:C});var L=W,x=n(2281),P=n(2724),Z=n(2278),B=n(8122);n(8851),n(1292),n(1633),n(1045),n(6187),n(2299),n(3423),n(4687),n(9147),n(6250);L.beforeEach((async(e,t,n)=>{const o=await i.u.get({key:"user"});let r=0,a=0;if(o.value){const{userId:e,userType:t}=JSON.parse(o.value);r=e,a=t}["login","home","register"].includes(e.name)&&o.value?n({name:(0,x.Z)().routes[a]}):e.meta.userType?o.value&&r&&a?e.matched.forEach((e=>{("object"!==typeof e.meta.userType||e.meta.userType.some((e=>e===a)))&&!e.meta.userType!==a?n():n({name:"not-authorized"})})):n({name:"logout"}):n()}));const M=(0,r.WB)(),q=(0,o.ri)(A).use(a.oX).use(L).use(M);q.component("BaseLayout",P.Z),q.component("ErrorMessage",Z.Z),q.component("Loading",B.Z),L.isReady().then((()=>{q.mount("#app")})).then((()=>(0,u.q4)(window)))},2094:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var o=n(9876),r=n(4571),a=n(7877);const i=(0,o.Q_)("user",{state:()=>({userId:0,userType:0}),getters:{async getUserId(){const e=await r.u.get({key:"user"});if(!e.value)return 0;const{userId:t}=JSON.parse(e.value);return t||0},async getUserType(){const e=await r.u.get({key:"user"});if(!e.value)return 0;const{userType:t}=JSON.parse(e.value);return t||0},async getUserName(){const e=await r.u.get({key:"user"});if(!e.value)return"";const{userName:t}=JSON.parse(e.value);return t||""}},actions:{cleanUserData(){this.setUserId=0,this.setUserType=0},sendRecoveryPasswordEmail({},e){return a.Z.post("/recover-password",{email:e})}}})},2278:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(6252),r=n(2262),a=n(3577),i=n(2442);const u={class:"mt-1"};var c={__name:"ErrorMessage",props:{text:{type:String,default:"Something went wrong"}},setup(e){return(t,n)=>((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)((0,r.SU)(i.yW),{color:"danger",class:"fs-14"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.text),1)])),_:1})]))}};const l=c;var s=l},8122:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(6252),r=n(2262),a=n(2442),i={__name:"Loading",props:{loading:{type:Boolean,default:!1},name:{type:String,default:"crescent"}},setup(e){return(t,n)=>((0,o.wg)(),(0,o.iD)("div",null,[e.loading?((0,o.wg)(),(0,o.j4)((0,r.SU)(a.PQ),{key:0,class:"d-block mx-auto",name:e.name,color:"primary"},null,8,["name"])):(0,o.kq)("",!0)]))}};const u=i;var c=u},2724:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});n(7658);var o=n(6252),r=n(2262),a=n(9963),i=n(3577),u=n(2442),c=n(2201);const l={key:0};var s={__name:"BaseLayout",props:{pageTitle:{type:String,required:!1},pageDefaultBackLink:{type:String,required:!1},showMenuButton:{type:Boolean,default:!0},ignoreHistory:{type:Boolean,default:!1},className:{type:String,required:!1}},setup(e){const t=e,{pageDefaultBackLink:n}=(0,r.BK)(t),s=(0,c.tv)();function d(){s.push(n)}return(t,c)=>((0,o.wg)(),(0,o.j4)((0,r.SU)(u._i),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,r.SU)(u.Gu),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,r.SU)(u.sr),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,r.SU)(u.Sm),{slot:"start"},{default:(0,o.w5)((()=>[(0,r.SU)(n)?((0,o.wg)(),(0,o.iD)("div",l,[e.ignoreHistory?((0,o.wg)(),(0,o.j4)((0,r.SU)(u.oU),{key:1,text:"Back","default-href":"",onClick:c[0]||(c[0]=(0,a.iM)((e=>d()),["prevent"]))})):((0,o.wg)(),(0,o.j4)((0,r.SU)(u.oU),{key:0,text:"Back","default-href":(0,r.SU)(n)},null,8,["default-href"]))])):(0,o.kq)("",!0),(0,o.wy)((0,o.Wm)((0,r.SU)(u.fG),{color:"primary"},null,512),[[a.F8,e.showMenuButton]]),(0,o.Wm)((0,r.SU)(u.yW),{class:"ml-4 font-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.pageTitle),1)])),_:1})])),_:1}),(0,o.Wm)((0,r.SU)(u.Sm),{slot:"end",class:"ml-auto"},{default:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"actions-end")])),_:3})])),_:3})])),_:3}),(0,o.Wm)((0,r.SU)(u.W2),{class:(0,i.C_)(`ion-padding ${e.className}`),"scroll-events":!0},{default:(0,o.w5)((()=>[(0,o.WI)(t.$slots,"default")])),_:3},8,["class"])])),_:3}))}};const d=s;var f=d}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return o[e]}}));return i["default"]=function(){return o},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{30:"a81180eb",74:"06c65056",78:"525bdf82",99:"5c006cf4",110:"8aacfd89",158:"febe1868",169:"c595b50e",238:"ba25feab",268:"d026609c",274:"32665fc7",338:"63a2f6a2",516:"4e414c9c",532:"c073c939",541:"6c423a8b",544:"4e5bf5d0",576:"bac46fc5",626:"68d568f9",652:"2d999150",681:"aa7980bf",753:"5ff84184",775:"dd64812a",800:"0119d62c",806:"bb1b97a7",807:"c16268af",816:"fcc74a3b",890:"8876e187",910:"9f9e82aa",990:"f9f7f72a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{30:"cf25d620",110:"427d04f2",169:"f9174bc1",516:"96e994ed",532:"96a75281",652:"8cf29d65",681:"96cb6305"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app-boilerplate:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/ionic-vue-boilerplate/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return r();e(o,u,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={30:1,110:1,169:1,516:1,532:1,652:1,681:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkapp_boilerplate"]=self["webpackChunkapp_boilerplate"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6755)}));o=n.O(o)})();
//# sourceMappingURL=app.aeaa074b.js.map