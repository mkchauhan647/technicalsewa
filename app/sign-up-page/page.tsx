"use client";

import Nav from "@/components/Nav";
import Link from "next/link";
import React from "react";
import { FaUserPlus } from "react-icons/fa";

const page = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col  items-center gap-16 py-10">
        <Link href="signup">
          <div className="flex flex-col items-center">
            <img
              className="w-[100px] md:w-[150px]"
              src="/assets/ts-final-logo.png"
              alt="logo"
            />

            <p className="text-[13px] text-[#747774] leading-9">
              Sign Up on Technical Sewa
            </p>
          </div>
        </Link>
        <div className="flex flex-col md:flex-row  gap-10 ">
          {/* sign up to hire  */}
          <Link
            href="/sign-up-page/sign-up"
            className="flex flex-col items-center gap-4 text-center "
          >
            <FaUserPlus
              className="border-[2px] border-[#f87171] rounded-full p-2 "
              size="3.6rem"
              color="#2591b2"
            />

            <span className="text-[20px] text-[#a6adbb]">Sign Up to Hire</span>
            <p className="text-[13px] text-[#a6adbb]">
              Hire the right Professional for your project
            </p>
          </Link>

          {/* sign up as a professinal  */}
          <Link
            href="/sign-up-page/sign-up-pro"
            className="flex flex-col items-center gap-4 text-center"
          >
            <FaUserPlus
              className="border-[2px] border-[#f87171] rounded-full p-2 "
              size="3.6rem"
              color="#2591b2"
            />
            <span className="text-[20px] text-[#a6adbb]">
              Sign Up as a Professional
            </span>
            <p className="text-[13px] text-[#a6adbb]">
              Expand your service business with <br />
              <span className="font-bold">Technical Sewa</span>
            </p>
          </Link>
        </div>
      </div>
    </>

    // sign up page enededskjflks
    // sign up pro started...
  );
};

export default page;
