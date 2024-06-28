import axios from "axios";
import React from "react";
import NumberUI from "./footer/NumberUI";

const Number = async () => {
  const data = await axios.get(
    "https://www.technicalsewa.com/techsewa/publiccontrol/getGetTotalFooter"
  );

  return (
    <>
      <NumberUI numbers={data?.data} />
    </>
  );
};

export default Number;
