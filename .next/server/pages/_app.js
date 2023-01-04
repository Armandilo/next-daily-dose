(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 802:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__rxFeS",
	"Logo": "Navbar_Logo__jNY0S",
	"list": "Navbar_list__h0uMs",
	"listitem": "Navbar_listitem__nbLuB",
	"cart": "Navbar_cart__SbQah",
	"counter": "Navbar_counter__GLebN"
};


/***/ }),

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(760);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(802);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Navbar.jsx




const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Navbar_module_default()).item
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Navbar_module_default()).logoContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).item
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (Navbar_module_default()).list,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Navbar_module_default()).listitem,
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Navbar_module_default()).listitem,
                                children: "Order"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Navbar_module_default()).listitem,
                                children: "Contact"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Navbar_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).cart,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/img/shopping-cart.png",
                            alt: "",
                            width: "30",
                            height: "30"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).counter,
                        children: "2"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Footer.jsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Footer"
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Logo.jsx



const Logo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Navbar_module_default()).Logo,
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "DAILY DOSE"
        })
    });
};
/* harmony default export */ const components_Logo = (Logo);

;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 760:
/***/ (() => {



/***/ }),

/***/ 918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675], () => (__webpack_exec__(218)));
module.exports = __webpack_exports__;

})();