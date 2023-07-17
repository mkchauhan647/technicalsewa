"use client";

import React, { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";

const SignUpPro = () => {
  const [input, setInput] = useState({
    mobilenumber: "",
    name: "",
    address: "",
    emailaddress: "",
    password: "",
    confirmpassword: "",
    skill: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const handleSignUPPro = async () => {
    if (input.password === input.confirmpassword) {
      var data = new FormData();
      data.append("name", input.name);
      data.append("address", input.address);
      data.append("mobile", input.mobilenumber);
      data.append("email", input.emailaddress);
      data.append("password", input.password);
      data.append("skill", input.skill);
      data.append("confirm_password", input.confirmpassword);

      await axios
        .post(
          "https://smartcare.com.np/techsewa/masterConfig/publicLogin/TechSignUp",
          data
        )
        .then((response) => {
          console.log(response.data.message);
        });
    } else {
      alert("Password and confirm password do not match");
    }
  };

  return (
    <div className="flex flex-col  items-center gap-10 py-10">
      {/* logo and text  */}
      <div className="flex flex-col items-center">
        <img
          className="w-[100px] md:w-[150px]"
          src="/assets/ts-final-logo.png"
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
          onChange={handleChange}
          required
        />
        <input
          name="name"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Name"
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />

        {/* password  */}
        <div className="flex items-center  border-[1px] justify-between">
          <input
            name="password"
            className="w-full py-[12px] pl-[20px]   placeholder:italic placeholder:font-normal rounded-[2px] outline-none text-[14px]"
            type={`${showPassword === false ? "password" : "text"}`}
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <div
            className="border-l-[1px] p-4"
            onClick={() => setshowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEye /> : <BsEyeSlashFill />}
          </div>
        </div>
        <div className="flex items-center  border-[1px] justify-between">
          <input
            name="confirmpassword"
            className=" w-full py-[12px] pl-[20px]   placeholder:italic placeholder:font-normal rounded-[2px] outline-none text-[14px]"
            type={`${showConfirmPassword === false ? "password" : "text"}`}
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

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
          onChange={handleChange}
          required
        />

        <button
          onClick={handleSignUPPro}
          className="w-full bg-[#2591b2] p-4 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUpPro;
