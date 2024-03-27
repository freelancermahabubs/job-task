"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/user/login/route";
exports.ids = ["app/api/user/login/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Flogin%2Froute&page=%2Fapi%2Fuser%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CEdu%20Fixup%5CDownloads%5CSource%20Code%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdu%20Fixup%5CDownloads%5CSource%20Code&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Flogin%2Froute&page=%2Fapi%2Fuser%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CEdu%20Fixup%5CDownloads%5CSource%20Code%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdu%20Fixup%5CDownloads%5CSource%20Code&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Edu_Fixup_Downloads_Source_Code_src_app_api_user_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/user/login/route.js */ \"(rsc)/./src/app/api/user/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/login/route\",\n        pathname: \"/api/user/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Edu Fixup\\\\Downloads\\\\Source Code\\\\src\\\\app\\\\api\\\\user\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Edu_Fixup_Downloads_Source_Code_src_app_api_user_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/user/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXIlMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXIlMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFZHUlMjBGaXh1cCU1Q0Rvd25sb2FkcyU1Q1NvdXJjZSUyMENvZGUlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0VkdSUyMEZpeHVwJTVDRG93bmxvYWRzJTVDU291cmNlJTIwQ29kZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNrQztBQUMvRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL25ld3MtcG9ydGFsLz8yMmYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEVkdSBGaXh1cFxcXFxEb3dubG9hZHNcXFxcU291cmNlIENvZGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlclxcXFxsb2dpblxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlci9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXIvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXIvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxFZHUgRml4dXBcXFxcRG93bmxvYWRzXFxcXFNvdXJjZSBDb2RlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJcXFxcbG9naW5cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdXNlci9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Flogin%2Froute&page=%2Fapi%2Fuser%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CEdu%20Fixup%5CDownloads%5CSource%20Code%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdu%20Fixup%5CDownloads%5CSource%20Code&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/user/login/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/user/login/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utility_JWTTokenHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/JWTTokenHelper */ \"(rsc)/./src/utility/JWTTokenHelper.js\");\n\n\n\nasync function POST(req, res) {\n    try {\n        let reqBody = await req.json();\n        const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n        const result = await prisma.user.findUnique({\n            where: reqBody\n        });\n        if (result.length === 0) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                status: \"fail\",\n                data: result\n            });\n        } else {\n            let token = await (0,_utility_JWTTokenHelper__WEBPACK_IMPORTED_MODULE_2__.CreateToken)(result[\"email\"], result[\"id\"]);\n            let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);\n            const cookieString = `token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                status: \"success\",\n                data: token\n            }, {\n                status: 200,\n                headers: {\n                    \"set-cookie\": cookieString\n                }\n            });\n        }\n    } catch (e) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            status: \"fail\",\n            data: e\n        });\n    }\n}\nasync function GET(req, res) {\n    let expireDuration = new Date(Date.now() - 24 * 60 * 60 * 1000);\n    const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/\", req.url), 303);\n    response.cookies.set(\"token\", \"\", {\n        expires: expireDuration\n    });\n    return response;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2VyL2xvZ2luL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUNHO0FBQ21CO0FBRXhELGVBQWVHLEtBQUtDLEdBQUcsRUFBRUMsR0FBRztJQUNqQyxJQUFJO1FBQ0YsSUFBSUMsVUFBVSxNQUFNRixJQUFJRyxJQUFJO1FBQzVCLE1BQU1DLFNBQVMsSUFBSVAsd0RBQVlBO1FBQy9CLE1BQU1RLFNBQVMsTUFBTUQsT0FBT0UsSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFBQ0MsT0FBT047UUFBTztRQUUzRCxJQUFJRyxPQUFPSSxNQUFNLEtBQUssR0FBRztZQUN2QixPQUFPYixrRkFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFDTyxRQUFRO2dCQUFRQyxNQUFNTjtZQUFNO1FBQ3hELE9BQU87WUFDTCxJQUFJTyxRQUFRLE1BQU1kLG9FQUFXQSxDQUFDTyxNQUFNLENBQUMsUUFBUSxFQUFFQSxNQUFNLENBQUMsS0FBSztZQUUzRCxJQUFJUSxpQkFBaUIsSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxLQUFLLEtBQUssS0FBSyxLQUFLO1lBRTFELE1BQU1DLGVBQWUsQ0FBQyxNQUFNLEVBQUVKLE1BQU0sVUFBVSxFQUFFQyxlQUFlSSxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBRXRGLE9BQU9yQixrRkFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBQ08sUUFBUTtnQkFBV0MsTUFBTUM7WUFBSyxHQUMvQjtnQkFBQ0YsUUFBUTtnQkFBS1EsU0FBUztvQkFBQyxjQUFjRjtnQkFBWTtZQUFDO1FBRXZEO0lBQ0YsRUFBRSxPQUFPRyxHQUFHO1FBQ1YsT0FBT3ZCLGtGQUFZQSxDQUFDTyxJQUFJLENBQUM7WUFBQ08sUUFBUTtZQUFRQyxNQUFNUTtRQUFDO0lBQ25EO0FBQ0Y7QUFFTyxlQUFlQyxJQUFJcEIsR0FBRyxFQUFFQyxHQUFHO0lBQ2hDLElBQUlZLGlCQUFpQixJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssS0FBSyxLQUFLLEtBQUs7SUFDMUQsTUFBTU0sV0FBV3pCLGtGQUFZQSxDQUFDMEIsUUFBUSxDQUFDLElBQUlDLElBQUksS0FBS3ZCLElBQUl3QixHQUFHLEdBQUc7SUFDOURILFNBQVNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsSUFBSTtRQUFDQyxTQUFTZDtJQUFjO0lBQzFELE9BQU9RO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzLXBvcnRhbC8uL3NyYy9hcHAvYXBpL3VzZXIvbG9naW4vcm91dGUuanM/MGJhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRSZXNwb25zZX0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQge1ByaXNtYUNsaWVudH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQge0NyZWF0ZVRva2VufSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbGl0eS9KV1RUb2tlbkhlbHBlclwiOyBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVxQm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe3doZXJlOiByZXFCb2R5fSk7XG5cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtzdGF0dXM6IFwiZmFpbFwiLCBkYXRhOiByZXN1bHR9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRva2VuID0gYXdhaXQgQ3JlYXRlVG9rZW4ocmVzdWx0W1wiZW1haWxcIl0sIHJlc3VsdFtcImlkXCJdKTtcblxuICAgICAgbGV0IGV4cGlyZUR1cmF0aW9uID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gICAgICBjb25zdCBjb29raWVTdHJpbmcgPSBgdG9rZW49JHt0b2tlbn07IGV4cGlyZXM9JHtleHBpcmVEdXJhdGlvbi50b1VUQ1N0cmluZygpfSA7cGF0aD0vYDtcblxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7c3RhdHVzOiBcInN1Y2Nlc3NcIiwgZGF0YTogdG9rZW59LFxuICAgICAgICB7c3RhdHVzOiAyMDAsIGhlYWRlcnM6IHtcInNldC1jb29raWVcIjogY29va2llU3RyaW5nfX1cbiAgICAgICk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtzdGF0dXM6IFwiZmFpbFwiLCBkYXRhOiBlfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEsIHJlcykge1xuICBsZXQgZXhwaXJlRHVyYXRpb24gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvXCIsIHJlcS51cmwpLCAzMDMpO1xuICByZXNwb25zZS5jb29raWVzLnNldChcInRva2VuXCIsIFwiXCIsIHtleHBpcmVzOiBleHBpcmVEdXJhdGlvbn0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiUHJpc21hQ2xpZW50IiwiQ3JlYXRlVG9rZW4iLCJQT1NUIiwicmVxIiwicmVzIiwicmVxQm9keSIsImpzb24iLCJwcmlzbWEiLCJyZXN1bHQiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwibGVuZ3RoIiwic3RhdHVzIiwiZGF0YSIsInRva2VuIiwiZXhwaXJlRHVyYXRpb24iLCJEYXRlIiwibm93IiwiY29va2llU3RyaW5nIiwidG9VVENTdHJpbmciLCJoZWFkZXJzIiwiZSIsIkdFVCIsInJlc3BvbnNlIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJjb29raWVzIiwic2V0IiwiZXhwaXJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/user/login/route.js\n");

/***/ }),

/***/ "(rsc)/./src/utility/JWTTokenHelper.js":
/*!***************************************!*\
  !*** ./src/utility/JWTTokenHelper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateToken: () => (/* binding */ CreateToken),\n/* harmony export */   VerifyToken: () => (/* binding */ VerifyToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/index.js\");\n\nasync function CreateToken(email, id) {\n    const secret = new TextEncoder().encode(process.env.JWT_SECRET);\n    const Payload = {\n        email: email,\n        id: id\n    };\n    let token = await new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT(Payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setIssuer(process.env.JWT_ISSUER).setExpirationTime(process.env.JWT_EXPIRATION_TIME).sign(secret);\n    return token;\n}\nasync function VerifyToken(token) {\n    const secret = new TextEncoder().encode(process.env.JWT_SECRET);\n    const decoded = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, secret);\n    return decoded[\"payload\"];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbGl0eS9KV1RUb2tlbkhlbHBlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFaEMsZUFBZUUsWUFBWUMsS0FBSyxFQUFDQyxFQUFFO0lBQ3RDLE1BQU1DLFNBQU8sSUFBSUMsY0FBY0MsTUFBTSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFDNUQsTUFBTUMsVUFBUTtRQUFDUixPQUFNQTtRQUFNQyxJQUFHQTtJQUFFO0lBQ2hDLElBQUlRLFFBQU8sTUFBTSxJQUFJWCx5Q0FBT0EsQ0FBQ1UsU0FDeEJFLGtCQUFrQixDQUFDO1FBQUNDLEtBQUk7SUFBTyxHQUMvQkMsV0FBVyxHQUNYQyxTQUFTLENBQUNSLFFBQVFDLEdBQUcsQ0FBQ1EsVUFBVSxFQUNoQ0MsaUJBQWlCLENBQUNWLFFBQVFDLEdBQUcsQ0FBQ1UsbUJBQW1CLEVBQ2pEQyxJQUFJLENBQUNmO0lBQ1YsT0FBT087QUFDWDtBQUVPLGVBQWVTLFlBQVlULEtBQUs7SUFDbkMsTUFBTVAsU0FBTyxJQUFJQyxjQUFjQyxNQUFNLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUM1RCxNQUFNWSxVQUFTLE1BQU10QiwrQ0FBU0EsQ0FBQ1ksT0FBTVA7SUFDckMsT0FBT2lCLE9BQU8sQ0FBQyxVQUFVO0FBQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3cy1wb3J0YWwvLi9zcmMvdXRpbGl0eS9KV1RUb2tlbkhlbHBlci5qcz9iNjZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7and0VmVyaWZ5LFNpZ25KV1R9IGZyb20gXCJqb3NlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBDcmVhdGVUb2tlbihlbWFpbCxpZCl7XG4gICAgY29uc3Qgc2VjcmV0PW5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcbiAgICBjb25zdCBQYXlsb2FkPXtlbWFpbDplbWFpbCxpZDppZH07XG4gICAgbGV0IHRva2VuPSBhd2FpdCBuZXcgU2lnbkpXVChQYXlsb2FkKVxuICAgICAgICAuc2V0UHJvdGVjdGVkSGVhZGVyKHthbGc6J0hTMjU2J30pXG4gICAgICAgIC5zZXRJc3N1ZWRBdCgpXG4gICAgICAgIC5zZXRJc3N1ZXIocHJvY2Vzcy5lbnYuSldUX0lTU1VFUilcbiAgICAgICAgLnNldEV4cGlyYXRpb25UaW1lKHByb2Nlc3MuZW52LkpXVF9FWFBJUkFUSU9OX1RJTUUpXG4gICAgICAgIC5zaWduKHNlY3JldClcbiAgICByZXR1cm4gdG9rZW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBWZXJpZnlUb2tlbih0b2tlbil7XG4gICAgY29uc3Qgc2VjcmV0PW5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcbiAgICBjb25zdCBkZWNvZGVkID1hd2FpdCBqd3RWZXJpZnkodG9rZW4sc2VjcmV0KVxuICAgIHJldHVybiBkZWNvZGVkWydwYXlsb2FkJ107XG59XG5cblxuIl0sIm5hbWVzIjpbImp3dFZlcmlmeSIsIlNpZ25KV1QiLCJDcmVhdGVUb2tlbiIsImVtYWlsIiwiaWQiLCJzZWNyZXQiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiUGF5bG9hZCIsInRva2VuIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0SXNzdWVkQXQiLCJzZXRJc3N1ZXIiLCJKV1RfSVNTVUVSIiwic2V0RXhwaXJhdGlvblRpbWUiLCJKV1RfRVhQSVJBVElPTl9USU1FIiwic2lnbiIsIlZlcmlmeVRva2VuIiwiZGVjb2RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/utility/JWTTokenHelper.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Flogin%2Froute&page=%2Fapi%2Fuser%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CEdu%20Fixup%5CDownloads%5CSource%20Code%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdu%20Fixup%5CDownloads%5CSource%20Code&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();