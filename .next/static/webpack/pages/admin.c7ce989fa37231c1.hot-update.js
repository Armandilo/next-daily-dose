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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/OrderCard.module.css */ \"./styles/OrderCard.module.css\");\n/* harmony import */ var _styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst OrderCard = (param)=>{\n    let { orders  } = param;\n    _s();\n    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    let itemarr = [];\n    itemarr.push.apply(itemarr, orders.item);\n    const handleChange = ()=>{\n        console.log(orders.item.item_name);\n        setChecked(!checked);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().productimg),\n                src: \"/img/coffee.png\",\n                alt: \"\",\n                width: \"50\",\n                height: \"50\"\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().productlist),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: \"Ice Blended Cappucino\"\n                }, void 0, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().status),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    checked: checked,\n                    onChange: handleChange,\n                    className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputquan)\n                }, void 0, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(OrderCard, \"OiiR1BYWvMsLHMiD2uYkeM3TCO0=\");\n_c = OrderCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderCard);\nvar _c;\n$RefreshReg$(_c, \"OrderCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09yZGVyQ2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXlCO0FBQzBCO0FBQ3JCO0FBQ1c7QUFFekMsTUFBTUksWUFBWSxTQUFjO1FBQWIsRUFBQ0MsT0FBTSxFQUFDOztJQUN2QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AscURBQWMsQ0FBQyxLQUFLO0lBQ2xELElBQUlTLFVBQVMsRUFBRTtJQUNmQSxRQUFRQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsU0FBUUosT0FBT08sSUFBSTtJQUV0QyxNQUFNQyxlQUFjLElBQU07UUFDdEJDLFFBQVFDLEdBQUcsQ0FBQ1YsT0FBT08sSUFBSSxDQUFDSSxTQUFTO1FBQ2pDVCxXQUFXLENBQUNEO0lBQ2hCO0lBR0YscUJBQ0UsOERBQUNXO1FBQUlDLFdBQWFqQiwrRUFBZ0I7OzBCQUNoQyw4REFBQ0MsbURBQUtBO2dCQUFDZ0IsV0FBYWpCLGdGQUFpQjtnQkFBRW9CLEtBQUk7Z0JBQWtCQyxLQUFJO2dCQUFHQyxPQUFNO2dCQUFLQyxRQUFPOzs7Ozs7MEJBQ3RGLDhEQUFDUDtnQkFBSUMsV0FBWWpCLGlGQUFrQjswQkFDakMsNEVBQUN5QjtvQkFBR1IsV0FBV2pCLDJFQUFZOzhCQUFFOzs7Ozs7Ozs7OzswQkFJL0IsOERBQUNnQjtnQkFBSUMsV0FBV2pCLDRFQUFhOzBCQUMzQiw0RUFBQzRCO29CQUFNQyxNQUFLO29CQUFXeEIsU0FBVUE7b0JBQVN5QixVQUFXbEI7b0JBQWNLLFdBQVdqQiwrRUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRHO0dBeEJNRztLQUFBQTtBQTBCTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL09yZGVyQ2FyZC5qc3g/NGVhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvT3JkZXJDYXJkLm1vZHVsZS5jc3NcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQge0ZhVHJhc2hBbHR9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuXG5jb25zdCBPcmRlckNhcmQgPSAoe29yZGVyc30pID0+IHtcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgbGV0IGl0ZW1hcnIgPVtdO1xuICAgIGl0ZW1hcnIucHVzaC5hcHBseShpdGVtYXJyLG9yZGVycy5pdGVtKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9KCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnMuaXRlbS5pdGVtX25hbWUpXG4gICAgICAgIHNldENoZWNrZWQoIWNoZWNrZWQpO1xuICAgIH07XG5cbiAgICBcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEltYWdlIGNsYXNzTmFtZSA9IHtzdHlsZXMucHJvZHVjdGltZ30gc3JjPVwiL2ltZy9jb2ZmZWUucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIvPlxuICAgICAgPGRpdiBjbGFzc05hbWUgPXtzdHlsZXMucHJvZHVjdGxpc3R9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkljZSBCbGVuZGVkIENhcHB1Y2lubzwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICBcbiAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkID17Y2hlY2tlZH0gb25DaGFuZ2UgPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0cXVhbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkltYWdlIiwiRmFUcmFzaEFsdCIsIk9yZGVyQ2FyZCIsIm9yZGVycyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidXNlU3RhdGUiLCJpdGVtYXJyIiwicHVzaCIsImFwcGx5IiwiaXRlbSIsImhhbmRsZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtX25hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwcm9kdWN0aW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwcm9kdWN0bGlzdCIsImgxIiwidGl0bGUiLCJzdGF0dXMiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImlucHV0cXVhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/OrderCard.jsx\n"));

/***/ })

});