"use strict";
exports.id = 2390;
exports.ids = [2390];
exports.modules = {

/***/ 62390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94181);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16775);
/* harmony import */ var react_icons_lia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10327);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75484);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64348);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32314);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73759);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40248);
/* harmony import */ var _store_useAuthStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7586);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25871);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 















const Nav = ()=>{
    //state for navbar
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [showinput, setShowinput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { isAuthenticated, user, signout } = (0,_store_useAuthStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();
    const isHomePage = pathname === "/";
    const handleLogout = ()=>{
        signout();
        window.location.href = "/";
    };
    // stop scrolling when side-navigation is open
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (nav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [
        nav
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handlescroll = ()=>{
            if (window.scrollY > 80) {
                setShowinput(true);
            } else {
                setShowinput(false);
            }
        };
        window.addEventListener("scroll", handlescroll);
        return ()=>{
            window.removeEventListener("scroll", handlescroll);
        };
    });
    // handle navbar toggle
    const handleNavClick = ()=>{
        setNav(!nav);
    };
    // close navigation after clicking navigation links
    const handleNavclose = ()=>{
        setNav(false);
    };
    // gettrainingcategories
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const getCategories = async ()=>{
        axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.get("https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories").then((res)=>{
            setCategories(res.data);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getCategories();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "sticky top-0 z-50 bg-white",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "Navbar relative border-b-[1px] mx-auto max-w-[1280px]  border-[#ededed] gap-[15px]   flex justify-between max-lg:p-4 items-center bg-white h-[70px] ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: "/assets/ts-final-logo.png",
                            height: 200,
                            width: 200,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${showinput || !isHomePage ? "max-md:w-72 md:!w-80" : "hidden"} `,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Search__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            isTopNav: true
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "nav-links  hidden md:flex items-center gap-4 text-[#505056] ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/trainings",
                                        className: "hover:text-primary",
                                        children: "Training"
                                    }),
                                    categories && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hidden group-hover:block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1 max-h-[400px] overflow-y-auto ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "py-1"
                                                    }),
                                                    categories?.map((cat, i)=>{
                                                        const slug = cat?.text?.replace(" ", "-").toLowerCase();
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: `/trainings/${slug}`,
                                                            className: "py-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "block px-6 py-1 text-sm text-[grey] hover:bg-gray-100",
                                                                    children: cat.text
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                            ]
                                                        }, i);
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "hover:text-primary",
                                        href: "/blogs",
                                        children: "Blogs"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hidden group-hover:block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[350px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "py-1 max-h-[400px] overflow-y-auto",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "py-2"
                                                    }),
                                                    categories.map((cat, i)=>{
                                                        const slug = `/blogs/${cat?.text?.replaceAll(" ", "-").toLowerCase()}/${cat?.value}`;
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            href: slug,
                                                            className: "py-1",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "block px-6 py-1 text-sm text-[grey] hover:bg-gray-100",
                                                                    children: cat.text
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                            ]
                                                        }, i);
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "hover:text-primary",
                                href: "/service",
                                children: "Services"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "hover:text-primary",
                                href: "/professionals",
                                children: "Professionals"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "hover:text-primary",
                                href: "/partpurja",
                                children: "Part Purja"
                            }),
                            isAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "hover:text-primary",
                                        href: "/profile",
                                        children: "Profile"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "hover:text-primary",
                                        href: "/complains",
                                        children: "Complains"
                                    })
                                ]
                            }) : null,
                            !isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "hover:text-primary",
                                href: "/login",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "flex gap-[5px] justify-center items-center bg-primary rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__/* .HiArrowRightOnRectangle */ .vDy, {
                                            size: 20,
                                            className: "text-white"
                                        }),
                                        "Sign In"
                                    ]
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: handleLogout,
                                className: "flex transition-all hover:scale-105 gap-[5px] justify-center items-center bg-primary rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__/* .HiArrowRightOnRectangle */ .vDy, {
                                        size: 20,
                                        className: "text-white"
                                    }),
                                    "Log Out"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handleNavClick,
                        className: "menu-btn md:hidden",
                        children: !nav ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__/* .FaBars */ .Fm7, {
                            className: "cursor-pointer text-primary",
                            size: 30
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__/* .FaTimes */ .aHS, {
                            className: "cursor-pointer text-primary",
                            size: 30
                        })
                    }),
                    nav && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white flex flex-col gap-[24px] shadow-lg z-10 absolute w-max   h-screen top-[70px] right-0 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                onClick: handleNavclose,
                                className: "flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts",
                                href: "/",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__/* .FaHome */ .xng, {
                                        className: "text-primary"
                                    }),
                                    "Home"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "/trainings",
                                className: "hover:text-primary px-[14px] text-base font-normal flex items-center justify-start gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__/* .MdModelTraining */ .EWR, {
                                        className: "text-primary"
                                    }),
                                    "Training"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                onClick: handleNavclose,
                                className: "flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts",
                                href: "/blogs",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lia__WEBPACK_IMPORTED_MODULE_11__/* .LiaBlogSolid */ .Tdh, {
                                        className: "text-primary"
                                    }),
                                    "Blog"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                onClick: handleNavclose,
                                className: "flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts",
                                href: "/professionals",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__/* .BsFillPersonCheckFill */ .wUZ, {
                                        className: "text-primary"
                                    }),
                                    "Professionals"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                onClick: handleNavclose,
                                className: "flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts",
                                href: "/partpurja",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__/* .HiMiniWrenchScrewdriver */ .nDv, {
                                        className: "text-primary"
                                    }),
                                    "Part Purja"
                                ]
                            }),
                            isAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-[24px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        onClick: handleNavclose,
                                        className: "flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts",
                                        href: "/service",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__/* .MdOutlineHomeRepairService */ .KfO, {
                                                className: "text-primary"
                                            }),
                                            "All services"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        onClick: handleNavclose,
                                        className: "flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts",
                                        href: "/profile",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_13__/* .CgProfile */ .Mdg, {
                                                className: "text-primary"
                                            }),
                                            "profile"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        onClick: handleNavclose,
                                        className: "flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts",
                                        href: "/complains",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lu__WEBPACK_IMPORTED_MODULE_14__/* .LuMailWarning */ .JOp, {
                                                className: "text-primary"
                                            }),
                                            "Complains"
                                        ]
                                    })
                                ]
                            }) : null,
                            !isAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                onClick: handleNavclose,
                                className: "flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts",
                                href: "/login",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__/* .MdLogin */ .HOZ, {
                                        className: "text-primary"
                                    }),
                                    "Login"
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                onClick: ()=>{
                                    handleNavclose();
                                    handleLogout();
                                },
                                className: "flex px-[16px] gap-4 text-[14px] font-normal items-center  w-full justify-starts",
                                href: "#",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__/* .MdLogin */ .HOZ, {
                                        className: "text-primary"
                                    }),
                                    "Logout"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-[1px] bg-[#ededed] "
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ 25871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99305);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90039);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64085);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);






const Search = ({ isTopNav })=>{
    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            label: "",
            id: ""
        }
    ]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)("(max-width: 600px)");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchServices();
    }, []);
    const fetchServices = async ()=>{
        try {
            setLoading(true);
            const response = await fetch(`${_public_baseUrl__WEBPACK_IMPORTED_MODULE_4__/* .baseUrl */ .F}/techsewa/masterconfig/publicmasterconfig/getSliderListpop1`);
            const data = await response.json();
            setServices(data.brands);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching services:", error);
            setLoading(false);
        }
    };
    // Update suggestions based on user input
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const filteredSuggestions = [
            ...services
        ].filter((service)=>service?.product_name.toLowerCase().includes(searchText.toLowerCase())).map((service)=>({
                label: service.product_name,
                id: service.url_product_name
            }));
        if (searchText.length > 1) {
            setSuggestions(filteredSuggestions);
        }
    }, [
        searchText,
        services
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex gap-4 w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_5___default()), {
            disablePortal: true,
            options: suggestions,
            loading: loading,
            // You can customize the loading indicator here
            loadingText: "Loading...",
            noOptionsText: "No results found",
            sx: {
                width: "100%"
            },
            // ChipProps={{ sx: { display: "none" } }}
            onInputChange: (event, newValue)=>setSearchText(newValue),
            className: "bg-white outline-none",
            onChange: (e, value)=>{
                if (value?.id) {
                    router.push(`/service/${value?.id}`);
                }
            },
            size: isMobile || isTopNav ? "small" : "medium",
            renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                    ...params,
                    label: "Search service here..."
                })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ 99305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ baseUrl)
/* harmony export */ });
const baseUrl = "https://smartcare.com.np/";


/***/ }),

/***/ 7586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var auto_zustand_selectors_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21789);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94514);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13998);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88658);




const useAuthStoreBase = (0,zustand__WEBPACK_IMPORTED_MODULE_1__/* .create */ .Ue)()((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__/* .persist */ .tJ)((set)=>({
        user: null,
        isAuthenticated: false,
        isLoading: true,
        signin: (user, token)=>{
            set((0,immer__WEBPACK_IMPORTED_MODULE_3__/* .produce */ .Uy)((state)=>{
                state.isAuthenticated = true;
                state.user = user;
                if (token) state.token = token;
            }));
        },
        signout: ()=>{
            localStorage.removeItem("token");
            set((0,immer__WEBPACK_IMPORTED_MODULE_3__/* .produce */ .Uy)((state)=>{
                state.isAuthenticated = false;
                state.user = null;
            }));
        },
        stopLoading: ()=>{
            set((0,immer__WEBPACK_IMPORTED_MODULE_3__/* .produce */ .Uy)((state)=>{
                state.isLoading = false;
            }));
        }
    }), {
    name: "auth-storage",
    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__/* .createJSONStorage */ .FL)(()=>sessionStorage)
}));
const useAuthStore = (0,auto_zustand_selectors_hook__WEBPACK_IMPORTED_MODULE_0__/* .createSelectorHooks */ .EL)(useAuthStoreBase);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuthStore);


/***/ })

};
;