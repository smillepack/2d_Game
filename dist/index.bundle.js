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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbutton {\n  background: white;\n  border: 1px solid red;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  outline: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\ncanvas {\n  border: 1px solid black;\n}\n\n.canvasContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 300px;\n}\n\n.buttonsContainer {\n  width: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.moveButtonsContainer {\n  width: 122px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.middleButtonsContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["style.sass","style.css"],"names":[],"mappings":"AAAA;EACI,SAAS;EACT,UAAU;EACV,8BAAsB;UAAG,sBAAA;ACE7B;;AAEA;EDAI,iBAAQ;EACR,qBAAkB;EAClB,kBAAY;EACZ,YAAW;EACX,WAAU;EACV,UAAA;EAAoB,yBAAA;KCGnB,sBAAsB;MDDrB,qBAAC;UACK,iBAAe;ACG3B;;ADDA;EACI,uBAAa;ACIjB;;AAEA;EDFI,oBAAW;EACX,oBAAa;EAAG,aAAA;ECKlB,wBAAwB;MDH1B,qBAAkB;UACP,uBAAG;EACV,yBAAa;MACb,sBAAiB;UAAa,mBAAA;ECMhC,4BAA4B;EDJ9B,6BAAsB;MAClB,0BAAY;UACL,sBAAM;EACb,WAAA;EACA,aAAA;ACMJ;;AAEA;EDLA,UAAA;EACI,oBAAa;EACb,oBAAiB;EACjB,aAAW;EAAG,uBAAA;MCQZ,oBAAoB;UAChB,2BAA2B;AACrC;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;MACzB,0BAA0B;UACtB,sBAAsB;EAC9B,yBAAyB;MACrB,sBAAsB;UAClB,8BAA8B;EACtC,yBAAyB;MACrB,sBAAsB;UAClB,mBAAmB;AAC7B;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,yBAAyB;MACrB,sBAAsB;UAClB,8BAA8B;EACtC,WAAW;AACb;AACA,oCAAoC","file":"style.css"}]);
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
/* harmony import */ var _scripts_miniMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/miniMap.js */ "./src/scripts/miniMap.js");
/* harmony import */ var _scripts_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/buttons.js */ "./src/scripts/buttons.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_6__);







const GAME_HEIGHT = 160;
const GAME_WIDHT = 200;
const WALL_WIDTH = 5;
let root = document.getElementById('root');
root.classList.add('canvasContainer');
let canvasContainer = document.createElement('div');
let canvas = document.createElement('canvas');
canvas.width = GAME_WIDHT;
canvas.height = GAME_HEIGHT;
canvasContainer.append(canvas);
root.append(canvasContainer);
root.append(_scripts_buttons_js__WEBPACK_IMPORTED_MODULE_5__["buttons"]);
let ctx = canvas.getContext('2d');
let centerX = GAME_WIDHT / 2 - 5;
let centerY = GAME_HEIGHT / 2 - 5;
let mapObjects = new _scripts_mapObjects_js__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_HEIGHT, GAME_WIDHT, WALL_WIDTH);
let keyPressUp = new _scripts_keypressAciton_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
let player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, keyPressUp, mapObjects, GAME_WIDHT, GAME_HEIGHT);
let map = new _scripts_map_js__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, mapObjects, player.position, centerX, centerY);
let miniMap = new _scripts_miniMap_js__WEBPACK_IMPORTED_MODULE_4__["default"](ctx, mapObjects.objects, player, GAME_WIDHT, GAME_HEIGHT);

function gameLoop() {
  ctx.clearRect(0, 0, GAME_WIDHT, GAME_HEIGHT);
  player.render();
  map.render();
  miniMap.render();
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
  constructor(context, mapObjects, playerPosition, centerX, centerY) {
    this.map = mapObjects.objects;
    this.center = {
      x: centerX,
      y: centerY
    };
    this.playerPosition = playerPosition;
    this.context = context;
  }

  render() {
    let ctx = this.context;
    let offsetX = this.center.x - this.playerPosition.x;
    let offsetY = this.center.y - this.playerPosition.y;
    ctx.save();
    this.map.forEach(el => {
      ctx.fillStyle = el.color;
      ctx.fillRect(el.x1 + offsetX, el.y1 + offsetY, el.width, el.height);
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

/***/ "./src/scripts/miniMap.js":
/*!********************************!*\
  !*** ./src/scripts/miniMap.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniMap; });
class MiniMap {
  constructor(ctx, mapObjects, player, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.player = player;
    this.mapObjects = [...mapObjects];
    this.position = {
      x: 0,
      y: 0
    };
    this.koef = 3;
    this.width = gameWidth / this.koef;
    this.height = gameHeight / this.koef;
  }

  render() {
    let ctx = this.ctx;
    ctx.save();
    ctx.rect(this.position.x, this.position.y, this.width, this.height);
    ctx.stroke();
    ctx.fillStyle = 'gray';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.mapObjects.forEach(el => {
      ctx.fillStyle = el.color;
      ctx.fillRect(el.x1 / this.koef, el.y1 / this.koef, el.width / this.koef, el.height / this.koef);
    });
    ctx.fillStyle = this.player.color;
    ctx.fillRect(this.player.position.x / this.koef, this.player.position.y / this.koef, this.player.width / this.koef, this.player.height / this.koef);
    ctx.restore();
  }

}

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
  constructor(context, keys, mapObjects, gameWidth, gameHeight) {
    this.context = context;
    this.keys = keys;
    this.mapObjects = mapObjects.objects;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight; // player specifications

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

  move(symbol) {
    if (Math.abs(this.currentSpeed) < this.maxSpeed) this.currentSpeed += symbol * this.speedAcceleration;
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

    if (this.keys.right && this.position.x < rightWall) this.move(1);else if (this.keys.left && this.position.y > leftWall) this.move(-1);else {
      // inertion
      if (Math.floor(10 * Math.abs(this.currentSpeed)) == 0) this.currentSpeed = 0;else this.currentSpeed *= this.inertion;
    }

    if (this.currentSpeed > 0) {
      if (this.position.x + this.currentSpeed > rightWall) {
        this.currentSpeed = rightWall - this.position.x;
      }
    } else if (this.currentSpeed < 0) {
      if (this.position.x + this.currentSpeed < leftWall) {
        this.currentSpeed = leftWall - this.position.x;
      }
    }

    speedX = this.currentSpeed; // jump

    if (this.keys.up && this.canJump || this.takeOff) speedY += this.jump(roof); // gravity

    if (!this.takeOff) speedY += this.gravity(floor);
    let newSpeeds = this.futurePositionInObjcet(speedX, speedY); // move position

    this.position.x += newSpeeds.x;
    this.position.y += newSpeeds.y; // draw

    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect((this.gameWidth - this.width) / 2, (this.gameHeight - this.height) / 2, this.width, this.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMva2V5cHJlc3NBY2l0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWluaU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCJdLCJuYW1lcyI6WyJHQU1FX0hFSUdIVCIsIkdBTUVfV0lESFQiLCJXQUxMX1dJRFRIIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYW52YXNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmQiLCJidXR0b25zIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNlbnRlclgiLCJjZW50ZXJZIiwibWFwT2JqZWN0cyIsIk1hcE9iamVjdCIsImtleVByZXNzVXAiLCJLZXlQcmVzc1VwIiwicGxheWVyIiwiUGxheWVyIiwibWFwIiwiTWFwIiwicG9zaXRpb24iLCJtaW5pTWFwIiwiTWluaU1hcCIsIm9iamVjdHMiLCJnYW1lTG9vcCIsImNsZWFyUmVjdCIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJ1dHRvbnNDb250YWluZXIiLCJtb3ZlQnV0dG9uc0NvbnRhaW5lciIsImhpZ2hlckJ1dHRvblVwIiwibWlkZGxlQnV0dG9uc0NvbnRhaW5lciIsIm1pZGRsZUJ1dHRvbkxlZnQiLCJtaWRkbGVCdXR0b25SaWdodCIsImJ1dHRvbUJ1dHRvbkRvd24iLCJpbm5lckhUTUwiLCJjb25zdHJ1Y3RvciIsImxlZnQiLCJyaWdodCIsInVwIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleSIsImJpbmQiLCJ2YWx1ZSIsImV2ZW50IiwidGV4dCIsImtleUNvZGUiLCJjb250ZXh0IiwicGxheWVyUG9zaXRpb24iLCJjZW50ZXIiLCJ4IiwieSIsIm9mZnNldFgiLCJvZmZzZXRZIiwic2F2ZSIsImZpbGxTdHlsZSIsImNvbG9yIiwiZmlsbFJlY3QiLCJ4MSIsInkxIiwicmVzdG9yZSIsImdhbWVIZWlnaHQiLCJnYW1lV2lkdGgiLCJ3YWxsV2lkdGgiLCJuYW1lIiwia29lZiIsInJlY3QiLCJzdHJva2UiLCJrZXlzIiwiY3VycmVudFNwZWVkIiwic3BlZWRBY2NlbGVyYXRpb24iLCJtYXhTcGVlZCIsImxhc3REaXJlY3Rpb24iLCJpbmVydGlvbiIsImdyYXZpdHlDdXJyZW50U3BlZWQiLCJncmF2aXR5QWNjZWxlcmF0aW9uIiwibWF4SnVtcEhlaWdodCIsInN0YXJ0SnVtcFNwZWVkIiwiTWF0aCIsInNxcnQiLCJjYW5KdW1wIiwidGFrZU9mZiIsImZpbmRNb3ZlTGltaXRzIiwiZmxvb3JzIiwicm9vZnMiLCJsZWZ0V2FsbHMiLCJyaWdodFdhbGxzIiwicHVzaCIsIm1vdmUiLCJzeW1ib2wiLCJhYnMiLCJqdW1wIiwicm9vZiIsImZsb29yIiwiZ3Jhdml0eSIsImN1cnJlbnRKdW1wSGVpZ2h0IiwiZnV0dXJlUG9zaXRpb25Jbk9iamNldCIsInNwZWVkWCIsInNwZWVkWSIsInNw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SyxDQW9DTDs7QUFDQSxRQUFNLEtBQUtELElBQUwsQ0FBVWpDLEVBQVYsSUFBZ0IsS0FBSzZDLE9BQXRCLElBQW1DLEtBQUtDLE9BQTdDLEVBQXNEaUIsTUFBTSxJQUFJLEtBQUtQLElBQUwsQ0FBVUMsSUFBVixDQUFWLENBckNqRCxDQXNDTDs7QUFDQSxRQUFJLENBQUMsS0FBS1gsT0FBVixFQUFzRGlCLE1BQU0sSUFBSSxLQUFLSixPQUFMLENBQWFELEtBQWIsQ0FBVjtBQUV0RCxRQUFJWSxTQUFTLEdBQUcsS0FBS1Qsc0JBQUwsQ0FBNEJDLE1BQTVCLEVBQW9DQyxNQUFwQyxDQUFoQixDQXpDSyxDQTJDTDs7QUFDQSxTQUFLbEYsUUFBTCxDQUFja0MsQ0FBZCxJQUFtQnVELFNBQVMsQ0FBQ3ZELENBQTdCO0FBQ0EsU0FBS2xDLFFBQUwsQ0FBY21DLENBQWQsSUFBbUJzRCxTQUFTLENBQUN0RCxDQUE3QixDQTdDSyxDQStDTDs7QUFDQS9DLE9BQUcsQ0FBQ2tELElBQUo7QUFFQWxELE9BQUcsQ0FBQ21ELFNBQUosR0FBZ0IsS0FBS0MsS0FBckI7QUFDQXBELE9BQUcsQ0FBQ3FELFFBQUosQ0FBYyxDQUFDLEtBQUtLLFNBQUwsR0FBaUIsS0FBSzlELEtBQXZCLElBQWdDLENBQTlDLEVBQWtELENBQUMsS0FBSzZELFVBQUwsR0FBa0IsS0FBSzVELE1BQXhCLElBQWtDLENBQXBGLEVBQXVGLEtBQUtELEtBQTVGLEVBQW1HLEtBQUtDLE1BQXhHO0FBRUFHLE9BQUcsQ0FBQ3dELE9BQUo7QUFDSDs7QUF2TnVCLEM7Ozs7Ozs7Ozs7O0FDQTVCLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsNEhBQXlEOztBQUUzRjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBvdXRsaW5lOiAwO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuY2FudmFzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2FudmFzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5tb3ZlQnV0dG9uc0NvbnRhaW5lciB7XFxuICB3aWR0aDogMTIycHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWlkZGxlQnV0dG9uc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJzdHlsZS5zYXNzXCIsXCJzdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDhCQUFzQjtVQUFHLHNCQUFBO0FDRTdCOztBQUVBO0VEQUksaUJBQVE7RUFDUixxQkFBa0I7RUFDbEIsa0JBQVk7RUFDWixZQUFXO0VBQ1gsV0FBVTtFQUNWLFVBQUE7RUFBb0IseUJBQUE7S0NHbkIsc0JBQXNCO01ERHJCLHFCQUFDO1VBQ0ssaUJBQWU7QUNHM0I7O0FEREE7RUFDSSx1QkFBYTtBQ0lqQjs7QUFFQTtFREZJLG9CQUFXO0VBQ1gsb0JBQWE7RUFBRyxhQUFBO0VDS2xCLHdCQUF3QjtNREgxQixxQkFBa0I7VUFDUCx1QkFBRztFQUNWLHlCQUFhO01BQ2Isc0JBQWlCO1VBQWEsbUJBQUE7RUNNaEMsNEJBQTRCO0VESjlCLDZCQUFzQjtNQUNsQiwwQkFBWTtVQUNMLHNCQUFNO0VBQ2IsV0FBQTtFQUNBLGFBQUE7QUNNSjs7QUFFQTtFRExBLFVBQUE7RUFDSSxvQkFBYTtFQUNiLG9CQUFpQjtFQUNqQixhQUFXO0VBQUcsdUJBQUE7TUNRWixvQkFBb0I7VUFDaEIsMkJBQTJCO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7TUFDekIsMEJBQTBCO1VBQ3RCLHNCQUFzQjtFQUM5Qix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLDhCQUE4QjtFQUN0Qyx5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtBQUM3Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsOEJBQThCO0VBQ3RDLFdBQVc7QUFDYjtBQUNBLG9DQUFvQ1wiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9zY3JpcHRzL3BsYXllci5qcydcclxuaW1wb3J0IEtleVByZXNzVXAgZnJvbSAnLi9zY3JpcHRzL2tleXByZXNzQWNpdG9uLmpzJ1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vc2NyaXB0cy9tYXAuanMnXHJcbmltcG9ydCBNYXBPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21hcE9iamVjdHMuanMnXHJcbmltcG9ydCBNaW5pTWFwIGZyb20gJy4vc2NyaXB0cy9taW5pTWFwLmpzJ1xyXG5pbXBvcnQgeyBidXR0b25zIH0gZnJvbSAnLi9zY3JpcHRzL2J1dHRvbnMuanMnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlcy9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBHQU1FX0hFSUdIVCA9IDE2MFxyXG5jb25zdCBHQU1FX1dJREhUICA9IDIwMFxyXG5jb25zdCBXQUxMX1dJRFRIICA9IDVcclxuXHJcbmxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG5yb290LmNsYXNzTGlzdC5hZGQoJ2NhbnZhc0NvbnRhaW5lcicpXHJcblxyXG5sZXQgY2FudmFzQ29udGFpbmVyID0gZG9jdW1lbnQuIGNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxyXG4gICAgY2FudmFzLndpZHRoID0gR0FNRV9XSURIVFxyXG4gICAgY2FudmFzLmhlaWdodCA9IEdBTUVfSEVJR0hUXHJcblxyXG5jYW52YXNDb250YWluZXIuYXBwZW5kKGNhbnZhcylcclxuXHJcbnJvb3QuYXBwZW5kKGNhbnZhc0NvbnRhaW5lcilcclxucm9vdC5hcHBlbmQoYnV0dG9ucylcclxuXHJcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxubGV0IGNlbnRlclggPSBHQU1FX1dJREhUIC8gMiAtIDVcclxubGV0IGNlbnRlclkgPSBHQU1FX0hFSUdIVCAvIDIgLSA1XHJcblxyXG5sZXQgbWFwT2JqZWN0cyA9IG5ldyBNYXBPYmplY3QoR0FNRV9IRUlHSFQsIEdBTUVfV0lESFQsIFdBTExfV0lEVEgpXHJcblxyXG5sZXQga2V5UHJlc3NVcCA9IG5ldyBLZXlQcmVzc1VwKClcclxubGV0IHBsYXllciAgICAgPSBuZXcgUGxheWVyKGN0eCwga2V5UHJlc3NVcCwgbWFwT2JqZWN0cywgR0FNRV9XSURIVCwgR0FNRV9IRUlHSFQpXHJcbmxldCBtYXAgICAgICAgID0gbmV3IE1hcChjdHgsIG1hcE9iamVjdHMsIHBsYXllci5wb3NpdGlvbiwgY2VudGVyWCwgY2VudGVyWSlcclxubGV0IG1pbmlNYXAgICAgPSBuZXcgTWluaU1hcChjdHgsIG1hcE9iamVjdHMub2JqZWN0cywgcGxheWVyLCBHQU1FX1dJREhULCBHQU1FX0hFSUdIVClcclxuXHJcbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FX1dJREhULCBHQU1FX0hFSUdIVClcclxuXHJcbiAgICBwbGF5ZXIucmVuZGVyKClcclxuICAgIG1hcC5yZW5kZXIoKVxyXG4gICAgbWluaU1hcC5yZW5kZXIoKVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcclxufVxyXG5cclxuZ2FtZUxvb3AoKVxyXG4iLCIvLyBpbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL3N0eWxlLmNzcydcclxubGV0IGJ1dHRvbnNDb250YWluZXIgPSAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5sZXQgbW92ZUJ1dHRvbnNDb250YWluZXIgPSAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG5sZXQgaGlnaGVyQnV0dG9uVXAgPSAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblxyXG5sZXQgbWlkZGxlQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmxldCBtaWRkbGVCdXR0b25MZWZ0ID0gICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxubGV0IG1pZGRsZUJ1dHRvblJpZ2h0ID0gICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxubGV0IGJ1dHRvbUJ1dHRvbkRvd24gPSAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuXHJcbmJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc0NvbnRhaW5lcicpXHJcbm1vdmVCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vdmVCdXR0b25zQ29udGFpbmVyJylcclxubWlkZGxlQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaWRkbGVCdXR0b25zQ29udGFpbmVyJylcclxuXHJcblxyXG5oaWdoZXJCdXR0b25VcC5pbm5lckhUTUwgICAgPSAndXAnXHJcbm1pZGRsZUJ1dHRvbkxlZnQuaW5uZXJIVE1MICA9ICdsZWZ0J1xyXG5taWRkbGVCdXR0b25SaWdodC5pbm5lckhUTUwgPSAncmlnaHQnXHJcbmJ1dHRvbUJ1dHRvbkRvd24uaW5uZXJIVE1MICA9ICdkb3duJ1xyXG5cclxuYnV0dG9uc0NvbnRhaW5lci5hcHBlbmQobW92ZUJ1dHRvbnNDb250YWluZXIpXHJcblxyXG5tb3ZlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoaGlnaGVyQnV0dG9uVXApXHJcblxyXG5tb3ZlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQobWlkZGxlQnV0dG9uc0NvbnRhaW5lcilcclxubWlkZGxlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQobWlkZGxlQnV0dG9uTGVmdClcclxubWlkZGxlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQobWlkZGxlQnV0dG9uUmlnaHQpXHJcblxyXG4vLyBtb3ZlQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9tQnV0dG9uRG93bilcclxuXHJcbmV4cG9ydCB7IGJ1dHRvbnNDb250YWluZXIgYXMgYnV0dG9ucyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5UHJlc3NVcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxlZnQgID0gZmFsc2VcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2UgXHJcbiAgICAgICAgdGhpcy51cCAgICA9IGZhbHNlXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCB0cnVlLCBlbC5pbm5lckhUTUwpKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlS2V5LmJpbmQodGhpcywgZmFsc2UsIGVsLmlubmVySFRNTCkpXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlS2V5LmJpbmQodGhpcywgdHJ1ZSwgZWwuaW5uZXJIVE1MKSlcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCBmYWxzZSwgZWwuaW5uZXJIVE1MKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCB0cnVlKSApXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIGZhbHNlKSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLZXkodmFsdWUsIGV2ZW50LCB0ZXh0KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudCkge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgLy8gbGVmdFxyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICBjYXNlIDY1OiBcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG5cclxuICAgICAgICAgICAgLy8ganVtcFxyXG4gICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICBjYXNlIDg3OiBcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgICAgIGNhc2UgMzk6IFxyXG4gICAgICAgICAgICBjYXNlIDY4OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IHZhbHVlXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgbWFwT2JqZWN0cywgcGxheWVyUG9zaXRpb24sIGNlbnRlclgsIGNlbnRlclkpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcE9iamVjdHMub2JqZWN0c1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2VudGVyID0ge1xyXG4gICAgICAgICAgICB4OiBjZW50ZXJYLFxyXG4gICAgICAgICAgICB5OiBjZW50ZXJZXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyUG9zaXRpb24gPSBwbGF5ZXJQb3NpdGlvblxyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNvbnRleHRcclxuXHJcbiAgICAgICAgbGV0IG9mZnNldFggPSAgdGhpcy5jZW50ZXIueCAtIHRoaXMucGxheWVyUG9zaXRpb24ueFxyXG4gICAgICAgIGxldCBvZmZzZXRZID0gdGhpcy5jZW50ZXIueSAtIHRoaXMucGxheWVyUG9zaXRpb24ueSBcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKVxyXG5cclxuICAgICAgICB0aGlzLm1hcC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVsLmNvbG9yXHJcblxyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoZWwueDEgKyBvZmZzZXRYLCBlbC55MSArIG9mZnNldFksIGVsLndpZHRoLCBlbC5oZWlnaHQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKVxyXG4gICAgfVxyXG59IiwiY2xhc3MgTWFwT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVIZWlnaHQsIGdhbWVXaWR0aCwgd2FsbFdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGVmdCB3YWxsJyxcclxuICAgICAgICAgICAgICAgIHgxOiAwLFxyXG4gICAgICAgICAgICAgICAgeTE6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBnYW1lSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmV5J1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3JpZ2h0IHdhbGwnLFxyXG4gICAgICAgICAgICAgICAgeDE6IGdhbWVXaWR0aCAtIHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIHkxOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZ2FtZUhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jvb2YnLFxyXG4gICAgICAgICAgICAgICAgeDE6IDAsXHJcbiAgICAgICAgICAgICAgICB5MTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBnYW1lV2lkdGggLSB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zsb29yJyxcclxuICAgICAgICAgICAgICAgIHgxOiAwLFxyXG4gICAgICAgICAgICAgICAgeTE6IGdhbWVIZWlnaHQgLSB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZ2FtZVdpZHRoIC0gd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnYmFsY29ueSAxJyxcclxuICAgICAgICAgICAgICAgIHgxOiA4MCwgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHkxOiBnYW1lSGVpZ2h0IC0gd2FsbFdpZHRoIC0gMjEsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAneWVsbG93J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnYmFsY29ueSAyJywgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB4MTogMjAsXHJcbiAgICAgICAgICAgICAgICB5MTogZ2FtZUhlaWdodCAtIHdhbGxXaWR0aCAtIDQxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3llbGxvdydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwT2JqZWN0IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluaU1hcHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgbWFwT2JqZWN0cywgcGxheWVyLCBnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllclxyXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cyA9IFsgXHJcbiAgICAgICAgICAgIC4uLm1hcE9iamVjdHMsICAgICAgICAgICAgXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtvZWYgPSAzXHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lV2lkdGggLyB0aGlzLmtvZWZcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWVIZWlnaHQgLyB0aGlzLmtvZWZcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY3R4XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKClcclxuXHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgIGN0eC5zdHJva2UoKVxyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2dyYXknXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuXHJcblxyXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVsLmNvbG9yXHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChlbC54MSAvIHRoaXMua29lZiwgZWwueTEgLyB0aGlzLmtvZWYsIGVsLndpZHRoIC8gdGhpcy5rb2VmLCBlbC5oZWlnaHQgLyB0aGlzLmtvZWYpXHJcbiAgICAgICAgfSkgICAgICAgIFxyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5wbGF5ZXIuY29sb3JcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wbGF5ZXIucG9zaXRpb24ueCAvIHRoaXMua29lZiwgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSAvIHRoaXMua29lZiwgdGhpcy5wbGF5ZXIud2lkdGggLyB0aGlzLmtvZWYsIHRoaXMucGxheWVyLmhlaWdodCAvIHRoaXMua29lZilcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKVxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBrZXlzLCBtYXBPYmplY3RzLCBnYW1lV2lkdGgsIGdhbWVIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XHJcbiAgICAgICAgdGhpcy5rZXlzID0ga2V5cyBcclxuICAgICAgICB0aGlzLm1hcE9iamVjdHMgPSBtYXBPYmplY3RzLm9iamVjdHNcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGhcclxuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0XHJcblxyXG4gICAgICAgIC8vIHBsYXllciBzcGVjaWZpY2F0aW9uc1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTBcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiA1MCxcclxuICAgICAgICAgICAgeTogMTBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICdyZWQnXHJcblxyXG4gICAgICAgIC8vIG1vdmluZyBzcGVjaWZpY2F0aW9uc1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gMFxyXG4gICAgICAgIHRoaXMuc3BlZWRBY2NlbGVyYXRpb24gPSAwLjFcclxuICAgICAgICB0aGlzLm1heFNwZWVkID0gNVxyXG4gICAgICAgIHRoaXMubGFzdERpcmVjdGlvbiA9ICcnXHJcblxyXG4gICAgICAgIHRoaXMuaW5lcnRpb24gPSAwLjk1XHJcblxyXG4gICAgICAgIC8vIGdyYXZpdHkgc3BlY2lmaWNhdGlvbnNcclxuICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uID0gMC4xXHJcblxyXG4gICAgICAgIC8vIGp1bXAgc2V0dGluZ3NcclxuICAgICAgICB0aGlzLm1heEp1bXBIZWlnaHQgPSA0MFxyXG4gICAgICAgIHRoaXMuc3RhcnRKdW1wU3BlZWQgPSBNYXRoLnNxcnQodGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uICogdGhpcy5tYXhKdW1wSGVpZ2h0ICogMikgKyB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb25cclxuICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZmluZE1vdmVMaW1pdHMoKSB7XHJcbiAgICAgICAgbGV0IGZsb29ycyA9IFtdXHJcbiAgICAgICAgbGV0IHJvb2ZzID0gW10gXHJcbiAgICAgICAgbGV0IGxlZnRXYWxscyA9IFtdIFxyXG4gICAgICAgIGxldCByaWdodFdhbGxzID0gW11cclxuXHJcbiAgICAgICAgLy8gdGVzdCwgb3VyIHBvc2l0aW9uIGlzIG9uL3VuZGVyL2xlZnQvcmlnaHQgbWFwT2JqZWN0ID9cclxuICAgICAgICB0aGlzLm1hcE9iamVjdHMuZm9yRWFjaCgoZWwpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGluIFggcmFuZ2UgYmFsY29ueSBcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IGVsLngxICsgZWwud2lkdGggJiYgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IGVsLngxKSB7ICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIGZsb29yc1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDw9IGVsLnkxKSAgICBmbG9vcnMucHVzaChlbC55MSAtIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLy8gZmluZCBhbGwgcm9vZnNcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+PSBlbC55MSArIGVsLmhlaWdodCkgcm9vZnMucHVzaChlbC55MSArIGVsLmhlaWdodClcclxuICAgICAgICAgICAgfSAgICAgXHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBpbiBZIHJhbmdlIGJhbGNvbnlcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID4gZWwueTEgJiYgdGhpcy5wb3NpdGlvbi55IDwgZWwueTEgKyBlbC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgLy8gZmluZCBhbGwgcmlnaHQgd2FsbHNcclxuICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPD0gZWwueDEpICAgIHJpZ2h0V2FsbHMucHVzaChlbC54MSAtIHRoaXMud2lkdGgpXHJcbiAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIGxlZnQgd2FsbHNcclxuICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wb3NpdGlvbi54ID49IGVsLngxICsgZWwud2lkdGgpIGxlZnRXYWxscy5wdXNoKGVsLngxICsgZWwud2lkdGgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZmxvb3JzLCByb29mcywgbGVmdFdhbGxzLCByaWdodFdhbGxzIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKHN5bWJvbCkge1xyXG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmN1cnJlbnRTcGVlZCkgPCB0aGlzLm1heFNwZWVkKSB0aGlzLmN1cnJlbnRTcGVlZCArPSBzeW1ib2wgKiB0aGlzLnNwZWVkQWNjZWxlcmF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAganVtcChyb29mKSB7XHJcblxyXG4gICAgICAgIC8vIHdlIHN0YXJ0IGp1bXBcclxuICAgICAgICBpZiAodGhpcy5jYW5KdW1wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMudGFrZU9mZiA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IC10aGlzLnN0YXJ0SnVtcFNwZWVkXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcyB0YWtlb2ZmIG1lY2hhbmlzbVxyXG4gICAgICAgIGlmICh0aGlzLnRha2VPZmYpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKDEwICogdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkKSA9PSAwIHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA8IHJvb2YpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCArPSB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb25cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KGZsb29yKSB7XHJcbiAgICAgICAgbGV0IGdyYXZpdHkgPSAwXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8IGZsb29yKXtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPiBmbG9vcikge1xyXG4gICAgICAgICAgICAgICAgZ3Jhdml0eSA9IGZsb29yIC0gdGhpcy5wb3NpdGlvbi55IFxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdyYXZpdHkgKz0gdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkICs9IHRoaXMuZ3Jhdml0eUFjY2VsZXJhdGlvblxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEp1bXBIZWlnaHQgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBncmF2aXR5XHJcbiAgICB9XHJcblxyXG4gICAgZnV0dXJlUG9zaXRpb25Jbk9iamNldChzcGVlZFgsIHNwZWVkWSkge1xyXG4gICAgICAgIGxldCBzcGVlZHMgPSB7XHJcbiAgICAgICAgICAgIHg6IHNwZWVkWCxcclxuICAgICAgICAgICAgeTogc3BlZWRZXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hcE9iamVjdHMuZm9yRWFjaCgoZWwpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGluIFggcmFuZ2UgYmFsY29ueSAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyBzcGVlZFggPCBlbC54MSArIGVsLndpZHRoICYmIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggKyBzcGVlZFggPiBlbC54MSkgeyAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBpbiBZIHJhbmdlIGJhbGNvbnkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgKyBzcGVlZFkgPiBlbC55MSAmJiB0aGlzLnBvc2l0aW9uLnkgKyBzcGVlZFkgPCBlbC55MSArIGVsLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzcGVlZFgpID4gTWF0aC5hYnMoc3BlZWRZKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRha2VPZmYgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZHMueSA9IDAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhzcGVlZFgpIDwgTWF0aC5hYnMoc3BlZWRZKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRzLnggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlT2ZmID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRzID0geyB4OiAwLCB5OiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9ICBcclxuXHJcbiAgICAgICAgfSkgXHJcblxyXG4gICAgICAgIHJldHVybiBzcGVlZHNcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY29udGV4dFxyXG4gICAgICAgIGxldCBzcGVlZFggPSAwXHJcbiAgICAgICAgbGV0IHNwZWVkWSA9IDBcclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgbW9zdCBuZWFyZXN0IGxpbWl0c1xyXG4gICAgICAgIGxldCBsaW1pdHMgPSB0aGlzLmZpbmRNb3ZlTGltaXRzKClcclxuICAgXHJcbiAgICAgICAgbGV0IGZsb29yICAgICA9IE1hdGgubWluKC4uLmxpbWl0cy5mbG9vcnMpXHJcbiAgICAgICAgbGV0IHJvb2YgICAgICA9IE1hdGgubWF4KC4uLmxpbWl0cy5yb29mcykgXHJcbiAgICAgICAgbGV0IHJpZ2h0V2FsbCA9IE1hdGgubWluKC4uLmxpbWl0cy5yaWdodFdhbGxzKSBcclxuICAgICAgICBsZXQgbGVmdFdhbGwgID0gTWF0aC5tYXgoLi4ubGltaXRzLmxlZnRXYWxscykgIFxyXG5cclxuICAgICAgICAvLyBtb3ZlIGxlZnQvcmlnaHRcclxuICAgICAgICBpZiAgICAgICh0aGlzLmtleXMucmlnaHQgJiYgdGhpcy5wb3NpdGlvbi54IDwgcmlnaHRXYWxsKSB0aGlzLm1vdmUoMSlcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleXMubGVmdCAgJiYgdGhpcy5wb3NpdGlvbi55ID4gbGVmdFdhbGwpICB0aGlzLm1vdmUoLTEpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGluZXJ0aW9uXHJcbiAgICAgICAgICAgIGlmICggTWF0aC5mbG9vcigxMCAqIE1hdGguYWJzKHRoaXMuY3VycmVudFNwZWVkKSkgPT0gMCApIHRoaXMuY3VycmVudFNwZWVkID0gMCBcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmN1cnJlbnRTcGVlZCAqPSB0aGlzLmluZXJ0aW9uICAgICAgICBcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3BlZWQgPiAwKSB7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMuY3VycmVudFNwZWVkID4gcmlnaHRXYWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVlZCA9IHJpZ2h0V2FsbCAtIHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudFNwZWVkIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5jdXJyZW50U3BlZWQgPCBsZWZ0V2FsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSBsZWZ0V2FsbCAtIHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BlZWRYID0gdGhpcy5jdXJyZW50U3BlZWRcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8ganVtcFxyXG4gICAgICAgIGlmICggKHRoaXMua2V5cy51cCAmJiB0aGlzLmNhbkp1bXAgKSB8fCB0aGlzLnRha2VPZmYpIHNwZWVkWSArPSB0aGlzLmp1bXAocm9vZilcclxuICAgICAgICAvLyBncmF2aXR5XHJcbiAgICAgICAgaWYgKCF0aGlzLnRha2VPZmYpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRZICs9IHRoaXMuZ3Jhdml0eShmbG9vcilcclxuXHJcbiAgICAgICAgbGV0IG5ld1NwZWVkcyA9IHRoaXMuZnV0dXJlUG9zaXRpb25Jbk9iamNldChzcGVlZFgsIHNwZWVkWSlcclxuXHJcbiAgICAgICAgLy8gbW92ZSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBuZXdTcGVlZHMueFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBuZXdTcGVlZHMueVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGRyYXdcclxuICAgICAgICBjdHguc2F2ZSgpXHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yIFxyXG4gICAgICAgIGN0eC5maWxsUmVjdCggKHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aCkgLyAyICwgKHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0KSAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpXHJcbiAgICB9XHJcbn1cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==