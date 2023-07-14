import React from "react";
import Link from "next/link";
import { ImFacebook } from "react-icons/im";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsYoutube, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#2591B2] ">
        <div className="py-[10px]   max-w-[1280px] mx-auto">
          {/* heading of footer */}

          <h2 className="font-semibold text-base leading-[19px] text-[#FFF] font-Roboto text-center ">
            We Are Available in
          </h2>
          {/* link of location */}
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center  py-8">
            <div className="flex gap-8 font-Roboto font-normal text-base leading-[24px] text-[#FFF]">
              <div className="flex flex-col gap-[10px]">
                <Link href="#">Pokhara</Link>
                <Link href="#">Chitwan</Link>
                <Link href="#">Lalitpur</Link>
                <Link href="#">Ilam</Link>
                <Link href="#">Manang</Link>
                <Link href="#">Dhangadi</Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <Link href="#">Butwal</Link>
                <Link href="#">Bhairahawa</Link>
                <Link href="#">Lumbini</Link>
                <Link href="#">Jhapa</Link>
                <Link href="#">Hetauda</Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <Link href="#">Kathmandu</Link>
                <Link href="#">Kavre</Link>
                <Link href="#">Mustang</Link>
                <Link href="#">Dharan</Link>
                <Link href="#">Sindupalchowk</Link>
              </div>
            </div>

            {/* direction  */}
            <div className=" flex items-center justify-center xl:justify-end">
              <Link
                href=""
                className="bg-[#203E9A] w-[95px] h-[28px] font-Roboto font-normal text-base leading-[24px] text-[#FFF] text-center border-[1px] border-solid border-[#E5E7EB]"
              >
                Direction
              </Link>
            </div>
          </div>
          <hr />
          {/* Next Foter */}
          <div className="flex flex-col md:flex-row items-center justify-between  mt-[10px] gap-4 ">
            <div className=" flex flex-col md:flex-row items-center gap-4">
              <Link
                href=""
                className="w-[210px] h-[52px] 2xl:h-[67px] bg-[#FFF] p-[3px] rounded-[3px]"
              >
                <img
                  src="/../assets/logoofts.png"
                  alt="image of logo"
                  className="w-full h-full object-contain"
                />
              </Link>
              <div className="flex flex-col font-Roboto text-[#FFF] gap-[10px]">
                <Link href="#" className="font-bold text-[14px] leading-[16px]">
                  Contact us
                </Link>
                <p className="font-[300px] text-[13px] leading-[15px] ">
                  Technical Sewa Pvt. Ltd.
                </p>
                <p className="font-[300px] text-[13px] leading-[15px]">
                  Kumaripati,Lalitpur,Near Bluebird College,Nepal
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex  justify-start xl:justify-end gap-[10px]">
                <Link
                  href=""
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <ImFacebook className="text-[#2591B2] " size={20} />
                </Link>
                <Link
                  href=""
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <BiLogoInstagramAlt className="text-[#2591B2] " size={20} />
                </Link>
                <Link
                  href=""
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <BsYoutube className="text-[#2591B2] " size={20} />
                </Link>
                <Link
                  href=""
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <BsTwitter className="text-[#2591B2] " size={20} />
                </Link>
              </div>
              <p className="font-normal text-[13px] leading-[24px] text-[#FFF] pt-[10px] text-left md:text-right">
                Enter mobile number to get APP download Link
              </p>
              <div className="flex items-center justify-start md:justify-end my-[22px] w-full">
                <input
                  type="phone"
                  name="phonenumber"
                  placeholder="Type your mobile number "
                  className="border rounded-[5px] h-[32px] bg-white pl-[14px] w-[170px] text-xs outline-none"
                />
                <button className="bg-black rounded-tr-[5px] rounded-br-[5px] text-[#FBFCFE] leaing-[25.5px] font-notmal h-[32px] px-[8px] ">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright footer */}
      <div className="py-[9px] bg-[#054355]">
        <p className="font-light text-[14px] text-white/[0.5] tracking-[0.3px] leading-[14.06px] text-center">
          Copyright2023 Technical Sewa All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
