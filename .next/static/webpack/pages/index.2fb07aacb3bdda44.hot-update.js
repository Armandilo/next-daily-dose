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

/***/ "./components/ProductList.jsx":
/*!************************************!*\
  !*** ./components/ProductList.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ProductList.module.css */ \"./styles/ProductList.module.css\");\n/* harmony import */ var _styles_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ \"./components/ProductCard.jsx\");\n/* harmony import */ var _ProductSegment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductSegment */ \"./components/ProductSegment.jsx\");\n\n\n\n\n\nconst ProductList = (param)=>{\n    let { productList  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().title)\n            }, void 0, false, {\n                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/ProductList.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ProductList_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n                children: [\n                    \"const Segment[] = \",\n                    productList.map((products)=>products.category.isUnique),\n                    productList.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            products: products\n                        }, products._id, false, {\n                            fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/ProductList.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/ProductList.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deyan/Documents/Coding/CMT322/next-daily-dose/components/ProductList.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUM0QjtBQUNkO0FBQ007QUFFN0MsTUFBTUksY0FBYyxTQUFtQjtRQUFsQixFQUFDQyxZQUFXLEVBQUM7SUFDaEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdOLGlGQUFnQjs7MEJBQzVCLDhEQUFDUTtnQkFBR0YsV0FBV04sNkVBQVk7Ozs7OzswQkFDM0IsOERBQUNLO2dCQUFJQyxXQUFXTiwrRUFBYzs7b0JBQUU7b0JBRVhJLFlBQVlPLEdBQUcsQ0FBQyxDQUFDQyxXQUNsQ0EsU0FBU0MsUUFBUSxDQUFDQyxRQUFRO29CQUszQlYsWUFBWU8sR0FBRyxDQUFDLENBQUNDLHlCQUNoQiw4REFBQ1gsb0RBQVdBOzRCQUFvQlcsVUFBVUE7MkJBQXhCQSxTQUFTRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQztLQW5CTVo7QUFxQk4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qc3g/ZjVhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvZHVjdExpc3QubW9kdWxlLmNzc1wiXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi9Qcm9kdWN0Q2FyZCdcbmltcG9ydCBQcm9kdWN0U2VnbWVudCBmcm9tICcuL1Byb2R1Y3RTZWdtZW50J1xuXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7cHJvZHVjdExpc3R9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG5cbiAgICAgICAgICBjb25zdCBTZWdtZW50W10gPSB7cHJvZHVjdExpc3QubWFwKChwcm9kdWN0cyk9PiAoXG4gICAgICAgICAgICBwcm9kdWN0cy5jYXRlZ29yeS5pc1VuaXF1ZSBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIHtwcm9kdWN0TGlzdC5tYXAoKHByb2R1Y3RzKT0+XG4gICAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0cy5faWR9IHByb2R1Y3RzPXtwcm9kdWN0c30vPlxuICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJQcm9kdWN0Q2FyZCIsIlByb2R1Y3RTZWdtZW50IiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0TGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwidGl0bGUiLCJ3cmFwcGVyIiwibWFwIiwicHJvZHVjdHMiLCJjYXRlZ29yeSIsImlzVW5pcXVlIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductList.jsx\n"));

/***/ })

});