import Nav from "@/components/Nav";
import ProfessionalsCardButton from "@/components/ProfessionalsCardButton";
import Footer from "@/components/footer/Footer";
import { fetchServerClient, getSEOByPageURL } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";

// professionals page
const page = async () => {
  const professionalsData = await fetchServerClient(
    "/techsewa/publiccontrol/getTechnicianProfilePublic"
  );

  return (
    <>
      <Nav />
      <div className="  pt-[20px] pb-[79px] max-w-[1280px]  mx-auto flex flex-col items-center justify-center">
        <div className="px-2 md:p-0">
          {/* header  */}
          <h2 className="text-[32px] md:text-[31px] text-center md:text-left">
            Our Professionals
          </h2>

          {/* filter/ */}
          {/* <div className="flex justify-between items-center px-2 pt-4 md:px-0">
            <p className="text-center md:text-left text-[14px]">
              Showing 1-20 of 50
            </p>
            <div className="flex gap-4 items-center">
              <RiLayoutGridFill color="#d9d9d9" size="30px" />
              <TfiLayoutColumn3Alt
                color="#2591b2"
                className="rotate-90"
                size="23px"
              />
            </div>
          </div> */}

          {/* card  */}
          <div className="grid grid-cols-1 gap-10 px-2 py-4 md:grid-cols-3 md:py-8 md:px-0">
            {professionalsData.map((s: any, index: any) => (
              <div
                key={index}
                className="flex items-center border-[1px] rounded-xl p-2 md:px-8 md:py-4 gap-1 lg:gap-8 shadow-lg shadow-gray-400"             >
                {/* image  */}
                <div className="flex-1">
                  <img
                    src={s.photo ? s.photo : "/assets/user.png"}
                    alt="image"
                    className="w-full h-[180px] object-cover rounded-xl "
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2 md:gap-5">
                  <h3 className="text-primary text-[17px] font-bold">
                    {s.sc_name}
                  </h3>

                  {/* three small button */}
                  <div className="flex text-[15px] text-primary">
                    {/* {s?.skill?.split(",")?.map((skill: string, i: number) => (
                      <button
                        key={i}
                        className="bg-[#e8ebf4] px-[9px] py-[2px] rounded-sm"
                      >
                        {skill}
                      </button>
                    ))} */}
                    <a
                      href="tel:9851201580"
                      className="flex items-center justify-center  gap-[5px] h-[40px] w-full border border-[#2591B2] rounded-[2px] text-black"
                    >
                      <BsFillTelephoneFill className="text-primary" size={20} />
                      {s?.mobile}
                    </a>
                  </div>

                  {/* book now and view button */}
                  <div className="flex gap-2 text-[12px]">
                    <a
                      href="/service"
                      className="text-white whitespace-nowrap bg-primary rounded-md px-2 py-1 md:px-[17px] md:py-[6px] hover:scale-105"
                    >
                      Book Now
                    </a>
                    <ProfessionalsCardButton
                      name={s.sc_name}
                      address={s.sc_address}
                      email={s.sc_email}
                      image={s.photo}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* download app section  */}
        <div className="bg-[#fbfcfe] py-10">
          <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
            <div className="flex flex-col flex-1 gap-4">
              <p className="md:text-[32px] text-[18px] text-[#a6adbb] font-semibold text-center md:text-left">
                Download our App
              </p>
              <p className="text-[14px] md:text-[27px]">
                Enter mobile number to get APP download Link
              </p>
            </div>

            {/* input and send button  */}
            <div className="flex flex-1 px-2 md:p-0">
              <input
                className="w-full border-[2px]  rounded-l-md p-3 md:p-4 outline-none text-[14px]"
                type="text"
                placeholder="Type your mobile number"
              />
              <button className="px-6 text-white rounded-r-md bg-primary md:px-10 md:py-4">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

export async function generateMetadata() {
  const seoData = await getSEOByPageURL(`/professionals`);

  const seoExists = seoData?.content && !Array.isArray(seoData?.content);

  const seoContent = seoData?.content;

  if (seoExists) {
    return {
      title: `${
        seoExists ? seoContent?.page_title : "Professionals | Technical sewa"
      } `,
      description: `${seoContent?.description}`,
      keywords: `${seoContent?.key_words}`,
      openGraph: {
        title: `${
          seoExists ? seoContent?.page_title : "Professionals | Technical sewa"
        } `,
        description: `${seoContent?.description} `,
        url: seoContent?.page_url,
        type: "website",
      },
    };
  }
  return {
    title: `Professionals | Technical sewa`,
  };
}
