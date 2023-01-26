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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/OrderCard.module.css */ \"./styles/OrderCard.module.css\");\n/* harmony import */ var _styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst OrderCard = (param)=>{\n    let { orders  } = param;\n    _s();\n    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleChange = ()=>{\n        setChecked(!checked);\n    };\n    const handleDelete = async (id)=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"http://localhost:3000\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().productimg),\n                src: orders.image,\n                alt: \"\",\n                width: \"50\",\n                height: \"50\"\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().productlist),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                    children: orders.item_name\n                }, void 0, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().status),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    checked: checked,\n                    onChange: handleChange,\n                    className: (_styles_OrderCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputquan)\n                }, void 0, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/armand/Desktop/next-daily-dose/components/OrderCard.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(OrderCard, \"OiiR1BYWvMsLHMiD2uYkeM3TCO0=\");\n_c = OrderCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderCard);\nvar _c;\n$RefreshReg$(_c, \"OrderCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09yZGVyQ2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQUMwQjtBQUNyQjtBQUNXO0FBQ2hCO0FBRXpCLE1BQU1LLFlBQVksU0FBYztRQUFiLEVBQUNDLE9BQU0sRUFBQzs7SUFDdkIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLHFEQUFjLENBQUMsS0FBSztJQUVsRCxNQUFNVSxlQUFjLElBQU07UUFDdEJGLFdBQVcsQ0FBQ0Q7SUFDaEI7SUFFQSxNQUFNSSxlQUFlLE9BQU9DLEtBQU87UUFDL0IsSUFBRztZQUNELE1BQU1DLE1BQU0sTUFBTVQsdURBQVksQ0FBQztRQUNqQyxFQUFDLE9BQU1XLEtBQUk7WUFDVEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0o7SUFHRixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBYWxCLCtFQUFnQjs7MEJBQ2hDLDhEQUFDQyxtREFBS0E7Z0JBQUNpQixXQUFhbEIsZ0ZBQWlCO2dCQUFFcUIsS0FBS2hCLE9BQU9pQixLQUFLO2dCQUFFQyxLQUFJO2dCQUFHQyxPQUFNO2dCQUFLQyxRQUFPOzs7Ozs7MEJBQ25GLDhEQUFDUjtnQkFBSUMsV0FBWWxCLGlGQUFrQjswQkFFakMsNEVBQUMyQjtvQkFBR1QsV0FBV2xCLDJFQUFZOzhCQUFHSyxPQUFPd0IsU0FBUzs7Ozs7Ozs7Ozs7MEJBS2hELDhEQUFDWjtnQkFBSUMsV0FBV2xCLDRFQUFhOzBCQUMzQiw0RUFBQytCO29CQUFNQyxNQUFLO29CQUFXMUIsU0FBVUE7b0JBQVMyQixVQUFXeEI7b0JBQWNTLFdBQVdsQiwrRUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRHO0dBL0JNSTtLQUFBQTtBQWlDTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL09yZGVyQ2FyZC5qc3g/NGVhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvT3JkZXJDYXJkLm1vZHVsZS5jc3NcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQge0ZhVHJhc2hBbHR9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBPcmRlckNhcmQgPSAoe29yZGVyc30pID0+IHtcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSgpID0+IHtcbiAgICAgICAgc2V0Q2hlY2tlZCghY2hlY2tlZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIpXG4gICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWUgPSB7c3R5bGVzLnByb2R1Y3RpbWd9IHNyYz17b3JkZXJzLmltYWdlfSBhbHQ9XCJcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIi8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9e3N0eWxlcy5wcm9kdWN0bGlzdH0+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57b3JkZXJzLml0ZW1fbmFtZX08L2gxPlxuXG4gICAgICA8L2Rpdj5cbiAgICBcbiAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkID17Y2hlY2tlZH0gb25DaGFuZ2UgPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0cXVhbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyQ2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkltYWdlIiwiRmFUcmFzaEFsdCIsImF4aW9zIiwiT3JkZXJDYXJkIiwib3JkZXJzIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZURlbGV0ZSIsImlkIiwicmVzIiwiZGVsZXRlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInByb2R1Y3RpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicHJvZHVjdGxpc3QiLCJoMSIsInRpdGxlIiwiaXRlbV9uYW1lIiwic3RhdHVzIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJpbnB1dHF1YW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OrderCard.jsx\n"));

/***/ })

});