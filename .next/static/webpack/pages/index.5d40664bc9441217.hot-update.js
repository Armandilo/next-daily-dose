"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProductCard.jsx":
/*!************************************!*\
  !*** ./components/ProductCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ProductCard.module.css */ \"./styles/ProductCard.module.css\");\n/* harmony import */ var _styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/cartSlice */ \"./redux/cartSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductCard = (param)=>{\n    let { products  } = param;\n    _s();\n    const price = useState(products.price);\n    const quantity = useState(products.quantity);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const handleClick = ()=>{\n        dispatch((0,_redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__.addProduct)({\n            ...products,\n            price,\n            quantity\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productimg),\n                src: products.image,\n                alt: \"\",\n                width: \"90\",\n                height: \"90\"\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productlist),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: products.item_name\n                    }, void 0, false, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().desc),\n                        children: products.size\n                    }, void 0, false, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().price),\n                        children: [\n                            \"RM\",\n                            products.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCartPlus, {\n                    size: 32\n                }, void 0, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 63\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"bMVUSr6erSgiY/+RyWrzkfpricI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDNEI7QUFDdkI7QUFDVztBQUNBO0FBQ007QUFHL0MsTUFBTU0sY0FBYyxTQUFnQjtRQUFmLEVBQUNDLFNBQVEsRUFBQzs7SUFDN0IsTUFBTUMsUUFBUUMsU0FBU0YsU0FBU0MsS0FBSztJQUNyQyxNQUFNRSxXQUFXRCxTQUFTRixTQUFTRyxRQUFRO0lBQzNDLE1BQU1DLFdBQVdQLHdEQUFXQTtJQUM1QixNQUFNUSxjQUFZLElBQUk7UUFDcEJELFNBQVNOLDREQUFVQSxDQUFDO1lBQUMsR0FBR0UsUUFBUTtZQUFDQztZQUFNRTtRQUFRO0lBQ2pEO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUlDLFdBQWFiLGlGQUFnQjs7MEJBQ2hDLDhEQUFDQyxtREFBS0E7Z0JBQUNZLFdBQWFiLGtGQUFpQjtnQkFBRWdCLEtBQU1WLFNBQVNXLEtBQUs7Z0JBQUVDLEtBQUk7Z0JBQUdDLE9BQU07Z0JBQUtDLFFBQU87Ozs7OzswQkFDdEYsOERBQUNSO2dCQUFJQyxXQUFZYixtRkFBa0I7O2tDQUNqQyw4REFBQ3NCO3dCQUFHVCxXQUFXYiw2RUFBWTtrQ0FBR00sU0FBU2tCLFNBQVM7Ozs7OztrQ0FDaEQsOERBQUNDO3dCQUFFWixXQUFXYiw0RUFBVztrQ0FDdEJNLFNBQVNxQixJQUFJOzs7Ozs7a0NBRWhCLDhEQUFDQzt3QkFBS2YsV0FBV2IsNkVBQVk7OzRCQUFFOzRCQUFHTSxTQUFTQyxLQUFLOzs7Ozs7Ozs7Ozs7OzBCQUVsRCw4REFBQ3NCO2dCQUFPaEIsV0FBV2IsOEVBQWE7Z0JBQUU4QixTQUFTbkI7MEJBQWEsNEVBQUNULHNEQUFVQTtvQkFBQ3lCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2hGO0dBcEJNdEI7O1FBR2FGLG9EQUFXQTs7O0tBSHhCRTtBQXNCTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzeD84MmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qcm9kdWN0Q2FyZC5tb2R1bGUuY3NzXCJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHtCc0NhcnRQbHVzfSBmcm9tICdyZWFjdC1pY29ucy9icydcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGRQcm9kdWN0IH0gZnJvbSAnLi4vcmVkdXgvY2FydFNsaWNlJ1xuXG5cbmNvbnN0IFByb2R1Y3RDYXJkID0gKHtwcm9kdWN0c30pID0+IHtcbiAgY29uc3QgcHJpY2UgPSB1c2VTdGF0ZShwcm9kdWN0cy5wcmljZSk7XG4gIGNvbnN0IHF1YW50aXR5ID0gdXNlU3RhdGUocHJvZHVjdHMucXVhbnRpdHkpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrPSgpPT57XG4gICAgZGlzcGF0Y2goYWRkUHJvZHVjdCh7Li4ucHJvZHVjdHMscHJpY2UscXVhbnRpdHl9KSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lID0ge3N0eWxlcy5wcm9kdWN0aW1nfSBzcmM9IHtwcm9kdWN0cy5pbWFnZX0gYWx0PVwiXCIgd2lkdGg9XCI5MFwiIGhlaWdodD1cIjkwXCIvPlxuICAgICAgPGRpdiBjbGFzc05hbWUgPXtzdHlsZXMucHJvZHVjdGxpc3R9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9kdWN0cy5pdGVtX25hbWV9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+XG4gICAgICAgICAge3Byb2R1Y3RzLnNpemV9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PlJNe3Byb2R1Y3RzLnByaWNlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48QnNDYXJ0UGx1cyBzaXplPXszMn0vPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSW1hZ2UiLCJCc0NhcnRQbHVzIiwidXNlRGlzcGF0Y2giLCJhZGRQcm9kdWN0IiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0cyIsInByaWNlIiwidXNlU3RhdGUiLCJxdWFudGl0eSIsImRpc3BhdGNoIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwcm9kdWN0aW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByb2R1Y3RsaXN0IiwiaDEiLCJ0aXRsZSIsIml0ZW1fbmFtZSIsInAiLCJkZXNjIiwic2l6ZSIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductCard.jsx\n"));

/***/ })

});