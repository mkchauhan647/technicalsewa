import React from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
const service = [
  {
    servicename: "Refrigerator Dead/No On",
    description:
      "A Refrigertaor may act dead (not get turned on) due to various reasons.Most of the time this happens because the circuit breaker is turned off or a fuse is bad . In this case, the circuit breaker will not proovide power to the refrigeter .Im such a case you can contact us to solve the issues.",
  },
  {
    servicename: "Refrigerator Dead/No On",
    description:
      "A Refrigertaor may act dead (not get turned on) due to various reasons.Most of the time this happens because the circuit breaker is turned off or a fuse is bad . In this case, the circuit breaker will not proovide power to the refrigeter .Im such a case you can contact us to solve the issues.",
  },
  {
    servicename: "Refrigerator Dead/No On",
    description:
      "A Refrigertaor may act dead (not get turned on) due to various reasons.Most of the time this happens because the circuit breaker is turned off or a fuse is bad . In this case, the circuit breaker will not proovide power to the refrigeter .Im such a case you can contact us to solve the issues.",
  },
  {
    servicename: "Refrigerator Dead/No On",
    description:
      "A Refrigertaor may act dead (not get turned on) due to various reasons.Most of the time this happens because the circuit breaker is turned off or a fuse is bad . In this case, the circuit breaker will not proovide power to the refrigeter .Im such a case you can contact us to solve the issues.",
  },
];
const choose = [
  {
    choosename: "Pofessional Technicians",
    description:
      "All of the professionals at Smart Care Services Group are screened with a background Check.They are also passed through series of training to ensure that high-quality works reaches our customers",
  },
  {
    choosename: "Pofessional Technicians",
    description:
      "All of the professionals at Smart Care Services Group are screened with a background Check.They are also passed through series of training to ensure that high-quality works reaches our customers",
  },
  {
    choosename: "Pofessional Technicians",
    description:
      "All of the professionals at Smart Care Services Group are screened with a background Check.They are also passed through series of training to ensure that high-quality works reaches our customers",
  },
  {
    choosename: "Pofessional Technicians",
    description:
      "All of the professionals at Smart Care Services Group are screened with a background Check.They are also passed through series of training to ensure that high-quality works reaches our customers",
  },
];
const popular = [
  {
    popularname: "LG",
  },
  {
    popularname: "SAMSUNG",
  },
  {
    popularname: "WHIRLPOOL",
  },
  {
    popularname: "IFB",
  },
  {
    popularname: "ELECTROLUX",
  },
  {
    popularname: "SKYWORTH",
  },
  {
    popularname: "HISENSE",
  },
];
const popservice = [
  {
    popservicename: "Washing Machine",
  },
  {
    popservicename: "Refrigerator",
  },
  {
    popservicename: "LCD/LED TV",
  },
  {
    popservicename: "Air Conditioner",
  },
  {
    popservicename: "Humidifier",
  },
  {
    popservicename: "Air purifier",
  },
  {
    popservicename: "Vacuum Cleaner",
  },
];
const FAQ = [
  {
    faqname: "What are the most Common doubler-door refrigerator problems ?",
    description:
      "Some of the major refrigerator problems to watch out for are refrigerator leaking water from the back, refrigerator not or less cooling, refrigerator freezing food, refrigerator building up ice on the freezer floor, refrigerator making noise, and so on.",
  },
  {
    faqname: "Why is my double-door refrigerator on but not colling ?",
    description:
      "Some of the major refrigerator problems to watch out for are refrigerator leaking water from the back, refrigerator not or less cooling, refrigerator freezing food, refrigerator building up ice on the freezer floor, refrigerator making noise, and so on.",
  },
  {
    faqname: "What are the most Common doubler-door refrigerator problems ?",
    description:
      "Some of the major refrigerator problems to watch out for are refrigerator leaking water from the back, refrigerator not or less cooling, refrigerator freezing food, refrigerator building up ice on the freezer floor, refrigerator making noise, and so on.",
  },
];
const page = () => {
  return (
    <div>
      <div className="bg-[#382e2e] py-[20px]">
        <div className="container px-[10px] 2xl:mx-[290px] md:mx-[166px]">
          <h2 className="font-semibold text-[20px] font-Roboto text-gray-400">
            Appliance Repair /
            <span className="text-white leading-[26px]">Refrigerator </span> /{" "}
            <span className="text-white leading-[26px]">REF-Double Door</span>
          </h2>
          <div className="w-[200px] h-[45px] bg-[#1D738D] flex itmes-center  text-white py-[5px] px-[15px] rounded-[6px] mt-[10px]">
            <AiFillStar size={30} />
            <p className="pl-[10px] text-[24px] font-semibold">4.65</p>
            <p className="pl-[5px] self-end mb-[5px]">Out of 5</p>
          </div>
          <div className="flex flex-col gap-[14px] mt-[30px]">
            <div className="flex gap-[10px] items-center">
              <div className="w-[10px] h-[10px] rounded-[50%] bg-[#1D738D] border-[2px] border-solid border-white"></div>
              <p className="font-normal text-[14px] leading-[24px] text-white">
                100 Days Warranty on Reapirs
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <div className="w-[10px] h-[10px] rounded-[50%] bg-[#1D738D] border-[2px] border-solid border-white"></div>
              <p className="font-normal text-[14px] leading-[24px] text-white">
                Doorstep Reapirs with in 3 hours
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <div className="w-[10px] h-[10px] rounded-[50%] bg-[#1D738D] border-[2px] border-solid border-white"></div>
              <p className="font-normal text-[14px] leading-[24px] text-white">
                Experienced and Fully Trained Technician
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <div className="w-[10px] h-[10px] rounded-[50%] bg-[#1D738D] border-[2px] border-solid border-white"></div>
              <p className="font-normal text-[14px] leading-[24px] text-white">
                100% Genuine Spare Parts with Genuine Rate
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] container 2xl:mx-[290px] md:mx-[166px] px-[10px]">
        <h2 className="text-[#1D738D] text-[31px] font-normal leading-[30px]">
          Refrigerator Repair and Services - Smart Care
        </h2>
        <p className="text-[15px] text-black font-normal pt-[15px] max-w-[917px]">
          These refrigerators have two outward-opening refrigerator doors with a
          split in the center. They can open one by one or both at the same
          time. The notion is that by opening both, you are effectively opening
          up the entire room, allowing everything to be seen clearly.
        </p>
        <h4 className="text-[25px] font-normal leading-[30px] text-[#1D738D] mt-[15px]">
          What Is The Diffrence Between A Single-Door And Double-Door
          Refrigerator?
        </h4>
        <p className="text-[15px] text-black font-normal pt-[15px] max-w-[915px]">
          A double-door refrigerator has frost-free technology as well cooling
          fans. A single-door refrigerator, on the other hand,with a huge
          freezer and natural convaction employs direct cooling technology
        </p>
        <h4 className="text-[25px] font-normal leading-[30px] text-[#1D738D] pt-[15px]">
          Our Service
        </h4>
        <div className="flex text-[15px] text-black font-normal pt-[15px] items-center gap-[5px]">
          <Link href="" className="underline text-[#1155CC]">
            {" "}
            Smart Care Group
          </Link>
          <p>Double-door Refrigerator Repair and Services include</p>
        </div>
        {service.map((items: any, index: number) => (
          <div key={index} className="mt-[20px]">
            <h4 className="text-[22px] text-[#434343]">{items.servicename}</h4>
            <p className="text-[15px] text-black font-normal pt-[10px] max-w-[915px]">
              {items.description}
            </p>
          </div>
        ))}
        <h4 className="text-[25px] font-normal leading-[30px] text-[#1D738D] mt-[15px]">
          Why Choose Smart Care Service?
        </h4>
        <p className="text-[15px] text-black font-normal pt-[10px] max-w-[915px]">
          Samrt Care Services Group beleives in the fact a refrigertaor
          malfunction can create inconveniences in our daily busy life. We
          understand your need to get it back in opertaion. That's why, we
          provide quick,effective and long-lasting Refrigerator Repairs and
          Services. We have authorized technicians all around the Kathmandu
          Valley, assuring that one of our qualified experts will always be able
          to reach you,{" "}
        </p>
        <p className="text-[15px] text-black font-normal pt-[10px]">
          There are the reasons to choose Smart Care Services:
        </p>
        {choose.map((items: any, index: number) => (
          <div key={index} className="mt-[20px]">
            <h4 className="text-[22px] text-[#434343]">{items.choosename}</h4>
            <p className="text-[15px] text-black font-normal pt-[10px] max-w-[915px]">
              {items.description}
            </p>
          </div>
        ))}
        <h2 className="font-normal text-[21px] leading-[29px] text-[#1D738D] pt-[25px]">
          Popular Brands Refrigerator We Repair
        </h2>
        {popular.map((items: any, index: number) => (
          <div
            className="flex items-center gap-[2px] mt-[10px] pl-[5px]"
            key={index}
          >
            <div className="w-[8px] h-[1px] bg-[#0E101A]"></div>
            <p className="font-normal text-base leading-[22px] text-[#0E101A]">
              {items.popularname}
            </p>
          </div>
        ))}
        <h2 className="font-normal text-[21px] leading-[29px] text-[#1D738D] pt-[25px]">
          Popular Services Near You
        </h2>
        {popservice.map((items: any, index: number) => (
          <div
            className="flex items-center gap-[2px] mt-[10px] pl-[5px]"
            key={index}
          >
            <div className="w-[8px] h-[1px] bg-[#007BFF]"></div>
            <Link
              href="#"
              className="font-normal text-base leading-[22px] text-[#007BFF]"
            >
              {items.popservicename}
            </Link>
          </div>
        ))}
        <p className="font-normal text-[16px] leading-[22px] text-[black] pt-[15px] max-w-[915px]">
          Emergencies are uninvited, and the sudden fault in the refrigerator
          tells the same story. We know how essential it is to you that all your
          appliances are in working conditions perfectly. We believe in
          providing the best fit solution, that meets your specific
          requirements. We aspire to provide an excellent level of service.
        </p>
        <p className="font-normal text-[16px] leading-[22px] text-[black] pt-[15px] max-w-[915px]">
          With experienced professionals on board, our customers can rely on us
          for Smart Refrigerator Repair and Services without any stress. Our
          technicians are trained, skilled, and well-mannered.&nbsp; That is why
          Smart Care Double-door Refrigerator Repair and Services are worthwhile
          for these reasons.
        </p>
        <h4 className="font-bold text-[23px] leading-[31px] text-[#007BFF] pt-[15px]">
          FAQ On Double-Door Refrigerator Repair And Service
        </h4>
        {FAQ.map((items: any, index: number) => (
          <div className="mt-[15px]" key={index}>
            <h2 className="font-bold text-[18px] leading-[26px] text-[#0E101A]">
              {items.faqname}
            </h2>
            <p className="font-normal text-base leading-[26px] text-black max-w-[915px]">
              {items.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
