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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbutton {\n  background: white;\n  border: 1px solid red;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  outline: 0;\n}\n\n.canvasContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 300px;\n}\n\n.buttonsContainer {\n  width: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.moveButtonsContainer {\n  width: 122px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.middleButtonsContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["style.sass","style.css"],"names":[],"mappings":"AAAA;EACI,SAAS;EACT,UAAU;EACV,8BAAsB;UAAG,sBAAA;ACE7B;;AAEA;EDAI,iBAAQ;EACR,qBAAkB;EAClB,kBAAY;EACZ,YAAW;EACX,WAAU;EAAG,UAAA;ACGjB;;AAEA;EDDI,oBAAiB;EACjB,oBAAmB;EACnB,aAAA;EACA,wBAAW;MACX,qBAAa;UAAG,uBAAA;ECIlB,yBAAyB;MDF3B,sBAAkB;UACP,mBAAG;EACV,4BAAa;EACb,6BAA2B;MAAG,0BAAA;UCKxB,sBAAsB;EDHhC,WAAA;EACI,aAAY;ACKhB;;AAEA;EDHI,UAAA;EAAsB,oBAAA;ECMxB,oBAAoB;EDJtB,aAAA;EACI,uBAAa;MACb,oBAAiB;UACV,2BAAI;ACMf;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;MACzB,0BAA0B;UACtB,sBAAsB;EAC9B,yBAAyB;MACrB,sBAAsB;UAClB,8BAA8B;EACtC,yBAAyB;MACrB,sBAAsB;UAClB,mBAAmB;AAC7B;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,yBAAyB;MACrB,sBAAsB;UAClB,8BAA8B;EACtC,WAAW;AACb;AACA,oCAAoC","file":"style.css"}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player.js */ "./src/scripts/player.js");
/* harmony import */ var _scripts_keypressAciton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/keypressAciton.js */ "./src/scripts/keypressAciton.js");
/* harmony import */ var _scripts_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/map.js */ "./src/scripts/map.js");
/* harmony import */ var _scripts_mapObjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/mapObjects.js */ "./src/scripts/mapObjects.js");
/* harmony import */ var _scripts_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/buttons.js */ "./src/scripts/buttons.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_5__);






let root = document.getElementById('root');
root.classList.add('canvasContainer');
let canvasContainer = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 160;
canvasContainer.append(canvas);
root.append(canvasContainer);
root.append(_scripts_buttons_js__WEBPACK_IMPORTED_MODULE_4__["buttons"]);
let ctx = canvas.getContext('2d');
const GAME_HEIGHT = canvas.clientHeight;
const GAME_WIDHT = canvas.clientWidth;
const WALL_WIDTH = 5;
let mapObjects = new _scripts_mapObjects_js__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_HEIGHT, GAME_WIDHT, WALL_WIDTH);
let keyPressUp = new _scripts_keypressAciton_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
let player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, keyPressUp, mapObjects);
let map = new _scripts_map_js__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, mapObjects);

function gameLoop() {
  ctx.clearRect(0, 0, GAME_WIDHT, GAME_HEIGHT);
  player.render();
  map.render();
  requestAnimationFrame(gameLoop);
}

gameLoop();

/***/ }),

/***/ "./src/scripts/buttons.js":
/*!********************************!*\
  !*** ./src/scripts/buttons.js ***!
  \********************************/
/*! exports provided: buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttonsContainer; });
// import style from '../styles/style.css'
let buttonsContainer = document.createElement('div');
let moveButtonsContainer = document.createElement('div');
let higherButtonUp = document.createElement('button');
let middleButtonsContainer = document.createElement('div');
let middleButtonLeft = document.createElement('button');
let middleButtonRight = document.createElement('button');
let buttomButtonDown = document.createElement('button');
buttonsContainer.classList.add('buttonsContainer');
moveButtonsContainer.classList.add('moveButtonsContainer');
middleButtonsContainer.classList.add('middleButtonsContainer');
higherButtonUp.innerHTML = 'up';
middleButtonLeft.innerHTML = 'left';
middleButtonRight.innerHTML = 'right';
buttomButtonDown.innerHTML = 'down';
buttonsContainer.append(moveButtonsContainer);
moveButtonsContainer.append(higherButtonUp);
moveButtonsContainer.append(middleButtonsContainer);
middleButtonsContainer.append(middleButtonLeft);
middleButtonsContainer.append(middleButtonRight); // moveButtonsContainer.append(buttomButtonDown)



/***/ }),

/***/ "./src/scripts/keypressAciton.js":
/*!***************************************!*\
  !*** ./src/scripts/keypressAciton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyPressUp; });
class KeyPressUp {
  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
    document.querySelectorAll('button').forEach((el, index) => {
      document.querySelectorAll('button')[index].addEventListener('mousedown', this.handleKey.bind(this, true, el.innerHTML));
      document.querySelectorAll('button')[index].addEventListener('mouseup', this.handleKey.bind(this, false, el.innerHTML));
    });
    document.addEventListener('keydown', this.handleKey.bind(this, true));
    document.addEventListener('keyup', this.handleKey.bind(this, false));
  }

  handleKey(value, event, text) {
    switch (event) {
      case 'up':
        this.up = value;
        break;

      case 'left':
        this.left = value;
        break;

      case 'right':
        this.right = value;
        break;

      default:
        break;
    }

    switch (event.keyCode) {
      // left
      case 37:
      case 65:
        this.left = value;
        break;
      // jump

      case 38:
      case 87:
        this.up = value;
        break;
      // right

      case 39:
      case 68:
        this.right = value;
        break;

      default:
        break;
    }
  }

}

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
class Map {
  constructor(context, mapObjects) {
    this.map = mapObjects.objects;
    this.context = context;
  }

  render() {
    let ctx = this.context;
    ctx.save();
    this.map.forEach(el => {
      ctx.fillStyle = el.color;
      ctx.fillRect(el.x1, el.y1, el.width, el.height);
    });
    ctx.restore();
  }

}

/***/ }),

/***/ "./src/scripts/mapObjects.js":
/*!***********************************!*\
  !*** ./src/scripts/mapObjects.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MapObject {
  constructor(gameHeight, gameWidth, wallWidth) {
    this.objects = [{
      name: 'left wall',
      x1: 0,
      y1: 0,
      width: wallWidth,
      height: gameHeight,
      color: 'grey'
    }, {
      name: 'right wall',
      x1: gameWidth - wallWidth,
      y1: 0,
      width: wallWidth,
      height: gameHeight,
      color: 'grey'
    }, {
      name: 'roof',
      x1: 0,
      y1: 0,
      width: gameWidth - wallWidth,
      height: wallWidth,
      color: 'grey'
    }, {
      name: 'floor',
      x1: 0,
      y1: gameHeight - wallWidth,
      width: gameWidth - wallWidth,
      height: wallWidth,
      color: 'grey'
    }, {
      name: 'balcony 1',
      x1: 80,
      y1: gameHeight - wallWidth - 21,
      width: 50,
      height: wallWidth,
      color: 'yellow'
    }, {
      name: 'balcony 2',
      x1: 20,
      y1: gameHeight - wallWidth - 41,
      width: 50,
      height: wallWidth,
      color: 'yellow'
    }];
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MapObject);

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
class Player {
  constructor(context, keys, mapObjects) {
    this.context = context;
    this.keys = keys;
    this.mapObjects = mapObjects.objects; // player specifications

    this.width = 10;
    this.height = 10;
    this.position = {
      x: 50,
      y: 10
    };
    this.color = 'red'; // moving specifications

    this.currentSpeed = 0;
    this.speedAcceleration = 0.1;
    this.maxSpeed = 5;
    this.lastDirection = ''; // gravity specifications

    this.gravityCurrentSpeed = 0;
    this.gravityAcceleration = 0.1; // jump settings

    this.maxJumpHeight = 40;
    this.startJumpSpeed = Math.sqrt(this.gravityAcceleration * this.maxJumpHeight * 2) + this.gravityAcceleration;
    this.canJump = false;
    this.takeOff = false;
  }

  findMoveLimits() {
    let floors = [];
    let roofs = [];
    let leftWalls = [];
    let rightWalls = []; // test, our position is on/under/left/right mapObject ?

    this.mapObjects.forEach(el => {
      // if we in X range balcony 
      if (this.position.x < el.x1 + el.width && this.position.x + this.width > el.x1) {
        // find all floors
        if (this.position.y + this.height <= el.y1) floors.push(el.y1 - this.height); // find all roofs
        else if (this.position.y >= el.y1 + el.height) roofs.push(el.y1 + el.height);
      } // if we in Y range balcony


      if (this.position.y + this.height > el.y1 && this.position.y < el.y1 + el.height) {
        // find all right walls
        if (this.position.x + this.width <= el.x1) rightWalls.push(el.x1 - this.width); // find all left walls
        else if (this.position.x >= el.x1 + el.width) leftWalls.push(el.x1 + el.width);
      }
    });
    return {
      floors,
      roofs,
      leftWalls,
      rightWalls
    };
  }

  move(direction, wall, symbol) {
    if (this.lastDirection == direction) {
      if (this.currentSpeed < this.maxSpeed) this.currentSpeed += this.speedAcceleration;
    } else this.currentSpeed = 0;

    if (direction == 'right') {
      if (this.position.x + this.currentSpeed > wall) this.currentSpeed = wall - this.position.x;
    } else {
      if (this.position.x - this.currentSpeed < wall) this.currentSpeed = this.position.x - wall;
    }

    this.lastDirection = direction;
    return symbol * this.currentSpeed;
  }

  jump(roof) {
    // we start jump
    if (this.canJump) {
      this.canJump = false;
      this.takeOff = true;
      this.gravityCurrentSpeed = -this.startJumpSpeed;
    } // this takeoff mechanism


    if (this.takeOff) {
      if (Math.floor(10 * this.gravityCurrentSpeed) == 0 || this.position.y + this.gravityCurrentSpeed < roof) {
        this.takeOff = false;
        this.gravityCurrentSpeed = 0;
        return 0;
      } else {
        this.gravityCurrentSpeed += this.gravityAcceleration;
        return this.gravityCurrentSpeed;
      }
    }
  }

  gravity(floor) {
    let gravity = 0;

    if (this.position.y < floor) {
      if (this.position.y + this.gravityCurrentSpeed > floor) {
        gravity = floor - this.position.y;
      } else {
        gravity += this.gravityCurrentSpeed;
        this.gravityCurrentSpeed += this.gravityAcceleration;
      }

      this.canJump = false;
    } else {
      this.canJump = true;
      this.currentJumpHeight = 0;
      this.gravityCurrentSpeed = 0;
    }

    return gravity;
  }

  futurePositionInObjcet(speedX, speedY) {
    let speeds = {
      x: speedX,
      y: speedY
    };
    this.mapObjects.forEach(el => {
      // if we in X range balcony  
      if (this.position.x + speedX < el.x1 + el.width && this.position.x + this.width + speedX > el.x1) {
        // if we in Y range balcony                
        if (this.position.y + this.height + speedY > el.y1 && this.position.y + speedY < el.y1 + el.height) {
          if (Math.abs(speedX) > Math.abs(speedY)) {
            this.takeOff = false;
            this.gravityCurrentSpeed = 0;
            speeds.y = 0;
          } else if (Math.abs(speedX) < Math.abs(speedY)) {
            speeds.x = 0;
          } else {
            this.takeOff = false;
            this.gravityCurrentSpeed = 0;
            speeds = {
              x: 0,
              y: 0
            };
          }
        }
      }
    });
    return speeds;
  }

  render() {
    let ctx = this.context;
    let speedX = 0;
    let speedY = 0; // find the most nearest limits

    let limits = this.findMoveLimits();
    let floor = Math.min(...limits.floors);
    let roof = Math.max(...limits.roofs);
    let rightWall = Math.min(...limits.rightWalls);
    let leftWall = Math.max(...limits.leftWalls); // move left/right
    // can i move right ? yes, but if not a wall there

    if (this.keys.right && this.position.x < rightWall) speedX = this.move('right', rightWall, 1);else if (this.keys.left && this.position.y > leftWall) speedX = this.move('left', leftWall, -1);else this.lastDirection = ''; // jump

    if (this.keys.up && this.canJump || this.takeOff) speedY += this.jump(roof); // gravity

    if (!this.takeOff) speedY += this.gravity(floor);
    let newSpeeds = this.futurePositionInObjcet(speedX, speedY); // move position

    this.position.x += newSpeeds.x;
    this.position.y += newSpeeds.y; // draw

    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.restore();
  }

}

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMva2V5cHJlc3NBY2l0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiXSwibmFtZXMiOlsicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYW52YXNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmQiLCJidXR0b25zIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfSEVJR0hUIiwiY2xpZW50SGVpZ2h0IiwiR0FNRV9XSURIVCIsImNsaWVudFdpZHRoIiwiV0FMTF9XSURUSCIsIm1hcE9iamVjdHMiLCJNYXBPYmplY3QiLCJrZXlQcmVzc1VwIiwiS2V5UHJlc3NVcCIsInBsYXllciIsIlBsYXllciIsIm1hcCIsIk1hcCIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYnV0dG9uc0NvbnRhaW5lciIsIm1vdmVCdXR0b25zQ29udGFpbmVyIiwiaGlnaGVyQnV0dG9uVXAiLCJtaWRkbGVCdXR0b25zQ29udGFpbmVyIiwibWlkZGxlQnV0dG9uTGVmdCIsIm1pZGRsZUJ1dHRvblJpZ2h0IiwiYnV0dG9tQnV0dG9uRG93biIsImlubmVySFRNTCIsImNvbnN0cnVjdG9yIiwibGVmdCIsInJpZ2h0IiwidXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5IiwiYmluZCIsInZhbHVlIiwiZXZlbnQiLCJ0ZXh0Iiwia2V5Q29kZSIsImNvbnRleHQiLCJvYmplY3RzIiwic2F2ZSIsImZpbGxTdHlsZSIsImNvbG9yIiwiZmlsbFJlY3QiLCJ4MSIsInkxIiwicmVzdG9yZSIsImdhbWVIZWlnaHQiLCJnYW1lV2lkdGgiLCJ3YWxsV2lkdGgiLCJuYW1lIiwia2V5cyIsInBvc2l0aW9uIiwieCIsInkiLCJjdXJyZW50U3BlZWQiLCJzcGVlZEFjY2VsZXJhdGlvbiIsIm1heFNwZWVkIiwibGFzdERpcmVjdGlvbiIsImdyYXZpdHlDdXJyZW50U3BlZWQiLCJncmF2aXR5QWNjZWxlcmF0aW9uIiwibWF4SnVtcEhlaWdodCIsInN0YXJ0SnVtcFNwZWVkIiwiTWF0aCIsInNxcnQiLCJjYW5KdW1wIiwidGFrZU9mZiIsImZpbmRNb3ZlTGltaXRzIiwiZmxvb3JzIiwicm9vZnMiLCJsZWZ0V2FsbHMiLCJyaWdodFdhbGxzIiwicHVzaCIsIm1vdmUiLCJkaXJlY3Rpb24iLCJ3YWxsIiwic3ltYm9sIiwianVtcCIsInJvb2YiLCJmbG9vciIsImdyYXZpdHkiLCJjdXJyZW50SnVtcEhlaWdodCIsImZ1dHVyZVBvc2l0aW9uSW5PYmpjZXQiLCJzcGVlZFgiLCJzcGVlZFkiLCJzcGVlZHMiLCJhYnMiLCJsaW1pdHMiLCJtaW4iLCJtYXgiLCJyaWdodFdhbGwiLCJsZWZ0V2FsbCIsIm5ld1NwZWVkcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsTUFBTSxjQUFjLGVBQWUsbUNBQW1DLG1DQUFtQyxHQUFHLFlBQVksc0JBQXNCLDBCQUEwQix1QkFBdUIsaUJBQWlCLGdCQUFnQixlQUFlLEdBQUcsc0JBQXNCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLDZCQUE2Qiw4QkFBOEIsb0NBQW9DLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsbUNBQW1DLG1DQUFtQyxnQkFBZ0Isa0JBQWtCLEdBQUcsdUJBQXVCLGVBQWUseUJBQXlCLHlCQUF5QixrQkFBa0IsNEJBQTRCLDZCQUE2Qix3Q0FBd0MsR0FBRywyQkFBMkIsaUJBQWlCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLGlDQUFpQyxrQ0FBa0MsbUNBQW1DLG1DQUFtQyw4QkFBOEIsK0JBQStCLDJDQUEyQyw4QkFBOEIsK0JBQStCLGdDQUFnQyxHQUFHLDZCQUE2Qix5QkFBeUIseUJBQXlCLGtCQUFrQiw4QkFBOEIsK0JBQStCLDJDQUEyQyxnQkFBZ0IsR0FBRyw4Q0FBOEMsNkVBQTZFLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksV0FBVyxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssZ0NBQWdDO0FBQ2o1RTtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDTjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBWDtBQUNBRixJQUFJLENBQUNHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixpQkFBbkI7QUFFQSxJQUFJQyxlQUFlLEdBQUdKLFFBQVEsQ0FBRUssYUFBVixDQUF3QixLQUF4QixDQUF0QjtBQUNBLElBQUlDLE1BQU0sR0FBR04sUUFBUSxDQUFDSyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDSUMsTUFBTSxDQUFDQyxLQUFQLEdBQWUsR0FBZjtBQUNBRCxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsR0FBaEI7QUFFSkosZUFBZSxDQUFDSyxNQUFoQixDQUF1QkgsTUFBdkI7QUFFQVAsSUFBSSxDQUFDVSxNQUFMLENBQVlMLGVBQVo7QUFDQUwsSUFBSSxDQUFDVSxNQUFMLENBQVlDLDJEQUFaO0FBRUEsSUFBSUMsR0FBRyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUVBLE1BQU1DLFdBQVcsR0FBR1AsTUFBTSxDQUFDUSxZQUEzQjtBQUNBLE1BQU1DLFVBQVUsR0FBSVQsTUFBTSxDQUFDVSxXQUEzQjtBQUNBLE1BQU1DLFVBQVUsR0FBSSxDQUFwQjtBQUVBLElBQUlDLFVBQVUsR0FBRyxJQUFJQyw4REFBSixDQUFjTixXQUFkLEVBQTJCRSxVQUEzQixFQUF1Q0UsVUFBdkMsQ0FBakI7QUFFQSxJQUFJRyxVQUFVLEdBQUcsSUFBSUMsa0VBQUosRUFBakI7QUFDQSxJQUFJQyxNQUFNLEdBQU8sSUFBSUMsMERBQUosQ0FBV1osR0FBWCxFQUFnQlMsVUFBaEIsRUFBNEJGLFVBQTVCLENBQWpCO0FBQ0EsSUFBSU0sR0FBRyxHQUFVLElBQUlDLHVEQUFKLENBQVFkLEdBQVIsRUFBYU8sVUFBYixDQUFqQjs7QUFFQSxTQUFTUSxRQUFULEdBQW9CO0FBQ2hCZixLQUFHLENBQUNnQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQlosVUFBcEIsRUFBZ0NGLFdBQWhDO0FBRUFTLFFBQU0sQ0FBQ00sTUFBUDtBQUNBSixLQUFHLENBQUNJLE1BQUo7QUFFQUMsdUJBQXFCLENBQUNILFFBQUQsQ0FBckI7QUFDSDs7QUFFREEsUUFBUSxHOzs7Ozs7Ozs7Ozs7QUN6Q1I7QUFBQTtBQUFBO0FBQ0EsSUFBSUksZ0JBQWdCLEdBQVM5QixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0I7QUFDQSxJQUFJMEIsb0JBQW9CLEdBQUsvQixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0I7QUFFQSxJQUFJMkIsY0FBYyxHQUFXaEMsUUFBUSxDQUFDSyxhQUFULENBQXVCLFFBQXZCLENBQTdCO0FBRUEsSUFBSTRCLHNCQUFzQixHQUFHakMsUUFBUSxDQUFDSyxhQUFULENBQXVCLEtBQXZCLENBQTdCO0FBQ0EsSUFBSTZCLGdCQUFnQixHQUFTbEMsUUFBUSxDQUFDSyxhQUFULENBQXVCLFFBQXZCLENBQTdCO0FBQ0EsSUFBSThCLGlCQUFpQixHQUFRbkMsUUFBUSxDQUFDSyxhQUFULENBQXVCLFFBQXZCLENBQTdCO0FBRUEsSUFBSStCLGdCQUFnQixHQUFTcEMsUUFBUSxDQUFDSyxhQUFULENBQXVCLFFBQXZCLENBQTdCO0FBR0F5QixnQkFBZ0IsQ0FBQzVCLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixrQkFBL0I7QUFDQTRCLG9CQUFvQixDQUFDN0IsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLHNCQUFuQztBQUNBOEIsc0JBQXNCLENBQUMvQixTQUF2QixDQUFpQ0MsR0FBakMsQ0FBcUMsd0JBQXJDO0FBR0E2QixjQUFjLENBQUNLLFNBQWYsR0FBOEIsSUFBOUI7QUFDQUgsZ0JBQWdCLENBQUNHLFNBQWpCLEdBQThCLE1BQTlCO0FBQ0FGLGlCQUFpQixDQUFDRSxTQUFsQixHQUE4QixPQUE5QjtBQUNBRCxnQkFBZ0IsQ0FBQ0MsU0FBakIsR0FBOEIsTUFBOUI7QUFFQVAsZ0JBQWdCLENBQUNyQixNQUFqQixDQUF3QnNCLG9CQUF4QjtBQUVBQSxvQkFBb0IsQ0FBQ3RCLE1BQXJCLENBQTRCdUIsY0FBNUI7QUFFQUQsb0JBQW9CLENBQUN0QixNQUFyQixDQUE0QndCLHNCQUE1QjtBQUNBQSxzQkFBc0IsQ0FBQ3hCLE1BQXZCLENBQThCeUIsZ0JBQTlCO0FBQ0FELHNCQUFzQixDQUFDeEIsTUFBdkIsQ0FBOEIwQixpQkFBOUIsRSxDQUVBOzs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQWUsTUFBTWQsVUFBTixDQUFpQjtBQUM1QmlCLGFBQVcsR0FBRztBQUNWLFNBQUtDLElBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLQyxFQUFMLEdBQWEsS0FBYjtBQUVBekMsWUFBUSxDQUFDMEMsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLE9BQXBDLENBQTRDLENBQUNDLEVBQUQsRUFBS0MsS0FBTCxLQUFlO0FBQ3ZEN0MsY0FBUSxDQUFDMEMsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NHLEtBQXBDLEVBQTJDQyxnQkFBM0MsQ0FBNEQsV0FBNUQsRUFBeUUsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDSixFQUFFLENBQUNQLFNBQW5DLENBQXpFO0FBQ0FyQyxjQUFRLENBQUMwQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0csS0FBcEMsRUFBMkNDLGdCQUEzQyxDQUE0RCxTQUE1RCxFQUF1RSxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsS0FBMUIsRUFBaUNKLEVBQUUsQ0FBQ1AsU0FBcEMsQ0FBdkU7QUFDSCxLQUhEO0FBS0FyQyxZQUFRLENBQUM4QyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FBckM7QUFDQWhELFlBQVEsQ0FBQzhDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixFQUEwQixLQUExQixDQUFuQztBQUNIOztBQUVERCxXQUFTLENBQUNFLEtBQUQsRUFBUUMsS0FBUixFQUFlQyxJQUFmLEVBQXFCO0FBQzFCLFlBQVFELEtBQVI7QUFDSSxXQUFLLElBQUw7QUFFSSxhQUFLVCxFQUFMLEdBQVVRLEtBQVY7QUFDQTs7QUFFSixXQUFLLE1BQUw7QUFDSSxhQUFLVixJQUFMLEdBQVlVLEtBQVo7QUFDQTs7QUFFSixXQUFLLE9BQUw7QUFDSSxhQUFLVCxLQUFMLEdBQWFTLEtBQWI7QUFDQTs7QUFFSjtBQUNJO0FBZlI7O0FBbUJBLFlBQVFDLEtBQUssQ0FBQ0UsT0FBZDtBQUNJO0FBQ0EsV0FBSyxFQUFMO0FBQ0EsV0FBSyxFQUFMO0FBQ0ksYUFBS2IsSUFBTCxHQUFZVSxLQUFaO0FBQ0E7QUFFSjs7QUFDQSxXQUFLLEVBQUw7QUFDQSxXQUFLLEVBQUw7QUFDSSxhQUFLUixFQUFMLEdBQVVRLEtBQVY7QUFDQTtBQUVKOztBQUNBLFdBQUssRUFBTDtBQUNBLFdBQUssRUFBTDtBQUNJLGFBQUtULEtBQUwsR0FBYVMsS0FBYjtBQUVBOztBQUNKO0FBQ0k7QUFwQlI7QUF5Qkg7O0FBNUQyQixDOzs7Ozs7Ozs7Ozs7QUNBaEM7QUFBQTtBQUFlLE1BQU14QixHQUFOLENBQVU7QUFDckJhLGFBQVcsQ0FBQ2UsT0FBRCxFQUFVbkMsVUFBVixFQUFzQjtBQUM3QixTQUFLTSxHQUFMLEdBQVdOLFVBQVUsQ0FBQ29DLE9BQXRCO0FBRUEsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0g7O0FBRUR6QixRQUFNLEdBQUc7QUFDTCxRQUFJakIsR0FBRyxHQUFHLEtBQUswQyxPQUFmO0FBQ0ExQyxPQUFHLENBQUM0QyxJQUFKO0FBRUEsU0FBSy9CLEdBQUwsQ0FBU21CLE9BQVQsQ0FBaUJDLEVBQUUsSUFBSTtBQUNuQmpDLFNBQUcsQ0FBQzZDLFNBQUosR0FBZ0JaLEVBQUUsQ0FBQ2EsS0FBbkI7QUFDQTlDLFNBQUcsQ0FBQytDLFFBQUosQ0FBYWQsRUFBRSxDQUFDZSxFQUFoQixFQUFvQmYsRUFBRSxDQUFDZ0IsRUFBdkIsRUFBMkJoQixFQUFFLENBQUNyQyxLQUE5QixFQUFxQ3FDLEVBQUUsQ0FBQ3BDLE1BQXhDO0FBQ0gsS0FIRDtBQUtBRyxPQUFHLENBQUNrRCxPQUFKO0FBQ0g7O0FBakJvQixDOzs7Ozs7Ozs7Ozs7QUNBekI7QUFBQSxNQUFNMUMsU0FBTixDQUFnQjtBQUNabUIsYUFBVyxDQUFDd0IsVUFBRCxFQUFhQyxTQUFiLEVBQXdCQyxTQUF4QixFQUFtQztBQUMxQyxTQUFLVixPQUFMLEdBQWUsQ0FDWDtBQUNJVyxVQUFJLEVBQUUsV0FEVjtBQUVJTixRQUFFLEVBQUUsQ0FGUjtBQUdJQyxRQUFFLEVBQUUsQ0FIUjtBQUlJckQsV0FBSyxFQUFFeUQsU0FKWDtBQUtJeEQsWUFBTSxFQUFFc0QsVUFMWjtBQU1JTCxXQUFLLEVBQUU7QUFOWCxLQURXLEVBU1g7QUFDSVEsVUFBSSxFQUFFLFlBRFY7QUFFSU4sUUFBRSxFQUFFSSxTQUFTLEdBQUdDLFNBRnBCO0FBR0lKLFFBQUUsRUFBRSxDQUhSO0FBSUlyRCxXQUFLLEVBQUV5RCxTQUpYO0FBS0l4RCxZQUFNLEVBQUVzRCxVQUxaO0FBTUlMLFdBQUssRUFBRTtBQU5YLEtBVFcsRUFpQlg7QUFDSVEsVUFBSSxFQUFFLE1BRFY7QUFFSU4sUUFBRSxFQUFFLENBRlI7QUFHSUMsUUFBRSxFQUFFLENBSFI7QUFJSXJELFdBQUssRUFBRXdELFNBQVMsR0FBR0MsU0FKdkI7QUFLSXhELFlBQU0sRUFBRXdELFNBTFo7QUFNSVAsV0FBSyxFQUFFO0FBTlgsS0FqQlcsRUF5Qlg7QUFDSVEsVUFBSSxFQUFFLE9BRFY7QUFFSU4sUUFBRSxFQUFFLENBRlI7QUFHSUMsUUFBRSxFQUFFRSxVQUFVLEdBQUdFLFNBSHJCO0FBSUl6RCxXQUFLLEVBQUV3RCxTQUFTLEdBQUdDLFNBSnZCO0FBS0l4RCxZQUFNLEVBQUV3RCxTQUxaO0FBTUlQLFdBQUssRUFBRTtBQU5YLEtBekJXLEVBaUNYO0FBQ0lRLFVBQUksRUFBRSxXQURWO0FBRUlOLFFBQUUsRUFBRSxFQUZSO0FBR0lDLFFBQUUsRUFBRUUsVUFBVSxHQUFHRSxTQUFiLEdBQXlCLEVBSGpDO0FBSUl6RCxXQUFLLEVBQUUsRUFKWDtBQUtJQyxZQUFNLEVBQUV3RCxTQUxaO0FBTUlQLFdBQUssRUFBRTtBQU5YLEtBakNXLEVBeUNYO0FBQ0lRLFVBQUksRUFBRSxXQURWO0FBRUlOLFFBQUUsRUFBRSxFQUZSO0FBR0lDLFFBQUUsRUFBRUUsVUFBVSxHQUFHRSxTQUFiLEdBQXlCLEVBSGpDO0FBSUl6RCxXQUFLLEVBQUUsRUFKWDtBQUtJQyxZQUFNLEVBQUV3RCxTQUxaO0FBTUlQLFdBQUssRUFBRTtBQU5YLEtBekNXLENBQWY7QUFrREg7O0FBcERXOztBQXVERHRDLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUFBO0FBQWUsTUFBTUksTUFBTixDQUFhO0FBQ3hCZSxhQUFXLENBQUNlLE9BQUQsRUFBVWEsSUFBVixFQUFnQmhELFVBQWhCLEVBQTRCO0FBQ25DLFNBQUttQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLYSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLaEQsVUFBTCxHQUFrQkEsVUFBVSxDQUFDb0MsT0FBN0IsQ0FIbUMsQ0FLbkM7O0FBQ0EsU0FBSy9DLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLMkQsUUFBTCxHQUFnQjtBQUNaQyxPQUFDLEVBQUUsRUFEUztBQUVaQyxPQUFDLEVBQUU7QUFGUyxLQUFoQjtBQUlBLFNBQUtaLEtBQUwsR0FBYSxLQUFiLENBWm1DLENBY25DOztBQUNBLFNBQUthLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixHQUF6QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEVBQXJCLENBbEJtQyxDQW9CbkM7O0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkIsQ0FBM0I7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQixHQUEzQixDQXRCbUMsQ0F3Qm5DOztBQUNBLFNBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLSixtQkFBTCxHQUEyQixLQUFLQyxhQUFoQyxHQUFnRCxDQUExRCxJQUErRCxLQUFLRCxtQkFBMUY7QUFDQSxTQUFLSyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0g7O0FBRURDLGdCQUFjLEdBQUc7QUFDYixRQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLFFBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEVBQWpCLENBSmEsQ0FNYjs7QUFDQSxTQUFLcEUsVUFBTCxDQUFnQnlCLE9BQWhCLENBQXlCQyxFQUFELElBQVE7QUFFNUI7QUFDQSxVQUFJLEtBQUt1QixRQUFMLENBQWNDLENBQWQsR0FBa0J4QixFQUFFLENBQUNlLEVBQUgsR0FBUWYsRUFBRSxDQUFDckMsS0FBN0IsSUFBc0MsS0FBSzRELFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLN0QsS0FBdkIsR0FBK0JxQyxFQUFFLENBQUNlLEVBQTVFLEVBQWdGO0FBQzVFO0FBQ0EsWUFBSSxLQUFLUSxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBSzdELE1BQXZCLElBQWlDb0MsRUFBRSxDQUFDZ0IsRUFBeEMsRUFBK0N1QixNQUFNLENBQUNJLElBQVAsQ0FBWTNDLEVBQUUsQ0FBQ2dCLEVBQUgsR0FBUSxLQUFLcEQsTUFBekIsRUFBL0MsQ0FDQTtBQURBLGFBRUssSUFBSSxLQUFLMkQsUUFBTCxDQUFjRSxDQUFkLElBQW1CekIsRUFBRSxDQUFDZ0IsRUFBSCxHQUFRaEIsRUFBRSxDQUFDcEMsTUFBbEMsRUFBMEM0RSxLQUFLLENBQUNHLElBQU4sQ0FBVzNDLEVBQUUsQ0FBQ2dCLEVBQUgsR0FBUWhCLEVBQUUsQ0FBQ3BDLE1BQXRCO0FBQ2xELE9BUjJCLENBVTVCOzs7QUFDQSxVQUFJLEtBQUsyRCxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBSzdELE1BQXZCLEdBQWdDb0MsRUFBRSxDQUFDZ0IsRUFBbkMsSUFBeUMsS0FBS08sUUFBTCxDQUFjRSxDQUFkLEdBQWtCekIsRUFBRSxDQUFDZ0IsRUFBSCxHQUFRaEIsRUFBRSxDQUFDcEMsTUFBMUUsRUFBa0Y7QUFDL0U7QUFDQSxZQUFJLEtBQUsyRCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBSzdELEtBQXZCLElBQWdDcUMsRUFBRSxDQUFDZSxFQUF2QyxFQUE4QzJCLFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQjNDLEVBQUUsQ0FBQ2UsRUFBSCxHQUFRLEtBQUtwRCxLQUE3QixFQUE5QyxDQUNBO0FBREEsYUFFSyxJQUFJLEtBQUs0RCxRQUFMLENBQWNDLENBQWQsSUFBbUJ4QixFQUFFLENBQUNlLEVBQUgsR0FBUWYsRUFBRSxDQUFDckMsS0FBbEMsRUFBeUM4RSxTQUFTLENBQUNFLElBQVYsQ0FBZTNDLEVBQUUsQ0FBQ2UsRUFBSCxHQUFRZixFQUFFLENBQUNyQyxLQUExQjtBQUNoRDtBQUVKLEtBbEJEO0FBb0JBLFdBQU87QUFBRTRFLFlBQUY7QUFBVUMsV0FBVjtBQUFpQkMsZUFBakI7QUFBNEJDO0FBQTVCLEtBQVA7QUFDSDs7QUFFREUsTUFBSSxDQUFDQyxTQUFELEVBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQTBCO0FBRTFCLFFBQUksS0FBS2xCLGFBQUwsSUFBc0JnQixTQUExQixFQUFxQztBQUNqQyxVQUFJLEtBQUtuQixZQUFMLEdBQW9CLEtBQUtFLFFBQTdCLEVBQXVDLEtBQUtGLFlBQUwsSUFBcUIsS0FBS0MsaUJBQTFCO0FBQzFDLEtBRkQsTUFFTyxLQUFLRCxZQUFMLEdBQW9CLENBQXBCOztBQUVQLFFBQUltQixTQUFTLElBQUksT0FBakIsRUFBMEI7QUFDdEIsVUFBSSxLQUFLdEIsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtFLFlBQXZCLEdBQXNDb0IsSUFBMUMsRUFBZ0QsS0FBS3BCLFlBQUwsR0FBb0JvQixJQUFJLEdBQUcsS0FBS3ZCLFFBQUwsQ0FBY0MsQ0FBekM7QUFDbkQsS0FGRCxNQUdLO0FBQ0QsVUFBSSxLQUFLRCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0UsWUFBdkIsR0FBc0NvQixJQUExQyxFQUFnRCxLQUFLcEIsWUFBTCxHQUFvQixLQUFLSCxRQUFMLENBQWNDLENBQWQsR0FBa0JzQixJQUF0QztBQUNuRDs7QUFFRCxTQUFLakIsYUFBTCxHQUFxQmdCLFNBQXJCO0FBRUEsV0FBT0UsTUFBTSxHQUFHLEtBQUtyQixZQUFyQjtBQUNIOztBQUVEc0IsTUFBSSxDQUFDQyxJQUFELEVBQU87QUFFUDtBQUNBLFFBQUksS0FBS2IsT0FBVCxFQUFrQjtBQUNkLFdBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLElBQWY7QUFFQSxXQUFLUCxtQkFBTCxHQUEyQixDQUFDLEtBQUtHLGNBQWpDO0FBQ0gsS0FSTSxDQVdQOzs7QUFDQSxRQUFJLEtBQUtJLE9BQVQsRUFBa0I7QUFFZCxVQUFJSCxJQUFJLENBQUNnQixLQUFMLENBQVcsS0FBSyxLQUFLcEIsbUJBQXJCLEtBQTZDLENBQTdDLElBQWtELEtBQUtQLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixLQUFLSyxtQkFBdkIsR0FBNkNtQixJQUFuRyxFQUF5RztBQUNyRyxhQUFLWixPQUFMLEdBQWUsS0FBZjtBQUNBLGFBQUtQLG1CQUFMLEdBQTJCLENBQTNCO0FBRUEsZUFBTyxDQUFQO0FBQ0gsT0FMRCxNQUtPO0FBQ0gsYUFBS0EsbUJBQUwsSUFBNEIsS0FBS0MsbUJBQWpDO0FBRUEsZUFBTyxLQUFLRCxtQkFBWjtBQUNIO0FBRUo7QUFFSjs7QUFFRHFCLFNBQU8sQ0FBQ0QsS0FBRCxFQUFRO0FBQ1gsUUFBSUMsT0FBTyxHQUFHLENBQWQ7O0FBRUEsUUFBSSxLQUFLNUIsUUFBTCxDQUFjRSxDQUFkLEdBQWtCeUIsS0FBdEIsRUFBNEI7QUFHeEIsVUFBSSxLQUFLM0IsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtLLG1CQUF2QixHQUE2Q29CLEtBQWpELEVBQXdEO0FBQ3BEQyxlQUFPLEdBQUdELEtBQUssR0FBRyxLQUFLM0IsUUFBTCxDQUFjRSxDQUFoQztBQUVILE9BSEQsTUFHTztBQUNIMEIsZUFBTyxJQUFJLEtBQUtyQixtQkFBaEI7QUFFQSxhQUFLQSxtQkFBTCxJQUE0QixLQUFLQyxtQkFBakM7QUFDSDs7QUFFRCxXQUFLSyxPQUFMLEdBQWUsS0FBZjtBQUNILEtBYkQsTUFhTztBQUVILFdBQUtBLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS2dCLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsV0FBS3RCLG1CQUFMLEdBQTJCLENBQTNCO0FBQ0g7O0FBRUQsV0FBT3FCLE9BQVA7QUFDSDs7QUFFREUsd0JBQXNCLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFpQjtBQUNuQyxRQUFJQyxNQUFNLEdBQUc7QUFDVGhDLE9BQUMsRUFBRThCLE1BRE07QUFFVDdCLE9BQUMsRUFBRThCO0FBRk0sS0FBYjtBQUtBLFNBQUtqRixVQUFMLENBQWdCeUIsT0FBaEIsQ0FBeUJDLEVBQUQsSUFBUTtBQUU1QjtBQUNBLFVBQUksS0FBS3VCLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQjhCLE1BQWxCLEdBQTJCdEQsRUFBRSxDQUFDZSxFQUFILEdBQVFmLEVBQUUsQ0FBQ3JDLEtBQXRDLElBQStDLEtBQUs0RCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBSzdELEtBQXZCLEdBQStCMkYsTUFBL0IsR0FBd0N0RCxFQUFFLENBQUNlLEVBQTlGLEVBQWtHO0FBQzlGO0FBQ0EsWUFBSSxLQUFLUSxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBSzdELE1BQXZCLEdBQWdDMkYsTUFBaEMsR0FBeUN2RCxFQUFFLENBQUNnQixFQUE1QyxJQUFrRCxLQUFLTyxRQUFMLENBQWNFLENBQWQsR0FBa0I4QixNQUFsQixHQUEyQnZELEVBQUUsQ0FBQ2dCLEVBQUgsR0FBUWhCLEVBQUUsQ0FBQ3BDLE1BQTVGLEVBQW9HO0FBQ2hHLGNBQUlzRSxJQUFJLENBQUN1QixHQUFMLENBQVNILE1BQVQsSUFBbUJwQixJQUFJLENBQUN1QixHQUFMLENBQVNGLE1BQVQsQ0FBdkIsRUFBeUM7QUFDckMsaUJBQUtsQixPQUFMLEdBQWUsS0FBZjtBQUNBLGlCQUFLUCxtQkFBTCxHQUEyQixDQUEzQjtBQUVBMEIsa0JBQU0sQ0FBQy9CLENBQVAsR0FBVyxDQUFYO0FBQ0gsV0FMRCxNQUtPLElBQUlTLElBQUksQ0FBQ3VCLEdBQUwsQ0FBU0gsTUFBVCxJQUFtQnBCLElBQUksQ0FBQ3VCLEdBQUwsQ0FBU0YsTUFBVCxDQUF2QixFQUF5QztBQUU1Q0Msa0JBQU0sQ0FBQ2hDLENBQVAsR0FBVyxDQUFYO0FBQ0gsV0FITSxNQUdBO0FBQ0gsaUJBQUthLE9BQUwsR0FBZSxLQUFmO0FBQ0EsaUJBQUtQLG1CQUFMLEdBQTJCLENBQTNCO0FBRUEwQixrQkFBTSxHQUFHO0FBQUVoQyxlQUFDLEVBQUUsQ0FBTDtBQUFRQyxlQUFDLEVBQUU7QUFBWCxhQUFUO0FBQ0g7QUFFSjtBQUNKO0FBRUosS0F4QkQ7QUEwQkEsV0FBTytCLE1BQVA7QUFDSDs7QUFFRHhFLFFBQU0sR0FBRztBQUNMLFFBQUlqQixHQUFHLEdBQUcsS0FBSzBDLE9BQWY7QUFDQSxRQUFJNkMsTUFBTSxHQUFHLENBQWI7QUFDQSxRQUFJQyxNQUFNLEdBQUcsQ0FBYixDQUhLLENBS0w7O0FBQ0EsUUFBSUcsTUFBTSxHQUFHLEtBQUtwQixjQUFMLEVBQWI7QUFFQSxRQUFJWSxLQUFLLEdBQU9oQixJQUFJLENBQUN5QixHQUFMLENBQVMsR0FBR0QsTUFBTSxDQUFDbkIsTUFBbkIsQ0FBaEI7QUFDQSxRQUFJVSxJQUFJLEdBQVFmLElBQUksQ0FBQzBCLEdBQUwsQ0FBUyxHQUFHRixNQUFNLENBQUNsQixLQUFuQixDQUFoQjtBQUNBLFFBQUlxQixTQUFTLEdBQUczQixJQUFJLENBQUN5QixHQUFMLENBQVMsR0FBR0QsTUFBTSxDQUFDaEIsVUFBbkIsQ0FBaEI7QUFDQSxRQUFJb0IsUUFBUSxHQUFJNUIsSUFBSSxDQUFDMEIsR0FBTCxDQUFTLEdBQUdGLE1BQU0sQ0FBQ2pCLFNBQW5CLENBQWhCLENBWEssQ0FhTDtBQUNBOztBQUNBLFFBQVMsS0FBS25CLElBQUwsQ0FBVTFCLEtBQVYsSUFBbUIsS0FBSzJCLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQnFDLFNBQTlDLEVBQXlEUCxNQUFNLEdBQUcsS0FBS1YsSUFBTCxDQUFVLE9BQVYsRUFBbUJpQixTQUFuQixFQUE4QixDQUE5QixDQUFULENBQXpELEtBQ0ssSUFBSSxLQUFLdkMsSUFBTCxDQUFVM0IsSUFBVixJQUFtQixLQUFLNEIsUUFBTCxDQUFjRSxDQUFkLEdBQWtCcUMsUUFBekMsRUFBb0RSLE1BQU0sR0FBRyxLQUFLVixJQUFMLENBQVUsTUFBVixFQUFrQmtCLFFBQWxCLEVBQTRCLENBQUMsQ0FBN0IsQ0FBVCxDQUFwRCxLQUNBLEtBQUtqQyxhQUFMLEdBQXFCLEVBQXJCLENBakJBLENBb0JMOztBQUNBLFFBQU0sS0FBS1AsSUFBTCxDQUFVekIsRUFBVixJQUFnQixLQUFLdUMsT0FBdEIsSUFBbUMsS0FBS0MsT0FBN0MsRUFBc0RrQixNQUFNLElBQUksS0FBS1AsSUFBTCxDQUFVQyxJQUFWLENBQVYsQ0FyQmpELENBc0JMOztBQUNBLFFBQUksQ0FBQyxLQUFLWixPQUFWLEVBQXNEa0IsTUFBTSxJQUFJLEtBQUtKLE9BQUwsQ0FBYUQsS0FBYixDQUFWO0FBRXRELFFBQUlhLFNBQVMsR0FBRyxLQUFLVixzQkFBTCxDQUE0QkMsTUFBNUIsRUFBb0NDLE1BQXBDLENBQWhCLENBekJLLENBMkJMOztBQUNBLFNBQUtoQyxRQUFMLENBQWNDLENBQWQsSUFBbUJ1QyxTQUFTLENBQUN2QyxDQUE3QjtBQUNBLFNBQUtELFFBQUwsQ0FBY0UsQ0FBZCxJQUFtQnNDLFNBQVMsQ0FBQ3RDLENBQTdCLENBN0JLLENBK0JMOztBQUNBMUQsT0FBRyxDQUFDNEMsSUFBSjtBQUVBNUMsT0FBRyxDQUFDNkMsU0FBSixHQUFnQixLQUFLQyxLQUFyQjtBQUNBOUMsT0FBRyxDQUFDK0MsUUFBSixDQUFhLEtBQUtTLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRSxDQUE1QyxFQUErQyxLQUFLOUQsS0FBcEQsRUFBMkQsS0FBS0MsTUFBaEU7QUFFQUcsT0FBRyxDQUFDa0QsT0FBSjtBQUNIOztBQWhOdUIsQzs7Ozs7Ozs7Ozs7QUNBNUIsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0SEFBeUQ7O0FBRTNGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi5jYW52YXNDb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLm1vdmVCdXR0b25zQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMjJweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5taWRkbGVCdXR0b25zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlLnNhc3NcIixcInN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsOEJBQXNCO1VBQUcsc0JBQUE7QUNFN0I7O0FBRUE7RURBSSxpQkFBUTtFQUNSLHFCQUFrQjtFQUNsQixrQkFBWTtFQUNaLFlBQVc7RUFDWCxXQUFVO0VBQUcsVUFBQTtBQ0dqQjs7QUFFQTtFRERJLG9CQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsYUFBQTtFQUNBLHdCQUFXO01BQ1gscUJBQWE7VUFBRyx1QkFBQTtFQ0lsQix5QkFBeUI7TURGM0Isc0JBQWtCO1VBQ1AsbUJBQUc7RUFDViw0QkFBYTtFQUNiLDZCQUEyQjtNQUFHLDBCQUFBO1VDS3hCLHNCQUFzQjtFREhoQyxXQUFBO0VBQ0ksYUFBWTtBQ0toQjs7QUFFQTtFREhJLFVBQUE7RUFBc0Isb0JBQUE7RUNNeEIsb0JBQW9CO0VESnRCLGFBQUE7RUFDSSx1QkFBYTtNQUNiLG9CQUFpQjtVQUNWLDJCQUFJO0FDTWY7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDZCQUE2QjtNQUN6QiwwQkFBMEI7VUFDdEIsc0JBQXNCO0VBQzlCLHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsOEJBQThCO0VBQ3RDLHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsbUJBQW1CO0FBQzdCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IseUJBQXlCO01BQ3JCLHNCQUFzQjtVQUNsQiw4QkFBOEI7RUFDdEMsV0FBVztBQUNiO0FBQ0Esb0NBQW9DXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3NjcmlwdHMvcGxheWVyLmpzJ1xyXG5pbXBvcnQgS2V5UHJlc3NVcCBmcm9tICcuL3NjcmlwdHMva2V5cHJlc3NBY2l0b24uanMnXHJcbmltcG9ydCBNYXAgZnJvbSAnLi9zY3JpcHRzL21hcC5qcydcclxuaW1wb3J0IE1hcE9iamVjdCBmcm9tICcuL3NjcmlwdHMvbWFwT2JqZWN0cy5qcydcclxuaW1wb3J0IHsgYnV0dG9ucyB9IGZyb20gJy4vc2NyaXB0cy9idXR0b25zLmpzJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xyXG5cclxubGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbnJvb3QuY2xhc3NMaXN0LmFkZCgnY2FudmFzQ29udGFpbmVyJylcclxuXHJcbmxldCBjYW52YXNDb250YWluZXIgPSBkb2N1bWVudC4gY3JlYXRlRWxlbWVudCgnZGl2JylcclxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICBjYW52YXMud2lkdGggPSAyMDBcclxuICAgIGNhbnZhcy5oZWlnaHQgPSAxNjBcclxuXHJcbmNhbnZhc0NvbnRhaW5lci5hcHBlbmQoY2FudmFzKVxyXG5cclxucm9vdC5hcHBlbmQoY2FudmFzQ29udGFpbmVyKVxyXG5yb290LmFwcGVuZChidXR0b25zKVxyXG5cclxubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG5jb25zdCBHQU1FX0hFSUdIVCA9IGNhbnZhcy5jbGllbnRIZWlnaHQgXHJcbmNvbnN0IEdBTUVfV0lESFQgID0gY2FudmFzLmNsaWVudFdpZHRoXHJcbmNvbnN0IFdBTExfV0lEVEggID0gNVxyXG5cclxubGV0IG1hcE9iamVjdHMgPSBuZXcgTWFwT2JqZWN0KEdBTUVfSEVJR0hULCBHQU1FX1dJREhULCBXQUxMX1dJRFRIKVxyXG5cclxubGV0IGtleVByZXNzVXAgPSBuZXcgS2V5UHJlc3NVcCgpXHJcbmxldCBwbGF5ZXIgICAgID0gbmV3IFBsYXllcihjdHgsIGtleVByZXNzVXAsIG1hcE9iamVjdHMpXHJcbmxldCBtYXAgICAgICAgID0gbmV3IE1hcChjdHgsIG1hcE9iamVjdHMpXHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURIVCwgR0FNRV9IRUlHSFQpXHJcblxyXG4gICAgcGxheWVyLnJlbmRlcigpXHJcbiAgICBtYXAucmVuZGVyKClcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXHJcbn1cclxuXHJcbmdhbWVMb29wKClcclxuIiwiLy8gaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9zdHlsZS5jc3MnXHJcbmxldCBidXR0b25zQ29udGFpbmVyID0gICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxubGV0IG1vdmVCdXR0b25zQ29udGFpbmVyID0gICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxubGV0IGhpZ2hlckJ1dHRvblVwID0gICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxubGV0IG1pZGRsZUJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5sZXQgbWlkZGxlQnV0dG9uTGVmdCA9ICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbmxldCBtaWRkbGVCdXR0b25SaWdodCA9ICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbmxldCBidXR0b21CdXR0b25Eb3duID0gICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcblxyXG5idXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnNDb250YWluZXInKVxyXG5tb3ZlQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb3ZlQnV0dG9uc0NvbnRhaW5lcicpXHJcbm1pZGRsZUJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWlkZGxlQnV0dG9uc0NvbnRhaW5lcicpXHJcblxyXG5cclxuaGlnaGVyQnV0dG9uVXAuaW5uZXJIVE1MICAgID0gJ3VwJ1xyXG5taWRkbGVCdXR0b25MZWZ0LmlubmVySFRNTCAgPSAnbGVmdCdcclxubWlkZGxlQnV0dG9uUmlnaHQuaW5uZXJIVE1MID0gJ3JpZ2h0J1xyXG5idXR0b21CdXR0b25Eb3duLmlubmVySFRNTCAgPSAnZG93bidcclxuXHJcbmJ1dHRvbnNDb250YWluZXIuYXBwZW5kKG1vdmVCdXR0b25zQ29udGFpbmVyKVxyXG5cclxubW92ZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGhpZ2hlckJ1dHRvblVwKVxyXG5cclxubW92ZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKG1pZGRsZUJ1dHRvbnNDb250YWluZXIpXHJcbm1pZGRsZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKG1pZGRsZUJ1dHRvbkxlZnQpXHJcbm1pZGRsZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKG1pZGRsZUJ1dHRvblJpZ2h0KVxyXG5cclxuLy8gbW92ZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGJ1dHRvbUJ1dHRvbkRvd24pXHJcblxyXG5leHBvcnQgeyBidXR0b25zQ29udGFpbmVyIGFzIGJ1dHRvbnMgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVByZXNzVXAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0ICA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlIFxyXG4gICAgICAgIHRoaXMudXAgICAgPSBmYWxzZVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlS2V5LmJpbmQodGhpcywgdHJ1ZSwgZWwuaW5uZXJIVE1MKSlcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIGZhbHNlLCBlbC5pbm5lckhUTUwpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIHRydWUpIClcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5LmJpbmQodGhpcywgZmFsc2UpKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleSh2YWx1ZSwgZXZlbnQsIHRleHQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICAvLyBsZWZ0XHJcbiAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgIGNhc2UgNjU6IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICAvLyBqdW1wXHJcbiAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgIGNhc2UgODc6IFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG5cclxuICAgICAgICAgICAgLy8gcmlnaHRcclxuICAgICAgICAgICAgY2FzZSAzOTogXHJcbiAgICAgICAgICAgIGNhc2UgNjg6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdmFsdWVcclxuXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgbWFwT2JqZWN0cykge1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwT2JqZWN0cy5vYmplY3RzXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jb250ZXh0XHJcbiAgICAgICAgY3R4LnNhdmUoKVxyXG5cclxuICAgICAgICB0aGlzLm1hcC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVsLmNvbG9yXHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChlbC54MSwgZWwueTEsIGVsLndpZHRoLCBlbC5oZWlnaHQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKVxyXG4gICAgfVxyXG59IiwiY2xhc3MgTWFwT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVIZWlnaHQsIGdhbWVXaWR0aCwgd2FsbFdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGVmdCB3YWxsJyxcclxuICAgICAgICAgICAgICAgIHgxOiAwLFxyXG4gICAgICAgICAgICAgICAgeTE6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBnYW1lSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmV5J1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3JpZ2h0IHdhbGwnLFxyXG4gICAgICAgICAgICAgICAgeDE6IGdhbWVXaWR0aCAtIHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIHkxOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZ2FtZUhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jvb2YnLFxyXG4gICAgICAgICAgICAgICAgeDE6IDAsXHJcbiAgICAgICAgICAgICAgICB5MTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBnYW1lV2lkdGggLSB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zsb29yJyxcclxuICAgICAgICAgICAgICAgIHgxOiAwLFxyXG4gICAgICAgICAgICAgICAgeTE6IGdhbWVIZWlnaHQgLSB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZ2FtZVdpZHRoIC0gd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnYmFsY29ueSAxJyxcclxuICAgICAgICAgICAgICAgIHgxOiA4MCwgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHkxOiBnYW1lSGVpZ2h0IC0gd2FsbFdpZHRoIC0gMjEsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAneWVsbG93J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnYmFsY29ueSAyJywgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB4MTogMjAsXHJcbiAgICAgICAgICAgICAgICB5MTogZ2FtZUhlaWdodCAtIHdhbGxXaWR0aCAtIDQxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3llbGxvdydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwT2JqZWN0IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGtleXMsIG1hcE9iamVjdHMpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XHJcbiAgICAgICAgdGhpcy5rZXlzID0ga2V5cyBcclxuICAgICAgICB0aGlzLm1hcE9iamVjdHMgPSBtYXBPYmplY3RzLm9iamVjdHNcclxuXHJcbiAgICAgICAgLy8gcGxheWVyIHNwZWNpZmljYXRpb25zXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IDUwLFxyXG4gICAgICAgICAgICB5OiAxMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCdcclxuXHJcbiAgICAgICAgLy8gbW92aW5nIHNwZWNpZmljYXRpb25zXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgdGhpcy5zcGVlZEFjY2VsZXJhdGlvbiA9IDAuMVxyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSA1XHJcbiAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gJydcclxuXHJcbiAgICAgICAgLy8gZ3Jhdml0eSBzcGVjaWZpY2F0aW9uc1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuICAgICAgICB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb24gPSAwLjFcclxuXHJcbiAgICAgICAgLy8ganVtcCBzZXR0aW5nc1xyXG4gICAgICAgIHRoaXMubWF4SnVtcEhlaWdodCA9IDQwXHJcbiAgICAgICAgdGhpcy5zdGFydEp1bXBTcGVlZCA9IE1hdGguc3FydCh0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb24gKiB0aGlzLm1heEp1bXBIZWlnaHQgKiAyKSArIHRoaXMuZ3Jhdml0eUFjY2VsZXJhdGlvblxyXG4gICAgICAgIHRoaXMuY2FuSnVtcCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50YWtlT2ZmID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmaW5kTW92ZUxpbWl0cygpIHtcclxuICAgICAgICBsZXQgZmxvb3JzID0gW11cclxuICAgICAgICBsZXQgcm9vZnMgPSBbXSBcclxuICAgICAgICBsZXQgbGVmdFdhbGxzID0gW10gXHJcbiAgICAgICAgbGV0IHJpZ2h0V2FsbHMgPSBbXVxyXG5cclxuICAgICAgICAvLyB0ZXN0LCBvdXIgcG9zaXRpb24gaXMgb24vdW5kZXIvbGVmdC9yaWdodCBtYXBPYmplY3QgP1xyXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgaW4gWCByYW5nZSBiYWxjb255IFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgZWwueDEgKyBlbC53aWR0aCAmJiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gZWwueDEpIHsgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gZmluZCBhbGwgZmxvb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPD0gZWwueTEpICAgIGZsb29ycy5wdXNoKGVsLnkxIC0gdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyBmaW5kIGFsbCByb29mc1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID49IGVsLnkxICsgZWwuaGVpZ2h0KSByb29mcy5wdXNoKGVsLnkxICsgZWwuaGVpZ2h0KVxyXG4gICAgICAgICAgICB9ICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGluIFkgcmFuZ2UgYmFsY29ueVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPiBlbC55MSAmJiB0aGlzLnBvc2l0aW9uLnkgPCBlbC55MSArIGVsLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAvLyBmaW5kIGFsbCByaWdodCB3YWxsc1xyXG4gICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA8PSBlbC54MSkgICAgcmlnaHRXYWxscy5wdXNoKGVsLngxIC0gdGhpcy53aWR0aClcclxuICAgICAgICAgICAgICAgLy8gZmluZCBhbGwgbGVmdCB3YWxsc1xyXG4gICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gZWwueDEgKyBlbC53aWR0aCkgbGVmdFdhbGxzLnB1c2goZWwueDEgKyBlbC53aWR0aClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4geyBmbG9vcnMsIHJvb2ZzLCBsZWZ0V2FsbHMsIHJpZ2h0V2FsbHMgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoZGlyZWN0aW9uLCB3YWxsLCBzeW1ib2wpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdERpcmVjdGlvbiA9PSBkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWVkIDwgdGhpcy5tYXhTcGVlZCkgdGhpcy5jdXJyZW50U3BlZWQgKz0gdGhpcy5zcGVlZEFjY2VsZXJhdGlvblxyXG4gICAgICAgIH0gZWxzZSB0aGlzLmN1cnJlbnRTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmN1cnJlbnRTcGVlZCA+IHdhbGwpIHRoaXMuY3VycmVudFNwZWVkID0gd2FsbCAtIHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLmN1cnJlbnRTcGVlZCA8IHdhbGwpIHRoaXMuY3VycmVudFNwZWVkID0gdGhpcy5wb3NpdGlvbi54IC0gd2FsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gZGlyZWN0aW9uXHJcblxyXG4gICAgICAgIHJldHVybiBzeW1ib2wgKiB0aGlzLmN1cnJlbnRTcGVlZFxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAocm9vZikge1xyXG5cclxuICAgICAgICAvLyB3ZSBzdGFydCBqdW1wXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuSnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRha2VPZmYgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAtdGhpcy5zdGFydEp1bXBTcGVlZFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMgdGFrZW9mZiBtZWNoYW5pc21cclxuICAgICAgICBpZiAodGhpcy50YWtlT2ZmKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5mbG9vcigxMCAqIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCkgPT0gMCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPCByb29mKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRha2VPZmYgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgKz0gdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eShmbG9vcikge1xyXG4gICAgICAgIGxldCBncmF2aXR5ID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCBmbG9vcil7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID4gZmxvb3IpIHtcclxuICAgICAgICAgICAgICAgIGdyYXZpdHkgPSBmbG9vciAtIHRoaXMucG9zaXRpb24ueSBcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5ICs9IHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCArPSB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb25cclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKdW1wSGVpZ2h0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ3Jhdml0eVxyXG4gICAgfVxyXG5cclxuICAgIGZ1dHVyZVBvc2l0aW9uSW5PYmpjZXQoc3BlZWRYLCBzcGVlZFkpIHtcclxuICAgICAgICBsZXQgc3BlZWRzID0ge1xyXG4gICAgICAgICAgICB4OiBzcGVlZFgsXHJcbiAgICAgICAgICAgIHk6IHNwZWVkWVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzLmZvckVhY2goKGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBpbiBYIHJhbmdlIGJhbGNvbnkgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgc3BlZWRYIDwgZWwueDEgKyBlbC53aWR0aCAmJiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoICsgc3BlZWRYID4gZWwueDEpIHsgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgaW4gWSByYW5nZSBiYWxjb255ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgc3BlZWRZID4gZWwueTEgJiYgdGhpcy5wb3NpdGlvbi55ICsgc3BlZWRZIDwgZWwueTEgKyBlbC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWRYKSA+IE1hdGguYWJzKHNwZWVkWSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlT2ZmID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRzLnkgPSAwIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoc3BlZWRYKSA8IE1hdGguYWJzKHNwZWVkWSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcy54ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcyA9IHsgeDogMCwgeTogMH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG5cclxuICAgICAgICB9KSBcclxuXHJcbiAgICAgICAgcmV0dXJuIHNwZWVkc1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jb250ZXh0XHJcbiAgICAgICAgbGV0IHNwZWVkWCA9IDBcclxuICAgICAgICBsZXQgc3BlZWRZID0gMFxyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSBtb3N0IG5lYXJlc3QgbGltaXRzXHJcbiAgICAgICAgbGV0IGxpbWl0cyA9IHRoaXMuZmluZE1vdmVMaW1pdHMoKVxyXG4gICBcclxuICAgICAgICBsZXQgZmxvb3IgICAgID0gTWF0aC5taW4oLi4ubGltaXRzLmZsb29ycylcclxuICAgICAgICBsZXQgcm9vZiAgICAgID0gTWF0aC5tYXgoLi4ubGltaXRzLnJvb2ZzKSBcclxuICAgICAgICBsZXQgcmlnaHRXYWxsID0gTWF0aC5taW4oLi4ubGltaXRzLnJpZ2h0V2FsbHMpIFxyXG4gICAgICAgIGxldCBsZWZ0V2FsbCAgPSBNYXRoLm1heCguLi5saW1pdHMubGVmdFdhbGxzKSAgXHJcblxyXG4gICAgICAgIC8vIG1vdmUgbGVmdC9yaWdodFxyXG4gICAgICAgIC8vIGNhbiBpIG1vdmUgcmlnaHQgPyB5ZXMsIGJ1dCBpZiBub3QgYSB3YWxsIHRoZXJlXHJcbiAgICAgICAgaWYgICAgICAodGhpcy5rZXlzLnJpZ2h0ICYmIHRoaXMucG9zaXRpb24ueCA8IHJpZ2h0V2FsbCkgc3BlZWRYID0gdGhpcy5tb3ZlKCdyaWdodCcsIHJpZ2h0V2FsbCwgMSlcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleXMubGVmdCAgJiYgdGhpcy5wb3NpdGlvbi55ID4gbGVmdFdhbGwpICBzcGVlZFggPSB0aGlzLm1vdmUoJ2xlZnQnLCBsZWZ0V2FsbCwgLTEpXHJcbiAgICAgICAgZWxzZSB0aGlzLmxhc3REaXJlY3Rpb24gPSAnJ1xyXG5cclxuXHJcbiAgICAgICAgLy8ganVtcFxyXG4gICAgICAgIGlmICggKHRoaXMua2V5cy51cCAmJiB0aGlzLmNhbkp1bXAgKSB8fCB0aGlzLnRha2VPZmYpIHNwZWVkWSArPSB0aGlzLmp1bXAocm9vZilcclxuICAgICAgICAvLyBncmF2aXR5XHJcbiAgICAgICAgaWYgKCF0aGlzLnRha2VPZmYpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRZICs9IHRoaXMuZ3Jhdml0eShmbG9vcilcclxuXHJcbiAgICAgICAgbGV0IG5ld1NwZWVkcyA9IHRoaXMuZnV0dXJlUG9zaXRpb25Jbk9iamNldChzcGVlZFgsIHNwZWVkWSlcclxuXHJcbiAgICAgICAgLy8gbW92ZSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBuZXdTcGVlZHMueFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBuZXdTcGVlZHMueVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGRyYXdcclxuICAgICAgICBjdHguc2F2ZSgpXHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yIFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9