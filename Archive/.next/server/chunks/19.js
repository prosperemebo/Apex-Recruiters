exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 6302:
/***/ ((module) => {

// Exports
module.exports = {
	"slideIn": "withTransition_slideIn__kNNKA",
	"slideOut": "withTransition_slideOut__QtWLX"
};


/***/ }),

/***/ 7120:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__Z8PUO",
	"center": "Header_center__aKLvs",
	"contentBox": "Header_contentBox__mfswd",
	"short": "Header_short__3ipda",
	"medium": "Header_medium__cwYS7",
	"green": "Header_green__POw7d",
	"dark": "Header_dark__NElnI",
	"figComp": "Header_figComp__CnFL7",
	"cta": "Header_cta__u__dB"
};


/***/ }),

/***/ 3170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _withTransition_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6302);
/* harmony import */ var _withTransition_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_withTransition_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const withTransition = (OriginalComponent)=>{
    return function WithTransition() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                    initial: true,
                    mode: "wait",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OriginalComponent, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: (_withTransition_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slideIn),
                    initial: {
                        scaleY: 0
                    },
                    animate: {
                        scaleY: 0
                    },
                    exit: {
                        scaleY: 1
                    },
                    transition: {
                        duration: 0.7,
                        ease: "easeInOut"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: (_withTransition_module_scss__WEBPACK_IMPORTED_MODULE_2___default().slideOut),
                    initial: {
                        scaleY: 1
                    },
                    animate: {
                        scaleY: 0
                    },
                    exit: {
                        scaleY: 0
                    },
                    transition: {
                        duration: 0.7,
                        ease: "easeInOut"
                    }
                })
            ]
        });
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTransition); // clip-path: polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%);
 // clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 100% 0%);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;