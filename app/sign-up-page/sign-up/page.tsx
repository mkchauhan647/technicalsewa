import Nav from '@/components/Nav'
import SignUp from '@/components/pageHelperComponents.js/SignUp'
import React from 'react'

const page = () => {
  return (
    <>
    <Nav />
    <SignUp />
    </>
  )
}

export default page

export async function generateMetadata(){
  return{
    title:`SignUP | Technical sewa`
  }
}