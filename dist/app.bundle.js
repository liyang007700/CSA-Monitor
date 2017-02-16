/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.routes = undefined;\n\nvar _index = __webpack_require__(1);\n\nvar routes = [{\n\tpath: '/',\n\tcomponent: _index.componentIndex\n}]; /*jshint esversion: 6 */\nexports.routes = routes;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLmpzPzdhYWIiXSwibmFtZXMiOlsicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBLElBQU1BLFNBQVMsQ0FDZDtBQUNDQyxPQUFNLEdBRFA7QUFFQ0M7QUFGRCxDQURjLENBQWYsQyxDQUhBO1FBVVFGLE0sR0FBQUEsTSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge2NvbXBvbmVudEluZGV4fSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuXG5jb25zdCByb3V0ZXMgPSBbXG5cdHtcblx0XHRwYXRoOiAnLycsXG5cdFx0Y29tcG9uZW50OiBjb21wb25lbnRJbmRleFxuXHR9XG5dO1xuXG5leHBvcnQge3JvdXRlc307XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.componentIndex = undefined;\n\nvar _index = __webpack_require__(2);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar componentIndex = {\n\ttemplate: _index2.default\n}; /*jshint esversion: 6 */\nexports.componentIndex = componentIndex;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcz82YzY2Il0sIm5hbWVzIjpbImNvbXBvbmVudEluZGV4IiwidGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCO0FBQ3RCQztBQURzQixDQUF2QixDLENBSEE7UUFPUUQsYyxHQUFBQSxjIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZXMvaW5kZXguaHRtbCc7XG5cbmNvbnN0IGNvbXBvbmVudEluZGV4ID0ge1xuXHR0ZW1wbGF0ZTogdGVtcGxhdGVcbn07XG5cbmV4cG9ydCB7Y29tcG9uZW50SW5kZXh9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = \"<h2>首页测试</h2>\";\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2luZGV4Lmh0bWw/YTliNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj7pppbpobXmtYvor5U8L2gyPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9pbmRleC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _routes = __webpack_require__(0);\n\n//Vue.use(VueRouter);\n//Vue.config.debug = true;\n//Vue.config.delimiters = ['${', '}'];\n//Vue.config.devtools = true;\n\nvar router = new VueRouter({\n\troutes: _routes.routes\n}); /*jshint esversion: 6 */\n\nvar app = new Vue({\n\trouter: router\n}).$mount('#app');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsicm91dGVyIiwiVnVlUm91dGVyIiwicm91dGVzIiwiYXBwIiwiVnVlIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsSUFBSUMsU0FBSixDQUFjO0FBQzVCQztBQUQ0QixDQUFkLENBQWYsQyxDQVRBOztBQWFBLElBQU1DLE1BQU0sSUFBSUMsR0FBSixDQUFRO0FBQ25CSjtBQURtQixDQUFSLEVBRVRLLE1BRlMsQ0FFRixNQUZFLENBQVoiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qanNoaW50IGVzdmVyc2lvbjogNiAqL1xuXG5pbXBvcnQge3JvdXRlc30gZnJvbSAnLi9yb3V0ZXMnO1xuXG4vL1Z1ZS51c2UoVnVlUm91dGVyKTtcbi8vVnVlLmNvbmZpZy5kZWJ1ZyA9IHRydWU7XG4vL1Z1ZS5jb25maWcuZGVsaW1pdGVycyA9IFsnJHsnLCAnfSddO1xuLy9WdWUuY29uZmlnLmRldnRvb2xzID0gdHJ1ZTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG5cdHJvdXRlczogcm91dGVzXG59KTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG5cdHJvdXRlclxufSkuJG1vdW50KCcjYXBwJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);