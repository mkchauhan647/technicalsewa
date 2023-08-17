"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  HiArrowRightOnRectangle,
  HiMiniWrenchScrewdriver,
} from "react-icons/hi2";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { IoIosNotifications, IoMdCall } from "react-icons/io";
import { LiaBlogSolid } from "react-icons/lia";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdLogin, MdOutlineHomeRepairService } from "react-icons/md";
import { BiSolidInfoCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuMailWarning } from "react-icons/lu";
import useLocalstorage from "./HelperFuncion/useLocalstorage";
import axios from "axios";

interface TrainingCategory {
  text: string;
  value: string;
}

const Nav = () => {
  //state for navbar
  const [nav, setNav] = useState(false);

  // const credObj:any =localStorage && localStorage.getItem("loginKey");
  // const parseCredObj = JSON.parse(credObj);

  const { token: parseCredObj } = useLocalstorage();

  // stop scrolling when side-navigation is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  // handle navbar toggle
  const handleNavClick = () => {
    setNav(!nav);
  };

  // close navigation after clicking navigation links
  const handleNavclose = () => {
    setNav(false);
  };

  // gettrainingcategories
  const [categories, setCategories] = useState<TrainingCategory[]>([]);

  const getCategories = async () => {
    await axios
      .get(
        "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories"
      )
      .then((res) => {
        setCategories(res.data);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <div className="Navbar relative border-b-[1px] mx-auto max-w-[1280px]  border-[#ededed]  flex justify-between max-lg:p-4 items-center bg-white h-[70px] ">
          <Link href="/">
            <Image
              src="/assets/ts-final-logo.png"
              height={200}
              width={200}
              alt="logo"
            />
          </Link>
          <div className="nav-links  hidden md:flex items-center gap-4 text-[#505056] ">
            <div className="group">
              <Link href="/trainings" className="hover:text-[#2591b2]">
                Training
              </Link>
              <div className="hidden group-hover:block">
                <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]">
                  <div className="py-1 h-[400px] overflow-y-scroll ">
                    <div className="py-2 pt-1"></div>
                    {categories.map((cat, i) => {
                      return (
                        <Link
                          key={i}
                          href={`/training/${cat.value}`}
                          className="w-[full]"
                        >
                          <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                            {cat.text}
                          </p>
                          <hr />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Link className="hover:text-[#2591b2]" href="/blogs">
              Blogs
            </Link>
            <Link className="hover:text-[#2591b2]" href="/service">
              Services
            </Link>
            <Link className="hover:text-[#2591b2]" href="/professionals">
              Professionals
            </Link>
            <Link className="hover:text-[#2591b2]" href="/partpurja">
              Part Purja
            </Link>
            {parseCredObj?.id ? (
              <div className="flex gap-4 items-center">
                <Link className="hover:text-[#2591b2]" href="/profile">
                  Profile
                </Link>
                <Link className="hover:text-[#2591b2]" href="/complains">
                  Complains
                </Link>
              </div>
            ) : null}
            {!parseCredObj?.id ? (
              <Link className="hover:text-[#2591b2]" href="/login">
                <button className="flex gap-[5px] justify-center items-center bg-[#2591B2] rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] ">
                  <HiArrowRightOnRectangle size={20} className="text-white" />
                  Sign In
                </button>
              </Link>
            ) : (
              <Link className="hover:text-[#2591b2]" href="#">
                <button className="flex gap-[5px] justify-center items-center bg-[#2591B2] rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] ">
                  <HiArrowRightOnRectangle size={20} className="text-white" />
                  Log Out
                </button>
              </Link>
            )}
          </div>

          {/* ========toggle-menu-bar-click======== */}
          <div onClick={handleNavClick} className="menu-btn md:hidden">
            {!nav ? (
              <FaBars className="text-[#2591b2] cursor-pointer " size={30} />
            ) : (
              <FaTimes className="text-[#2591b2] cursor-pointer " size={30} />
            )}
          </div>

          {/* =========mobile-navigation======== */}
          {nav && (
            <div className="bg-white flex flex-col gap-[24px] shadow-lg z-10 absolute w-max   h-screen top-[70px] right-0 ">
              <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="/"
              >
                <FaHome className="text-[#2591b2]" />
                Home
              </Link>

              {/* <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="#"
              >
                <IoIosNotifications className="text-[#2591b2]" />
                Notifications
              </Link>
               */}

              <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="/blogs"
              >
                <LiaBlogSolid className="text-[#2591b2]" />
                Blog
              </Link>

              <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="/professionals"
              >
                <BsFillPersonCheckFill className="text-[#2591b2]" />
                Professionals
              </Link>
              <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="/partpurja"
              >
                <HiMiniWrenchScrewdriver className="text-[#2591b2]" />
                Part Purja
              </Link>
              {parseCredObj?.id ? (
                <div className="flex flex-col gap-[24px]">
                  <Link
                    onClick={handleNavclose}
                    className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                    href="/service"
                  >
                    <MdOutlineHomeRepairService className="text-[#2591b2]" />
                    All services
                  </Link>
                  <Link
                    onClick={handleNavclose}
                    className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                    href="/profile"
                  >
                    <CgProfile className="text-[#2591b2]" />
                    profile
                  </Link>
                  <Link
                    onClick={handleNavclose}
                    className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                    href="/complains"
                  >
                    <LuMailWarning className="text-[#2591b2]" />
                    Complains
                  </Link>
                </div>
              ) : null}
              {!parseCredObj?.id ? (
                <Link
                  onClick={handleNavclose}
                  className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                  href="/login"
                >
                  <MdLogin className="text-[#2591b2]" />
                  Login
                </Link>
              ) : (
                <Link
                  onClick={handleNavclose}
                  className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                  href="#"
                >
                  <MdLogin className="text-[#2591b2]" />
                  Logout
                </Link>
              )}

              <div className="h-[1px] bg-[#ededed] "></div>
              {/* <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="/"
              >
                <BiSolidInfoCircle className="text-[#2591b2]" />
                About Us
              </Link>
              <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="/"
              >
                <IoMdCall className="text-[#2591b2]" />
                Contact Us
              </Link> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
