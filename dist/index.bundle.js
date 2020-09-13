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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbutton {\n  background: white;\n  border: 1px solid red;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  outline: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.canvasContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 300px;\n}\n\n.buttonsContainer {\n  width: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.moveButtonsContainer {\n  width: 122px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.middleButtonsContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["style.sass","style.css"],"names":[],"mappings":"AAAA;EACI,SAAS;EACT,UAAU;EACV,8BAAsB;UAAG,sBAAA;ACE7B;;AAEA;EDAI,iBAAQ;EACR,qBAAkB;EAClB,kBAAY;EACZ,YAAW;EACX,WAAU;EACV,UAAA;EAAoB,yBAAA;KCGnB,sBAAsB;MDD3B,qBAAiB;UACN,iBAAM;ACGjB;;AAEA;EDDI,oBAAW;EACX,oBAAa;EAAG,aAAA;ECIlB,wBAAwB;MDF1B,qBAAkB;UACP,uBAAG;EACV,yBAAa;MACb,sBAAiB;UAAa,mBAAA;ECKhC,4BAA4B;EDH9B,6BAAsB;MAClB,0BAAY;UACL,sBAAM;EACb,WAAA;EACA,aAAA;ACKJ;;AAEA;EDJA,UAAA;EACI,oBAAa;EACb,oBAAiB;EACjB,aAAW;EAAG,uBAAA;MCOZ,oBAAoB;UAChB,2BAA2B;AACrC;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;MACzB,0BAA0B;UACtB,sBAAsB;EAC9B,yBAAyB;MACrB,sBAAsB;UAClB,8BAA8B;EACtC,yBAAyB;MACrB,sBAAsB;UAClB,mBAAmB;AAC7B;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,yBAAyB;MACrB,sBAAsB;UAClB,8BAA8B;EACtC,WAAW;AACb;AACA,oCAAoC","file":"style.css"}]);
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
      document.querySelectorAll('button')[index].addEventListener('touchstart', this.handleKey.bind(this, true, el.innerHTML));
      document.querySelectorAll('button')[index].addEventListener('touchend', this.handleKey.bind(this, false, el.innerHTML));
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
    this.lastDirection = '';
    this.inertion = 0.95; // gravity specifications

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
    if (Math.abs(this.currentSpeed) < this.maxSpeed) this.currentSpeed += symbol * this.speedAcceleration;

    if (direction == 'right') {
      if (this.position.x + this.currentSpeed > wall) this.currentSpeed = wall - this.position.x;
    } else if (direction == 'left') {
      if (this.position.x + this.currentSpeed < wall) this.currentSpeed = wall - this.position.x;
    }

    this.lastDirection = direction;
    return this.currentSpeed;
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

    if (this.keys.right && this.position.x < rightWall) speedX = this.move('right', rightWall, 1);else if (this.keys.left && this.position.y > leftWall) speedX = this.move('left', leftWall, -1);else {
      // inertion
      if (Math.floor(10 * Math.abs(this.currentSpeed)) == 0) {
        this.lastDirection = '';
        this.currentSpeed = 0;
      } else {
        if (this.currentSpeed > 0) {
          if (this.position.x + this.currentSpeed > rightWall) {
            this.currentSpeed = rightWall - this.position.x;
          } else {
            this.currentSpeed *= this.inertion;
            speedX = this.currentSpeed;
          }
        } else if (this.currentSpeed < 0) {
          if (this.position.x + this.currentSpeed < leftWall) {
            this.currentSpeed = leftWall - this.position.x;
          } else {
            this.currentSpeed *= this.inertion;
            speedX = this.currentSpeed;
          }
        }
      }
    } // jump

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMva2V5cHJlc3NBY2l0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiXSwibmFtZXMiOlsicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYW52YXNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmQiLCJidXR0b25zIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfSEVJR0hUIiwiY2xpZW50SGVpZ2h0IiwiR0FNRV9XSURIVCIsImNsaWVudFdpZHRoIiwiV0FMTF9XSURUSCIsIm1hcE9iamVjdHMiLCJNYXBPYmplY3QiLCJrZXlQcmVzc1VwIiwiS2V5UHJlc3NVcCIsInBsYXllciIsIlBsYXllciIsIm1hcCIsIk1hcCIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYnV0dG9uc0NvbnRhaW5lciIsIm1vdmVCdXR0b25zQ29udGFpbmVyIiwiaGlnaGVyQnV0dG9uVXAiLCJtaWRkbGVCdXR0b25zQ29udGFpbmVyIiwibWlkZGxlQnV0dG9uTGVmdCIsIm1pZGRsZUJ1dHRvblJpZ2h0IiwiYnV0dG9tQnV0dG9uRG93biIsImlubmVySFRNTCIsImNvbnN0cnVjdG9yIiwibGVmdCIsInJpZ2h0IiwidXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5IiwiYmluZCIsInZhbHVlIiwiZXZlbnQiLCJ0ZXh0Iiwia2V5Q29kZSIsImNvbnRleHQiLCJvYmplY3RzIiwic2F2ZSIsImZpbGxTdHlsZSIsImNvbG9yIiwiZmlsbFJlY3QiLCJ4MSIsInkxIiwicmVzdG9yZSIsImdhbWVIZWlnaHQiLCJnYW1lV2lkdGgiLCJ3YWxsV2lkdGgiLCJuYW1lIiwia2V5cyIsInBvc2l0aW9uIiwieCIsInkiLCJjdXJyZW50U3BlZWQiLCJzcGVlZEFjY2VsZXJhdGlvbiIsIm1heFNwZWVkIiwibGFzdERpcmVjdGlvbiIsImluZXJ0aW9uIiwiZ3Jhdml0eUN1cnJlbnRTcGVlZCIsImdyYXZpdHlBY2NlbGVyYXRpb24iLCJtYXhKdW1wSGVpZ2h0Iiwic3RhcnRKdW1wU3BlZWQiLCJNYXRoIiwic3FydCIsImNhbkp1bXAiLCJ0YWtlT2ZmIiwiZmluZE1vdmVMaW1pdHMiLCJmbG9vcnMiLCJyb29mcyIsImxlZnRXYWxscyIsInJpZ2h0V2FsbHMiLCJwdXNoIiwibW92ZSIsImRpcmVjdGlvbiIsIndhbGwiLCJzeW1ib2wiLCJhYnMiLCJqdW1wIiwicm9vZiIsImZsb29yIiwiZ3Jhdml0eSIsImN1cnJlbnRKdW1wSGVpZ2h0IiwiZnV0dXJlUG9zaXRpb25Jbk9iamNldCIsInNwZWVkWCIsInNwZWVkWSIsInNwZWVkcyIsImxpbWl0cyIsIm1pbiIsIm1heCIsInJpZ2h0V2FsbCIsImxlZnRXYWxsIiwibmV3U3BlZWRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztR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c0MiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgb3V0bGluZTogMDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5jYW52YXNDb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLm1vdmVCdXR0b25zQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMjJweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5taWRkbGVCdXR0b25zQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlLnNhc3NcIixcInN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsOEJBQXNCO1VBQUcsc0JBQUE7QUNFN0I7O0FBRUE7RURBSSxpQkFBUTtFQUNSLHFCQUFrQjtFQUNsQixrQkFBWTtFQUNaLFlBQVc7RUFDWCxXQUFVO0VBQ1YsVUFBQTtFQUFvQix5QkFBQTtLQ0duQixzQkFBc0I7TUREM0IscUJBQWlCO1VBQ04saUJBQU07QUNHakI7O0FBRUE7RURESSxvQkFBVztFQUNYLG9CQUFhO0VBQUcsYUFBQTtFQ0lsQix3QkFBd0I7TURGMUIscUJBQWtCO1VBQ1AsdUJBQUc7RUFDVix5QkFBYTtNQUNiLHNCQUFpQjtVQUFhLG1CQUFBO0VDS2hDLDRCQUE0QjtFREg5Qiw2QkFBc0I7TUFDbEIsMEJBQVk7VUFDTCxzQkFBTTtFQUNiLFdBQUE7RUFDQSxhQUFBO0FDS0o7O0FBRUE7RURKQSxVQUFBO0VBQ0ksb0JBQWE7RUFDYixvQkFBaUI7RUFDakIsYUFBVztFQUFHLHVCQUFBO01DT1osb0JBQW9CO1VBQ2hCLDJCQUEyQjtBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO01BQ3pCLDBCQUEwQjtVQUN0QixzQkFBc0I7RUFDOUIseUJBQXlCO01BQ3JCLHNCQUFzQjtVQUNsQiw4QkFBOEI7RUFDdEMseUJBQXlCO01BQ3JCLHNCQUFzQjtVQUNsQixtQkFBbUI7QUFDN0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLDhCQUE4QjtFQUN0QyxXQUFXO0FBQ2I7QUFDQSxvQ0FBb0NcIixcImZpbGVcIjpcInN0eWxlLmNzc1wifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vc2NyaXB0cy9wbGF5ZXIuanMnXHJcbmltcG9ydCBLZXlQcmVzc1VwIGZyb20gJy4vc2NyaXB0cy9rZXlwcmVzc0FjaXRvbi5qcydcclxuaW1wb3J0IE1hcCBmcm9tICcuL3NjcmlwdHMvbWFwLmpzJ1xyXG5pbXBvcnQgTWFwT2JqZWN0IGZyb20gJy4vc2NyaXB0cy9tYXBPYmplY3RzLmpzJ1xyXG5pbXBvcnQgeyBidXR0b25zIH0gZnJvbSAnLi9zY3JpcHRzL2J1dHRvbnMuanMnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlcy9zdHlsZS5jc3MnXHJcblxyXG5sZXQgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcclxucm9vdC5jbGFzc0xpc3QuYWRkKCdjYW52YXNDb250YWluZXInKVxyXG5cclxubGV0IGNhbnZhc0NvbnRhaW5lciA9IGRvY3VtZW50LiBjcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICAgIGNhbnZhcy53aWR0aCA9IDIwMFxyXG4gICAgY2FudmFzLmhlaWdodCA9IDE2MFxyXG5cclxuY2FudmFzQ29udGFpbmVyLmFwcGVuZChjYW52YXMpXHJcblxyXG5yb290LmFwcGVuZChjYW52YXNDb250YWluZXIpXHJcbnJvb3QuYXBwZW5kKGJ1dHRvbnMpXHJcblxyXG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuXHJcbmNvbnN0IEdBTUVfSEVJR0hUID0gY2FudmFzLmNsaWVudEhlaWdodCBcclxuY29uc3QgR0FNRV9XSURIVCAgPSBjYW52YXMuY2xpZW50V2lkdGhcclxuY29uc3QgV0FMTF9XSURUSCAgPSA1XHJcblxyXG5sZXQgbWFwT2JqZWN0cyA9IG5ldyBNYXBPYmplY3QoR0FNRV9IRUlHSFQsIEdBTUVfV0lESFQsIFdBTExfV0lEVEgpXHJcblxyXG5sZXQga2V5UHJlc3NVcCA9IG5ldyBLZXlQcmVzc1VwKClcclxubGV0IHBsYXllciAgICAgPSBuZXcgUGxheWVyKGN0eCwga2V5UHJlc3NVcCwgbWFwT2JqZWN0cylcclxubGV0IG1hcCAgICAgICAgPSBuZXcgTWFwKGN0eCwgbWFwT2JqZWN0cylcclxuXHJcbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJREhULCBHQU1FX0hFSUdIVClcclxuXHJcbiAgICBwbGF5ZXIucmVuZGVyKClcclxuICAgIG1hcC5yZW5kZXIoKVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcclxufVxyXG5cclxuZ2FtZUxvb3AoKVxyXG4iLCIvLyBpbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL3N0eWxlLmNzcydcclxubGV0IGJ1dHRvbnNDb250YWluZXIgPSAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5sZXQgbW92ZUJ1dHRvbnNDb250YWluZXIgPSAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG5sZXQgaGlnaGVyQnV0dG9uVXAgPSAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblxyXG5sZXQgbWlkZGxlQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmxldCBtaWRkbGVCdXR0b25MZWZ0ID0gICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxubGV0IG1pZGRsZUJ1dHRvblJpZ2h0ID0gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxubGV0IGJ1dHRvbUJ1dHRvbkRvd24gPSAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuXHJcbmJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc0NvbnRhaW5lcicpXHJcbm1vdmVCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vdmVCdXR0b25zQ29udGFpbmVyJylcclxubWlkZGxlQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaWRkbGVCdXR0b25zQ29udGFpbmVyJylcclxuXHJcblxyXG5oaWdoZXJCdXR0b25VcC5pbm5lckhUTUwgICAgPSAndXAnXHJcbm1pZGRsZUJ1dHRvbkxlZnQuaW5uZXJIVE1MICA9ICdsZWZ0J1xyXG5taWRkbGVCdXR0b25SaWdodC5pbm5lckhUTUwgPSAncmlnaHQnXHJcbmJ1dHRvbUJ1dHRvbkRvd24uaW5uZXJIVE1MICA9ICdkb3duJ1xyXG5cclxuYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQobW92ZUJ1dHRvbnNDb250YWluZXIpXHJcblxyXG5tb3ZlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoaGlnaGVyQnV0dG9uVXApXHJcblxyXG5tb3ZlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQobWlkZGxlQnV0dG9uc0NvbnRhaW5lcilcclxubWlkZGxlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQobWlkZGxlQnV0dG9uTGVmdClcclxubWlkZGxlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQobWlkZGxlQnV0dG9uUmlnaHQpXHJcblxyXG4vLyBtb3ZlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9tQnV0dG9uRG93bilcclxuXHJcbmV4cG9ydCB7IGJ1dHRvbnNDb250YWluZXIgYXMgYnV0dG9ucyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5UHJlc3NVcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxlZnQgID0gZmFsc2VcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2UgXHJcbiAgICAgICAgdGhpcy51cCAgICA9IGZhbHNlXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCB0cnVlLCBlbC5pbm5lckhUTUwpKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlS2V5LmJpbmQodGhpcywgZmFsc2UsIGVsLmlubmVySFRNTCkpXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlS2V5LmJpbmQodGhpcywgdHJ1ZSwgZWwuaW5uZXJIVE1MKSlcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCBmYWxzZSwgZWwuaW5uZXJIVE1MKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCB0cnVlKSApXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIGZhbHNlKSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLZXkodmFsdWUsIGV2ZW50LCB0ZXh0KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudCkge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgLy8gbGVmdFxyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICBjYXNlIDY1OiBcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG5cclxuICAgICAgICAgICAgLy8ganVtcFxyXG4gICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICBjYXNlIDg3OiBcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgICAgIGNhc2UgMzk6IFxyXG4gICAgICAgICAgICBjYXNlIDY4OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IHZhbHVlXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIG1hcE9iamVjdHMpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcE9iamVjdHMub2JqZWN0c1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY29udGV4dFxyXG4gICAgICAgIGN0eC5zYXZlKClcclxuXHJcbiAgICAgICAgdGhpcy5tYXAuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBlbC5jb2xvclxyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoZWwueDEsIGVsLnkxLCBlbC53aWR0aCwgZWwuaGVpZ2h0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufSIsImNsYXNzIE1hcE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lSGVpZ2h0LCBnYW1lV2lkdGgsIHdhbGxXaWR0aCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2xlZnQgd2FsbCcsXHJcbiAgICAgICAgICAgICAgICB4MTogMCxcclxuICAgICAgICAgICAgICAgIHkxOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZ2FtZUhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleSdcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdyaWdodCB3YWxsJyxcclxuICAgICAgICAgICAgICAgIHgxOiBnYW1lV2lkdGggLSB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB5MTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGdhbWVIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdyb29mJyxcclxuICAgICAgICAgICAgICAgIHgxOiAwLFxyXG4gICAgICAgICAgICAgICAgeTE6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZ2FtZVdpZHRoIC0gd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmbG9vcicsXHJcbiAgICAgICAgICAgICAgICB4MTogMCxcclxuICAgICAgICAgICAgICAgIHkxOiBnYW1lSGVpZ2h0IC0gd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGdhbWVXaWR0aCAtIHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmV5J1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2JhbGNvbnkgMScsXHJcbiAgICAgICAgICAgICAgICB4MTogODAsICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB5MTogZ2FtZUhlaWdodCAtIHdhbGxXaWR0aCAtIDIxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3llbGxvdydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2JhbGNvbnkgMicsICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeDE6IDIwLFxyXG4gICAgICAgICAgICAgICAgeTE6IGdhbWVIZWlnaHQgLSB3YWxsV2lkdGggLSA0MSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcE9iamVjdCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBrZXlzLCBtYXBPYmplY3RzKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG4gICAgICAgIHRoaXMua2V5cyA9IGtleXMgXHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzID0gbWFwT2JqZWN0cy5vYmplY3RzXHJcblxyXG4gICAgICAgIC8vIHBsYXllciBzcGVjaWZpY2F0aW9uc1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTBcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiA1MCxcclxuICAgICAgICAgICAgeTogMTBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnXHJcblxyXG4gICAgICAgIC8vIG1vdmluZyBzcGVjaWZpY2F0aW9uc1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gMFxyXG4gICAgICAgIHRoaXMuc3BlZWRBY2NlbGVyYXRpb24gPSAwLjFcclxuICAgICAgICB0aGlzLm1heFNwZWVkID0gNVxyXG4gICAgICAgIHRoaXMubGFzdERpcmVjdGlvbiA9ICcnXHJcblxyXG4gICAgICAgIHRoaXMuaW5lcnRpb24gPSAwLjk1XHJcblxyXG4gICAgICAgIC8vIGdyYXZpdHkgc3BlY2lmaWNhdGlvbnNcclxuICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uID0gMC4xXHJcblxyXG4gICAgICAgIC8vIGp1bXAgc2V0dGluZ3NcclxuICAgICAgICB0aGlzLm1heEp1bXBIZWlnaHQgPSA0MFxyXG4gICAgICAgIHRoaXMuc3RhcnRKdW1wU3BlZWQgPSBNYXRoLnNxcnQodGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uICogdGhpcy5tYXhKdW1wSGVpZ2h0ICogMikgKyB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb25cclxuICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZmluZE1vdmVMaW1pdHMoKSB7XHJcbiAgICAgICAgbGV0IGZsb29ycyA9IFtdXHJcbiAgICAgICAgbGV0IHJvb2ZzID0gW10gXHJcbiAgICAgICAgbGV0IGxlZnRXYWxscyA9IFtdIFxyXG4gICAgICAgIGxldCByaWdodFdhbGxzID0gW11cclxuXHJcbiAgICAgICAgLy8gdGVzdCwgb3VyIHBvc2l0aW9uIGlzIG9uL3VuZGVyL2xlZnQvcmlnaHQgbWFwT2JqZWN0ID9cclxuICAgICAgICB0aGlzLm1hcE9iamVjdHMuZm9yRWFjaCgoZWwpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGluIFggcmFuZ2UgYmFsY29ueSBcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IGVsLngxICsgZWwud2lkdGggJiYgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IGVsLngxKSB7ICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIGZsb29yc1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDw9IGVsLnkxKSAgICBmbG9vcnMucHVzaChlbC55MSAtIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLy8gZmluZCBhbGwgcm9vZnNcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSBlbC55MSArIGVsLmhlaWdodCkgcm9vZnMucHVzaChlbC55MSArIGVsLmhlaWdodClcclxuICAgICAgICAgICAgfSAgICAgXHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBpbiBZIHJhbmdlIGJhbGNvbnlcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID4gZWwueTEgJiYgdGhpcy5wb3NpdGlvbi55IDwgZWwueTEgKyBlbC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgLy8gZmluZCBhbGwgcmlnaHQgd2FsbHNcclxuICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPD0gZWwueDEpICAgIHJpZ2h0V2FsbHMucHVzaChlbC54MSAtIHRoaXMud2lkdGgpXHJcbiAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIGxlZnQgd2FsbHNcclxuICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IGVsLngxICsgZWwud2lkdGgpIGxlZnRXYWxscy5wdXNoKGVsLngxICsgZWwud2lkdGgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZmxvb3JzLCByb29mcywgbGVmdFdhbGxzLCByaWdodFdhbGxzIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGRpcmVjdGlvbiwgd2FsbCwgc3ltYm9sKSB7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuY3VycmVudFNwZWVkKSA8IHRoaXMubWF4U3BlZWQpIHRoaXMuY3VycmVudFNwZWVkICs9IHN5bWJvbCAqIHRoaXMuc3BlZWRBY2NlbGVyYXRpb25cclxuXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmN1cnJlbnRTcGVlZCA+IHdhbGwpIHRoaXMuY3VycmVudFNwZWVkID0gd2FsbCAtIHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5jdXJyZW50U3BlZWQgPCB3YWxsKSB0aGlzLmN1cnJlbnRTcGVlZCA9IHdhbGwgLSB0aGlzLnBvc2l0aW9uLnhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGFzdERpcmVjdGlvbiA9IGRpcmVjdGlvblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3BlZWRcclxuICAgIH1cclxuXHJcbiAgICBqdW1wKHJvb2YpIHtcclxuXHJcbiAgICAgICAgLy8gd2Ugc3RhcnQganVtcFxyXG4gICAgICAgIGlmICh0aGlzLmNhbkp1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy50YWtlT2ZmID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gLXRoaXMuc3RhcnRKdW1wU3BlZWRcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzIHRha2VvZmYgbWVjaGFuaXNtXHJcbiAgICAgICAgaWYgKHRoaXMudGFrZU9mZikge1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoMTAgKiB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQpID09IDAgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkIDwgcm9vZikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWtlT2ZmID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkICs9IHRoaXMuZ3Jhdml0eUFjY2VsZXJhdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdyYXZpdHkoZmxvb3IpIHtcclxuICAgICAgICBsZXQgZ3Jhdml0eSA9IDBcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDwgZmxvb3Ipe1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA+IGZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5ID0gZmxvb3IgLSB0aGlzLnBvc2l0aW9uLnkgXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3Jhdml0eSArPSB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWRcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgKz0gdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SnVtcEhlaWdodCA9IDBcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdyYXZpdHlcclxuICAgIH1cclxuXHJcbiAgICBmdXR1cmVQb3NpdGlvbkluT2JqY2V0KHNwZWVkWCwgc3BlZWRZKSB7XHJcbiAgICAgICAgbGV0IHNwZWVkcyA9IHtcclxuICAgICAgICAgICAgeDogc3BlZWRYLFxyXG4gICAgICAgICAgICB5OiBzcGVlZFlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgaW4gWCByYW5nZSBiYWxjb255ICBcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHNwZWVkWCA8IGVsLngxICsgZWwud2lkdGggJiYgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCArIHNwZWVkWCA+IGVsLngxKSB7ICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGluIFkgcmFuZ2UgYmFsY29ueSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHNwZWVkWSA+IGVsLnkxICYmIHRoaXMucG9zaXRpb24ueSArIHNwZWVkWSA8IGVsLnkxICsgZWwuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNwZWVkWCkgPiBNYXRoLmFicyhzcGVlZFkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcy55ID0gMCBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHNwZWVkWCkgPCBNYXRoLmFicyhzcGVlZFkpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZHMueCA9IDBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRha2VPZmYgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZHMgPSB7IHg6IDAsIHk6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0gIFxyXG5cclxuICAgICAgICB9KSBcclxuXHJcbiAgICAgICAgcmV0dXJuIHNwZWVkc1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jb250ZXh0XHJcbiAgICAgICAgbGV0IHNwZWVkWCA9IDBcclxuICAgICAgICBsZXQgc3BlZWRZID0gMFxyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSBtb3N0IG5lYXJlc3QgbGltaXRzXHJcbiAgICAgICAgbGV0IGxpbWl0cyA9IHRoaXMuZmluZE1vdmVMaW1pdHMoKVxyXG4gICBcclxuICAgICAgICBsZXQgZmxvb3IgICAgID0gTWF0aC5taW4oLi4ubGltaXRzLmZsb29ycylcclxuICAgICAgICBsZXQgcm9vZiAgICAgID0gTWF0aC5tYXgoLi4ubGltaXRzLnJvb2ZzKSBcclxuICAgICAgICBsZXQgcmlnaHRXYWxsID0gTWF0aC5taW4oLi4ubGltaXRzLnJpZ2h0V2FsbHMpIFxyXG4gICAgICAgIGxldCBsZWZ0V2FsbCAgPSBNYXRoLm1heCguLi5saW1pdHMubGVmdFdhbGxzKSAgXHJcblxyXG4gICAgICAgIC8vIG1vdmUgbGVmdC9yaWdodFxyXG4gICAgICAgIGlmICAgICAgKHRoaXMua2V5cy5yaWdodCAmJiB0aGlzLnBvc2l0aW9uLnggPCByaWdodFdhbGwpIHNwZWVkWCA9IHRoaXMubW92ZSgncmlnaHQnLHJpZ2h0V2FsbCwgIDEpXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5rZXlzLmxlZnQgICYmIHRoaXMucG9zaXRpb24ueSA+IGxlZnRXYWxsKSAgc3BlZWRYID0gdGhpcy5tb3ZlKCdsZWZ0JywgbGVmdFdhbGwsICAtMSlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGluZXJ0aW9uXHJcblxyXG4gICAgICAgICAgICBpZiAoIE1hdGguZmxvb3IoMTAgKiBNYXRoLmFicyh0aGlzLmN1cnJlbnRTcGVlZCkpID09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWVkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMuY3VycmVudFNwZWVkID4gcmlnaHRXYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gcmlnaHRXYWxsIC0gdGhpcy5wb3NpdGlvbi54XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgKj0gdGhpcy5pbmVydGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZFggPSB0aGlzLmN1cnJlbnRTcGVlZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJyZW50U3BlZWQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMuY3VycmVudFNwZWVkIDwgbGVmdFdhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSBsZWZ0V2FsbCAtIHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkICo9IHRoaXMuaW5lcnRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRYID0gdGhpcy5jdXJyZW50U3BlZWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8ganVtcFxyXG4gICAgICAgIGlmICggKHRoaXMua2V5cy51cCAmJiB0aGlzLmNhbkp1bXAgKSB8fCB0aGlzLnRha2VPZmYpIHNwZWVkWSArPSB0aGlzLmp1bXAocm9vZilcclxuICAgICAgICAvLyBncmF2aXR5XHJcbiAgICAgICAgaWYgKCF0aGlzLnRha2VPZmYpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRZICs9IHRoaXMuZ3Jhdml0eShmbG9vcilcclxuXHJcbiAgICAgICAgbGV0IG5ld1NwZWVkcyA9IHRoaXMuZnV0dXJlUG9zaXRpb25Jbk9iamNldChzcGVlZFgsIHNwZWVkWSlcclxuXHJcbiAgICAgICAgLy8gbW92ZSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBuZXdTcGVlZHMueFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBuZXdTcGVlZHMueVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGRyYXdcclxuICAgICAgICBjdHguc2F2ZSgpXHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yIFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9