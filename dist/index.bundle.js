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



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const GAME_HEIGHT = canvas.clientHeight;
const GAME_WIDHT = canvas.clientWidth;
const WALL_WIDTH = 5;
let keyPressUp = new _scripts_keypressAciton_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
let player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](GAME_HEIGHT, GAME_WIDHT, ctx, keyPressUp, WALL_WIDTH);
let map = new _scripts_map_js__WEBPACK_IMPORTED_MODULE_2__["default"](GAME_HEIGHT, GAME_WIDHT, ctx, WALL_WIDTH);

function gameLoop() {
  ctx.clearRect(0, 0, GAME_WIDHT, GAME_HEIGHT);
  player.render();
  map.render();
  requestAnimationFrame(gameLoop);
}

gameLoop();

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
    document.addEventListener('keydown', this.handleKey.bind(this, true));
    document.addEventListener('keyup', this.handleKey.bind(this, false));
  }

  handleKey(value, event) {
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
  constructor(gameHeight, gameWidth, context, wallWidth) {
    this.wallWidth = wallWidth;
    this.map = [{
      // leftwall
      x1: 0,
      y1: 0,
      width: this.wallWidth,
      height: gameHeight,
      color: 'grey'
    }, {
      // right
      x1: gameWidth - this.wallWidth,
      y1: 0,
      width: this.wallWidth,
      height: gameHeight,
      color: 'grey'
    }, {
      // top
      x1: 0,
      y1: 0,
      width: gameWidth - this.wallWidth,
      height: this.wallWidth,
      color: 'grey'
    }, {
      // bottom
      x1: 0,
      y1: gameHeight - this.wallWidth,
      width: gameWidth - this.wallWidth,
      height: this.wallWidth,
      color: 'grey'
    }];
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
  constructor(gameHeight, gameWidth, context, keys, wallWidth) {
    this.context = context;
    this.keys = keys;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.wallWidth = wallWidth;
    this.width = 10;
    this.height = 10;
    this.speed = 2;
    this.position = {
      x: 50,
      y: 10
    };
    this.color = 'red';
  }

  render() {
    let ctx = this.context;
    let speed = 0;
    let gravity = 0;

    if (this.keys.right && this.position.x < this.gameWidth - this.wallWidth - this.width) {
      speed = this.speed;
    } else if (this.keys.left && this.position.x > this.wallWidth) {
      speed = -this.speed;
    }

    if (this.position.y < this.gameHeight - this.height - this.wallWidth) {
      gravity = this.speed;
    }

    this.position.x += speed;
    this.position.y += gravity; // draw

    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.restore();
  }

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2tleXByZXNzQWNpdG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJHQU1FX0hFSUdIVCIsImNsaWVudEhlaWdodCIsIkdBTUVfV0lESFQiLCJjbGllbnRXaWR0aCIsIldBTExfV0lEVEgiLCJrZXlQcmVzc1VwIiwiS2V5UHJlc3NVcCIsInBsYXllciIsIlBsYXllciIsIm1hcCIsIk1hcCIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29uc3RydWN0b3IiLCJsZWZ0IiwicmlnaHQiLCJ1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXkiLCJiaW5kIiwidmFsdWUiLCJldmVudCIsImtleUNvZGUiLCJnYW1lSGVpZ2h0IiwiZ2FtZVdpZHRoIiwiY29udGV4dCIsIndhbGxXaWR0aCIsIngxIiwieTEiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwic2F2ZSIsImZvckVhY2giLCJlbCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicmVzdG9yZSIsImtleXMiLCJzcGVlZCIsInBvc2l0aW9uIiwieCIsInkiLCJncmF2aXR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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S0MsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtuQixVQUFMLEdBQWtCLEtBQUtPLE1BQXZCLEdBQWdDLEtBQUtKLFNBQTNELEVBQXFFO0FBQ2pFaUIsYUFBTyxHQUFHLEtBQUtKLEtBQWY7QUFDSDs7QUFFRCxTQUFLQyxRQUFMLENBQWNDLENBQWQsSUFBbUJGLEtBQW5CO0FBQ0EsU0FBS0MsUUFBTCxDQUFjRSxDQUFkLElBQW1CQyxPQUFuQixDQWpCSyxDQW1CTDs7QUFDQS9DLE9BQUcsQ0FBQ29DLElBQUo7QUFFQXBDLE9BQUcsQ0FBQ3VDLFNBQUosR0FBZ0IsS0FBS0osS0FBckI7QUFDQW5DLE9BQUcsQ0FBQ3dDLFFBQUosQ0FBYSxLQUFLSSxRQUFMLENBQWNDLENBQTNCLEVBQThCLEtBQUtELFFBQUwsQ0FBY0UsQ0FBNUMsRUFBK0MsS0FBS2IsS0FBcEQsRUFBMkQsS0FBS0MsTUFBaEU7QUFFQWxDLE9BQUcsQ0FBQ3lDLE9BQUo7QUFDSDs7QUEvQ3VCLEMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vc2NyaXB0cy9wbGF5ZXIuanMnXHJcbmltcG9ydCBLZXlQcmVzc1VwIGZyb20gJy4vc2NyaXB0cy9rZXlwcmVzc0FjaXRvbi5qcydcclxuaW1wb3J0IE1hcCBmcm9tICcuL3NjcmlwdHMvbWFwLmpzJ1xyXG5cclxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKVxyXG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuXHJcbmNvbnN0IEdBTUVfSEVJR0hUID0gY2FudmFzLmNsaWVudEhlaWdodCBcclxuY29uc3QgR0FNRV9XSURIVCAgPSBjYW52YXMuY2xpZW50V2lkdGhcclxuY29uc3QgV0FMTF9XSURUSCAgPSA1XHJcblxyXG5sZXQga2V5UHJlc3NVcCA9IG5ldyBLZXlQcmVzc1VwKClcclxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoR0FNRV9IRUlHSFQsIEdBTUVfV0lESFQsIGN0eCwga2V5UHJlc3NVcCwgV0FMTF9XSURUSClcclxubGV0IG1hcCAgICA9IG5ldyBNYXAoR0FNRV9IRUlHSFQsIEdBTUVfV0lESFQsIGN0eCwgV0FMTF9XSURUSClcclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURIVCwgR0FNRV9IRUlHSFQpXHJcblxyXG4gICAgcGxheWVyLnJlbmRlcigpXHJcbiAgICBtYXAucmVuZGVyKClcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXHJcbn1cclxuXHJcbmdhbWVMb29wKClcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVByZXNzVXAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0ICA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlIFxyXG4gICAgICAgIHRoaXMudXAgICAgPSBmYWxzZVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCB0cnVlKSApXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIGZhbHNlKSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLZXkodmFsdWUsIGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIGxlZnRcclxuICAgICAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgY2FzZSA2NTogXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIC8vIGp1bXBcclxuICAgICAgICAgICAgY2FzZSAzODpcclxuICAgICAgICAgICAgY2FzZSA4NzogXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICAvLyByaWdodFxyXG4gICAgICAgICAgICBjYXNlIDM5OiBcclxuICAgICAgICAgICAgY2FzZSA2ODpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZUhlaWdodCwgZ2FtZVdpZHRoLCBjb250ZXh0LCB3YWxsV2lkdGgpIHtcclxuICAgICAgICB0aGlzLndhbGxXaWR0aCA9IHdhbGxXaWR0aFxyXG4gICAgICAgIHRoaXMubWFwID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZWZ0d2FsbFxyXG4gICAgICAgICAgICAgICAgeDE6IDAsXHJcbiAgICAgICAgICAgICAgICB5MTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZ2FtZUhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleSdcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICB4MTogZ2FtZVdpZHRoIC0gdGhpcy53YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB5MTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZ2FtZUhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdG9wXHJcbiAgICAgICAgICAgICAgICB4MTogMCxcclxuICAgICAgICAgICAgICAgIHkxOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGdhbWVXaWR0aCAtIHRoaXMud2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLndhbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JleSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gYm90dG9tXHJcbiAgICAgICAgICAgICAgICB4MTogMCxcclxuICAgICAgICAgICAgICAgIHkxOiBnYW1lSGVpZ2h0IC0gdGhpcy53YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZ2FtZVdpZHRoIC0gdGhpcy53YWxsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMud2FsbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmV5J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY29udGV4dFxyXG4gICAgICAgIGN0eC5zYXZlKClcclxuXHJcbiAgICAgICAgdGhpcy5tYXAuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBlbC5jb2xvclxyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoZWwueDEsIGVsLnkxLCBlbC53aWR0aCwgZWwuaGVpZ2h0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lSGVpZ2h0LCBnYW1lV2lkdGgsIGNvbnRleHQsIGtleXMsIHdhbGxXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcclxuICAgICAgICB0aGlzLmtleXMgPSBrZXlzIFxyXG5cclxuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0XHJcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGhcclxuICAgICAgICB0aGlzLndhbGxXaWR0aCA9IHdhbGxXaWR0aFxyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gMTBcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwXHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAyXHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IDUwLFxyXG4gICAgICAgICAgICB5OiAxMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbG9yID0gJ3JlZCdcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY29udGV4dFxyXG4gICAgICAgIGxldCBzcGVlZCA9IDBcclxuICAgICAgICBsZXQgZ3Jhdml0eSA9IDBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMua2V5cy5yaWdodCAmJiB0aGlzLnBvc2l0aW9uLnggPCB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2FsbFdpZHRoIC0gdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgICBzcGVlZCA9IHRoaXMuc3BlZWRcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5cy5sZWZ0ICYmIHRoaXMucG9zaXRpb24ueCA+IHRoaXMud2FsbFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHNwZWVkID0gLXRoaXMuc3BlZWRcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDwgdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQgLSB0aGlzLndhbGxXaWR0aCl7XHJcbiAgICAgICAgICAgIGdyYXZpdHkgPSB0aGlzLnNwZWVkXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHNwZWVkXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IGdyYXZpdHlcclxuICAgICAgICBcclxuICAgICAgICAvLyBkcmF3XHJcbiAgICAgICAgY3R4LnNhdmUoKVxyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvciBcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==