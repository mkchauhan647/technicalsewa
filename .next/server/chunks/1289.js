"use strict";
exports.id = 1289;
exports.ids = [1289];
exports.modules = {

/***/ 21289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hi: () => (/* binding */ api),
/* harmony export */   zk: () => (/* binding */ fetchClient)
/* harmony export */ });
/* unused harmony exports fetchServerClient, getTrainings, getTrainingDataById, getTrainingCategoriesData, getBlogDataById, getBlogsByCategoryId, getSEOByPageURL */
/* harmony import */ var _public_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99305);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40248);


const api = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: _public_baseUrl__WEBPACK_IMPORTED_MODULE_1__/* .baseUrl */ .F
});
async function fetchClient(url, options = {}) {
    const defaultOptions = {};
    const mergedOptions = {
        ...defaultOptions,
        ...options
    };
    const response = await fetch(`${_public_baseUrl__WEBPACK_IMPORTED_MODULE_1__/* .baseUrl */ .F}${url}`, mergedOptions);
    return response.json();
}
// for server side requests
async function fetchServerClient(url, options = {}) {
    const defaultOptions = {
        // cache: "no-store",
        next: {
            revalidate: 120
        }
    };
    const mergedOptions = {
        ...defaultOptions,
        ...options
    };
    const response = await fetch(`${baseUrl}${url}`, mergedOptions);
    return response.json();
}
async function getTrainings() {
    try {
        const res = await fetchServerClient("/techsewa/publiccontrol/publicmasterconfig/gettrainingDetails");
        return res;
    } catch (error) {
        return [];
    }
}
async function getTrainingDataById(id) {
    const formData = new FormData();
    formData.append("training_id", `${id}`);
    try {
        const res = await fetch(`${baseUrl}/techsewa/publiccontrol/publicmasterconfig/gettrainingDetails`, {
            method: "POST",
            body: formData,
            next: {
                revalidate: 120
            }
        });
        return res.json();
    } catch (error) {
        return {
            error: true
        };
    }
}
// -------------------
async function getTrainingCategoriesData() {
    try {
        const res = await fetch(`${baseUrl}/techsewa/publiccontrol/publicmasterconfig/gettrainingcategories`, {
            next: {
                revalidate: 120
            }
        });
        return res.json();
    } catch (error) {
        return [];
    }
}
async function getBlogDataById(id) {
    const formData = new FormData();
    formData.append("id", id);
    try {
        const res = await fetch(`${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getblogDetailsbyidd`, {
            method: "POST",
            body: formData,
            // cache: "no-store",
            next: {
                revalidate: 120
            }
        });
        return res.json();
    } catch (error) {
        return {
            error: true
        };
    }
}
// get blogs by category id
async function getBlogsByCategoryId(id) {
    const formData = new FormData();
    formData.append("id", id);
    try {
        const res = await fetch(`${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getblogDetailsbyCatid`, {
            method: "POST",
            body: formData,
            // cache: "no-store",
            next: {
                revalidate: 120
            }
        });
        return res.json();
    } catch (error) {
        return {
            error: true
        };
    }
}
// get seo by page url
async function getSEOByPageURL(url) {
    try {
        // const res = await fetch(
        //   `${baseUrl}/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=${url}`,
        //   {
        //     headers: {
        //       "Cache-Control": `max-age=${600}`, // max 10min cache
        //     },
        //   }
        // );
        // return res.json();
        const res = await fetchServerClient(`/techsewa/publiccontrol/publicmasterconfig/getSeoContent?url=${url}`);
        return res;
    } catch (error) {
        return {
            error: true
        };
    }
}


/***/ })

};
;