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
exports.id = "pages/api/product";
exports.ids = ["pages/api/product"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    item_name: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    size: {\n        type: String,\n        required: true\n    },\n    status: {\n        type: Boolean,\n        required: true\n    },\n    image: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsZ0JBQWdCLElBQUlELHdEQUFlLENBQUM7SUFDdENHLFdBQVU7UUFDTkMsTUFBS0M7UUFDTEMsVUFBUyxJQUFJO1FBQ2JDLFdBQVU7SUFDZDtJQUNBQyxVQUFTO1FBQ0xKLE1BQUtDO1FBQ0xDLFVBQVMsSUFBSTtJQUNqQjtJQUNBRyxPQUFNO1FBQ0ZMLE1BQU1NO1FBQ05KLFVBQVUsSUFBSTtJQUNsQjtJQUNBSyxNQUFLO1FBQ0RQLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNsQjtJQUNBTSxRQUFPO1FBQ0hSLE1BQUtTO1FBQ0xQLFVBQVMsSUFBSTtJQUNqQjtJQUNBUSxPQUFNO1FBQ0ZWLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNsQjtBQUtKLEdBQUc7SUFBQ1MsWUFBVyxJQUFJO0FBQUE7QUFFbkIsaUVBQWVmLGdFQUF1QixJQUFJQSxxREFBYyxDQUFDLFdBQVdDLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRhaWx5LWRvc2UvLi9tb2RlbHMvUHJvZHVjdC5qcz8wOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGl0ZW1fbmFtZTp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDp0cnVlLFxuICAgICAgICBtYXhsZW5ndGg6NjAsXG4gICAgfSxcbiAgICBjYXRlZ29yeTp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDp0cnVlLFxuICAgIH0sXG4gICAgcHJpY2U6e1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgc2l6ZTp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBzdGF0dXM6e1xuICAgICAgICB0eXBlOkJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXG4gICAgfSxcbiAgICBpbWFnZTp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgIFxuICAgIFxuXG5cbn0sIHt0aW1lc3RhbXBzOnRydWV9KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0XCIsIFByb2R1Y3RTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJpdGVtX25hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJjYXRlZ29yeSIsInByaWNlIiwiTnVtYmVyIiwic2l6ZSIsInN0YXR1cyIsIkJvb2xlYW4iLCJpbWFnZSIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJQcm9kdWN0IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/mongo */ \"(api)/./util/mongo.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Product */ \"(api)/./models/Product.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const beverages = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(beverages);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(product);\n        } catch (err1) {\n            res.status(500).json(err1);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDQztBQUM5QixlQUFlRSxRQUFRQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUMxQyxNQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHRjtJQUVqQkgsdURBQVNBO0lBRVQsSUFBR0ssV0FBVyxPQUFNO1FBQ2hCLElBQUc7WUFDQyxNQUFNQyxZQUFZLE1BQU1MLDREQUFZO1lBQ3BDRyxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtRQUN6QixFQUFDLE9BQU1JLEtBQUk7WUFDUE4sSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0M7UUFDekI7SUFDSixDQUFDO0lBQ0QsSUFBR0wsV0FBVyxRQUFPO1FBQ2pCLElBQUc7WUFDQyxNQUFNTSxVQUFVLE1BQU1WLDhEQUFjLENBQUNFLElBQUlVLElBQUk7WUFDN0NULElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNFO1FBQ3pCLEVBQUMsT0FBTUQsTUFBSTtZQUNQTixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDQztRQUN6QjtJQUNKLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYWlseS1kb3NlLy4vcGFnZXMvYXBpL3Byb2R1Y3QvaW5kZXguanM/ZWNmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi91dGlsL21vbmdvXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1Byb2R1Y3RcIlxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcbiAgICBjb25zdCB7bWV0aG9kfSA9IHJlcTtcblxuICAgIGRiQ29ubmVjdCgpO1xuXG4gICAgaWYobWV0aG9kID09PSBcIkdFVFwiKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgYmV2ZXJhZ2VzID0gYXdhaXQgUHJvZHVjdC5maW5kKCk7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihiZXZlcmFnZXMpO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYobWV0aG9kID09PSBcIlBPU1RcIil7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZShyZXEuYm9keSk7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihwcm9kdWN0KTtcbiAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJldmVyYWdlcyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwicHJvZHVjdCIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/product/index.js\n");

/***/ }),

/***/ "(api)/./util/mongo.js":
/*!***********************!*\
  !*** ./util/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URL = process.env.MONGO_URL;\nif (!MONGO_URL) {\n    throw new Error(\"Please define the MONGO_URL environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNGLFNBQVM7QUFFdkMsSUFBSSxDQUFDQSxXQUFXO0lBQ2QsTUFBTSxJQUFJRyxNQUNSLHNFQUNEO0FBQ0gsQ0FBQztBQUVEOzs7O0NBSUMsR0FDRCxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTSxJQUFJO1FBQUVDLFNBQVMsSUFBSTtJQUFDO0FBQ3pELENBQUM7QUFFRCxlQUFlQyxZQUFZO0lBQ3pCLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEIsQ0FBQztJQUVELElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCLEtBQUs7UUFDdkI7UUFFQU4sT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsV0FBV1MsTUFBTUcsSUFBSSxDQUFDLENBQUNiLFdBQWE7WUFDcEUsT0FBT0E7UUFDVDtJQUNGLENBQUM7SUFFRCxJQUFJO1FBQ0ZLLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT00sR0FBRztRQUNWVCxPQUFPRyxPQUFPLEdBQUcsSUFBSTtRQUNyQixNQUFNTSxFQUFDO0lBQ1Q7SUFFQSxPQUFPVCxPQUFPRSxJQUFJO0FBQ3BCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRhaWx5LWRvc2UvLi91dGlsL21vbmdvLmpzP2MwYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBNT05HT19VUkwgPSBwcm9jZXNzLmVudi5NT05HT19VUkxcblxuaWYgKCFNT05HT19VUkwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT19VUkwgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuLyoqXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2VcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm5cbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH1cblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkwsIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2VcbiAgICB9KVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGxcbiAgICB0aHJvdyBlXG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJMIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./util/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/product/index.js"));
module.exports = __webpack_exports__;

})();