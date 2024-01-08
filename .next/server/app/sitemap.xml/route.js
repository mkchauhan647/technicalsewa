"use strict";
(() => {
var exports = {};
exports.id = 6717;
exports.ids = [6717];
exports.modules = {

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 46925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/sitemap.ts
var sitemap_namespaceObject = {};
__webpack_require__.r(sitemap_namespaceObject);
__webpack_require__.d(sitemap_namespaceObject, {
  "default": () => (sitemap)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/sitemap.ts?__next_metadata__
var sitemap_next_metadata_namespaceObject = {};
__webpack_require__.r(sitemap_next_metadata_namespaceObject);
__webpack_require__.d(sitemap_next_metadata_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(14664);
// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(80651);
;// CONCATENATED MODULE: ./app/sitemap.ts

const siteUrl = "https://technicalsewa.com";
async function sitemap() {
    const routesSiteMap = [
        "",
        "/trainings",
        "/blogs",
        "/service",
        "/professionals",
        "/partpurja"
    ].map((route)=>({
            url: `${siteUrl}${route}`,
            changeFrequency: "yearly",
            priority: 1,
            lastModified: new Date()
        }));
    const trainings = await (0,api/* getTrainings */.hb)();
    const trainingsSiteMap = trainings.map((t)=>{
        return {
            url: `${siteUrl}/training/${t?.training_title?.replaceAll(" ", "-").toLowerCase()}`,
            changeFrequency: "monthly",
            priority: 0.8
        };
    });
    const trainingCategories = await (0,api/* getTrainingCategoriesData */.of)();
    const blogs = await (0,api/* fetchServerClient */.df)("/techsewa/publiccontrol/publicmasterconfig/getblogdetails");
    const blogsSiteMap = blogs.map((b)=>{
        return {
            url: `${siteUrl}/blog/${b?.blog_name?.replaceAll(" ", "-").toLowerCase()}/${b?.blog_id}`,
            changeFrequency: "daily",
            priority: 0.8
        };
    });
    const blogCatsSiteMap = trainingCategories.map((c)=>{
        return {
            url: `${siteUrl}/blogs/${c?.text?.replaceAll(" ", "-").toLowerCase()}/${c?.value}`,
            changeFrequency: "weekly",
            priority: 0.8
        };
    });
    const services = await (0,api/* fetchServerClient */.df)("/techsewa/masterconfig/publicmasterconfig/getSliderListpop1");
    const servicesSiteMap = services.brands.map((item)=>{
        return {
            url: `${siteUrl}/service/${item?.url_product_name}`,
            changeFrequency: "monthly",
            priority: 0.8
        };
    });
    const partPurjaList = await (0,api/* fetchServerClient */.df)(`/techsewa/publiccontrol/publicmasterconfig/getfeaturedDetails`);
    const partPurjaSiteMap = partPurjaList.map((item)=>{
        const slug = item?.page_url.replace(/\s+/g, "-");
        return {
            url: `${siteUrl}/partpurja/${slug}`,
            changeFrequency: "monthly",
            priority: 0.8
        };
    });
    return [
        ...routesSiteMap,
        ...blogsSiteMap,
        ...blogCatsSiteMap,
        ...trainingsSiteMap,
        ...servicesSiteMap,
        ...partPurjaSiteMap
    ];
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js
var resolve_route_data = __webpack_require__(9334);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/sitemap.ts?__next_metadata__




const sitemapModule = { ...sitemap_namespaceObject }
const handler = sitemapModule.default
const generateSitemaps = sitemapModule.generateSitemaps
const contentType = "application/xml"
const fileType = "sitemap"

async function GET(_, ctx) {
  const { __metadata_id__ = [], ...params } = ctx.params || {}
  const targetId = __metadata_id__[0]
  let id = undefined
  const sitemaps = generateSitemaps ? await generateSitemaps() : null

  if (sitemaps) {
    id = sitemaps.find((item) => {
      if (false) {}
      return item.id.toString() === targetId
    })?.id
    if (id == null) {
      return new server.NextResponse('Not Found', {
        status: 404,
      })
    }
  }

  const data = await handler({ id })
  const content = (0,resolve_route_data.resolveRouteData)(data, fileType)

  return new server.NextResponse(content, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}



;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fsitemap.xml%2Froute&name=app%2Fsitemap.xml%2Froute&pagePath=private-next-app-dir%2Fsitemap.ts&appDir=%2Fmnt%2FCC1CE4DE1CE4C494%2Fworkspaces%2Fsupreme%2Ftechnicalsewa%2Ftechnicalsewa%2Fapp&appPaths=%2Fsitemap&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/sitemap.xml/route","pathname":"/sitemap.xml","filename":"sitemap","bundlePath":"app/sitemap.xml/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!/mnt/CC1CE4DE1CE4C494/workspaces/supreme/technicalsewa/technicalsewa/app/sitemap.ts?__next_metadata__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: sitemap_next_metadata_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/sitemap.xml/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3663,6558,4572,9334,651], () => (__webpack_exec__(46925)));
module.exports = __webpack_exports__;

})();