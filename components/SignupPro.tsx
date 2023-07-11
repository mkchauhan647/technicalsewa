"use client";

import React, { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const SignupPro = () => {
  const [input, setInput] = useState({
    mobilenumber: "",
    name: "",
    address: "",
    emailaddress: "",
    password: "",
    confirmpassword: "",
    skill: "",
  });

  const onformChange = () => {};

  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col  items-center gap-10 py-10">
      {/* logo and text  */}
      <div className="flex flex-col items-center">
        <img
          className="w-[100px] md:w-[150px]"
          src="../Assets/ts-final-logo.png"
          alt="logo"
        />

        <p className="text-[13px] text-[#747774] leading-9">
          Sign Up to use our services
        </p>
      </div>

      {/* input  */}
      <div className="w-[80%] lg:w-[33.33%]  flex flex-col gap-5">
        <input
          name="mobilenumber"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Mobile Number"
          required
        />
        <input
          name="name"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Name"
          required
        />
        <input
          name="address"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Address"
          required
        />
        <input
          name="emailaddress"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Email Address"
          required
        />

        {/* password  */}
        <div className="flex items-center  border-[1px] justify-between">
          <div className="pl-4">
            <input
              name="password"
              className=" text-[14px] italic outline-none"
              type={`${showPassword === false ? "password" : "text"}`}
              placeholder="Password"
              required
            />
          </div>
          <div
            className="border-l-[1px] p-4"
            onClick={() => setshowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEye /> : <BsEyeSlashFill />}
          </div>
        </div>
        <div className="flex items-center  border-[1px] justify-between">
          <div className=" pl-4">
            <input
              name="confirmpassword"
              className=" text-[14px] italic outline-none"
              type={`${showConfirmPassword === false ? "password" : "text"}`}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div
            className=" border-l-[1px] p-4"
            onClick={() => setshowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <AiOutlineEye /> : <BsEyeSlashFill />}
          </div>
        </div>

        <input
          name="skill"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Skill"
          required
        />

        <button className="w-full bg-[#2591b2] p-4 text-white rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignupPro;
