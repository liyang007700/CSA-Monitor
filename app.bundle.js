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

var	fixUrls = __webpack_require__(58);

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

var _dialog = __webpack_require__(40);

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


var _footer = __webpack_require__(46);

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


var _header = __webpack_require__(47);

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


var _leftNav = __webpack_require__(48);

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

module.exports = "<!-- Application root -->\r\n<div id=\"m-app\" class=\"pure-g\">\r\n\t<div id=\"m-header-wrapper\" class=\"pure-u-1-1\">\r\n\t\t<div id=\"m-header\">\r\n\t\t\t<app-header></app-header>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"m-left-nav\" class=\"pure-u\">\r\n\t\t<app-left-nav></app-left-nav>\r\n\t</div>\r\n\t<div id=\"m-main-wrapper\" class=\"pure-u-1-1\">\r\n\t\t<div id=\"m-main\" v-bind:class=\"mMainClass\">\r\n\t\t\t<router-view></router-view>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"m-footer-wrapper\" class=\"pure-u-1-1\">\r\n\t\t<div id=\"m-footer\">\r\n\t\t\t<app-footer></app-footer>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";

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
		module.hot.accept("!!../node_modules/css-loader/index.js!./glyphicons.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./glyphicons.css");
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


__webpack_require__(14);

__webpack_require__(11);

__webpack_require__(13);

__webpack_require__(12);

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

var _calendar = __webpack_require__(43);

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


var _weekDay = __webpack_require__(45);

var _weekDay2 = _interopRequireDefault(_weekDay);

var _inputDialog = __webpack_require__(44);

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

var _events = __webpack_require__(49);

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

var _chart = __webpack_require__(57);

var _chart2 = _interopRequireDefault(_chart);

var _index = __webpack_require__(50);

var _index2 = _interopRequireDefault(_index);

var _services = __webpack_require__(28);

var _indexWidget = __webpack_require__(22);

var _tooltip = __webpack_require__(0);

var _echartConfig = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// hover info widget

// async data request api based on vue-source
/* jshint esversion: 6 */
//var moment = require('moment');
//var Pikaday = require('pikaday');
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
			/* 动态加载一个脚本，但是还没来得及执行
   var script = document.createElement("script")
   script.type = "text/javascript";
   script.src = "./libs/echarts.min.js";
   document.body.appendChild(script);*/

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
		this.renderChart("Dash3", _chart2.default);
	},
	components: {
		"m-histogram": _indexWidget.widgetIndex.mHistogram
	}
};
// local components in this page
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

var _Histogram = __webpack_require__(51);

var _Histogram2 = _interopRequireDefault(_Histogram);

var _Tooltip = __webpack_require__(52);

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
                    this.createLegend(ctx, container.offsetWidth);
                    this.createXaxis(ctx, container.offsetWidth, container.offsetHeight, 4, this.timeLine);

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

var _logs = __webpack_require__(53);

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

var _metrics = __webpack_require__(54);

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

var _settings = __webpack_require__(55);

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

var _tests = __webpack_require__(56);

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


var _tabs = __webpack_require__(42);

var _tabs2 = _interopRequireDefault(_tabs);

var _tab = __webpack_require__(41);

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
exports.push([module.i, "@font-face {\r\n  font-family: 'Glyphicons Halflings';\r\n\r\n  src: url(" + __webpack_require__(4) + ");\r\n  src: url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(36) + ") format('woff2'), url(" + __webpack_require__(35) + ") format('woff'), url(" + __webpack_require__(34) + ") format('truetype'), url(" + __webpack_require__(33) + "#glyphicons_halflingsregular) format('svg');\r\n}\r\n.glyphicon {\r\n  position: relative;\r\n  top: 1px;\r\n  display: inline-block;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  line-height: 1;\r\n\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.glyphicon-asterisk:before {\r\n  content: \"*\";\r\n}\r\n.glyphicon-plus:before {\r\n  content: \"+\";\r\n}\r\n.glyphicon-euro:before,\r\n.glyphicon-eur:before {\r\n  content: \"\\20AC\";\r\n}\r\n.glyphicon-minus:before {\r\n  content: \"\\2212\";\r\n}\r\n.glyphicon-cloud:before {\r\n  content: \"\\2601\";\r\n}\r\n.glyphicon-envelope:before {\r\n  content: \"\\2709\";\r\n}\r\n.glyphicon-pencil:before {\r\n  content: \"\\270F\";\r\n}\r\n.glyphicon-glass:before {\r\n  content: \"\\E001\";\r\n}\r\n.glyphicon-music:before {\r\n  content: \"\\E002\";\r\n}\r\n.glyphicon-search:before {\r\n  content: \"\\E003\";\r\n}\r\n.glyphicon-heart:before {\r\n  content: \"\\E005\";\r\n}\r\n.glyphicon-star:before {\r\n  content: \"\\E006\";\r\n}\r\n.glyphicon-star-empty:before {\r\n  content: \"\\E007\";\r\n}\r\n.glyphicon-user:before {\r\n  content: \"\\E008\";\r\n}\r\n.glyphicon-film:before {\r\n  content: \"\\E009\";\r\n}\r\n.glyphicon-th-large:before {\r\n  content: \"\\E010\";\r\n}\r\n.glyphicon-th:before {\r\n  content: \"\\E011\";\r\n}\r\n.glyphicon-th-list:before {\r\n  content: \"\\E012\";\r\n}\r\n.glyphicon-ok:before {\r\n  content: \"\\E013\";\r\n}\r\n.glyphicon-remove:before {\r\n  content: \"\\E014\";\r\n}\r\n.glyphicon-zoom-in:before {\r\n  content: \"\\E015\";\r\n}\r\n.glyphicon-zoom-out:before {\r\n  content: \"\\E016\";\r\n}\r\n.glyphicon-off:before {\r\n  content: \"\\E017\";\r\n}\r\n.glyphicon-signal:before {\r\n  content: \"\\E018\";\r\n}\r\n.glyphicon-cog:before {\r\n  content: \"\\E019\";\r\n}\r\n.glyphicon-trash:before {\r\n  content: \"\\E020\";\r\n}\r\n.glyphicon-home:before {\r\n  content: \"\\E021\";\r\n}\r\n.glyphicon-file:before {\r\n  content: \"\\E022\";\r\n}\r\n.glyphicon-time:before {\r\n  content: \"\\E023\";\r\n}\r\n.glyphicon-road:before {\r\n  content: \"\\E024\";\r\n}\r\n.glyphicon-download-alt:before {\r\n  content: \"\\E025\";\r\n}\r\n.glyphicon-download:before {\r\n  content: \"\\E026\";\r\n}\r\n.glyphicon-upload:before {\r\n  content: \"\\E027\";\r\n}\r\n.glyphicon-inbox:before {\r\n  content: \"\\E028\";\r\n}\r\n.glyphicon-play-circle:before {\r\n  content: \"\\E029\";\r\n}\r\n.glyphicon-repeat:before {\r\n  content: \"\\E030\";\r\n}\r\n.glyphicon-refresh:before {\r\n  content: \"\\E031\";\r\n}\r\n.glyphicon-list-alt:before {\r\n  content: \"\\E032\";\r\n}\r\n.glyphicon-lock:before {\r\n  content: \"\\E033\";\r\n}\r\n.glyphicon-flag:before {\r\n  content: \"\\E034\";\r\n}\r\n.glyphicon-headphones:before {\r\n  content: \"\\E035\";\r\n}\r\n.glyphicon-volume-off:before {\r\n  content: \"\\E036\";\r\n}\r\n.glyphicon-volume-down:before {\r\n  content: \"\\E037\";\r\n}\r\n.glyphicon-volume-up:before {\r\n  content: \"\\E038\";\r\n}\r\n.glyphicon-qrcode:before {\r\n  content: \"\\E039\";\r\n}\r\n.glyphicon-barcode:before {\r\n  content: \"\\E040\";\r\n}\r\n.glyphicon-tag:before {\r\n  content: \"\\E041\";\r\n}\r\n.glyphicon-tags:before {\r\n  content: \"\\E042\";\r\n}\r\n.glyphicon-book:before {\r\n  content: \"\\E043\";\r\n}\r\n.glyphicon-bookmark:before {\r\n  content: \"\\E044\";\r\n}\r\n.glyphicon-print:before {\r\n  content: \"\\E045\";\r\n}\r\n.glyphicon-camera:before {\r\n  content: \"\\E046\";\r\n}\r\n.glyphicon-font:before {\r\n  content: \"\\E047\";\r\n}\r\n.glyphicon-bold:before {\r\n  content: \"\\E048\";\r\n}\r\n.glyphicon-italic:before {\r\n  content: \"\\E049\";\r\n}\r\n.glyphicon-text-height:before {\r\n  content: \"\\E050\";\r\n}\r\n.glyphicon-text-width:before {\r\n  content: \"\\E051\";\r\n}\r\n.glyphicon-align-left:before {\r\n  content: \"\\E052\";\r\n}\r\n.glyphicon-align-center:before {\r\n  content: \"\\E053\";\r\n}\r\n.glyphicon-align-right:before {\r\n  content: \"\\E054\";\r\n}\r\n.glyphicon-align-justify:before {\r\n  content: \"\\E055\";\r\n}\r\n.glyphicon-list:before {\r\n  content: \"\\E056\";\r\n}\r\n.glyphicon-indent-left:before {\r\n  content: \"\\E057\";\r\n}\r\n.glyphicon-indent-right:before {\r\n  content: \"\\E058\";\r\n}\r\n.glyphicon-facetime-video:before {\r\n  content: \"\\E059\";\r\n}\r\n.glyphicon-picture:before {\r\n  content: \"\\E060\";\r\n}\r\n.glyphicon-map-marker:before {\r\n  content: \"\\E062\";\r\n}\r\n.glyphicon-adjust:before {\r\n  content: \"\\E063\";\r\n}\r\n.glyphicon-tint:before {\r\n  content: \"\\E064\";\r\n}\r\n.glyphicon-edit:before {\r\n  content: \"\\E065\";\r\n}\r\n.glyphicon-share:before {\r\n  content: \"\\E066\";\r\n}\r\n.glyphicon-check:before {\r\n  content: \"\\E067\";\r\n}\r\n.glyphicon-move:before {\r\n  content: \"\\E068\";\r\n}\r\n.glyphicon-step-backward:before {\r\n  content: \"\\E069\";\r\n}\r\n.glyphicon-fast-backward:before {\r\n  content: \"\\E070\";\r\n}\r\n.glyphicon-backward:before {\r\n  content: \"\\E071\";\r\n}\r\n.glyphicon-play:before {\r\n  content: \"\\E072\";\r\n}\r\n.glyphicon-pause:before {\r\n  content: \"\\E073\";\r\n}\r\n.glyphicon-stop:before {\r\n  content: \"\\E074\";\r\n}\r\n.glyphicon-forward:before {\r\n  content: \"\\E075\";\r\n}\r\n.glyphicon-fast-forward:before {\r\n  content: \"\\E076\";\r\n}\r\n.glyphicon-step-forward:before {\r\n  content: \"\\E077\";\r\n}\r\n.glyphicon-eject:before {\r\n  content: \"\\E078\";\r\n}\r\n.glyphicon-chevron-left:before {\r\n  content: \"\\E079\";\r\n}\r\n.glyphicon-chevron-right:before {\r\n  content: \"\\E080\";\r\n}\r\n.glyphicon-plus-sign:before {\r\n  content: \"\\E081\";\r\n}\r\n.glyphicon-minus-sign:before {\r\n  content: \"\\E082\";\r\n}\r\n.glyphicon-remove-sign:before {\r\n  content: \"\\E083\";\r\n}\r\n.glyphicon-ok-sign:before {\r\n  content: \"\\E084\";\r\n}\r\n.glyphicon-question-sign:before {\r\n  content: \"\\E085\";\r\n}\r\n.glyphicon-info-sign:before {\r\n  content: \"\\E086\";\r\n}\r\n.glyphicon-screenshot:before {\r\n  content: \"\\E087\";\r\n}\r\n.glyphicon-remove-circle:before {\r\n  content: \"\\E088\";\r\n}\r\n.glyphicon-ok-circle:before {\r\n  content: \"\\E089\";\r\n}\r\n.glyphicon-ban-circle:before {\r\n  content: \"\\E090\";\r\n}\r\n.glyphicon-arrow-left:before {\r\n  content: \"\\E091\";\r\n}\r\n.glyphicon-arrow-right:before {\r\n  content: \"\\E092\";\r\n}\r\n.glyphicon-arrow-up:before {\r\n  content: \"\\E093\";\r\n}\r\n.glyphicon-arrow-down:before {\r\n  content: \"\\E094\";\r\n}\r\n.glyphicon-share-alt:before {\r\n  content: \"\\E095\";\r\n}\r\n.glyphicon-resize-full:before {\r\n  content: \"\\E096\";\r\n}\r\n.glyphicon-resize-small:before {\r\n  content: \"\\E097\";\r\n}\r\n.glyphicon-exclamation-sign:before {\r\n  content: \"\\E101\";\r\n}\r\n.glyphicon-gift:before {\r\n  content: \"\\E102\";\r\n}\r\n.glyphicon-leaf:before {\r\n  content: \"\\E103\";\r\n}\r\n.glyphicon-fire:before {\r\n  content: \"\\E104\";\r\n}\r\n.glyphicon-eye-open:before {\r\n  content: \"\\E105\";\r\n}\r\n.glyphicon-eye-close:before {\r\n  content: \"\\E106\";\r\n}\r\n.glyphicon-warning-sign:before {\r\n  content: \"\\E107\";\r\n}\r\n.glyphicon-plane:before {\r\n  content: \"\\E108\";\r\n}\r\n.glyphicon-calendar:before {\r\n  content: \"\\E109\";\r\n}\r\n.glyphicon-random:before {\r\n  content: \"\\E110\";\r\n}\r\n.glyphicon-comment:before {\r\n  content: \"\\E111\";\r\n}\r\n.glyphicon-magnet:before {\r\n  content: \"\\E112\";\r\n}\r\n.glyphicon-chevron-up:before {\r\n  content: \"\\E113\";\r\n}\r\n.glyphicon-chevron-down:before {\r\n  content: \"\\E114\";\r\n}\r\n.glyphicon-retweet:before {\r\n  content: \"\\E115\";\r\n}\r\n.glyphicon-shopping-cart:before {\r\n  content: \"\\E116\";\r\n}\r\n.glyphicon-folder-close:before {\r\n  content: \"\\E117\";\r\n}\r\n.glyphicon-folder-open:before {\r\n  content: \"\\E118\";\r\n}\r\n.glyphicon-resize-vertical:before {\r\n  content: \"\\E119\";\r\n}\r\n.glyphicon-resize-horizontal:before {\r\n  content: \"\\E120\";\r\n}\r\n.glyphicon-hdd:before {\r\n  content: \"\\E121\";\r\n}\r\n.glyphicon-bullhorn:before {\r\n  content: \"\\E122\";\r\n}\r\n.glyphicon-bell:before {\r\n  content: \"\\E123\";\r\n}\r\n.glyphicon-certificate:before {\r\n  content: \"\\E124\";\r\n}\r\n.glyphicon-thumbs-up:before {\r\n  content: \"\\E125\";\r\n}\r\n.glyphicon-thumbs-down:before {\r\n  content: \"\\E126\";\r\n}\r\n.glyphicon-hand-right:before {\r\n  content: \"\\E127\";\r\n}\r\n.glyphicon-hand-left:before {\r\n  content: \"\\E128\";\r\n}\r\n.glyphicon-hand-up:before {\r\n  content: \"\\E129\";\r\n}\r\n.glyphicon-hand-down:before {\r\n  content: \"\\E130\";\r\n}\r\n.glyphicon-circle-arrow-right:before {\r\n  content: \"\\E131\";\r\n}\r\n.glyphicon-circle-arrow-left:before {\r\n  content: \"\\E132\";\r\n}\r\n.glyphicon-circle-arrow-up:before {\r\n  content: \"\\E133\";\r\n}\r\n.glyphicon-circle-arrow-down:before {\r\n  content: \"\\E134\";\r\n}\r\n.glyphicon-globe:before {\r\n  content: \"\\E135\";\r\n}\r\n.glyphicon-wrench:before {\r\n  content: \"\\E136\";\r\n}\r\n.glyphicon-tasks:before {\r\n  content: \"\\E137\";\r\n}\r\n.glyphicon-filter:before {\r\n  content: \"\\E138\";\r\n}\r\n.glyphicon-briefcase:before {\r\n  content: \"\\E139\";\r\n}\r\n.glyphicon-fullscreen:before {\r\n  content: \"\\E140\";\r\n}\r\n.glyphicon-dashboard:before {\r\n  content: \"\\E141\";\r\n}\r\n.glyphicon-paperclip:before {\r\n  content: \"\\E142\";\r\n}\r\n.glyphicon-heart-empty:before {\r\n  content: \"\\E143\";\r\n}\r\n.glyphicon-link:before {\r\n  content: \"\\E144\";\r\n}\r\n.glyphicon-phone:before {\r\n  content: \"\\E145\";\r\n}\r\n.glyphicon-pushpin:before {\r\n  content: \"\\E146\";\r\n}\r\n.glyphicon-usd:before {\r\n  content: \"\\E148\";\r\n}\r\n.glyphicon-gbp:before {\r\n  content: \"\\E149\";\r\n}\r\n.glyphicon-sort:before {\r\n  content: \"\\E150\";\r\n}\r\n.glyphicon-sort-by-alphabet:before {\r\n  content: \"\\E151\";\r\n}\r\n.glyphicon-sort-by-alphabet-alt:before {\r\n  content: \"\\E152\";\r\n}\r\n.glyphicon-sort-by-order:before {\r\n  content: \"\\E153\";\r\n}\r\n.glyphicon-sort-by-order-alt:before {\r\n  content: \"\\E154\";\r\n}\r\n.glyphicon-sort-by-attributes:before {\r\n  content: \"\\E155\";\r\n}\r\n.glyphicon-sort-by-attributes-alt:before {\r\n  content: \"\\E156\";\r\n}\r\n.glyphicon-unchecked:before {\r\n  content: \"\\E157\";\r\n}\r\n.glyphicon-expand:before {\r\n  content: \"\\E158\";\r\n}\r\n.glyphicon-collapse-down:before {\r\n  content: \"\\E159\";\r\n}\r\n.glyphicon-collapse-up:before {\r\n  content: \"\\E160\";\r\n}\r\n.glyphicon-log-in:before {\r\n  content: \"\\E161\";\r\n}\r\n.glyphicon-flash:before {\r\n  content: \"\\E162\";\r\n}\r\n.glyphicon-log-out:before {\r\n  content: \"\\E163\";\r\n}\r\n.glyphicon-new-window:before {\r\n  content: \"\\E164\";\r\n}\r\n.glyphicon-record:before {\r\n  content: \"\\E165\";\r\n}\r\n.glyphicon-save:before {\r\n  content: \"\\E166\";\r\n}\r\n.glyphicon-open:before {\r\n  content: \"\\E167\";\r\n}\r\n.glyphicon-saved:before {\r\n  content: \"\\E168\";\r\n}\r\n.glyphicon-import:before {\r\n  content: \"\\E169\";\r\n}\r\n.glyphicon-export:before {\r\n  content: \"\\E170\";\r\n}\r\n.glyphicon-send:before {\r\n  content: \"\\E171\";\r\n}\r\n.glyphicon-floppy-disk:before {\r\n  content: \"\\E172\";\r\n}\r\n.glyphicon-floppy-saved:before {\r\n  content: \"\\E173\";\r\n}\r\n.glyphicon-floppy-remove:before {\r\n  content: \"\\E174\";\r\n}\r\n.glyphicon-floppy-save:before {\r\n  content: \"\\E175\";\r\n}\r\n.glyphicon-floppy-open:before {\r\n  content: \"\\E176\";\r\n}\r\n.glyphicon-credit-card:before {\r\n  content: \"\\E177\";\r\n}\r\n.glyphicon-transfer:before {\r\n  content: \"\\E178\";\r\n}\r\n.glyphicon-cutlery:before {\r\n  content: \"\\E179\";\r\n}\r\n.glyphicon-header:before {\r\n  content: \"\\E180\";\r\n}\r\n.glyphicon-compressed:before {\r\n  content: \"\\E181\";\r\n}\r\n.glyphicon-earphone:before {\r\n  content: \"\\E182\";\r\n}\r\n.glyphicon-phone-alt:before {\r\n  content: \"\\E183\";\r\n}\r\n.glyphicon-tower:before {\r\n  content: \"\\E184\";\r\n}\r\n.glyphicon-stats:before {\r\n  content: \"\\E185\";\r\n}\r\n.glyphicon-sd-video:before {\r\n  content: \"\\E186\";\r\n}\r\n.glyphicon-hd-video:before {\r\n  content: \"\\E187\";\r\n}\r\n.glyphicon-subtitles:before {\r\n  content: \"\\E188\";\r\n}\r\n.glyphicon-sound-stereo:before {\r\n  content: \"\\E189\";\r\n}\r\n.glyphicon-sound-dolby:before {\r\n  content: \"\\E190\";\r\n}\r\n.glyphicon-sound-5-1:before {\r\n  content: \"\\E191\";\r\n}\r\n.glyphicon-sound-6-1:before {\r\n  content: \"\\E192\";\r\n}\r\n.glyphicon-sound-7-1:before {\r\n  content: \"\\E193\";\r\n}\r\n.glyphicon-copyright-mark:before {\r\n  content: \"\\E194\";\r\n}\r\n.glyphicon-registration-mark:before {\r\n  content: \"\\E195\";\r\n}\r\n.glyphicon-cloud-download:before {\r\n  content: \"\\E197\";\r\n}\r\n.glyphicon-cloud-upload:before {\r\n  content: \"\\E198\";\r\n}\r\n.glyphicon-tree-conifer:before {\r\n  content: \"\\E199\";\r\n}\r\n.glyphicon-tree-deciduous:before {\r\n  content: \"\\E200\";\r\n}\r\n.glyphicon-cd:before {\r\n  content: \"\\E201\";\r\n}\r\n.glyphicon-save-file:before {\r\n  content: \"\\E202\";\r\n}\r\n.glyphicon-open-file:before {\r\n  content: \"\\E203\";\r\n}\r\n.glyphicon-level-up:before {\r\n  content: \"\\E204\";\r\n}\r\n.glyphicon-copy:before {\r\n  content: \"\\E205\";\r\n}\r\n.glyphicon-paste:before {\r\n  content: \"\\E206\";\r\n}\r\n.glyphicon-alert:before {\r\n  content: \"\\E209\";\r\n}\r\n.glyphicon-equalizer:before {\r\n  content: \"\\E210\";\r\n}\r\n.glyphicon-king:before {\r\n  content: \"\\E211\";\r\n}\r\n.glyphicon-queen:before {\r\n  content: \"\\E212\";\r\n}\r\n.glyphicon-pawn:before {\r\n  content: \"\\E213\";\r\n}\r\n.glyphicon-bishop:before {\r\n  content: \"\\E214\";\r\n}\r\n.glyphicon-knight:before {\r\n  content: \"\\E215\";\r\n}\r\n.glyphicon-baby-formula:before {\r\n  content: \"\\E216\";\r\n}\r\n.glyphicon-tent:before {\r\n  content: \"\\26FA\";\r\n}\r\n.glyphicon-blackboard:before {\r\n  content: \"\\E218\";\r\n}\r\n.glyphicon-bed:before {\r\n  content: \"\\E219\";\r\n}\r\n.glyphicon-apple:before {\r\n  content: \"\\F8FF\";\r\n}\r\n.glyphicon-erase:before {\r\n  content: \"\\E221\";\r\n}\r\n.glyphicon-hourglass:before {\r\n  content: \"\\231B\";\r\n}\r\n.glyphicon-lamp:before {\r\n  content: \"\\E223\";\r\n}\r\n.glyphicon-duplicate:before {\r\n  content: \"\\E224\";\r\n}\r\n.glyphicon-piggy-bank:before {\r\n  content: \"\\E225\";\r\n}\r\n.glyphicon-scissors:before {\r\n  content: \"\\E226\";\r\n}\r\n.glyphicon-bitcoin:before {\r\n  content: \"\\E227\";\r\n}\r\n.glyphicon-btc:before {\r\n  content: \"\\E227\";\r\n}\r\n.glyphicon-xbt:before {\r\n  content: \"\\E227\";\r\n}\r\n.glyphicon-yen:before {\r\n  content: \"\\A5\";\r\n}\r\n.glyphicon-jpy:before {\r\n  content: \"\\A5\";\r\n}\r\n.glyphicon-ruble:before {\r\n  content: \"\\20BD\";\r\n}\r\n.glyphicon-rub:before {\r\n  content: \"\\20BD\";\r\n}\r\n.glyphicon-scale:before {\r\n  content: \"\\E230\";\r\n}\r\n.glyphicon-ice-lolly:before {\r\n  content: \"\\E231\";\r\n}\r\n.glyphicon-ice-lolly-tasted:before {\r\n  content: \"\\E232\";\r\n}\r\n.glyphicon-education:before {\r\n  content: \"\\E233\";\r\n}\r\n.glyphicon-option-horizontal:before {\r\n  content: \"\\E234\";\r\n}\r\n.glyphicon-option-vertical:before {\r\n  content: \"\\E235\";\r\n}\r\n.glyphicon-menu-hamburger:before {\r\n  content: \"\\E236\";\r\n}\r\n.glyphicon-modal-window:before {\r\n  content: \"\\E237\";\r\n}\r\n.glyphicon-oil:before {\r\n  content: \"\\E238\";\r\n}\r\n.glyphicon-grain:before {\r\n  content: \"\\E239\";\r\n}\r\n.glyphicon-sunglasses:before {\r\n  content: \"\\E240\";\r\n}\r\n.glyphicon-text-size:before {\r\n  content: \"\\E241\";\r\n}\r\n.glyphicon-text-color:before {\r\n  content: \"\\E242\";\r\n}\r\n.glyphicon-text-background:before {\r\n  content: \"\\E243\";\r\n}\r\n.glyphicon-object-align-top:before {\r\n  content: \"\\E244\";\r\n}\r\n.glyphicon-object-align-bottom:before {\r\n  content: \"\\E245\";\r\n}\r\n.glyphicon-object-align-horizontal:before {\r\n  content: \"\\E246\";\r\n}\r\n.glyphicon-object-align-left:before {\r\n  content: \"\\E247\";\r\n}\r\n.glyphicon-object-align-vertical:before {\r\n  content: \"\\E248\";\r\n}\r\n.glyphicon-object-align-right:before {\r\n  content: \"\\E249\";\r\n}\r\n.glyphicon-triangle-right:before {\r\n  content: \"\\E250\";\r\n}\r\n.glyphicon-triangle-left:before {\r\n  content: \"\\E251\";\r\n}\r\n.glyphicon-triangle-bottom:before {\r\n  content: \"\\E252\";\r\n}\r\n.glyphicon-triangle-top:before {\r\n  content: \"\\E253\";\r\n}\r\n.glyphicon-console:before {\r\n  content: \"\\E254\";\r\n}\r\n.glyphicon-superscript:before {\r\n  content: \"\\E255\";\r\n}\r\n.glyphicon-subscript:before {\r\n  content: \"\\E256\";\r\n}\r\n.glyphicon-menu-left:before {\r\n  content: \"\\E257\";\r\n}\r\n.glyphicon-menu-right:before {\r\n  content: \"\\E258\";\r\n}\r\n.glyphicon-menu-down:before {\r\n  content: \"\\E259\";\r\n}\r\n.glyphicon-menu-up:before {\r\n  content: \"\\E260\";\r\n}\r\n", ""]);

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
exports.push([module.i, "/*!\r\nPure v0.6.2\r\nCopyright 2013 Yahoo!\r\nLicensed under the BSD License.\r\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\r\n*/\r\n/*!\r\nnormalize.css v^3.0 | MIT License | git.io/normalize\r\nCopyright (c) Nicolas Gallagher and Jonathan Neal\r\n*/\r\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\r\n/*!\r\nPure v0.6.2\r\nCopyright 2013 Yahoo!\r\nLicensed under the BSD License.\r\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\r\n*/\r\n/*!\r\nnormalize.css v^3.0 | MIT License | git.io/normalize\r\nCopyright (c) Nicolas Gallagher and Jonathan Neal\r\n*/\r\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\r\n.pure-button:focus,a:active,a:hover {\r\n    outline: 0\r\n}\r\n\r\n.pure-table,table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0\r\n}\r\n\r\nhtml {\r\n    font-family: sans-serif;\r\n    -ms-text-size-adjust: 100%;\r\n    -webkit-text-size-adjust: 100%\r\n}\r\n\r\nbody {\r\n    margin: 0\r\n}\r\n\r\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {\r\n    display: block\r\n}\r\n\r\naudio,canvas,progress,video {\r\n    display: inline-block;\r\n    vertical-align: baseline\r\n}\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0\r\n}\r\n\r\n[hidden],template {\r\n    display: none\r\n}\r\n\r\na {\r\n    background-color: transparent\r\n}\r\n\r\nabbr[title] {\r\n    border-bottom: 1px dotted\r\n}\r\n\r\nb,optgroup,strong {\r\n    font-weight: 700\r\n}\r\n\r\ndfn {\r\n    font-style: italic\r\n}\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: .67em 0\r\n}\r\n\r\nmark {\r\n    background: #ff0;\r\n    color: #000\r\n}\r\n\r\nsmall {\r\n    font-size: 80%\r\n}\r\n\r\nsub,sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline\r\n}\r\n\r\nsup {\r\n    top: -.5em\r\n}\r\n\r\nsub {\r\n    bottom: -.25em\r\n}\r\n\r\nimg {\r\n    border: 0\r\n}\r\n\r\nsvg:not(:root) {\r\n    overflow: hidden\r\n}\r\n\r\nfigure {\r\n    margin: 1em 40px\r\n}\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    height: 0\r\n}\r\n\r\npre,textarea {\r\n    overflow: auto\r\n}\r\n\r\ncode,kbd,pre,samp {\r\n    font-family: monospace,monospace;\r\n    font-size: 1em\r\n}\r\n\r\nbutton,input,optgroup,select,textarea {\r\n    color: inherit;\r\n    font: inherit;\r\n    margin: 0\r\n}\r\n\r\n.pure-button,input {\r\n    line-height: normal\r\n}\r\n\r\nbutton {\r\n    overflow: visible\r\n}\r\n\r\nbutton,select {\r\n    text-transform: none\r\n}\r\n\r\nbutton,html input[type=button],input[type=reset],input[type=submit] {\r\n    -webkit-appearance: button;\r\n    cursor: pointer\r\n}\r\n\r\nbutton[disabled],html input[disabled] {\r\n    cursor: default\r\n}\r\n\r\nbutton::-moz-focus-inner,input::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0\r\n}\r\n\r\ninput[type=checkbox],input[type=radio] {\r\n    box-sizing: border-box;\r\n    padding: 0\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {\r\n    height: auto\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: textfield;\r\n    box-sizing: content-box\r\n}\r\n\r\n.pure-button,.pure-form input:not([type]),.pure-menu {\r\n    box-sizing: border-box\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {\r\n    -webkit-appearance: none\r\n}\r\n\r\nfieldset {\r\n    border: 1px solid silver;\r\n    margin: 0 2px;\r\n    padding: .35em .625em .75em\r\n}\r\n\r\nlegend,td,th {\r\n    padding: 0\r\n}\r\n\r\nlegend {\r\n    border: 0\r\n}\r\n\r\n.hidden,[hidden] {\r\n    display: none!important\r\n}\r\n\r\n.pure-img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    display: block\r\n}\r\n\r\n.pure-g {\r\n    letter-spacing: -.31em;\r\n    text-rendering: optimizespeed;\r\n    font-family: FreeSans,Arimo,\"Droid Sans\",Helvetica,Arial,sans-serif;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-flex-flow: row wrap;\r\n    -ms-flex-flow: row wrap;\r\n    flex-flow: row wrap;\r\n    -webkit-align-content: flex-start;\r\n    -ms-flex-line-pack: start;\r\n    align-content: flex-start\r\n}\r\n\r\n@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {\r\n    table .pure-g {\r\n        display: block\r\n    }\r\n}\r\n\r\n.opera-only :-o-prefocus,.pure-g {\r\n    word-spacing: -.43em\r\n}\r\n\r\n.pure-u,.pure-u-1,.pure-u-1-1,.pure-u-1-12,.pure-u-1-2,.pure-u-1-24,.pure-u-1-3,.pure-u-1-4,.pure-u-1-5,.pure-u-1-6,.pure-u-1-8,.pure-u-10-24,.pure-u-11-12,.pure-u-11-24,.pure-u-12-24,.pure-u-13-24,.pure-u-14-24,.pure-u-15-24,.pure-u-16-24,.pure-u-17-24,.pure-u-18-24,.pure-u-19-24,.pure-u-2-24,.pure-u-2-3,.pure-u-2-5,.pure-u-20-24,.pure-u-21-24,.pure-u-22-24,.pure-u-23-24,.pure-u-24-24,.pure-u-3-24,.pure-u-3-4,.pure-u-3-5,.pure-u-3-8,.pure-u-4-24,.pure-u-4-5,.pure-u-5-12,.pure-u-5-24,.pure-u-5-5,.pure-u-5-6,.pure-u-5-8,.pure-u-6-24,.pure-u-7-12,.pure-u-7-24,.pure-u-7-8,.pure-u-8-24,.pure-u-9-24 {\r\n    letter-spacing: normal;\r\n    word-spacing: normal;\r\n    vertical-align: top;\r\n    text-rendering: auto;\r\n    display: inline-block;\r\n    zoom:1}\r\n\r\n.pure-g [class*=pure-u] {\r\n    font-family: sans-serif\r\n}\r\n\r\n.pure-u-1-24 {\r\n    width: 4.1667%\r\n}\r\n\r\n.pure-u-1-12,.pure-u-2-24 {\r\n    width: 8.3333%\r\n}\r\n\r\n.pure-u-1-8,.pure-u-3-24 {\r\n    width: 12.5%\r\n}\r\n\r\n.pure-u-1-6,.pure-u-4-24 {\r\n    width: 16.6667%\r\n}\r\n\r\n.pure-u-1-5 {\r\n    width: 20%\r\n}\r\n\r\n.pure-u-5-24 {\r\n    width: 20.8333%\r\n}\r\n\r\n.pure-u-1-4,.pure-u-6-24 {\r\n    width: 25%\r\n}\r\n\r\n.pure-u-7-24 {\r\n    width: 29.1667%\r\n}\r\n\r\n.pure-u-1-3,.pure-u-8-24 {\r\n    width: 33.3333%\r\n}\r\n\r\n.pure-u-3-8,.pure-u-9-24 {\r\n    width: 37.5%\r\n}\r\n\r\n.pure-u-2-5 {\r\n    width: 40%\r\n}\r\n\r\n.pure-u-10-24,.pure-u-5-12 {\r\n    width: 41.6667%\r\n}\r\n\r\n.pure-u-11-24 {\r\n    width: 45.8333%\r\n}\r\n\r\n.pure-u-1-2,.pure-u-12-24 {\r\n    width: 50%\r\n}\r\n\r\n.pure-u-13-24 {\r\n    width: 54.1667%\r\n}\r\n\r\n.pure-u-14-24,.pure-u-7-12 {\r\n    width: 58.3333%\r\n}\r\n\r\n.pure-u-3-5 {\r\n    width: 60%\r\n}\r\n\r\n.pure-u-15-24,.pure-u-5-8 {\r\n    width: 62.5%\r\n}\r\n\r\n.pure-u-16-24,.pure-u-2-3 {\r\n    width: 66.6667%\r\n}\r\n\r\n.pure-u-17-24 {\r\n    width: 70.8333%\r\n}\r\n\r\n.pure-u-18-24,.pure-u-3-4 {\r\n    width: 75%\r\n}\r\n\r\n.pure-u-19-24 {\r\n    width: 79.1667%\r\n}\r\n\r\n.pure-u-4-5 {\r\n    width: 80%\r\n}\r\n\r\n.pure-u-20-24,.pure-u-5-6 {\r\n    width: 83.3333%\r\n}\r\n\r\n.pure-u-21-24,.pure-u-7-8 {\r\n    width: 87.5%\r\n}\r\n\r\n.pure-u-11-12,.pure-u-22-24 {\r\n    width: 91.6667%\r\n}\r\n\r\n.pure-u-23-24 {\r\n    width: 95.8333%\r\n}\r\n\r\n.pure-u-1,.pure-u-1-1,.pure-u-24-24,.pure-u-5-5 {\r\n    width: 100%\r\n}\r\n\r\n.pure-button {\r\n    display: inline-block;\r\n    zoom:1;white-space: nowrap;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    -webkit-user-drag: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none\r\n}\r\n\r\n.pure-button::-moz-focus-inner {\r\n    padding: 0;\r\n    border: 0\r\n}\r\n\r\n.pure-button-group {\r\n    letter-spacing: -.31em;\r\n    text-rendering: optimizespeed\r\n}\r\n\r\n.opera-only :-o-prefocus,.pure-button-group {\r\n    word-spacing: -.43em\r\n}\r\n\r\n.pure-button {\r\n    font-family: inherit;\r\n    font-size: 100%;\r\n    padding: .5em 1em;\r\n    color: #444;\r\n    color: rgba(0,0,0,.8);\r\n    border: 1px solid #999;\r\n    border: transparent;\r\n    background-color: #E6E6E6;\r\n    text-decoration: none;\r\n    border-radius: 2px\r\n}\r\n\r\n.pure-button-hover,.pure-button:focus,.pure-button:hover {\r\n    filter: alpha(opacity=90);\r\n    background-image: -webkit-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));\r\n    background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))\r\n}\r\n\r\n.pure-button-active,.pure-button:active {\r\n    box-shadow: 0 0 0 1px rgba(0,0,0,.15) inset,0 0 6px rgba(0,0,0,.2) inset;\r\n    border-color: #000\\9\r\n}\r\n\r\n.pure-button-disabled,.pure-button-disabled:active,.pure-button-disabled:focus,.pure-button-disabled:hover,.pure-button[disabled] {\r\n    border: none;\r\n    background-image: none;\r\n    filter: alpha(opacity=40);\r\n    opacity: .4;\r\n    cursor: not-allowed;\r\n    box-shadow: none;\r\n    pointer-events: none\r\n}\r\n\r\n.pure-button-hidden {\r\n    display: none\r\n}\r\n\r\n.pure-button-primary,.pure-button-selected,a.pure-button-primary,a.pure-button-selected {\r\n    background-color: #0078e7;\r\n    color: #fff\r\n}\r\n\r\n.pure-button-group .pure-button {\r\n    letter-spacing: normal;\r\n    word-spacing: normal;\r\n    vertical-align: top;\r\n    text-rendering: auto;\r\n    margin: 0;\r\n    border-radius: 0;\r\n    border-right: 1px solid #111;\r\n    border-right: 1px solid rgba(0,0,0,.2)\r\n}\r\n\r\n.pure-button-group .pure-button:first-child {\r\n    border-top-left-radius: 2px;\r\n    border-bottom-left-radius: 2px\r\n}\r\n\r\n.pure-button-group .pure-button:last-child {\r\n    border-top-right-radius: 2px;\r\n    border-bottom-right-radius: 2px;\r\n    border-right: none\r\n}\r\n\r\n.pure-form input[type=password],.pure-form input[type=email],.pure-form input[type=url],.pure-form input[type=date],.pure-form input[type=month],.pure-form input[type=time],.pure-form input[type=datetime],.pure-form input[type=datetime-local],.pure-form input[type=week],.pure-form input[type=tel],.pure-form input[type=color],.pure-form input[type=number],.pure-form input[type=search],.pure-form input[type=text],.pure-form select,.pure-form textarea {\r\n    padding: .5em .6em;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-shadow: inset 0 1px 3px #ddd;\r\n    border-radius: 4px;\r\n    vertical-align: middle;\r\n    box-sizing: border-box\r\n}\r\n\r\n.pure-form input:not([type]) {\r\n    padding: .5em .6em;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-shadow: inset 0 1px 3px #ddd;\r\n    border-radius: 4px\r\n}\r\n\r\n.pure-form input[type=color] {\r\n    padding: .2em .5em\r\n}\r\n\r\n.pure-form input:not([type]):focus,.pure-form input[type=password]:focus,.pure-form input[type=email]:focus,.pure-form input[type=url]:focus,.pure-form input[type=date]:focus,.pure-form input[type=month]:focus,.pure-form input[type=time]:focus,.pure-form input[type=datetime]:focus,.pure-form input[type=datetime-local]:focus,.pure-form input[type=week]:focus,.pure-form input[type=tel]:focus,.pure-form input[type=color]:focus,.pure-form input[type=number]:focus,.pure-form input[type=search]:focus,.pure-form input[type=text]:focus,.pure-form select:focus,.pure-form textarea:focus {\r\n    outline: 0;\r\n    border-color: #129FEA\r\n}\r\n\r\n.pure-form input[type=file]:focus,.pure-form input[type=checkbox]:focus,.pure-form input[type=radio]:focus {\r\n    outline: #129FEA auto 1px\r\n}\r\n\r\n.pure-form .pure-checkbox,.pure-form .pure-radio {\r\n    margin: .5em 0;\r\n    display: block\r\n}\r\n\r\n.pure-form input:not([type])[disabled],.pure-form input[type=password][disabled],.pure-form input[type=email][disabled],.pure-form input[type=url][disabled],.pure-form input[type=date][disabled],.pure-form input[type=month][disabled],.pure-form input[type=time][disabled],.pure-form input[type=datetime][disabled],.pure-form input[type=datetime-local][disabled],.pure-form input[type=week][disabled],.pure-form input[type=tel][disabled],.pure-form input[type=color][disabled],.pure-form input[type=number][disabled],.pure-form input[type=search][disabled],.pure-form input[type=text][disabled],.pure-form select[disabled],.pure-form textarea[disabled] {\r\n    cursor: not-allowed;\r\n    background-color: #eaeded;\r\n    color: #cad2d3\r\n}\r\n\r\n.pure-form input[readonly],.pure-form select[readonly],.pure-form textarea[readonly] {\r\n    background-color: #eee;\r\n    color: #777;\r\n    border-color: #ccc\r\n}\r\n\r\n.pure-form input:focus:invalid,.pure-form select:focus:invalid,.pure-form textarea:focus:invalid {\r\n    color: #b94a48;\r\n    border-color: #e9322d\r\n}\r\n\r\n.pure-form input[type=file]:focus:invalid:focus,.pure-form input[type=checkbox]:focus:invalid:focus,.pure-form input[type=radio]:focus:invalid:focus {\r\n    outline-color: #e9322d\r\n}\r\n\r\n.pure-form select {\r\n    height: 2.25em;\r\n    border: 1px solid #ccc;\r\n    background-color: #fff\r\n}\r\n\r\n.pure-form select[multiple] {\r\n    height: auto\r\n}\r\n\r\n.pure-form label {\r\n    margin: .5em 0 .2em\r\n}\r\n\r\n.pure-form fieldset {\r\n    margin: 0;\r\n    padding: .35em 0 .75em;\r\n    border: 0\r\n}\r\n\r\n.pure-form legend {\r\n    display: block;\r\n    width: 100%;\r\n    padding: .3em 0;\r\n    margin-bottom: .3em;\r\n    color: #333;\r\n    border-bottom: 1px solid #e5e5e5\r\n}\r\n\r\n.pure-form-stacked input:not([type]),.pure-form-stacked input[type=password],.pure-form-stacked input[type=email],.pure-form-stacked input[type=url],.pure-form-stacked input[type=date],.pure-form-stacked input[type=month],.pure-form-stacked input[type=time],.pure-form-stacked input[type=datetime],.pure-form-stacked input[type=datetime-local],.pure-form-stacked input[type=week],.pure-form-stacked input[type=tel],.pure-form-stacked input[type=color],.pure-form-stacked input[type=file],.pure-form-stacked input[type=number],.pure-form-stacked input[type=search],.pure-form-stacked input[type=text],.pure-form-stacked label,.pure-form-stacked select,.pure-form-stacked textarea {\r\n    display: block;\r\n    margin: .25em 0\r\n}\r\n\r\n.pure-form-aligned .pure-help-inline,.pure-form-aligned input,.pure-form-aligned select,.pure-form-aligned textarea,.pure-form-message-inline {\r\n    display: inline-block;\r\n    vertical-align: middle\r\n}\r\n\r\n.pure-form-aligned textarea {\r\n    vertical-align: top\r\n}\r\n\r\n.pure-form-aligned .pure-control-group {\r\n    margin-bottom: .5em\r\n}\r\n\r\n.pure-form-aligned .pure-control-group label {\r\n    text-align: right;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 10em;\r\n    margin: 0 1em 0 0\r\n}\r\n\r\n.pure-form-aligned .pure-controls {\r\n    margin: 1.5em 0 0 11em\r\n}\r\n\r\n.pure-form .pure-input-rounded,.pure-form input.pure-input-rounded {\r\n    border-radius: 2em;\r\n    padding: .5em 1em\r\n}\r\n\r\n.pure-form .pure-group fieldset {\r\n    margin-bottom: 10px\r\n}\r\n\r\n.pure-form .pure-group input,.pure-form .pure-group textarea {\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 0 0 -1px;\r\n    border-radius: 0;\r\n    position: relative;\r\n    top: -1px\r\n}\r\n\r\n.pure-form .pure-group input:focus,.pure-form .pure-group textarea:focus {\r\n    z-index: 3\r\n}\r\n\r\n.pure-form .pure-group input:first-child,.pure-form .pure-group textarea:first-child {\r\n    top: 1px;\r\n    border-radius: 4px 4px 0 0;\r\n    margin: 0\r\n}\r\n\r\n.pure-form .pure-group input:first-child:last-child,.pure-form .pure-group textarea:first-child:last-child {\r\n    top: 1px;\r\n    border-radius: 4px;\r\n    margin: 0\r\n}\r\n\r\n.pure-form .pure-group input:last-child,.pure-form .pure-group textarea:last-child {\r\n    top: -2px;\r\n    border-radius: 0 0 4px 4px;\r\n    margin: 0\r\n}\r\n\r\n.pure-form .pure-group button {\r\n    margin: .35em 0\r\n}\r\n\r\n.pure-form .pure-input-1 {\r\n    width: 100%\r\n}\r\n\r\n.pure-form .pure-input-3-4 {\r\n    width: 75%\r\n}\r\n\r\n.pure-form .pure-input-2-3 {\r\n    width: 66%\r\n}\r\n\r\n.pure-form .pure-input-1-2 {\r\n    width: 50%\r\n}\r\n\r\n.pure-form .pure-input-1-3 {\r\n    width: 33%\r\n}\r\n\r\n.pure-form .pure-input-1-4 {\r\n    width: 25%\r\n}\r\n\r\n.pure-form .pure-help-inline,.pure-form-message-inline {\r\n    display: inline-block;\r\n    padding-left: .3em;\r\n    color: #666;\r\n    vertical-align: middle;\r\n    font-size: .875em\r\n}\r\n\r\n.pure-form-message {\r\n    display: block;\r\n    color: #666;\r\n    font-size: .875em\r\n}\r\n\r\n@media only screen and (max-width : 480px) {\r\n    .pure-form button[type=submit] {\r\n        margin:.7em 0 0\r\n    }\r\n\r\n    .pure-form input:not([type]),.pure-form input[type=password],.pure-form input[type=email],.pure-form input[type=url],.pure-form input[type=date],.pure-form input[type=month],.pure-form input[type=time],.pure-form input[type=datetime],.pure-form input[type=datetime-local],.pure-form input[type=week],.pure-form input[type=tel],.pure-form input[type=color],.pure-form input[type=number],.pure-form input[type=search],.pure-form input[type=text],.pure-form label {\r\n        margin-bottom: .3em;\r\n        display: block\r\n    }\r\n\r\n    .pure-group input:not([type]),.pure-group input[type=password],.pure-group input[type=email],.pure-group input[type=url],.pure-group input[type=date],.pure-group input[type=month],.pure-group input[type=time],.pure-group input[type=datetime],.pure-group input[type=datetime-local],.pure-group input[type=week],.pure-group input[type=tel],.pure-group input[type=color],.pure-group input[type=number],.pure-group input[type=search],.pure-group input[type=text] {\r\n        margin-bottom: 0\r\n    }\r\n\r\n    .pure-form-aligned .pure-control-group label {\r\n        margin-bottom: .3em;\r\n        text-align: left;\r\n        display: block;\r\n        width: 100%\r\n    }\r\n\r\n    .pure-form-aligned .pure-controls {\r\n        margin: 1.5em 0 0\r\n    }\r\n\r\n    .pure-form .pure-help-inline,.pure-form-message,.pure-form-message-inline {\r\n        display: block;\r\n        font-size: .75em;\r\n        padding: .2em 0 .8em\r\n    }\r\n}\r\n\r\n.pure-menu-fixed {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 3\r\n}\r\n\r\n.pure-menu-item,.pure-menu-list {\r\n    position: relative\r\n}\r\n\r\n.pure-menu-list {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\n.pure-menu-item {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100%\r\n}\r\n\r\n.pure-menu-heading,.pure-menu-link {\r\n    display: block;\r\n    text-decoration: none;\r\n    white-space: nowrap\r\n}\r\n\r\n.pure-menu-horizontal {\r\n    width: 100%;\r\n    white-space: nowrap\r\n}\r\n\r\n.pure-menu-horizontal .pure-menu-list {\r\n    display: inline-block\r\n}\r\n\r\n.pure-menu-horizontal .pure-menu-heading,.pure-menu-horizontal .pure-menu-item,.pure-menu-horizontal .pure-menu-separator {\r\n    display: inline-block;\r\n    zoom:1;vertical-align: middle\r\n}\r\n\r\n.pure-menu-item .pure-menu-item {\r\n    display: block\r\n}\r\n\r\n.pure-menu-children {\r\n    display: none;\r\n    position: absolute;\r\n    left: 100%;\r\n    top: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 3\r\n}\r\n\r\n.pure-menu-horizontal .pure-menu-children {\r\n    left: 0;\r\n    top: auto;\r\n    width: inherit\r\n}\r\n\r\n.pure-menu-active>.pure-menu-children,.pure-menu-allow-hover:hover>.pure-menu-children {\r\n    display: block;\r\n    position: absolute\r\n}\r\n\r\n.pure-menu-has-children>.pure-menu-link:after {\r\n    padding-left: .5em;\r\n    content: \"\\25B8\";\r\n    font-size: small\r\n}\r\n\r\n.pure-menu-horizontal .pure-menu-has-children>.pure-menu-link:after {\r\n    content: \"\\25BE\"\r\n}\r\n\r\n.pure-menu-scrollable {\r\n    overflow-y: scroll;\r\n    overflow-x: hidden\r\n}\r\n\r\n.pure-menu-scrollable .pure-menu-list {\r\n    display: block\r\n}\r\n\r\n.pure-menu-horizontal.pure-menu-scrollable .pure-menu-list {\r\n    display: inline-block\r\n}\r\n\r\n.pure-menu-horizontal.pure-menu-scrollable {\r\n    white-space: nowrap;\r\n    overflow-y: hidden;\r\n    overflow-x: auto;\r\n    -ms-overflow-style: none;\r\n    -webkit-overflow-scrolling: touch;\r\n    padding: .5em 0\r\n}\r\n\r\n.pure-menu-horizontal.pure-menu-scrollable::-webkit-scrollbar {\r\n    display: none\r\n}\r\n\r\n.pure-menu-horizontal .pure-menu-children .pure-menu-separator,.pure-menu-separator {\r\n    background-color: #ccc;\r\n    height: 1px;\r\n    margin: .3em 0\r\n}\r\n\r\n.pure-menu-horizontal .pure-menu-separator {\r\n    width: 1px;\r\n    height: 1.3em;\r\n    margin: 0 .3em\r\n}\r\n\r\n.pure-menu-horizontal .pure-menu-children .pure-menu-separator {\r\n    display: block;\r\n    width: auto\r\n}\r\n\r\n.pure-menu-heading {\r\n    text-transform: uppercase;\r\n    color: #565d64\r\n}\r\n\r\n.pure-menu-link {\r\n    color: #777\r\n}\r\n\r\n.pure-menu-children {\r\n    background-color: #fff\r\n}\r\n\r\n.pure-menu-disabled,.pure-menu-heading,.pure-menu-link {\r\n    padding: .5em 1em\r\n}\r\n\r\n.pure-menu-disabled {\r\n    opacity: .5\r\n}\r\n\r\n.pure-menu-disabled .pure-menu-link:hover {\r\n    background-color: transparent\r\n}\r\n\r\n.pure-menu-active>.pure-menu-link,.pure-menu-link:focus,.pure-menu-link:hover {\r\n    background-color: #eee\r\n}\r\n\r\n.pure-menu-selected .pure-menu-link,.pure-menu-selected .pure-menu-link:visited {\r\n    color: #000\r\n}\r\n\r\n.pure-table {\r\n    empty-cells: show;\r\n    border: 1px solid #cbcbcb\r\n}\r\n\r\n.pure-table caption {\r\n    color: #000;\r\n    font: italic 85%/1 arial,sans-serif;\r\n    padding: 1em 0;\r\n    text-align: center\r\n}\r\n\r\n.pure-table td,.pure-table th {\r\n    border-left: 1px solid #cbcbcb;\r\n    border-width: 0 0 0 1px;\r\n    font-size: inherit;\r\n    margin: 0;\r\n    overflow: visible;\r\n    padding: .5em 1em\r\n}\r\n\r\n.pure-table td:first-child,.pure-table th:first-child {\r\n    border-left-width: 0\r\n}\r\n\r\n.pure-table thead {\r\n    background-color: #e0e0e0;\r\n    color: #000;\r\n    text-align: left;\r\n    vertical-align: bottom\r\n}\r\n\r\n.pure-table td {\r\n    background-color: transparent\r\n}\r\n\r\n.pure-table-odd td,.pure-table-striped tr:nth-child(2n-1) td {\r\n    background-color: #f2f2f2\r\n}\r\n\r\n.pure-table-bordered td {\r\n    border-bottom: 1px solid #cbcbcb\r\n}\r\n\r\n.pure-table-bordered tbody>tr:last-child>td {\r\n    border-bottom-width: 0\r\n}\r\n\r\n.pure-table-horizontal td,.pure-table-horizontal th {\r\n    border-width: 0 0 1px;\r\n    border-bottom: 1px solid #cbcbcb\r\n}\r\n\r\n.pure-table-horizontal tbody>tr:last-child>td {\r\n    border-bottom-width: 0\r\n}\r\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"iconfont\";\n  src: url(" + __webpack_require__(5) + ");\n  /* IE9*/\n  src: url(" + __webpack_require__(5) + "#iefix) format('embedded-opentype'),  url(" + __webpack_require__(39) + ") format('woff'),  url(" + __webpack_require__(38) + ") format('truetype'),  url(" + __webpack_require__(37) + "#iconfont) format('svg');\n  /* iOS 4.1- */\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s;\n}\n.fade-enter,\n.fade-leave-active {\n  opacity: 0;\n}\n.animation-trans {\n  transition: all 4s ease-in-out 1s;\n}\n.slide-fade-enter-active {\n  transition: all .3s ease;\n}\n.slide-fade-leave-active {\n  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter,\n.slide-fade-leave-active {\n  transform: translateY(10px);\n  opacity: 0;\n}\nbody {\n  color: #333333;\n  font-size: 15px;\n}\nbody * {\n  font-family: Montserrat, Lato, Helvetica Neue, Helvetica, Arial, sans-serif;\n  letter-spacing: .6px;\n  box-sizing: border-box;\n}\nbody .pure-u-1,\nbody .pure-u-1-1,\nbody .pure-u-1-2,\nbody .pure-u-1-3,\nbody .pure-u-2-3,\nbody .pure-u-1-4,\nbody .pure-u-3-4,\nbody .pure-u-1-5,\nbody .pure-u-2-5,\nbody .pure-u-3-5,\nbody .pure-u-4-5,\nbody .pure-u-5-5,\nbody .pure-u-1-6,\nbody .pure-u-5-6,\nbody .pure-u-1-8,\nbody .pure-u-3-8,\nbody .pure-u-5-8,\nbody .pure-u-7-8,\nbody .pure-u-1-12,\nbody .pure-u-5-12,\nbody .pure-u-7-12,\nbody .pure-u-11-12,\nbody .pure-u-1-24,\nbody .pure-u-2-24,\nbody .pure-u-3-24,\nbody .pure-u-4-24,\nbody .pure-u-5-24,\nbody .pure-u-6-24,\nbody .pure-u-7-24,\nbody .pure-u-8-24,\nbody .pure-u-9-24,\nbody .pure-u-10-24,\nbody .pure-u-11-24,\nbody .pure-u-12-24,\nbody .pure-u-13-24,\nbody .pure-u-14-24,\nbody .pure-u-15-24,\nbody .pure-u-16-24,\nbody .pure-u-17-24,\nbody .pure-u-18-24,\nbody .pure-u-19-24,\nbody .pure-u-20-24,\nbody .pure-u-21-24,\nbody .pure-u-22-24,\nbody .pure-u-23-24,\nbody .pure-u-24-24 {\n  padding: 0 8px;\n}\nbody a {\n  color: #3e8fc6;\n}\nbody #m-app {\n  padding-left: 100px;\n  /* router switch area*/\n}\nbody #m-app #m-left-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100px;\n  overflow: hidden;\n  background-color: #1c1c1c;\n  -webkit-transition: all 0.1s ease-out;\n}\nbody #m-app #m-left-nav * {\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul {\n  padding: 0;\n  margin: 0;\n}\nbody #m-app #m-left-nav ul li a {\n  display: block;\n  padding: 12px 0;\n  color: #999;\n  text-decoration: none;\n  text-align: center;\n}\nbody #m-app #m-left-nav ul li a i.iconfont {\n  font-size: 22px;\n  color: #999;\n}\nbody #m-app #m-left-nav ul li a:hover {\n  background-color: #111111;\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul li a:hover i.iconfont {\n  color: #3ea8f7;\n}\nbody #m-app #m-left-nav ul li a:hover span {\n  color: #AAAAAA;\n}\nbody #m-app #m-left-nav ul li a.router-link-active {\n  background-color: #3e8fc6;\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul li a.router-link-active i.iconfont {\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul li a.router-link-active span {\n  color: #FFFFFF;\n}\nbody #m-app #m-left-nav ul li a span {\n  display: block;\n  color: #999;\n  font-size: 12px;\n  margin-top: 4px;\n}\nbody #m-app #m-left-nav ul li.m-logo {\n  margin: 0 auto 2em;\n}\nbody #m-app #m-left-nav ul li.m-logo a {\n  background-color: transparent;\n}\nbody #m-app #m-left-nav ul li.m-logo a i.iconfont {\n  font-size: 30px;\n}\nbody #m-app #m-main-wrapper {\n  background-color: #e1e8ee;\n}\nbody #m-app #m-header,\nbody #m-app #m-main,\nbody #m-app #m-footer {\n  padding: 2em;\n  width: 94%;\n  margin: 0 auto;\n}\nbody #m-app #m-header,\nbody #m-app #m-footer {\n  padding: 0 2em;\n}\nbody #m-app #m-footer p {\n  font-size: 12px;\n  color: #999999;\n}\nbody #m-app #m-header {\n  font-size: 13px;\n}\nbody #m-app #m-header ul {\n  list-style: none;\n}\nbody #m-app #m-header ul li {\n  display: inline-block;\n}\nbody #m-app #m-main {\n  /*                       style for index.html                     */\n  /* -------------------------------------------------------------- */\n}\nbody #m-app #m-main .m-box {\n  margin: 0;\n  padding: 0;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: #fff;\n}\nbody #m-app #m-main.m-index {\n  /*                      style for echarts                     */\n  /* ---------------------------------------------------------- */\n}\nbody #m-app #m-main.m-index .pure-u-1-1 {\n  /*                      style for selection                   */\n  /* ---------------------------------------------------------- */\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn {\n  border-radius: 5px;\n  /* select */\n  /* date button */\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form {\n  display: inline-block;\n  margin-right: 20px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form fieldset {\n  border: none;\n  margin: 0;\n  padding: 20px 0px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form fieldset label {\n  padding: 0 5px;\n  border-left: 2px solid #00B4A0;\n  font-size: 16px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form fieldset select {\n  width: 200px;\n  height: 36px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn form fieldset select optgroup {\n  padding-left: 10px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup {\n  display: inline-block;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-btn {\n  display: inline-block;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  padding: 5px 10px;\n  border: none;\n  color: #464646;\n  background-color: #E0E0E0;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-btn.clicked {\n  color: white;\n  background-color: #323232;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon {\n  position: relative;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  font-size: 14px;\n  padding: 5px 10px 4px 10px;\n  border: 1px solid #ccc;\n  color: #464646;\n  cursor: pointer;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .custom {\n  position: relative;\n  top: -1px;\n  font-size: 14px;\n  font-family: \"serif\";\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select {\n  position: absolute;\n  z-index: 100;\n  top: 40px;\n  left: -1px;\n  border: 1px solid #ccc;\n  background-color: #ffffff;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .close {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  color: #000;\n  font-weight: bold;\n  opacity: .8;\n  cursor: pointer;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .close:hover {\n  opacity: 1;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select {\n  margin: 10px 20px 10px 15px;\n  width: 320px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year {\n  display: inline-block;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year .bold {\n  font-weight: bold;\n  width: 5px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year span {\n  display: inline-block;\n  width: 80px;\n  text-align: right;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year .date {\n  position: relative;\n  display: inline-block;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-year .date input {\n  padding: 2px 5px;\n  width: 95px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .bold {\n  font-weight: bold;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-hour {\n  position: relative;\n  display: inline-block;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-hour input {\n  padding: 2px 5px;\n  width: 50px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-hour .up {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 20px;\n  height: 50%;\n  color: #999;\n  border-left: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select .time-hour .down {\n  position: absolute;\n  top: 50%;\n  right: 0px;\n  width: 20px;\n  height: 50%;\n  color: #999;\n  border-left: 1px solid #ccc;\n  text-align: center;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-date-select.u-date-start {\n  margin-top: 30px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .u-icon .u-select .u-btn-save {\n  width: 50px;\n  height: 24px;\n  margin-left: 269px;\n  margin-bottom: 10px;\n  color: white;\n  background-color: #4178BE;\n  text-align: center;\n  line-height: 24px;\n  font-weight: bold;\n  cursor: pointer;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh {\n  width: auto;\n  display: inline-block;\n  margin-left: 10px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .bold {\n  font-weight: bold;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch {\n  display: inline-block;\n  position: relative;\n  width: 56px;\n  height: 24px;\n  border-radius: 16px;\n  background: #ddd;\n  overflow: hidden;\n  cursor: pointer;\n  vertical-align: middle;\n  -webkit-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch.switchOff {\n  box-shadow: 0px 0px 2px #bbb inset;\n  background: #f5f5f5;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch.switchOff .swt-cursor {\n  left: 5px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch.switchOn {\n  background: #70e913;\n  box-shadow: 0 0 2px #70e913 inset;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch.switchOn .swt-cursor {\n  left: 34px;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.u-dashBtn .u-btnGroup .auto-refresh .switch .swt-cursor {\n  display: inline-block;\n  position: absolute;\n  top: 3px;\n  width: 18px;\n  height: 18px;\n  border-radius: 100%;\n  background: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  -webkit-transition: all .2s linear;\n  -ms-transition: all .2s linear;\n  transition: all .2s linear;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis h2 {\n  margin: 15px 0px 2px 0px;\n  font-size: 20px;\n  font-weight: normal;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis p {\n  margin: 0px;\n  font-size: 16px;\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.4);\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis .histogram .canvas_container {\n  position: relative;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis .histogram .canvas_container canvas {\n  width: auto;\n  height: auto;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis .histogram .canvas_container .index-tooltip {\n  padding: 10px;\n  border: 1px solid #000;\n  border-radius: 5px;\n  color: #000;\n  background-color: #ECF2F2;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.analysis .histogram .canvas_container .index-tooltip span {\n  padding: 5px 0;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.chart h2 {\n  margin: 15px 0px 2px 0px;\n  font-size: 20px;\n  font-weight: normal;\n}\nbody #m-app #m-main.m-index .pure-u-1-1.chart #Dash3 {\n  margin-top: 20px;\n}\nbody #m-app #m-main.m-index .pure-u-1-2 h2 {\n  margin: 15px 0px 2px 0px;\n  font-size: 20px;\n  font-weight: normal;\n}\nbody #m-app #m-main.m-index .pure-u-1-2 p {\n  margin: 0px;\n  font-size: 16px;\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.4);\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-month {\n  text-align: left;\n  line-height: 78px;\n  font-size: 21px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-day .boxCenter {\n  width: 260px;\n  margin: 30px auto;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-day .boxCenter i.iconfont {\n  font-size: 12px;\n  font-weight: bold;\n  color: #000;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-day .boxCenter span {\n  font-size: 16px;\n  font-weight: bold;\n  padding: 4px 10px 0 10px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-button .buttonGrp {\n  height: 30px;\n  margin: 25px auto;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-button .buttonGrp #month {\n  display: block;\n  height: 30px;\n  width: 25%;\n  float: left;\n  border: 1px solid black;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin-left: 15%;\n  color: black;\n  background-color: white;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-button .buttonGrp #week {\n  display: block;\n  height: 30px;\n  width: 25%;\n  float: left;\n  border: 1px solid black;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: white;\n  background-color: black;\n}\nbody #m-app #m-main.m-calendar .u-caldr-select .pure-u-1-3.u-caldr-select-button .buttonGrp #today {\n  display: block;\n  height: 30px;\n  width: 25%;\n  float: right;\n  border: 1px solid #999;\n  border-radius: 5px;\n  margin-right: 5%;\n  color: #999;\n  background-color: white;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint {\n  display: flex;\n  width: ;\n  margin: 0px auto 20px auto;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-red {\n  flex-direction: column;\n  height: 18px;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-red .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #e91e63;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-red .u-caldr-hint-text {\n  display: inline-block;\n  height: 18px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 18px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-black {\n  flex-direction: column;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-black .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #000;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-black .u-caldr-hint-text {\n  display: inline-block;\n  height: 18px;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-green {\n  flex-direction: column;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-green .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #42b347;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-green .u-caldr-hint-text {\n  display: inline-block;\n  height: 18px;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-blue {\n  flex-direction: column;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-blue .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #03a9f4;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-blue .u-caldr-hint-text {\n  display: inline-block;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-yellow {\n  flex-direction: column;\n  margin-right: 30px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-yellow .colorBlock {\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  text-indent: -9999px;\n  background-color: #f9c902;\n}\nbody #m-app #m-main.m-calendar .u-caldr-hint #u-caldr-hint-yellow .u-caldr-hint-text {\n  display: inline-block;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-date {\n  display: flex;\n  height: 40px;\n  width: 100%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-date .u-caldr-body-hour {\n  flex-direction: column;\n  width: 4%;\n  height: 100%;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  text-align: center;\n  line-height: 40px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-date .u-caldr-body-week {\n  flex-direction: column;\n  width: 96%;\n  height: 100%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-date .u-caldr-body-week .weekday {\n  display: inline-block;\n  width: 14.285714%;\n  height: 40px;\n  border-left: 1px solid #E9E0E0;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  font-size: 14px;\n  text-align: center;\n  line-height: 40px;\n  background-color: #F7F5F5;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body {\n  display: flex;\n  width: 100%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-time {\n  flex-direction: column;\n  width: 4%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-time .u-caldr-body-title {\n  width: 100%;\n  height: 40px;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  font-size: 14px;\n  text-align: center;\n  line-height: 40px;\n  background-color: #F7F5F5;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-time .u-caldr-body-hour {\n  width: 100%;\n  height: 80px;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  font-size: 14px;\n  text-align: center;\n  line-height: 80px;\n  background-color: #F7F5F5;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week {\n  position: relative;\n  flex-direction: column;\n  width: 96%;\n  height: 100%;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday {\n  position: relative;\n  display: inline-block;\n  width: 14.285714%;\n  height: 1960px;\n  border-left: 1px solid #E9E0E0;\n  /*\n\t\t\t\t\t\t\t\t.u-caldr-body-event {\n\t\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t\t\tdisplay: -webkit-flex;\n\t\t                \t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\twidth:96%;\n\t\t\t\t\t\t\t\t\tz-index: 9999;\n\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t&.planned {\n\t\t\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #e91e63;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t&.unplanned {\n\t\t\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #000;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t&.release {\n\t\t\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #42b347;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t&.demo {\n\t\t\t\t\t\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #03a9f4;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t&.other {\n\t\t\t\t\t\t\t\t\t\tcolor: #000;\n\t\t\t\t\t\t\t\t\t\tbackground-color: #f9c902;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}*/\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .u-caldr-weekDay-title {\n  width: 100%;\n  height: 40px;\n  border-top: 1px solid #E9E0E0;\n  color: #B7ADAD;\n  font-size: 14px;\n  text-align: center;\n  line-height: 40px;\n  background-color: #F7F5F5;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .u-caldr-weekDay-body {\n  height: 1920px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .u-caldr-weekDay-body .u-caldr-weekDay-body-block {\n  height: 80px;\n  width: 100%;\n  border-top: 1px solid #E9E0E0;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .u-caldr-weekDay-body .shadowBlock {\n  position: absolute;\n  width: 96%;\n  height: 80px;\n  background-color: rgba(90, 170, 250, 0.5);\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-dialog-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 40;\n  opacity: .95;\n  background: rgba(91, 147, 177, 0.2);\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content {\n  position: absolute;\n  z-index: 100;\n  width: 440px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header {\n  padding: 10px 20px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header {\n  background-color: #0774af;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header h2 {\n  color: #FFFFFF;\n  margin: 0;\n  font-size: 18px;\n  font-weight: normal;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header .close {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  color: #FFFFFF;\n  font-weight: bold;\n  cursor: pointer;\n  opacity: .8;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-header .close:hover {\n  opacity: 1;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body {\n  background-color: #FFFFFF;\n  font-size: 14px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-form {\n  padding: 10px 20px;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.3);\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-form label {\n  display: inline-block;\n  width: 120px;\n  height: 20px;\n  color: #0774af;\n  font-weight: bold;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-form input {\n  display: inline-block;\n  height: 20px;\n  width: 400px;\n  border: none;\n  border-bottom: 1px solid #0774af;\n  outline: medium;\n  margin-bottom: 5px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-form input.time {\n  width: 275px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-button {\n  padding: 6px 20px;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .m-content .m-body .m-button button {\n  margin-left: 300px;\n  width: 50px;\n  height: 25px;\n  border: none;\n  color: white;\n  background-color: #0774af;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock {\n  position: absolute;\n  left: 0;\n  display: -webkit-flex;\n  display: flex;\n  width: 96%;\n  z-index: 10;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  text-align: center;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.planned {\n  color: #fff;\n  background-color: #e91e63;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.unplanned {\n  color: #fff;\n  background-color: #000;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.release {\n  color: #fff;\n  background-color: #42b347;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.demo {\n  color: #fff;\n  background-color: #03a9f4;\n}\nbody #m-app #m-main.m-calendar .u-caldr-body .u-caldr-body-week .weekday .eventBlock.other {\n  color: #000;\n  background-color: #f9c902;\n}\n/* ----- Dialog start ----- */\n.m-dialog {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.m-dialog .m-dialog-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  opacity: .95;\n  background: #26323e;\n}\n.m-dialog .m-comtent {\n  width: 600px;\n  margin: 30px auto;\n  z-index: 1060;\n  position: relative;\n}\n.m-dialog .m-comtent .m-header,\n.m-dialog .m-comtent .m-body {\n  padding: 10px 20px;\n}\n.m-dialog .m-comtent .m-header {\n  background-color: #8D6E63;\n}\n.m-dialog .m-comtent .m-header h2 {\n  color: #FFFFFF;\n  margin: 0;\n  font-size: 18px;\n  font-weight: normal;\n}\n.m-dialog .m-comtent .m-header .close {\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  color: #FFFFFF;\n  font-weight: bold;\n  cursor: pointer;\n  opacity: .8;\n}\n.m-dialog .m-comtent .m-header .close:hover {\n  opacity: 1;\n}\n.m-dialog .m-comtent .m-body {\n  background-color: #FFFFFF;\n  font-size: 14px;\n}\n/* ----- Dialog end ----- */\n/* ----- Tooltip start ----- */\n.m-tooltip {\n  position: fixed;\n  color: #FFFFFF;\n  padding: 7px 12px;\n  z-index: 1020;\n  max-width: 50%;\n  opacity: 0;\n  -moz-transition: opacity 1s cubic-bezier(0, 0, 0, 1);\n  -webkit-transition: opacity 1s cubic-bezier(0, 0, 0, 1);\n  -o-transition: opacity 1s cubic-bezier(0, 0, 0, 1);\n  transition: opacity 1s cubic-bezier(0, 0, 0, 1);\n}\n.m-tooltip span {\n  line-height: 16px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.m-tooltip:after {\n  content: '';\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n}\n.m-tooltip.top:after {\n  bottom: -20px;\n  left: 10px;\n  border-top: 10px solid #1c1c1c;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n}\n.m-tooltip.right:after {\n  top: 10px;\n  left: -20px;\n  border-top: 10px solid transparent;\n  border-left: 10px solid transparent;\n  border-right: 10px solid #1c1c1c;\n  border-bottom: 10px solid transparent;\n}\n/* ----- Tooltip end ----- */\n/* ----- Tabs start ----- */\n.m-tabs ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.m-tabs ul.m-tab li {\n  display: inline-block;\n  padding: 8px 12px;\n  border: 1px solid #CCCCCC;\n  margin-right: 2px;\n  cursor: pointer;\n  background-color: #757575;\n  color: #FFFFFF;\n}\n.m-tabs ul.m-tab li.active {\n  background-color: #FFFFFF;\n  color: #333333;\n  border-bottom: 1px solid #FFFFFF;\n}\n.m-tabs .m-tab-content {\n  display: none;\n  background-color: #FFFFFF;\n  border: 1px solid #CCC;\n  margin-top: -1px;\n  padding: 5px 12px;\n}\n/* ----- Tabs end ----- */\n", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f721466883998665b87923b92dea655b.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8906ae6af49fe9c89e21ddba1f93ef90.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0a74ce208a63514c637b04b127ebb187.ttf";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "db69f493a3a797c4bdf1039c0abef2c5.woff";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-dialog\" v-show=\"showDialog\">\r\n\t<div class=\"m-dialog-mask\"></div>\r\n\t<div class=\"m-comtent\">\r\n\t\t<div class=\"m-header\">\r\n\t\t\t<h2>{{ title }}</h2>\r\n\t\t\t<span class=\"close\" title=\"close\" v-on:click=\"close\"><i class=\"icon iconfont\">&#xe613;</i></span>\r\n\t\t</div>\r\n\t\t<div class=\"m-body\">\r\n\t\t\t<!--<slot name=\"body\"><p v-html=\"body\"></p></slot>-->\r\n\t\t\t<p v-html=\"body\"></p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-tab-content\">\r\n\t<slot></slot>\r\n</div>";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-tabs\">\r\n\t<ul class=\"m-tab\">\r\n\t\t<li v-for=\"(tab, idx) in tabsLabel\" :class=\"idx === 0 ? 'active' : ''\" v-on:click=\"changeTab\">\r\n\t\t\t{{ tab }}\r\n\t\t</li>\r\n\t</ul>\r\n\t<slot></slot>\r\n</div>";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-u-1-1\">\r\n\t<div class=\"m-box\">\r\n\t\t<div class=\"u-caldr-select pure-g\">\r\n\t\t\t<div class=\"pure-u-1-3 u-caldr-select-month\">\r\n\t\t\t\t{{ month }}\r\n\t\t\t</div>\r\n\t\t\t<!--<titleMonth :month=\"month\"></titleMonth>-->\r\n\t\t\t<div class=\"pure-u-1-3 u-caldr-select-day\">\r\n\t\t\t\t<div class=\"boxCenter\">\r\n\t\t\t\t\t<i class=\"iconfont icon\">&#xe636;</i>\r\n\t\t\t\t\t<span>Wednesday,MAR 1,2017</span>\r\n\t\t\t\t\t<i class=\"iconfont icon\">&#xe632;</i>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"pure-u-1-3 u-caldr-select-button\">\r\n\t\t\t\t<div class=\"buttonGrp clearfix\">\r\n\t\t\t\t\t<button id=\"month\">Month</button>\r\n\t\t\t\t\t<button id=\"week\">Week</button>\r\n\t\t\t\t\t<button id=\"today\">Today</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"u-caldr-hint\">\r\n\t\t\t<div id=\"u-caldr-hint-red\">\r\n\t\t\t\t<div class=\"colorBlock\">.</div>\r\n\t\t\t\t<div class=\"u-caldr-hint-text\">Planned outage</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"u-caldr-hint-black\">\r\n\t\t\t\t<div class=\"colorBlock\">.</div>\r\n\t\t\t\t<div class=\"u-caldr-hint-text\">Unplanned outage</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"u-caldr-hint-green\">\r\n\t\t\t\t<div class=\"colorBlock\">.</div>\r\n\t\t\t\t<div class=\"u-caldr-hint-text\">Module release, not all outage</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"u-caldr-hint-blue\">\r\n\t\t\t\t<div class=\"colorBlock\">.</div>\r\n\t\t\t\t<div class=\"u-caldr-hint-text\">Demo</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"u-caldr-hint-yellow\">\r\n\t\t\t\t<div class=\"colorBlock\">.</div>\r\n\t\t\t\t<div class=\"u-caldr-hint-text\">Other activities</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"u-caldr-body\">\r\n\t \t\t<div class=\"u-caldr-body-time\">\r\n\t\t\t\t<div class=\"u-caldr-body-title\"><i class=\"iconfont icon\">&#xe625;</i></div>\r\n\t\t   \t\t<div class=\"u-caldr-body-hour\">0AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">1AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">2AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">3AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">4AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">5AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">6AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">7AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">8AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">9AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">10AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">11AM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">0PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">1PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">2PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">3PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">4PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">5PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">6PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">7PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">8PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">9PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">10PM</div>\r\n\t\t        <div class=\"u-caldr-body-hour\">11PM</div>\r\n\t\t    </div>\r\n\t\t\t<div class=\"u-caldr-body-week\">\r\n\t\t\t\t<div class=\"pure-g\">\r\n\t\t\t\t\t<week-day :item=\"item\"  v-for=\"item in agenda\"></week-day>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<div v-if=\"ifShowDialog\">\r\n\t<div class=\"m-dialog-mask\"></div>\r\n\t<div class=\"m-content\" :style=\"styleDialog\">\r\n\t\t<div class=\"m-header\">\r\n\t\t\t<h2>{{ title }}</h2>\r\n\t\t\t<span class=\"close\" title=\"close\" @click=\"close\"><i class=\"icon iconfont\">&#xe613;</i></span>\r\n\t\t</div>\r\n\t\t<div class=\"m-body\">\r\n\t\t\t<div class=\"m-form\">\r\n\t\t\t\t<input @keyup.esc=\"close\" v-model=\"message\" placeholder=\"Write Event here...\" autofocus/>\r\n\t\t\t\t<label for=\"time\">Time Duration(hour)</label>\r\n\t\t\t\t<input class=\"time\" id=\"time\" v-model=\"duration\" placeholder=\"2 hours\"/>\r\n\r\n\t\t\t\t<label for=\"event\">Event Options</label>\r\n\t\t\t\t<select  id=\"event\" v-model=\"selected\">\r\n\t\t\t\t\t<option v-for=\"option in this.options\" v-bind:value=\"option.value\">\r\n\t\t\t\t\t{{ option.text }}\r\n\t\t\t\t\t</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-button\">\r\n\t\t\t\t<button @click=\"submitEvent\">Save</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<div class=\"weekday\">\r\n    <div class=\"u-caldr-weekDay-title\">{{ item.date.substring(6, 10) }}</div>\r\n    <div @click.left=\"mouseClick\" class=\"u-caldr-weekDay-body\">\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <div class=\"u-caldr-weekDay-body-block\"></div>\r\n        <m-block :showBlock=\"ifShowShadowBlock\" :style=\"styleShadowBlock\"></m-block>\r\n    </div>\r\n    <!--<component :is=\"Dialog\" @clear=\"clearDialog\" @submit=\"\" :options=\"options\" :selected=\"dialogSelected\" :styleDialog=\"styleDialog\" :title=\"title\" :message=\"input\" :ifShowDialog=\"ifShowDialog\">\r\n    </component>-->\r\n\r\n    <m-dialog @clear=\"clearDialog\"\r\n              @submit=\"storeEvent\"\r\n              :styleDialog=\"styleDialog\"\r\n              :title=\"title\"\r\n              :options=\"options\"\r\n              :ifShowDialog=\"ifShowDialog\">\r\n              <!--\r\n              <div slot=\"input\">\r\n                  <input @keyup.esc=\"close\" v-model=\"this.message\" placeholder=\"Write something here...\" autofocus/>\r\n              </div>\r\n              <div slot=\"options\">\r\n                  <label for=\"event\">Event Options</label>\r\n  \t\t\t\t  <select  id=\"event\" v-model=\"this.selected\">\r\n    \t\t\t\t  <option v-for=\"option in this.options\" v-bind:value=\"option.value\">\r\n      \t\t\t\t  {{ option.text }}\r\n    \t\t\t\t  </option>\r\n  \t\t\t\t  </select>\r\n              </div>-->\r\n    </m-dialog>\r\n    <m-events :item=\"item\" v-for=\"item in subjects\"></m-events>\r\n</div>\r\n";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<p class=\"pure-u-1-1\">Copyright © 2017 – 2017</p>";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pure-u-1-1\">\r\n\t<li><i style=\"font-size: 20px; vertical-align: -1px; color: #3e8fc6;\" class=\"icon iconfont\">&#xe64e;</i> <a>PROJECT</a> <i class=\"icon iconfont\" style=\"font-size: 12px; font-weight: bold; vertical-align: 1px; color: #3e8fc6;\">&#xe632;</i> </li>\r\n\t<li>{{ currentNav }}</li>\r\n</ul>";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n\t<li class=\"m-logo\" title=\"logo\"><router-link to=\"/\"><i class=\"icon iconfont\">&#xe72c;</i></router-link></li>\r\n\t<li v-tooltip=\"{title: 'In overview, you can check THROUGHPUT<br />and RESPONSE TIME.', position: 'right'}\"><router-link to=\"/index\"><i class=\"icon iconfont\">&#xe7dd;</i><span>Overview</span></router-link></li>\r\n\t<li v-tooltip=\"{title: 'In calendar, you can add your demo date,<br /> project deployment date etc.', position: 'right'}\"><router-link to=\"/calendar\"><i class=\"icon iconfont\">&#xe60f;</i><span>Calendar</span></router-link></li>\r\n\t<li><router-link to=\"/metrics\"><i class=\"icon iconfont\">&#xe6cc;</i><span>Metrics</span></router-link></li>\r\n\t<li><router-link to=\"/logs\"><i class=\"icon iconfont\">&#xe769;</i><span>Logs</span></router-link></li>\r\n\t<li><router-link to=\"/events\"><i class=\"icon iconfont\">&#xe6ae;</i><span>Events</span></router-link></li>\r\n\t<li><router-link to=\"/tests\"><i class=\"icon iconfont\">&#xe6db;</i><span>Settings</span></router-link></li>\r\n</ul>\r\n";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-u-1-1\">\r\n\t<div class=\"m-box\">\r\n\t\t<p>\r\n\t\t\t<img v-bind:src=\"alertingImageUrl\" style=\"width: 100%;\" />\r\n\t\t</p>\r\n\t</div>\r\n</div>";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-g\">\r\n\t<div class=\"pure-u-1-1 u-dashBtn\">\r\n\t\t<div class=\"m-box\">\r\n\t\t\t<form>\r\n\t\t\t\t<fieldset>\r\n\t\t\t\t\t<label for=\"state\">Current Monitoring Service</label>\r\n\t\t        \t<select id=\"state\">\r\n\t\t\t\t\t\t<option>Overview</option>\r\n\t\t\t\t\t\t<option>Opportunities</option>\r\n\t\t\t\t\t\t<option>Tech Expertise</option>\r\n\t\t\t\t\t\t<optgroup label=\"Territory\">\r\n\t    \t\t\t\t\t<option>Clients</option>\r\n\t\t\t\t\t\t\t<option>ProspectReach</option>\r\n\t\t\t\t\t\t\t<option>Social Search</option>\r\n\t\t\t\t\t\t\t<option>CrossBrand</option>\r\n\t  \t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t<optgroup label=\"Digital Me\">\r\n\t\t\t\t\t\t\t<option>My Rep Page</option>\r\n\t\t\t\t\t\t\t<option>IBM OneScore</option>\r\n\t\t\t\t\t\t\t<option>My Feeds</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t<optgroup label=\"Learning Hub\">\r\n\t\t\t\t\t\t\t<option>Digital Mastery</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t\t        \t</select>\r\n\t\t\t\t</fieldset>\r\n\t\t\t</form>\r\n\t\t\t<div class = \"u-btnGroup\">\r\n\t\t\t    <button class=\"u-btn\" v-bind:class=\"oneHourObject\">1 hour</button>\r\n\t\t\t\t<button class=\"u-btn\" v-bind:class=\"oneDayObject\">1 day</button>\r\n\t\t\t\t<button class=\"u-btn\" v-bind:class=\"sevenDayObject\">week</button>\r\n\t\t\t\t<button class=\"u-btn\" v-bind:class=\"monthClassObject\">month</button>\r\n\t\t\t\t<!-- User Specify time interval to get data -->\r\n\t\t\t\t<div class=\"u-icon\">\r\n\t\t\t\t\t<span class=\"glyphicon glyphicon-calendar\" @click=\"toggleTimeSelect\" @mouseenter=\"ifShowCustom = true\" @mouseleave=\"ifShowCustom = false\"></span>\r\n\t\t\t\t\t<span class=\"custom\" v-show=\"ifShowCustom\" @click=\"toggleTimeSelect\" @mouseenter=\"ifShowCustom = true\" @mouseleave=\"ifShowCustom = false\">Custom</span>\r\n\t\t\t\t\t<transition name=\"slide-fade\">\r\n\t\t\t\t\t\t<div class=\"u-select\" v-show=\"ifShowDateSelection\">\r\n\t\t\t\t\t\t\t<span class=\"close\" title=\"close\" @click=\"ifShowDateSelection = false\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon iconfont\">&#xe613;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<div class=\"u-date-select u-date-start\">\r\n\t\t\t\t\t\t\t\t<div class=\"time-year\">\r\n\t\t\t\t\t\t\t\t\t<span>Start Time</span><span class=\"bold\">:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"date\">\r\n\t\t\t\t\t\t\t\t\t\t<input v-model=\"selectInput.startDate\" id=\"dateStart\"/>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"time-hour\">\r\n\t\t\t\t\t\t\t\t\t<input v-model=\"selectInput.startHour\"/>\r\n\t\t\t\t\t\t\t\t\t<span class=\"up glyphicon glyphicon-chevron-up\" @click=\"selectInput.startHour += 1\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"down glyphicon glyphicon-chevron-down\" @click=\"selectInput.startHour -= 1\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"bold\">:</span>\r\n\t\t\t\t\t\t\t\t<div class=\"time-hour\">\r\n\t\t\t\t\t\t\t\t\t<input v-model=\"selectInput.startMinute\"/>\r\n\t\t\t\t\t\t\t\t\t<span class=\"up glyphicon glyphicon-chevron-up\" @click=\"selectInput.startMinute += 1\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"down glyphicon glyphicon-chevron-down\" @click=\"selectInput.startMinute -= 1\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"u-date-select\">\r\n\t\t\t\t\t\t\t\t<div class=\"time-year\">\r\n\t\t\t\t\t\t\t\t\t<span>End Time</span><span class=\"bold\">:</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"date\">\r\n\t\t\t\t\t\t\t\t\t\t<input v-model=\"selectInput.endDate\" id=\"dateEnd\"/>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"time-hour\">\r\n\t\t\t\t\t\t\t\t\t<input v-model=\"selectInput.endHour\"/>\r\n\t\t\t\t\t\t\t\t\t<span class=\"up glyphicon glyphicon-chevron-up\" @click=\"selectInput.endHour += 1\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"down glyphicon glyphicon-chevron-down\" @click=\"selectInput.endHour -= 1\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"bold\">:</span>\r\n\t\t\t\t\t\t\t\t<div class=\"time-hour\">\r\n\t\t\t\t\t\t\t\t\t<input v-model=\"selectInput.endMinute\"/>\r\n\t\t\t\t\t\t\t\t\t<span class=\"up glyphicon glyphicon-chevron-up\" @click=\"selectInput.endMinute += 1\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"down glyphicon glyphicon-chevron-down\" @click=\"selectInput.endMinute -= 1\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"u-btn-save\" @click=\"saveSelect\">\r\n\t\t\t\t\t\t\t\tsave\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</transition>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--\r\n\t\t\t\t<div class=\"auto-refresh\">\r\n\t\t\t\t\t<span>Auto Refresh</span>\r\n\t\t\t\t\t<span class=\"bold\">:</span>\r\n\t\t\t\t\t<div class=\"switch\" v-bind:class=\"classObjectAuto\" @click=\"toggleClassObject\">\r\n\t\t\t\t\t\t<div class=\"swt-cursor\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--\r\n\t<div class=\"pure-u-1-2\">\r\n\t\t<div class=\"m-box\">\r\n\t\t\t<h2>THROUGHPUT</h2>\r\n\t\t\t<p>How many requests were fulfilled per minute?</p>\r\n\t\t\t<div id=\"Dash1\" style=\"width:100%;height:400px;\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"pure-u-1-2\">\r\n\t\t<div class=\"m-box\">\r\n\t\t\t<h2>RESPONSE TIME</h2>\r\n\t\t\t<p>How long does it take for the service to respond?</p>\r\n\t\t\t<div id=\"Dash2\" style=\"width:100%;height:400px;\"></div>\r\n\t\t</div>\r\n\t</div>-->\r\n\t<div  class=\"pure-u-1-1 chart\">\r\n\t\t<div class=\"m-box\">\r\n\t\t\t<h2>THROUGHPUT AND RESPONSE</h2>\r\n\t\t\t<div id=\"Dash3\" style=\"width:100%;height:400px;\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div  class=\"pure-u-1-1 analysis\">\r\n\t\t<div class=\"m-box\">\r\n\t\t\t<h2>Request Communication Analysis</h2>\r\n\t\t\t<m-histogram  :events=\"events\"  :timeLine=\"timeLine\"></m-histogram>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<div class=\"histogram\" @mousemove=\"hover\" @mouseleave=\"mouseLeave\">\r\n    <div id=\"histogramContainer\" class=\"canvas_container\" style=\"width:100%;height:420px\">\r\n        <canvas id=\"u-histogram\">Your browser does not support the HTML5 canvas tag.Consider update your IE or use chrome/Firefox instead!</canvas>\r\n        <m-tooltip  v-if=\"ifShowTooltip\" :event=\"eventObject\" :style=\"styleTooltip\">\r\n        </m-tooltip>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<div class=\"index-tooltip\" id=\"barTooltip\">\r\n    <span>{{ event.url }}</span>\r\n    <br />\r\n    <div :item=\"item\" v-for=\"item in event.count\">\r\n        <span >{{ item.name }}： </span>\r\n        <span>{{ item.time }}s</span>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-u-1-1\">\r\n\t<div class=\"m-box\">\r\n\t\t<p>\r\n\t\t\t<img v-bind:src=\"errorsImageUrl\" style=\"width: 100%;\" />\r\n\t\t</p>\r\n\t</div>\r\n</div>";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-u-1-1\">\r\n\t<div class=\"m-box\">\r\n\t\t<p>\r\n\t\t\t<img v-bind:src=\"metricsImageUrl\" style=\"width: 100%;\" />\r\n\t\t</p>\r\n\t</div>\r\n</div>";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-u-1-1\">\r\n\t<div class=\"m-box\">\r\n\t\t<p>\r\n\t\t\t<img v-bind:src=\"settingsImageUrl\" style=\"width: 100%;\" />\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-u-1-1\">\r\n\t<div class=\"m-box\">\r\n\t\t<h1 style=\"font-size: 20px; font-weight: normal;\">测试页面</h1>\r\n\t\t<ul>\r\n\t\t\t<li v-for=\"todo in todos\" v-tooltip=\"{title: todo.fulltext}\">\r\n\t\t\t\t{{ todo.text }}\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<p><button @click=\"newData\">获取数据</button></p>\r\n\t\t<p><button @click=\"showDialog\">弹窗</button></p>\r\n\t\t<p><button @click=\"updateDialog\">修改弹窗内容</button></p>\r\n\t\t<p><button @click=\"switchComponent\">切换组件</button></p>\r\n\t\t<component :is=\"currentView\">\r\n\t\t\t<!-- 组件在 vm.currentview 变化时改变！ -->\r\n\t\t</component>\r\n\t</div>\r\n\t<m-dialog :title=\"title\" :body=\"body\">\r\n\t\t<component slot=\"body\" :is=\"currentDialog\">\r\n\t\t</component>\r\n\t</m-dialog>\r\n\r\n\t<m-tabs :tabsLabel=\"tabsLabel\">\r\n\t\t<m-tab>\r\n\t\t\tFeugiat senectus conubia ultrices magna eu, enim primis ultricies laoreet faucibus eleifend, dapibus vulputate justo eleifend habitasse cursus tincidunt interdum potenti vitae volutpat fringilla etiam curabitur vehicula, adipiscing felis sem adipiscing ullamcorper primis augue faucibus mattis luctus vel vitae massa facilisis, neque taciti massa praesent sodales ligula, condimentum integer mollis vulputate.\r\n\t\t</m-tab>\r\n\t\t<m-tab>\r\n\t\t\t<p>Elementum massa libero convallis <i><s>congue aliquam pellentesque erat ornare</s></i> aenean velit ad cubilia, fermentum amet ullamcorper potenti euismod vel luctus id sollicitudin justo curabitur venenatis pellentesque ullamcorper proin nulla donec faucibus, cursus augue eros nisl vehicula sem, tellus risus molestie litora nibh etiam ut justo cras sociosqu curae augue nunc ad tempus per, purus auctor class porttitor tellus lobortis urna.</p>\r\n\t\t\t<p>Lobortis <u>s vestibulum dictumst rutrum velit, vitae dictum</u> velit enim taciti malesuada in egestas, a aliquam metus pulvinar aliquam molestie suspendisse habitant suspendisse ut cubilia a aliquet aenean cubilia vulputate hac sollicitudin, dictumst placerat aliquam orci est semper fames nullam porta morbi aliquam egestas nisi dictum augue ut.</p>\r\n\t\t</m-tab>\r\n\t</m-tabs>\r\n\t<p>------</p>\r\n\t<m-tabs :tabsLabel=\"['Web前端', 'Web服务']\">\r\n\t\t<m-tab>\r\n\t\t\t<p>一段文字，<u v-tooltip=\"{title: '你好啊，欢迎使用', position: 'top'}\">鼠标滑过</u>。</p>\r\n\t\t</m-tab>\r\n\t\t<m-tab>\r\n\t\t\t<button v-on:click=\"showDialog\">弹窗</button>\r\n\t\t</m-tab>\r\n\t</m-tabs>\r\n</div>\r\n";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {
	"Count_RC4": [
		15,
		7,
		10,
		14,
		17,
		4,
		7,
		1,
		6,
		1,
		4,
		7,
		18,
		0,
		13,
		9,
		19,
		12,
		19,
		20,
		14,
		10,
		3,
		18,
		8,
		19,
		10,
		14,
		20,
		10,
		9,
		17,
		9,
		19,
		10,
		19,
		14,
		2,
		12,
		6,
		0,
		16,
		0,
		16,
		20,
		0,
		2,
		4,
		14,
		19,
		8,
		10,
		14,
		12,
		9,
		14,
		19,
		1,
		2,
		14,
		16,
		19,
		19,
		16,
		17,
		14,
		6,
		3,
		3,
		7,
		16,
		8,
		9,
		8,
		14,
		13,
		0,
		15,
		14,
		18,
		2,
		3,
		8,
		14,
		0,
		0,
		15,
		8,
		15,
		12,
		6,
		8,
		18,
		9,
		19,
		15
	],
	"Count_RC5": [
		2,
		6,
		0,
		0,
		0,
		1,
		2,
		5,
		0,
		5,
		8,
		0,
		0,
		2,
		2,
		1,
		2,
		9,
		0,
		9,
		4,
		5,
		6,
		1,
		10,
		4,
		7,
		9,
		10,
		3,
		1,
		3,
		4,
		8,
		10,
		5,
		10,
		10,
		8,
		2,
		6,
		5,
		5,
		4,
		3,
		0,
		8,
		8,
		9,
		7,
		8,
		4,
		3,
		10,
		2,
		2,
		6,
		6,
		7,
		2,
		1,
		0,
		1,
		7,
		6,
		7,
		1,
		6,
		9,
		9,
		5,
		6,
		2,
		6,
		1,
		0,
		1,
		10,
		10,
		5,
		8,
		4,
		5,
		4,
		7,
		1,
		0,
		4,
		5,
		2,
		6,
		5,
		10,
		7,
		5,
		10
	],
	"Count_OverThreshold": [
		74,
		74,
		66,
		32,
		60,
		24,
		77,
		21,
		86,
		64,
		86,
		30,
		21,
		28,
		20,
		62,
		63,
		38,
		28,
		26,
		77,
		85,
		50,
		66,
		54,
		35,
		71,
		40,
		67,
		56,
		21,
		40,
		71,
		55,
		27,
		83,
		80,
		21,
		83,
		36,
		26,
		43,
		39,
		39,
		22,
		50,
		30,
		78,
		76,
		63,
		82,
		26,
		57,
		81,
		60,
		39,
		83,
		37,
		84,
		25,
		35,
		64,
		53,
		31,
		39,
		27,
		85,
		57,
		87,
		75,
		75,
		27,
		81,
		67,
		59,
		55,
		72,
		33,
		80,
		31,
		39,
		80,
		72,
		42,
		27,
		36,
		90,
		83,
		87,
		37,
		27,
		34,
		60,
		72,
		76,
		67
	],
	"AverageElapsed_All": [
		1950,
		2395,
		2096,
		1559,
		1510,
		2474,
		2324,
		1462,
		2088,
		1821,
		1331,
		2332,
		2387,
		2457,
		1926,
		2173,
		2125,
		1764,
		1404,
		1307,
		1410,
		2131,
		2285,
		1432,
		2100,
		1481,
		2209,
		1834,
		2429,
		2367,
		2445,
		1571,
		2092,
		2188,
		1785,
		2229,
		1543,
		2010,
		1411,
		1669,
		2184,
		2053,
		1775,
		2252,
		1977,
		2372,
		1697,
		2280,
		1716,
		2050,
		2173,
		1674,
		2222,
		2197,
		1325,
		2162,
		1759,
		2178,
		1537,
		2054,
		1801,
		1863,
		1512,
		2118,
		2429,
		1816,
		2127,
		2058,
		1640,
		1952,
		1383,
		1506,
		2191,
		1780,
		1811,
		1937,
		1368,
		1512,
		1393,
		2009,
		1895,
		2090,
		1810,
		2168,
		2171,
		2063,
		2242,
		2050,
		2119,
		2189,
		1929,
		2393,
		1380,
		1810,
		1453,
		2286
	],
	"AverageElapsed_less5s": [
		3525,
		3871,
		4105,
		3673,
		4853,
		3746,
		3439,
		3489,
		1905,
		1971,
		1311,
		3850,
		4546,
		3755,
		4247,
		2963,
		4277,
		3508,
		2169,
		4933,
		1784,
		4859,
		2851,
		4595,
		1389,
		3725,
		1861,
		3809,
		4710,
		3587,
		3642,
		4913,
		2789,
		3982,
		3715,
		2503,
		2456,
		3761,
		1313,
		2382,
		1979,
		1837,
		3033,
		1820,
		1858,
		1223,
		4758,
		3897,
		4647,
		2043,
		4357,
		2103,
		3228,
		2918,
		1513,
		1514,
		4367,
		1852,
		4436,
		4413,
		3172,
		3285,
		3365,
		2671,
		2794,
		4396,
		3044,
		4317,
		3973,
		3625,
		2482,
		4820,
		4196,
		2527,
		4307,
		3820,
		1751,
		1427,
		3704,
		3642,
		1978,
		2554,
		3419,
		4500,
		1271,
		4009,
		1820,
		2048,
		1944,
		2660,
		3581,
		3642,
		1714,
		3695,
		4287,
		1275
	],
	"Count_RC2": [
		4523,
		3607,
		3064,
		3006,
		3020,
		2860,
		4929,
		4669,
		4152,
		3100,
		4797,
		4503,
		3931,
		3366,
		4468,
		4771,
		3672,
		4165,
		4217,
		3902,
		3325,
		3998,
		4181,
		3668,
		3005,
		2850,
		4988,
		4212,
		3323,
		4383,
		4403,
		4989,
		4556,
		4201,
		4159,
		4589,
		3362,
		4388,
		4372,
		4382,
		4147,
		4606,
		3996,
		3696,
		3856,
		2986,
		3324,
		4625,
		2810,
		4520,
		4601,
		2994,
		3490,
		4282,
		2553,
		4268,
		3596,
		4569,
		4817,
		4595,
		3963,
		3407,
		3547,
		4186,
		3310,
		4141,
		3867,
		4481,
		3239,
		3508,
		2999,
		4774,
		3134,
		2924,
		4773,
		2907,
		3914,
		3401,
		3728,
		3385,
		4613,
		3088,
		4079,
		4211,
		3879,
		3044,
		4281,
		3968,
		4042,
		4184,
		4895,
		3635,
		4584,
		4758,
		4530,
		3812
	],
	"AverageElapsed_over5s": [
		10551,
		5384,
		8165,
		6866,
		8755,
		11264,
		12207,
		9674,
		7968,
		6639,
		8990,
		11340,
		7955,
		6704,
		5642,
		7565,
		5816,
		10337,
		12277,
		5234,
		7279,
		7438,
		12160,
		12237,
		8177,
		10427,
		6574,
		7321,
		5667,
		9920,
		11447,
		8946,
		10949,
		7704,
		5620,
		11699,
		5895,
		8775,
		5504,
		9159,
		11443,
		9483,
		7582,
		7735,
		5434,
		9442,
		8767,
		11117,
		9920,
		10585,
		7382,
		7868,
		6783,
		8582,
		8794,
		10907,
		8334,
		11575,
		8700,
		7037,
		9044,
		7830,
		8369,
		8902,
		6995,
		10570,
		5450,
		9011,
		12493,
		7983,
		10988,
		10108,
		6057,
		5876,
		7181,
		6887,
		8334,
		6138,
		5547,
		12050,
		8646,
		7223,
		10759,
		5293,
		6799,
		5335,
		11334,
		11576,
		11900,
		9531,
		10498,
		12059,
		7310,
		10119,
		8768,
		6188
	],
	"timepoint": [
		"2017-03-29 00:15:00",
		"2017-03-29 00:30:00",
		"2017-03-29 00:45:00",
		"2017-03-29 01:00:00",
		"2017-03-29 01:15:00",
		"2017-03-29 01:30:00",
		"2017-03-29 01:45:00",
		"2017-03-29 02:00:00",
		"2017-03-29 02:15:00",
		"2017-03-29 02:30:00",
		"2017-03-29 02:45:00",
		"2017-03-29 03:00:00",
		"2017-03-29 03:15:00",
		"2017-03-29 03:30:00",
		"2017-03-29 03:45:00",
		"2017-03-29 04:00:00",
		"2017-03-29 04:15:00",
		"2017-03-29 04:30:00",
		"2017-03-29 04:45:00",
		"2017-03-29 05:00:00",
		"2017-03-29 05:15:00",
		"2017-03-29 05:30:00",
		"2017-03-29 05:45:00",
		"2017-03-29 06:00:00",
		"2017-03-29 06:15:00",
		"2017-03-29 06:30:00",
		"2017-03-29 06:45:00",
		"2017-03-29 07:00:00",
		"2017-03-29 07:15:00",
		"2017-03-29 07:30:00",
		"2017-03-29 07:45:00",
		"2017-03-29 08:00:00",
		"2017-03-29 08:15:00",
		"2017-03-29 08:30:00",
		"2017-03-29 08:45:00",
		"2017-03-29 09:00:00",
		"2017-03-29 09:15:00",
		"2017-03-29 09:30:00",
		"2017-03-29 09:45:00",
		"2017-03-29 10:00:00",
		"2017-03-29 10:15:00",
		"2017-03-29 10:30:00",
		"2017-03-29 10:45:00",
		"2017-03-29 11:00:00",
		"2017-03-29 11:15:00",
		"2017-03-29 11:30:00",
		"2017-03-29 11:45:00",
		"2017-03-29 12:00:00",
		"2017-03-29 12:15:00",
		"2017-03-29 12:30:00",
		"2017-03-29 12:45:00",
		"2017-03-29 13:00:00",
		"2017-03-29 13:15:00",
		"2017-03-29 13:30:00",
		"2017-03-29 13:45:00",
		"2017-03-29 14:00:00",
		"2017-03-29 14:15:00",
		"2017-03-29 14:30:00",
		"2017-03-29 14:45:00",
		"2017-03-29 15:00:00",
		"2017-03-29 15:15:00",
		"2017-03-29 15:30:00",
		"2017-03-29 15:45:00",
		"2017-03-29 16:00:00",
		"2017-03-29 16:15:00",
		"2017-03-29 16:30:00",
		"2017-03-29 16:45:00",
		"2017-03-29 17:00:00",
		"2017-03-29 17:15:00",
		"2017-03-29 17:30:00",
		"2017-03-29 17:45:00",
		"2017-03-29 18:00:00",
		"2017-03-29 18:15:00",
		"2017-03-29 18:30:00",
		"2017-03-29 18:45:00",
		"2017-03-29 19:00:00",
		"2017-03-29 19:15:00",
		"2017-03-29 19:30:00",
		"2017-03-29 19:45:00",
		"2017-03-29 20:00:00",
		"2017-03-29 20:15:00",
		"2017-03-29 20:30:00",
		"2017-03-29 20:45:00",
		"2017-03-29 21:00:00",
		"2017-03-29 21:15:00",
		"2017-03-29 21:30:00",
		"2017-03-29 21:45:00",
		"2017-03-29 22:00:00",
		"2017-03-29 22:15:00",
		"2017-03-29 22:30:00",
		"2017-03-29 22:45:00",
		"2017-03-29 23:00:00",
		"2017-03-29 23:15:00",
		"2017-03-29 23:30:00",
		"2017-03-29 23:45:00",
		"2017-03-30 00:00:00"
	],
	"Count_RC3": [
		33,
		21,
		38,
		15,
		45,
		21,
		31,
		40,
		27,
		50,
		25,
		50,
		45,
		40,
		30,
		30,
		37,
		10,
		41,
		34,
		19,
		12,
		42,
		44,
		33,
		48,
		27,
		37,
		35,
		43,
		22,
		31,
		14,
		41,
		16,
		23,
		15,
		38,
		42,
		13,
		45,
		38,
		31,
		32,
		21,
		43,
		42,
		38,
		42,
		12,
		42,
		39,
		30,
		24,
		22,
		26,
		21,
		21,
		25,
		39,
		46,
		19,
		44,
		50,
		38,
		20,
		23,
		26,
		42,
		28,
		49,
		24,
		36,
		18,
		15,
		38,
		15,
		31,
		45,
		40,
		30,
		50,
		29,
		40,
		26,
		32,
		16,
		18,
		34,
		48,
		50,
		12,
		24,
		35,
		43,
		39
	]
};

/***/ }),
/* 58 */
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


/***/ })
/******/ ]);