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
/* harmony import */ var _scripts_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/buttons.js */ "./src/scripts/buttons.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_5__);






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
root.append(_scripts_buttons_js__WEBPACK_IMPORTED_MODULE_4__["buttons"]);
let ctx = canvas.getContext('2d');
let centerX = GAME_WIDHT / 2 - 5;
let centerY = GAME_HEIGHT / 2 - 5;
let mapObjects = new _scripts_mapObjects_js__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_HEIGHT, GAME_WIDHT, WALL_WIDTH);
let keyPressUp = new _scripts_keypressAciton_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
let player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, keyPressUp, mapObjects, GAME_WIDHT, GAME_HEIGHT);
let map = new _scripts_map_js__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, mapObjects, player.position, centerX, centerY);

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
    this.inertion = 0.99; // gravity specifications

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
    ctx.fillStyle = this.color; // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    // test version

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMva2V5cHJlc3NBY2l0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiXSwibmFtZXMiOlsiR0FNRV9IRUlHSFQiLCJHQU1FX1dJREhUIiwiV0FMTF9XSURUSCIsInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FudmFzQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwZW5kIiwiYnV0dG9ucyIsImN0eCIsImdldENvbnRleHQiLCJjZW50ZXJYIiwiY2VudGVyWSIsIm1hcE9iamVjdHMiLCJNYXBPYmplY3QiLCJrZXlQcmVzc1VwIiwiS2V5UHJlc3NVcCIsInBsYXllciIsIlBsYXllciIsIm1hcCIsIk1hcCIsInBvc2l0aW9uIiwiZ2FtZUxvb3AiLCJjbGVhclJlY3QiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJidXR0b25zQ29udGFpbmVyIiwibW92ZUJ1dHRvbnNDb250YWluZXIiLCJoaWdoZXJCdXR0b25VcCIsIm1pZGRsZUJ1dHRvbnNDb250YWluZXIiLCJtaWRkbGVCdXR0b25MZWZ0IiwibWlkZGxlQnV0dG9uUmlnaHQiLCJidXR0b21CdXR0b25Eb3duIiwiaW5uZXJIVE1MIiwiY29uc3RydWN0b3IiLCJsZWZ0IiwicmlnaHQiLCJ1cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJpbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXkiLCJiaW5kIiwidmFsdWUiLCJldmVudCIsInRleHQiLCJrZXlDb2RlIiwiY29udGV4dCIsInBsYXllclBvc2l0aW9uIiwib2JqZWN0cyIsImNlbnRlciIsIngiLCJ5Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzYXZlIiwiZmlsbFN0eWxlIiwiY29sb3IiLCJmaWxsUmVjdCIsIngxIiwieTEiLCJyZXN0b3JlIiwiZ2FtZUhlaWdodCIsImdhbWVXaWR0aCIsIndhbGxXaWR0aCIsIm5hbWUiLCJrZXlzIiwiY3VycmVudFNwZWVkIiwic3BlZWRBY2NlbGVyYXRpb24iLCJtYXhTcGVlZCIsImxhc3REaXJlY3Rpb24iLCJpbmVydGlvbiIsImdyYXZpdHlDdXJyZW50U3BlZWQiLCJncmF2aXR5QWNjZWxlcmF0aW9uIiwibWF4SnVtcEhlaWdodCIsInN0YXJ0SnVtcFNwZWVkIiwiTWF0aCIsInNxcnQiLCJjYW5KdW1wIiwidGFrZU9mZiIsImZpbmRNb3ZlTGltaXRzIiwiZmxvb3JzIiwicm9vZnMiLCJsZWZ0V2FsbHMiLCJyaWdodFdhbGxzIiwicHVzaCIsIm1vdmUiLCJzeW1ib2wiLCJhYnMiLCJqdW1wIiwicm9vZiIsImZsb29yIiwiZ3Jhdml0eSIsImN1cnJlbnRKdW1wSGVpZ2h0IiwiZnV0dXJlUG9zaXRpb25Jbk9iamNldCIsInNwZWVkWCIsInNwZWVkWSIsInNwZWVkcyIsImxpbWl0cyIsIm1pbiIsIm1heCIsInJpZ2h0V2FsbCIsImxlZnRXYWxsIiwibmV3U3BlZWRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7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OztBQUUzRjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBvdXRsaW5lOiAwO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuY2FudmFzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2FudmFzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5tb3ZlQnV0dG9uc0NvbnRhaW5lciB7XFxuICB3aWR0aDogMTIycHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWlkZGxlQnV0dG9uc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJzdHlsZS5zYXNzXCIsXCJzdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDhCQUFzQjtVQUFHLHNCQUFBO0FDRTdCOztBQUVBO0VEQUksaUJBQVE7RUFDUixxQkFBa0I7RUFDbEIsa0JBQVk7RUFDWixZQUFXO0VBQ1gsV0FBVTtFQUNWLFVBQUE7RUFBb0IseUJBQUE7S0NHbkIsc0JBQXNCO01ERHJCLHFCQUFDO1VBQ0ssaUJBQWU7QUNHM0I7O0FEREE7RUFDSSx1QkFBYTtBQ0lqQjs7QUFFQTtFREZJLG9CQUFXO0VBQ1gsb0JBQWE7RUFBRyxhQUFBO0VDS2xCLHdCQUF3QjtNREgxQixxQkFBa0I7VUFDUCx1QkFBRztFQUNWLHlCQUFhO01BQ2Isc0JBQWlCO1VBQWEsbUJBQUE7RUNNaEMsNEJBQTRCO0VESjlCLDZCQUFzQjtNQUNsQiwwQkFBWTtVQUNMLHNCQUFNO0VBQ2IsV0FBQTtFQUNBLGFBQUE7QUNNSjs7QUFFQTtFRExBLFVBQUE7RUFDSSxvQkFBYTtFQUNiLG9CQUFpQjtFQUNqQixhQUFXO0VBQUcsdUJBQUE7TUNRWixvQkFBb0I7VUFDaEIsMkJBQTJCO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7TUFDekIsMEJBQTBCO1VBQ3RCLHNCQUFzQjtFQUM5Qix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLDhCQUE4QjtFQUN0Qyx5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtBQUM3Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHlCQUF5QjtNQUNyQixzQkFBc0I7VUFDbEIsOEJBQThCO0VBQ3RDLFdBQVc7QUFDYjtBQUNBLG9DQUFvQ1wiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9zY3JpcHRzL3BsYXllci5qcydcclxuaW1wb3J0IEtleVByZXNzVXAgZnJvbSAnLi9zY3JpcHRzL2tleXByZXNzQWNpdG9uLmpzJ1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vc2NyaXB0cy9tYXAuanMnXHJcbmltcG9ydCBNYXBPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21hcE9iamVjdHMuanMnXHJcbmltcG9ydCB7IGJ1dHRvbnMgfSBmcm9tICcuL3NjcmlwdHMvYnV0dG9ucy5qcydcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGVzL3N0eWxlLmNzcydcclxuXHJcbmNvbnN0IEdBTUVfSEVJR0hUID0gMTYwXHJcbmNvbnN0IEdBTUVfV0lESFQgID0gMjAwXHJcbmNvbnN0IFdBTExfV0lEVEggID0gNVxyXG5cclxubGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbnJvb3QuY2xhc3NMaXN0LmFkZCgnY2FudmFzQ29udGFpbmVyJylcclxuXHJcbmxldCBjYW52YXNDb250YWluZXIgPSBkb2N1bWVudC4gY3JlYXRlRWxlbWVudCgnZGl2JylcclxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICBjYW52YXMud2lkdGggPSBHQU1FX1dJREhUXHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gR0FNRV9IRUlHSFRcclxuXHJcbmNhbnZhc0NvbnRhaW5lci5hcHBlbmQoY2FudmFzKVxyXG5cclxucm9vdC5hcHBlbmQoY2FudmFzQ29udGFpbmVyKVxyXG5yb290LmFwcGVuZChidXR0b25zKVxyXG5cclxubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG5sZXQgY2VudGVyWCA9IEdBTUVfV0lESFQgLyAyIC0gNVxyXG5sZXQgY2VudGVyWSA9IEdBTUVfSEVJR0hUIC8gMiAtIDVcclxuXHJcbmxldCBtYXBPYmplY3RzID0gbmV3IE1hcE9iamVjdChHQU1FX0hFSUdIVCwgR0FNRV9XSURIVCwgV0FMTF9XSURUSClcclxuXHJcbmxldCBrZXlQcmVzc1VwID0gbmV3IEtleVByZXNzVXAoKVxyXG5sZXQgcGxheWVyICAgICA9IG5ldyBQbGF5ZXIoY3R4LCBrZXlQcmVzc1VwLCBtYXBPYmplY3RzLCBHQU1FX1dJREhULCBHQU1FX0hFSUdIVClcclxubGV0IG1hcCAgICAgICAgPSBuZXcgTWFwKGN0eCwgbWFwT2JqZWN0cywgcGxheWVyLnBvc2l0aW9uLCBjZW50ZXJYLCBjZW50ZXJZKVxyXG5cclxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lESFQsIEdBTUVfSEVJR0hUKVxyXG5cclxuICAgIHBsYXllci5yZW5kZXIoKVxyXG4gICAgbWFwLnJlbmRlcigpXHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxyXG59XHJcblxyXG5nYW1lTG9vcCgpXHJcbiIsIi8vIGltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvc3R5bGUuY3NzJ1xyXG5sZXQgYnV0dG9uc0NvbnRhaW5lciA9ICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmxldCBtb3ZlQnV0dG9uc0NvbnRhaW5lciA9ICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbmxldCBoaWdoZXJCdXR0b25VcCA9ICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbmxldCBtaWRkbGVCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxubGV0IG1pZGRsZUJ1dHRvbkxlZnQgPSAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5sZXQgbWlkZGxlQnV0dG9uUmlnaHQgPSAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblxyXG5sZXQgYnV0dG9tQnV0dG9uRG93biA9ICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblxyXG5cclxuYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zQ29udGFpbmVyJylcclxubW92ZUJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW92ZUJ1dHRvbnNDb250YWluZXInKVxyXG5taWRkbGVCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21pZGRsZUJ1dHRvbnNDb250YWluZXInKVxyXG5cclxuXHJcbmhpZ2hlckJ1dHRvblVwLmlubmVySFRNTCAgICA9ICd1cCdcclxubWlkZGxlQnV0dG9uTGVmdC5pbm5lckhUTUwgID0gJ2xlZnQnXHJcbm1pZGRsZUJ1dHRvblJpZ2h0LmlubmVySFRNTCA9ICdyaWdodCdcclxuYnV0dG9tQnV0dG9uRG93bi5pbm5lckhUTUwgID0gJ2Rvd24nXHJcblxyXG5idXR0b25zQ29udGFpbmVyLmFwcGVuZChtb3ZlQnV0dG9uc0NvbnRhaW5lcilcclxuXHJcbm1vdmVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChoaWdoZXJCdXR0b25VcClcclxuXHJcbm1vdmVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChtaWRkbGVCdXR0b25zQ29udGFpbmVyKVxyXG5taWRkbGVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChtaWRkbGVCdXR0b25MZWZ0KVxyXG5taWRkbGVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChtaWRkbGVCdXR0b25SaWdodClcclxuXHJcbi8vIG1vdmVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChidXR0b21CdXR0b25Eb3duKVxyXG5cclxuZXhwb3J0IHsgYnV0dG9uc0NvbnRhaW5lciBhcyBidXR0b25zIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlQcmVzc1VwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubGVmdCAgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZSBcclxuICAgICAgICB0aGlzLnVwICAgID0gZmFsc2VcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIHRydWUsIGVsLmlubmVySFRNTCkpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCBmYWxzZSwgZWwuaW5uZXJIVE1MKSlcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCB0cnVlLCBlbC5pbm5lckhUTUwpKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIGZhbHNlLCBlbC5pbm5lckhUTUwpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIHRydWUpIClcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5LmJpbmQodGhpcywgZmFsc2UpKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleSh2YWx1ZSwgZXZlbnQsIHRleHQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICAvLyBsZWZ0XHJcbiAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgIGNhc2UgNjU6IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICAvLyBqdW1wXHJcbiAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgIGNhc2UgODc6IFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG5cclxuICAgICAgICAgICAgLy8gcmlnaHRcclxuICAgICAgICAgICAgY2FzZSAzOTogXHJcbiAgICAgICAgICAgIGNhc2UgNjg6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdmFsdWVcclxuXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBtYXBPYmplY3RzLCBwbGF5ZXJQb3NpdGlvbiwgY2VudGVyWCwgY2VudGVyWSkge1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwT2JqZWN0cy5vYmplY3RzXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jZW50ZXIgPSB7XHJcbiAgICAgICAgICAgIHg6IGNlbnRlclgsXHJcbiAgICAgICAgICAgIHk6IGNlbnRlcllcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJQb3NpdGlvbiA9IHBsYXllclBvc2l0aW9uXHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY29udGV4dFxyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0WCA9ICB0aGlzLmNlbnRlci54IC0gdGhpcy5wbGF5ZXJQb3NpdGlvbi54XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSB0aGlzLmNlbnRlci55IC0gdGhpcy5wbGF5ZXJQb3NpdGlvbi55IFxyXG5cclxuICAgICAgICBjdHguc2F2ZSgpXHJcblxyXG4gICAgICAgIHRoaXMubWFwLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZWwuY29sb3JcclxuXHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChlbC54MSArIG9mZnNldFgsIGVsLnkxICsgb2Zmc2V0WSwgZWwud2lkdGgsIGVsLmhlaWdodClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpXHJcbiAgICB9XHJcbn0iLCJjbGFzcyBNYXBPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZUhlaWdodCwgZ2FtZVdpZHRoLCB3YWxsV2lkdGgpIHtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdsZWZ0IHdhbGwnLFxyXG4gICAgICAgICAgICAgICAgeDE6IDAsXHJcbiAgICAgICAgICAgICAgICB5MTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGdhbWVIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZXknXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncmlnaHQgd2FsbCcsXHJcbiAgICAgICAgICAgICAgICB4MTogZ2FtZVdpZHRoIC0gd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgeTE6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBnYW1lSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmV5J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncm9vZicsXHJcbiAgICAgICAgICAgICAgICB4MTogMCxcclxuICAgICAgICAgICAgICAgIHkxOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGdhbWVXaWR0aCAtIHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmV5J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmxvb3InLFxyXG4gICAgICAgICAgICAgICAgeDE6IDAsXHJcbiAgICAgICAgICAgICAgICB5MTogZ2FtZUhlaWdodCAtIHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBnYW1lV2lkdGggLSB3YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleSdcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdiYWxjb255IDEnLFxyXG4gICAgICAgICAgICAgICAgeDE6IDgwLCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeTE6IGdhbWVIZWlnaHQgLSB3YWxsV2lkdGggLSAyMSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdiYWxjb255IDInLCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHgxOiAyMCxcclxuICAgICAgICAgICAgICAgIHkxOiBnYW1lSGVpZ2h0IC0gd2FsbFdpZHRoIC0gNDEsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAneWVsbG93J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBPYmplY3QiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwga2V5cywgbWFwT2JqZWN0cywgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG4gICAgICAgIHRoaXMua2V5cyA9IGtleXMgXHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzID0gbWFwT2JqZWN0cy5vYmplY3RzXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoXHJcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodFxyXG5cclxuICAgICAgICAvLyBwbGF5ZXIgc3BlY2lmaWNhdGlvbnNcclxuICAgICAgICB0aGlzLndpZHRoID0gMTBcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgeDogNTAsXHJcbiAgICAgICAgICAgIHk6IDEwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sb3IgPSAncmVkJ1xyXG5cclxuICAgICAgICAvLyBtb3Zpbmcgc3BlY2lmaWNhdGlvbnNcclxuICAgICAgICB0aGlzLmN1cnJlbnRTcGVlZCA9IDBcclxuICAgICAgICB0aGlzLnNwZWVkQWNjZWxlcmF0aW9uID0gMC4xXHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDVcclxuICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSAnJ1xyXG5cclxuICAgICAgICB0aGlzLmluZXJ0aW9uID0gMC45OVxyXG5cclxuICAgICAgICAvLyBncmF2aXR5IHNwZWNpZmljYXRpb25zXHJcbiAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG4gICAgICAgIHRoaXMuZ3Jhdml0eUFjY2VsZXJhdGlvbiA9IDAuMVxyXG5cclxuICAgICAgICAvLyBqdW1wIHNldHRpbmdzXHJcbiAgICAgICAgdGhpcy5tYXhKdW1wSGVpZ2h0ID0gNDBcclxuICAgICAgICB0aGlzLnN0YXJ0SnVtcFNwZWVkID0gTWF0aC5zcXJ0KHRoaXMuZ3Jhdml0eUFjY2VsZXJhdGlvbiAqIHRoaXMubWF4SnVtcEhlaWdodCAqIDIpICsgdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uXHJcbiAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2VcclxuICAgICAgICB0aGlzLnRha2VPZmYgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRNb3ZlTGltaXRzKCkge1xyXG4gICAgICAgIGxldCBmbG9vcnMgPSBbXVxyXG4gICAgICAgIGxldCByb29mcyA9IFtdIFxyXG4gICAgICAgIGxldCBsZWZ0V2FsbHMgPSBbXSBcclxuICAgICAgICBsZXQgcmlnaHRXYWxscyA9IFtdXHJcblxyXG4gICAgICAgIC8vIHRlc3QsIG91ciBwb3NpdGlvbiBpcyBvbi91bmRlci9sZWZ0L3JpZ2h0IG1hcE9iamVjdCA/XHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzLmZvckVhY2goKGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBpbiBYIHJhbmdlIGJhbGNvbnkgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCBlbC54MSArIGVsLndpZHRoICYmIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiBlbC54MSkgeyAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBmaW5kIGFsbCBmbG9vcnNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA8PSBlbC55MSkgICAgZmxvb3JzLnB1c2goZWwueTEgLSB0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIHJvb2ZzXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gZWwueTEgKyBlbC5oZWlnaHQpIHJvb2ZzLnB1c2goZWwueTEgKyBlbC5oZWlnaHQpXHJcbiAgICAgICAgICAgIH0gICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgaW4gWSByYW5nZSBiYWxjb255XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IGVsLnkxICYmIHRoaXMucG9zaXRpb24ueSA8IGVsLnkxICsgZWwuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIHJpZ2h0IHdhbGxzXHJcbiAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIDw9IGVsLngxKSAgICByaWdodFdhbGxzLnB1c2goZWwueDEgLSB0aGlzLndpZHRoKVxyXG4gICAgICAgICAgICAgICAvLyBmaW5kIGFsbCBsZWZ0IHdhbGxzXHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSBlbC54MSArIGVsLndpZHRoKSBsZWZ0V2FsbHMucHVzaChlbC54MSArIGVsLndpZHRoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB7IGZsb29ycywgcm9vZnMsIGxlZnRXYWxscywgcmlnaHRXYWxscyB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShzeW1ib2wpIHtcclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5jdXJyZW50U3BlZWQpIDwgdGhpcy5tYXhTcGVlZCkgdGhpcy5jdXJyZW50U3BlZWQgKz0gc3ltYm9sICogdGhpcy5zcGVlZEFjY2VsZXJhdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAocm9vZikge1xyXG5cclxuICAgICAgICAvLyB3ZSBzdGFydCBqdW1wXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuSnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRha2VPZmYgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAtdGhpcy5zdGFydEp1bXBTcGVlZFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMgdGFrZW9mZiBtZWNoYW5pc21cclxuICAgICAgICBpZiAodGhpcy50YWtlT2ZmKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5mbG9vcigxMCAqIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCkgPT0gMCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPCByb29mKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRha2VPZmYgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgKz0gdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eShmbG9vcikge1xyXG4gICAgICAgIGxldCBncmF2aXR5ID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCBmbG9vcil7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID4gZmxvb3IpIHtcclxuICAgICAgICAgICAgICAgIGdyYXZpdHkgPSBmbG9vciAtIHRoaXMucG9zaXRpb24ueSBcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5ICs9IHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCArPSB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb25cclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKdW1wSGVpZ2h0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ3Jhdml0eVxyXG4gICAgfVxyXG5cclxuICAgIGZ1dHVyZVBvc2l0aW9uSW5PYmpjZXQoc3BlZWRYLCBzcGVlZFkpIHtcclxuICAgICAgICBsZXQgc3BlZWRzID0ge1xyXG4gICAgICAgICAgICB4OiBzcGVlZFgsXHJcbiAgICAgICAgICAgIHk6IHNwZWVkWVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzLmZvckVhY2goKGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBpbiBYIHJhbmdlIGJhbGNvbnkgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgc3BlZWRYIDwgZWwueDEgKyBlbC53aWR0aCAmJiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoICsgc3BlZWRYID4gZWwueDEpIHsgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgaW4gWSByYW5nZSBiYWxjb255ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgc3BlZWRZID4gZWwueTEgJiYgdGhpcy5wb3NpdGlvbi55ICsgc3BlZWRZIDwgZWwueTEgKyBlbC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWRYKSA+IE1hdGguYWJzKHNwZWVkWSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlT2ZmID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRzLnkgPSAwIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoc3BlZWRYKSA8IE1hdGguYWJzKHNwZWVkWSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcy54ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcyA9IHsgeDogMCwgeTogMH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSAgXHJcblxyXG4gICAgICAgIH0pIFxyXG5cclxuICAgICAgICByZXR1cm4gc3BlZWRzXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNvbnRleHRcclxuICAgICAgICBsZXQgc3BlZWRYID0gMFxyXG4gICAgICAgIGxldCBzcGVlZFkgPSAwXHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIG1vc3QgbmVhcmVzdCBsaW1pdHNcclxuICAgICAgICBsZXQgbGltaXRzID0gdGhpcy5maW5kTW92ZUxpbWl0cygpXHJcbiAgIFxyXG4gICAgICAgIGxldCBmbG9vciAgICAgPSBNYXRoLm1pbiguLi5saW1pdHMuZmxvb3JzKVxyXG4gICAgICAgIGxldCByb29mICAgICAgPSBNYXRoLm1heCguLi5saW1pdHMucm9vZnMpIFxyXG4gICAgICAgIGxldCByaWdodFdhbGwgPSBNYXRoLm1pbiguLi5saW1pdHMucmlnaHRXYWxscykgXHJcbiAgICAgICAgbGV0IGxlZnRXYWxsICA9IE1hdGgubWF4KC4uLmxpbWl0cy5sZWZ0V2FsbHMpICBcclxuXHJcbiAgICAgICAgLy8gbW92ZSBsZWZ0L3JpZ2h0XHJcbiAgICAgICAgaWYgICAgICAodGhpcy5rZXlzLnJpZ2h0ICYmIHRoaXMucG9zaXRpb24ueCA8IHJpZ2h0V2FsbCkgdGhpcy5tb3ZlKDEpXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5rZXlzLmxlZnQgICYmIHRoaXMucG9zaXRpb24ueSA+IGxlZnRXYWxsKSAgdGhpcy5tb3ZlKC0xKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpbmVydGlvblxyXG4gICAgICAgICAgICBpZiAoIE1hdGguZmxvb3IoMTAgKiBNYXRoLmFicyh0aGlzLmN1cnJlbnRTcGVlZCkpID09IDAgKSB0aGlzLmN1cnJlbnRTcGVlZCA9IDAgXHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5jdXJyZW50U3BlZWQgKj0gdGhpcy5pbmVydGlvbiAgICAgICAgXHJcbiAgICAgICAgfSBcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA+IDApIHsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5jdXJyZW50U3BlZWQgPiByaWdodFdhbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gcmlnaHRXYWxsIC0gdGhpcy5wb3NpdGlvbi54XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJyZW50U3BlZWQgPCAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmN1cnJlbnRTcGVlZCA8IGxlZnRXYWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVlZCA9IGxlZnRXYWxsIC0gdGhpcy5wb3NpdGlvbi54XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGVlZFggPSB0aGlzLmN1cnJlbnRTcGVlZFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBqdW1wXHJcbiAgICAgICAgaWYgKCAodGhpcy5rZXlzLnVwICYmIHRoaXMuY2FuSnVtcCApIHx8IHRoaXMudGFrZU9mZikgc3BlZWRZICs9IHRoaXMuanVtcChyb29mKVxyXG4gICAgICAgIC8vIGdyYXZpdHlcclxuICAgICAgICBpZiAoIXRoaXMudGFrZU9mZikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZFkgKz0gdGhpcy5ncmF2aXR5KGZsb29yKVxyXG5cclxuICAgICAgICBsZXQgbmV3U3BlZWRzID0gdGhpcy5mdXR1cmVQb3NpdGlvbkluT2JqY2V0KHNwZWVkWCwgc3BlZWRZKVxyXG5cclxuICAgICAgICAvLyBtb3ZlIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IG5ld1NwZWVkcy54XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IG5ld1NwZWVkcy55XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZHJhd1xyXG4gICAgICAgIGN0eC5zYXZlKClcclxuXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3IgXHJcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuXHJcbiAgICAgICAgLy8gdGVzdCB2ZXJzaW9uXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KCAodGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoKSAvIDIgLCAodGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQpIC8gMiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9