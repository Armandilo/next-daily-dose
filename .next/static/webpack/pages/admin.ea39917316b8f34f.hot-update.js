"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/OrdersId.jsx":
/*!*********************************!*\
  !*** ./components/OrdersId.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_OrderId_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/OrderId.module.css */ \"./styles/OrderId.module.css\");\n/* harmony import */ var _styles_OrderId_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderId_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_OrderCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/OrderCard */ \"./components/OrderCard.jsx\");\n\n\n\n\nconst OrdersId = (param)=>{\n    let { orders  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_OrderId_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Order Id: \"\n                }, void 0, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrdersId.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrdersId.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined),\n            orders.item.map((orders)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_OrderCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    orders: orders\n                }, orders._id, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrdersId.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrdersId.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = OrdersId;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrdersId);\nvar _c;\n$RefreshReg$(_c, \"OrdersId\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09yZGVyc0lkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBQ3dCO0FBQ0Y7QUFHaEQsTUFBTUcsV0FBVyxTQUFjO1FBQWIsRUFBQ0MsT0FBTSxFQUFDO0lBQ3hCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTCw2RUFBZ0I7OzBCQUM1Qiw4REFBQ0k7MEJBQ0csNEVBQUNHOzhCQUFFOzs7Ozs7Ozs7OztZQUVOSixPQUFPSyxJQUFJLENBQUNDLEdBQUcsQ0FBQ04sQ0FBQUEsdUJBQ2IsOERBQUNGLDZEQUFTQTtvQkFBa0JFLFFBQVVBO21CQUF0QkEsT0FBT08sR0FBRzs7Ozs7Ozs7Ozs7QUFLdEM7S0FaTVI7QUFjTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL09yZGVyc0lkLmpzeD9mOGYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9PcmRlcklkLm1vZHVsZS5jc3MnO1xuaW1wb3J0IE9yZGVyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL09yZGVyQ2FyZCc7XG5cblxuY29uc3QgT3JkZXJzSWQgPSAoe29yZGVyc30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YT5PcmRlciBJZDogPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge29yZGVycy5pdGVtLm1hcChvcmRlcnM9PihcbiAgICAgICAgICAgIDxPcmRlckNhcmQga2V5PXtvcmRlcnMuX2lkfSBvcmRlcnMgPSB7b3JkZXJzfS8+XG4gICAgICAgICkpfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzSWQiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJPcmRlckNhcmQiLCJPcmRlcnNJZCIsIm9yZGVycyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImEiLCJpdGVtIiwibWFwIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OrdersId.jsx\n"));

/***/ })

});