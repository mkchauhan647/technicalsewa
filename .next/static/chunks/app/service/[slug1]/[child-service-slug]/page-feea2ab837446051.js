(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6795],{2651:function(e,t,a){Promise.resolve().then(a.bind(a,381)),Promise.resolve().then(a.bind(a,7991)),Promise.resolve().then(a.bind(a,9398))},9998:function(e,t,a){"use strict";a.r(t);var s=a(9268),l=a(5846),r=a.n(l),i=a(6006),o=a(8136),n=a(1033),d=a(4214),c=a(8507),p=a(6008),u=a(8919);t.default=e=>{let{cb:t}=e,{push:a}=(0,p.useRouter)(),{signin:l}=(0,c.Z)(),[m,x]=(0,i.useState)(!1),[f,h]=(0,i.useState)({username:"",password:""}),g=e=>{let{name:t,value:a}=e.target;h({...f,[t]:a})},b=()=>{let e=document.createElement("form");e.setAttribute("method","post"),e.setAttribute("action","https://smartcare.com.np/techsewa/verify/signin");let t={...f};for(var a in e.setAttribute("id","form"),t){var s=document.createElement("input");s.setAttribute("type","hidden"),s.setAttribute("name",a),s.setAttribute("value",t[a]),e.appendChild(s)}document.body.appendChild(e),e.submit()},y=async()=>{x(!0);let e=new FormData;e.append("username",f.username),e.append("password",f.password);try{let s=await d.Z.post("https://smartcare.com.np/techsewa/masterconfig/publiclogin/signinlate",e);if("success"===s.data){(0,u.ZP)("Loggining to CRM..."),b();return}if("object"==typeof s.data&&null!==s.data)l(s.data),t&&(null==t||t()),t||a("/complains");else throw(0,u.ZP)("❌ Invalid login!"),Error("Login Failed")}catch(e){}finally{x(!1)}},[v,w]=(0,i.useState)(!1),j=f.username&&f.password;return(0,s.jsx)("div",{className:"bg-white  pt-[20px] pb-[79px]",children:(0,s.jsxs)("div",{className:"flex flex-col  justify-center pt-[50px] w-[80%] lg:w-[33.33%]  mx-auto px-4 md:p-0",children:[(0,s.jsx)("h2",{className:"text-lg font-bold",children:"Login"}),(0,s.jsx)("input",{type:"text",name:"username",required:!0,onChange:g,placeholder:"Username",className:"border w-full border-[#D9D9D9] px-4 py-3 pl-[20px] mt-[20px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"}),(0,s.jsxs)("div",{className:" border border-[#D9D9D9] rounded-[2px] flex items-center mt-[24px]  w-full",children:[(0,s.jsx)("input",{type:"".concat(!1===v?"password":"text"),name:"password",placeholder:"Password",required:!0,onChange:g,className:"w-full px-4 py-3 pl-[20px]  placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"}),(0,s.jsx)("div",{className:" border-l-[1px] p-4",onClick:()=>w(!v),children:v?(0,s.jsx)(n.Zju,{}):(0,s.jsx)(o.Jmv,{})})]}),(0,s.jsx)(r(),{href:"/account/forgot-password",className:"text-[#666666] text-[13px] leading-[10px] font-light mt-[20px]",children:"Forgot Password ?"}),(0,s.jsx)("button",{disabled:m||!j,onClick:y,className:"text-white text-[15px] leading-[18px] bg-primary font-normal rounded-[2px] w-full py-[15px]\n        mt-[44px] disabled:!text-gray-400 disabled:!bg-opacity-40",children:"Sign in"}),(0,s.jsxs)("div",{className:"flex items-center justify-center mt-10 mb-[10px] space-x-1",children:[(0,s.jsx)("p",{className:"text-[13px] text-[#666666] leading-[10.72px] font-normal",children:"Need an account?"}),(0,s.jsx)(r(),{href:"/sign-up-page",className:"text-[13px] text-[#BB243F] leading-[10px] font-bold underline decoration-[#BB243F] cursor-pointer",children:"Sign up"})]})]})})}},9398:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var s=a(9268),l=a(4214),r=a(6006),i=a(6008),o=a(1033),n=a(4204),d=a(7051),c=a(4283),p=a(8507),u=e=>{let{onProceed:t}=e,{isAuthenticated:a}=(0,p.Z)(),l=(0,i.useRouter)(),[o,n]=(0,r.useState)(null),[d,u]=(0,r.useState)(""),[m,x]=(0,r.useState)("");(0,r.useRef)(),(0,r.useRef)(),(0,r.useRef)();let[f,h]=(0,r.useState)({lat:27.6701866,lng:85.3197062}),g=(0,r.useRef)(),{isLoaded:b}=(0,c.Ji)({googleMapsApiKey:"AIzaSyC2iS_ad-zpImBQFaY3XeZVdzxNLU4nz8s",libraries:["places"]});return((0,r.useEffect)(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{let{latitude:t,longitude:a}=e.coords;h({lat:t,lng:a})},e=>{console.log(e)}):console.log("Geolocation is not supported by this browser.")},[]),b)?(0,s.jsx)("div",{className:"flex max-w-[1280px] m-auto  justify-center items-center  ",children:(0,s.jsxs)("div",{className:"map-container w-full mt-[16px] mb-[39px] p-[9px] shadow-md rounded-md bg-[#f5f5f5] ",children:[(0,s.jsx)("div",{className:"flex flex-col gap-[3px]",children:(0,s.jsx)("h1",{className:"text-[#203EB2] font-bold",children:"Location Info"})}),(0,s.jsxs)("div",{className:"pt-2 lg:flex lg:space-x-3 lg:items-center",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)("h3",{className:"font-medium",children:"Enter Address"})}),(0,s.jsx)("div",{className:"flex flex-grow gap-4 items-center my-[8px] md:my-4 max-md:flex-col",children:(0,s.jsx)(c.F2,{className:"w-full",onLoad:e=>{g.current=e,e.setFields(["geometry"])},onPlaceChanged:()=>{if(null!==g.current){let e=g.current.getPlace();if(e&&e.geometry){let t=e.geometry.location.lat(),a=e.geometry.location.lng();h({lat:t,lng:a})}}},children:(0,s.jsx)("input",{className:"w-full bg-white outline-[1px] outline-[#2591B2]  p-2 ",type:"text",placeholder:"Search Nearest Location"})})})]}),(0,s.jsxs)("div",{className:"w-[full] h-[50vh] flex-wrap p-4 flex justify-between ",children:[(0,s.jsx)("div",{className:"w-full md:basis-[58%] h-[46%] md:h-full",children:(0,s.jsxs)(c.b6,{center:f,zoom:14,mapContainerStyle:{width:"100%",height:"100%"},children:[(0,s.jsx)(c.Jx,{position:f}),o&&(0,s.jsx)(c.tH,{directions:o})]})}),(0,s.jsxs)("div",{className:"w-full md:basis-[37%]",children:[(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("p",{className:"font-bold",children:"Address:"}),(0,s.jsxs)("p",{children:["Latitude : ",f.lat," Longitude : ",f.lng]})]}),(0,s.jsxs)("div",{className:"flex gap-5 mt-[20px]",children:[(0,s.jsx)("button",{className:" bg-primary rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px]",onClick:()=>l.back(),children:"Back"}),(0,s.jsx)("button",{className:" bg-primary rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px]",onClick:()=>{a||l.push("/login"),t(f)},children:"Proceed"})]})]})]})]})}):(0,s.jsx)("h1",{children:"loading......"})},m=a(9600),x=a(4547),f=a(2561);let h=(0,f.Ue)(e=>({inquiryData:null,setInquiryData:t=>{e((0,x.Uy)(e=>{e.inquiryData={...e.inquiryData,...t}}))},clearInquiryData:()=>{e((0,x.Uy)(e=>{e.inquiryData=null}))}})),g=(0,m.E)(h);var b=a(8919);let y=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")};var v=a(9998);function w(e){let{onBack:t}=e,{back:a,push:o}=(0,i.useRouter)(),[n,d]=(0,r.useState)(!1),[c,u]=(0,r.useState)({}),{user:m,isAuthenticated:x}=(0,p.Z)(),{inquiryData:f}=g(),[h,w]=(0,r.useState)(),j={name:null==m?void 0:m.name,email:null==m?void 0:m.email,address:null==m?void 0:m.address,mobile:null==m?void 0:m.mobile},N=async e=>{var t;e.preventDefault(),d(!0);let{location:a,...s}=f,r={customer_id:null==m?void 0:m.id,...s,...c,lat:null==a?void 0:a.lat,long:null==a?void 0:a.long},i=new FormData;for(let e in r)i.append(e,r[e]);h&&i.append("cust_warranty",h);let{data:n}=await l.Z.post("https://smartcare.com.np/techsewa/publicControl/logComplain",i);(0,b.ZP)(null!==(t=null==n?void 0:n.msg)&&void 0!==t?t:"Your complain has been received!"),d(!1),(null==n?void 0:n.status)==="Success"&&o("/complains")};return x?(0,s.jsx)("div",{className:"flex max-w-[1280px] m-auto  justify-center items-center  ",children:(0,s.jsxs)("div",{className:"w-full max-w-2xl my-4 p-4 shadow-md rounded-md bg-[#f5f5f5] ",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsx)("h1",{className:"text-[#203EB2] text-xl font-bold",children:"Complain Inquiry"}),(0,s.jsx)("h3",{children:"Fill the following details to complete!"})]}),(0,s.jsx)("form",{className:"mx-auto my-4",onSubmit:N,children:(0,s.jsxs)("div",{className:"space-y-2",children:[Object.keys(j).map(e=>(0,s.jsxs)("div",{className:"flex px-2 py-1 space-x-2 rounded-sm border border-primary",children:[(0,s.jsxs)("div",{className:"font-medium capitalize",children:[e,": "]}),(0,s.jsx)("div",{className:"",children:j[e]})]},e)),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"warrantyFile",className:"block font-medium text-gray-700 text",children:"Warranty File"}),(0,s.jsx)("input",{type:"file",id:"warrantyFile",className:"mt-1 w-full rounded-md border-gray-200 shadow-sm max-sm:text-sm",onChange:e=>{var t;return w(null===(t=e.target.files)||void 0===t?void 0:t[0])}})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"complain",className:"block font-medium text-gray-700 text",children:"Complain Detail"}),(0,s.jsx)("textarea",{name:"customer_remarks",id:"complain",placeholder:"Explain the issue in detail",className:"p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm max-sm:text-sm",onChange:e=>{let{name:t,value:a}=e.target,s={};s[t]=a,u({...c,...s})},rows:4})]}),(0,s.jsxs)("div",{className:"flex mt-3 space-x-2",children:[(0,s.jsx)("button",{onClick:t,className:"inline-block px-12 py-2 text-sm font-medium rounded border transition-all border-primary hover:scale-105 hover:text-indigo-600 focus:outline-none focus:ring",children:"Back"}),(0,s.jsx)("button",{disabled:n,type:"submit",className:y("inline-block px-12 py-2 text-sm font-medium text-white rounded border transition-all bg-primary hover:scale-105 focus:outline-none focus:ring",n?"bg-opacity-60":""),children:"Submit"})]})]})})]})}):(0,s.jsx)(v.default,{cb:()=>{}})}function j(){let[e,t]=(0,r.useState)(!1),{setInquiryData:a}=g();return e?(0,s.jsx)(w,{onBack:()=>t(!1)}):(0,s.jsx)(u,{onProceed:e=>{a({location:{lat:e.lat,long:e.lng}}),t(!0)}})}var N=e=>{let{data:t}=e,[a,c]=(0,r.useState)(!1),[p,u]=(0,r.useState)(),[m,x]=(0,r.useState)(),f=(0,i.useParams)(),h=(0,r.useMemo)(()=>null==t?void 0:t.filter(e=>e.url_product_name===f.slug1),[]),b=null==h?void 0:h.map(e=>e.product_id),y=async()=>{let e=new FormData;e.append("product_id",b);let t=await l.Z.post("".concat(d.F,"/techsewa/publicControl/GetProductcategiryByProduct"),e);u(null==t?void 0:t.data)};(0,r.useEffect)(()=>{y()},[t]);let v=null==p?void 0:p.filter(e=>e.model===decodeURIComponent(f["child-service-slug"])),w=null==v?void 0:v.map(e=>e.value),N=async()=>{let e=new FormData;e.append("brand_id",w);let t=await l.Z.post("".concat(d.F,"/techsewa/publicControl/getServicesByProductCategory"),e);x(null==t?void 0:t.data)};(0,r.useEffect)(()=>{N()},[p]);let{setInquiryData:k}=g();return(0,r.useEffect)(()=>{let e=null==t?void 0:t.find(e=>e.url_product_name===f.slug1);if(!e||!w)return;let a={service_category:null==e?void 0:e.brand_id,product_category:null==w?void 0:w[0],brand_product_id:null==e?void 0:e.product_id,service_id:null==e?void 0:e.brand_id};k(a)},[p]),(0,s.jsx)("div",{children:a?(0,s.jsx)(j,{}):(0,s.jsx)("div",{children:h&&h.map((e,t)=>{var a;return(0,s.jsxs)("div",{className:"mb-[20px] max-md:p-4 flex flex-col gap-4 ",children:[(0,s.jsxs)("div",{style:{backgroundImage:"url(".concat(null==e?void 0:null===(a=e.image_url)||void 0===a?void 0:a.replace("https://smartcare.com.np/multiservice/","https://smartcare.com.np/multiservice/test/"),")")},className:"bg-white h-[350px] bg-contain bg-no-repeat bg-center w-full relative  py-[20px]",children:[(0,s.jsx)("div",{className:"absolute top-0 left-0 z-0 w-full h-full bg-black/50"}),(0,s.jsx)("div",{className:"absolute left-0 w-full",children:(0,s.jsxs)("div",{className:" max-w-[1280px] mx-auto px-[2px]",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("h3",{className:"text-[#cdcecf] font-[600] text-[16px] ",children:[null==e?void 0:e.brand_name," /"," ",(0,s.jsxs)("span",{className:"text-white font-[600] text-[16px]",children:[null==e?void 0:e.product_name," /"," ",decodeURIComponent(f["child-service-slug"])]})," "]}),(0,s.jsx)("h3",{className:"max-w-[637px] text-white leading-[1.5] tracking-[1px] md:text-[30px] text-[24px] font-bold",children:null==e?void 0:e.title})]}),(0,s.jsxs)("div",{className:"w-[200px] h-[45px] bg-[#1D738D] flex itmes-center  text-white py-[5px] px-[15px] rounded-[6px] mt-[5px]",children:[(0,s.jsx)(o.pHD,{size:30}),(0,s.jsx)("p",{className:"pl-[10px] text-[24px] font-semibold",children:"4.65"}),(0,s.jsx)("p",{className:"pl-[5px] self-end mb-[5px]",children:"Out of 5"})]}),(0,s.jsx)("div",{className:"flex flex-col mt-[11px]  md:gap-[14px] ",children:(0,s.jsx)("div",{className:"flex items-center",children:v&&v.map((e,t)=>(0,s.jsx)("div",{className:"flex flex-col gap-2 pb-4 text-justify text-white listpoint",dangerouslySetInnerHTML:{__html:null==e?void 0:e.description}},t))})})]})})]}),(0,s.jsx)("div",{className:"w-[30%] lg:px-4 z-40  md:absolute md:top-[100px] md:right-14   xl:right-4 2xl:right-28",children:(0,s.jsxs)("div",{className:"bg-primary rounded-md shadow-md w-[340px]  md:w-[355px] p-4 lg:fixed  ",children:[null==v?void 0:v.map((e,t)=>(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,s.jsx)("h2",{className:"text-white  text-[24px] font-medium text-center ",children:"Hire a Expert for"}),(0,s.jsx)("span",{className:"text-white mb-4 text-[24px] font-medium text-center ",children:null==e?void 0:e.text})]},t)),(0,s.jsx)("div",{className:"flex flex-col gap-2 justify-center items-center px-2",children:null==m?void 0:m.map((e,t)=>(0,s.jsx)("div",{className:"flex relative w-full group",children:(0,s.jsxs)("div",{onClick:()=>c(!0),className:"hover:bg-gray-500 h-[20pxpx] cursor-pointer flex justify-between items-center px-4 py-[12px] bg-white w-full text-black rounded-md ",children:[e.text,(0,s.jsx)(n.p6n,{})]},e.value)},t))})]})}),(0,s.jsx)("div",{className:"max-w-[1280px] mx-auto mt-[50px] px-[2px] ",children:v&&v.map((e,t)=>(0,s.jsx)("div",{className:"flex text-justify md:w-[66%] flex-col gap-2",dangerouslySetInnerHTML:{__html:null==e?void 0:e.content}},t))})]},t)})})})}},8919:function(e,t,a){"use strict";let s,l;a.d(t,{x7:function(){return el},ZP:function(){return er}});var r,i=a(6006);let o={data:""},n=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let a="",s="",l="";for(let r in e){let i=e[r];"@"==r[0]?"i"==r[1]?a=r+" "+i+";":s+="f"==r[1]?u(i,r):r+"{"+u(i,"k"==r[1]?"":t)+"}":"object"==typeof i?s+=u(i,t?t.replace(/([^,])+/g,e=>r.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):r):null!=i&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=u.p?u.p(r,i):r+":"+i+";")}return a+(t&&l?t+"{"+l+"}":l)+s},m={},x=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+x(e[a]);return t}return e},f=(e,t,a,s,l)=>{var r;let i=x(e),o=m[i]||(m[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!m[o]){let t=i!==e?e:(e=>{let t,a,s=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?s.shift():t[3]?(a=t[3].replace(p," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(p," ").trim();return s[0]})(e);m[o]=u(l?{["@keyframes "+o]:t}:t,a?"":"."+o)}let n=a&&m.g?m.g:null;return a&&(m.g=m[o]),r=m[o],n?t.data=t.data.replace(n,r):-1===t.data.indexOf(r)&&(t.data=s?r+t.data:t.data+r),o},h=(e,t,a)=>e.reduce((e,s,l)=>{let r=t[l];if(r&&r.call){let e=r(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+s+(null==r?"":r)},"");function g(e){let t=this||{},a=e.call?e(t.p):e;return f(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,n(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,y,v,w=g.bind({k:1});function j(e,t){let a=this||{};return function(){let s=arguments;function l(r,i){let o=Object.assign({},r),n=o.className||l.className;a.p=Object.assign({theme:y&&y()},o),a.o=/ *go\d+/.test(n),o.className=g.apply(a,s)+(n?" "+n:""),t&&(o.ref=i);let d=e;return e[0]&&(d=o.as||e,delete o.as),v&&d[0]&&v(o),b(d,o)}return t?t(l):l}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,C=(s=0,()=>(++s).toString()),E=()=>{if(void 0===l&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");l=!e||e.matches}return l},_=new Map,D=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),I({type:4,toastId:e})},1e3);_.set(e,t)},S=e=>{let t=_.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&S(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?P(e,{type:1,toast:a}):P(e,{type:0,toast:a});case 3:let{toastId:s}=t;return s?D(s):e.toasts.forEach(e=>{D(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let l=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+l}))}}},F=[],A={toasts:[],pausedAt:void 0},I=e=>{A=P(A,e),F.forEach(e=>{e(A)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=(e={})=>{let[t,a]=(0,i.useState)(A);(0,i.useEffect)(()=>(F.push(a),()=>{let e=F.indexOf(a);e>-1&&F.splice(e,1)}),[t]);let s=t.toasts.map(t=>{var a,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},O=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||C()}),L=e=>(t,a)=>{let s=O(t,e,a);return I({type:2,toast:s}),s.id},B=(e,t)=>L("blank")(e,t);B.error=L("error"),B.success=L("success"),B.loading=L("loading"),B.custom=L("custom"),B.dismiss=e=>{I({type:3,toastId:e})},B.remove=e=>I({type:4,toastId:e}),B.promise=(e,t,a)=>{let s=B.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(B.success(k(t.success,e),{id:s,...a,...null==a?void 0:a.success}),e)).catch(e=>{B.error(k(t.error,e),{id:s,...a,...null==a?void 0:a.error})}),e};var Z=(e,t)=>{I({type:1,toast:{id:e,height:t}})},M=()=>{I({type:5,time:Date.now()})},R=e=>{let{toasts:t,pausedAt:a}=$(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&B.dismiss(t.id);return}return setTimeout(()=>B.dismiss(t.id),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,a]);let s=(0,i.useCallback)(()=>{a&&I({type:6,time:Date.now()})},[a]),l=(0,i.useCallback)((e,a)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:r}=a||{},i=t.filter(t=>(t.position||r)===(e.position||r)&&t.height),o=i.findIndex(t=>t.id===e.id),n=i.filter((e,t)=>t<o&&e.visible).length;return i.filter(e=>e.visible).slice(...s?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:M,endPause:s,calculateOffset:l}}},q=j("div")`
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
`,H=j("div")`
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
`,U=j("div")`
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
`,T=j("div")`
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
`,G=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?i.createElement(Y,null,t):t:"blank"===a?null:i.createElement(J,null,i.createElement(H,{...s}),"loading"!==a&&i.createElement(T,null,"error"===a?i.createElement(q,{...s}):i.createElement(U,{...s})))},K=e=>`
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
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[s,l]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(a),Q(a)];return{animation:t?`${w(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:s})=>{let l=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},r=i.createElement(G,{toast:e}),o=i.createElement(W,{...e.ariaProps},k(e.message,e));return i.createElement(V,{className:e.className,style:{...l,...a,...e.style}},"function"==typeof s?s({icon:r,message:o}):i.createElement(i.Fragment,null,r,o))});r=i.createElement,u.p=void 0,b=r,y=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:s,children:l})=>{let r=i.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return i.createElement("div",{ref:r,className:t,style:a},l)},ea=(e,t)=>{let a=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...s}},es=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,el=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:l,containerStyle:r,containerClassName:o})=>{let{toasts:n,handlers:d}=R(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:o,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(a=>{let r=a.position||t,o=ea(r,d.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?es:"",style:o},"custom"===a.type?k(a.message,a):l?l(a):i.createElement(ee,{toast:a,position:r}))}))},er=B}},function(e){e.O(0,[2775,5625,6680,3296,8166,1524,7269,8121,372,7441,9173,1656,7029,5383,381,7991,9253,5769,1744],function(){return e(e.s=2651)}),_N_E=e.O()}]);