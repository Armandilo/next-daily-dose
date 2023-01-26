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
exports.id = "pages/api/order/[id]";
exports.ids = ["pages/api/order/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    item: {\n        type: Array,\n        required: true\n    },\n    total: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", OrderSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsSUFBSUQsd0RBQWUsQ0FBQztJQUNwQ0csTUFBSztRQUNEQyxNQUFNQztRQUNOQyxVQUFTLElBQUk7SUFDakI7SUFDQUMsT0FBTTtRQUNGSCxNQUFNSTtRQUNORixVQUFVLElBQUk7SUFDbEI7QUFHSixHQUFHO0lBQUNHLFlBQVcsSUFBSTtBQUFBO0FBRW5CLGlFQUFlVCw4REFBcUIsSUFBSUEscURBQWMsQ0FBQyxTQUFTQyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYWlseS1kb3NlLy4vbW9kZWxzL09yZGVyLmpzP2ViMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBPcmRlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGl0ZW06e1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcbiAgICB9LFxuICAgIHRvdGFsOntcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgXG5cbn0sIHt0aW1lc3RhbXBzOnRydWV9KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLk9yZGVyIHx8IG1vbmdvb3NlLm1vZGVsKFwiT3JkZXJcIiwgT3JkZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk9yZGVyU2NoZW1hIiwiU2NoZW1hIiwiaXRlbSIsInR5cGUiLCJBcnJheSIsInJlcXVpcmVkIiwidG90YWwiLCJOdW1iZXIiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiT3JkZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/order/[id].js":
/*!*********************************!*\
  !*** ./pages/api/order/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/mongo */ \"(api)/./util/mongo.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Order */ \"(api)/./models/Order.js\");\n\n\nconst handler = async (req, res)=>{\n    const { method , query: { id  }  } = req;\n    await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n            res.status(200).json(order);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"PUT\") {\n        try {\n            const order1 = await _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(order1);\n        } catch (err1) {\n            res.status(500).json(err1);\n        }\n    }\n    if (method === \"DELETE\") {\n        try {\n            const order2 = await _models_Order__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(order2);\n        } catch (err2) {\n            res.status(500).json(err2);\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDRjtBQUUxQyxNQUFNRSxVQUFVLE9BQU9DLEtBQUlDLE1BQVE7SUFDL0IsTUFBSyxFQUFDQyxPQUFNLEVBQUVDLE9BQU0sRUFBQ0MsR0FBRSxFQUFDLEdBQUUsR0FBR0o7SUFDN0IsTUFBTUgsdURBQVNBO0lBQ2YsSUFBR0ssV0FBVyxPQUFNO1FBQ2hCLElBQUc7WUFDQyxNQUFNRyxRQUFRLE1BQU1QLDhEQUFjLENBQUNNO1lBQ25DSCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtRQUN6QixFQUFDLE9BQU1JLEtBQUk7WUFDUFIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0M7UUFDekI7SUFDSixDQUFDO0lBQ0QsSUFBR1AsV0FBVyxPQUFNO1FBQ2hCLElBQUc7WUFDQyxNQUFNRyxTQUFRLE1BQU1QLDREQUFZLENBQUNFLElBQUlXLElBQUk7WUFDekNWLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1FBQ3pCLEVBQUMsT0FBTUksTUFBSTtZQUNQUixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDQztRQUN6QjtJQUNKLENBQUM7SUFDRCxJQUFHUCxXQUFXLFVBQVM7UUFDbkIsSUFBRztZQUNDLE1BQU1HLFNBQVEsTUFBTVAsNERBQVksQ0FBQ0UsSUFBSVcsSUFBSTtZQUN6Q1YsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7UUFDekIsRUFBQyxPQUFNSSxNQUFJO1lBQ1BSLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDO1FBQ3pCO0lBQ0osQ0FBQztBQUNMO0FBRUEsaUVBQWVWLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRhaWx5LWRvc2UvLi9wYWdlcy9hcGkvb3JkZXIvW2lkXS5qcz8xNDk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWwvbW9uZ29cIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL09yZGVyXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLHJlcykgPT4ge1xuICAgIGNvbnN0e21ldGhvZCwgcXVlcnk6e2lkfSx9ID0gcmVxO1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIGlmKG1ldGhvZCA9PT0gXCJHRVRcIil7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgT3JkZXIuZmluZEJ5SWQoaWQpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ob3JkZXIpO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYobWV0aG9kID09PSBcIlBVVFwiKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBPcmRlci5jcmVhdGUocmVxLmJvZHkpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24ob3JkZXIpO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYobWV0aG9kID09PSBcIkRFTEVURVwiKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBPcmRlci5jcmVhdGUocmVxLmJvZHkpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24ob3JkZXIpO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJPcmRlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImlkIiwib3JkZXIiLCJmaW5kQnlJZCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/[id].js\n");

/***/ }),

/***/ "(api)/./util/mongo.js":
/*!***********************!*\
  !*** ./util/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFDUix3RUFDRDtBQUNILENBQUM7QUFFRDs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU0sSUFBSTtRQUFFQyxTQUFTLElBQUk7SUFBQztBQUN6RCxDQUFDO0FBRUQsZUFBZUMsWUFBWTtJQUN6QixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCLENBQUM7SUFFRCxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQixLQUFLO1FBQ3ZCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTLE1BQU1HLElBQUksQ0FBQyxDQUFDYixXQUFhO1lBQ3RFLE9BQU9BO1FBQ1Q7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csT0FBTyxHQUFHLElBQUk7UUFDckIsTUFBTU0sRUFBQztJQUNUO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYWlseS1kb3NlLy4vdXRpbC9tb25nby5qcz9jMGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuLyoqXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2VcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm5cbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH1cblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZVxuICAgIH0pXG4gIH1cblxuICB0cnkge1xuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2VcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbFxuICAgIHRocm93IGVcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQuY29ublxufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3QiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./util/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order/[id].js"));
module.exports = __webpack_exports__;

})();