(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/client/app/common/views/pages/following.vue":
/*!*********************************************************************!*\
  !*** ./src/client/app/common/views/pages/following.vue + 4 modules ***!
  \*********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/app/i18n.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./src/misc/acct/parse.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/pages/following.vue?vue&type=template&id=70d578ea&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "mk-user-list",
    {
      attrs: {
        pagination: _vm.pagination,
        extract: function(items) {
          return items.map(function(item) {
            return item.followee
          })
        }
      }
    },
    [_vm._v(_vm._s(_vm.$t("@.following")))]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/pages/following.vue?vue&type=template&id=70d578ea&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./src/misc/acct/parse.ts
var parse = __webpack_require__("./src/misc/acct/parse.ts");

// EXTERNAL MODULE: ./src/client/app/i18n.ts
var i18n = __webpack_require__("./src/client/app/i18n.ts");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/pages/following.vue?vue&type=script&lang=ts&



/* harmony default export */ var followingvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    i18n: Object(i18n["default"])(),
    data() {
        return {
            pagination: {
                endpoint: 'users/following',
                limit: 30,
                params: Object.assign({}, Object(parse["default"])(this.$route.params.user))
            },
        };
    },
}));

// CONCATENATED MODULE: ./src/client/app/common/views/pages/following.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_followingvue_type_script_lang_ts_ = (followingvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/pages/following.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  pages_followingvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/pages/following.vue"
/* harmony default export */ var following = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=21.11.37.1.js.map