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
exports.id = "pages/orders/[id]";
exports.ids = ["pages/orders/[id]"];
exports.modules = {

/***/ "./styles/recipt.module.css":
/*!**********************************!*\
  !*** ./styles/recipt.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"recipt_container__v_m4w\",\n\t\"recipt\": \"recipt_recipt__OF67B\",\n\t\"details\": \"recipt_details__ixc_5\",\n\t\"orderL\": \"recipt_orderL__NUdIG\",\n\t\"orderid\": \"recipt_orderid__2sRR1\",\n\t\"reciptcontainer\": \"recipt_reciptcontainer__DWJdm\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcmVjaXB0Lm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYWlseS1kb3NlLy4vc3R5bGVzL3JlY2lwdC5tb2R1bGUuY3NzPzk1MDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicmVjaXB0X2NvbnRhaW5lcl9fdl9tNHdcIixcblx0XCJyZWNpcHRcIjogXCJyZWNpcHRfcmVjaXB0X19PRjY3QlwiLFxuXHRcImRldGFpbHNcIjogXCJyZWNpcHRfZGV0YWlsc19faXhjXzVcIixcblx0XCJvcmRlckxcIjogXCJyZWNpcHRfb3JkZXJMX19OVWRJR1wiLFxuXHRcIm9yZGVyaWRcIjogXCJyZWNpcHRfb3JkZXJpZF9fMnNSUjFcIixcblx0XCJyZWNpcHRjb250YWluZXJcIjogXCJyZWNpcHRfcmVjaXB0Y29udGFpbmVyX19EV0pkbVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/recipt.module.css\n");

/***/ }),

/***/ "./pages/orders/[id].jsx":
/*!*******************************!*\
  !*** ./pages/orders/[id].jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/recipt.module.css */ \"./styles/recipt.module.css\");\n/* harmony import */ var _styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Order = ({ order  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_3___default().recipt),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"Thank You!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_3___default().reciptcontainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_3___default().orderL),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Order ID\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                                lineNumber: 14,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_3___default().orderid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: order._id\n                                }, void 0, false, {\n                                    fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                                lineNumber: 17,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async ({ params  })=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`http://localhost:3000/api/order/${params.id}`);\n    return {\n        props: {\n            order: res.data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMvW2lkXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDQTtBQUMwQjtBQUVwRCxNQUFNRyxRQUFRLENBQUMsRUFBQ0MsTUFBSyxFQUFDLEdBQUs7SUFDekIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdKLDRFQUFnQjtrQkFDNUIsNEVBQUNHO1lBQUlDLFdBQVdKLHlFQUFhO3NCQUN6Qiw0RUFBQ0c7Z0JBQUlDLFdBQVdKLDBFQUFjOztrQ0FDMUIsOERBQUNRO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNDOzs7OztrQ0FFRCw4REFBQ047d0JBQUlDLFdBQVdKLGtGQUFzQjs7MENBQ3RDLDhEQUFDRztnQ0FBSUMsV0FBV0oseUVBQWE7MENBQ3pCLDRFQUFDUTs4Q0FBRTs7Ozs7Ozs7Ozs7MENBRVAsOERBQUNMO2dDQUFJQyxXQUFXSiwwRUFBYzswQ0FDMUIsNEVBQUNROzhDQUFHTixNQUFNVyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakM7QUFFTyxNQUFNQyxxQkFBcUIsT0FBTyxFQUFDQyxPQUFNLEVBQUMsR0FBSztJQUNsRCxNQUFNQyxNQUFNLE1BQU1sQixpREFBUyxDQUFDLENBQUMsZ0NBQWdDLEVBQUVpQixPQUFPRyxFQUFFLENBQUMsQ0FBQztJQUMxRSxPQUFNO1FBQ0ZDLE9BQU87WUFBRWpCLE9BQU9jLElBQUlJLElBQUk7UUFBQztJQUM3QjtBQUNKLEVBQUU7QUFFRixpRUFBZW5CLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRhaWx5LWRvc2UvLi9wYWdlcy9vcmRlcnMvW2lkXS5qc3g/ZTMwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3JlY2lwdC5tb2R1bGUuY3NzJztcblxuY29uc3QgT3JkZXIgPSAoe29yZGVyfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWNpcHR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cbiAgICAgICAgICAgICAgICA8YT5UaGFuayBZb3UhPC9hPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWNpcHRjb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJMfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+T3JkZXIgSUQ8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e29yZGVyLl9pZH08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHtwYXJhbXN9KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29yZGVyLyR7cGFyYW1zLmlkfWApO1xuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHsgb3JkZXI6IHJlcy5kYXRhIH0sXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyOyJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0Iiwic3R5bGVzIiwiT3JkZXIiLCJvcmRlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInJlY2lwdCIsImRldGFpbHMiLCJhIiwiYnIiLCJyZWNpcHRjb250YWluZXIiLCJvcmRlckwiLCJvcmRlcmlkIiwiX2lkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwicmVzIiwiZ2V0IiwiaWQiLCJwcm9wcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/orders/[id].jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/orders/[id].jsx"));
module.exports = __webpack_exports__;

})();