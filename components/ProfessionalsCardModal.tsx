import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const ProfessionalsCardModal = ({ email, address, name, image }: any) => {
  const myDialog: any = useRef(null);

  useEffect(() => {
    if (myDialog) {
      myDialog?.current?.showModal();
    }
  }, []);
  return (
    <div>
      <dialog
        ref={myDialog}
        id="myDialog"
        data-modal
        className="border-none  bg-[white] md:px-[24px] md:py-[20px] rounded-md "
      >
        <div className="flex justify-between ">
          <div className="flex flex-col gap-[10px] items-center">
            <h3 className="text-[#2591b2] text-[18px] lg:text-[24px] font-bold">
              {name}
            </h3>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-black font-medium text-[14px]">
                  <span className="font-bold">Address: </span> <br />
                  {address}
                </p>
                <p className="text-black font-medium text-[14px] ">
                  <span className="font-bold">Email: </span> <br /> {email}
                </p>
              </div>
              <img
                src={image ? image : "../Assets/user.jpg"}
                alt=""
                className="rounded-md"
              />
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-[16px] text-[#2591b2] px-2 py-1 border-[2px] border-[#2591b2] hover:text-white hover:bg-[#2591b2]">
                Ratings
              </p>
              <p className="text-[16px] text-[#2591b2]  px-2 py-1 border-[2px] border-[#2591b2] hover:text-white hover:bg-[#2591b2]">
                Locations
              </p>
            </div>
          </div>

          <RxCross2
            size={16}
            className="text-[#8C8C8C]"
            onClick={() => myDialog?.current.close()}
          />
        </div>
      </dialog>
    </div>
  );
};

export default ProfessionalsCardModal;
