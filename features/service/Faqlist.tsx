"use client";

import { baseUrl } from '@/public/baseUrl';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const Faqlist = ({filteredId}:any) => {

    
  // handling FAQ state.
  const [faqData, setFaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  // FAQ toggle function
  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? 0 : index);
  };

    const FAQ = async () => {
        const formData = new FormData();
        formData.append("product_id", filteredId);
    
        const result = await axios
          .post(`${baseUrl}/techsewa/publicControl/publicfaq/getFaqList`, formData)
          .then((res) => res?.data.list);
    
        setFaqData(result);
      };
    
      useEffect(() => {
        FAQ();
      }, [filteredId]);

  return (
    <div className="mb-[50px] max-w-[1280px] mx-auto px-[2px]">
    <span className="text-xl font-bold">
      Frequently Asked Question.
    </span>
    {faqData?.map((item: any, index) => (
      <div key={index} className="md:w-[66%] md:mx-0 mx-4 my-5">
        <div
          className="flex justify-between items-center w-full text-left focus:outline-none"
          onClick={() => handleToggle(index)}
        >
          <span className="text-[16px] font-bold">
            {item.question}
          </span>
          <span>
            {openIndex === index ? (
              <FaMinus className="w-5 h-5 text-[#1D738D]" />
            ) : (
              <FaPlus className="w-5 h-5 text-[#1D738D]" />
            )}
          </span>
        </div>
        {openIndex === index && (
          <div className="mt-2 text-gray-700">
            {item.answer}
          </div>
        )}
      </div>
    ))}
  </div>
  )
}

export default Faqlist