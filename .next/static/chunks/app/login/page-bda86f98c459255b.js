(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{6473:function(e,t,a){Promise.resolve().then(a.bind(a,381)),Promise.resolve().then(a.bind(a,9998))},9998:function(e,t,a){"use strict";a.r(t);var r=a(9268),o=a(5846),s=a.n(o),i=a(6006),n=a(8136),l=a(1033),d=a(4214),c=a(8507),p=a(6008),u=a(8919);t.default=e=>{let{cb:t}=e,{push:a}=(0,p.useRouter)(),{signin:o}=(0,c.Z)(),[m,f]=(0,i.useState)(!1),[h,g]=(0,i.useState)({username:"",password:""}),x=e=>{let{name:t,value:a}=e.target;g({...h,[t]:a})},b=()=>{let e=document.createElement("form");e.setAttribute("method","post"),e.setAttribute("action","https://smartcare.com.np/techsewa/verify/signin");let t={...h};for(var a in e.setAttribute("id","form"),t){var r=document.createElement("input");r.setAttribute("type","hidden"),r.setAttribute("name",a),r.setAttribute("value",t[a]),e.appendChild(r)}document.body.appendChild(e),e.submit()},y=async()=>{f(!0);let e=new FormData;e.append("username",h.username),e.append("password",h.password);try{let r=await d.Z.post("https://smartcare.com.np/techsewa/masterconfig/publiclogin/signinlate",e);if("success"===r.data){(0,u.ZP)("Loggining to CRM..."),b();return}if("object"==typeof r.data&&null!==r.data)o(r.data),t&&(null==t||t()),t||a("/complains");else throw(0,u.ZP)("❌ Invalid login!"),Error("Login Failed")}catch(e){}finally{f(!1)}},[v,w]=(0,i.useState)(!1),j=h.username&&h.password;return(0,r.jsx)("div",{className:"bg-white  pt-[20px] pb-[79px]",children:(0,r.jsxs)("div",{className:"flex flex-col  justify-center pt-[50px] w-[80%] lg:w-[33.33%]  mx-auto px-4 md:p-0",children:[(0,r.jsx)("h2",{className:"text-lg font-bold",children:"Login"}),(0,r.jsx)("input",{type:"text",name:"username",required:!0,onChange:x,placeholder:"Username",className:"border w-full border-[#D9D9D9] px-4 py-3 pl-[20px] mt-[20px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"}),(0,r.jsxs)("div",{className:" border border-[#D9D9D9] rounded-[2px] flex items-center mt-[24px]  w-full",children:[(0,r.jsx)("input",{type:"".concat(!1===v?"password":"text"),name:"password",placeholder:"Password",required:!0,onChange:x,className:"w-full px-4 py-3 pl-[20px]  placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"}),(0,r.jsx)("div",{className:" border-l-[1px] p-4",onClick:()=>w(!v),children:v?(0,r.jsx)(l.Zju,{}):(0,r.jsx)(n.Jmv,{})})]}),(0,r.jsx)(s(),{href:"/account/forgot-password",className:"text-[#666666] text-[13px] leading-[10px] font-light mt-[20px]",children:"Forgot Password ?"}),(0,r.jsx)("button",{disabled:m||!j,onClick:y,className:"text-white text-[15px] leading-[18px] bg-primary font-normal rounded-[2px] w-full py-[15px]\n        mt-[44px] disabled:!text-gray-400 disabled:!bg-opacity-40",children:"Sign in"}),(0,r.jsxs)("div",{className:"flex items-center justify-center mt-10 mb-[10px] space-x-1",children:[(0,r.jsx)("p",{className:"text-[13px] text-[#666666] leading-[10.72px] font-normal",children:"Need an account?"}),(0,r.jsx)(s(),{href:"/sign-up-page",className:"text-[13px] text-[#BB243F] leading-[10px] font-bold underline decoration-[#BB243F] cursor-pointer",children:"Sign up"})]})]})})}},8919:function(e,t,a){"use strict";let r,o;a.d(t,{x7:function(){return eo},ZP:function(){return es}});var s,i=a(6006);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let a="",r="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+i+";":r+="f"==s[1]?u(i,s):s+"{"+u(i,"k"==s[1]?"":t)+"}":"object"==typeof i?r+=u(i,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(s,i):s+":"+i+";")}return a+(t&&o?t+"{"+o+"}":o)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,r,o)=>{var s;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(p," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(p," ").trim();return r[0]})(e);m[n]=u(o?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&m.g?m.g:null;return a&&(m.g=m[n]),s=m[n],l?t.data=t.data.replace(l,s):-1===t.data.indexOf(s)&&(t.data=r?s+t.data:t.data+s),n},g=(e,t,a)=>e.reduce((e,r,o)=>{let s=t[o];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"");function x(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let b,y,v,w=x.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=x.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),b(d,n)}return t?t(o):o}}var E=e=>"function"==typeof e,N=(e,t)=>E(e)?e(t):e,k=(r=0,()=>(++r).toString()),C=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},$=new Map,D=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),F({type:4,toastId:e})},1e3);$.set(e,t)},A=e=>{let t=$.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&A(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?O(e,{type:1,toast:a}):O(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?D(r):e.toasts.forEach(e=>{D(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},P=[],z={toasts:[],pausedAt:void 0},F=e=>{z=O(z,e),P.forEach(e=>{e(z)})},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,a]=(0,i.useState)(z);(0,i.useEffect)(()=>(P.push(a),()=>{let e=P.indexOf(a);e>-1&&P.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},_=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),L=e=>(t,a)=>{let r=_(t,e,a);return F({type:2,toast:r}),r.id},M=(e,t)=>L("blank")(e,t);M.error=L("error"),M.success=L("success"),M.loading=L("loading"),M.custom=L("custom"),M.dismiss=e=>{F({type:3,toastId:e})},M.remove=e=>F({type:4,toastId:e}),M.promise=(e,t,a)=>{let r=M.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(M.success(N(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{M.error(N(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var Z=(e,t)=>{F({type:1,toast:{id:e,height:t}})},T=()=>{F({type:5,time:Date.now()})},B=e=>{let{toasts:t,pausedAt:a}=S(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&F({type:6,time:Date.now()})},[a]),o=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:s}=a||{},i=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:T,endPause:r,calculateOffset:o}}},H=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,R=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=j("div")`
  position: absolute;
`,J=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(Y,null,t):t:"blank"===a?null:i.createElement(J,null,i.createElement(q,{...r}),"loading"!==a&&i.createElement(U,null,"error"===a?i.createElement(H,{...r}):i.createElement(R,{...r})))},K=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(a),Q(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(G,{toast:e}),n=i.createElement(W,{...e.ariaProps},N(e.message,e));return i.createElement(V,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))});s=i.createElement,u.p=void 0,b=s,y=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let s=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:s,className:t,style:a},o)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:d}=B(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let s=a.position||t,n=ea(s,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?N(a.message,a):o?o(a):i.createElement(ee,{toast:a,position:s}))}))},es=M}},function(e){e.O(0,[2775,5625,6680,3296,8166,1524,7269,9173,5383,381,9253,5769,1744],function(){return e(e.s=6473)}),_N_E=e.O()}]);