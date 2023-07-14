"use client";

import React, { useState } from "react";
import ProfessionalsCardModal from "./ProfessionalsCardModal";

const ProfessionalsCardButton = ({ email, address, name, image }: any) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="bg-[#f2dedf] text-black rounded-md px-2 py-1 md:px-[17px] md:py-[6px]"
      >
        View
      </button>
      {show && (
        <ProfessionalsCardModal
          address={address}
          email={email}
          name={name}
          image={image}
        />
      )}
    </div>
  );
};

export default ProfessionalsCardButton;
