/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*jshint esversion: 6 */
var TOOLTIP_DEFAULT_BACKGROUND_COLOR = '#1c1c1c';
var TOOLTIP_DEFAULT_POSITION = 'top';
var POSITION_FN = {
	top: positionTooltipToTop,
	left: positionTooltipToLeft,
	right: positionTooltipToRight,
	bottom: positionTooltipToBottom
};

Vue.directive('tooltip', function (el, binding) {
	var $body = document.querySelector('body');
	var $tooltip = null;

	el.addEventListener('mouseenter', function (e) {
		$tooltip = createTooltip($body, el, binding);
		$tooltip.style.opacity = 1;
	});

	el.addEventListener('mouseleave', function (e) {
		$tooltip.style.display = 'none';
		$tooltip.style.opacity = 0;
	});
});

function createTooltip($body, $el, binding) {
	var title = binding.value.title || '';
	var position = binding.value.position || TOOLTIP_DEFAULT_POSITION;

	var $tooltip = document.querySelector('.m-tooltip') || document.createElement('div');
	$tooltip.className = 'm-tooltip';

	$tooltip.innerHTML = '<span>' + title + '</span>';
	$tooltip.style.backgroundColor = TOOLTIP_DEFAULT_BACKGROUND_COLOR;
	$tooltip.style.display = 'initial';
	$body.appendChild($tooltip);

	POSITION_FN[position]($el, $tooltip, binding);

	return $tooltip;
}

function positionTooltipToTop($el, $tooltip, binding) {
	var $elPosition = $el.getBoundingClientRect();

	$tooltip.className = 'm-tooltip top';
	$tooltip.style.height = 'initial';
	$tooltip.style.lineHeight = 'initial';
	$tooltip.style.top = $elPosition.top - $tooltip.offsetHeight - 12 + 'px';
	$tooltip.style.left = $elPosition.left - 10 + 'px';
}

function positionTooltipToLeft($el, $tooltip, binding) {}

function positionTooltipToRight($el, $tooltip, binding) {
	var $elPosition = $el.getBoundingClientRect();

	$tooltip.className = 'm-tooltip right';
	$tooltip.style.height = $elPosition.height + 'px';
	$tooltip.style.lineHeight = $elPosition.height - 14 + 'px';
	$tooltip.style.top = $elPosition.top + 'px';
	$tooltip.style.left = $elPosition.left + 12 + $el.offsetWidth + 'px';
}

function positionTooltipToBottom($el, $tooltip, binding) {}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(50);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Dialog = undefined;

var _dialog = __webpack_require__(33);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = {}; /*jshint esversion: 6 */


Vue.component('m-dialog', {
	props: ['title', 'body'],
	template: _dialog2.default,
	data: function data() {
		return {
			showDialog: true
		};
	},
	methods: {
		close: function close() {
			this.$data.showDialog = false;
		}
	},
	created: function created() {},
	mounted: function mounted() {
		var _this = this;

		Dialog.show = function () {
			_this.$data.showDialog = true;
		};

		Dialog.hide = function () {
			_this.$data.showDialog = false;
		};
	}
});

exports.Dialog = Dialog;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c7cfda172520e13ef7c17d8be2624a69.eot";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _footer = __webpack_require__(39);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.component('app-footer', {
	template: _footer2.default,
	data: function data() {
		return {};
	},
	methods: {},
	created: function created() {},
	mounted: function mounted() {}
}); /*jshint esversion: 6 */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _header = __webpack_require__(40);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.component('app-header', {
	template: _header2.default,
	data: function data() {
		return {
			currentNav: 'DASHBOARD'
		};
	},
	methods: {},
	created: function created() {},
	mounted: function mounted() {}
}); /*jshint esversion: 6 */

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _leftNav = __webpack_require__(41);

var _leftNav2 = _interopRequireDefault(_leftNav);

var _tooltip = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */
Vue.component('app-left-nav', {
	template: _leftNav2.default,
	data: function data() {
		return {};
	},
	methods: {},
	created: function created() {},
	mounted: function mounted() {}
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.routes = undefined;

var _index = __webpack_require__(19);

var _calendar = __webpack_require__(16);

var _metrics = __webpack_require__(24);

var _logs = __webpack_require__(23);

var _events = __webpack_require__(18);

var _settings = __webpack_require__(25);

var _tests = __webpack_require__(26);

var routes = [{
	path: '/index',
	component: _index.componentIndex
}, {
	path: '/calendar',
	component: _calendar.componentCalendar
}, {
	path: '/metrics',
	component: _metrics.componentMetrics
}, {
	path: '/logs',
	component: _logs.componentLogs
}, {
	path: '/events',
	component: _events.componentEvents
}, {
	path: '/settings',
	component: _settings.componentSettings
}, {
	path: '/tests',
	component: _tests.componentTests
}, {
	path: '/',
	redirect: '/index'
}]; /*jshint esversion: 6 */
exports.routes = routes;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = " <div id=m-app class=pure-g> <div id=m-header-wrapper class=pure-u-1-1> <div id=m-header> <app-header></app-header> </div> </div> <div id=m-left-nav class=pure-u> <app-left-nav></app-left-nav> </div> <div id=m-main-wrapper class=pure-u-1-1> <div id=m-main v-bind:class=mMainClass> <router-view></router-view> </div> </div> <div id=m-footer-wrapper class=pure-u-1-1> <div id=m-footer> <app-footer></app-footer> </div> </div> </div> ";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./bootstrap.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./bootstrap.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./pikaday.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./pikaday.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./pure-min.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./pure-min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/index.js!./app.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/index.js!./app.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(14);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(6);

var _app = __webpack_require__(10);

var _app2 = _interopRequireDefault(_app);

var _routes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new VueRouter({
	routes: _routes.routes
}); /*jshint esversion: 6 */

// import child components


var vm = new Vue({
	components: {
		'app': {
			template: _app2.default,
			data: function data() {
				return {
					mMainClass: 'm-' + this.$route.path.substring(1)
				};
			},
			methods: {},
			beforeUpdate: function beforeUpdate() {
				this.$data.mMainClass = 'm-' + this.$route.path.substring(1);
			}
		}
	},
	data: {},
	router: router
}).$mount('app');

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.componentCalendar = undefined;

var _calendar = __webpack_require__(36);

var _calendar2 = _interopRequireDefault(_calendar);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import '../components/calendar/calendarWeekEvent';

/*jshint esversion: 6 */
var componentCalendar = {
	template: _calendar2.default,
	data: function data() {
		return {
			weekDay: "weekDay",
			month: "March 2017",
			agenda: [{
				"date": "2017-02-27T00:00",
				events: [{
					"text": "CSA RoadShow HK",
					"type": "demo",
					"style": {
						"top": "280px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-02-28T00:00",
				events: [{
					"text": "Page Manager quick fix",
					"type": "release",
					"style": {
						"top": "440px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-03-01T00:00",
				events: [{
					"text": "CSA RoadShow Beijing",
					"type": "demo",
					"style": {
						"top": "360px",
						"height": "80px"
					}
				}, {
					"text": "SSO outage",
					"type": "unplanned",
					"style": {
						"top": "520px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-03-02T00:00",
				events: [{
					"text": "investor relationship",
					"type": "demo",
					"style": {
						"top": "280px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-03-03T00:00",
				events: [{
					"text": "Framework Release",
					"type": "planned",
					"style": {
						"top": "280px",
						"height": "80px"
					}
				}, {
					"text": "Learning Hub Release",
					"type": "release",
					"style": {
						"top": "360px",
						"height": "80px"
					}
				}, {
					"text": "OneScore Release",
					"type": "release",
					"style": {
						"top": "440px",
						"height": "80px"
					}
				}]
			}, {
				"date": "2017-03-04T00:00",
				events: []
			}, {
				"date": "2017-03-05T00:00",
				events: [{
					"text": "DB2 Data backup",
					"type": "other",
					"style": {
						"top": "200px",
						"height": "240px"
					}
				}]
			}]
		};
	},
	methods: {},
	created: function created() {},
	mounted: function mounted() {},
	destroyed: function destroyed() {},
	components: {}
};

exports.componentCalendar = componentCalendar;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _weekDay = __webpack_require__(38);

var _weekDay2 = _interopRequireDefault(_weekDay);

var _inputDialog = __webpack_require__(37);

var _inputDialog2 = _interopRequireDefault(_inputDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
import {
    Dialog
}
from '../../plugins/dialog';*/

/*jshint esversion: 6 */
Vue.component("week-day", {
    props: ["item"],
    template: _weekDay2.default,
    data: function data() {
        return {
            options: [// dialog options
            {
                text: "Planned outage",
                value: "planned"
            }, {
                text: "Unplanned outage",
                value: "unplanned"
            }, {
                text: "Module release, not all outage",
                value: "release"
            }, {
                text: "Demo",
                value: "demo"
            }, {
                text: "Other activities",
                value: "other"
            }],

            ifShowDialog: false,
            ifShowShadowBlock: false,
            Dialog: "m-dialog", //local component name
            title: "", //dialog title variable
            message: "", //dialog v-model variable
            selected: "", // dialog option selected value
            duration: "",

            isMouseDown: false,
            mouseDownY: 0,
            isMouseUp: true,
            mouseUpY: 0,
            mousemoveY: 0,
            styleShadowBlock: {},
            styleDialog: {},
            styleEvent: {},
            subjects: this.item.events

        };
    },
    methods: {
        setDialogPos: function setDialogPos(e, _this) {

            var screenWidth = window.screen.width;
            var screenHeight = window.screen.height;
            if (e.screenX < screenWidth / 2 && e.screenY < screenHeight / 2) {
                _this.$data.styleDialog.left = "0px";
                _this.$data.styleDialog.top = Math.floor(e.layerY / 40) * 40 + 85 + "px";
            } else if (e.screenX > screenWidth / 2 && e.screenY < screenHeight / 2) {
                // right top region of screen
                _this.$data.styleDialog.right = "0px";
                _this.$data.styleDialog.top = Math.floor(e.layerY / 40) * 40 + 85 + "px";
            } else if (e.screenX < screenWidth / 2 && e.screenY > screenHeight / 2) {
                // left bottom region of screen
                _this.$data.styleDialog.left = "0px";
                _this.$data.styleDialog.top = Math.floor(e.layerY / 40) * 40 - 150 + "px";
            } else {
                _this.$data.styleDialog.right = "0px";
                _this.$data.styleDialog.top = Math.floor(e.layerY / 40) * 40 - 150 + "px";
            }
        },
        showShadowBlock: function showShadowBlock(e, _this) {
            _this.$data.styleShadowBlock.top = Math.floor(e.layerY / 40) * 40 + "px";
            _this.$data.ifShowShadowBlock = true;
            _this.$data.styleEvent.top = Math.floor(e.layerY / 40) * 40 + "px";
        },
        computeDate: function computeDate(e, _this) {
            var _todayLocal = new Date(Date.parse(_this.item.date));
            var timezoneoffsetMin = _todayLocal.getTimezoneOffset();
            var _todayStr = new Date(Date.parse(_this.item.date) + timezoneoffsetMin * 60000).toString().substring(0, 15);
            var _localTimeStrTop = new Date(Date.parse(_this.item.date) + (Math.floor(e.layerY / 40) - 1) * 1800000 + timezoneoffsetMin * 60000).toLocaleTimeString();
            /*
            let _localTimeStrEnd = new Date(Date.parse(_this.item.date) +
                (Math.floor(
                    e.layerY / 40) + 1) * 1800000 +
                timezoneoffsetMin * 60000).toLocaleTimeString();*/

            var _formattedLocalTimeStrTop = '';
            //let _formattedLocalTimeStrEnd = '';
            if (_localTimeStrTop.match('上午')) {
                _formattedLocalTimeStrTop = _localTimeStrTop.substring(2) + " AM";
            } else if (_localTimeStrTop.match('下午')) {
                _formattedLocalTimeStrTop = _localTimeStrTop.substring(2) + " PM";
            }
            /*
            if (_localTimeStrEnd.match('上午')) {
                _formattedLocalTimeStrEnd = _localTimeStrEnd.substring(
                    2) + " AM";
            } else if (_localTimeStrEnd.match('下午')) {
                _formattedLocalTimeStrEnd = _localTimeStrEnd.substring(
                    2) + " PM";
            }*/
            _this.title = _todayStr + "  Start-Time:  " + _formattedLocalTimeStrTop;
        },
        showDialog: function showDialog(_this) {
            _this.ifShowDialog = true;
        },
        mousemove: function mousemove(evt) {
            /*
            if (this.isMouseDown === true) {
                this.$data.ifShowShadowBlock = true;
                if (evt.layerY < this.mouseDownY) {
                    this.$data.styleShadowBlock.top = Math.floor(
                            this.mouseDownY / 40) * 40 + evt.layerY -
                        this.mouseDownY + "px";
                    this.$data.styleShadowBlock.height = this.mouseDownY -
                        evt.layerY + "px";
                    console.log("evt.layerY: " + evt.layerY);
                    console.log("mouseDownY: " + this.mouseDownY);
                    console.log(this.$data.styleShadowBlock.height);
                    console.log("up");
                } else {
                    this.$data.styleShadowBlock.top = Math.floor(
                        this.mouseDownY / 40) * 40 + "px";
                    this.$data.styleShadowBlock.height = evt.layerY -
                        Math.floor(this.mouseDownY / 40) * 40 +
                        "px";
                    console.log("evt.layerY: " + evt.layerY);
                    console.log("mouseDownY: " + this.mouseDownY);
                    console.log(this.$data.styleShadowBlock.height);
                    console.log("down");
                }
            }*/
        },
        mouseDown: function mouseDown(evt) {
            /*
            this.isMouseDown = true;
            this.mouseDownY = evt.layerY;*/
        },
        mouseUp: function mouseUp(evt) {
            /*
            this.isMouseDown = false;
            let _this = this;
            // single click event
              if (evt.layerY === this.mouseDownY) {
                this.setDialogPos(evt, _this);
                  this.$data.styleShadowBlock.top = Math.floor(evt.layerY /
                    40) * 40 + "px";
                this.$data.ifShowShadowBlock = true;
                  let _todayLocal = new Date(Date.parse(this.item.date));
                let timezoneoffsetMin = _todayLocal.getTimezoneOffset();
                let _todayStr = new Date(Date.parse(this.item.date) +
                    timezoneoffsetMin *
                    60000).toString().substring(0, 15);
                let _localTimeStrTop = new Date(Date.parse(this.item
                        .date) +
                    (Math.floor(
                        evt.layerY / 40) - 1) * 1800000 +
                    timezoneoffsetMin * 60000).toLocaleTimeString();
                let _localTimeStrEnd = new Date(Date.parse(this.item
                        .date) +
                    (Math.floor(
                        evt.layerY / 40) + 1) * 1800000 +
                    timezoneoffsetMin * 60000).toLocaleTimeString();
                let _formattedLocalTimeStrTop = '';
                let _formattedLocalTimeStrEnd = '';
                if (_localTimeStrTop.match('上午')) {
                    _formattedLocalTimeStrTop = _localTimeStrTop.substring(
                        2) + " AM";
                } else if (_localTimeStrTop.match('下午')) {
                    _formattedLocalTimeStrTop = _localTimeStrTop.substring(
                        2) + " PM";
                }
                if (_localTimeStrEnd.match('上午')) {
                    _formattedLocalTimeStrEnd = _localTimeStrEnd.substring(
                        2) + " AM";
                } else if (_localTimeStrEnd.match('下午')) {
                    _formattedLocalTimeStrEnd = _localTimeStrEnd.substring(
                        2) + " PM";
                }
                this.title = _todayStr + "  " +
                    _formattedLocalTimeStrTop +
                    " - " +
                    _formattedLocalTimeStrEnd;
                this.ifShowDialog = true;
            } else {
                //
                //this.setDialogPos(evt, _this);
                //this.computeDate(evt, _this);
            }*/

            //this.ismousemove = false;
            //clearInterval(this.isMouseUp(), 100);
            /*
            if (evt.screenY === this.mouseDownY) {
                this.showEvtDialog(evt);
            }*/
        },
        mouseClick: function mouseClick(evt) {
            this.showEvtDialog(evt);
        },
        showEvtDialog: function showEvtDialog(evt) {
            var _this = this;
            /******************compute dialog position**********************/
            this.setDialogPos(evt, _this);
            this.showShadowBlock(evt, _this);
            this.computeDate(evt, _this);
            this.showDialog(_this);
        },
        storeEvent: function storeEvent(message, selected, duration) {
            this.styleEvent.height = Math.floor(duration * 80 / 40) * 40 + "px";
            this.subjects.push({
                text: message,
                type: selected,
                style: this.styleEvent
            });
        },
        clearDialog: function clearDialog() {
            this.$data.ifShowShadowBlock = false;
            this.$data.ifShowDialog = false;
        }
    },
    mounted: function mounted() {},
    components: {
        "m-block": {
            props: ["showBlock"],
            template: "<div v-if=\"showBlock\" class=\"shadowBlock\"></div>",
            data: function data() {
                return {};
            }
        },
        "m-dialog": {
            props: ["title", "ifShowDialog", "styleDialog", "options"],
            template: _inputDialog2.default,
            data: function data() {
                return {
                    message: "",
                    selected: "",
                    duration: null
                };
            },
            methods: {
                close: function close() {
                    this.$emit('clear');
                },
                submitEvent: function submitEvent() {
                    this.$emit('clear');
                    this.$emit('submit', this.message, this.selected, this.duration);
                }
            },
            created: function created() {},
            mounted: function mounted() {}
        },
        "m-events": {
            props: ["item"],
            template: "<div class=\"eventBlock\" :class=\"item.type\" :style=\"item.style\">{{ item.text }}</div>"
        }
    }
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.componentEvents = undefined;

var _events = __webpack_require__(42);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentEvents = {
	template: _events2.default,
	data: function data() {
		return {
			alertingImageUrl: 'images/demo-events.png'
		};
	},
	methods: {},
	created: function created() {},
	mounted: function mounted() {}
}; /*jshint esversion: 6 */
exports.componentEvents = componentEvents;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.componentIndex = undefined;

var _index = __webpack_require__(43);

var _index2 = _interopRequireDefault(_index);

var _services = __webpack_require__(28);

var _indexWidget = __webpack_require__(22);

var _tooltip = __webpack_require__(0);

var _echartConfig = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// hover info widget

// async data request api based on vue-source
var componentIndex = {
	template: _index2.default,
	data: function data() {
		return {
			// fake data for "Current Monitoring Service"
			events: [{
				url: "https://csa.dst.ibm.com/sales/console/DM",
				startTime: "2017-02-26T00:33:07",
				courses: [{
					name: "HTTP",
					time: "2017-02-26T00:33:09",
					duration: 2
				}, {
					name: "Was",
					time: "2017-02-26T00:34:15",
					duration: 36
				}, {
					name: "DB2",
					time: "2017-02-26T00:34:45",
					duration: 30
				}, {
					name: "Was",
					time: "2017-02-26T00:35:35",
					duration: 80
				}, {
					name: "HTTP",
					time: "2017-02-26T00:35:40",
					duration: 5
				}],
				totalTime: 153,
				count: [{
					name: "HTTP",
					time: 2
				}, {
					name: "Was(Before DB2)",
					time: 36
				}, {
					name: "DB2",
					time: 30
				}, {
					name: "Was(After DB2)",
					time: 80
				}, {
					name: "HTTP",
					time: 30
				}]
			}, {
				url: "https://csa.dst.ibm.com/sales/console/PR",
				startTime: "2017-02-26T00:33:15",
				courses: [{
					name: "HTTP",
					time: "2017-02-26T00:33:28",
					duration: 13
				}, {
					name: "Cloudant",
					time: "2017-02-26T00:35:05",
					duration: 97
				}, {
					name: "HTTP",
					time: "2017-02-26T00:35:09",
					duration: 4
				}],
				totalTime: 114,
				count: [{
					name: "HTTP",
					time: 13
				}, {
					name: "Cloudant",
					time: 97
				}, {
					name: "HTTP",
					time: 4
				}]
			}, {
				url: "https://csa.dst.ibm.com/sales/console/OneScore",
				startTime: "2017-02-26T00:33:29",
				courses: [{
					name: "HTTP",
					time: "2017-02-26T00:33:32",
					duration: 3
				}, {
					name: "Was",
					time: "2017-02-26T00:33:44",
					duration: 12
				}, {
					name: "DB2",
					time: "2017-02-26T00:35:04",
					duration: 80
				}, {
					name: "Was",
					time: "2017-02-26T00:35:20",
					duration: 16
				}, {
					name: "HTTP",
					time: "2017-02-26T00:35:28",
					duration: 8
				}],
				totalTime: 119,
				count: [{
					name: "HTTP",
					time: 3
				}, {
					name: "Was(Before DB2)",
					time: 12
				}, {
					name: "DB2",
					time: 80
				}, {
					name: "Was(After DB2)",
					time: 16
				}, {
					name: "HTTP",
					time: 8
				}]
			}],
			// "Current Monitoring Service" widght timeline
			timeLine: ["2017-02-26T00:33:00", "2017-02-26T00:34:00", "2017-02-26T00:35:00", "2017-02-26T00:36:00"],
			// default hide chart date selection
			ifShowDateSelection: false,
			// default hide chart date selection button "custom"
			ifShowCustom: false,
			// chart date select form v-model data
			selectInput: {
				today: null, // data object of today
				startDate: "",
				startHour: 0,
				startMinute: 0,
				endDate: "",
				endHour: 0,
				endMinute: 0
			},
			// auto refresh UI class object
			classObjectAuto: {
				'switchOff': true,
				'switchOn': false
			},
			// button UI class object
			oneHourObject: {
				"clicked": true
			},
			oneDayObject: {
				"clicked": false
			},
			sevenDayObject: {
				"clicked": false
			},
			monthClassObject: {
				"clicked": false
			},
			echartData: null
		};
	},
	methods: {
		// default chart data 1 hour
		renderChart: function renderChart(dom, data) {
			var container = document.getElementById(dom);
			var chart = echarts.init(container);
			_echartConfig.echartConfig.oldVersion.xAxis[0].data = data.timepoint;
			_echartConfig.echartConfig.oldVersion.series[0].data = data.Count_RC2;
			_echartConfig.echartConfig.oldVersion.series[1].data = data.Count_RC3;
			_echartConfig.echartConfig.oldVersion.series[2].data = data.Count_RC4;
			_echartConfig.echartConfig.oldVersion.series[3].data = data.Count_RC5;
			_echartConfig.echartConfig.oldVersion.series[4].data = data.AverageElapsed_less5s;
			_echartConfig.echartConfig.oldVersion.series[5].data = data.AverageElapsed_All;
			_echartConfig.echartConfig.oldVersion.series[6].data = data.AverageElapsed_over5s;
			chart.setOption(_echartConfig.echartConfig.oldVersion);
		},
		renderChartNew: function renderChartNew(dom, timepoint, elapse, Count_2XX, Count_3XX, Count_4XX, Count_5XX) {
			var container = document.getElementById(dom);
			console.log(container);

			var chart = echarts.init(container);
			_echartConfig.echartConfig.newVersion.xAxis[0].data = timepoint;
			_echartConfig.echartConfig.newVersion.series[0].data = Count_2XX;
			_echartConfig.echartConfig.newVersion.series[1].data = Count_3XX;
			_echartConfig.echartConfig.newVersion.series[2].data = Count_4XX;
			_echartConfig.echartConfig.newVersion.series[3].data = Count_5XX;
			_echartConfig.echartConfig.newVersion.series[4].data = elapse;
			chart.setOption(_echartConfig.echartConfig.newVersion);
		},
		/*
  		initChart: function() {
  			//var dash1 = document.getElementById('Dash1');
  			//var chart1 = echarts.init(dash1);
  			//var dash2 = document.getElementById('Dash2');
  			//var chart2 = echarts.init(dash2);
  			var dash3 = document.getElementById('Dash3');
  			var chart3 = echarts.init(dash3);
  			//chart1.group = 'group1';
  			//chart2.group = 'group1';
  			//echarts.connect('group1');
  			echartConfig.ReqAndRes.xAxis[0].data = oneHour.timepoint;
  			echartConfig.ReqAndRes.series[0].data = oneHour.Count_RC2;
  			echartConfig.ReqAndRes.series[1].data = oneHour.Count_RC3;
  			echartConfig.ReqAndRes.series[2].data = oneHour.Count_RC4;
  			echartConfig.ReqAndRes.series[3].data = oneHour.Count_RC5;
  			echartConfig.ReqAndRes.series[4].data = oneHour.AverageElapsed_less5s;
  			echartConfig.ReqAndRes.series[5].data = oneHour.AverageElapsed_All;
  			echartConfig.ReqAndRes.series[6].data = oneHour.AverageElapsed_over5s;
  			//chart1.setOption(echartConfig.Request);
  			//chart2.setOption(echartConfig.Response);
  			chart3.setOption(echartConfig.ReqAndRes);
  		},*/
		oneHourRender: function oneHourRender() {
			_echartConfig.echartConfig.ReqAndRes.dataZoom[0].end = 100;
			_echartConfig.echartConfig.ReqAndRes.dataZoom[1].end = 100;
			var _this = this;
			var data = {
				"Count_RC4": [0, 4, 5, 0, 2, 11, 11, 6, 11, 5, 16, 28, 11, 11, 8, 7, 23, 10, 16, 18, 40, 21, 34, 25, 21, 27, 32, 24, 23, 22, 23, 21, 16, 14, 12, 15, 25, 15, 23, 8, 29, 10, 11, 7, 21, 28, 30, 25, 32, 38, 43, 42, 42, 44, 68, 36, 39, 37, 37, 20],
				"Count_RC5": [0, 6, 2, 2, 0, 3, 4, 4, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 3],
				"Count_OverThreshold": [122, 152, 150, 127, 147, 92, 70, 68, 42, 56, 57, 43, 48, 41, 70, 30, 73, 64, 51, 27, 36, 28, 42, 73, 387, 239, 103, 93, 107, 77, 56, 66, 83, 82, 60, 61, 42, 111, 81, 150, 182, 28, 21, 53, 100, 14, 20, 34, 13, 49, 28, 25, 57, 51, 66, 69, 30, 62, 29, 67],
				"AverageElapsed_All": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 1087, 2281],
				"AverageElapsed_less5s": [1112, 1807, 5146, 1239, 1082, 2589, 1059, 1309, 1796, 3496, 1587, 3030, 5265, 1533, 1764, 1617, 2005, 4002, 1392, 1093, 1790, 1777, 1812, 1474, 1075, 1671, 1281, 1134, 1189, 1354, 1196, 1298, 1257, 1390, 1142, 1152, 1984, 1504, 1345, 979, 1719, 1158, 990, 996, 1346, 1334, 1599, 1393, 1832, 1263, 1069, 1452, 1462, 1250, 1244, 1242, 1029, 1478, 2737, 1764],
				"Count_RC2": [2522, 2071, 2828, 3062, 1691, 1931, 1307, 1790, 1514, 1703, 1289, 1657, 1460, 1641, 2623, 2556, 2798, 2265, 2035, 1815, 1208, 1051, 1311, 1283, 1410, 3316, 4579, 4740, 5428, 4886, 1961, 1268, 2199, 4598, 4741, 2936, 1825, 1588, 1708, 2776, 4981, 5034, 4858, 4791, 4068, 4641, 5369, 4852, 2622, 2799, 3530, 4792, 4763, 4060, 4163, 2886, 2231, 2758, 1486, 1708],
				"AverageElapsed_over5s": [7476, 6615, 6937, 7903, 6979, 7574, 7336, 8113, 6664, 6720, 11578, 8778, 7847, 5712, 10031, 6755, 5775, 5810, 7854, 7784, 9331, 8127, 10689, 7371, 6237, 8470, 8533, 7294, 7259, 7245, 6006, 8624, 6489, 10542, 30023, 7231, 6314, 15106, 6181, 7637, 10479, 20398, 9261, 17675, 30716, 8946, 10290, 17640, 9436, 11697, 23345, 8120, 6377, 10444, 10367, 10570, 8603, 6272, 9751, 15967],
				"timepoint": ["2017-03-29 00:01:00", "2017-03-29 00:02:00", "2017-03-29 00:03:00", "2017-03-29 00:04:00", "2017-03-29 00:05:00", "2017-03-29 00:06:00", "2017-03-29 00:07:00", "2017-03-29 00:08:00", "2017-03-29 00:09:00", "2017-03-29 00:10:00", "2017-03-29 00:11:00", "2017-03-29 00:12:00", "2017-03-29 00:13:00", "2017-03-29 00:14:00", "2017-03-29 00:15:00", "2017-03-29 00:16:00", "2017-03-29 00:17:00", "2017-03-29 00:18:00", "2017-03-29 00:19:00", "2017-03-29 00:20:00", "2017-03-29 00:21:00", "2017-03-29 00:22:00", "2017-03-29 00:23:00", "2017-03-29 00:24:00", "2017-03-29 00:25:00", "2017-03-29 00:26:00", "2017-03-29 00:27:00", "2017-03-29 00:28:00", "2017-03-29 00:29:00", "2017-03-29 00:30:00", "2017-03-29 00:31:00", "2017-03-29 00:32:00", "2017-03-29 00:33:00", "2017-03-29 00:34:00", "2017-03-29 00:35:00", "2017-03-29 00:36:00", "2017-03-29 00:37:00", "2017-03-29 00:38:00", "2017-03-29 00:39:00", "2017-03-29 00:40:00", "2017-03-29 00:41:00", "2017-03-29 00:42:00", "2017-03-29 00:43:00", "2017-03-29 00:44:00", "2017-03-29 00:45:00", "2017-03-29 00:46:00", "2017-03-29 00:47:00", "2017-03-29 00:48:00", "2017-03-29 00:49:00", "2017-03-29 00:50:00", "2017-03-29 00:51:00", "2017-03-29 00:52:00", "2017-03-29 00:53:00", "2017-03-29 00:54:00", "2017-03-29 00:55:00", "2017-03-29 00:56:00", "2017-03-29 00:57:00", "2017-03-29 00:58:00", "2017-03-29 00:59:00", "2017-03-29 01:00:00"],
				"Count_RC3": [1, 6, 8, 1, 3, 16, 17, 9, 17, 8, 24, 41, 17, 17, 12, 11, 33, 15, 23, 26, 58, 31, 49, 36, 30, 39, 47, 35, 33, 32, 34, 31, 23, 21, 18, 22, 37, 22, 34, 12, 42, 15, 16, 11, 31, 41, 44, 36, 46, 55, 62, 61, 61, 63, 98, 52, 57, 54, 54, 45]
			};
			_this.renderChart("Dash3", data);
			/*
   services.getOneHour(function(data) {
   	_this.renderChart("Dash3", data);
   }, function() {
   	console.log("fail");
   });*/
			this.oneHourObject.clicked = true;
			this.oneDayObject.clicked = false;
			this.sevenDayObject.clicked = false;
			this.monthClassObject.clicked = false;
		},
		oneDayRender: function oneDayRender() {
			_echartConfig.echartConfig.ReqAndRes.dataZoom[0].end = 100;
			_echartConfig.echartConfig.ReqAndRes.dataZoom[1].end = 100;
			var _this = this;
			var data = {
				"Count_RC4": [15, 7, 10, 14, 17, 4, 7, 1, 6, 1, 4, 7, 18, 0, 13, 9, 19, 12, 19, 20, 14, 10, 3, 18, 8, 19, 10, 14, 20, 10, 9, 17, 9, 19, 10, 19, 14, 2, 12, 6, 0, 16, 0, 16, 20, 0, 2, 4, 14, 19, 8, 10, 14, 12, 9, 14, 19, 1, 2, 14, 16, 19, 19, 16, 17, 14, 6, 3, 3, 7, 16, 8, 9, 8, 14, 13, 0, 15, 14, 18, 2, 3, 8, 14, 0, 0, 15, 8, 15, 12, 6, 8, 18, 9, 19, 15],
				"Count_RC5": [2, 6, 0, 0, 0, 1, 2, 5, 0, 5, 8, 0, 0, 2, 2, 1, 2, 9, 0, 9, 4, 5, 6, 1, 10, 4, 7, 9, 10, 3, 1, 3, 4, 8, 10, 5, 10, 10, 8, 2, 6, 5, 5, 4, 3, 0, 8, 8, 9, 7, 8, 4, 3, 10, 2, 2, 6, 6, 7, 2, 1, 0, 1, 7, 6, 7, 1, 6, 9, 9, 5, 6, 2, 6, 1, 0, 1, 10, 10, 5, 8, 4, 5, 4, 7, 1, 0, 4, 5, 2, 6, 5, 10, 7, 5, 10],
				"Count_OverThreshold": [74, 74, 66, 32, 60, 24, 77, 21, 86, 64, 86, 30, 21, 28, 20, 62, 63, 38, 28, 26, 77, 85, 50, 66, 54, 35, 71, 40, 67, 56, 21, 40, 71, 55, 27, 83, 80, 21, 83, 36, 26, 43, 39, 39, 22, 50, 30, 78, 76, 63, 82, 26, 57, 81, 60, 39, 83, 37, 84, 25, 35, 64, 53, 31, 39, 27, 85, 57, 87, 75, 75, 27, 81, 67, 59, 55, 72, 33, 80, 31, 39, 80, 72, 42, 27, 36, 90, 83, 87, 37, 27, 34, 60, 72, 76, 67],
				"AverageElapsed_All": [1950, 2395, 2096, 1559, 1510, 2474, 2324, 1462, 2088, 1821, 1331, 2332, 2387, 2457, 1926, 2173, 2125, 1764, 1404, 1307, 1410, 2131, 2285, 1432, 2100, 1481, 2209, 1834, 2429, 2367, 2445, 1571, 2092, 2188, 1785, 2229, 1543, 2010, 1411, 1669, 2184, 2053, 1775, 2252, 1977, 2372, 1697, 2280, 1716, 2050, 2173, 1674, 2222, 2197, 1325, 2162, 1759, 2178, 1537, 2054, 1801, 1863, 1512, 2118, 2429, 1816, 2127, 2058, 1640, 1952, 1383, 1506, 2191, 1780, 1811, 1937, 1368, 1512, 1393, 2009, 1895, 2090, 1810, 2168, 2171, 2063, 2242, 2050, 2119, 2189, 1929, 2393, 1380, 1810, 1453, 2286],
				"AverageElapsed_less5s": [3525, 3871, 4105, 3673, 4853, 3746, 3439, 3489, 1905, 1971, 1311, 3850, 4546, 3755, 4247, 2963, 4277, 3508, 2169, 4933, 1784, 4859, 2851, 4595, 1389, 3725, 1861, 3809, 4710, 3587, 3642, 4913, 2789, 3982, 3715, 2503, 2456, 3761, 1313, 2382, 1979, 1837, 3033, 1820, 1858, 1223, 4758, 3897, 4647, 2043, 4357, 2103, 3228, 2918, 1513, 1514, 4367, 1852, 4436, 4413, 3172, 3285, 3365, 2671, 2794, 4396, 3044, 4317, 3973, 3625, 2482, 4820, 4196, 2527, 4307, 3820, 1751, 1427, 3704, 3642, 1978, 2554, 3419, 4500, 1271, 4009, 1820, 2048, 1944, 2660, 3581, 3642, 1714, 3695, 4287, 1275],
				"Count_RC2": [4523, 3607, 3064, 3006, 3020, 2860, 4929, 4669, 4152, 3100, 4797, 4503, 3931, 3366, 4468, 4771, 3672, 4165, 4217, 3902, 3325, 3998, 4181, 3668, 3005, 2850, 4988, 4212, 3323, 4383, 4403, 4989, 4556, 4201, 4159, 4589, 3362, 4388, 4372, 4382, 4147, 4606, 3996, 3696, 3856, 2986, 3324, 4625, 2810, 4520, 4601, 2994, 3490, 4282, 2553, 4268, 3596, 4569, 4817, 4595, 3963, 3407, 3547, 4186, 3310, 4141, 3867, 4481, 3239, 3508, 2999, 4774, 3134, 2924, 4773, 2907, 3914, 3401, 3728, 3385, 4613, 3088, 4079, 4211, 3879, 3044, 4281, 3968, 4042, 4184, 4895, 3635, 4584, 4758, 4530, 3812],
				"AverageElapsed_over5s": [10551, 5384, 8165, 6866, 8755, 11264, 12207, 9674, 7968, 6639, 8990, 11340, 7955, 6704, 5642, 7565, 5816, 10337, 12277, 5234, 7279, 7438, 12160, 12237, 8177, 10427, 6574, 7321, 5667, 9920, 11447, 8946, 10949, 7704, 5620, 11699, 5895, 8775, 5504, 9159, 11443, 9483, 7582, 7735, 5434, 9442, 8767, 11117, 9920, 10585, 7382, 7868, 6783, 8582, 8794, 10907, 8334, 11575, 8700, 7037, 9044, 7830, 8369, 8902, 6995, 10570, 5450, 9011, 12493, 7983, 10988, 10108, 6057, 5876, 7181, 6887, 8334, 6138, 5547, 12050, 8646, 7223, 10759, 5293, 6799, 5335, 11334, 11576, 11900, 9531, 10498, 12059, 7310, 10119, 8768, 6188],
				"timepoint": ["2017-03-29 00:15:00", "2017-03-29 00:30:00", "2017-03-29 00:45:00", "2017-03-29 01:00:00", "2017-03-29 01:15:00", "2017-03-29 01:30:00", "2017-03-29 01:45:00", "2017-03-29 02:00:00", "2017-03-29 02:15:00", "2017-03-29 02:30:00", "2017-03-29 02:45:00", "2017-03-29 03:00:00", "2017-03-29 03:15:00", "2017-03-29 03:30:00", "2017-03-29 03:45:00", "2017-03-29 04:00:00", "2017-03-29 04:15:00", "2017-03-29 04:30:00", "2017-03-29 04:45:00", "2017-03-29 05:00:00", "2017-03-29 05:15:00", "2017-03-29 05:30:00", "2017-03-29 05:45:00", "2017-03-29 06:00:00", "2017-03-29 06:15:00", "2017-03-29 06:30:00", "2017-03-29 06:45:00", "2017-03-29 07:00:00", "2017-03-29 07:15:00", "2017-03-29 07:30:00", "2017-03-29 07:45:00", "2017-03-29 08:00:00", "2017-03-29 08:15:00", "2017-03-29 08:30:00", "2017-03-29 08:45:00", "2017-03-29 09:00:00", "2017-03-29 09:15:00", "2017-03-29 09:30:00", "2017-03-29 09:45:00", "2017-03-29 10:00:00", "2017-03-29 10:15:00", "2017-03-29 10:30:00", "2017-03-29 10:45:00", "2017-03-29 11:00:00", "2017-03-29 11:15:00", "2017-03-29 11:30:00", "2017-03-29 11:45:00", "2017-03-29 12:00:00", "2017-03-29 12:15:00", "2017-03-29 12:30:00", "2017-03-29 12:45:00", "2017-03-29 13:00:00", "2017-03-29 13:15:00", "2017-03-29 13:30:00", "2017-03-29 13:45:00", "2017-03-29 14:00:00", "2017-03-29 14:15:00", "2017-03-29 14:30:00", "2017-03-29 14:45:00", "2017-03-29 15:00:00", "2017-03-29 15:15:00", "2017-03-29 15:30:00", "2017-03-29 15:45:00", "2017-03-29 16:00:00", "2017-03-29 16:15:00", "2017-03-29 16:30:00", "2017-03-29 16:45:00", "2017-03-29 17:00:00", "2017-03-29 17:15:00", "2017-03-29 17:30:00", "2017-03-29 17:45:00", "2017-03-29 18:00:00", "2017-03-29 18:15:00", "2017-03-29 18:30:00", "2017-03-29 18:45:00", "2017-03-29 19:00:00", "2017-03-29 19:15:00", "2017-03-29 19:30:00", "2017-03-29 19:45:00", "2017-03-29 20:00:00", "2017-03-29 20:15:00", "2017-03-29 20:30:00", "2017-03-29 20:45:00", "2017-03-29 21:00:00", "2017-03-29 21:15:00", "2017-03-29 21:30:00", "2017-03-29 21:45:00", "2017-03-29 22:00:00", "2017-03-29 22:15:00", "2017-03-29 22:30:00", "2017-03-29 22:45:00", "2017-03-29 23:00:00", "2017-03-29 23:15:00", "2017-03-29 23:30:00", "2017-03-29 23:45:00", "2017-03-30 00:00:00"],
				"Count_RC3": [33, 21, 38, 15, 45, 21, 31, 40, 27, 50, 25, 50, 45, 40, 30, 30, 37, 10, 41, 34, 19, 12, 42, 44, 33, 48, 27, 37, 35, 43, 22, 31, 14, 41, 16, 23, 15, 38, 42, 13, 45, 38, 31, 32, 21, 43, 42, 38, 42, 12, 42, 39, 30, 24, 22, 26, 21, 21, 25, 39, 46, 19, 44, 50, 38, 20, 23, 26, 42, 28, 49, 24, 36, 18, 15, 38, 15, 31, 45, 40, 30, 50, 29, 40, 26, 32, 16, 18, 34, 48, 50, 12, 24, 35, 43, 39]
			};
			_this.renderChart("Dash3", data);
			/*
   services.getOneDay(function(data) {
   	_this.renderChart("Dash3", data);
   }, function() {
   		console.log("fail");
   });*/
			this.oneHourObject.clicked = false;
			this.oneDayObject.clicked = true;
			this.sevenDayObject.clicked = false;
			this.monthClassObject.clicked = false;
		},
		sevenDayRender: function sevenDayRender() {
			_echartConfig.echartConfig.ReqAndRes.dataZoom[0].end = 25;
			_echartConfig.echartConfig.ReqAndRes.dataZoom[1].end = 25;
			var _this = this;
			var data = {
				"Count_RC4": [2, 22, 32, 50, 8, 41, 27, 36, 42, 36, 6, 46, 45, 16, 29, 40, 49, 7, 41, 7, 12, 0, 2, 21, 0, 6, 28, 46, 35, 1, 29, 1, 9, 7, 23, 48, 0, 27, 23, 35, 44, 34, 21, 45, 9, 40, 19, 38, 12, 39, 19, 46, 18, 1, 13, 35, 22, 16, 46, 44, 3, 31, 37, 24, 35, 32, 32, 31, 49, 43, 11, 30, 5, 29, 12, 44, 38, 28, 23, 0, 19, 46, 45, 25, 24, 18, 33, 15, 23, 34, 18, 4, 50, 30, 30, 20, 42, 7, 39, 28, 14, 37, 36, 34, 50, 9, 22, 29, 39, 5, 31, 2, 5, 11, 31, 28, 38, 35, 22, 50, 26, 11, 14, 11, 20, 16, 2, 41, 20, 11, 25, 6, 11, 18, 8, 1, 1, 28, 9, 39, 34, 13, 34, 15],
				"Count_RC5": [3, 4, 0, 4, 9, 3, 5, 8, 2, 5, 1, 5, 10, 4, 8, 0, 0, 5, 3, 10, 9, 7, 5, 7, 1, 10, 1, 7, 5, 0, 9, 1, 6, 5, 5, 3, 5, 4, 4, 8, 2, 0, 0, 9, 5, 10, 9, 0, 1, 6, 0, 7, 3, 5, 0, 0, 9, 0, 6, 0, 9, 4, 4, 5, 2, 6, 9, 7, 10, 9, 5, 3, 8, 4, 1, 0, 8, 8, 1, 7, 0, 2, 5, 9, 1, 4, 3, 4, 0, 2, 9, 3, 5, 0, 10, 9, 10, 8, 2, 9, 6, 0, 10, 2, 0, 6, 9, 7, 0, 3, 7, 7, 6, 6, 10, 9, 9, 0, 7, 9, 5, 1, 9, 8, 1, 5, 0, 0, 6, 4, 2, 3, 4, 3, 8, 0, 6, 4, 8, 10, 3, 1, 8, 6],
				"Count_OverThreshold": [14, 4, 2, 9, 5, 5, 0, 14, 9, 11, 16, 6, 10, 14, 0, 15, 13, 6, 15, 10, 0, 11, 15, 2, 0, 15, 9, 6, 6, 15, 13, 16, 1, 12, 0, 8, 9, 10, 12, 4, 7, 0, 10, 5, 2, 11, 15, 15, 3, 9, 0, 10, 7, 6, 1, 7, 2, 13, 11, 7, 0, 6, 4, 5, 8, 1, 7, 7, 11, 11, 7, 4, 12, 4, 10, 15, 1, 5, 15, 4, 1, 13, 11, 9, 12, 0, 4, 3, 12, 9, 1, 9, 0, 9, 13, 12, 5, 12, 8, 1, 12, 4, 3, 6, 4, 16, 15, 11, 7, 14, 0, 14, 4, 10, 13, 12, 6, 0, 14, 11, 14, 7, 13, 6, 6, 8, 12, 0, 15, 16, 16, 0, 4, 9, 15, 9, 2, 11, 1, 13, 9, 5, 0, 3],
				"AverageElapsed_All": [1547, 1776, 1592, 1221, 1270, 1043, 1577, 1546, 952, 1385, 1757, 1357, 964, 1686, 1050, 1388, 1482, 1976, 1830, 1215, 1529, 1015, 1534, 1678, 1209, 859, 1554, 945, 1677, 1382, 1938, 858, 1367, 1851, 1141, 1746, 1048, 1589, 1506, 1505, 1209, 1497, 1539, 1397, 946, 1094, 858, 1052, 1998, 1105, 1945, 907, 810, 990, 1222, 1368, 1953, 883, 1112, 1961, 1295, 1880, 1338, 950, 1065, 1972, 1004, 1445, 923, 1157, 1223, 1490, 1175, 990, 907, 1099, 827, 1946, 1598, 1459, 1454, 1000, 1087, 971, 1947, 1801, 994, 1014, 1923, 1677, 1162, 1436, 945, 970, 1223, 1022, 1625, 1798, 1153, 1392, 1035, 1734, 1707, 1831, 862, 854, 1830, 820, 1263, 1156, 1479, 1763, 922, 1027, 805, 891, 1894, 1571, 881, 856, 1967, 903, 1015, 1100, 1830, 970, 1967, 1776, 1684, 1219, 1464, 1537, 1344, 1510, 1648, 909, 1109, 1301, 1453, 1835, 1256, 1504, 1683, 1226],
				"AverageElapsed_less5s": [3550, 4856, 4629, 2962, 4578, 2716, 3077, 3676, 4080, 3815, 4158, 2884, 3784, 4186, 3101, 4687, 2782, 3042, 3615, 2600, 4029, 2927, 4989, 3957, 4462, 3111, 4151, 3725, 3408, 4343, 4103, 3352, 3157, 4261, 4095, 4937, 3650, 4194, 4319, 3894, 3497, 2569, 2716, 3436, 2705, 4778, 4656, 2744, 3396, 2518, 4121, 3296, 4223, 3887, 4199, 3654, 2905, 3271, 2628, 4605, 4756, 2714, 4385, 4230, 4834, 3561, 3818, 3714, 3190, 3889, 3642, 4450, 3394, 2997, 3359, 3946, 4546, 4592, 3379, 4802, 4236, 4113, 4974, 4650, 4695, 3390, 4922, 3861, 4059, 4342, 4160, 4436, 4176, 4272, 4148, 3939, 2970, 3988, 4330, 4985, 2961, 4041, 2940, 4363, 3853, 3368, 3505, 4679, 3541, 4450, 4736, 3788, 2828, 4684, 3998, 4239, 2665, 2711, 3579, 4146, 3198, 4936, 3526, 4948, 4913, 3597, 3958, 3694, 2994, 2755, 4490, 3309, 3770, 4638, 3592, 3649, 4584, 4144, 4859, 3854, 2821, 4130, 4194, 3658],
				"Count_RC2": [2614, 2298, 5073, 2292, 3990, 4603, 2969, 3882, 6033, 3378, 6533, 7312, 5708, 4704, 4723, 3154, 5715, 2394, 2419, 2013, 5284, 5771, 5223, 2201, 4041, 2113, 7404, 6065, 3804, 3250, 6524, 2891, 7511, 6054, 2328, 2385, 4152, 6780, 6041, 7816, 3910, 7927, 7749, 3201, 7747, 4493, 5984, 6843, 3593, 3885, 7810, 2307, 4133, 5260, 5561, 3816, 3642, 2124, 5577, 2684, 6802, 7321, 4381, 7255, 6760, 4272, 6478, 3726, 5370, 3598, 2287, 4817, 7599, 3512, 3136, 7768, 5320, 7604, 4452, 6883, 4750, 7592, 2381, 3993, 7752, 2494, 4532, 5089, 7375, 5718, 2105, 5471, 4664, 2405, 5383, 6632, 4491, 4273, 2628, 5832, 7340, 7720, 4433, 7594, 4393, 2672, 3627, 4799, 2488, 4432, 3516, 7278, 6578, 4342, 7172, 2074, 4225, 6211, 7387, 6052, 5106, 4160, 3118, 3896, 7140, 2888, 6460, 2228, 5916, 4250, 3044, 4768, 5901, 6065, 3440, 6246, 5737, 3725, 5562, 5488, 7738, 4436, 6639, 3466],
				"AverageElapsed_over5s": [8293, 6364, 10332, 11153, 10366, 8789, 10075, 5052, 5301, 10381, 8184, 11107, 10589, 6040, 10159, 5075, 7020, 10162, 7168, 11827, 10376, 10189, 11814, 9069, 9912, 8398, 7686, 5630, 11121, 11724, 9624, 9821, 7971, 6723, 10764, 8685, 7662, 5059, 9685, 6233, 8799, 10701, 11263, 7999, 9014, 11814, 10554, 9939, 9631, 7080, 10703, 10496, 11551, 10545, 8449, 10739, 5459, 10037, 6266, 7186, 11513, 10071, 8377, 5486, 7863, 6254, 11135, 11762, 8821, 8630, 6329, 7361, 11738, 6029, 11015, 8816, 7522, 11423, 10408, 7344, 5743, 10377, 9099, 11738, 8843, 10006, 7404, 5189, 9142, 8054, 6272, 7145, 5125, 10911, 6702, 10538, 6990, 5479, 9769, 10465, 7299, 7929, 10848, 10908, 7097, 8378, 5687, 5599, 6871, 10336, 7437, 6770, 7434, 5895, 8621, 5510, 8297, 11600, 5612, 5225, 8596, 11748, 6874, 11154, 7385, 9230, 8405, 9279, 8272, 10150, 6872, 9510, 8889, 9914, 7826, 7351, 11437, 7195, 7779, 10451, 8614, 10780, 8099, 5514],
				"timepoint": ["2017-03-11 01:00:00", "2017-03-11 02:00:00", "2017-03-11 03:00:00", "2017-03-11 04:00:00", "2017-03-11 05:00:00", "2017-03-11 06:00:00", "2017-03-11 07:00:00", "2017-03-11 08:00:00", "2017-03-11 09:00:00", "2017-03-11 10:00:00", "2017-03-11 11:00:00", "2017-03-11 12:00:00", "2017-03-11 13:00:00", "2017-03-11 14:00:00", "2017-03-11 15:00:00", "2017-03-11 16:00:00", "2017-03-11 17:00:00", "2017-03-11 18:00:00", "2017-03-11 19:00:00", "2017-03-11 20:00:00", "2017-03-11 21:00:00", "2017-03-11 22:00:00", "2017-03-11 23:00:00", "2017-03-12 00:00:00", "2017-03-12 01:00:00", "2017-03-12 02:00:00", "2017-03-12 03:00:00", "2017-03-12 04:00:00", "2017-03-12 05:00:00", "2017-03-12 06:00:00", "2017-03-12 07:00:00", "2017-03-12 08:00:00", "2017-03-12 09:00:00", "2017-03-12 10:00:00", "2017-03-12 11:00:00", "2017-03-12 12:00:00", "2017-03-12 13:00:00", "2017-03-12 14:00:00", "2017-03-12 15:00:00", "2017-03-12 16:00:00", "2017-03-12 17:00:00", "2017-03-12 18:00:00", "2017-03-12 19:00:00", "2017-03-12 20:00:00", "2017-03-12 21:00:00", "2017-03-12 22:00:00", "2017-03-12 23:00:00", "2017-03-13 00:00:00", "2017-03-13 01:00:00", "2017-03-13 02:00:00", "2017-03-13 03:00:00", "2017-03-13 04:00:00", "2017-03-13 05:00:00", "2017-03-13 06:00:00", "2017-03-13 07:00:00", "2017-03-13 08:00:00", "2017-03-13 09:00:00", "2017-03-13 10:00:00", "2017-03-13 11:00:00", "2017-03-13 12:00:00", "2017-03-13 13:00:00", "2017-03-13 14:00:00", "2017-03-13 15:00:00", "2017-03-13 16:00:00", "2017-03-13 17:00:00", "2017-03-13 18:00:00", "2017-03-13 19:00:00", "2017-03-13 20:00:00", "2017-03-13 21:00:00", "2017-03-13 22:00:00", "2017-03-13 23:00:00", "2017-03-14 00:00:00", "2017-03-14 01:00:00", "2017-03-14 02:00:00", "2017-03-14 03:00:00", "2017-03-14 04:00:00", "2017-03-14 05:00:00", "2017-03-14 06:00:00", "2017-03-14 07:00:00", "2017-03-14 08:00:00", "2017-03-14 09:00:00", "2017-03-14 10:00:00", "2017-03-14 11:00:00", "2017-03-14 12:00:00", "2017-03-14 13:00:00", "2017-03-14 14:00:00", "2017-03-14 15:00:00", "2017-03-14 16:00:00", "2017-03-14 17:00:00", "2017-03-14 18:00:00", "2017-03-14 19:00:00", "2017-03-14 20:00:00", "2017-03-14 21:00:00", "2017-03-14 22:00:00", "2017-03-14 23:00:00", "2017-03-15 00:00:00", "2017-03-15 01:00:00", "2017-03-15 02:00:00", "2017-03-15 03:00:00", "2017-03-15 04:00:00", "2017-03-15 05:00:00", "2017-03-15 06:00:00", "2017-03-15 07:00:00", "2017-03-15 08:00:00", "2017-03-15 09:00:00", "2017-03-15 10:00:00", "2017-03-15 11:00:00", "2017-03-15 12:00:00", "2017-03-15 13:00:00", "2017-03-15 14:00:00", "2017-03-15 15:00:00", "2017-03-15 16:00:00", "2017-03-15 17:00:00", "2017-03-15 18:00:00", "2017-03-15 19:00:00", "2017-03-15 20:00:00", "2017-03-15 21:00:00", "2017-03-15 22:00:00", "2017-03-15 23:00:00", "2017-03-16 00:00:00", "2017-03-16 01:00:00", "2017-03-16 02:00:00", "2017-03-16 03:00:00", "2017-03-16 04:00:00", "2017-03-16 05:00:00", "2017-03-16 06:00:00", "2017-03-16 07:00:00", "2017-03-16 08:00:00", "2017-03-16 09:00:00", "2017-03-16 10:00:00", "2017-03-16 11:00:00", "2017-03-16 12:00:00", "2017-03-16 13:00:00", "2017-03-16 14:00:00", "2017-03-16 15:00:00", "2017-03-16 16:00:00", "2017-03-16 17:00:00", "2017-03-16 18:00:00", "2017-03-16 19:00:00", "2017-03-16 20:00:00", "2017-03-16 21:00:00", "2017-03-16 22:00:00", "2017-03-16 23:00:00", "2017-03-17 00:00:00"],
				"Count_RC3": [143, 65, 84, 112, 89, 61, 11, 3, 135, 138, 11, 19, 128, 8, 19, 57, 57, 123, 92, 132, 126, 128, 5, 98, 150, 121, 137, 144, 21, 137, 2, 107, 146, 90, 67, 67, 146, 80, 28, 76, 58, 11, 146, 141, 121, 139, 82, 92, 115, 93, 138, 123, 37, 53, 86, 120, 109, 87, 62, 45, 40, 106, 111, 21, 55, 122, 27, 72, 82, 2, 59, 1, 70, 75, 123, 15, 26, 37, 64, 7, 140, 141, 72, 67, 104, 39, 48, 5, 94, 118, 129, 77, 66, 116, 1, 141, 26, 132, 52, 74, 64, 46, 63, 44, 107, 53, 57, 135, 16, 76, 4, 106, 135, 67, 145, 57, 95, 140, 7, 42, 26, 57, 61, 7, 2, 66, 69, 121, 137, 35, 127, 150, 85, 139, 97, 74, 47, 30, 86, 114, 39, 39, 80, 82]
			};
			_this.renderChart("Dash3", data);
			/*
   services.getOneWeek(function(data) {
   	_this.renderChart("Dash3", data);
   }, function() {
   		console.log("fail");
   });*/
			this.oneHourObject.clicked = false;
			this.oneDayObject.clicked = false;
			this.sevenDayObject.clicked = true;
			this.monthClassObject.clicked = false;
		},
		oneMonthRender: function oneMonthRender() {
			_echartConfig.echartConfig.ReqAndRes.dataZoom[0].end = 25;
			_echartConfig.echartConfig.ReqAndRes.dataZoom[1].end = 25;
			var _this = this;
			var data = {
				"Count_RC4": [49, 5, 21, 41, 28, 38, 20, 35, 15, 40, 24, 37, 33, 40, 3, 6, 30, 1, 24, 18, 2, 27, 32, 31, 7, 23, 14, 42, 43, 41, 17, 21, 9, 6, 22, 9, 12, 47, 9, 45, 44, 27, 24, 7, 33, 3, 10, 21, 4, 25, 17, 47, 13, 19, 14, 40, 47, 12, 28, 42, 46, 38, 33, 11, 1, 33, 38, 5, 36, 40, 10, 11, 31, 42, 3, 27, 19, 42, 30, 19, 33, 24, 33, 49, 1, 50, 21, 24, 20, 23, 30, 19, 10, 0, 10, 45, 37, 33, 5, 11, 12, 34, 17, 40, 23, 38, 0, 25, 41, 47, 20, 45, 33, 38, 41, 1, 14, 48, 7, 35, 39, 23, 5, 30, 5, 36, 39, 34, 20, 12, 35, 8, 26, 37, 28, 21, 47, 29, 47, 8, 11, 29, 37, 47, 19, 34, 22, 35, 46, 47, 40, 16, 32, 19, 19, 39, 42, 33, 6, 26, 14, 8, 46, 46, 46, 44, 1, 18, 17, 4, 40, 22, 20, 43, 13, 38, 11, 12, 23, 24, 45, 29, 7, 17, 29, 11, 37, 49, 40, 25, 49, 11, 37, 34, 24, 49, 35, 5, 4, 23, 12, 50, 26, 26, 34, 28, 46, 44, 21, 24, 46, 4, 47, 23, 40, 23, 35, 32, 6, 50, 8, 9, 31, 34, 38, 14, 38, 33, 4, 41, 2, 33, 14, 33, 21, 32, 7, 24, 47, 10],
				"Count_RC5": [10, 10, 9, 7, 2, 7, 1, 5, 0, 5, 4, 9, 2, 10, 1, 5, 5, 7, 5, 4, 2, 10, 0, 5, 3, 8, 8, 7, 10, 6, 6, 6, 7, 2, 0, 0, 8, 6, 6, 0, 8, 10, 9, 6, 0, 3, 6, 2, 6, 3, 6, 7, 5, 5, 8, 9, 3, 9, 5, 8, 9, 10, 0, 10, 0, 0, 5, 2, 9, 8, 8, 6, 0, 2, 7, 8, 2, 2, 0, 7, 6, 3, 3, 4, 7, 0, 8, 7, 2, 4, 2, 1, 0, 2, 9, 4, 1, 10, 8, 8, 6, 9, 9, 9, 6, 8, 6, 9, 3, 8, 6, 4, 7, 9, 1, 1, 10, 5, 8, 7, 9, 1, 8, 10, 9, 5, 7, 3, 10, 5, 6, 7, 4, 0, 7, 0, 4, 4, 5, 5, 8, 6, 5, 6, 1, 0, 3, 3, 3, 7, 2, 9, 4, 8, 6, 1, 9, 2, 8, 3, 9, 0, 0, 6, 10, 1, 1, 3, 4, 0, 10, 5, 10, 2, 10, 4, 5, 5, 6, 9, 1, 1, 7, 4, 8, 5, 5, 3, 6, 8, 6, 8, 6, 1, 9, 6, 10, 1, 2, 0, 3, 8, 4, 9, 1, 9, 2, 3, 5, 9, 3, 8, 5, 8, 7, 2, 0, 2, 10, 0, 2, 3, 4, 5, 3, 3, 10, 8, 6, 7, 7, 3, 2, 4, 0, 6, 2, 0, 0, 8],
				"Count_OverThreshold": [6, 15, 16, 2, 14, 2, 6, 5, 11, 14, 10, 16, 15, 6, 0, 10, 3, 1, 3, 14, 7, 9, 9, 9, 10, 5, 5, 0, 14, 4, 1, 8, 0, 12, 14, 9, 15, 4, 2, 11, 2, 16, 5, 11, 8, 0, 3, 14, 4, 2, 11, 14, 16, 1, 2, 2, 9, 13, 15, 2, 5, 13, 1, 14, 16, 11, 9, 10, 12, 2, 4, 14, 4, 12, 10, 2, 8, 2, 11, 11, 12, 2, 7, 6, 14, 9, 9, 9, 9, 13, 10, 3, 12, 1, 0, 6, 5, 8, 6, 1, 14, 16, 5, 8, 2, 16, 5, 11, 5, 0, 9, 6, 2, 15, 1, 9, 12, 2, 16, 8, 10, 13, 6, 13, 16, 12, 1, 16, 15, 8, 1, 10, 5, 14, 15, 16, 12, 0, 6, 10, 8, 3, 2, 15, 0, 7, 9, 12, 1, 16, 0, 16, 0, 13, 4, 4, 1, 2, 10, 8, 15, 2, 3, 8, 3, 16, 4, 9, 4, 15, 3, 0, 8, 13, 6, 10, 15, 13, 14, 15, 12, 9, 6, 2, 15, 15, 7, 5, 1, 7, 1, 8, 12, 5, 12, 12, 8, 6, 5, 10, 13, 15, 0, 3, 1, 10, 10, 12, 0, 1, 1, 14, 7, 15, 1, 14, 12, 4, 11, 10, 13, 2, 11, 10, 5, 16, 16, 14, 16, 1, 7, 0, 10, 10, 13, 7, 5, 14, 16, 4],
				"AverageElapsed_All": [1931, 1589, 1341, 1270, 1699, 1264, 1698, 1547, 1798, 1906, 1644, 1937, 936, 933, 942, 1480, 1612, 1443, 944, 1697, 1143, 1385, 1259, 1591, 1633, 1378, 1136, 988, 1533, 1517, 1423, 1385, 867, 1606, 1795, 1517, 919, 1870, 1351, 1347, 825, 1209, 861, 1915, 1587, 1169, 1157, 1406, 1041, 931, 1361, 887, 806, 1838, 978, 1160, 1963, 1102, 1403, 985, 1243, 1224, 1607, 1449, 962, 1579, 1305, 1881, 1425, 1569, 1152, 845, 1299, 1035, 839, 912, 1975, 1360, 1987, 1039, 1998, 1748, 1815, 1775, 1199, 1392, 1910, 1326, 1651, 1787, 1076, 1669, 843, 878, 1369, 1239, 1123, 1533, 1571, 832, 952, 1494, 1208, 828, 843, 1178, 1983, 1280, 1484, 1008, 1903, 1550, 1530, 1308, 1887, 1847, 1383, 1770, 1733, 1117, 938, 1701, 817, 1838, 1708, 835, 1648, 1411, 1467, 1962, 1053, 1569, 1537, 1854, 1281, 1274, 1946, 1388, 1968, 1326, 1462, 1924, 1299, 876, 1191, 1609, 1115, 1928, 1858, 1349, 1664, 922, 1413, 874, 802, 876, 888, 1049, 1324, 1208, 1214, 1599, 1014, 1418, 1237, 1772, 1792, 1146, 1216, 1372, 953, 1566, 1765, 1822, 1421, 1507, 1417, 888, 1458, 1931, 889, 1196, 825, 1651, 1638, 1316, 1107, 1390, 1077, 933, 1459, 1684, 940, 1863, 1454, 990, 991, 915, 1760, 1144, 1699, 1888, 1140, 1384, 1522, 1756, 1394, 1616, 1958, 1590, 1446, 1109, 1647, 1538, 1291, 887, 1020, 1557, 1419, 966, 1843, 1302, 1930, 1470, 976, 1355, 1307, 1328, 899, 1175, 2000, 1797, 1569, 1618, 1722, 1960, 1704, 1394, 1925, 1569],
				"AverageElapsed_less5s": [2957, 2568, 3901, 2715, 3001, 4977, 3359, 3878, 4422, 4819, 2556, 4052, 4687, 4367, 3290, 3916, 4510, 3273, 3242, 3830, 3471, 3046, 3511, 4844, 4566, 2550, 3335, 4789, 4330, 2648, 3904, 3743, 2559, 4509, 3882, 4556, 4338, 2754, 4212, 3582, 4611, 4364, 3337, 3436, 2797, 4594, 4603, 4731, 4481, 3403, 3510, 2932, 3768, 4422, 4736, 4042, 4343, 2505, 4579, 4573, 3003, 4004, 4865, 2656, 3157, 2886, 4727, 2539, 3046, 4395, 4400, 4372, 4006, 4118, 4225, 2745, 3251, 2529, 2559, 2615, 3717, 3162, 4525, 3132, 3959, 2816, 3470, 3420, 2805, 3620, 4409, 3429, 3161, 2599, 3848, 4768, 3334, 3826, 4811, 3579, 3551, 3537, 3375, 3613, 3611, 3771, 3608, 3488, 3523, 2814, 2893, 4000, 3615, 4809, 3542, 4053, 3876, 3378, 3251, 4492, 3859, 3479, 3827, 3218, 3965, 4387, 3937, 3051, 3712, 3449, 4918, 3506, 2748, 4691, 2950, 4293, 2792, 2693, 3017, 4072, 3771, 4473, 2754, 4879, 3753, 4428, 4330, 4813, 3761, 4530, 3838, 3468, 3201, 2922, 2779, 3651, 4882, 4425, 4188, 3479, 4582, 3133, 3046, 3863, 3720, 4936, 4832, 3486, 4567, 4643, 3939, 4012, 4567, 2648, 3890, 4467, 2680, 3340, 3853, 2576, 3893, 4355, 2512, 2512, 3432, 3673, 3417, 4271, 4523, 3391, 4868, 4055, 2719, 3460, 2745, 4342, 4390, 2669, 3708, 3885, 3658, 3539, 3984, 2510, 3434, 2685, 2779, 2922, 3806, 4624, 3181, 2929, 3333, 3041, 3383, 3237, 4429, 3356, 3273, 4516, 4942, 3692, 2566, 4224, 4624, 4906, 3269, 4166, 3574, 2534, 4429, 3847, 3982, 2706, 4975, 4887, 4419, 2804, 3397, 3842],
				"Count_RC2": [3986, 5056, 5668, 3779, 2853, 4585, 3448, 4274, 2209, 2480, 3252, 2275, 4610, 3456, 4216, 3113, 3016, 3200, 4323, 6016, 6227, 2950, 5064, 5752, 3644, 1814, 1872, 1910, 1970, 3624, 5799, 5547, 3207, 3670, 4060, 5280, 2731, 4076, 4294, 4562, 3539, 2444, 3660, 3921, 3926, 1992, 5124, 5824, 4820, 3236, 2436, 2557, 4896, 5372, 4039, 2096, 5031, 4051, 5013, 2147, 5352, 4598, 4927, 5276, 5368, 1759, 4982, 6380, 5156, 1747, 5803, 2373, 5983, 5488, 4407, 4060, 5660, 5222, 2448, 2697, 5593, 3937, 3940, 5828, 3841, 2101, 4508, 4630, 2464, 6152, 1838, 2823, 4592, 2492, 6200, 6037, 4702, 6396, 4422, 3341, 4398, 3032, 5353, 2748, 2181, 4324, 3424, 5209, 3892, 4041, 2692, 3536, 1936, 3244, 4188, 3468, 4760, 1604, 1860, 6356, 4116, 4914, 1670, 4422, 3698, 4576, 5290, 5285, 3096, 3872, 3297, 5916, 6179, 1865, 5918, 5004, 3637, 2871, 6020, 4681, 2361, 4695, 3854, 5021, 4713, 4322, 2710, 3983, 3416, 5906, 5072, 3936, 4751, 3680, 1875, 5833, 1619, 4284, 2627, 4656, 5532, 3916, 1953, 2096, 5837, 6071, 3468, 4456, 6186, 6228, 5104, 4537, 3440, 4464, 3067, 5262, 3400, 2704, 2764, 5385, 2931, 2144, 3196, 2403, 6072, 1875, 2320, 5277, 6045, 5202, 5087, 1670, 6131, 5399, 4128, 4813, 3726, 4163, 5945, 5930, 4827, 3664, 6297, 5804, 2172, 4092, 1713, 4402, 3088, 4881, 5426, 6223, 5067, 4576, 3886, 4811, 2298, 4102, 4316, 6173, 3216, 3246, 6176, 1889, 3792, 2678, 2933, 4446, 4805, 3619, 4590, 4537, 2685, 3032, 3356, 4950, 3033, 4433, 5627, 4777],
				"AverageElapsed_over5s": [9817, 7277, 6903, 10021, 11194, 9719, 10230, 5286, 6480, 5013, 6464, 8348, 5845, 7905, 8470, 8433, 6691, 7349, 5697, 7994, 11725, 6476, 5030, 8069, 10099, 7212, 6672, 11153, 5049, 8287, 8890, 10930, 6474, 8570, 11635, 10529, 8559, 6626, 11071, 5224, 9506, 6477, 11744, 5931, 8436, 7806, 9873, 11110, 10622, 10849, 8204, 9691, 9534, 7675, 10509, 9962, 10168, 9028, 8311, 8669, 10261, 9937, 8324, 8403, 9174, 11279, 11773, 8636, 7816, 9500, 10181, 9930, 9282, 10099, 9337, 7431, 7755, 5808, 8495, 9143, 9948, 7572, 10735, 8753, 8480, 6569, 5808, 8691, 6450, 10460, 5561, 8697, 6240, 5974, 9464, 7946, 10968, 6828, 6941, 8852, 10193, 10702, 7628, 9172, 5551, 10517, 7672, 8030, 11033, 7578, 6562, 5398, 6063, 7539, 6703, 6452, 8770, 5243, 7195, 8074, 7158, 8670, 9252, 10857, 11048, 11254, 10563, 11407, 8223, 11893, 8258, 9841, 5602, 6111, 7083, 10984, 5696, 5583, 7341, 8243, 6993, 9660, 11312, 6908, 9067, 11605, 10720, 9202, 5015, 7376, 9592, 5746, 9127, 8930, 5336, 8930, 8056, 9080, 8131, 10304, 6250, 6961, 11475, 7431, 9741, 9877, 10380, 9919, 7419, 7572, 9318, 5901, 11820, 5134, 5885, 5131, 6993, 7336, 10156, 9859, 7537, 8140, 10910, 6218, 9322, 5372, 10619, 5055, 6043, 5940, 5447, 8680, 11840, 10530, 8499, 11423, 10048, 7012, 7460, 10303, 10856, 6358, 11161, 5107, 8495, 5238, 11012, 10541, 9863, 8017, 7033, 8731, 11112, 6047, 11008, 5409, 6638, 6911, 6331, 10312, 5536, 6941, 8164, 10813, 9677, 5947, 6291, 8581, 8023, 10053, 7736, 10201, 5880, 5038, 7809, 10078, 5139, 9296, 6559, 8554],
				"timepoint": ["2017-02-20 03:00:00", "2017-02-20 06:00:00", "2017-02-20 09:00:00", "2017-02-20 12:00:00", "2017-02-20 15:00:00", "2017-02-20 18:00:00", "2017-02-20 21:00:00", "2017-02-21 00:00:00", "2017-02-21 03:00:00", "2017-02-21 06:00:00", "2017-02-21 09:00:00", "2017-02-21 12:00:00", "2017-02-21 15:00:00", "2017-02-21 18:00:00", "2017-02-21 21:00:00", "2017-02-22 00:00:00", "2017-02-22 03:00:00", "2017-02-22 06:00:00", "2017-02-22 09:00:00", "2017-02-22 12:00:00", "2017-02-22 15:00:00", "2017-02-22 18:00:00", "2017-02-22 21:00:00", "2017-02-23 00:00:00", "2017-02-23 03:00:00", "2017-02-23 06:00:00", "2017-02-23 09:00:00", "2017-02-23 12:00:00", "2017-02-23 15:00:00", "2017-02-23 18:00:00", "2017-02-23 21:00:00", "2017-02-24 00:00:00", "2017-02-24 03:00:00", "2017-02-24 06:00:00", "2017-02-24 09:00:00", "2017-02-24 12:00:00", "2017-02-24 15:00:00", "2017-02-24 18:00:00", "2017-02-24 21:00:00", "2017-02-25 00:00:00", "2017-02-25 03:00:00", "2017-02-25 06:00:00", "2017-02-25 09:00:00", "2017-02-25 12:00:00", "2017-02-25 15:00:00", "2017-02-25 18:00:00", "2017-02-25 21:00:00", "2017-02-26 00:00:00", "2017-02-26 03:00:00", "2017-02-26 06:00:00", "2017-02-26 09:00:00", "2017-02-26 12:00:00", "2017-02-26 15:00:00", "2017-02-26 18:00:00", "2017-02-26 21:00:00", "2017-02-27 00:00:00", "2017-02-27 03:00:00", "2017-02-27 06:00:00", "2017-02-27 09:00:00", "2017-02-27 12:00:00", "2017-02-27 15:00:00", "2017-02-27 18:00:00", "2017-02-27 21:00:00", "2017-02-28 00:00:00", "2017-02-28 03:00:00", "2017-02-28 06:00:00", "2017-02-28 09:00:00", "2017-02-28 12:00:00", "2017-02-28 15:00:00", "2017-02-28 18:00:00", "2017-02-28 21:00:00", "2017-03-01 00:00:00", "2017-03-01 03:00:00", "2017-03-01 06:00:00", "2017-03-01 09:00:00", "2017-03-01 12:00:00", "2017-03-01 15:00:00", "2017-03-01 18:00:00", "2017-03-01 21:00:00", "2017-03-02 00:00:00", "2017-03-02 03:00:00", "2017-03-02 06:00:00", "2017-03-02 09:00:00", "2017-03-02 12:00:00", "2017-03-02 15:00:00", "2017-03-02 18:00:00", "2017-03-02 21:00:00", "2017-03-03 00:00:00", "2017-03-03 03:00:00", "2017-03-03 06:00:00", "2017-03-03 09:00:00", "2017-03-03 12:00:00", "2017-03-03 15:00:00", "2017-03-03 18:00:00", "2017-03-03 21:00:00", "2017-03-04 00:00:00", "2017-03-04 03:00:00", "2017-03-04 06:00:00", "2017-03-04 09:00:00", "2017-03-04 12:00:00", "2017-03-04 15:00:00", "2017-03-04 18:00:00", "2017-03-04 21:00:00", "2017-03-05 00:00:00", "2017-03-05 03:00:00", "2017-03-05 06:00:00", "2017-03-05 09:00:00", "2017-03-05 12:00:00", "2017-03-05 15:00:00", "2017-03-05 18:00:00", "2017-03-05 21:00:00", "2017-03-06 00:00:00", "2017-03-06 03:00:00", "2017-03-06 06:00:00", "2017-03-06 09:00:00", "2017-03-06 12:00:00", "2017-03-06 15:00:00", "2017-03-06 18:00:00", "2017-03-06 21:00:00", "2017-03-07 00:00:00", "2017-03-07 03:00:00", "2017-03-07 06:00:00", "2017-03-07 09:00:00", "2017-03-07 12:00:00", "2017-03-07 15:00:00", "2017-03-07 18:00:00", "2017-03-07 21:00:00", "2017-03-08 00:00:00", "2017-03-08 03:00:00", "2017-03-08 06:00:00", "2017-03-08 09:00:00", "2017-03-08 12:00:00", "2017-03-08 15:00:00", "2017-03-08 18:00:00", "2017-03-08 21:00:00", "2017-03-09 00:00:00", "2017-03-09 03:00:00", "2017-03-09 06:00:00", "2017-03-09 09:00:00", "2017-03-09 12:00:00", "2017-03-09 15:00:00", "2017-03-09 18:00:00", "2017-03-09 21:00:00", "2017-03-10 00:00:00", "2017-03-10 03:00:00", "2017-03-10 06:00:00", "2017-03-10 09:00:00", "2017-03-10 12:00:00", "2017-03-10 15:00:00", "2017-03-10 18:00:00", "2017-03-10 21:00:00", "2017-03-11 00:00:00", "2017-03-11 03:00:00", "2017-03-11 06:00:00", "2017-03-11 09:00:00", "2017-03-11 12:00:00", "2017-03-11 15:00:00", "2017-03-11 18:00:00", "2017-03-11 21:00:00", "2017-03-12 00:00:00", "2017-03-12 03:00:00", "2017-03-12 06:00:00", "2017-03-12 09:00:00", "2017-03-12 12:00:00", "2017-03-12 15:00:00", "2017-03-12 18:00:00", "2017-03-12 21:00:00", "2017-03-13 00:00:00", "2017-03-13 03:00:00", "2017-03-13 06:00:00", "2017-03-13 09:00:00", "2017-03-13 12:00:00", "2017-03-13 15:00:00", "2017-03-13 18:00:00", "2017-03-13 21:00:00", "2017-03-14 00:00:00", "2017-03-14 03:00:00", "2017-03-14 06:00:00", "2017-03-14 09:00:00", "2017-03-14 12:00:00", "2017-03-14 15:00:00", "2017-03-14 18:00:00", "2017-03-14 21:00:00", "2017-03-15 00:00:00", "2017-03-15 03:00:00", "2017-03-15 06:00:00", "2017-03-15 09:00:00", "2017-03-15 12:00:00", "2017-03-15 15:00:00", "2017-03-15 18:00:00", "2017-03-15 21:00:00", "2017-03-16 00:00:00", "2017-03-16 03:00:00", "2017-03-16 06:00:00", "2017-03-16 09:00:00", "2017-03-16 12:00:00", "2017-03-16 15:00:00", "2017-03-16 18:00:00", "2017-03-16 21:00:00", "2017-03-17 00:00:00", "2017-03-17 03:00:00", "2017-03-17 06:00:00", "2017-03-17 09:00:00", "2017-03-17 12:00:00", "2017-03-17 15:00:00", "2017-03-17 18:00:00", "2017-03-17 21:00:00", "2017-03-18 00:00:00", "2017-03-18 03:00:00", "2017-03-18 06:00:00", "2017-03-18 09:00:00", "2017-03-18 12:00:00", "2017-03-18 15:00:00", "2017-03-18 18:00:00", "2017-03-18 21:00:00", "2017-03-19 00:00:00", "2017-03-19 03:00:00", "2017-03-19 06:00:00", "2017-03-19 09:00:00", "2017-03-19 12:00:00", "2017-03-19 15:00:00", "2017-03-19 18:00:00", "2017-03-19 21:00:00", "2017-03-20 00:00:00", "2017-03-20 03:00:00", "2017-03-20 06:00:00", "2017-03-20 09:00:00", "2017-03-20 12:00:00", "2017-03-20 15:00:00", "2017-03-20 18:00:00", "2017-03-20 21:00:00", "2017-03-21 00:00:00", "2017-03-21 03:00:00", "2017-03-21 06:00:00", "2017-03-21 09:00:00", "2017-03-21 12:00:00", "2017-03-21 15:00:00", "2017-03-21 18:00:00", "2017-03-21 21:00:00"],
				"Count_RC3": [55, 4, 136, 102, 135, 84, 82, 126, 105, 50, 62, 12, 144, 16, 88, 126, 129, 114, 30, 35, 51, 103, 130, 119, 31, 54, 134, 130, 146, 118, 146, 98, 33, 119, 42, 40, 51, 48, 21, 21, 103, 100, 35, 99, 57, 34, 35, 74, 14, 128, 71, 69, 80, 85, 51, 126, 119, 67, 90, 114, 63, 41, 134, 34, 1, 97, 2, 41, 12, 119, 122, 32, 143, 98, 105, 47, 32, 143, 100, 11, 116, 95, 139, 110, 57, 101, 78, 105, 146, 139, 22, 27, 97, 134, 13, 120, 16, 140, 18, 19, 92, 129, 12, 48, 2, 148, 62, 49, 103, 125, 56, 60, 19, 99, 18, 20, 88, 31, 83, 33, 146, 146, 131, 132, 89, 79, 121, 118, 8, 15, 61, 75, 109, 144, 142, 69, 90, 98, 118, 70, 50, 81, 36, 0, 41, 81, 69, 111, 39, 67, 50, 104, 136, 47, 53, 133, 61, 55, 107, 40, 27, 107, 7, 24, 30, 29, 137, 141, 141, 106, 50, 62, 150, 103, 25, 61, 17, 123, 24, 111, 139, 114, 143, 85, 102, 2, 1, 94, 32, 36, 140, 101, 5, 145, 144, 16, 96, 54, 107, 49, 136, 102, 107, 33, 103, 59, 102, 90, 18, 150, 134, 0, 2, 86, 129, 150, 106, 51, 9, 42, 43, 38, 53, 146, 85, 17, 99, 131, 43, 123, 85, 68, 10, 0, 127, 61, 94, 63, 104, 61]
			};
			_this.renderChart("Dash3", data);
			/*
   services.getOneMonth(function(data) {
   	_this.renderChart("Dash3", data);
   }, function() {
   		console.log("fail");
   });*/
			this.oneHourObject.clicked = false;
			this.oneDayObject.clicked = false;
			this.sevenDayObject.clicked = false;
			this.monthClassObject.clicked = true;
		},
		toggleTimeSelect: function toggleTimeSelect() {
			this.ifShowDateSelection = !this.ifShowDateSelection;
			this.initDatePicker();
		},
		saveSelect: function saveSelect() {
			this.ifShowDateSelection = false;
		},
		/*
  		toggleClassObject: function() {
  			this.classObjectAuto.switchOff = !this.classObjectAuto.switchOff;
  			this.classObjectAuto.switchOn = !this.classObjectAuto.switchOn;
  		},*/
		initDatePicker: function initDatePicker() {
			// Date.now方法返回当前距离1970年1月1日 00:00:00 UTC的毫秒数（Unix时间戳乘以1000）。
			var nowMilliseconds = Date.now();
			// 当前时区与格林威治时间的毫秒差值
			var timeZoneDiff = new Date().getTimezoneOffset() * 60000;
			// 校正后的毫秒数
			var localMilliseconds = nowMilliseconds - timeZoneDiff;
			//var localTimeNumLastHour = nowNum - timeZoneDiff - 3600000;

			var now = new Date(localMilliseconds); // localTime Date Object
			var nowStr = now.toJSON();
			// var localTimeLastHour = new Date(localTimeNumLastHour);
			// var localTimeStrLastHourStr = localTimeLastHour.toJSON();
			this.selectInput.today = now;
			this.selectInput.endDate = nowStr.slice(0, 10);
			this.selectInput.endHour = parseInt(nowStr.slice(11, 14));
			this.selectInput.endMinute = parseInt(nowStr.slice(14, 17));
			/* last hour data
   this.selectInput.startDate = localTimeStrLastHourStr.slice(0, 10);
   this.selectInput.startHour = parseInt(localTimeStrLastHourStr.slice(11, 14));
   this.selectInput.startMinute = parseInt(localTimeStrLastHourStr.slice(14,
   	17));*/
			this.selectInput.startDate = nowStr.slice(0, 10);
			this.selectInput.startHour = parseInt(nowStr.slice(11, 14));
			this.selectInput.startMinute = 0;
		}
	},
	mounted: function mounted() {
		var pickerStart = new Pikaday({
			field: document.getElementById('dateStart')
		});
		pickerStart.toString('YYYY-MM-DD');
		var pickerEnd = new Pikaday({
			field: document.getElementById('dateEnd')
		});
		pickerEnd.toString('YYYY-MM-DD');
		this.initDatePicker();

		var _this = this;
		var data = {
			"Count_RC4": [15, 7, 10, 14, 17, 4, 7, 1, 6, 1, 4, 7, 18, 0, 13, 9, 19, 12, 19, 20, 14, 10, 3, 18, 8, 19, 10, 14, 20, 10, 9, 17, 9, 19, 10, 19, 14, 2, 12, 6, 0, 16, 0, 16, 20, 0, 2, 4, 14, 19, 8, 10, 14, 12, 9, 14, 19, 1, 2, 14, 16, 19, 19, 16, 17, 14, 6, 3, 3, 7, 16, 8, 9, 8, 14, 13, 0, 15, 14, 18, 2, 3, 8, 14, 0, 0, 15, 8, 15, 12, 6, 8, 18, 9, 19, 15],
			"Count_RC5": [2, 6, 0, 0, 0, 1, 2, 5, 0, 5, 8, 0, 0, 2, 2, 1, 2, 9, 0, 9, 4, 5, 6, 1, 10, 4, 7, 9, 10, 3, 1, 3, 4, 8, 10, 5, 10, 10, 8, 2, 6, 5, 5, 4, 3, 0, 8, 8, 9, 7, 8, 4, 3, 10, 2, 2, 6, 6, 7, 2, 1, 0, 1, 7, 6, 7, 1, 6, 9, 9, 5, 6, 2, 6, 1, 0, 1, 10, 10, 5, 8, 4, 5, 4, 7, 1, 0, 4, 5, 2, 6, 5, 10, 7, 5, 10],
			"Count_OverThreshold": [74, 74, 66, 32, 60, 24, 77, 21, 86, 64, 86, 30, 21, 28, 20, 62, 63, 38, 28, 26, 77, 85, 50, 66, 54, 35, 71, 40, 67, 56, 21, 40, 71, 55, 27, 83, 80, 21, 83, 36, 26, 43, 39, 39, 22, 50, 30, 78, 76, 63, 82, 26, 57, 81, 60, 39, 83, 37, 84, 25, 35, 64, 53, 31, 39, 27, 85, 57, 87, 75, 75, 27, 81, 67, 59, 55, 72, 33, 80, 31, 39, 80, 72, 42, 27, 36, 90, 83, 87, 37, 27, 34, 60, 72, 76, 67],
			"AverageElapsed_All": [1950, 2395, 2096, 1559, 1510, 2474, 2324, 1462, 2088, 1821, 1331, 2332, 2387, 2457, 1926, 2173, 2125, 1764, 1404, 1307, 1410, 2131, 2285, 1432, 2100, 1481, 2209, 1834, 2429, 2367, 2445, 1571, 2092, 2188, 1785, 2229, 1543, 2010, 1411, 1669, 2184, 2053, 1775, 2252, 1977, 2372, 1697, 2280, 1716, 2050, 2173, 1674, 2222, 2197, 1325, 2162, 1759, 2178, 1537, 2054, 1801, 1863, 1512, 2118, 2429, 1816, 2127, 2058, 1640, 1952, 1383, 1506, 2191, 1780, 1811, 1937, 1368, 1512, 1393, 2009, 1895, 2090, 1810, 2168, 2171, 2063, 2242, 2050, 2119, 2189, 1929, 2393, 1380, 1810, 1453, 2286],
			"AverageElapsed_less5s": [3525, 3871, 4105, 3673, 4853, 3746, 3439, 3489, 1905, 1971, 1311, 3850, 4546, 3755, 4247, 2963, 4277, 3508, 2169, 4933, 1784, 4859, 2851, 4595, 1389, 3725, 1861, 3809, 4710, 3587, 3642, 4913, 2789, 3982, 3715, 2503, 2456, 3761, 1313, 2382, 1979, 1837, 3033, 1820, 1858, 1223, 4758, 3897, 4647, 2043, 4357, 2103, 3228, 2918, 1513, 1514, 4367, 1852, 4436, 4413, 3172, 3285, 3365, 2671, 2794, 4396, 3044, 4317, 3973, 3625, 2482, 4820, 4196, 2527, 4307, 3820, 1751, 1427, 3704, 3642, 1978, 2554, 3419, 4500, 1271, 4009, 1820, 2048, 1944, 2660, 3581, 3642, 1714, 3695, 4287, 1275],
			"Count_RC2": [4523, 3607, 3064, 3006, 3020, 2860, 4929, 4669, 4152, 3100, 4797, 4503, 3931, 3366, 4468, 4771, 3672, 4165, 4217, 3902, 3325, 3998, 4181, 3668, 3005, 2850, 4988, 4212, 3323, 4383, 4403, 4989, 4556, 4201, 4159, 4589, 3362, 4388, 4372, 4382, 4147, 4606, 3996, 3696, 3856, 2986, 3324, 4625, 2810, 4520, 4601, 2994, 3490, 4282, 2553, 4268, 3596, 4569, 4817, 4595, 3963, 3407, 3547, 4186, 3310, 4141, 3867, 4481, 3239, 3508, 2999, 4774, 3134, 2924, 4773, 2907, 3914, 3401, 3728, 3385, 4613, 3088, 4079, 4211, 3879, 3044, 4281, 3968, 4042, 4184, 4895, 3635, 4584, 4758, 4530, 3812],
			"AverageElapsed_over5s": [10551, 5384, 8165, 6866, 8755, 11264, 12207, 9674, 7968, 6639, 8990, 11340, 7955, 6704, 5642, 7565, 5816, 10337, 12277, 5234, 7279, 7438, 12160, 12237, 8177, 10427, 6574, 7321, 5667, 9920, 11447, 8946, 10949, 7704, 5620, 11699, 5895, 8775, 5504, 9159, 11443, 9483, 7582, 7735, 5434, 9442, 8767, 11117, 9920, 10585, 7382, 7868, 6783, 8582, 8794, 10907, 8334, 11575, 8700, 7037, 9044, 7830, 8369, 8902, 6995, 10570, 5450, 9011, 12493, 7983, 10988, 10108, 6057, 5876, 7181, 6887, 8334, 6138, 5547, 12050, 8646, 7223, 10759, 5293, 6799, 5335, 11334, 11576, 11900, 9531, 10498, 12059, 7310, 10119, 8768, 6188],
			"timepoint": ["2017-03-29 00:15:00", "2017-03-29 00:30:00", "2017-03-29 00:45:00", "2017-03-29 01:00:00", "2017-03-29 01:15:00", "2017-03-29 01:30:00", "2017-03-29 01:45:00", "2017-03-29 02:00:00", "2017-03-29 02:15:00", "2017-03-29 02:30:00", "2017-03-29 02:45:00", "2017-03-29 03:00:00", "2017-03-29 03:15:00", "2017-03-29 03:30:00", "2017-03-29 03:45:00", "2017-03-29 04:00:00", "2017-03-29 04:15:00", "2017-03-29 04:30:00", "2017-03-29 04:45:00", "2017-03-29 05:00:00", "2017-03-29 05:15:00", "2017-03-29 05:30:00", "2017-03-29 05:45:00", "2017-03-29 06:00:00", "2017-03-29 06:15:00", "2017-03-29 06:30:00", "2017-03-29 06:45:00", "2017-03-29 07:00:00", "2017-03-29 07:15:00", "2017-03-29 07:30:00", "2017-03-29 07:45:00", "2017-03-29 08:00:00", "2017-03-29 08:15:00", "2017-03-29 08:30:00", "2017-03-29 08:45:00", "2017-03-29 09:00:00", "2017-03-29 09:15:00", "2017-03-29 09:30:00", "2017-03-29 09:45:00", "2017-03-29 10:00:00", "2017-03-29 10:15:00", "2017-03-29 10:30:00", "2017-03-29 10:45:00", "2017-03-29 11:00:00", "2017-03-29 11:15:00", "2017-03-29 11:30:00", "2017-03-29 11:45:00", "2017-03-29 12:00:00", "2017-03-29 12:15:00", "2017-03-29 12:30:00", "2017-03-29 12:45:00", "2017-03-29 13:00:00", "2017-03-29 13:15:00", "2017-03-29 13:30:00", "2017-03-29 13:45:00", "2017-03-29 14:00:00", "2017-03-29 14:15:00", "2017-03-29 14:30:00", "2017-03-29 14:45:00", "2017-03-29 15:00:00", "2017-03-29 15:15:00", "2017-03-29 15:30:00", "2017-03-29 15:45:00", "2017-03-29 16:00:00", "2017-03-29 16:15:00", "2017-03-29 16:30:00", "2017-03-29 16:45:00", "2017-03-29 17:00:00", "2017-03-29 17:15:00", "2017-03-29 17:30:00", "2017-03-29 17:45:00", "2017-03-29 18:00:00", "2017-03-29 18:15:00", "2017-03-29 18:30:00", "2017-03-29 18:45:00", "2017-03-29 19:00:00", "2017-03-29 19:15:00", "2017-03-29 19:30:00", "2017-03-29 19:45:00", "2017-03-29 20:00:00", "2017-03-29 20:15:00", "2017-03-29 20:30:00", "2017-03-29 20:45:00", "2017-03-29 21:00:00", "2017-03-29 21:15:00", "2017-03-29 21:30:00", "2017-03-29 21:45:00", "2017-03-29 22:00:00", "2017-03-29 22:15:00", "2017-03-29 22:30:00", "2017-03-29 22:45:00", "2017-03-29 23:00:00", "2017-03-29 23:15:00", "2017-03-29 23:30:00", "2017-03-29 23:45:00", "2017-03-30 00:00:00"],
			"Count_RC3": [33, 21, 38, 15, 45, 21, 31, 40, 27, 50, 25, 50, 45, 40, 30, 30, 37, 10, 41, 34, 19, 12, 42, 44, 33, 48, 27, 37, 35, 43, 22, 31, 14, 41, 16, 23, 15, 38, 42, 13, 45, 38, 31, 32, 21, 43, 42, 38, 42, 12, 42, 39, 30, 24, 22, 26, 21, 21, 25, 39, 46, 19, 44, 50, 38, 20, 23, 26, 42, 28, 49, 24, 36, 18, 15, 38, 15, 31, 45, 40, 30, 50, 29, 40, 26, 32, 16, 18, 34, 48, 50, 12, 24, 35, 43, 39]
		};
		_this.renderChart("Dash3", data);

		var test_count = null;
		var test_time = null;
		var date_time = "2017-05-09";
		var oneDayTimePoint = [];
		var oneDayElapse = [];
		var oneDay2XX = [];
		var oneDay3XX = [];
		var oneDay4XX = [];
		var oneDay5XX = [];
		_services.services.getOneDayCount(function (test_count) {
			console.log(test_count);
			for (var i in test_count) {
				oneDayTimePoint.push(test_count[i].timepoint);
				oneDay2XX.push(test_count[i].count_2xx);
				oneDay3XX.push(test_count[i].count_3xx);
				oneDay4XX.push(test_count[i].count_4xx);
				oneDay5XX.push(test_count[i].count_5xx);
			}
			_services.services.getOneDayTime(function (test_time) {
				console.log(test_time);
				for (var _i in test_time) {
					oneDayElapse.push(test_time[_i].average_elapsed);
				}
				console.log(oneDayTimePoint);
				console.log(oneDayElapse);
				console.log(oneDay2XX);
				console.log(oneDay3XX);
				console.log(oneDay4XX);
				console.log(oneDay5XX);
				_this.renderChartNew("Dash4", oneDayTimePoint, oneDayElapse, oneDay2XX, oneDay3XX, oneDay4XX, oneDay5XX);
			}, function () {
				console.log("fail");
			}, date_time);
		}, function () {
			console.log("fail");
		}, date_time);
	},
	components: {
		"m-histogram": _indexWidget.widgetIndex.mHistogram
	}
};
// local components in this page
/*jshint esversion: 6 */
exports.componentIndex = componentIndex;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*jshint esversion: 6 */
var chart = {
    oneHour: {
        "AverageElapsed2": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 2281],
        "AverageElapsed": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 2281],
        "Count_RC4": [5, 12, 11, 17, 4, 30, 6, 5, 6, 30, 0, 7, 6, 8, 4, 12, 8, 9, 10, 16, 13, 16, 14, 11, 24, 8, 14, 34, 17, 18, 9, 16, 30, 32, 21, 17, 14, 13, 8, 17, 25, 20, 5, 11, 14, 16, 11, 13, 4, 6, 4, 19, 5, 19, 1, 16, 12, 17, 6],
        "AverageElapsed1": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 2281],
        "Count_OverThreshold": [122, 152, 150, 127, 147, 92, 70, 68, 42, 56, 57, 43, 48, 41, 70, 30, 73, 64, 51, 27, 36, 28, 42, 73, 387, 239, 103, 93, 107, 77, 56, 66, 83, 82, 60, 61, 42, 111, 81, 150, 182, 28, 21, 53, 100, 14, 20, 34, 13, 49, 28, 25, 57, 51, 66, 69, 30, 62, 29],
        "Count_RC3": [1, 6, 8, 1, 3, 16, 17, 9, 17, 8, 24, 41, 17, 17, 12, 11, 33, 15, 23, 26, 58, 31, 49, 36, 30, 39, 47, 35, 33, 32, 34, 31, 23, 21, 18, 22, 37, 22, 34, 12, 42, 15, 16, 11, 31, 41, 44, 36, 46, 55, 62, 61, 61, 63, 98, 52, 57, 54, 54],
        "Count_RC5": [0, 6, 2, 2, 0, 3, 4, 4, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1],
        "Count_RC2": [2522, 2071, 2828, 3062, 1691, 1931, 1307, 1790, 1514, 1703, 1289, 1657, 1460, 1641, 2623, 2556, 2798, 2265, 2035, 1815, 1208, 1051, 1311, 1283, 1410, 3316, 4579, 4740, 5428, 4886, 1961, 1268, 2199, 4598, 4741, 2936, 1825, 1588, 1708, 2776, 4981, 5034, 4858, 4791, 4068, 4641, 5369, 4852, 2622, 2799, 3530, 4792, 4763, 4060, 4163, 2886, 2231, 2758, 1486],
        "timepoint": ["2017-03-06 00:01:00", "2017-03-06 00:02:00", "2017-03-06 00:03:00", "2017-03-06 00:04:00", "2017-03-06 00:05:00", "2017-03-06 00:06:00", "2017-03-06 00:07:00", "2017-03-06 00:08:00", "2017-03-06 00:09:00", "2017-03-06 00:10:00", "2017-03-06 00:11:00", "2017-03-06 00:12:00", "2017-03-06 00:13:00", "2017-03-06 00:14:00", "2017-03-06 00:15:00", "2017-03-06 00:16:00", "2017-03-06 00:17:00", "2017-03-06 00:18:00", "2017-03-06 00:19:00", "2017-03-06 00:20:00", "2017-03-06 00:21:00", "2017-03-06 00:22:00", "2017-03-06 00:23:00", "2017-03-06 00:24:00", "2017-03-06 00:25:00", "2017-03-06 00:26:00", "2017-03-06 00:27:00", "2017-03-06 00:28:00", "2017-03-06 00:29:00", "2017-03-06 00:30:00", "2017-03-06 00:31:00", "2017-03-06 00:32:00", "2017-03-06 00:33:00", "2017-03-06 00:34:00", "2017-03-06 00:35:00", "2017-03-06 00:36:00", "2017-03-06 00:37:00", "2017-03-06 00:38:00", "2017-03-06 00:39:00", "2017-03-06 00:40:00", "2017-03-06 00:41:00", "2017-03-06 00:42:00", "2017-03-06 00:43:00", "2017-03-06 00:44:00", "2017-03-06 00:45:00", "2017-03-06 00:46:00", "2017-03-06 00:47:00", "2017-03-06 00:48:00", "2017-03-06 00:49:00", "2017-03-06 00:50:00", "2017-03-06 00:51:00", "2017-03-06 00:52:00", "2017-03-06 00:53:00", "2017-03-06 00:54:00", "2017-03-06 00:55:00", "2017-03-06 00:56:00", "2017-03-06 00:57:00", "2017-03-06 00:58:00", "2017-03-06 00:59:00"]
    },
    threeHour: {
        "AverageElapsed2": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 2281],
        "AverageElapsed": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 2281],
        "Count_RC4": [5, 12, 11, 17, 4, 30, 6, 5, 6, 30, 0, 7, 6, 8, 4, 12, 8, 9, 10, 16, 13, 16, 14, 11, 24, 8, 14, 34, 17, 18, 9, 16, 30, 32, 21, 17, 14, 13, 8, 17, 25, 20, 5, 11, 14, 16, 11, 13, 4, 6, 4, 19, 5, 19, 1, 16, 12, 17, 6],
        "AverageElapsed1": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 2281],
        "Count_OverThreshold": [122, 152, 150, 127, 147, 92, 70, 68, 42, 56, 57, 43, 48, 41, 70, 30, 73, 64, 51, 27, 36, 28, 42, 73, 387, 239, 103, 93, 107, 77, 56, 66, 83, 82, 60, 61, 42, 111, 81, 150, 182, 28, 21, 53, 100, 14, 20, 34, 13, 49, 28, 25, 57, 51, 66, 69, 30, 62, 29],
        "Count_RC3": [1, 6, 8, 1, 3, 16, 17, 9, 17, 8, 24, 41, 17, 17, 12, 11, 33, 15, 23, 26, 58, 31, 49, 36, 30, 39, 47, 35, 33, 32, 34, 31, 23, 21, 18, 22, 37, 22, 34, 12, 42, 15, 16, 11, 31, 41, 44, 36, 46, 55, 62, 61, 61, 63, 98, 52, 57, 54, 54],
        "Count_RC5": [0, 6, 2, 2, 0, 3, 4, 4, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1],
        "Count_RC2": [2522, 2071, 2828, 3062, 1691, 1931, 1307, 1790, 1514, 1703, 1289, 1657, 1460, 1641, 2623, 2556, 2798, 2265, 2035, 1815, 1208, 1051, 1311, 1283, 1410, 3316, 4579, 4740, 5428, 4886, 1961, 1268, 2199, 4598, 4741, 2936, 1825, 1588, 1708, 2776, 4981, 5034, 4858, 4791, 4068, 4641, 5369, 4852, 2622, 2799, 3530, 4792, 4763, 4060, 4163, 2886, 2231, 2758, 1486],
        "timepoint": ["2017-03-08 03:00:00", "2017-03-08 03:05:00", "2017-03-08 03:10:00", "2017-03-08 03:15:00", "2017-03-08 03:20:00", "2017-03-08 03:25:00", "2017-03-08 03:30:00", "2017-03-08 03:35:00", "2017-03-08 03:40:00", "2017-03-08 03:45:00", "2017-03-08 03:50:00", "2017-03-08 03:55:00", "2017-03-08 04:00:00", "2017-03-08 04:05:00", "2017-03-08 04:10:00", "2017-03-08 04:15:00", "2017-03-08 04:20:00", "2017-03-08 04:25:00", "2017-03-08 04:30:00", "2017-03-08 04:35:00", "2017-03-08 04:40:00", "2017-03-08 04:45:00", "2017-03-08 04:50:00", "2017-03-08 04:55:00", "2017-03-08 05:00:00", "2017-03-08 05:05:00", "2017-03-08 05:10:00", "2017-03-08 05:15:00", "2017-03-08 05:20:00", "2017-03-08 05:25:00", "2017-03-08 05:30:00", "2017-03-08 05:35:00", "2017-03-08 05:40:00", "2017-03-08 05:45:00", "2017-03-08 05:50:00", "2017-03-08 05:55:00", "2017-03-08 06:00:00", "2017-03-08 06:05:00", "2017-03-08 06:10:00", "2017-03-08 06:15:00", "2017-03-08 06:20:00", "2017-03-08 06:25:00", "2017-03-08 06:30:00", "2017-03-08 06:35:00", "2017-03-08 06:40:00", "2017-03-08 06:45:00", "2017-03-08 06:50:00", "2017-03-08 06:55:00", "2017-03-08 07:00:00", "2017-03-08 07:05:00", "2017-03-08 07:10:00", "2017-03-08 07:15:00", "2017-03-08 07:20:00", "2017-03-08 07:25:00", "2017-03-08 07:30:00", "2017-03-08 07:35:00", "2017-03-08 07:40:00", "2017-03-08 07:45:00", "2017-03-08 07:50:00"]
    },
    sixHour: {
        "AverageElapsed2": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 2281],
        "AverageElapsed": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 2281],
        "Count_RC4": [5, 12, 11, 17, 4, 30, 6, 5, 6, 30, 0, 7, 6, 8, 4, 12, 8, 9, 10, 16, 13, 16, 14, 11, 24, 8, 14, 34, 17, 18, 9, 16, 30, 32, 21, 17, 14, 13, 8, 17, 25, 20, 5, 11, 14, 16, 11, 13, 4, 6, 4, 19, 5, 19, 1, 16, 12, 17, 6],
        "AverageElapsed1": [927, 1506, 4289, 1033, 902, 2158, 883, 1091, 1497, 2914, 1323, 2525, 4388, 1278, 1470, 1348, 1671, 3335, 1160, 911, 1492, 1481, 1510, 1229, 896, 1393, 1068, 945, 991, 1129, 997, 1082, 1048, 1159, 952, 960, 1654, 1254, 1121, 816, 1433, 965, 825, 830, 1122, 1112, 1333, 1161, 1527, 1053, 891, 1210, 1219, 1042, 1037, 1035, 858, 1232, 2281],
        /*
            "Count_OverThreshold": [
                122,
                152,
                150,
                127,
                147,
                92,
                70,
                68,
                42,
                56,
                57,
                43,
                48,
                41,
                70,
                30,
                73,
                64,
                51,
                27,
                36,
                28,
                42,
                73,
                387,
                239,
                103,
                93,
                107,
                77,
                56,
                66,
                83,
                82,
                60,
                61,
                42,
                111,
                81,
                150,
                182,
                28,
                21,
                53,
                100,
                14,
                20,
                34,
                13,
                49,
                28,
                25,
                57,
                51,
                66,
                69,
                30,
                62,
                29
            ],
            */
        "Count_RC3": [1, 6, 8, 1, 3, 16, 17, 9, 17, 8, 24, 41, 17, 17, 12, 11, 33, 15, 23, 26, 58, 31, 49, 36, 30, 39, 47, 35, 33, 32, 34, 31, 23, 21, 18, 22, 37, 22, 34, 12, 42, 15, 16, 11, 31, 41, 44, 36, 46, 55, 62, 61, 61, 63, 98, 52, 57, 54, 54],
        "Count_RC5": [0, 6, 2, 2, 0, 3, 4, 4, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1],
        "Count_RC2": [2522, 2071, 2828, 3062, 1691, 1931, 1307, 1790, 1514, 1703, 1289, 1657, 1460, 1641, 2623, 2556, 2798, 2265, 2035, 1815, 1208, 1051, 1311, 1283, 1410, 3316, 4579, 4740, 5428, 4886, 1961, 1268, 2199, 4598, 4741, 2936, 1825, 1588, 1708, 2776, 4981, 5034, 4858, 4791, 4068, 4641, 5369, 4852, 2622, 2799, 3530, 4792, 4763, 4060, 4163, 2886, 2231, 2758, 1486],
        "timepoint": ["2017-03-08 00:00:00", "2017-03-08 00:10:00", "2017-03-08 00:20:00", "2017-03-08 00:30:00", "2017-03-08 00:40:00", "2017-03-08 00:50:00", "2017-03-08 01:00:00", "2017-03-08 01:10:00", "2017-03-08 01:20:00", "2017-03-08 01:30:00", "2017-03-08 01:40:00", "2017-03-08 01:50:00", "2017-03-08 02:00:00", "2017-03-08 02:10:00", "2017-03-08 02:20:00", "2017-03-08 02:30:00", "2017-03-08 02:40:00", "2017-03-08 02:50:00", "2017-03-08 03:00:00", "2017-03-08 03:10:00", "2017-03-08 03:20:00", "2017-03-08 03:30:00", "2017-03-08 03:40:00", "2017-03-08 03:50:00", "2017-03-08 04:00:00", "2017-03-08 04:10:00", "2017-03-08 04:20:00", "2017-03-08 04:30:00", "2017-03-08 04:40:00", "2017-03-08 04:50:00", "2017-03-08 05:00:00", "2017-03-08 05:10:00", "2017-03-08 05:20:00", "2017-03-08 05:30:00", "2017-03-08 05:40:00", "2017-03-08 05:50:00", "2017-03-08 06:00:00", "2017-03-08 06:10:00", "2017-03-08 06:20:00", "2017-03-08 06:30:00", "2017-03-08 06:40:00", "2017-03-08 06:50:00", "2017-03-08 06:00:00", "2017-03-08 06:10:00", "2017-03-08 06:20:00", "2017-03-08 06:30:00", "2017-03-08 06:40:00", "2017-03-08 06:50:00", "2017-03-08 07:00:00", "2017-03-08 07:30:00", "2017-03-08 08:00:00", "2017-03-08 08:30:00", "2017-03-08 09:00:00", "2017-03-08 09:30:00", "2017-03-08 10:00:00", "2017-03-08 10:30:00", "2017-03-08 11:00:00", "2017-03-08 11:30:00", "2017-03-08 12:00:00"]
    }
};
exports.chart = chart;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.echartConfig = undefined;

var _chartData = __webpack_require__(20);

var echartConfig = {
    oldVersion: {
        legend: [{
            show: true,
            top: '0%',
            left: '5%',
            itemGap: 20,
            itemWidth: 25,
            selected: {
                "2XX": true,
                "3XX": false,
                "4XX": false,
                "5XX": false
            },
            data: ["2XX", "3XX", "4XX", "5XX"]
        }, {
            show: true,
            top: '0%',
            right: '5%',
            itemGap: 20,
            itemWidth: 25,
            selected: {
                "Overall": false,
                "Time > 5s": true,
                "Time < 5s": false
            },
            data: ["Overall", "Time < 5s", "Time > 5s"]
        }],
        tooltip: {
            show: true,
            trigger: 'axis',
            alwaysShowContent: false,
            axisPointer: {
                animation: true,
                type: 'line',
                lineStyle: {
                    color: 'rgba(0,0,0,0.2)',
                    width: 1,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
            padding: 5,
            //formatter: '{b}<br />"{a}":{c}',
            textStyle: {
                color: '#000'
            },
            backgroundColor: 'rgba(225,232,238,1)',
            borderWidth: 1,
            borderColor: '#008571'
        },
        dataZoom: [{
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            top: 'bottom',
            xAxisIndex: [0]
        }],
        xAxis: [{
            offset: 0,
            nameLocation: 'end',
            //type: 'time',
            //boundaryGap : false,
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: 'rgba(0,0,0,1)',
                    width: '1'
                }
            },
            axisTick: {
                length: 10,
                lineStyle: {
                    color: 'rgba(0,0,0,.3)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(0,0,0,1)"
                }
            }
        }],
        yAxis: [{
            offset: 0,
            min: 0,
            max: 10000,
            name: 'RequestCount',
            nameGap: 20,
            nameTextStyle: {
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12
            },
            type: 'value',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                show: true,
                formatter: '{value}rpm'
            },
            splitLine: {
                show: false
            }
        }, { // 平均响应时间的轴，位于左侧
            offset: 0,
            name: 'AverageResponseTime(ms)',
            nameGap: 20,
            nameTextStyle: {
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12
            },
            type: 'value',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                formatter: '{value} ms'
            },
            splitLine: {
                show: true
            }
        }],
        series: [{
            name: '2XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 113, 113, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#008571',
                    shadowColor: 'rgba(0, 113, 113, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: '3XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(18, 18, 18, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#121212',
                    shadowColor: 'rgba(18, 18, 18, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: '4XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(239, 193, 0, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#EFC100',
                    shadowColor: 'rgba(239, 193, 0, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: '5XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(255, 80, 3, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#FF5003',
                    shadowColor: 'rgba(255, 80, 3, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: 'Overall',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 1,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(252, 153, 60, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#FC993C',
                    shadowColor: 'rgba(252, 153, 60, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: 'Time < 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 1,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(90, 167, 0, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#5AA700',
                    shadowColor: 'rgba(90, 167, 0, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: 'Time > 5s',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 1,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(231, 29, 50, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#E71D32',
                    shadowColor: 'rgba(231, 29, 50, 0.3)',
                    shadowBlur: 4
                }
            }
        }]
    },
    newVersion: {
        legend: [{
            show: true,
            top: '0%',
            left: '5%',
            itemGap: 20,
            itemWidth: 25,
            selected: {
                "2XX": true,
                "3XX": false,
                "4XX": false,
                "5XX": false
            },
            data: ["2XX", "3XX", "4XX", "5XX"]
        }, {
            show: true,
            top: '0%',
            right: '5%',
            itemGap: 20,
            itemWidth: 25,
            selected: {
                "Overall": true
            },
            data: ["Overall"]
        }],
        tooltip: {
            show: true,
            trigger: 'axis',
            alwaysShowContent: false,
            axisPointer: {
                animation: true,
                type: 'line',
                lineStyle: {
                    color: 'rgba(0,0,0,0.2)',
                    width: 1,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
            padding: 5,
            //formatter: '{b}<br />"{a}":{c}',
            textStyle: {
                color: '#000'
            },
            backgroundColor: 'rgba(225,232,238,1)',
            borderWidth: 1,
            borderColor: '#008571'
        },
        dataZoom: [{
            type: 'inside',
            realtime: true,
            start: 0,
            end: 3,
            xAxisIndex: [0]
        }, {
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 3,
            top: 'bottom',
            xAxisIndex: [0]
        }],
        xAxis: [{
            offset: 0,
            nameLocation: 'end',
            //type: 'time',
            //boundaryGap : false,
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: 'rgba(0,0,0,1)',
                    width: '1'
                }
            },
            axisTick: {
                length: 10,
                lineStyle: {
                    color: 'rgba(0,0,0,.3)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(0,0,0,1)"
                }
            }
        }],
        yAxis: [{
            offset: 0,
            name: 'RequestCount',
            nameGap: 20,
            nameTextStyle: {
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12
            },
            type: 'value',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                show: true,
                formatter: '{value}rpm'
            },
            splitLine: {
                show: false
            }
        }, { // 平均响应时间的轴，位于左侧
            offset: 0,
            name: 'AverageResponseTime(ms)',
            nameGap: 20,
            nameTextStyle: {
                color: 'rgba(0, 0, 0, 1)',
                fontSize: 12
            },
            type: 'value',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                formatter: '{value} ms'
            },
            splitLine: {
                show: true
            }
        }],
        series: [{
            name: '2XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 113, 113, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#008571',
                    shadowColor: 'rgba(0, 113, 113, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: '3XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(18, 18, 18, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#121212',
                    shadowColor: 'rgba(18, 18, 18, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: '4XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(239, 193, 0, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#EFC100',
                    shadowColor: 'rgba(239, 193, 0, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: '5XX',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 0,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(255, 80, 3, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#FF5003',
                    shadowColor: 'rgba(255, 80, 3, 0.3)',
                    shadowBlur: 4
                }
            }
        }, {
            name: 'Overall',
            type: 'line',
            symbol: 'circle',
            symbolSize: 5,
            yAxisIndex: 1,
            showAllSymbol: true,
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'rgba(231, 29, 50, 1)'
                }
            },
            lineStyle: {
                normal: {
                    color: '#E71D32',
                    shadowColor: 'rgba(231, 29, 50, 0.3)',
                    shadowBlur: 4
                }
            }
        }]
    }
}; /*jshint esversion: 6 */
exports.echartConfig = echartConfig;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.widgetIndex = undefined;

var _Histogram = __webpack_require__(44);

var _Histogram2 = _interopRequireDefault(_Histogram);

var _Tooltip = __webpack_require__(45);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */
var widgetIndex = {
    "mHistogram": {
        props: ["events", "timeLine"],
        template: _Histogram2.default,
        data: function data() {
            return {
                styleTooltip: {
                    position: "absolute",
                    left: 0,
                    top: 0
                },
                ifShowTooltip: false,
                eventObject: this.events[0],
                containerWidth: 0
            };
        },
        methods: {
            hover: function hover(evt) {
                if (evt.layerX < this.containerWidth * 0.5) {
                    this.styleTooltip.left = evt.layerX + 20 + "px";
                } else if (evt.layerX > this.containerWidth * 0.5) {
                    this.styleTooltip.left = evt.layerX - 160 + "px";
                }
                this.styleTooltip.top = evt.layerY + 20 + "px";

                if (evt.layerY > 60 && evt.layerY < 160) {
                    this.eventObject = this.events[0];
                    this.ifShowTooltip = true;
                } else if (evt.layerY > 160 && evt.layerY < 260) {
                    this.eventObject = this.events[1];
                    this.ifShowTooltip = true;
                } else if (evt.layerY > 260 && evt.layerY < 360) {
                    this.eventObject = this.events[2];
                    this.ifShowTooltip = true;
                } else {
                    this.ifShowTooltip = false;
                }
            },
            mouseLeave: function mouseLeave() {
                this.ifShowTooltip = false;
            },
            createYaxis: function createYaxis(ctx, width, height) {
                var yAxisEnd = height - 60;
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#333';
                ctx.beginPath();
                ctx.moveTo(60.5, 60);
                ctx.lineTo(60.5, yAxisEnd);
                ctx.stroke();
                /* axisTick */
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#999';
                /* Y */
                ctx.beginPath();
                ctx.moveTo(53, 160.5);
                ctx.lineTo(60, 160.5);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(53, 260.5);
                ctx.lineTo(60, 260.5);
                ctx.stroke();
            },
            createXaxis: function createXaxis(ctx, width, height, items, data) {
                var xAxisEnd = width - 60;
                var yAxisEnd = height - 60;
                var xAxisTextHeight = height - 60 + 20;
                var gridWidth = (width - 150) / (items - 1);
                ctx.font = "12px sans-serif";
                ctx.fillStyle = "#000";
                for (var i = 0; i < items; i++) {
                    var gridX = Math.round(i * gridWidth) + 35;
                    ctx.fillText(data[i].slice(11), gridX, xAxisTextHeight);
                }
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#333';
                ctx.beginPath();
                ctx.moveTo(60, 360.5);
                ctx.lineTo(xAxisEnd, 360.5);
                ctx.stroke();
                for (var _i = 1; _i < items; _i++) {
                    var _gridX = Math.round(_i * gridWidth) + 60.5;
                    ctx.beginPath();
                    ctx.moveTo(_gridX, yAxisEnd);
                    ctx.lineTo(_gridX, yAxisEnd + 7);
                    ctx.stroke();
                }
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#ccc';
                for (var _i2 = 1; _i2 < items; _i2++) {
                    var _gridX2 = Math.round(_i2 * gridWidth) + 60.5;
                    ctx.beginPath();
                    ctx.moveTo(_gridX2, 60);
                    ctx.lineTo(_gridX2, 360);
                    ctx.stroke();
                }
            },
            createBar: function createBar(ctx, width, height, events) {
                // the width pixels per second, total time 3minutes.
                var secondWidth = Math.round((width - 150) / 180);
                for (var i = 0; i < events.length; i++) {
                    var startSeconds = (Date.parse(events[i].startTime) - Date.parse(events[i].startTime.slice(0, 16))) / 1000;
                    var totalTime = events[i].totalTime;
                    var totalText = "totalTime: " + events[i].totalTime + "s";
                    ctx.font = "14px sans-serif";
                    ctx.fillStyle = "#000";
                    ctx.fillText("module name :  " + events[i].url, 60 + startSeconds * secondWidth, 100 + i * 100);
                    ctx.fillText(totalText, 60 + (startSeconds + totalTime) * secondWidth + 20, 123 + i * 100);
                    for (var j = 0; j < events[i].courses.length; j++) {
                        switch (events[i].courses[j].name) {
                            case "HTTP":
                                ctx.fillStyle = "#28CC9E"; //HTTP#55A44E
                                break;
                            case "Was":
                                ctx.fillStyle = "#FEF2A0"; //Was #D7C37A
                                break;
                            case "DB2":
                                ctx.fillStyle = "#0881A3"; //DB
                                break;
                            case "Cloudant":
                                ctx.fillStyle = "#41506B"; //Cloudant#263849
                                break;
                        }
                        ctx.fillRect(60 + startSeconds * secondWidth, 110 + i * 100, events[i].courses[j].duration * secondWidth, 20);
                        startSeconds += events[i].courses[j].duration;
                    }
                }
            },
            createLegend: function createLegend(ctx, width) {
                ctx.font = "12px sans-serif";
                ctx.fillStyle = "#000";
                ctx.fillText("HTTP", width * 0.35, 50);
                ctx.fillText("Was", width * 0.35 + 100, 50);
                ctx.fillText("DB2", width * 0.35 + 200, 50);
                ctx.fillText("Cloudant", width * 0.35 + 300, 50);
                ctx.fillStyle = "#28CC9E";
                ctx.fillRect(width * 0.35 - 50, 35, 40, 20);
                ctx.fillStyle = "#FEF2A0";
                ctx.fillRect(width * 0.35 + 100 - 50, 35, 40, 20);
                ctx.fillStyle = "#0881A3";
                ctx.fillRect(width * 0.35 + 200 - 50, 35, 40, 20);
                ctx.fillStyle = "#41506B";
                ctx.fillRect(width * 0.35 + 300 - 50, 35, 40, 20);
            },
            createHiDPICanvas: function createHiDPICanvas(w, h, ratio) {
                var can = document.getElementById("u-histogram");
                can.width = w * ratio;
                can.height = h * ratio;
                can.style.width = w + "px";
                can.style.height = h + "px";
                can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
                return can;
            },
            createCanvas: function createCanvas() {
                // for this function pls see http://www.html5rocks.com/
                var ratio = function () {
                    // On the iPad 3+, this ratio is 2
                    var ctx = document.createElement("canvas").getContext("2d"),
                        dpr = window.devicePixelRatio || 1,
                        bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;

                    return dpr / bsr;
                }();
                /* Parent DOM element use persentage-width to fit different screen
                   So use parent Dom's offsetWidth and offsetHeight to set
                   canvas tag's width and height
                */
                var container = document.getElementById("histogramContainer");
                var can = this.createHiDPICanvas(container.offsetWidth, container.offsetHeight, ratio);

                // test if browser support canvas
                if (can.getContext) {
                    var ctx = can.getContext("2d");
                    this.createYaxis(ctx, container.offsetWidth, container.offsetHeight);
                    this.createXaxis(ctx, container.offsetWidth, container.offsetHeight, 4, this.timeLine);
                    this.createLegend(ctx, container.offsetWidth);
                    this.createBar(ctx, container.offsetWidth, container.offsetHeight, this.events);
                }
            }
        },
        mounted: function mounted() {
            this.createCanvas();
        },
        components: {
            "m-tooltip": {
                props: ["event"],
                template: _Tooltip2.default
            }
        }
    }
};
exports.widgetIndex = widgetIndex;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.componentLogs = undefined;

var _logs = __webpack_require__(46);

var _logs2 = _interopRequireDefault(_logs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentLogs = {
	template: _logs2.default,
	data: function data() {
		return {
			errorsImageUrl: 'images/demo-logs.png'
		};
	},
	methods: {},
	created: function created() {},
	mounted: function mounted() {}
}; /*jshint esversion: 6 */
exports.componentLogs = componentLogs;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.componentMetrics = undefined;

var _metrics = __webpack_require__(47);

var _metrics2 = _interopRequireDefault(_metrics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentMetrics = {
	template: _metrics2.default,
	data: function data() {
		return {
			metricsImageUrl: 'images/demo-metrics.png'
		};
	},
	methods: {},
	created: function created() {},
	mounted: function mounted() {}
}; /*jshint esversion: 6 */
exports.componentMetrics = componentMetrics;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.componentSettings = undefined;

var _settings = __webpack_require__(48);

var _settings2 = _interopRequireDefault(_settings);

var _dialog = __webpack_require__(3);

var _tooltip = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentSettings = {
	template: _settings2.default,
	data: function data() {
		return {
			settingsImageUrl: 'images/demo-settings.jpg'
		};
	},
	methods: {},
	created: function created() {},
	mounted: function mounted() {
		/*Dialog.init({
  	title: 'TEST NOTIFICATION',
  	body: '<i>GET /test-slow-crash-gateway</i>'
  }).show();*/
	}
}; /*jshint esversion: 6 */
exports.componentSettings = componentSettings;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.componentTests = undefined;

var _tests = __webpack_require__(49);

var _tests2 = _interopRequireDefault(_tests);

var _dialog = __webpack_require__(3);

__webpack_require__(27);

var _tooltip = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1. 使用一个空的 Vue 实例作为中央事件总线
/*jshint esversion: 6 */
var bus = new Vue();
// 2. 通过维护一个对象数据来管理状态
var sourceState = {};

var componentTests = {
	template: _tests2.default,
	data: function data() {
		return {
			todos: [{
				text: 'Learn JavaScript',
				fulltext: 'Learn JavaScript - O\'relly Tom Kens'
			}, {
				text: 'Learn Vue',
				fulltext: 'Learn Vue - Gao Sheng Xi'
			}, {
				text: 'Build something awesome',
				fulltext: 'Build something awesome - 2017 3rd version'
			}],
			currentView: 'home',
			currentDialog: 'dialog1',
			title: '',
			body: '',
			tabsLabel: ['标签一', '标签二']
		};
	},
	methods: {
		newData: function newData() {
			var _this = this;

			this.$http.get('./files/_test.todos.json').then(function (response) {
				_this.todos = response.body;
			}, function (response) {});
		},
		showDialog: function showDialog() {
			this.title = 'Dialog 1';
			this.currentDialog = 'dialog1';
			this.body = 'Turpis cursus facilisis etiam pulvinar est feugiat pulvinar, porttitor ad curabitur curae hac sit, ad aliquam etiam lorem magna vestibulum ante nunc in et nibh venenatis placerat arcu.';
			_dialog.Dialog.show();
		},
		closeDialog: function closeDialog() {
			_dialog.Dialog.hide();
		},
		updateDialog: function updateDialog() {
			this.title = 'Dialog 2';
			this.currentDialog = 'dialog2';
			_dialog.Dialog.show();
		},
		switchComponent: function switchComponent() {
			this.currentView = this.currentView === 'debug' ? 'home' : 'debug';
		}
	},
	created: function created() {},
	mounted: function mounted() {
		/*Dialog.init({
  	title: 'TEST NOTIFICATION',
  	body: '<i>GET /test-slow-crash-gateway</i>'
  }).show();*/

		bus.$on('id-selected', function (id) {
			console.info('ID: ', id);
		});
		sourceState.name = 'wxyu';
	},
	updated: function updated() {
		console.info('数据有变化');
		console.info(sourceState.name);
	},
	components: {
		home: {
			template: '<b>动态组件1 {{ name }}</b>',
			data: function data() {
				return sourceState;
			}
		},
		debug: {
			template: '<b>动态组件2 {{ name }}</b>',
			data: function data() {
				return sourceState;
				//				return {
				//					name: '王小宇'
				//				};
			},
			mounted: function mounted() {
				var _this2 = this;

				console.info('动态组件挂载到DOM');

				bus.$emit('id-selected', 1001);
				this.name = 'helo';

				console.info(this.$data);
				setTimeout(function () {
					_this2.name = 'uuuuuu';
				}, 3000);
			}
		},
		dialog1: {
			template: '<b>弹窗1</b>'
		},
		dialog2: {
			template: '<b v-on:click="closeDialog">弹窗2，点击关闭</b>',
			methods: {
				closeDialog: function closeDialog() {
					_dialog.Dialog.hide();
				}
			}
		}
	}
};

var sourceOfTruth = {
	name: 100
};
var vmA = new Vue({
	data: sourceOfTruth,
	updated: function updated() {
		console.info('vmA data updated', this.sourceOfTruth);
	}
});
var vmB = new Vue({
	data: sourceOfTruth,
	updated: function updated() {
		console.info('vmB data updated', this.sourceOfTruth);
	}
});

console.info(vmB.name, vmA.name);
setTimeout(function () {
	sourceOfTruth.name = 21;
	console.info(vmB.name, vmA.name);
}, 3000);

exports.componentTests = componentTests;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tabs = __webpack_require__(35);

var _tabs2 = _interopRequireDefault(_tabs);

var _tab = __webpack_require__(34);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */
var state = new Vue();

Vue.component('m-tabs', {
	props: ['tabsLabel'],
	template: _tabs2.default,
	data: function data() {
		return {};
	},
	methods: {
		changeTab: function changeTab(e) {
			state.$emit('change', this.$props.tabsLabel.indexOf(e.target.innerHTML.trim()), e.target.parentNode.parentNode);
			e.target.parentNode.childNodes.forEach(function (el) {
				el.setAttribute('class', '');
			});
			e.target.setAttribute('class', 'active');
		}
	},
	created: function created() {},
	mounted: function mounted() {}
});

Vue.component('m-tab', {
	template: _tab2.default,
	data: function data() {
		return {};
	},
	methods: {},
	created: function created() {},
	mounted: function mounted() {
		this.$el.parentNode.querySelectorAll('.m-tab-content')[0].style.display = 'block';
		state.$on('change', function (idx, rootNode) {
			rootNode.querySelectorAll('.m-tab-content').forEach(function (e) {
				e.style.display = 'none';
			});
			rootNode.querySelectorAll('.m-tab-content')[idx].style.display = 'block';
		});
	}
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*jshint esversion: 6 */
// Github - vue-resource: https://github.com/pagekit/vue-resource

var services = {};

services.getOneHour = function (success, fail) {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
    // url exception
    Vue.http.get('http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/querydata/1hour').then(function (response) {
        success(response.body);
    }, function (response) {
        console.warn('Get user info service: [' + response.status + '] ' + response.statusText);
        fail();
    });
};
services.getOneDay = function (success, fail) {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
    // url exception
    Vue.http.get('http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/querydata/1day').then(function (response) {
        success(response.body);
    }, function (response) {
        console.warn('Get user info service: [' + response.status + '] ' + response.statusText);
        fail();
    });
};
services.getOneDayCount = function (success, fail, date_time) {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/  chart数据
    // url exception
    Vue.http.get('http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/get_urltype/' + date_time).then(function (response) {
        success(response.body);
    }, function (response) {
        console.warn('Get user info service: [' + response.status + '] ' + response.statusText);
        fail();
    });
};
services.getOneDayTime = function (success, fail, date_time) {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/  chart数据
    // url exception
    Vue.http.get('http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/get_service/' + date_time).then(function (response) {
        success(response.body);
    }, function (response) {
        console.warn('Get user info service: [' + response.status + '] ' + response.statusText);
        fail();
    });
};
services.getOneWeek = function (success, fail) {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
    // url exception
    Vue.http.get('http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/querydata/1week').then(function (response) {
        success(response.body);
    }, function (response) {
        console.warn('Get user info service: [' + response.status + '] ' + response.statusText);
        fail();
    });
};
services.getOneMonth = function (success, fail) {
    // http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/test/ chart数据
    // url exception
    Vue.http.get('http://prdpcrdhydra01.w3-969.ibm.com:8000/w2w_restapi/querydata/1month').then(function (response) {
        success(response.body);
    }, function (response) {
        console.warn('Get user info service: [' + response.status + '] ' + response.statusText);
        fail();
    });
};

exports.services = services;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*!\r\n * Bootstrap v3.3.7 (http://getbootstrap.com)\r\n * Copyright 2011-2016 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid silver}legend{padding:0;border:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:'Glyphicons Halflings';src:url(" + __webpack_require__(4) + ");src:url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'),url(" + __webpack_require__(54) + ") format('woff2'),url(" + __webpack_require__(53) + ") format('woff'),url(" + __webpack_require__(52) + ") format('truetype'),url(" + __webpack_require__(51) + "#glyphicons_halflingsregular) format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"*\"}.glyphicon-plus:before{content:\"+\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20AC\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270F\"}.glyphicon-glass:before{content:\"\\E001\"}.glyphicon-music:before{content:\"\\E002\"}.glyphicon-search:before{content:\"\\E003\"}.glyphicon-heart:before{content:\"\\E005\"}.glyphicon-star:before{content:\"\\E006\"}.glyphicon-star-empty:before{content:\"\\E007\"}.glyphicon-user:before{content:\"\\E008\"}.glyphicon-film:before{content:\"\\E009\"}.glyphicon-th-large:before{content:\"\\E010\"}.glyphicon-th:before{content:\"\\E011\"}.glyphicon-th-list:before{content:\"\\E012\"}.glyphicon-ok:before{content:\"\\E013\"}.glyphicon-remove:before{content:\"\\E014\"}.glyphicon-zoom-in:before{content:\"\\E015\"}.glyphicon-zoom-out:before{content:\"\\E016\"}.glyphicon-off:before{content:\"\\E017\"}.glyphicon-signal:before{content:\"\\E018\"}.glyphicon-cog:before{content:\"\\E019\"}.glyphicon-trash:before{content:\"\\E020\"}.glyphicon-home:before{content:\"\\E021\"}.glyphicon-file:before{content:\"\\E022\"}.glyphicon-time:before{content:\"\\E023\"}.glyphicon-road:before{content:\"\\E024\"}.glyphicon-download-alt:before{content:\"\\E025\"}.glyphicon-download:before{content:\"\\E026\"}.glyphicon-upload:before{content:\"\\E027\"}.glyphicon-inbox:before{content:\"\\E028\"}.glyphicon-play-circle:before{content:\"\\E029\"}.glyphicon-repeat:before{content:\"\\E030\"}.glyphicon-refresh:before{content:\"\\E031\"}.glyphicon-list-alt:before{content:\"\\E032\"}.glyphicon-lock:before{content:\"\\E033\"}.glyphicon-flag:before{content:\"\\E034\"}.glyphicon-headphones:before{content:\"\\E035\"}.glyphicon-volume-off:before{content:\"\\E036\"}.glyphicon-volume-down:before{content:\"\\E037\"}.glyphicon-volume-up:before{content:\"\\E038\"}.glyphicon-qrcode:before{content:\"\\E039\"}.glyphicon-barcode:before{content:\"\\E040\"}.glyphicon-tag:before{content:\"\\E041\"}.glyphicon-tags:before{content:\"\\E042\"}.glyphicon-book:before{content:\"\\E043\"}.glyphicon-bookmark:before{content:\"\\E044\"}.glyphicon-print:before{content:\"\\E045\"}.glyphicon-camera:before{content:\"\\E046\"}.glyphicon-font:before{content:\"\\E047\"}.glyphicon-bold:before{content:\"\\E048\"}.glyphicon-italic:before{content:\"\\E049\"}.glyphicon-text-height:before{content:\"\\E050\"}.glyphicon-text-width:before{content:\"\\E051\"}.glyphicon-align-left:before{content:\"\\E052\"}.glyphicon-align-center:before{content:\"\\E053\"}.glyphicon-align-right:before{content:\"\\E054\"}.glyphicon-align-justify:before{content:\"\\E055\"}.glyphicon-list:before{content:\"\\E056\"}.glyphicon-indent-left:before{content:\"\\E057\"}.glyphicon-indent-right:before{content:\"\\E058\"}.glyphicon-facetime-video:before{content:\"\\E059\"}.glyphicon-picture:before{content:\"\\E060\"}.glyphicon-map-marker:before{content:\"\\E062\"}.glyphicon-adjust:before{content:\"\\E063\"}.glyphicon-tint:before{content:\"\\E064\"}.glyphicon-edit:before{content:\"\\E065\"}.glyphicon-share:before{content:\"\\E066\"}.glyphicon-check:before{content:\"\\E067\"}.glyphicon-move:before{content:\"\\E068\"}.glyphicon-step-backward:before{content:\"\\E069\"}.glyphicon-fast-backward:before{content:\"\\E070\"}.glyphicon-backward:before{content:\"\\E071\"}.glyphicon-play:before{content:\"\\E072\"}.glyphicon-pause:before{content:\"\\E073\"}.glyphicon-stop:before{content:\"\\E074\"}.glyphicon-forward:before{content:\"\\E075\"}.glyphicon-fast-forward:before{content:\"\\E076\"}.glyphicon-step-forward:before{content:\"\\E077\"}.glyphicon-eject:before{content:\"\\E078\"}.glyphicon-chevron-left:before{content:\"\\E079\"}.glyphicon-chevron-right:before{content:\"\\E080\"}.glyphicon-plus-sign:before{content:\"\\E081\"}.glyphicon-minus-sign:before{content:\"\\E082\"}.glyphicon-remove-sign:before{content:\"\\E083\"}.glyphicon-ok-sign:before{content:\"\\E084\"}.glyphicon-question-sign:before{content:\"\\E085\"}.glyphicon-info-sign:before{content:\"\\E086\"}.glyphicon-screenshot:before{content:\"\\E087\"}.glyphicon-remove-circle:before{content:\"\\E088\"}.glyphicon-ok-circle:before{content:\"\\E089\"}.glyphicon-ban-circle:before{content:\"\\E090\"}.glyphicon-arrow-left:before{content:\"\\E091\"}.glyphicon-arrow-right:before{content:\"\\E092\"}.glyphicon-arrow-up:before{content:\"\\E093\"}.glyphicon-arrow-down:before{content:\"\\E094\"}.glyphicon-share-alt:before{content:\"\\E095\"}.glyphicon-resize-full:before{content:\"\\E096\"}.glyphicon-resize-small:before{content:\"\\E097\"}.glyphicon-exclamation-sign:before{content:\"\\E101\"}.glyphicon-gift:before{content:\"\\E102\"}.glyphicon-leaf:before{content:\"\\E103\"}.glyphicon-fire:before{content:\"\\E104\"}.glyphicon-eye-open:before{content:\"\\E105\"}.glyphicon-eye-close:before{content:\"\\E106\"}.glyphicon-warning-sign:before{content:\"\\E107\"}.glyphicon-plane:before{content:\"\\E108\"}.glyphicon-calendar:before{content:\"\\E109\"}.glyphicon-random:before{content:\"\\E110\"}.glyphicon-comment:before{content:\"\\E111\"}.glyphicon-magnet:before{content:\"\\E112\"}.glyphicon-chevron-up:before{content:\"\\E113\"}.glyphicon-chevron-down:before{content:\"\\E114\"}.glyphicon-retweet:before{content:\"\\E115\"}.glyphicon-shopping-cart:before{content:\"\\E116\"}.glyphicon-folder-close:before{content:\"\\E117\"}.glyphicon-folder-open:before{content:\"\\E118\"}.glyphicon-resize-vertical:before{content:\"\\E119\"}.glyphicon-resize-horizontal:before{content:\"\\E120\"}.glyphicon-hdd:before{content:\"\\E121\"}.glyphicon-bullhorn:before{content:\"\\E122\"}.glyphicon-bell:before{content:\"\\E123\"}.glyphicon-certificate:before{content:\"\\E124\"}.glyphicon-thumbs-up:before{content:\"\\E125\"}.glyphicon-thumbs-down:before{content:\"\\E126\"}.glyphicon-hand-right:before{content:\"\\E127\"}.glyphicon-hand-left:before{content:\"\\E128\"}.glyphicon-hand-up:before{content:\"\\E129\"}.glyphicon-hand-down:before{content:\"\\E130\"}.glyphicon-circle-arrow-right:before{content:\"\\E131\"}.glyphicon-circle-arrow-left:before{content:\"\\E132\"}.glyphicon-circle-arrow-up:before{content:\"\\E133\"}.glyphicon-circle-arrow-down:before{content:\"\\E134\"}.glyphicon-globe:before{content:\"\\E135\"}.glyphicon-wrench:before{content:\"\\E136\"}.glyphicon-tasks:before{content:\"\\E137\"}.glyphicon-filter:before{content:\"\\E138\"}.glyphicon-briefcase:before{content:\"\\E139\"}.glyphicon-fullscreen:before{content:\"\\E140\"}.glyphicon-dashboard:before{content:\"\\E141\"}.glyphicon-paperclip:before{content:\"\\E142\"}.glyphicon-heart-empty:before{content:\"\\E143\"}.glyphicon-link:before{content:\"\\E144\"}.glyphicon-phone:before{content:\"\\E145\"}.glyphicon-pushpin:before{content:\"\\E146\"}.glyphicon-usd:before{content:\"\\E148\"}.glyphicon-gbp:before{content:\"\\E149\"}.glyphicon-sort:before{content:\"\\E150\"}.glyphicon-sort-by-alphabet:before{content:\"\\E151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\E152\"}.glyphicon-sort-by-order:before{content:\"\\E153\"}.glyphicon-sort-by-order-alt:before{content:\"\\E154\"}.glyphicon-sort-by-attributes:before{content:\"\\E155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\E156\"}.glyphicon-unchecked:before{content:\"\\E157\"}.glyphicon-expand:before{content:\"\\E158\"}.glyphicon-collapse-down:before{content:\"\\E159\"}.glyphicon-collapse-up:before{content:\"\\E160\"}.glyphicon-log-in:before{content:\"\\E161\"}.glyphicon-flash:before{content:\"\\E162\"}.glyphicon-log-out:before{content:\"\\E163\"}.glyphicon-new-window:before{content:\"\\E164\"}.glyphicon-record:before{content:\"\\E165\"}.glyphicon-save:before{content:\"\\E166\"}.glyphicon-open:before{content:\"\\E167\"}.glyphicon-saved:before{content:\"\\E168\"}.glyphicon-import:before{content:\"\\E169\"}.glyphicon-export:before{content:\"\\E170\"}.glyphicon-send:before{content:\"\\E171\"}.glyphicon-floppy-disk:before{content:\"\\E172\"}.glyphicon-floppy-saved:before{content:\"\\E173\"}.glyphicon-floppy-remove:before{content:\"\\E174\"}.glyphicon-floppy-save:before{content:\"\\E175\"}.glyphicon-floppy-open:before{content:\"\\E176\"}.glyphicon-credit-card:before{content:\"\\E177\"}.glyphicon-transfer:before{content:\"\\E178\"}.glyphicon-cutlery:before{content:\"\\E179\"}.glyphicon-header:before{content:\"\\E180\"}.glyphicon-compressed:before{content:\"\\E181\"}.glyphicon-earphone:before{content:\"\\E182\"}.glyphicon-phone-alt:before{content:\"\\E183\"}.glyphicon-tower:before{content:\"\\E184\"}.glyphicon-stats:before{content:\"\\E185\"}.glyphicon-sd-video:before{content:\"\\E186\"}.glyphicon-hd-video:before{content:\"\\E187\"}.glyphicon-subtitles:before{content:\"\\E188\"}.glyphicon-sound-stereo:before{content:\"\\E189\"}.glyphicon-sound-dolby:before{content:\"\\E190\"}.glyphicon-sound-5-1:before{content:\"\\E191\"}.glyphicon-sound-6-1:before{content:\"\\E192\"}.glyphicon-sound-7-1:before{content:\"\\E193\"}.glyphicon-copyright-mark:before{content:\"\\E194\"}.glyphicon-registration-mark:before{content:\"\\E195\"}.glyphicon-cloud-download:before{content:\"\\E197\"}.glyphicon-cloud-upload:before{content:\"\\E198\"}.glyphicon-tree-conifer:before{content:\"\\E199\"}.glyphicon-tree-deciduous:before{content:\"\\E200\"}.glyphicon-cd:before{content:\"\\E201\"}.glyphicon-save-file:before{content:\"\\E202\"}.glyphicon-open-file:before{content:\"\\E203\"}.glyphicon-level-up:before{content:\"\\E204\"}.glyphicon-copy:before{content:\"\\E205\"}.glyphicon-paste:before{content:\"\\E206\"}.glyphicon-alert:before{content:\"\\E209\"}.glyphicon-equalizer:before{content:\"\\E210\"}.glyphicon-king:before{content:\"\\E211\"}.glyphicon-queen:before{content:\"\\E212\"}.glyphicon-pawn:before{content:\"\\E213\"}.glyphicon-bishop:before{content:\"\\E214\"}.glyphicon-knight:before{content:\"\\E215\"}.glyphicon-baby-formula:before{content:\"\\E216\"}.glyphicon-tent:before{content:\"\\26FA\"}.glyphicon-blackboard:before{content:\"\\E218\"}.glyphicon-bed:before{content:\"\\E219\"}.glyphicon-apple:before{content:\"\\F8FF\"}.glyphicon-erase:before{content:\"\\E221\"}.glyphicon-hourglass:before{content:\"\\231B\"}.glyphicon-lamp:before{content:\"\\E223\"}.glyphicon-duplicate:before{content:\"\\E224\"}.glyphicon-piggy-bank:before{content:\"\\E225\"}.glyphicon-scissors:before{content:\"\\E226\"}.glyphicon-bitcoin:before{content:\"\\E227\"}.glyphicon-btc:before{content:\"\\E227\"}.glyphicon-xbt:before{content:\"\\E227\"}.glyphicon-yen:before{content:\"\\A5\"}.glyphicon-jpy:before{content:\"\\A5\"}.glyphicon-ruble:before{content:\"\\20BD\"}.glyphicon-rub:before{content:\"\\20BD\"}.glyphicon-scale:before{content:\"\\E230\"}.glyphicon-ice-lolly:before{content:\"\\E231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\E232\"}.glyphicon-education:before{content:\"\\E233\"}.glyphicon-option-horizontal:before{content:\"\\E234\"}.glyphicon-option-vertical:before{content:\"\\E235\"}.glyphicon-menu-hamburger:before{content:\"\\E236\"}.glyphicon-modal-window:before{content:\"\\E237\"}.glyphicon-oil:before{content:\"\\E238\"}.glyphicon-grain:before{content:\"\\E239\"}.glyphicon-sunglasses:before{content:\"\\E240\"}.glyphicon-text-size:before{content:\"\\E241\"}.glyphicon-text-color:before{content:\"\\E242\"}.glyphicon-text-background:before{content:\"\\E243\"}.glyphicon-object-align-top:before{content:\"\\E244\"}.glyphicon-object-align-bottom:before{content:\"\\E245\"}.glyphicon-object-align-horizontal:before{content:\"\\E246\"}.glyphicon-object-align-left:before{content:\"\\E247\"}.glyphicon-object-align-vertical:before{content:\"\\E248\"}.glyphicon-object-align-right:before{content:\"\\E249\"}.glyphicon-triangle-right:before{content:\"\\E250\"}.glyphicon-triangle-left:before{content:\"\\E251\"}.glyphicon-triangle-bottom:before{content:\"\\E252\"}.glyphicon-triangle-top:before{content:\"\\E253\"}.glyphicon-console:before{content:\"\\E254\"}.glyphicon-superscript:before{content:\"\\E255\"}.glyphicon-subscript:before{content:\"\\E256\"}.glyphicon-menu-left:before{content:\"\\E257\"}.glyphicon-menu-right:before{content:\"\\E258\"}.glyphicon-menu-down:before{content:\"\\E259\"}.glyphicon-menu-up:before{content:\"\\E260\"}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.carousel-inner>.item>a>img,.carousel-inner>.item>img,.img-responsive,.thumbnail a>img,.thumbnail>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;max-width:100%;height:auto;padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{padding:.2em;background-color:#fcf8e3}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:focus,a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:focus,a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:focus,a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:focus,a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:focus,a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:focus,a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:focus,a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:focus,a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:10px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;margin-left:-5px;list-style:none}.list-inline>li{display:inline-block;padding-right:5px;padding-left:5px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\\2014   \\A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eee;border-left:0}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:''}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:'\\A0   \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.25);box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;-webkit-box-shadow:none;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:focus,input[type=checkbox]:focus,input[type=radio]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{background-color:transparent;border:0}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{line-height:34px}.input-group-sm input[type=date],.input-group-sm input[type=time],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],input[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=time],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],input[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-top:4px\\9;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;font-weight:400;vertical-align:middle;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.checkbox-inline.disabled,.radio-inline.disabled,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio-inline{cursor:not-allowed}.checkbox.disabled label,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .radio label{cursor:not-allowed}.form-control-static{min-height:34px;padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.focus,.btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.open>.dropdown-toggle.btn-default.focus,.open>.dropdown-toggle.btn-default:focus,.open>.dropdown-toggle.btn-default:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled.focus,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled].focus,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.dropdown-toggle.btn-success.focus,.open>.dropdown-toggle.btn-success:focus,.open>.dropdown-toggle.btn-success:hover{color:#fff;background-color:#398439;border-color:#255625}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled].focus,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle.btn-info.focus,.open>.dropdown-toggle.btn-info:focus,.open>.dropdown-toggle.btn-info:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.dropdown-toggle.btn-warning.focus,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled].focus,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.dropdown-toggle.btn-danger.focus,.open>.dropdown-toggle.btn-danger:focus,.open>.dropdown-toggle.btn-danger:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{font-weight:400;color:#337ab7;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-property:height,visibility;-o-transition-property:height,visibility;transition-property:height,visibility}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown,.dropup{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175)}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{color:#262626;text-decoration:none;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{right:auto;left:0}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-right:0;padding-left:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{padding-right:15px;padding-left:15px;overflow-x:visible;-webkit-overflow-scrolling:touch;border-top:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-right:0;padding-left:0}}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;height:50px;padding:15px 15px;font-size:18px;line-height:20px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{padding:10px 15px;margin-top:8px;margin-right:-15px;margin-bottom:8px;margin-left:-15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1)}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;-webkit-box-shadow:none;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{color:#555;background-color:#e7e7e7}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{color:#fff;background-color:#080808}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:\"/\\A0\"}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron .h1,.jumbotron h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron,.container-fluid .jumbotron{padding-right:60px;padding-left:60px}.jumbotron .h1,.jumbotron h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out}.thumbnail a>img,.thumbnail>img{margin-right:auto;margin-left:auto}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:40px 40px;background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden;zoom:1}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover,button.list-group-item:focus,button.list-group-item:hover{color:#555;text-decoration:none;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#777;cursor:not-allowed;background-color:#eee}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-left-radius:3px;border-top-right-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-collapse>.table caption,.panel>.table caption,.panel>.table-responsive>.table caption{padding-right:15px;padding-left:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{margin-bottom:0;border:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;filter:alpha(opacity=0);opacity:0;line-break:auto}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px;bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2);line-break:auto}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{content:\"\";border-width:10px}.popover.top>.arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.top>.arrow:after{bottom:1px;margin-left:-10px;content:\" \";border-top-color:#fff;border-bottom-width:0}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.right>.arrow:after{bottom:-10px;left:1px;content:\" \";border-right-color:#fff;border-left-width:0}.popover.bottom>.arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25)}.popover.bottom>.arrow:after{top:1px;margin-left:-10px;content:\" \";border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{right:1px;bottom:-10px;content:\" \";border-right-width:0;border-left-color:#fff}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>a>img,.carousel-inner>.item>img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.item{-webkit-transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.active.right,.carousel-inner>.item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);background-color:rgba(0,0,0,0);filter:alpha(opacity=50);opacity:.5}.carousel-control.left{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);background-repeat:repeat-x}.carousel-control.right{right:0;left:auto;background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);background-repeat:repeat-x}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;margin-top:-10px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;font-family:serif;line-height:1}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203A'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000\\9;background-color:rgba(0,0,0,0);border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:\" \"}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-md,.visible-sm,.visible-xs{display:none!important}.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}\r\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\r\n\r\n/*!\r\n * Pikaday\r\n * Copyright © 2014 David Bushell | BSD & MIT license | http://dbushell.com/\r\n */\r\n\r\n.pika-single {\r\n    z-index: 9999;\r\n    display: block;\r\n    position: relative;\r\n    color: #333;\r\n    background: #fff;\r\n    border: 1px solid #ccc;\r\n    border-bottom-color: #bbb;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n/*\r\nclear child float (pika-lendar), using the famous micro clearfix hack\r\nhttp://nicolasgallagher.com/micro-clearfix-hack/\r\n*/\r\n.pika-single:before,\r\n.pika-single:after {\r\n    content: \" \";\r\n    display: table;\r\n}\r\n.pika-single:after { clear: both }\r\n.pika-single { *zoom: 1 }\r\n\r\n.pika-single.is-hidden {\r\n    display: none;\r\n}\r\n\r\n.pika-single.is-bound {\r\n    position: absolute;\r\n    box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);\r\n}\r\n\r\n.pika-lendar {\r\n    float: left;\r\n    width: 240px;\r\n    margin: 8px;\r\n}\r\n\r\n.pika-title {\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.pika-label {\r\n    display: inline-block;\r\n    *display: inline;\r\n    position: relative;\r\n    z-index: 9999;\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 5px 3px;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n    background-color: #fff;\r\n}\r\n.pika-title select {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    z-index: 9998;\r\n    margin: 0;\r\n    left: 0;\r\n    top: 5px;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n}\r\n\r\n.pika-prev,\r\n.pika-next {\r\n    display: block;\r\n    cursor: pointer;\r\n    position: relative;\r\n    outline: none;\r\n    border: 0;\r\n    padding: 0;\r\n    width: 20px;\r\n    height: 30px;\r\n    /* hide text using text-indent trick, using width value (it's enough) */\r\n    text-indent: 20px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    background-color: transparent;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: 75% 75%;\r\n    opacity: .5;\r\n    *position: absolute;\r\n    *top: 0;\r\n}\r\n\r\n.pika-prev:hover,\r\n.pika-next:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.pika-prev,\r\n.is-rtl .pika-next {\r\n    float: left;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');\r\n    *left: 0;\r\n}\r\n\r\n.pika-next,\r\n.is-rtl .pika-prev {\r\n    float: right;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');\r\n    *right: 0;\r\n}\r\n\r\n.pika-prev.is-disabled,\r\n.pika-next.is-disabled {\r\n    cursor: default;\r\n    opacity: .2;\r\n}\r\n\r\n.pika-select {\r\n    display: inline-block;\r\n    *display: inline;\r\n}\r\n\r\n.pika-table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border: 0;\r\n}\r\n\r\n.pika-table th,\r\n.pika-table td {\r\n    width: 14.285714285714286%;\r\n    padding: 0;\r\n}\r\n\r\n.pika-table th {\r\n    color: #999;\r\n    font-size: 12px;\r\n    line-height: 25px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.pika-button {\r\n    cursor: pointer;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    outline: none;\r\n    border: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 5px;\r\n    color: #666;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    text-align: right;\r\n    background: #f5f5f5;\r\n}\r\n\r\n.pika-week {\r\n    font-size: 11px;\r\n    color: #999;\r\n}\r\n\r\n.is-today .pika-button {\r\n    color: #33aaff;\r\n    font-weight: bold;\r\n}\r\n\r\n.is-selected .pika-button {\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background: #33aaff;\r\n    box-shadow: inset 0 1px 3px #178fe5;\r\n    border-radius: 3px;\r\n}\r\n\r\n.is-inrange .pika-button {\r\n    background: #D5E9F7;\r\n}\r\n\r\n.is-startrange .pika-button {\r\n    color: #fff;\r\n    background: #6CB31D;\r\n    box-shadow: none;\r\n    border-radius: 3px;\r\n}\r\n\r\n.is-endrange .pika-button {\r\n    color: #fff;\r\n    background: #33aaff;\r\n    box-shadow: none;\r\n    border-radius: 3px;\r\n}\r\n\r\n.is-disabled .pika-button,\r\n.is-outside-current-month .pika-button {\r\n    pointer-events: none;\r\n    cursor: default;\r\n    color: #999;\r\n    opacity: .3;\r\n}\r\n\r\n.pika-button:hover {\r\n    color: #fff;\r\n    background: #ff8000;\r\n    box-shadow: none;\r\n    border-radius: 3px;\r\n}\r\n\r\n/* styling for abbr */\r\n.pika-table abbr {\r\n    border-bottom: none;\r\n    cursor: help;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*!\r\nPure v0.6.2\r\nCopyright 2013 Yahoo!\r\nLicensed under the BSD License.\r\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\r\n*/\r\n/*!\r\nnormalize.css v^3.0 | MIT License | git.io/normalize\r\nCopyright (c) Nicolas Gallagher and Jonathan Neal\r\n*/\r\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\r\n.pure-button:focus,a:active,a:hover{outline:0}.pure-table,table{border-collapse:collapse;border-spacing:0}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}abbr[title]{border-bottom:1px dotted}b,optgroup,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre,textarea{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}.pure-button,input{line-height:normal}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}.pure-button,.pure-form input:not([type]),.pure-menu{box-sizing:border-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend,td,th{padding:0}legend{border:0}.hidden,[hidden]{display:none!important}.pure-img{max-width:100%;height:auto;display:block}.pure-g{letter-spacing:-.31em;text-rendering:optimizespeed;font-family:FreeSans,Arimo,\"Droid Sans\",Helvetica,Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){table .pure-g{display:block}}.opera-only :-o-prefocus,.pure-g{word-spacing:-.43em}.pure-u,.pure-u-1,.pure-u-1-1,.pure-u-1-12,.pure-u-1-2,.pure-u-1-24,.pure-u-1-3,.pure-u-1-4,.pure-u-1-5,.pure-u-1-6,.pure-u-1-8,.pure-u-10-24,.pure-u-11-12,.pure-u-11-24,.pure-u-12-24,.pure-u-13-24,.pure-u-14-24,.pure-u-15-24,.pure-u-16-24,.pure-u-17-24,.pure-u-18-24,.pure-u-19-24,.pure-u-2-24,.pure-u-2-3,.pure-u-2-5,.pure-u-20-24,.pure-u-21-24,.pure-u-22-24,.pure-u-23-24,.pure-u-24-24,.pure-u-3-24,.pure-u-3-4,.pure-u-3-5,.pure-u-3-8,.pure-u-4-24,.pure-u-4-5,.pure-u-5-12,.pure-u-5-24,.pure-u-5-5,.pure-u-5-6,.pure-u-5-8,.pure-u-6-24,.pure-u-7-12,.pure-u-7-24,.pure-u-7-8,.pure-u-8-24,.pure-u-9-24{letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto;display:inline-block;zoom:1}.pure-g [class*=pure-u]{font-family:sans-serif}.pure-u-1-24{width:4.1667%}.pure-u-1-12,.pure-u-2-24{width:8.3333%}.pure-u-1-8,.pure-u-3-24{width:12.5%}.pure-u-1-6,.pure-u-4-24{width:16.6667%}.pure-u-1-5{width:20%}.pure-u-5-24{width:20.8333%}.pure-u-1-4,.pure-u-6-24{width:25%}.pure-u-7-24{width:29.1667%}.pure-u-1-3,.pure-u-8-24{width:33.3333%}.pure-u-3-8,.pure-u-9-24{width:37.5%}.pure-u-2-5{width:40%}.pure-u-10-24,.pure-u-5-12{width:41.6667%}.pure-u-11-24{width:45.8333%}.pure-u-1-2,.pure-u-12-24{width:50%}.pure-u-13-24{width:54.1667%}.pure-u-14-24,.pure-u-7-12{width:58.3333%}.pure-u-3-5{width:60%}.pure-u-15-24,.pure-u-5-8{width:62.5%}.pure-u-16-24,.pure-u-2-3{width:66.6667%}.pure-u-17-24{width:70.8333%}.pure-u-18-24,.pure-u-3-4{width:75%}.pure-u-19-24{width:79.1667%}.pure-u-4-5{width:80%}.pure-u-20-24,.pure-u-5-6{width:83.3333%}.pure-u-21-24,.pure-u-7-8{width:87.5%}.pure-u-11-12,.pure-u-22-24{width:91.6667%}.pure-u-23-24{width:95.8333%}.pure-u-1,.pure-u-1-1,.pure-u-24-24,.pure-u-5-5{width:100%}.pure-button{display:inline-block;zoom:1;white-space:nowrap;vertical-align:middle;text-align:center;cursor:pointer;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pure-button::-moz-focus-inner{padding:0;border:0}.pure-button-group{letter-spacing:-.31em;text-rendering:optimizespeed}.opera-only :-o-prefocus,.pure-button-group{word-spacing:-.43em}.pure-button{font-family:inherit;font-size:100%;padding:.5em 1em;color:#444;color:rgba(0,0,0,.8);border:1px solid #999;border:transparent;background-color:#E6E6E6;text-decoration:none;border-radius:2px}.pure-button-hover,.pure-button:focus,.pure-button:hover{filter:alpha(opacity=90);background-image:-webkit-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));background-image:linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))}.pure-button-active,.pure-button:active{box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 0 6px rgba(0,0,0,.2) inset;border-color:#000\\9}.pure-button-disabled,.pure-button-disabled:active,.pure-button-disabled:focus,.pure-button-disabled:hover,.pure-button[disabled]{border:none;background-image:none;filter:alpha(opacity=40);opacity:.4;cursor:not-allowed;box-shadow:none;pointer-events:none}.pure-button-hidden{display:none}.pure-button-primary,.pure-button-selected,a.pure-button-primary,a.pure-button-selected{background-color:#0078e7;color:#fff}.pure-button-group .pure-button{letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto;margin:0;border-radius:0;border-right:1px solid #111;border-right:1px solid rgba(0,0,0,.2)}.pure-button-group .pure-button:first-child{border-top-left-radius:2px;border-bottom-left-radius:2px}.pure-button-group .pure-button:last-child{border-top-right-radius:2px;border-bottom-right-radius:2px;border-right:none}.pure-form input[type=password],.pure-form input[type=email],.pure-form input[type=url],.pure-form input[type=date],.pure-form input[type=month],.pure-form input[type=time],.pure-form input[type=datetime],.pure-form input[type=datetime-local],.pure-form input[type=week],.pure-form input[type=tel],.pure-form input[type=color],.pure-form input[type=number],.pure-form input[type=search],.pure-form input[type=text],.pure-form select,.pure-form textarea{padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;vertical-align:middle;box-sizing:border-box}.pure-form input:not([type]){padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px}.pure-form input[type=color]{padding:.2em .5em}.pure-form input:not([type]):focus,.pure-form input[type=password]:focus,.pure-form input[type=email]:focus,.pure-form input[type=url]:focus,.pure-form input[type=date]:focus,.pure-form input[type=month]:focus,.pure-form input[type=time]:focus,.pure-form input[type=datetime]:focus,.pure-form input[type=datetime-local]:focus,.pure-form input[type=week]:focus,.pure-form input[type=tel]:focus,.pure-form input[type=color]:focus,.pure-form input[type=number]:focus,.pure-form input[type=search]:focus,.pure-form input[type=text]:focus,.pure-form select:focus,.pure-form textarea:focus{outline:0;border-color:#129FEA}.pure-form input[type=file]:focus,.pure-form input[type=checkbox]:focus,.pure-form input[type=radio]:focus{outline:#129FEA auto 1px}.pure-form .pure-checkbox,.pure-form .pure-radio{margin:.5em 0;display:block}.pure-form input:not([type])[disabled],.pure-form input[type=password][disabled],.pure-form input[type=email][disabled],.pure-form input[type=url][disabled],.pure-form input[type=date][disabled],.pure-form input[type=month][disabled],.pure-form input[type=time][disabled],.pure-form input[type=datetime][disabled],.pure-form input[type=datetime-local][disabled],.pure-form input[type=week][disabled],.pure-form input[type=tel][disabled],.pure-form input[type=color][disabled],.pure-form input[type=number][disabled],.pure-form input[type=search][disabled],.pure-form input[type=text][disabled],.pure-form select[disabled],.pure-form textarea[disabled]{cursor:not-allowed;background-color:#eaeded;color:#cad2d3}.pure-form input[readonly],.pure-form select[readonly],.pure-form textarea[readonly]{background-color:#eee;color:#777;border-color:#ccc}.pure-form input:focus:invalid,.pure-form select:focus:invalid,.pure-form textarea:focus:invalid{color:#b94a48;border-color:#e9322d}.pure-form input[type=file]:focus:invalid:focus,.pure-form input[type=checkbox]:focus:invalid:focus,.pure-form input[type=radio]:focus:invalid:focus{outline-color:#e9322d}.pure-form select{height:2.25em;border:1px solid #ccc;background-color:#fff}.pure-form select[multiple]{height:auto}.pure-form label{margin:.5em 0 .2em}.pure-form fieldset{margin:0;padding:.35em 0 .75em;border:0}.pure-form legend{display:block;width:100%;padding:.3em 0;margin-bottom:.3em;color:#333;border-bottom:1px solid #e5e5e5}.pure-form-stacked input:not([type]),.pure-form-stacked input[type=password],.pure-form-stacked input[type=email],.pure-form-stacked input[type=url],.pure-form-stacked input[type=date],.pure-form-stacked input[type=month],.pure-form-stacked input[type=time],.pure-form-stacked input[type=datetime],.pure-form-stacked input[type=datetime-local],.pure-form-stacked input[type=week],.pure-form-stacked input[type=tel],.pure-form-stacked input[type=color],.pure-form-stacked input[type=file],.pure-form-stacked input[type=number],.pure-form-stacked input[type=search],.pure-form-stacked input[type=text],.pure-form-stacked label,.pure-form-stacked select,.pure-form-stacked textarea{display:block;margin:.25em 0}.pure-form-aligned .pure-help-inline,.pure-form-aligned input,.pure-form-aligned select,.pure-form-aligned textarea,.pure-form-message-inline{display:inline-block;vertical-align:middle}.pure-form-aligned textarea{vertical-align:top}.pure-form-aligned .pure-control-group{margin-bottom:.5em}.pure-form-aligned .pure-control-group label{text-align:right;display:inline-block;vertical-align:middle;width:10em;margin:0 1em 0 0}.pure-form-aligned .pure-controls{margin:1.5em 0 0 11em}.pure-form .pure-input-rounded,.pure-form input.pure-input-rounded{border-radius:2em;padding:.5em 1em}.pure-form .pure-group fieldset{margin-bottom:10px}.pure-form .pure-group input,.pure-form .pure-group textarea{display:block;padding:10px;margin:0 0 -1px;border-radius:0;position:relative;top:-1px}.pure-form .pure-group input:focus,.pure-form .pure-group textarea:focus{z-index:3}.pure-form .pure-group input:first-child,.pure-form .pure-group textarea:first-child{top:1px;border-radius:4px 4px 0 0;margin:0}.pure-form .pure-group input:first-child:last-child,.pure-form .pure-group textarea:first-child:last-child{top:1px;border-radius:4px;margin:0}.pure-form .pure-group input:last-child,.pure-form .pure-group textarea:last-child{top:-2px;border-radius:0 0 4px 4px;margin:0}.pure-form .pure-group button{margin:.35em 0}.pure-form .pure-input-1{width:100%}.pure-form .pure-input-3-4{width:75%}.pure-form .pure-input-2-3{width:66%}.pure-form .pure-input-1-2{width:50%}.pure-form .pure-input-1-3{width:33%}.pure-form .pure-input-1-4{width:25%}.pure-form .pure-help-inline,.pure-form-message-inline{display:inline-block;padding-left:.3em;color:#666;vertical-align:middle;font-size:.875em}.pure-form-message{display:block;color:#666;font-size:.875em}@media only screen and (max-width :480px){.pure-form button[type=submit]{margin:.7em 0 0}.pure-form input:not([type]),.pure-form input[type=password],.pure-form input[type=email],.pure-form input[type=url],.pure-form input[type=date],.pure-form input[type=month],.pure-form input[type=time],.pure-form input[type=datetime],.pure-form input[type=datetime-local],.pure-form input[type=week],.pure-form input[type=tel],.pure-form input[type=color],.pure-form input[type=number],.pure-form input[type=search],.pure-form input[type=text],.pure-form label{margin-bottom:.3em;display:block}.pure-group input:not([type]),.pure-group input[type=password],.pure-group input[type=email],.pure-group input[type=url],.pure-group input[type=date],.pure-group input[type=month],.pure-group input[type=time],.pure-group input[type=datetime],.pure-group input[type=datetime-local],.pure-group input[type=week],.pure-group input[type=tel],.pure-group input[type=color],.pure-group input[type=number],.pure-group input[type=search],.pure-group input[type=text]{margin-bottom:0}.pure-form-aligned .pure-control-group label{margin-bottom:.3em;text-align:left;display:block;width:100%}.pure-form-aligned .pure-controls{margin:1.5em 0 0}.pure-form .pure-help-inline,.pure-form-message,.pure-form-message-inline{display:block;font-size:.75em;padding:.2em 0 .8em}}.pure-menu-fixed{position:fixed;left:0;top:0;z-index:3}.pure-menu-item,.pure-menu-list{position:relative}.pure-menu-list{list-style:none;margin:0;padding:0}.pure-menu-item{padding:0;margin:0;height:100%}.pure-menu-heading,.pure-menu-link{display:block;text-decoration:none;white-space:nowrap}.pure-menu-horizontal{width:100%;white-space:nowrap}.pure-menu-horizontal .pure-menu-list{display:inline-block}.pure-menu-horizontal .pure-menu-heading,.pure-menu-horizontal .pure-menu-item,.pure-menu-horizontal .pure-menu-separator{display:inline-block;zoom:1;vertical-align:middle}.pure-menu-item .pure-menu-item{display:block}.pure-menu-children{display:none;position:absolute;left:100%;top:0;margin:0;padding:0;z-index:3}.pure-menu-horizontal .pure-menu-children{left:0;top:auto;width:inherit}.pure-menu-active>.pure-menu-children,.pure-menu-allow-hover:hover>.pure-menu-children{display:block;position:absolute}.pure-menu-has-children>.pure-menu-link:after{padding-left:.5em;content:\"\\25B8\";font-size:small}.pure-menu-horizontal .pure-menu-has-children>.pure-menu-link:after{content:\"\\25BE\"}.pure-menu-scrollable{overflow-y:scroll;overflow-x:hidden}.pure-menu-scrollable .pure-menu-list{display:block}.pure-menu-horizontal.pure-menu-scrollable .pure-menu-list{display:inline-block}.pure-menu-horizontal.pure-menu-scrollable{white-space:nowrap;overflow-y:hidden;overflow-x:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;padding:.5em 0}.pure-menu-horizontal.pure-menu-scrollable::-webkit-scrollbar{display:none}.pure-menu-horizontal .pure-menu-children .pure-menu-separator,.pure-menu-separator{background-color:#ccc;height:1px;margin:.3em 0}.pure-menu-horizontal .pure-menu-separator{width:1px;height:1.3em;margin:0 .3em}.pure-menu-horizontal .pure-menu-children .pure-menu-separator{display:block;width:auto}.pure-menu-heading{text-transform:uppercase;color:#565d64}.pure-menu-link{color:#777}.pure-menu-children{background-color:#fff}.pure-menu-disabled,.pure-menu-heading,.pure-menu-link{padding:.5em 1em}.pure-menu-disabled{opacity:.5}.pure-menu-disabled .pure-menu-link:hover{background-color:transparent}.pure-menu-active>.pure-menu-link,.pure-menu-link:focus,.pure-menu-link:hover{background-color:#eee}.pure-menu-selected .pure-menu-link,.pure-menu-selected .pure-menu-link:visited{color:#000}.pure-table{empty-cells:show;border:1px solid #cbcbcb}.pure-table caption{color:#000;font:italic 85%/1 arial,sans-serif;padding:1em 0;text-align:center}.pure-table td,.pure-table th{border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:.5em 1em}.pure-table td:first-child,.pure-table th:first-child{border-left-width:0}.pure-table thead{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom}.pure-table td{background-color:transparent}.pure-table-odd td,.pure-table-striped tr:nth-child(2n-1) td{background-color:#f2f2f2}.pure-table-bordered td{border-bottom:1px solid #cbcbcb}.pure-table-bordered tbody>tr:last-child>td{border-bottom-width:0}.pure-table-horizontal td,.pure-table-horizontal th{border-width:0 0 1px;border-bottom:1px solid #cbcbcb}.pure-table-horizontal tbody>tr:last-child>td{border-bottom-width:0}\r\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"iconfont\";\n  src: url(" + __webpack_require__(5) + ");\n  /* IE9*/\n  src: url(" + __webpack_require__(5) + "#iefix) format('embedded-opentype'),  url(" + __webpack_require__(57) + ") format('woff'),  url(" + __webpack_require__(56) + ") format('truetype'),  url(" + __webpack_require__(55) + "#iconfont) format('svg');\n  /* iOS 4.1- */\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s;\n}\n.fade-enter,\n.fade-leave-active {\n  opacity: 0;\n}\n.animation-trans {\n  transition: all 4s ease-in-out 1s;\n}\n.slide-fade-enter-active {\n  transition: all .3s ease;\n}\n.slide-fade-leave-active {\n  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter,\n.slide-fade-leave-active {\n  transform: translateY(10px);\n  opacity: 0;\n}\nbody {\n  color: #333333;\n  font-size: 15px;\n}\nbody * {\n  font-family: Montserrat, Lato, Helvetica Neue, Helvetica, Arial, sans-serif;\n  letter-spacing: .6px;\n  box-sizing: border-box;\n}\nbody .pure-u-1,\nbody .pure-u-1-1,\nbody .pure-u-1-2,\nbody .pure-u-1-3,\nbody .pure-u-2-3,\nbody .pure-u-1-4,\nbody .pure-u-3-4,\nbody .pure-u-1-5,\nbody .pure-u-2-5,\nbody .pure-u-3-5,\nbody .pure-u-4-5,\nbody .pure-u-5-5,\nbody .pure-u-1-6,\nbody .pure-u-5-6,\nbody .pure-u-1-8,\nbody .pure-u-3-8,\nbody .pure-u-5-8,\nbody .pure-u-7-8,\nbody .pure-u-1-12,\nbody .pure-u-5-12,\nbody .pure-u-7-12,\nbody .pure-u-11-12,\nbody .pure-u-1-24,\nbody .pure-u-2-24,\nbody .pure-u-3-24,\nbody .pure-u-4-24,\nbody .pure-u-5-24,\nbody .pure-u-6-24,\nbody .pure-u-7-24,\nbody .pure-u-8-24,\nbody .pure-u-9-24,\nbody .pure-u-10-24,\nbody .pure-u-11-24,\nbody .pure-u-12-24,\nbody .pure-u-13-24,\nbody .pure-u-14-24,\nbody .pure-u-15-24,\nbody .pure-u-16-24,\nbody .pure-u-17-24,\nbody .pure-u-18-24,\nbody .pure-u-19-24,\nbody .pure-u-20-24,\nbody .pure-u-21-24,\nbody .pure-u-22-24,\nbody .pure-u-23-24,\nbody .pure-u-24-24 {\n  padding: 0 8px;\n}\nbody a {\n  color: #3e8fc6;\n}\nbody #m-app {\n  padding-left: 100px;\n  /* router switch area*/\n}\nbody #m-app #m-left-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100px;\n  overflow: hidden;\n  background-color: #1c1c1c;\n  -webkit-transition: all 0.1s ease-out;\n}\nbody #m-app #m-left-nav * {\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul {\n  padding: 0;\n  margin: 0;\n}\nbody #m-app #m-left-nav ul li a {\n  display: block;\n  padding: 12px 0;\n  color: #999;\n  text-decoration: none;\n  text-align: center;\n}\nbody #m-app #m-left-nav ul li a i.iconfont {\n  font-size: 22px;\n  color: #999;\n}\nbody #m-app #m-left-nav ul li a:hover {\n  background-color: #111111;\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul li a:hover i.iconfont {\n  color: #3ea8f7;\n}\nbody #m-app #m-left-nav ul li a:hover span {\n  color: #AAAAAA;\n}\nbody #m-app #m-left-nav ul li a.router-link-active {\n  background-color: #3e8fc6;\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul li a.router-link-active i.iconfont {\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul li a.router-link-active span {\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul li a span {\n  display: block;\n  color: #999;\n  font-size: 12px;\n  margin-top: 4px;\n}\nbody #m-app #m-left-nav ul li.m-logo {\n  margin: 0 auto 2em;\n}\nbody #m-app #m-left-nav ul li.m-logo a {\n  background-color: transparent;\n}\nbody #m-app #m-left-nav ul li.m-logo a i.iconfont {\n  font-size: 30px;\n}\nbody #m-app #m-main-wrapper {\n  background-color: #e1e8ee;\n}\nbody #m-app #m-header,\nbody #m-app #m-main,\nbody #m-app #m-footer {\n  padding: 2em;\n  width: 94%;\n  margin: 0 auto;\n}\nbody #m-app #m-header,\nbody #m-app #m-footer {\n  padding: 0 2em;\n}\nbody #m-app #m-footer p {\n  font-size: 12px;\n  color: #999999;\n}\nbody #m-app #m-header {\n  font-size: 13px;\n}\nbody #m-app #m-header ul {\n  list-style: none;\n}\nbody #m-app #m-header ul li {\n  display: inline-block;\n}\nbody #m-app #m-main {\n  /*                       style for index.html                     */\n  /* -------------------------------------------------------------- */\n}\nbody #m-app #m-main .m-box {\n  margin: 0;\n  padding: 0;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: #fff;\n}\nbody #m-app #m-main.m-index {\n  /*                      style for echarts                     */\n  /* ---------------------------------------------------------- */\n}\nbody #m-app #m-main.m-index .pure-u-1-1 {\n  /*                      style for selection                   */\n  /* ---------------------------------------------------------- */\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn {\n  border-radius: 5px;\n  /* select */\n  /* date button */\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form {\n  display: inline-block;\n  margin-right: 20px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form fieldset {\n  border: none;\n  margin: 0;\n  padding: 20px 0px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form fieldset label {\n  padding: 0 5px;\n  border-left: 2px solid #00B4A0;\n  font-size: 16px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form fieldset select {\n  width: 200px;\n  height: 36px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form fieldset select optgroup {\n  padding-left: 10px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup {\n  display: inline-block;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-btn {\n  display: inline-block;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  padding: 5px 10px;\n  border: none;\n  color: #464646;\n  background-color: #E0E0E0;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-btn.clicked {\n  color: white;\n  background-color: #323232;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon {\n  position: relative;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  font-size: 14px;\n  padding: 5px 10px 4px 10px;\n  border: 1px solid #ccc;\n  color: #464646;\n  cursor: pointer;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .custom {\n  position: relative;\n  top: -1px;\n  font-size: 14px;\n  font-family: \"serif\";\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select {\n  position: absolute;\n  z-index: 100;\n  top: 40px;\n  left: -1px;\n  border: 1px solid #ccc;\n  background-color: #ffffff;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .close {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  color: #000;\n  font-weight: bold;\n  opacity: .8;\n  cursor: pointer;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .close:hover {\n  opacity: 1;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select {\n  margin: 10px 20px 10px 15px;\n  width: 320px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year {\n  display: inline-block;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year .bold {\n  font-weight: bold;\n  width: 5px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year span {\n  display: inline-block;\n  width: 80px;\n  text-align: right;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year .date {\n  position: relative;\n  display: inline-block;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year .date input {\n  padding: 2px 5px;\n  width: 95px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .bold {\n  font-weight: bold;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-hour {\n  position: relative;\n  display: inline-block;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-hour input {\n  padding: 2px 5px;\n  width: 50px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-hour .up {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 20px;\n  height: 50%;\n  color: #999;\n  border-left: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-hour .down {\n  position: absolute;\n  top: 50%;\n  right: 0px;\n  width: 20px;\n  height: 50%;\n  color: #999;\n  border-left: 1px solid #ccc;\n  text-align: center;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select.u-date-start {\n  margin-top: 30px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-btn-save {\n  width: 50px;\n  height: 24px;\n  margin-left: 269px;\n  margin-bottom: 10px;\n  color: white;\n  background-color: #4178BE;\n  text-align: center;\n  line-height: 24px;\n  font-weight: bold;\n  cursor: pointer;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh {\n  width: auto;\n  display: inline-block;\n  margin-left: 10px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .bold {\n  font-weight: bold;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch {\n  display: inline-block;\n  position: relative;\n  width: 56px;\n  height: 24px;\n  border-radius: 16px;\n  background: #ddd;\n  overflow: hidden;\n  cursor: pointer;\n  vertical-align: middle;\n  -webkit-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch.switchOff {\n  box-shadow: 0px 0px 2px #bbb inset;\n  background: #f5f5f5;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch.switchOff .swt-cursor {\n  left: 5px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch.switchOn {\n  background: #70e913;\n  box-shadow: 0 0 2px #70e913 inset;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch.switchOn .swt-cursor {\n  left: 34px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch .swt-cursor {\n  display: inline-block;\n  position: absolute;\n  top: 3px;\n  width: 18px;\n  height: 18px;\n  border-radius: 100%;\n  background: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  -webkit-transition: all .2s linear;\n  -ms-transition: all .2s linear;\n  transition: all .2s linear;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis h2 {\n  margin: 15px 0px 2px 0px;\n  font-size: 20px;\n  font-weight: normal;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis p {\n  margin: 0px;\n  font-size: 16px;\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.4);\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis .histogram .canvas_container {\n  position: relative;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis .histogram .canvas_container canvas {\n  width: auto;\n  height: auto;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis .histogram .canvas_container .index-tooltip {\n  padding: 10px;\n  border: 1px solid #000;\n  border-radius: 5px;\n  color: #000;\n  background-color: #ECF2F2;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis .histogram .canvas_container .index-tooltip span {\n  padding: 5px 0;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.chart h2 {\n  margin: 15px 0px 2px 0px;\n  font-size: 20px;\n  font-weight: normal;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.chart #Dash3 {\n  margin-top: 20px;\n}\nbody #m-app #m-main.m-index .pure-u-1-2 h2 {\n  margin: 15px 0px 2px 0px;\n  font-size: 20px;\n  font-weight: normal;\n}\nbody #m-app #m-main.m-index .pure-u-1-2 p {\n  margin: 0px;\n  font-size: 16px;\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.4);\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-month {\n  text-align: left;\n  line-height: 78px;\n  font-size: 21px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-day .boxCenter {\n  width: 260px;\n  margin: 30px auto;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-day .boxCenter i.iconfont {\n  font-size: 12px;\n  font-weight: bold;\n  color: #000;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-day .boxCenter span {\n  font-size: 16px;\n  font-weight: bold;\n  padding: 4px 10px 0 10px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-button .buttonGrp {\n  height: 30px;\n  margin: 25px auto;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-button .buttonGrp #month {\n  display: block;\n  height: 30px;\n  width: 25%;\n  float: left;\n  border: 1px solid black;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin-left: 15%;\n  color: black;\n  background-color: white;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-button .buttonGrp #week {\n  display: block;\n  height: 30px;\n  width: 25%;\n  float: left;\n  border: 1px solid black;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: white;\n  background-color: black;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-button .buttonGrp #today {\n  display: block;\n  height: 30px;\n  width: 25%;\n  float: right;\n  border: 1px solid #999;\n  border-radius: 5px;\n  margin-right: 5%;\n  color: #999;\n  background-color: white;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint {\n  display: flex;\n  width: ;\n  margin: 0px auto 20px auto;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-red {\n  flex-direction: column;\n  height: 18px;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-red .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #e91e63;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-red .u-caldr-hint-text {\n  display: inline-block;\n  height: 18px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 18px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-black {\n  flex-direction: column;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-black .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #000;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-black .u-caldr-hint-text {\n  display: inline-block;\n  height: 18px;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-green {\n  flex-direction: column;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-green .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #42b347;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-green .u-caldr-hint-text {\n  display: inline-block;\n  height: 18px;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-blue {\n  flex-direction: column;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-blue .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #03a9f4;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-blue .u-caldr-hint-text {\n  display: inline-block;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-yellow {\n  flex-direction: column;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-yellow .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #f9c902;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-yellow .u-caldr-hint-text {\n  display: inline-block;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-date {\n  display: flex;\n  height: 40px;\n  width: 100%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-date .u-caldr-body-hour {\n  flex-direction: column;\n  width: 4%;\n  height: 100%;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  text-align: center;\n  line-height: 40px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-date .u-caldr-body-week {\n  flex-direction: column;\n  width: 96%;\n  height: 100%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-date .u-caldr-body-week .weekday {\n  display: inline-block;\n  width: 14.285714%;\n  height: 40px;\n  border-left: 1px solid #E9E0E0;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  font-size: 14px;\n  text-align: center;\n  line-height: 40px;\n  background-color: #F7F5F5;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body {\n  display: flex;\n  width: 100%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-time {\n  flex-direction: column;\n  width: 4%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-time .u-caldr-body-title {\n  width: 100%;\n  height: 40px;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  font-size: 14px;\n  text-align: center;\n  line-height: 40px;\n  background-color: #F7F5F5;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-time .u-caldr-body-hour {\n  width: 100%;\n  height: 80px;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  font-size: 14px;\n  text-align: center;\n  line-height: 80px;\n  background-color: #F7F5F5;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week {\n  position: relative;\n  flex-direction: column;\n  width: 96%;\n  height: 100%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday {\n  position: relative;\n  display: inline-block;\n  width: 14.285714%;\n  height: 1960px;\n  border-left: 1px solid #E9E0E0;\n  /*\n\t\t\t\t\t\t\t\t.u-caldr-body-event {\n\t\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t\t\tdisplay: -webkit-flex;\n\t\t                \t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\twidth:96%;\n\t\t\t\t\t\t\t\t\tz-index: 9999;\n\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t&.planned {\n\t\t\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #e91e63;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t&.unplanned {\n\t\t\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #000;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t&.release {\n\t\t\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #42b347;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t&.demo {\n\t\t\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #03a9f4;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t&.other {\n\t\t\t\t\t\t\t\t\t\tcolor: #000;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #f9c902;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}*/\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .u-caldr-weekDay-title {\n  width: 100%;\n  height: 40px;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  font-size: 14px;\n  text-align: center;\n  line-height: 40px;\n  background-color: #F7F5F5;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .u-caldr-weekDay-body {\n  height: 1920px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .u-caldr-weekDay-body .u-caldr-weekDay-body-block {\n  height: 80px;\n  width: 100%;\n  border-top: 1px solid #E9E0E0;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .u-caldr-weekDay-body .shadowBlock {\n  position: absolute;\n  width: 96%;\n  height: 80px;\n  background-color: rgba(90, 170, 250, 0.5);\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-dialog-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 40;\n  opacity: .95;\n  background: rgba(91, 147, 177, 0.2);\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content {\n  position: absolute;\n  z-index: 100;\n  width: 440px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header {\n  padding: 10px 20px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header {\n  background-color: #0774af;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header h2 {\n  color: #FFFFFF;\n  margin: 0;\n  font-size: 18px;\n  font-weight: normal;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header .close {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  color: #FFFFFF;\n  font-weight: bold;\n  cursor: pointer;\n  opacity: .8;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header .close:hover {\n  opacity: 1;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body {\n  background-color: #FFFFFF;\n  font-size: 14px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-form {\n  padding: 10px 20px;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.3);\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-form label {\n  display: inline-block;\n  width: 120px;\n  height: 20px;\n  color: #0774af;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-form input {\n  display: inline-block;\n  height: 20px;\n  width: 400px;\n  border: none;\n  border-bottom: 1px solid #0774af;\n  outline: medium;\n  margin-bottom: 5px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-form input.time {\n  width: 275px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-button {\n  padding: 6px 20px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-button button {\n  margin-left: 300px;\n  width: 50px;\n  height: 25px;\n  border: none;\n  color: white;\n  background-color: #0774af;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock {\n  position: absolute;\n  left: 0;\n  display: -webkit-flex;\n  display: flex;\n  width: 96%;\n  z-index: 10;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  text-align: center;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.planned {\n  color: #fff;\n  background-color: #e91e63;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.unplanned {\n  color: #fff;\n  background-color: #000;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.release {\n  color: #fff;\n  background-color: #42b347;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.demo {\n  color: #fff;\n  background-color: #03a9f4;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.other {\n  color: #000;\n  background-color: #f9c902;\n}\n/* ----- Dialog start ----- */\n.m-dialog {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.m-dialog .m-dialog-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  opacity: .95;\n  background: #26323e;\n}\n.m-dialog .m-comtent {\n  width: 600px;\n  margin: 30px auto;\n  z-index: 1060;\n  position: relative;\n}\n.m-dialog .m-comtent .m-header,\n.m-dialog .m-comtent .m-body {\n  padding: 10px 20px;\n}\n.m-dialog .m-comtent .m-header {\n  background-color: #8D6E63;\n}\n.m-dialog .m-comtent .m-header h2 {\n  color: #FFFFFF;\n  margin: 0;\n  font-size: 18px;\n  font-weight: normal;\n}\n.m-dialog .m-comtent .m-header .close {\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  color: #FFFFFF;\n  font-weight: bold;\n  cursor: pointer;\n  opacity: .8;\n}\n.m-dialog .m-comtent .m-header .close:hover {\n  opacity: 1;\n}\n.m-dialog .m-comtent .m-body {\n  background-color: #FFFFFF;\n  font-size: 14px;\n}\n/* ----- Dialog end ----- */\n/* ----- Tooltip start ----- */\n.m-tooltip {\n  position: fixed;\n  color: #FFFFFF;\n  padding: 7px 12px;\n  z-index: 1020;\n  max-width: 50%;\n  opacity: 0;\n  -moz-transition: opacity 1s cubic-bezier(0, 0, 0, 1);\n  -webkit-transition: opacity 1s cubic-bezier(0, 0, 0, 1);\n  -o-transition: opacity 1s cubic-bezier(0, 0, 0, 1);\n  transition: opacity 1s cubic-bezier(0, 0, 0, 1);\n}\n.m-tooltip span {\n  line-height: 16px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.m-tooltip:after {\n  content: '';\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n}\n.m-tooltip.top:after {\n  bottom: -20px;\n  left: 10px;\n  border-top: 10px solid #1c1c1c;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n}\n.m-tooltip.right:after {\n  top: 10px;\n  left: -20px;\n  border-top: 10px solid transparent;\n  border-left: 10px solid transparent;\n  border-right: 10px solid #1c1c1c;\n  border-bottom: 10px solid transparent;\n}\n/* ----- Tooltip end ----- */\n/* ----- Tabs start ----- */\n.m-tabs ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.m-tabs ul.m-tab li {\n  display: inline-block;\n  padding: 8px 12px;\n  border: 1px solid #CCCCCC;\n  margin-right: 2px;\n  cursor: pointer;\n  background-color: #757575;\n  color: #FFFFFF;\n}\n.m-tabs ul.m-tab li.active {\n  background-color: #FFFFFF;\n  color: #333333;\n  border-bottom: 1px solid #FFFFFF;\n}\n.m-tabs .m-tab-content {\n  display: none;\n  background-color: #FFFFFF;\n  border: 1px solid #CCC;\n  margin-top: -1px;\n  padding: 5px 12px;\n}\n/* ----- Tabs end ----- */\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<div class=m-dialog v-show=showDialog> <div class=m-dialog-mask></div> <div class=m-comtent> <div class=m-header> <h2>{{ title }}</h2> <span class=close title=close v-on:click=close><i class=\"icon iconfont\">&#xe613;</i></span> </div> <div class=m-body> <p v-html=body></p> </div> </div> </div> ";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<div class=m-tab-content> <slot></slot> </div>";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<div class=m-tabs> <ul class=m-tab> <li v-for=\"(tab, idx) in tabsLabel\" :class=\"idx === 0 ? 'active' : ''\" v-on:click=changeTab> {{ tab }} </li> </ul> <slot></slot> </div>";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=pure-u-1-1> <div class=m-box> <div class=\"u-caldr-select pure-g\"> <div class=\"pure-u-1-3 u-caldr-select-month\"> {{ month }} </div> <div class=\"pure-u-1-3 u-caldr-select-day\"> <div class=boxCenter> <i class=\"iconfont icon\">&#xe636;</i> <span>Wednesday,MAR 1,2017</span> <i class=\"iconfont icon\">&#xe632;</i> </div> </div> <div class=\"pure-u-1-3 u-caldr-select-button\"> <div class=\"buttonGrp clearfix\"> <button id=month>Month</button> <button id=week>Week</button> <button id=today>Today</button> </div> </div> </div> <div class=u-caldr-hint> <div id=u-caldr-hint-red> <div class=colorBlock>.</div> <div class=u-caldr-hint-text>Planned outage</div> </div> <div id=u-caldr-hint-black> <div class=colorBlock>.</div> <div class=u-caldr-hint-text>Unplanned outage</div> </div> <div id=u-caldr-hint-green> <div class=colorBlock>.</div> <div class=u-caldr-hint-text>Module release, not all outage</div> </div> <div id=u-caldr-hint-blue> <div class=colorBlock>.</div> <div class=u-caldr-hint-text>Demo</div> </div> <div id=u-caldr-hint-yellow> <div class=colorBlock>.</div> <div class=u-caldr-hint-text>Other activities</div> </div> </div> <div class=u-caldr-body> <div class=u-caldr-body-time> <div class=u-caldr-body-title><i class=\"iconfont icon\">&#xe625;</i></div> <div class=u-caldr-body-hour>0AM</div> <div class=u-caldr-body-hour>1AM</div> <div class=u-caldr-body-hour>2AM</div> <div class=u-caldr-body-hour>3AM</div> <div class=u-caldr-body-hour>4AM</div> <div class=u-caldr-body-hour>5AM</div> <div class=u-caldr-body-hour>6AM</div> <div class=u-caldr-body-hour>7AM</div> <div class=u-caldr-body-hour>8AM</div> <div class=u-caldr-body-hour>9AM</div> <div class=u-caldr-body-hour>10AM</div> <div class=u-caldr-body-hour>11AM</div> <div class=u-caldr-body-hour>0PM</div> <div class=u-caldr-body-hour>1PM</div> <div class=u-caldr-body-hour>2PM</div> <div class=u-caldr-body-hour>3PM</div> <div class=u-caldr-body-hour>4PM</div> <div class=u-caldr-body-hour>5PM</div> <div class=u-caldr-body-hour>6PM</div> <div class=u-caldr-body-hour>7PM</div> <div class=u-caldr-body-hour>8PM</div> <div class=u-caldr-body-hour>9PM</div> <div class=u-caldr-body-hour>10PM</div> <div class=u-caldr-body-hour>11PM</div> </div> <div class=u-caldr-body-week> <div class=pure-g> <week-day :item=item v-for=\"item in agenda\"></week-day> </div> </div> </div> </div> </div> ";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<div v-if=ifShowDialog> <div class=m-dialog-mask></div> <div class=m-content :style=styleDialog> <div class=m-header> <h2>{{ title }}</h2> <span class=close title=close @click=close><i class=\"icon iconfont\">&#xe613;</i></span> </div> <div class=m-body> <div class=m-form> <input @keyup.esc=close v-model=message placeholder=\"Write Event here...\" autofocus/> <label for=time>Time Duration(hour)</label> <input class=time id=time v-model=duration placeholder=\"2 hours\"/> <label for=event>Event Options</label> <select id=event v-model=selected> <option v-for=\"option in this.options\" v-bind:value=option.value> {{ option.text }} </option> </select> </div> <div class=m-button> <button @click=submitEvent>Save</button> </div> </div> </div> </div> ";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<div class=weekday> <div class=u-caldr-weekDay-title>{{ item.date.substring(6, 10) }}</div> <div @click.left=mouseClick class=u-caldr-weekDay-body> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <div class=u-caldr-weekDay-body-block></div> <m-block :showblock=ifShowShadowBlock :style=styleShadowBlock></m-block> </div> <m-dialog @clear=clearDialog @submit=storeEvent :styledialog=styleDialog :title=title :options=options :ifshowdialog=ifShowDialog> </m-dialog> <m-events :item=item v-for=\"item in subjects\"></m-events> </div> ";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<p class=pure-u-1-1>Copyright © 2017 – 2017</p>";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<ul class=pure-u-1-1> <li><i style=font-size:20px;vertical-align:-1px;color:#3e8fc6 class=\"icon iconfont\">&#xe64e;</i> <a>PROJECT</a> <i class=\"icon iconfont\" style=font-size:12px;font-weight:700;vertical-align:1px;color:#3e8fc6>&#xe632;</i> </li> <li>{{ currentNav }}</li> </ul>";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<ul> <li class=m-logo title=logo><router-link to=/ ><i class=\"icon iconfont\">&#xe72c;</i></router-link></li> <li v-tooltip=\"{title: 'In overview, you can check THROUGHPUT<br />and RESPONSE TIME.', position: 'right'}\"><router-link to=/index><i class=\"icon iconfont\">&#xe7dd;</i><span>Overview</span></router-link></li> <li v-tooltip=\"{title: 'In calendar, you can add your demo date,<br /> project deployment date etc.', position: 'right'}\"><router-link to=/calendar><i class=\"icon iconfont\">&#xe60f;</i><span>Calendar</span></router-link></li> <li><router-link to=/metrics><i class=\"icon iconfont\">&#xe6cc;</i><span>Metrics</span></router-link></li> <li><router-link to=/logs><i class=\"icon iconfont\">&#xe769;</i><span>Logs</span></router-link></li> <li><router-link to=/events><i class=\"icon iconfont\">&#xe6ae;</i><span>Events</span></router-link></li> <li><router-link to=/settings><i class=\"icon iconfont\">&#xe6db;</i><span>Settings</span></router-link></li> </ul>";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=pure-u-1-1> <div class=m-box> <p> <img v-bind:src=alertingImageUrl style=width:100% /> </p> </div> </div>";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class=pure-g> <div class=\"pure-u-1-1 u-dashBtn\"> <div class=m-box> <form> <fieldset> <label for=state>Current Monitoring Service</label> <select id=state> <option>Overview</option> <option>Opportunities</option> <option>Tech Expertise</option> <optgroup label=Territory> <option>Clients</option> <option>ProspectReach</option> <option>Social Search</option> <option>CrossBrand</option> </optgroup> <optgroup label=\"Digital Me\"> <option>My Rep Page</option> <option>IBM OneScore</option> <option>My Feeds</option> </optgroup> <optgroup label=\"Learning Hub\"> <option>Digital Mastery</option> </optgroup> </select> </fieldset> </form> <div class=u-btnGroup> <button class=u-btn v-bind:class=oneHourObject @click=oneHourRender>1 hour</button> <button class=u-btn v-bind:class=oneDayObject @click=oneDayRender>1 day</button> <button class=u-btn v-bind:class=sevenDayObject @click=sevenDayRender>week</button> <button class=u-btn v-bind:class=monthClassObject @click=oneMonthRender>month</button> <div class=u-icon> <span class=\"glyphicon glyphicon-calendar\" @click=toggleTimeSelect @mouseenter=\"ifShowCustom = true\" @mouseleave=\"ifShowCustom = false\"></span> <span class=custom v-show=ifShowCustom @click=toggleTimeSelect @mouseenter=\"ifShowCustom = true\" @mouseleave=\"ifShowCustom = false\">Custom</span> <transition name=slide-fade> <div class=u-select v-show=ifShowDateSelection> <span class=close title=close @click=\"ifShowDateSelection = false\"> <i class=\"icon iconfont\">&#xe613;</i> </span> <div class=\"u-date-select u-date-start\"> <div class=time-year> <span>Start Time</span><span class=bold>:</span> <div class=date> <input v-model=selectInput.startDate id=dateStart /> </div> </div> <div class=time-hour> <input v-model=selectInput.startHour /> <span class=\"up glyphicon glyphicon-chevron-up\" @click=\"selectInput.startHour += 1\"></span> <span class=\"down glyphicon glyphicon-chevron-down\" @click=\"selectInput.startHour -= 1\"></span> </div> <span class=bold>:</span> <div class=time-hour> <input v-model=selectInput.startMinute /> <span class=\"up glyphicon glyphicon-chevron-up\" @click=\"selectInput.startMinute += 1\"></span> <span class=\"down glyphicon glyphicon-chevron-down\" @click=\"selectInput.startMinute -= 1\"></span> </div> </div> <div class=u-date-select> <div class=time-year> <span>End Time</span><span class=bold>:</span> <div class=date> <input v-model=selectInput.endDate id=dateEnd /> </div> </div> <div class=time-hour> <input v-model=selectInput.endHour /> <span class=\"up glyphicon glyphicon-chevron-up\" @click=\"selectInput.endHour += 1\"></span> <span class=\"down glyphicon glyphicon-chevron-down\" @click=\"selectInput.endHour -= 1\"></span> </div> <span class=bold>:</span> <div class=time-hour> <input v-model=selectInput.endMinute /> <span class=\"up glyphicon glyphicon-chevron-up\" @click=\"selectInput.endMinute += 1\"></span> <span class=\"down glyphicon glyphicon-chevron-down\" @click=\"selectInput.endMinute -= 1\"></span> </div> </div> <div class=u-btn-save @click=saveSelect> save </div> </div> </transition> </div> </div> </div> </div> <div class=\"pure-u-1-1 chart\"> <div class=m-box> <h2>THROUGHPUT AND RESPONSE</h2> <div id=Dash3 style=width:100%;height:400px></div> </div> </div> <div class=\"pure-u-1-1 chart\"> <div class=m-box> <h2>THROUGHPUT AND RESPONSE</h2> <div id=Dash4 style=width:100%;height:400px></div> </div> </div> <div class=\"pure-u-1-1 analysis\"> <div class=m-box> <h2>Request Communication Analysis</h2> <m-histogram :events=events :timeline=timeLine></m-histogram> </div> </div> </div> ";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<div class=histogram @mousemove=hover @mouseleave=mouseLeave> <div id=histogramContainer class=canvas_container style=width:100%;height:420px> <canvas id=u-histogram>Your browser does not support the HTML5 canvas tag.Consider update your IE or use chrome/Firefox instead!</canvas> <m-tooltip v-if=ifShowTooltip :event=eventObject :style=styleTooltip> </m-tooltip> </div> </div> ";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<div class=index-tooltip id=barTooltip> <span>{{ event.url }}</span> <br/> <div :item=item v-for=\"item in event.count\"> <span>{{ item.name }}： </span> <span>{{ item.time }}s</span> </div> </div> ";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<div class=pure-u-1-1> <div class=m-box> <p> <img v-bind:src=errorsImageUrl style=width:100% /> </p> </div> </div>";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<div class=pure-u-1-1> <div class=m-box> <p> <img v-bind:src=metricsImageUrl style=width:100% /> </p> </div> </div>";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<div class=pure-u-1-1> <div class=m-box> <p> <img v-bind:src=settingsImageUrl style=width:100% /> </p> </div> </div> ";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<div class=pure-u-1-1> <div class=m-box> <h1 style=font-size:20px;font-weight:400>测试页面</h1> <ul> <li v-for=\"todo in todos\" v-tooltip=\"{title: todo.fulltext}\"> {{ todo.text }} </li> </ul> <p><button @click=newData>获取数据</button></p> <p><button @click=showDialog>弹窗</button></p> <p><button @click=updateDialog>修改弹窗内容</button></p> <p><button @click=switchComponent>切换组件</button></p> <component :is=currentView> </component> </div> <m-dialog :title=title :body=body> <component slot=body :is=currentDialog> </component> </m-dialog> <m-tabs :tabslabel=tabsLabel> <m-tab> Feugiat senectus conubia ultrices magna eu, enim primis ultricies laoreet faucibus eleifend, dapibus vulputate justo eleifend habitasse cursus tincidunt interdum potenti vitae volutpat fringilla etiam curabitur vehicula, adipiscing felis sem adipiscing ullamcorper primis augue faucibus mattis luctus vel vitae massa facilisis, neque taciti massa praesent sodales ligula, condimentum integer mollis vulputate. </m-tab> <m-tab> <p>Elementum massa libero convallis <i><s>congue aliquam pellentesque erat ornare</s></i> aenean velit ad cubilia, fermentum amet ullamcorper potenti euismod vel luctus id sollicitudin justo curabitur venenatis pellentesque ullamcorper proin nulla donec faucibus, cursus augue eros nisl vehicula sem, tellus risus molestie litora nibh etiam ut justo cras sociosqu curae augue nunc ad tempus per, purus auctor class porttitor tellus lobortis urna.</p> <p>Lobortis <u>s vestibulum dictumst rutrum velit, vitae dictum</u> velit enim taciti malesuada in egestas, a aliquam metus pulvinar aliquam molestie suspendisse habitant suspendisse ut cubilia a aliquet aenean cubilia vulputate hac sollicitudin, dictumst placerat aliquam orci est semper fames nullam porta morbi aliquam egestas nisi dictum augue ut.</p> </m-tab> </m-tabs> <p>------</p> <m-tabs :tabslabel=\"['Web前端', 'Web服务']\"> <m-tab> <p>一段文字，<u v-tooltip=\"{title: '你好啊，欢迎使用', position: 'top'}\">鼠标滑过</u>。</p> </m-tab> <m-tab> <button v-on:click=showDialog>弹窗</button> </m-tab> </m-tabs> </div> ";

/***/ }),
/* 50 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f721466883998665b87923b92dea655b.svg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8906ae6af49fe9c89e21ddba1f93ef90.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0a74ce208a63514c637b04b127ebb187.ttf";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "db69f493a3a797c4bdf1039c0abef2c5.woff";

/***/ })
/******/ ]);