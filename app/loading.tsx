import Image from 'next/image';
import React from 'react'


const loading = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-2'> 
    <Image
    src="/assets/tslogo-final1.png"
    height={200}
    width={200}
    alt="logo"
  />
    <h1 className='text-2xl text-primary'>Please Wait...</h1>
    </div>
  )
}

export default loading