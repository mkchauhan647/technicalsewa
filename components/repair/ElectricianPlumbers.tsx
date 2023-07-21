"use client";
import Slider from "../slider/Slider";

const ElectricianPlumbers = ({
  electiricianPlumbersData,
  computerPrinterData,
}: any) => {
  return (
    <div className="max-w-[1280px] m-auto flex max-md:flex-col justify-between items-center ">
      
        <div className="flex justify-center flex-col items-center">
          <b className="text-[#2591b2] font-bold text-[20px] my-4 border-b-[0.5px] pb-1 border-b-[#4f4b4b]">
            Electrician & Plumbers
          </b>
          <Slider data={electiricianPlumbersData} />
        </div>
        <div className="flex justify-center flex-col items-center ">
          <p className="text-[#2591b2] font-bold text-[20px] my-4 border-b-[0.5px] pb-1 border-b-[#4f4b4b]">
            Computer/Printer
          </p>
          <Slider data={computerPrinterData} />
        </div>
     
    </div>
  );
};

export default ElectricianPlumbers;
