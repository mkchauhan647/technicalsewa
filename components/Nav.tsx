"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";

const Nav = () => {
  //state for navbar
  const [nav, setNav] = useState(false);

  // handle navbar toggle
  const handleNavClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="Navbar relative   flex justify-between max-lg:p-4 lg:justify-around items-center bg-white h-[70px] ">
        <Link href="/">
          <Image
            src="/assets/ts-final-logo.png"
            height={200}
            width={200}
            alt="logo"
          />
        </Link>
        <div className="nav-links  hidden lg:flex items-center gap-4 text-[#505056] ">
          <div className="group">
            <div>Training</div>
            <div className="hidden group-hover:block">
              <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]">
                <div className="py-1 ">
                  <p className=" pt-1 py-2"></p>
                  <Link href="training/fridgeactraining" className="w-[full]">
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Fridge & AC Training Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link
                    href="training/wachingmachinetraining"
                    className="w-[full]"
                  >
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Washing Machine Repair Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link
                    href="training/homeappliancestraining"
                    className="w-[full]"
                  >
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Home Appliances Repair Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link href="training/ledtvtraining" className="w-[full]">
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Led Tv Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link href="training/plumbingtraining" className="w-[full]">
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Plumbing Training In Kathmandu
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/allservices">All Services</Link>
          <Link href="/professionals">Professionals</Link>
          <Link href="/partpurja">Part Purja</Link>
          <Link href="/login">
            <button className="flex gap-[5px] justify-center items-center bg-[#2591B2] rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] ">
              <HiArrowRightOnRectangle size={20} className="text-white" />
              Sign In
            </button>
          </Link>
        </div>

        {/* ========toggle-menu-bar-click======== */}
        <div onClick={handleNavClick} className="menu-btn lg:hidden ">
          {!nav ? (
            <FaBars className="text-[#2591b2]" size={30} />
          ) : (
            <FaTimes className="text-[#2591b2]" size={30} />
          )}
        </div>

        {/* =========mobile-navigation======== */}
        {nav && (
          <div className="bg-white flex flex-col gap-[24px] shadow-lg z-10 absolute w-max   h-screen top-[70px] right-0 ">
            <Link className="flex px-[30px] gap-4 text-[20px] font-medium items-center  w-full justify-starts"  href="/">
              <FaHome className="text-[#2591b2]" />
              Home
            </Link>
            <Link className="flex px-[30px] gap-4 text-[20px] font-medium items-center  w-full justify-starts"  href="#">
              <FaHome className="text-[#2591b2]" />
              Notifications
            </Link>
            <Link className="flex px-[30px] gap-4 text-[20px] font-medium items-center  w-full justify-starts"  href="#">
              <FaHome className="text-[#2591b2]" />
              Blog
            </Link>
            <Link className="flex px-[30px] gap-4 text-[20px] font-medium items-center  w-full justify-starts"  href="/professionals">
              <FaHome className="text-[#2591b2]" />
              Professionals
            </Link>
            <Link className="flex px-[30px] gap-4 text-[20px] font-medium items-center  w-full justify-starts"  href="/partpurja">
              <FaHome className="text-[#2591b2]" />
              Part Purja
            </Link>
            <Link className="flex px-[30px] gap-4 text-[20px] font-medium items-center  w-full justify-starts"  href="/login">
              <FaHome className="text-[#2591b2]" />
              Login
            </Link>
            <Link className="flex px-[30px] gap-4 text-[20px] font-medium items-center  w-full justify-starts"  href="/">
              <FaHome className="text-[#2591b2]" />
              About Us
            </Link>
            <Link className="flex px-[30px] gap-4 text-[20px] font-medium items-center  w-full justify-starts"  href="/">
              <FaHome className="text-[#2591b2]" />
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
