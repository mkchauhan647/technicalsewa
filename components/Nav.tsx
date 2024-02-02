"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  HiArrowRightOnRectangle,
  HiMiniWrenchScrewdriver,
} from "react-icons/hi2";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { IoIosNotifications, IoMdCall } from "react-icons/io";
import { LiaBlogSolid } from "react-icons/lia";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { MdLogin, MdOutlineHomeRepairService } from "react-icons/md";
import { BiSolidInfoCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuMailWarning } from "react-icons/lu";
import { MdModelTraining } from "react-icons/md";
import useLocalstorage from "./HelperFuncion/useLocalstorage";
import axios from "axios";
import useAuthStore from "@/store/useAuthStore";
import Search from "./Search";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface TrainingCategory {
  text: string;
  value: string;
}

interface ServiceCategory {
  brand_id: string;
  brand_name: string;
  image_url: string;
  alt: string;
}

const Nav = () => {
  //state for navbar
  const [nav, setNav] = useState(false);
  const [showinput, setShowinput] = useState(false);
  const { isAuthenticated, user, signout } = useAuthStore();
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const handleLogout = () => {
    signout();
    window.location.href = "/";
  };

  // stop scrolling when side-navigation is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 80) {
        setShowinput(true);
      } else {
        setShowinput(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  });
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

  // service categories
  const [services, setServices] = useState<ServiceCategory[]>([]);

  const getCategories = async () => {
    axios
      .get(
        "https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories"
      )
      .then((res) => {
        setCategories(res.data);
      });
  };

  // services categories
  const getServicesCategories = async () => {
    axios
      .get(
        " https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/getServiceList"
      )
      .then((res) => {
        setServices(res?.data?.brands);
      });
  };

  useEffect(() => {
    getCategories();
    getServicesCategories();
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <div className="Navbar relative border-b-[1px] mx-auto max-w-[1280px]  border-[#ededed] gap-[15px]   flex justify-between max-lg:p-4 items-center bg-white h-[70px] ">
          <a href="/">
            <Image
              src="/assets/ts-final-logo.png"
              height={200}
              width={200}
              alt="logo"
            />
          </a>
          <div
            className={`${
              showinput || !isHomePage ? "max-md:w-72 md:!w-80" : "hidden"
            } `}
          >
            <Search isTopNav />
          </div>
          <div className="nav-links  hidden md:flex items-center gap-4 text-[#505056] ">
            <div className="group">
              <a href="/trainings" className="hover:text-primary">
                Training
              </a>
              {categories && (
                <div className="hidden group-hover:block">
                  <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]">
                    <div className="py-1 max-h-[400px] overflow-y-auto ">
                      <div className="py-1"></div>
                      {categories?.map((cat, i) => {
                        const slug = cat?.text?.replace(" ", "-").toLowerCase();
                        return (
                          <a
                            key={i}
                            href={`/trainings/${slug}`}
                            className="py-1"
                          >
                            <p className="block px-6 py-1 text-sm text-[grey] hover:bg-gray-100">
                              {cat.text}
                            </p>
                            <hr />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="group">
              <Link className="hover:text-primary" href="/blogs">
                Blogs
              </Link>
              <div className="hidden group-hover:block">
                <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]">
                  <div className="py-1 max-h-[400px] overflow-y-auto">
                    <div className="py-2"></div>
                    {categories.map((cat, i) => {
                      const slug = `/blogs/${cat?.text
                        ?.replaceAll(" ", "-")
                        .toLowerCase()}/${cat?.value}`;
                      return (
                        <a key={i} href={slug} className="py-1">
                          <p className="block px-6 py-1 text-sm text-[grey] hover:bg-gray-100">
                            {cat.text}
                          </p>
                          <hr />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* services  */}
            <div className="group">
              <a className="hover:text-primary" href="/service">
                Services
              </a>
              <div className="hidden group-hover:block">
                <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]">
                  <div className="py-1 max-h-[400px] overflow-y-auto">
                    {services.map((service, i) => {
                      return (
                        <div key={i}>
                          <a
                            key={i}
                            href={`/service#service_${service?.brand_id}`}
                            className="py-1"
                          >
                            <p className="block px-6 py-1 text-sm text-[grey] hover:bg-gray-100">
                              {service?.brand_name}
                            </p>
                          </a>
                          <hr />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <a className="hover:text-primary" href="/professionals">
              Professionals
            </a>
            <a className="hover:text-primary" href="/partpurja">
              Part Purja
            </a>
            {isAuthenticated ? (
              <div className="flex gap-4 items-center">
                <Link className="hover:text-primary" href="/profile">
                  Profile
                </Link>
                <Link className="hover:text-primary" href="/complains">
                  Complains
                </Link>
              </div>
            ) : null}
            {!isAuthenticated ? (
              <Link className="hover:text-primary" href="/login">
                <button className="flex gap-[5px] justify-center items-center bg-primary rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] ">
                  <HiArrowRightOnRectangle size={20} className="text-white" />
                  Sign In
                </button>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="flex transition-all hover:scale-105 gap-[5px] justify-center items-center bg-primary rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] "
              >
                <HiArrowRightOnRectangle size={20} className="text-white" />
                Log Out
              </button>
            )}
          </div>

          {/* ========toggle-menu-bar-click======== */}
          <div onClick={handleNavClick} className="menu-btn md:hidden">
            {!nav ? (
              <FaBars className="cursor-pointer text-primary" size={30} />
            ) : (
              <FaTimes className="cursor-pointer text-primary" size={30} />
            )}
          </div>

          {/* =========mobile-navigation======== */}
          {nav && (
            <div className="bg-white flex flex-col gap-[24px] shadow-lg z-10 absolute w-max   h-screen top-[70px] right-0 ">
              <a
                onClick={handleNavclose}
                className="flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts"
                href="/"
              >
                <FaHome className="text-primary" />
                Home
              </a>

              {/* <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="#"
              >
                <IoIosNotifications className="text-primary" />
                Notifications
              </Link>
               */}

              <a
                href="/trainings"
                className="hover:text-primary px-[14px] text-base font-normal flex items-center justify-start gap-4"
              >
                <MdModelTraining className="text-primary" />
                Training
              </a>

              {/* ! BUG */}
              {/* <div className="relative group">
                <Link
                  href="/trainings"
                  className="hover:text-primary px-[14px] text-[16px] font-normal flex items-center justify-start gap-4"
                  onClick={handleNavclose}
                >
                  <MdModelTraining className="text-primary" />
                  Training
                </Link>
                <div className="hidden group-hover:block">
                  <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]">
                    <div className="py-1 h-[400px] overflow-y-scroll ">
                      <div className="py-2 pt-1"></div>
                      {categories.map((cat, i) => {
                        const slug = cat?.text?.replace(" ", "-").toLowerCase();
                        return (
                          <Link
                            key={i}
                            href={`/trainings/${slug}`}
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
              </div> */}

              <a
                onClick={handleNavclose}
                className="flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts"
                href="/blogs"
              >
                <LiaBlogSolid className="text-primary" />
                Blog
              </a>

              <a
                onClick={handleNavclose}
                className="flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts"
                href="/professionals"
              >
                <BsFillPersonCheckFill className="text-primary" />
                Professionals
              </a>
              <a
                onClick={handleNavclose}
                className="flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts"
                href="/partpurja"
              >
                <HiMiniWrenchScrewdriver className="text-primary" />
                Part Purja
              </a>
              {isAuthenticated ? (
                <div className="flex flex-col gap-[24px]">
                  <a
                    onClick={handleNavclose}
                    className="flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts"
                    href="/service"
                  >
                    <MdOutlineHomeRepairService className="text-primary" />
                    All services
                  </a>
                  <Link
                    onClick={handleNavclose}
                    className="flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts"
                    href="/profile"
                  >
                    <CgProfile className="text-primary" />
                    profile
                  </Link>
                  <Link
                    onClick={handleNavclose}
                    className="flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts"
                    href="/complains"
                  >
                    <LuMailWarning className="text-primary" />
                    Complains
                  </Link>
                </div>
              ) : null}
              {!isAuthenticated ? (
                <Link
                  onClick={handleNavclose}
                  className="flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts"
                  href="/login"
                >
                  <MdLogin className="text-primary" />
                  Login
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    handleNavclose();
                    handleLogout();
                  }}
                  className="flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts"
                  href="#"
                >
                  <MdLogin className="text-primary" />
                  Logout
                </Link>
              )}

              <div className="h-[1px] bg-[#ededed] "></div>
              {/* <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="/"
              >
                <BiSolidInfoCircle className="text-primary" />
                About Us
              </Link>
              <Link
                onClick={handleNavclose}
                className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                href="/"
              >
                <IoMdCall className="text-primary" />
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
