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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/recipt.module.css */ \"./styles/recipt.module.css\");\n/* harmony import */ var _styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-absolute-url */ \"next-absolute-url\");\n/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Order = ({ order  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_4___default().recipt),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_4___default().details),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"Thank You!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_4___default().reciptcontainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderL),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Order ID\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                                lineNumber: 16,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_recipt_module_css__WEBPACK_IMPORTED_MODULE_4___default().orderid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: order._id\n                                }, void 0, false, {\n                                    fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                                lineNumber: 19,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/armand/Desktop/next-daily-dose/pages/orders/[id].jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async (ctx)=>{\n    const id = ctx.params.id;\n    const hostname = ctx.req.headers.host;\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://\" + hostname + \"/api/order/\" + id);\n    return {\n        props: {\n            order: res.data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMvW2lkXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNBO0FBQzBCO0FBQ1I7QUFHNUMsTUFBTUksUUFBUSxDQUFDLEVBQUNDLE1BQUssRUFBQyxHQUFLO0lBQ3pCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTCw0RUFBZ0I7a0JBQzVCLDRFQUFDSTtZQUFJQyxXQUFXTCx5RUFBYTtzQkFDekIsNEVBQUNJO2dCQUFJQyxXQUFXTCwwRUFBYzs7a0NBQzFCLDhEQUFDUztrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQzs7Ozs7a0NBRUQsOERBQUNOO3dCQUFJQyxXQUFXTCxrRkFBc0I7OzBDQUN0Qyw4REFBQ0k7Z0NBQUlDLFdBQVdMLHlFQUFhOzBDQUN6Qiw0RUFBQ1M7OENBQUU7Ozs7Ozs7Ozs7OzBDQUVQLDhEQUFDTDtnQ0FBSUMsV0FBV0wsMEVBQWM7MENBQzFCLDRFQUFDUzs4Q0FBR04sTUFBTVcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWpDO0FBRU8sTUFBTUMscUJBQXFCLE9BQU9DLE1BQVE7SUFDN0MsTUFBTUMsS0FBS0QsSUFBSUUsTUFBTSxDQUFDRCxFQUFFO0lBQ3hCLE1BQU1FLFdBQVdILElBQUlJLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJO0lBQ3JDLE1BQU1DLE1BQU0sTUFBTXpCLGlEQUFTLENBQUMsWUFBWXFCLFdBQVcsZ0JBQWdCRjtJQUNuRSxPQUFNO1FBQ0ZRLE9BQU87WUFBRXRCLE9BQU9vQixJQUFJRyxJQUFJO1FBQUM7SUFDN0I7QUFDSixFQUFFO0FBRUYsaUVBQWV4QixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYWlseS1kb3NlLy4vcGFnZXMvb3JkZXJzL1tpZF0uanN4P2UzMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9yZWNpcHQubW9kdWxlLmNzcyc7XG5pbXBvcnQgYWJzb2x1dGVVcmwgZnJvbSAnbmV4dC1hYnNvbHV0ZS11cmwnO1xuXG5cbmNvbnN0IE9yZGVyID0gKHtvcmRlcn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjaXB0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XG4gICAgICAgICAgICAgICAgPGE+VGhhbmsgWW91ITwvYT5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjaXB0Y29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyTH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPk9yZGVyIElEPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJpZH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntvcmRlci5faWR9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCBpZCA9IGN0eC5wYXJhbXMuaWQ7XG4gICAgY29uc3QgaG9zdG5hbWUgPSBjdHgucmVxLmhlYWRlcnMuaG9zdDtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vXCIgKyBob3N0bmFtZSArIFwiL2FwaS9vcmRlci9cIiArIGlkKTtcbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOiB7IG9yZGVyOiByZXMuZGF0YSB9LFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlcjsiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInN0eWxlcyIsImFic29sdXRlVXJsIiwiT3JkZXIiLCJvcmRlciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInJlY2lwdCIsImRldGFpbHMiLCJhIiwiYnIiLCJyZWNpcHRjb250YWluZXIiLCJvcmRlckwiLCJvcmRlcmlkIiwiX2lkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwiaWQiLCJwYXJhbXMiLCJob3N0bmFtZSIsInJlcSIsImhlYWRlcnMiLCJob3N0IiwicmVzIiwiZ2V0IiwicHJvcHMiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/orders/[id].jsx\n");

/***/ }),

/***/ "next-absolute-url":
/*!************************************!*\
  !*** external "next-absolute-url" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-absolute-url");

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