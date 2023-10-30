import Nav from '@/components/Nav'
import LoginForm from '@/features/authentication/login'
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