import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2"

const Nav = () => {
  return (
    <>
      <div className="Navbar  flex justify-around items-center bg-white h-[70px] ">
        <Image
          src="/assets/ts-final-logo.png"
          height={200}
          width={200}
          alt="logo"
        />
        <div className="nav-links flex items-center gap-4 text-[#505056] ">
          <Link href="#">Training</Link>
          <Link href="#">All Services</Link>
          <Link href="#">Professionals</Link>
          <Link href="#">Part Purja</Link>
          <button className="flex gap-[5px] justify-center items-center bg-[#2591B2] rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] ">
            <HiArrowRightOnRectangle size={20} className='text-white' />
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
