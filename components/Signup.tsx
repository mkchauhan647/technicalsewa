import React from "react";
import { BsEyeSlashFill } from "react-icons/bs";

const Signup = () => {
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
          name="Mobile Number"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Mobile Number"
        />
        <input
          name="First Name"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="First Name"
        />
        <input
          name="Last Name"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Last Name"
        />
        <input
          name="Email Address"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Email Address"
        />
        <input
          name="Address"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Address"
        />
        {/* password  */}
        <div className="flex items-center  border-[1px] justify-between">
          <div className="border-r-[1px] w-[90%] p-4">
            <input
              name="Password"
              className=" text-[14px] italic outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <BsEyeSlashFill className="w-[10%]" />
        </div>
        <div className="flex items-center  border-[1px] justify-between">
          <div className="border-r-[1px] w-[90%] p-4">
            <input
              name="Confirm Password"
              className=" text-[14px] italic outline-none"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <BsEyeSlashFill className="w-[10%]" />
        </div>

        <input
          name="Reffered By"
          className=" w-full  p-4 border-[1px] text-[14px] italic outline-none"
          type="text"
          placeholder="Reffered By"
        />

        <button className="w-full bg-[#2591b2] p-4 text-white rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Signup;
