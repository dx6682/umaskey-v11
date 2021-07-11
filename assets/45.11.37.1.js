(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./src/client/app/common/views/components/activity.vue":
/*!*************************************************************************!*\
  !*** ./src/client/app/common/views/components/activity.vue + 4 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/apexcharts/dist/apexcharts.esm.js (<- Module uses injected variables (module)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue/dist/vue.runtime.esm.js (<- Module uses injected variables (global, setImmediate)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/activity.vue?vue&type=template&id=117c59cc&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("div", { ref: "chart" })])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/client/app/common/views/components/activity.vue?vue&type=template&id=117c59cc&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");

// EXTERNAL MODULE: ./node_modules/apexcharts/dist/apexcharts.esm.js
var apexcharts_esm = __webpack_require__("./node_modules/apexcharts/dist/apexcharts.esm.js");

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js!./src/client/app/common/views/components/activity.vue?vue&type=script&lang=ts&


/* harmony default export */ var activityvue_type_script_lang_ts_ = (vue_runtime_esm["default"].extend({
    props: {
        user: {
            type: Object,
            required: true
        },
        limit: {
            type: Number,
            required: false,
            default: 21
        }
    },
    data() {
        return {
            fetching: true,
            data: [],
            peak: null
        };
    },
    mounted() {
        this.$root.api('charts/user/notes', {
            userId: this.user.id,
            span: 'day',
            limit: this.limit
        }).then(stats => {
            const normal = [];
            const reply = [];
            const renote = [];
            const now = new Date();
            const y = now.getFullYear();
            const m = now.getMonth();
            const d = now.getDate();
            for (let i = 0; i < this.limit; i++) {
                const x = new Date(y, m, d - i);
                normal.push([
                    x,
                    stats.diffs.normal[i]
                ]);
                reply.push([
                    x,
                    stats.diffs.reply[i]
                ]);
                renote.push([
                    x,
                    stats.diffs.renote[i]
                ]);
            }
            const chart = new apexcharts_esm["default"](this.$refs.chart, {
                chart: {
                    type: 'bar',
                    stacked: true,
                    height: 100,
                    sparkline: {
                        enabled: true
                    },
                },
                plotOptions: {
                    bar: {
                        columnWidth: '80%'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                grid: {
                    clipMarkers: false,
                    padding: {
                        top: 0,
                        right: 8,
                        bottom: 0,
                        left: 8
                    }
                },
                tooltip: {
                    shared: true,
                    intersect: false
                },
                series: [{
                        name: 'Normal',
                        data: normal
                    }, {
                        name: 'Reply',
                        data: reply
                    }, {
                        name: 'Renote',
                        data: renote
                    }],
                xaxis: {
                    type: 'datetime',
                    crosshairs: {
                        width: 1,
                        opacity: 1
                    }
                }
            });
            chart.render();
        });
    }
}));

// CONCATENATED MODULE: ./src/client/app/common/views/components/activity.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_activityvue_type_script_lang_ts_ = (activityvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/client/app/common/views/components/activity.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  components_activityvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/client/app/common/views/components/activity.vue"
/* harmony default export */ var activity = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=45.11.37.1.js.map