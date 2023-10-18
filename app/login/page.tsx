import Nav from '@/components/Nav'
import LoginForm from '@/components/pageHelperComponents.js/Login'
import React from 'react'

const page = () => {
  return (
    <>
    <Nav />
    <LoginForm />
    </>
  )
}

export default page

export async function generateMetadata(){
  return{
    title:`Login | Technical sewa`
  }
}