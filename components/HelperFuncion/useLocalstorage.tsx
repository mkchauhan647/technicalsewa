"use client"

import React, { useEffect } from 'react'

const useLocalstorage = () => {
  let token:any = null

  useEffect(()=>{
    const credObj:any =localStorage && localStorage.getItem("loginKey"); 
    const data:any = JSON.parse(credObj); 
    token=data     

  },[])

  return {token}
}

export default useLocalstorage