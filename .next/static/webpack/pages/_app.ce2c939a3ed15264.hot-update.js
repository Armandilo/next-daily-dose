"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/DropdownMenu.jsx":
/*!*************************************!*\
  !*** ./components/DropdownMenu.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst DropdownMenu = (param)=>{\n    let { options , label  } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.dropdownButton,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: styles.dropdownButton_label,\n                onClick: ()=>setIsOpen(!isOpen),\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/DropdownMenu.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: styles.dropdownButton_options,\n                children: options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: option\n                    }, index, false, {\n                        fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/DropdownMenu.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/DropdownMenu.jsx\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/DropdownMenu.jsx\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, undefined);\n};\n_s(DropdownMenu, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = DropdownMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownMenu);\nvar _c;\n$RefreshReg$(_c, \"DropdownMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Ryb3Bkb3duTWVudS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBeUI7QUFDUTtBQUdqQyxNQUFNRSxlQUFlLFNBQXdCO1FBQXZCLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFOztJQUNwQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUUxQyxxQkFDRSw4REFBQ007UUFBSUMsV0FBV0MsT0FBT0MsY0FBYzs7MEJBQ25DLDhEQUFDQztnQkFDQ0gsV0FBV0MsT0FBT0csb0JBQW9CO2dCQUN0Q0MsU0FBUyxJQUFNUCxVQUFVLENBQUNEOzBCQUV6QkQ7Ozs7OztZQUVGQyx3QkFDQyw4REFBQ1M7Z0JBQUdOLFdBQVdDLE9BQU9NLHNCQUFzQjswQkFDekNaLFFBQVFhLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNDO2tDQUFnQkY7dUJBQVJDOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCO0dBcEJJaEI7S0FBQUE7QUFzQkosK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bk1lbnUuanN4PzkwMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgRHJvcGRvd25NZW51ID0gKHsgb3B0aW9ucywgbGFiZWwgfSkgPT4ge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25CdXR0b259PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25CdXR0b25fbGFiZWx9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duQnV0dG9uX29wdGlvbnN9PlxuICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57b3B0aW9ufTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBEcm9wZG93bk1lbnUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duTWVudSIsIm9wdGlvbnMiLCJsYWJlbCIsImlzT3BlbiIsInNldElzT3BlbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlcyIsImRyb3Bkb3duQnV0dG9uIiwiYnV0dG9uIiwiZHJvcGRvd25CdXR0b25fbGFiZWwiLCJvbkNsaWNrIiwidWwiLCJkcm9wZG93bkJ1dHRvbl9vcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DropdownMenu.jsx\n"));

/***/ }),

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownMenu */ \"./components/DropdownMenu.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Beverage = [\n    \"Option 1\",\n    \"Option 2\",\n    \"Option 3\"\n];\nconst Food = [\n    \"Option 1\",\n    \"Option 2\",\n    \"Option 3\"\n];\nconst Navbar = ()=>{\n    _s();\n    const quantity = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.cart.quantity);\n    const handleCart = (event)=>{\n        if (quantity === 0) {\n            event.preventDefault();\n            alert(\"No Items In Cart!\");\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().item)\n            }, void 0, false, {\n                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().item)\n                    }, void 0, false, {\n                        fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().listitem),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/\",\n                                    passHref: true,\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 45\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().listitem),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DropdownButton, {\n                                    options: Beverage,\n                                    label: \"Beverage\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 45\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().listitem),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DropdownButton, {\n                                    options: Food,\n                                    label: \"Food\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 45\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                onClick: handleCart,\n                href: \"/cart\",\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().cart),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/img/shopping-cart.png\",\n                                alt: \"\",\n                                width: \"30\",\n                                height: \"30\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 10\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().counter),\n                            children: quantity\n                        }, void 0, false, {\n                            fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/Navbar.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"dguPE8WOa4lEV37WUFYHXrG9+tQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQUN1QjtBQUNsQjtBQUNXO0FBQ2I7QUFDYTtBQUV6QyxNQUFNTSxXQUFXO0lBQUM7SUFBWTtJQUFZO0NBQVc7QUFDckQsTUFBTUMsT0FBTztJQUFDO0lBQVk7SUFBWTtDQUFXO0FBRWpELE1BQU1DLFNBQVMsSUFBTTs7SUFDbkIsTUFBTUMsV0FBV04sd0RBQVdBLENBQUNPLENBQUFBLFFBQU9BLE1BQU1DLElBQUksQ0FBQ0YsUUFBUTtJQUN2RCxNQUFNRyxhQUFhQyxDQUFBQSxRQUFTO1FBQzFCLElBQUdKLGFBQVcsR0FDZDtZQUNFSSxNQUFNQyxjQUFjO1lBQ3BCQyxNQUFNO1FBQ1IsQ0FBQzs7SUFDSDtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXaEIsNEVBQWdCOzswQkFDOUIsOERBQUNlO2dCQUFJQyxXQUFXaEIsdUVBQVc7Ozs7OzswQkFFM0IsOERBQUNlO2dCQUFJQyxXQUFXaEIsZ0ZBQW9COztrQ0FDcEMsOERBQUNlO3dCQUFJQyxXQUFXaEIsdUVBQVc7Ozs7OztrQ0FFekIsOERBQUNvQjt3QkFBR0osV0FBYWhCLHVFQUFXOzswQ0FDMUIsOERBQUNzQjtnQ0FBR04sV0FBYWhCLDJFQUFlOzBDQUFFLDRFQUFDRyxrREFBSUE7b0NBQUNxQixNQUFLO29DQUFJQyxRQUFROzhDQUFDOzs7Ozs7Ozs7OzswQ0FDMUQsOERBQUNIO2dDQUFHTixXQUFhaEIsMkVBQWU7MENBQUUsNEVBQUMwQjtvQ0FBZUMsU0FBU3RCO29DQUFVdUIsT0FBTTs7Ozs7Ozs7Ozs7MENBQzNFLDhEQUFDTjtnQ0FBR04sV0FBYWhCLDJFQUFlOzBDQUFFLDRFQUFDMEI7b0NBQWVDLFNBQVNyQjtvQ0FBTXNCLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUczRSw4REFBQ3pCLGtEQUFJQTtnQkFBQzBCLFNBQVNsQjtnQkFBWWEsTUFBTTtnQkFBUUMsUUFBUTswQkFDakQsNEVBQUNWO29CQUFJQyxXQUFXaEIsdUVBQVc7O3NDQUN6Qiw4REFBQ2U7NEJBQUlDLFdBQVloQix1RUFBVztzQ0FDM0IsNEVBQUNDLG1EQUFLQTtnQ0FBQzZCLEtBQUs7Z0NBQXlCQyxLQUFJO2dDQUFHQyxPQUFNO2dDQUFLQyxRQUFPOzs7Ozs7Ozs7OztzQ0FHL0QsOERBQUNsQjs0QkFBSUMsV0FBYWhCLDBFQUFjO3NDQUFHUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0M7R0FsQ01EOztRQUNhTCxvREFBV0E7OztLQUR4Qks7QUFvQ04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4PzNhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzXCJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnXG5cbmNvbnN0IEJldmVyYWdlID0gWydPcHRpb24gMScsICdPcHRpb24gMicsICdPcHRpb24gMyddO1xuY29uc3QgRm9vZCA9IFsnT3B0aW9uIDEnLCAnT3B0aW9uIDInLCAnT3B0aW9uIDMnXTtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBxdWFudGl0eSA9IHVzZVNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5jYXJ0LnF1YW50aXR5KTtcbiAgY29uc3QgaGFuZGxlQ2FydCA9IGV2ZW50ID0+IHtcbiAgICBpZihxdWFudGl0eT09PTApXG4gICAge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGFsZXJ0KFwiTm8gSXRlbXMgSW4gQ2FydCFcIik7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0NvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZSA9IHtzdHlsZXMubGlzdH0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IHtzdHlsZXMubGlzdGl0ZW19PjxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+QWxsPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IHtzdHlsZXMubGlzdGl0ZW19PjxEcm9wZG93bkJ1dHRvbiBvcHRpb25zPXtCZXZlcmFnZX0gbGFiZWw9XCJCZXZlcmFnZVwiIC8+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lID0ge3N0eWxlcy5saXN0aXRlbX0+PERyb3Bkb3duQnV0dG9uIG9wdGlvbnM9e0Zvb2R9IGxhYmVsPVwiRm9vZFwiIC8+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPExpbmsgb25DbGljaz17aGFuZGxlQ2FydH0gaHJlZiA9XCIvY2FydFwiIHBhc3NIcmVmPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPXtzdHlsZXMuY2FydH0+XG4gICAgICAgICA8SW1hZ2Ugc3JjID1cIi9pbWcvc2hvcHBpbmctY2FydC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIi8+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuY291bnRlcn0+e3F1YW50aXR5fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsInVzZVNlbGVjdG9yIiwiTGluayIsIkRyb3Bkb3duTWVudSIsIkJldmVyYWdlIiwiRm9vZCIsIk5hdmJhciIsInF1YW50aXR5Iiwic3RhdGUiLCJjYXJ0IiwiaGFuZGxlQ2FydCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIml0ZW0iLCJsb2dvQ29udGFpbmVyIiwidWwiLCJsaXN0IiwibGkiLCJsaXN0aXRlbSIsImhyZWYiLCJwYXNzSHJlZiIsIkRyb3Bkb3duQnV0dG9uIiwib3B0aW9ucyIsImxhYmVsIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiY291bnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ })

});