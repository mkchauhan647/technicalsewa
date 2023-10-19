"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

export default function ForgotPasswordForm() {
  const [input, setInput] = useState({
    username: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSignIn = async () => {
    let data = new FormData();
    data.append("username", input.username);
    await axios
      .post(
        `https://smartcare.com.np/techsewa/publiccontrol/resetpassword`,
        data
      )
      .then((response) => {
        console.log("reset response ? = ", response);
        // const credObj = JSON.stringify(response?.data);
        // localStorage.setItem("loginKey", credObj);
      });
  };

  return (
    <div className="bg-white  pt-10 pb-[79px]">
      <div className="flex flex-col justify-center pt-[50px] w-[80%] lg:w-[33.33%]  mx-auto px-4 md:p-0">
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-auto pb-2">
            <img
              src="/../assets/logoofts.png"
              alt="image of logo"
              className="w-full h-full object-container"
            />
          </div>
          <div className="py-2">
            <h2 className="text-[#666666] text-xl leading-[19.5px] font-semibold mt-[12px]">
              Reset your password
            </h2>

            <p className="text-gray-500">
              Enter your registered phone number to reset password.
            </p>
          </div>
        </div>

        <input
          type="text"
          name="username"
          required
          onChange={handleChange}
          placeholder="Phone Number"
          className="border w-full border-[#D9D9D9] py-[12px] pl-[20px] mt-[20px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"
        />

        <button
          onClick={handleSignIn}
          className="text-white text-[15px] leading-[18px] bg-primary font-normal rounded-[2px] w-full py-[15px]
        mt-[44px]"
        >
          Reset Your Password
        </button>

        <div className="flex items-center justify-center mt-[57px] mb-[10px] space-x-1">
          <p className="text-[13px] text-[#666666] leading-[10.72px] font-normal">
            Return to
          </p>
          <Link
            href="/login"
            className="text-[13px] text-[#BB243F] leading-[10px] font-bold underline decoration-[#BB243F] cursor-pointer"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
