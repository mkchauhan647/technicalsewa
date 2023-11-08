(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9538],{8470:function(s,e,i){Promise.resolve().then(i.bind(i,381)),Promise.resolve().then(i.bind(i,7991)),Promise.resolve().then(i.bind(i,1676))},1676:function(s,e,i){"use strict";i.r(e),i.d(e,{default:function(){return c}});var d=i(9268),a=i(972),l=i(6006);function c(s){let{complainId:e}=s,[i,c]=(0,l.useState)(null),[r,n]=(0,l.useState)(!0),m=async s=>{let e=new FormData;e.append("complain_id","".concat(s));let{data:i}=await a.hi.post("/techsewa/publiccontrol/publicComplain/getcomplaindetails",e);c(i),n(!1)};return((0,l.useEffect)(()=>{m(e)},[e]),r)?(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"flex justify-center items-center space-x-2",children:[(0,d.jsx)("span",{className:"sr-only",children:"Loading..."}),(0,d.jsx)("div",{className:"h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"}),(0,d.jsx)("div",{className:"h-5 w-5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"}),(0,d.jsx)("div",{className:"w-5 h-5 bg-black rounded-full animate-bounce"})]})}):(0,d.jsx)("div",{className:"container mx-auto",children:(0,d.jsxs)("div",{className:"py-4 space-x-4 space-y-4",children:[(0,d.jsxs)("div",{className:"gap-y-2 md:gap-y-4 md:grid md:grid-cols-2 md:gap-x-4",children:[(0,d.jsxs)("div",{className:"border border-opacity-20 border-primary",children:[(0,d.jsx)("div",{className:"p-2 text-white bg-primary",children:"Customer Info"}),(0,d.jsxs)("div",{className:"py-2 md:grid md:grid-cols-2",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Name: ",null==i?void 0:i.cust_first_name," ",null==i?void 0:i.cust_last_name]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Email: ",null==i?void 0:i.email]})})]}),(0,d.jsxs)("div",{className:"py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Address: ",null==i?void 0:i.cust_address]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Mobile: ",null==i?void 0:i.cust_phone_mobile," "]})})]}),(0,d.jsx)("div",{className:"py-2 md:grid md:grid-cols-2",children:(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Remark: ",null==i?void 0:i.customer_remarks]})})}),(0,d.jsx)("div",{className:"py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary",children:(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsx)("div",{className:"px-2",children:"Warranty:"}),(null==i?void 0:i.cust_warranty)&&(0,d.jsx)("img",{src:null==i?void 0:i.cust_warranty,alt:"",height:200,width:400})]})})]}),(0,d.jsxs)("div",{className:"border border-opacity-20 border-primary",children:[(0,d.jsx)("div",{className:"p-2 text-white bg-primary",children:"Product Information"}),(0,d.jsxs)("div",{className:"py-2 md:grid md:grid-cols-2",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Id: ",null==i?void 0:i.product_id]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Brand Name: ",null==i?void 0:i.brand]})})]}),(0,d.jsxs)("div",{className:"py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Product: ",null==i?void 0:i.product_name]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Model: ",null==i?void 0:i.model]})})]}),(0,d.jsxs)("div",{className:"py-2 md:grid md:grid-cols-2",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Service Name: ",null==i?void 0:i.service_category_name]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Service Description: ",null==i?void 0:i.service_type]})})]})]}),(0,d.jsxs)("div",{className:"border border-opacity-20 border-primary",children:[(0,d.jsx)("div",{className:"p-2 text-white bg-primary",children:"Tech Info"}),(0,d.jsxs)("div",{className:"py-2 md:grid md:grid-cols-2",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Name: ",null==i?void 0:i.tech_name]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Email: ",null==i?void 0:i.tech_email]})})]}),(0,d.jsxs)("div",{className:"py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Address: ",null==i?void 0:i.tech_address]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Mobile: ",null==i?void 0:i.tech_mobile]})})]}),(0,d.jsx)("div",{className:"py-2 md:grid md:grid-cols-2",children:(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Photo: ",null==i?void 0:i.photo]})})}),(0,d.jsx)("div",{className:"py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary",children:(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Tech Warranty: ",null==i?void 0:i.tech_warranty]})})})]}),(0,d.jsxs)("div",{className:"border border-opacity-20 border-primary",children:[(0,d.jsx)("div",{className:"p-2 text-white bg-primary",children:"Call Summary"}),(0,d.jsxs)("div",{className:"space-y-",children:[(0,d.jsxs)("div",{className:"py-2 md:grid md:grid-cols-2",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Status: ",null==i?void 0:i.call_status]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Dealer Name: ",null==i?void 0:i.call_dealer_name]})})]}),(0,d.jsxs)("div",{className:"py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Date: ",null==i?void 0:i.call_purchase_dt]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Time: ",null==i?void 0:i.call_tm]})})]}),(0,d.jsxs)("div",{className:"py-2 md:grid md:grid-cols-2",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Serial No: ",null==i?void 0:i.call_serial_no]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Defect Code: ",null==i?void 0:i.defect_code]})})]}),(0,d.jsxs)("div",{className:"py-2 bg-opacity-20 md:grid md:grid-cols-2 bg-primary",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Repair Code: ",null==i?void 0:i.repair_code]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Symptom Code: ",null==i?void 0:i.symptom_code]})})]}),(0,d.jsx)("div",{className:"py-2 md:grid md:grid-cols-2",children:(0,d.jsx)("div",{className:"",children:(0,d.jsxs)("div",{className:"px-2",children:["Remark: ",null==i?void 0:i.call_engineer_remark]})})})]})]}),(0,d.jsxs)("div",{className:"border border-opacity-20 border-primary",children:[(0,d.jsx)("div",{className:"p-2 text-white bg-primary",children:"Payment Info"}),(0,d.jsx)("div",{className:"flex"})]})]}),(0,d.jsxs)("div",{className:"mb-2",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold",children:"Reviews"}),(0,d.jsx)("div",{className:"reviews"})]})]})})}},972:function(s,e,i){"use strict";i.d(e,{hi:function(){return l},zk:function(){return c}});var d=i(7051),a=i(4214);let l=a.Z.create({baseURL:d.F});async function c(s){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={...e},a=await fetch("".concat(d.F).concat(s),i);return a.json()}}},function(s){s.O(0,[2775,5625,6680,3296,8166,1524,7269,8121,372,7441,5383,381,7991,9253,5769,1744],function(){return s(s.s=8470)}),_N_E=s.O()}]);