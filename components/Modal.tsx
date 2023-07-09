"use client"
import { baseUrl } from '@/app/otherItem/baseUrl';
import React,{useRef, useState} from 'react'


const Modal = ({show,setShow}:any) => {
  const [activeData,setActiveData] = useState();

  const loadfeatureData = async()=>{
  const resp =  fetch(
    `${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop1`)
   console.log(resp)
  }

  loadfeatureData();

  return (
   <dialog  data-modal className='md:w-[60%] w-full h-[400px] bg-[aliceblue]' open={show}>

   <div className='flex gap-5'>
    <h2>title</h2>
    <button onClick={()=>setShow(!show)} className='float-right'>X</button>
   </div>
   <div>
{/* {activeData?.map((dat)=>{
  <h2>ok</h2>
})} */}
   </div>
  
   </dialog>
  )
}

export default Modal