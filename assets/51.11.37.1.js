(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".oxgbmvii[data-v-32ceda2b]{padding:0 8px;z-index:10;background:var(--faceHeader);box-shadow:0 var(--lineWidth) var(--desktopTimelineHeaderShadow)}.oxgbmvii>span[data-v-32ceda2b]{padding:0 8px;font-size:.9em;line-height:42px;color:var(--text)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--1-oneOf-1-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a183f356", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/client/app/common/scripts/gen-search-query.ts":
/*!***********************************************************!*\
  !*** ./src/client/app/common/scripts/gen-search-query.ts ***!
  \***********************************************************/
/*! exports provided: genSearchQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genSearchQuery", function() { return genSearchQuery; });
/* harmony import */ var _misc_acct_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../misc/acct/parse */ "./src/misc/acct/parse.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/client/app/config.ts");


async function genSearchQuery(v, q) {
    let host;
    let userId;
    if (q.split(' ').some(x => x.startsWith('@'))) {
        for (const at of q.split(' ').filter(x => x.startsWith('@')).map(x => x.substr(1))) {
            if (at.includes('.')) {
                if (at === _config__WEBPACK_IMPORTED_MODULE_1__["host"] || at === '.') {
                    host = null;
                }
                else {
                    host = at;
                }
            }
            else {
                const user = await v.$root.api('users/show', Object(_misc_acct_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(at)).catch(x => null);
                if (user) {
                    userId = user.id;
                }
                else {
                    // todo: show error
                }
            }
        }
    }
    return {
        query: q.split(' ').filter(x => !x.startsWith('/') && !x.startsWith('@')).join(' '),
        host: host,
        userId: userId
    };
}


/***/ }),

/***/ "./src/client/app/desktop/views/home/search.vue":
/*!******************************************************************!*\
  !*** ./src/client/app/desktop/views/home/search.vue + 4 modules ***!
  \******************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/common/scripts/gen-search-query.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/common/scripts/loading.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/i18n.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/search.vue?vue&type=template&id=32ceda2b&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("mk-notes", {
        ref: "timeline",
        attrs: { pagination: _vm.pagination },
        on: { inited: _vm.inited },
        scopedSlots: _vm._u([
          {
            key: "header",
            fn: function() {
              return [
                _c("header", { staticClass: "oxgbmvii" }, [
                  _c(
                    "span",
                    [
                      _c("fa", { attrs: { icon: "search" } }),
                      _vm._v(" " + _vm._s(_vm.q))
                    ],
                    1
                  )
                ])
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/desktop/views/home/search.vue?vue&type=template&id=32ceda2b&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./src/client/app/i18n.ts
var i18n = __webpack_require__("./src/client/app/i18n.ts");

// EXTERNAL MODULE: ./src/client/app/common/scripts/loading.ts
var loading = __webpack_require__("./src/client/app/common/scripts/loading.ts");

// EXTERNAL MODULE: ./src/client/app/common/scripts/gen-search-query.ts
var gen_search_query = __webpack_require__("./src/client/app/common/scripts/gen-search-query.ts");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/search.vue?vue&type=script&lang=ts&




/* harmony default export */ var searchvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])('desktop/views/pages/search.vue'),
    data() {
        return {
            pagination: {
                endpoint: 'notes/search',
                limit: 20,
                params: () => Object(gen_search_query["genSearchQuery"])(this, this.q)
            }
        };
    },
    computed: {
        q() {
            return this.$route.query.q;
        }
    },
    watch: {
        $route() {
            this.$refs.timeline.reload();
        }
    },
    mounted() {
        document.addEventListener('keydown', this.onDocumentKeydown);
        window.addEventListener('scroll', this.onScroll, { passive: true });
        loading["default"].start();
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.onDocumentKeydown);
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onDocumentKeydown(e) {
            if (e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA') {
                if (e.which == 84) { // t
                    this.$refs.timeline.focus();
                }
            }
        },
        inited() {
            loading["default"].done();
        },
    }
}));

// CONCATENATED MODULE: ./src/client/app/desktop/views/home/search.vue?vue&type=script&lang=ts&
 /* harmony default export */ var home_searchvue_type_script_lang_ts_ = (searchvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true&
var searchvue_type_style_index_0_id_32ceda2b_lang_stylus_scoped_true_ = __webpack_require__("./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/desktop/views/home/search.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  home_searchvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "32ceda2b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/desktop/views/home/search.vue"
/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_search_vue_vue_type_style_index_0_id_32ceda2b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--1-oneOf-1-2!../../../../../../node_modules/stylus-loader!../../../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../../../node_modules/vue-svg-inline-loader/dist/index.min.js!./search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/desktop/views/home/search.vue?vue&type=style&index=0&id=32ceda2b&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_search_vue_vue_type_style_index_0_id_32ceda2b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_search_vue_vue_type_style_index_0_id_32ceda2b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_search_vue_vue_type_style_index_0_id_32ceda2b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_search_vue_vue_type_style_index_0_id_32ceda2b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_1_oneOf_1_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_dist_index_min_js_search_vue_vue_type_style_index_0_id_32ceda2b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=51.11.37.1.js.map