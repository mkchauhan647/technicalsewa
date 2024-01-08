"use strict";
exports.id = 3456;
exports.ids = [3456];
exports.modules = {

/***/ 43456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75484);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6828);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40248);
/* harmony import */ var _store_useAuthStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7586);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33518);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const LoginForm = ({ cb })=>{
    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { signin } = (0,_store_useAuthStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        username: "",
        password: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };
    const handleCRMLogin = ()=>{
        const form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "https://smartcare.com.np/techsewa/verify/signin");
        const loginParams = {
            ...input
        };
        form.setAttribute("id", "form");
        for(var key in loginParams){
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", loginParams[key]);
            form.appendChild(hiddenField);
        }
        document.body.appendChild(form);
        form.submit();
    };
    const handleSignIn = async ()=>{
        setLoading(true);
        let data = new FormData();
        data.append("username", input.username);
        data.append("password", input.password);
        try {
            const loginRes = await axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.post(`https://smartcare.com.np/techsewa/masterconfig/publiclogin/signinlate`, data);
            // crm login if only success response
            if (loginRes.data === "success") {
                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)("Loggining to CRM...");
                handleCRMLogin();
                return;
            }
            if (typeof loginRes.data === "object" && loginRes.data !== null) {
                signin(loginRes.data);
                cb && cb?.();
                !cb && push("/complains");
            } else {
                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)("❌ Invalid login!");
                throw new Error("Login Failed");
            }
        } catch (error) {
        //
        } finally{
            setLoading(false);
        }
    };
    const [showPassword, setshowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const isValidForm = input.username && input.password;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white  pt-[20px] pb-[79px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col  justify-center pt-[50px] w-[80%] lg:w-[33.33%]  mx-auto px-4 md:p-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-lg font-bold",
                    children: "Login"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    name: "username",
                    required: true,
                    onChange: handleChange,
                    placeholder: "Username",
                    className: "border w-full border-[#D9D9D9] px-4 py-3 pl-[20px] mt-[20px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " border border-[#D9D9D9] rounded-[2px] flex items-center mt-[24px]  w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: `${showPassword === false ? "password" : "text"}`,
                            name: "password",
                            placeholder: "Password",
                            required: true,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 pl-[20px]  placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " border-l-[1px] p-4",
                            onClick: ()=>setshowPassword(!showPassword),
                            children: showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__/* .AiOutlineEye */ .Zju, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__/* .BsEyeSlashFill */ .Jmv, {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/account/forgot-password",
                    className: "text-[#666666] text-[13px] leading-[10px] font-light mt-[20px]",
                    children: "Forgot Password ?"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    disabled: loading || !isValidForm,
                    onClick: handleSignIn,
                    className: `text-white text-[15px] leading-[18px] bg-primary font-normal rounded-[2px] w-full py-[15px]
        mt-[44px] disabled:!text-gray-400 disabled:!bg-opacity-40`,
                    children: "Sign in"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-center mt-10 mb-[10px] space-x-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[13px] text-[#666666] leading-[10.72px] font-normal",
                            children: "Need an account?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/sign-up-page",
                            className: "text-[13px] text-[#BB243F] leading-[10px] font-bold underline decoration-[#BB243F] cursor-pointer",
                            children: "Sign up"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);


/***/ })

};
;