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
          <div className="group">
            <div>Training</div>
            <div className="hidden group-hover:block">
              <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]">
                <div className="py-1">
            
             
                <p className=" pt-1 py-2">
                    </p>
                  <Link href="training/fridgeactraining" className='w-[full]'>
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Fridge & AC Training Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link  href="training/wachingmachinetraining" className='w-[full]'>
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Washing Machine Repair Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link href="training/homeappliancestraining" className='w-[full]'>
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Home Appliances Repair Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link href="training/ledtvtraining" className='w-[full]'>
                    <p className="block px-6 py-2 text-sm text-[grey] hover:bg-gray-100">
                      Led Tv Training In Kathmandu
                    </p>
                    <hr />
                  </Link>
                  <Link href="training/plumbingtraining" className='w-[full]'>
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
