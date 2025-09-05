self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\user\\Desktop\\Projects\\Advanced-React\\sick-fits\\frontend\\components\\Page.js";



var GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle)(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3A3A3A;--lightGrey:#E1E1E1;--offWhite:#EDEDED;--maxWidth:1000px;--bs:'0 12px 24px 0 rgba(0, 0, 0, 0.09)';box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}body{font-family:'radnika_next',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(--black);}a:hover{text-decoration:underline;}button{font-family:'radnika_next' system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}"]);
_c = GlobalStyles;
var InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "I am a page component"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
_c2 = Page;
Page.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

var _c, _c2;

$RefreshReg$(_c, "GlobalStyles");
$RefreshReg$(_c2, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLmpzIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5uZXJTdHlsZXMiLCJzdHlsZWQiLCJQYWdlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLG9FQUFILHd5QkFBbEI7S0FBTUQsWTtBQTJDTixJQUFNRSxXQUFXLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZEQUFqQjtBQU1lLFNBQVNDLElBQVQsT0FBNEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDekMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFJR0EsUUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEO01BVHVCRCxJO0FBV3hCQSxJQUFJLENBQUNFLFNBQUwsR0FBaUI7QUFDZkQsVUFBUSxFQUFFRSx1REFBYUM7QUFEUixDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAwYmYxMjE4NjZjNGRlZjJhYmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5AZm9udC1mYWNle1xyXG4gIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JztcclxuICBzcmM6IHVybCgnL3N0YXRpYy9yYWRuaWthbmV4dC1tZWRpdW0td2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5odG1se1xyXG4gIC0tcmVkOiAjZmYwMDAwO1xyXG4gIC0tYmxhY2s6ICMzOTM5Mzk7XHJcbiAgLS1ncmV5OiAjM0EzQTNBO1xyXG4gIC0tbGlnaHRHcmV5OiAjRTFFMUUxO1xyXG4gIC0tb2ZmV2hpdGU6ICNFREVERUQ7XHJcbiAgLS1tYXhXaWR0aDogMTAwMHB4O1xyXG4gIC0tYnM6JzAgMTJweCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KSc7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0Jywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6MiA7XHJcblxyXG59XHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGZvbnQtZmFtaWx5OidyYWRuaWthX25leHQnIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBJbm5lclN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXhXaWR0aCk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8cD5JIGFtIGEgcGFnZSBjb21wb25lbnQ8L3A+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9