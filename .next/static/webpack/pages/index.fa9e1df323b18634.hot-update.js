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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ProductCard.module.css */ \"./styles/ProductCard.module.css\");\n/* harmony import */ var _styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/cartSlice */ \"./redux/cartSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProductCard = (param)=>{\n    let { products  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const handleClick = ()=>{\n        dispatch((0,_redux_cartSlice__WEBPACK_IMPORTED_MODULE_4__.addProduct)({\n            ...products,\n            price,\n            quantity\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productimg),\n                src: products.image,\n                alt: \"\",\n                width: \"90\",\n                height: \"90\"\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productlist),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: products.item_name\n                    }, void 0, false, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().desc),\n                        children: products.size\n                    }, void 0, false, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().price),\n                        children: [\n                            \"RM\",\n                            products.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                onClick: handleClick(),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCartPlus, {\n                    size: 32\n                }, void 0, false, {\n                    fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 65\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/armand/Desktop/next-daily-dose/components/ProductCard.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDNEI7QUFDdkI7QUFDVztBQUNBO0FBQ007QUFDZjtBQUdoQyxNQUFNTyxjQUFjLFNBQWdCO1FBQWYsRUFBQ0MsU0FBUSxFQUFDOztJQUc3QixNQUFNQyxXQUFXTCx3REFBV0E7SUFDNUIsTUFBTU0sY0FBWSxJQUFJO1FBQ3BCRCxTQUFTSiw0REFBVUEsQ0FBQztZQUFDLEdBQUdHLFFBQVE7WUFBQ0c7WUFBTUM7UUFBUTtJQUNqRDtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFhYixpRkFBZ0I7OzBCQUNoQyw4REFBQ0MsbURBQUtBO2dCQUFDWSxXQUFhYixrRkFBaUI7Z0JBQUVnQixLQUFNVCxTQUFTVSxLQUFLO2dCQUFFQyxLQUFJO2dCQUFHQyxPQUFNO2dCQUFLQyxRQUFPOzs7Ozs7MEJBQ3RGLDhEQUFDUjtnQkFBSUMsV0FBWWIsbUZBQWtCOztrQ0FDakMsOERBQUNzQjt3QkFBR1QsV0FBV2IsNkVBQVk7a0NBQUdPLFNBQVNpQixTQUFTOzs7Ozs7a0NBQ2hELDhEQUFDQzt3QkFBRVosV0FBV2IsNEVBQVc7a0NBQ3RCTyxTQUFTb0IsSUFBSTs7Ozs7O2tDQUVoQiw4REFBQ0M7d0JBQUtmLFdBQVdiLDZFQUFZOzs0QkFBRTs0QkFBR08sU0FBU0csS0FBSzs7Ozs7Ozs7Ozs7OzswQkFFbEQsOERBQUNtQjtnQkFBT2hCLFdBQVdiLDhFQUFhO2dCQUFFOEIsU0FBU3JCOzBCQUFlLDRFQUFDUCxzREFBVUE7b0JBQUN5QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRjtHQXBCTXJCOztRQUdhSCxvREFBV0E7OztLQUh4Qkc7QUF3Qk4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qc3g/ODJmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvZHVjdENhcmQubW9kdWxlLmNzc1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7QnNDYXJ0UGx1c30gZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYWRkUHJvZHVjdCB9IGZyb20gJy4uL3JlZHV4L2NhcnRTbGljZSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cblxuY29uc3QgUHJvZHVjdENhcmQgPSAoe3Byb2R1Y3RzfSkgPT4ge1xuIFxuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2s9KCk9PntcbiAgICBkaXNwYXRjaChhZGRQcm9kdWN0KHsuLi5wcm9kdWN0cyxwcmljZSxxdWFudGl0eX0pKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWUgPSB7c3R5bGVzLnByb2R1Y3RpbWd9IHNyYz0ge3Byb2R1Y3RzLmltYWdlfSBhbHQ9XCJcIiB3aWR0aD1cIjkwXCIgaGVpZ2h0PVwiOTBcIi8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9e3N0eWxlcy5wcm9kdWN0bGlzdH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Byb2R1Y3RzLml0ZW1fbmFtZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgICB7cHJvZHVjdHMuc2l6ZX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZX0+Uk17cHJvZHVjdHMucHJpY2V9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xpY2soKX0+PEJzQ2FydFBsdXMgc2l6ZT17MzJ9Lz48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSW1hZ2UiLCJCc0NhcnRQbHVzIiwidXNlRGlzcGF0Y2giLCJhZGRQcm9kdWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3RzIiwiZGlzcGF0Y2giLCJoYW5kbGVDbGljayIsInByaWNlIiwicXVhbnRpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwcm9kdWN0aW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByb2R1Y3RsaXN0IiwiaDEiLCJ0aXRsZSIsIml0ZW1fbmFtZSIsInAiLCJkZXNjIiwic2l6ZSIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductCard.jsx\n"));

/***/ })

});