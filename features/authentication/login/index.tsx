"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = ({ cb }: { cb?: () => void }) => {
  const { push } = useRouter();
  const { signin } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleCRMLogin = () => {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute(
      "action",
      "https://smartcare.com.np/techsewa/verify/signin"
    );

    const loginParams: any = { ...input };

    form.setAttribute("id", "form");
    for (var key in loginParams) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", loginParams[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  const handleSignIn = async () => {
    setLoading(true);

    let data = new FormData();
    data.append("username", input.username);
    data.append("password", input.password);
    try {
      const loginRes = await axios.post(
        `https://smartcare.com.np/techsewa/masterconfig/publiclogin/signinlate`,
        data
      );

      // crm login if only success response
      if (loginRes.data === "success") {
        toast("Loggining to CRM...");
        handleCRMLogin();
        return;
      }

      if (typeof loginRes.data === "object" && loginRes.data !== null) {
        signin(loginRes.data);
        cb && cb?.();
        !cb && push("/complains");
      } else {
        toast("❌ Invalid login!");
        throw new Error("Login Failed");
      }
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setshowPassword] = useState(false);

  const isValidForm = input.username && input.password;

  return (
    <div className="bg-white  pt-[20px] pb-[79px]">
      <div className="flex flex-col  justify-center pt-[50px] w-[80%] lg:w-[33.33%]  mx-auto px-4 md:p-0">
        {/* <div className="flex flex-col items-center">
          <div className="w-[150px] h-auto">
            <img
              src="/../assets/logoofts.png"
              alt="image of logo"
              className="w-full h-full object-container"
            />
          </div>
          <h2 className="text-[#666666] text-normal leading-[19.5px] font-semibold mt-[12px]">
            Sign in to use our service
          </h2>
        </div> */}

        <h2 className="text-lg font-bold">Login</h2>

        <input
          type="text"
          name="username"
          required
          onChange={handleChange}
          placeholder="Username"
          className="border w-full border-[#D9D9D9] px-4 py-3 pl-[20px] mt-[20px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"
        />

        <div className=" border border-[#D9D9D9] rounded-[2px] flex items-center mt-[24px]  w-full">
          <input
            type={`${showPassword === false ? "password" : "text"}`}
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 pl-[20px]  placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"
          />
          <div
            className=" border-l-[1px] p-4"
            onClick={() => setshowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEye /> : <BsEyeSlashFill />}
          </div>
        </div>
        <Link
          href="/account/forgot-password"
          className="text-[#666666] text-[13px] leading-[10px] font-light mt-[20px]"
        >
          Forgot Password ?
        </Link>
        <button
          disabled={loading || !isValidForm}
          onClick={handleSignIn}
          className={`text-white text-[15px] leading-[18px] bg-primary font-normal rounded-[2px] w-full py-[15px]
        mt-[44px] disabled:!text-gray-400 disabled:!bg-opacity-40`}
        >
          Sign in
        </button>

        <div className="flex items-center justify-center mt-10 mb-[10px] space-x-1">
          <p className="text-[13px] text-[#666666] leading-[10.72px] font-normal">
            Need an account?
          </p>
          <Link
            href="/sign-up-page"
            className="text-[13px] text-[#BB243F] leading-[10px] font-bold underline decoration-[#BB243F] cursor-pointer"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
