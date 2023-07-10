"use client";

import Signup from "@/components/Signup";
import SignupPro from "@/components/SignupPro";
import Link from "next/link";
import React from "react";
import { FaUserPlus } from "react-icons/fa";

const page = () => {
  return (
    // <div className="flex flex-col  items-center gap-16 py-10">
    //   <Link href="signup">
    //     <div className="flex flex-col items-center">
    //       <img
    //         className="w-[100px] md:w-[150px]"
    //         src="../Assets/ts-final-logo.png"
    //         alt="logo"
    //       />

    //       <p className="text-[13px] text-[#747774] leading-9">
    //         Sign Up on Technical Sewa
    //       </p>
    //     </div>
    //   </Link>
    //   <div className="flex flex-col md:flex-row  gap-10 ">
    //     {/* sign up to hire  */}
    //     <div className="flex flex-col items-center gap-4 text-center">
    //       <FaUserPlus
    //         className="border-[2px] border-[#f87171] rounded-full p-2"
    //         size="3.6rem"
    //         color="#2591b2"
    //       />

    //       <span className="text-[20px] text-[#a6adbb]">Sign Up to Hire</span>
    //       <p className="text-[13px] text-[#a6adbb]">
    //         Hire the right Professional for your project
    //       </p>
    //     </div>

    //     {/* sign up as a professinal  */}
    //     <div className="flex flex-col items-center gap-4 text-center">
    //       <FaUserPlus
    //         className="border-[2px] border-[#f87171] rounded-full p-2"
    //         size="3.6rem"
    //         color="#2591b2"
    //       />
    //       <span className="text-[20px] text-[#a6adbb]">
    //         Sign Up as a Professional
    //       </span>
    //       <p className="text-[13px] text-[#a6adbb]">
    //         Expand your service business with <br />{" "}
    //         <span className="font-bold">Technical Sewa</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>

    // sign up page started..
    // <div>
    //   <Signup />
    // </div>

    // sign up page enededskjflks
    // sign up pro started...

    <div>
      <SignupPro />
    </div>
  );
};

export default page;
