(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4649],{6191:function(e,t,a){Promise.resolve().then(a.bind(a,381)),Promise.resolve().then(a.bind(a,766))},766:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var r=a(9268),s=a(4214),o=a(5846),i=a.n(o),n=a(6008),l=a(6006),d=a(8919);function c(){let{push:e}=(0,n.useRouter)(),[t,a]=(0,l.useState)(""),[o,c]=(0,l.useState)({mobile:""}),p=async()=>{let a=new FormData;a.append("type",t),a.append("username",o.mobile),await s.Z.post("https://smartcare.com.np/techsewa/publiccontrol/resetpassword",a).then(t=>{var a;let{data:r}=t;(!(null==r?void 0:r.status)||(null==r?void 0:r.status)==="False")&&(null==r?void 0:r.msg)?(0,d.ZP)("❌ ".concat(null==r?void 0:r.msg)):(null==r?void 0:r.status)==="Success"&&((0,d.ZP)(null!==(a=null==r?void 0:r.msg)&&void 0!==a?a:"New password has been sent to your mobile number."),e("/login"))})};return(0,r.jsx)("div",{className:"bg-white  pt-10 pb-[79px]",children:(0,r.jsxs)("div",{className:"flex flex-col justify-center pt-[50px] w-[80%] lg:w-[33.33%]  mx-auto px-4 md:p-0",children:[(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsxs)("div",{className:"py-2",children:[(0,r.jsx)("h2",{className:"text-xl leading-[19.5px] font-semibold mt-[12px]",children:"Reset your password"}),t&&(0,r.jsx)("p",{className:"text-gray-500",children:"Enter your registered phone number to reset password."})]})}),!t&&(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("div",{className:"mb-2 w-full border-2 border-b border-gray-300"}),(0,r.jsx)("p",{className:"",children:"Please specify forgot password is for customer or technician"}),(0,r.jsxs)("div",{className:"py-2 max-md:space-y-2 md:space-x-2 md:flex",children:[(0,r.jsx)("button",{onClick:()=>a("Customer"),className:"text-white text-lg leading-[18px] bg-primary font-normal rounded-sm w-full py-[15px]",children:"Customer"}),(0,r.jsx)("button",{onClick:()=>a("Technician"),className:"text-white text-lg leading-[18px] bg-primary font-normal rounded-sm w-full py-[15px]",children:"Technician"})]})]}),t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"text",name:"mobile",required:!0,onChange:e=>{let{name:t,value:a}=e.target;c({...o,[t]:a})},placeholder:"Phone Number",className:"border w-full border-[#D9D9D9] py-[12px] pl-[20px] mt-[20px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"}),(0,r.jsx)("button",{onClick:p,className:"text-white text-[15px] leading-[18px] bg-primary font-normal rounded-[2px] w-full py-[15px] mt-[44px]",children:"Reset Password"})]}),(0,r.jsxs)("div",{className:"flex items-center justify-center mt-[57px] mb-[10px] space-x-1",children:[(0,r.jsx)("p",{className:"text-[13px] text-[#666666] leading-[10.72px] font-normal",children:"Return to"}),(0,r.jsx)(i(),{href:"/login",className:"text-[13px] text-[#BB243F] leading-[10px] font-bold underline decoration-[#BB243F] cursor-pointer",children:"Login"})]})]})})}},8919:function(e,t,a){"use strict";let r,s;a.d(t,{x7:function(){return es},ZP:function(){return eo}});var o,i=a(6006);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let a="",r="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":r+="f"==o[1]?u(i,o):o+"{"+u(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=u(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=u.p?u.p(o,i):o+":"+i+";")}return a+(t&&s?t+"{"+s+"}":s)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},x=(e,t,a,r,s)=>{var o;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(p," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(p," ").trim();return r[0]})(e);m[n]=u(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&m.g?m.g:null;return a&&(m.g=m[n]),o=m[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),n},h=(e,t,a)=>e.reduce((e,r,s)=>{let o=t[s];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function g(e){let t=this||{},a=e.call?e(t.p):e;return x(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,y,v,w=g.bind({k:1});function N(e,t){let a=this||{};return function(){let r=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=g.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),b(d,n)}return t?t(s):s}}var j=e=>"function"==typeof e,E=(e,t)=>j(e)?e(t):e,k=(r=0,()=>(++r).toString()),C=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},$=new Map,P=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),A({type:4,toastId:e})},1e3);$.set(e,t)},O=e=>{let t=$.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?D(e,{type:1,toast:a}):D(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?P(r):e.toasts.forEach(e=>{P(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},z=[],F={toasts:[],pausedAt:void 0},A=e=>{F=D(F,e),z.forEach(e=>{e(F)})},_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,a]=(0,i.useState)(F);(0,i.useEffect)(()=>(z.push(a),()=>{let e=z.indexOf(a);e>-1&&z.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||_[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},T=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),S=e=>(t,a)=>{let r=T(t,e,a);return A({type:2,toast:r}),r.id},M=(e,t)=>S("blank")(e,t);M.error=S("error"),M.success=S("success"),M.loading=S("loading"),M.custom=S("custom"),M.dismiss=e=>{A({type:3,toastId:e})},M.remove=e=>A({type:4,toastId:e}),M.promise=(e,t,a)=>{let r=M.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(M.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{M.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var B=(e,t)=>{A({type:1,toast:{id:e,height:t}})},H=()=>{A({type:5,time:Date.now()})},L=e=>{let{toasts:t,pausedAt:a}=I(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&A({type:6,time:Date.now()})},[a]),s=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:o}=a||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:B,startPause:H,endPause:r,calculateOffset:s}}},R=N("div")`
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
`,Z=N("div")`
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
`,q=N("div")`
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
`,U=N("div")`
  position: absolute;
`,Y=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=N("div")`
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
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(G,null,t):t:"blank"===a?null:i.createElement(Y,null,i.createElement(Z,{...r}),"loading"!==a&&i.createElement(U,null,"error"===a?i.createElement(R,{...r}):i.createElement(q,{...r})))},K=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=N("div")`
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
`,W=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(a),Q(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(J,{toast:e}),n=i.createElement(W,{...e.ariaProps},E(e.message,e));return i.createElement(V,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,u.p=void 0,b=o,y=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let o=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:o,className:t,style:a},s)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:d}=L(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let o=a.position||t,n=ea(o,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?E(a.message,a):s?s(a):i.createElement(ee,{toast:a,position:o}))}))},eo=M}},function(e){e.O(0,[2775,5625,6680,3296,8166,1524,7269,5383,381,9253,5769,1744],function(){return e(e.s=6191)}),_N_E=e.O()}]);