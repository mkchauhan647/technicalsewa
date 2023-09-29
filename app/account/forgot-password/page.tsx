import React from "react";
import Nav from '@/components/Nav'
import ForgotPasswordForm from "@/features/account/ForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <>
      <Nav />
      <ForgotPasswordForm />
    </>
  );
}

export async function generateMetadata() {
  return {
    title: `Forgot Password | Technical sewa`,
  };
}
