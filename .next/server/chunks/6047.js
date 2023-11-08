exports.id = 6047;
exports.ids = [6047];
exports.modules = {

/***/ 45194:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 62390));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 70625));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 66953));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 48886))

/***/ }),

/***/ 48886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const BlogCard = ({ blog })=>{
    const slug = blog?.blog_name?.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "-") // Replace special characters with -
    .replace(/\s+/g, "-");
    return(//     <div className='flex gap-4 rounded-[10px] border-[2px] border-gray-200 p-4'>
    //         <div className='basis-[10%] dark:text-black font-bold'>
    //             {blog.created_ts}
    //         </div>
    //         <div className='basis-[90%]'>
    //             <h3 className='dark:text-black font-bold text-[20px] mb-3 '>
    //                 {blog.blog_name}
    //             </h3>
    //             <div className='flex gap-4'>
    //                 <div className='basis-[40%] h-[150px]'>
    //                     <img className='object-cover w-full h-full' src={blog.filename.replace(
    //                     "https://smartcare.com.np/multiservice/",
    //                     "https://smartcare.com.np/multiservice/test/")} />
    //                 </div>
    //                 <div className='basis-[60%] gap-2'>
    //                     <div className='h-[100px] overflow-hidden' dangerouslySetInnerHTML={{__html:blog.blog_desc.split('\n')[0]}} ></div>
    //                     <Link href={`blogs/${blog.blog_name}`}> <button  className='p-3 text-white bg-black rounded'>Readmore</button> </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-wrap gap-2 md:gap-0 md:justify-between rounded-[10px] border-[2px] border-gray-200 p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full md:basis-[40%]  h-[180px] hover:opacity-95 order-2 md:order-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `/blog/${slug}/${blog?.blog_id}`,
                        className: "w-full h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "object-contain w-full h-full",
                            src: blog?.filename?.replace("https://smartcare.com.np/multiservice/", "https://smartcare.com.np/multiservice/test/")
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full md:basis-[54%] order-1 md:order-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            // href={`/blogs/${blog.blog_name.replaceAll(" ", "-").toLowerCase()}`}
                            href: `/blog/${blog?.blog_name.replaceAll(" ", "-").toLowerCase()}/${blog?.blog_id}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "md:pb-[3px] text-gray-500 font-bold",
                                    children: blog?.created_ts
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "hover:text-primary font-bold text-[19px] md:text-[25px] mb-2 h-[40px] ",
                                    children: blog?.blog_name
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-[21px] md:mt-[44px] overflow-hidden text-black font-normal",
                            dangerouslySetInnerHTML: {
                                __html: blog?.short_content
                            }
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);


/***/ }),

/***/ 39643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/mnt/CC1CE4DE1CE4C494/Projects/supreme/technicalsewa/technicalsewa/components/pageHelperComponents.js/BlogCard.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;