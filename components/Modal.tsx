"use client";
import { baseUrl } from "@/app/otherItem/baseUrl";
import React, { useEffect, useRef, useState } from "react";

const Modal = ({ filterData }: any) => {
  const [data, setData] = useState();
  // const loadfeatureData = async () => {
  //   const resp = await fetch(
  //     `${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop1`
  //   );
  //   console.log(resp,'ressspppspps')
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //      await fetch(
  //         `${baseUrl}multiservice/masterconfig/publicmasterconfig/getSliderListpop1`
  //       ).then((res)=>{ res.json().then((r)=>console.log(r))});
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const myDialog: any = useRef(null);

  useEffect(() => {
    if (myDialog) {
      myDialog?.current.showModal();
    }
  }, []);

  return (
    <dialog
      ref={myDialog}
      id="myDialog"
      data-modal
      className="md:w-[60%] w-full h-[400px] bg-[aliceblue]"
    >
      <div className="flex gap-5">
        {/* <h2>title</h2> */}
        <button
          onClick={() => myDialog?.current.close()}
          className="float-right"
        >
          X
        </button>
        {filterData?.map((val: any) => {
          return <h2>{val.product_name}</h2>;
        })}
      </div>
      <div>
        {/* {activeData?.map((dat)=>{
  <h2>ok</h2>
})} */}
      </div>
    </dialog>
  );
};

export default Modal;
