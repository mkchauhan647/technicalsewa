"use client";
import React, { useEffect, useState } from "react";
import { ImFacebook } from "react-icons/im";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import axios from "axios";
import "./footer.css";
import Link from "next/link";
const Footer = () => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/GetContactUs"
      )
      .then((response: any) => {
        let data = response.data;
        setDescription(data?.brands[0].description);
      });
  }, []);

  return (
    <div>
      <div className="bg-[#2591B2] ">
        <div className="py-[10px]   max-w-[1280px] mx-auto">
          {/* heading of footer */}

          {/* <div className="font-semibold text-base leading-[19px] text-[#FFF] font-Roboto text-center ">
            We Are Available in
          </div> */}
          {/* link of location */}
          <div className="">
            <div className=" font-Roboto font-normal text-[12px] md:text-base leading-[24px] text-[#FFF]">
              <div className="grid grid-cols-4 md:grid-cols-9 px-[10px] md:px-[0px] gap-[10px] my-2">
                <Link prefetch={false} href="Pokhara">
                  Pokhara
                </Link>
                <Link prefetch={false} href="Chitwan">
                  Chitwan
                </Link>
                <Link prefetch={false} href="Lalitpur">
                  Lalitpur
                </Link>
                <Link prefetch={false} href="Ilam">
                  Ilam
                </Link>
                <Link prefetch={false} href="Manang">
                  Manang
                </Link>
                <Link prefetch={false} href="Dhangadi">
                  Dhangadi
                </Link>
                <Link prefetch={false} href="butwal">
                  Butwal
                </Link>
                <Link prefetch={false} href="bhairahwa">
                  Bhairahawa
                </Link>
                <Link prefetch={false} href="lumbini">
                  Lumbini
                </Link>
                <Link prefetch={false} href="jhapa">
                  Jhapa
                </Link>
                <Link prefetch={false} href="hetauda">
                  Hetauda
                </Link>
                <Link prefetch={false} href="kathmandu">
                  Kathmandu
                </Link>
                <Link prefetch={false} href="kavre">
                  Kavre
                </Link>
                <Link prefetch={false} href="mustang">
                  Mustang
                </Link>
                <Link prefetch={false} href="dharan">
                  Dharan
                </Link>
                <Link prefetch={false} href="sindupalchowk">
                  Sindupalchowk
                </Link>
              </div>
              {/* <div className="flex  gap-[10px]">
               
              </div>
              <div className="flex gap-[10px]">
               
              </div> */}
            </div>

            {/* direction  */}
            <div className="flex flex-1 justify-center items-center"></div>
          </div>
          <hr />
          {/* Next Foter */}
          <div className="flex flex-col md:flex-row items-center justify-between  mt-[10px] gap-4 ">
            <div className="flex flex-col gap-4 items-center   ">
              <Link
                href=""
                className="w-[210px] h-[52px] 2xl:h-[67px] bg-[#FFF] p-[3px] rounded-[3px]"
              >
                <img
                  src="/../assets/logoofts.png"
                  alt="image of logo"
                  className="object-contain w-full h-full"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/27%C2%B042'08.4%22N+85%C2%B018'35.8%22E/@27.702328,85.309943,15z/data=!4m4!3m3!8m2!3d27.7023333!4d85.3099444?hl=en&entry=ttu"
                className=" bg-white text-[#2591B2] flex py-4 items-center justify-center w-[95px] h-[28px] font-Roboto font-normal text-base leading-[24px]  text-center border-[1px] border-solid border-[#E5E7EB]"
              >
                Direction
                <IoLocationSharp className="text-green-500" size={20} />
              </Link>
            </div>
            <div className="flex flex-col gap-4 md:gap-[48px]   md:flex-row">
              <div className="flex flex-col font-Roboto text-[#FFF] gap-[10px]">
                <p className="font-bold text-[14px] leading-[16px]">
                  Quick Links
                </p>
                <Link
                  href="/"
                  className="font-[300px] text-[13px] leading-[15px] "
                >
                  Home
                </Link>
                <Link
                  href="/partpurja"
                  className="font-[300px] text-[13px] leading-[15px]"
                >
                  Featured Product
                </Link>
                <Link
                  href="/about"
                  className="font-[300px] text-[13px] leading-[15px]"
                >
                  About
                </Link>
                <Link
                  href="privacy-policy"
                  className="font-[300px] text-[13px] leading-[15px]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="font-[300px] text-[13px] leading-[15px]"
                >
                  Terms and Condition
                </Link>
              </div>
              <div className="flex flex-col font-Roboto text-[#FFF] gap-[10px]">
                <Link href="#" className="font-bold text-[14px] leading-[16px]">
                  Contact us
                </Link>
                <div
                  className="font-[300px] text-[13px] leading-[15px]"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
            <div className="">
              <div className="flex  justify-start xl:justify-end gap-[10px]">
                <Link
                  href="https://www.facebook.com/61551939094429"
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                  target="_blank"
                >
                  <ImFacebook className="text-[#2591B2] " size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/technicalsewa.np/"
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                  target="_blank"
                >
                  <BiLogoInstagramAlt className="text-[#2591B2] " size={20} />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCw2U7K_AKEkws0uzyI4T_kA"
                  target="_blank"
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <BsYoutube className="text-[#2591B2] " size={20} />
                </Link>
                <Link
                  href="https://twitter.com/technicals2023"
                  target="_blank"
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <BsTwitter className="text-[#2591B2] " size={20} />
                </Link>
              </div>
              <h5 className="font-normal text-[13px] leading-[24px] text-[#FFF] pt-[10px] text-left md:text-right">
                Enter mobile number to get APP download Link
              </h5>
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
        <h6 className="font-light text-[14px] text-white/[0.5] tracking-[0.3px] leading-[14.06px] text-center">
          Copyright {new Date().getFullYear()} Technical Sewa All Rights
          Reserved
        </h6>
      </div>
    </div>
  );
};

export default Footer;
