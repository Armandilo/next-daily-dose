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

/***/ "./components/OrderCard.jsx":
/*!**********************************!*\
  !*** ./components/OrderCard.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/OrderCard.module.css */ \"./styles/OrderCard.module.css\");\n/* harmony import */ var _styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst OrderCard = (param)=>{\n    let { orders  } = param;\n    _s();\n    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleChange = ()=>{\n        setChecked(!checked);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().productimg),\n                src: \"/img/coffee.png\",\n                alt: \"\",\n                width: \"50\",\n                height: \"50\"\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().productlist),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: orders.item_name\n                }, void 0, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().status),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    checked: checked,\n                    onChange: handleChange,\n                    className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputquan)\n                }, void 0, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(OrderCard, \"OiiR1BYWvMsLHMiD2uYkeM3TCO0=\");\n_c = OrderCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderCard);\nvar _c;\n$RefreshReg$(_c, \"OrderCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09yZGVyQ2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQzBCO0FBQ3JCO0FBQ1c7QUFFekMsTUFBTUksWUFBWSxTQUFjO1FBQWIsRUFBQ0MsT0FBTSxFQUFDOztJQUN2QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AscURBQWMsQ0FBQyxLQUFLO0lBRWxELE1BQU1TLGVBQWMsSUFBTTtRQUN0QkYsV0FBVyxDQUFDRDtJQUNoQjtJQUdGLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFhViwrRUFBZ0I7OzBCQUNoQyw4REFBQ0MsbURBQUtBO2dCQUFDUyxXQUFhVixnRkFBaUI7Z0JBQUVhLEtBQUk7Z0JBQWtCQyxLQUFJO2dCQUFHQyxPQUFNO2dCQUFLQyxRQUFPOzs7Ozs7MEJBQ3RGLDhEQUFDUDtnQkFBSUMsV0FBWVYsaUZBQWtCOzBCQUVqQyw0RUFBQ2tCO29CQUFHUixXQUFXViwyRUFBWTs4QkFBR0ksT0FBT2dCLFNBQVM7Ozs7Ozs7Ozs7OzBCQUtoRCw4REFBQ1g7Z0JBQUlDLFdBQVdWLDRFQUFhOzBCQUMzQiw0RUFBQ3NCO29CQUFNQyxNQUFLO29CQUFXbEIsU0FBVUE7b0JBQVNtQixVQUFXaEI7b0JBQWNFLFdBQVdWLCtFQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEc7R0F2Qk1HO0tBQUFBO0FBeUJOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT3JkZXJDYXJkLmpzeD80ZWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9PcmRlckNhcmQubW9kdWxlLmNzc1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7RmFUcmFzaEFsdH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5cbmNvbnN0IE9yZGVyQ2FyZCA9ICh7b3JkZXJzfSkgPT4ge1xuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9KCkgPT4ge1xuICAgICAgICBzZXRDaGVja2VkKCFjaGVja2VkKTtcbiAgICB9O1xuXG4gICAgXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWUgPSB7c3R5bGVzLnByb2R1Y3RpbWd9IHNyYz1cIi9pbWcvY29mZmVlLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID17c3R5bGVzLnByb2R1Y3RsaXN0fT5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntvcmRlcnMuaXRlbV9uYW1lfTwvaDE+XG5cbiAgICAgIDwvZGl2PlxuICAgIFxuICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQgPXtjaGVja2VkfSBvbkNoYW5nZSA9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRxdWFufSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDYXJkIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSW1hZ2UiLCJGYVRyYXNoQWx0IiwiT3JkZXJDYXJkIiwib3JkZXJzIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInByb2R1Y3RpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByb2R1Y3RsaXN0IiwiaDEiLCJ0aXRsZSIsIml0ZW1fbmFtZSIsInN0YXR1cyIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiaW5wdXRxdWFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OrderCard.jsx\n"));

/***/ })

});