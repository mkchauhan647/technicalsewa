"use client";

import React, { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "@/public/baseUrl";

const StandardSignUp = () => {
  const [input, setInput] = useState({
    mobilenumber: "",
    firstname: "",
    lastname: "",
    emailaddress: "",
    address: "",
    password: "",
    confirmpassword: "",
    refferedby: "",
  });

  const handleSignUp = async () => {
    let data = new FormData();
    if (input.password === input.confirmpassword) {
      data.append("phone", input.mobilenumber);
      data.append("first_name", input.firstname);
      data.append("last_name", input.lastname);
      data.append("email", input.emailaddress);
      data.append("address", input.address);
      data.append("password", input.password);
      data.append("confirm_password", input.confirmpassword);
      data.append("reffered_by", input.refferedby);

      await axios
        .post(`${baseUrl}techsewa/masterConfig/publicLogin/Signup`, data)
        .then((response) => {});
    } else {
      alert("Password and confirm password do not match");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  return (
    // sign up page started..
    <div className="flex flex-col gap-10 items-center py-10">
      {/* logo and text  */}
      {/* <div className="flex flex-col items-center">
        <img
          className="w-[100px] md:w-[150px]"
          src="/assets/ts-final-logo.png"
          alt="logo"
        />

        <p className="text-[13px] text-[#747774] leading-9">
          Sign Up to use our services
        </p>
      </div> */}

      <h2 className="text-lg font-bold">Sign Up</h2>

      {/* input  */}
      <div className="w-[80%] lg:w-[40%] flex flex-col gap-5">
        <input
          minLength={10}
          name="mobilenumber"
          className=" w-full px-4 py-3 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />
        <div className="lg:space-x-4 max-lg:space-y-5 lg:grid lg:grid-cols-2">
          <input
            name="firstname"
            className="max-lg:w-full px-4 py-3 border-[1px] text-[14px] italic outline-none"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            name="lastname"
            className="max-lg:w-full  px-4 py-3 border-[1px] text-[14px] italic outline-none"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>
        <input
          name="emailaddress"
          className=" w-full  px-4 py-3 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <div className="lg:space-x-4 max-lg:space-y-5 lg:grid lg:grid-cols-2">
          {/* password  */}
          <div className="flex items-center  border-[1px] justify-between">
            <input
              name="password"
              className="w-full px-4 py-3   pl-[20px]   placeholder:italic placeholder:font-normal rounded-[2px] outline-none text-[14px]"
              type={`${showPassword === false ? "password" : "text"}`}
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <div
              className=" border-l-[1px] p-4"
              onClick={() => setshowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEye /> : <BsEyeSlashFill />}
            </div>
          </div>
          <div className="flex items-center  border-[1px] justify-between">
            <input
              name="confirmpassword"
              className=" w-full px-4 py-3 pl-[20px]   placeholder:italic placeholder:font-normal rounded-[2px] outline-none text-[14px]"
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
        </div>

        <div className="lg:space-x-4 max-lg:space-y-5 lg:grid lg:grid-cols-2">
          <input
            name="address"
            className="max-lg:w-full px-4 py-3 border-[1px] text-[14px] italic outline-none"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            required
          />
          <input
            name="refferedby"
            className="max-lg:w-full px-4 py-3 border-[1px] text-[14px] italic outline-none"
            type="text"
            placeholder="Reffered By"
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="p-4 w-full text-white rounded-md bg-primary"
          onClick={handleSignUp}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StandardSignUp;
