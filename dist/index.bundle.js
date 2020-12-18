/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player.js */ "./src/scripts/player.js");
/* harmony import */ var _scripts_playerAnimation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/playerAnimation.js */ "./src/scripts/playerAnimation.js");
/* harmony import */ var _scripts_keypressAciton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/keypressAciton.js */ "./src/scripts/keypressAciton.js");
/* harmony import */ var _scripts_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/map.js */ "./src/scripts/map.js");
/* harmony import */ var _scripts_mapObjects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/mapObjects.js */ "./src/scripts/mapObjects.js");
/* harmony import */ var _scripts_miniMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/miniMap.js */ "./src/scripts/miniMap.js");
/* harmony import */ var _scripts_parametrsForFixBags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/parametrsForFixBags.js */ "./src/scripts/parametrsForFixBags.js");
/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/canvas.js */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_cosnts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/cosnts.js */ "./src/scripts/cosnts.js");
/* harmony import */ var _scripts_II_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/II.js */ "./src/scripts/II.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_10__);











let globalId = {
  animation: ''
};
let mapObjects = new _scripts_mapObjects_js__WEBPACK_IMPORTED_MODULE_4__.default(); // player 1

let keyPressUp = new _scripts_keypressAciton_js__WEBPACK_IMPORTED_MODULE_2__.default('awdfg', globalId);
let player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__.default(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_7__.default, keyPressUp, mapObjects);
let playerAnimation = new _scripts_playerAnimation_js__WEBPACK_IMPORTED_MODULE_1__.default(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_7__.default, player, keyPressUp, 1);
let ii = new _scripts_II_js__WEBPACK_IMPORTED_MODULE_9__.default(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_7__.default, {}, mapObjects, player);
let map = new _scripts_map_js__WEBPACK_IMPORTED_MODULE_3__.default(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_7__.default, mapObjects, player.position); // let miniMap         = new MiniMap(ctx, mapObjects.objects, player, canvas_width, canvas_height)
// let displayParam    = new ParametrsForFixBags(ctx, player)

function gameLoop() {
  _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_7__.default.clearRect(0, 0, _scripts_cosnts_js__WEBPACK_IMPORTED_MODULE_8__.canvas_width, _scripts_cosnts_js__WEBPACK_IMPORTED_MODULE_8__.canvas_height);
  map.render();
  player.render();
  playerAnimation.render();
  ii.render(); // playerAnimation2.render()
  // miniMap.render()
  // displayParam.render()

  globalId.animation = requestAnimationFrame(gameLoop);
}

gameLoop();

/***/ }),

/***/ "./src/scripts/II.js":
/*!***************************!*\
  !*** ./src/scripts/II.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ II
/* harmony export */ });
/* harmony import */ var _cosnts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cosnts.js */ "./src/scripts/cosnts.js");

class II {
  constructor(context, keys, mapObjects, player) {
    this.context = context;
    this.keys = keys;
    this.mapObjects = mapObjects.objects;
    this.player = player; // player specifications

    this.width = 22;
    this.height = 64; // start position

    this.position = {
      x: 64 * 2,
      y: 64 * 4
    }; // moving specifications

    this.currentSpeed = 0;
    this.speedAcceleration = 0.1;
    this.maxSpeed = 5;
    this.lastDirection = '';
    this.inertion = 0.15; // gravity specifications

    this.gravityCurrentSpeed = 0;
    this.gravityAcceleration = 0.1; // jump settings

    this.maxJumpHeight = 64 * 2.3;
    this.startJumpSpeed = Math.sqrt(this.gravityAcceleration * this.maxJumpHeight * 2) + this.gravityAcceleration;
    this.canJump = false;
    this.takeOff = false; // attack

    this.attackPressed = false;
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
    if (this.currentSpeed < this.maxSpeed && symbol == 1) this.currentSpeed += this.speedAcceleration;else if (this.currentSpeed > -1 * this.maxSpeed && symbol == -1) this.currentSpeed -= this.speedAcceleration;
    this.currentSpeed = Math.ceil(this.currentSpeed * 100) / 100;
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

    if (this.keys.right && this.position.x < rightWall) this.move(1);else if (this.keys.left && this.position.x > leftWall) this.move(-1);else {
      // inertion
      if (Math.floor(10 * Math.abs(this.currentSpeed)) == 0) this.currentSpeed = 0; // else this.currentSpeed *= this.inertion        
      else {
          let sign;
          if (this.currentSpeed > 0) sign = -1;else if (this.currentSpeed < 0) sign = 1;else sign = 0;
          this.currentSpeed += sign * this.inertion;
          this.currentSpeed = Math.ceil(this.currentSpeed * 100) / 100;
        }
    } // helper with braking

    if (this.keys.right && this.position.x < rightWall && this.currentSpeed < 0 || this.keys.left && this.position.x > leftWall && this.currentSpeed > 0) {
      // inertion
      if (Math.floor(10 * Math.abs(this.currentSpeed)) == 0) this.currentSpeed = 0; // else this.currentSpeed *= this.inertion        
      else {
          let sign;
          if (this.currentSpeed > 0) sign = -1;else if (this.currentSpeed < 0) sign = 1;else sign = 0;
          this.currentSpeed += sign * this.inertion;
          this.currentSpeed = Math.ceil(this.currentSpeed * 100) / 100;
        }
    } // left/right wall


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
    this.position.y += newSpeeds.y; // for testing

    ctx.save();
    ctx.fillStyle = 'green';
    ctx.fillRect(_cosnts_js__WEBPACK_IMPORTED_MODULE_0__.centerX - this.player.position.x + this.position.x, _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.centerY - this.player.position.y + this.position.y, this.width, this.height);
    ctx.restore();
  }

}

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _cosnts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cosnts.js */ "./src/scripts/cosnts.js");

let root = document.getElementById('root');
root.classList.add('canvasContainer');
let canvas = document.createElement('canvas');
canvas.width = _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.canvas_width;
canvas.height = _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.canvas_height;
let ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
root.append(canvas);
window.addEventListener('resize', create());
document.addEventListener('onload', create());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ctx);

function create() {
  canvas.width = document.documentElement.clientWidth - 10;
  canvas.height = document.documentElement.clientHeight - 15;
}

/***/ }),

/***/ "./src/scripts/cosnts.js":
/*!*******************************!*\
  !*** ./src/scripts/cosnts.js ***!
  \*******************************/
/*! namespace exports */
/*! export GAME_HEIGHT [provided] [no usage info] [missing usage info prevents renaming] */
/*! export GAME_WIDTH [provided] [no usage info] [missing usage info prevents renaming] */
/*! export PLAYER_SPECIFICATION [provided] [no usage info] [missing usage info prevents renaming] */
/*! export WALL_WIDTH [provided] [no usage info] [missing usage info prevents renaming] */
/*! export animationCenterX [provided] [no usage info] [missing usage info prevents renaming] */
/*! export animationCenterY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export arr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export canvas_height [provided] [no usage info] [missing usage info prevents renaming] */
/*! export canvas_width [provided] [no usage info] [missing usage info prevents renaming] */
/*! export centerX [provided] [no usage info] [missing usage info prevents renaming] */
/*! export centerY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export heros [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GAME_HEIGHT": () => /* binding */ GAME_HEIGHT,
/* harmony export */   "GAME_WIDTH": () => /* binding */ GAME_WIDTH,
/* harmony export */   "canvas_height": () => /* binding */ canvas_height,
/* harmony export */   "canvas_width": () => /* binding */ canvas_width,
/* harmony export */   "WALL_WIDTH": () => /* binding */ WALL_WIDTH,
/* harmony export */   "centerX": () => /* binding */ centerX,
/* harmony export */   "centerY": () => /* binding */ centerY,
/* harmony export */   "animationCenterX": () => /* binding */ animationCenterX,
/* harmony export */   "animationCenterY": () => /* binding */ animationCenterY,
/* harmony export */   "heros": () => /* binding */ heros,
/* harmony export */   "PLAYER_SPECIFICATION": () => /* binding */ PLAYER_SPECIFICATION,
/* harmony export */   "arr": () => /* binding */ arr
/* harmony export */ });
/* harmony import */ var _images_hero1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hero1.png */ "./src/images/hero1.png");
/* harmony import */ var _images_hero2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/hero2.png */ "./src/images/hero2.png");
/* harmony import */ var _images_hero3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hero3.png */ "./src/images/hero3.png");
/* harmony import */ var _images_hero4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hero4.png */ "./src/images/hero4.png");




const GAME_HEIGHT = 64 * 14;
const GAME_WIDTH = 64 * 20;
const canvas_height = document.documentElement.clientHeight - 15;
const canvas_width = document.documentElement.clientWidth - 10;
const WALL_WIDTH = 64;
const PLAYER_SPECIFICATION = {
  phys: {
    width: 22,
    height: 64
  },
  animation: {
    width: 128,
    height: 128
  }
}; // physical center

const centerX = (canvas_width - PLAYER_SPECIFICATION.phys.width) / 2;
const centerY = (canvas_height - PLAYER_SPECIFICATION.phys.height) / 2; //animation center

const animationCenterX = (canvas_width - PLAYER_SPECIFICATION.animation.width) / 2;
const animationCenterY = (canvas_height - PLAYER_SPECIFICATION.animation.height) / 2;
const heros = {
  1: {
    src: _images_hero1_png__WEBPACK_IMPORTED_MODULE_0__.default,
    attckRange: 34
  },
  2: {
    src: _images_hero2_png__WEBPACK_IMPORTED_MODULE_1__.default,
    attckRange: 52
  },
  3: {
    src: _images_hero3_png__WEBPACK_IMPORTED_MODULE_2__.default,
    attckRange: 43
  },
  4: {
    src: _images_hero4_png__WEBPACK_IMPORTED_MODULE_3__.default,
    attckRange: 52
  }
};
const arr = [];

for (let i = 1; i < Math.ceil(GAME_WIDTH / 64); i++) {
  let oneOrTwo = Math.random() > 0.5 ? 0 : 64;
  arr.push(oneOrTwo);
}



/***/ }),

/***/ "./src/scripts/keypressAciton.js":
/*!***************************************!*\
  !*** ./src/scripts/keypressAciton.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ KeyPressUp
/* harmony export */ });
class KeyPressUp {
  constructor(key) {
    this.left = false;
    this.right = false;
    this.up = false;
    this.attack = false;
    this.block = false;
    document.addEventListener('keydown', this.handleKey.bind(this, true));
    document.addEventListener('keyup', this.handleKey.bind(this, false));
    this.arrKeys = [[65, 87, 68, 70, 71]];
    this.key = key == 'awdfg' ? 0 : 1;
  }

  handleKey(value, event) {
    let arr = this.arrKeys; // console.log(event.keyCode, value)

    switch (event.keyCode) {
      // left
      case arr[this.key][0]:
        this.left = value;
        break;
      // jump

      case arr[this.key][1]:
        this.up = value;
        break;
      // right

      case arr[this.key][2]:
        this.right = value;
        break;
      // attack

      case arr[this.key][3]:
        this.attack = value;
        break;
      // block 

      case arr[this.key][4]:
        this.block = value;
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
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Map
/* harmony export */ });
/* harmony import */ var _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Objects.png */ "./src/images/Objects.png");
/* harmony import */ var _images_deathThings_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/deathThings.png */ "./src/images/deathThings.png");
/* harmony import */ var _cosnts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cosnts.js */ "./src/scripts/cosnts.js");



class Map {
  constructor(context, mapObjects, playerPosition) {
    this.map = mapObjects.objects;
    this.playerPosition = playerPosition;
    this.context = context;
  }

  render() {
    let ctx = this.context;
    let offsetX = _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.centerX - this.playerPosition.x;
    let offsetY = _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.centerY - this.playerPosition.y;
    let img = new Image();
    img.src = _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__.default;
    let dethImg = new Image();
    dethImg.src = _images_deathThings_png__WEBPACK_IMPORTED_MODULE_1__.default;
    ctx.save(); //background

    for (let i = 1; i < Math.ceil(_cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_WIDTH / 64); i++) {
      for (let j = 1; j < Math.ceil(_cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_HEIGHT / 64); j++) {
        ctx.drawImage(img, 64, 0, 64, 64, 64 * i + offsetX, 64 * j + offsetY, 64, 64);
      }
    } // deth zone


    for (let i = 1; i < Math.ceil(_cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_WIDTH / 64); i++) {
      ctx.drawImage(dethImg, _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.arr[i - 1], 0, 64, 172, 64 * i + offsetX, _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_HEIGHT - 64 * 3.5 + offsetY, 64, 172);
    } // map objects


    this.map.forEach(el => {
      let drawImage = new Image();
      drawImage.src = el.image;
      ctx.fillStyle = el.bgColor;
      ctx.fillRect(el.x1 + offsetX, el.y1 + offsetY, el.width, el.height);

      if (el.standartSize) {
        for (let i = 0; i < Math.ceil(el.width / 64); i++) {
          for (let j = 0; j < Math.ceil(el.height / 64); j++) {
            ctx.drawImage(drawImage, el.imageStartX, el.imageStartY, el.imageW, el.imageH, 64 * i + el.x1 + offsetX, 64 * j + el.y1 + offsetY, 64, 64);
          }
        }
      }
    });
    ctx.restore();
  }

}

/***/ }),

/***/ "./src/scripts/mapObjects.js":
/*!***********************************!*\
  !*** ./src/scripts/mapObjects.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Objects.png */ "./src/images/Objects.png");
/* harmony import */ var _images_deathThings_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/deathThings.png */ "./src/images/deathThings.png");
/* harmony import */ var _cosnts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cosnts.js */ "./src/scripts/cosnts.js");




class MapObject {
  constructor() {
    this.objects = [{
      name: 'left wall',
      bgColor: 'black',
      image: _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__.default,
      imageStartY: 0,
      imageStartX: 0,
      imageW: 64,
      imageH: 64,
      x1: 0,
      y1: 0,
      width: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      height: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_HEIGHT,
      standartSize: true
    }, {
      name: 'right wall',
      bgColor: 'black',
      image: _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__.default,
      imageStartY: 0,
      imageStartX: 0,
      imageW: 64,
      imageH: 64,
      x1: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_WIDTH - _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      y1: 0,
      width: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      height: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_HEIGHT,
      standartSize: true
    }, {
      name: 'roof',
      bgColor: 'black',
      image: _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__.default,
      imageStartY: 0,
      imageStartX: 0,
      imageW: 64,
      imageH: 64,
      x1: 0,
      y1: 0,
      width: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_WIDTH - _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      height: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      standartSize: true
    }, {
      name: 'floor',
      bgColor: 'black',
      image: _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__.default,
      imageStartY: 0,
      imageStartX: 0,
      imageW: 64,
      imageH: 64,
      x1: 0,
      y1: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_HEIGHT - _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      width: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_WIDTH - _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      height: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      standartSize: true
    }, {
      name: 'balcony 1',
      bgColor: 'black',
      image: _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__.default,
      imageStartY: 0,
      imageStartX: 0,
      imageW: 64,
      imageH: 64,
      x1: 5 * _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      y1: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH * 8,
      width: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH * 10,
      height: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      standartSize: true
    }, {
      name: 'balcony 2',
      bgColor: 'black',
      image: _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__.default,
      imageStartY: 0,
      imageStartX: 0,
      imageW: 64,
      imageH: 64,
      x1: 6 * _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      y1: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH * 4 - 1,
      width: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH * 8,
      height: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      standartSize: true
    }, {
      name: 'balcony 3',
      bgColor: 'black',
      image: _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__.default,
      imageStartY: 0,
      imageStartX: 0,
      imageW: 64,
      imageH: 64,
      x1: 1 * _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      y1: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH * 6 - 1,
      width: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH * 2,
      height: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      standartSize: true
    }, {
      name: 'balcony 4',
      bgColor: 'black',
      image: _images_Objects_png__WEBPACK_IMPORTED_MODULE_0__.default,
      imageStartY: 0,
      imageStartX: 0,
      imageW: 64,
      imageH: 64,
      x1: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.GAME_WIDTH - _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH * 3,
      y1: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH * 6 - 1,
      width: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH * 2,
      height: _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.WALL_WIDTH,
      standartSize: true
    }];
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapObject);

/***/ }),

/***/ "./src/scripts/miniMap.js":
/*!********************************!*\
  !*** ./src/scripts/miniMap.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MiniMap
/* harmony export */ });
class MiniMap {
  constructor(ctx, mapObjects, player, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.player = player;
    this.mapObjects = [...mapObjects];
    this.position = {
      x: 0,
      y: 0
    };
    this.koef = 5;
    this.width = gameWidth / this.koef;
    this.height = gameHeight / this.koef;
  }

  render() {
    let ctx = this.ctx;
    ctx.save();
    ctx.stroke(); // background-color:

    ctx.fillStyle = 'transparent';
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

/***/ "./src/scripts/parametrsForFixBags.js":
/*!********************************************!*\
  !*** ./src/scripts/parametrsForFixBags.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ParametrsForFixBags
/* harmony export */ });
class ParametrsForFixBags {
  constructor(ctx, player) {
    this.ctx = ctx;
    this.player = player;
  }

  render() {
    let ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 100, 80);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'red'; // ctx.fillText('sp: ' + this.player.currentSpeed, 5, 25)
    // ctx.fillText('ac: ' + this.player.currentSpeed, 5, 50)
    // ctx.fillText('thing work: ' + this.player.someTest, 5, 75)

    ctx.fillText('yAc: ' + this.player.gravityCurrentSpeed, 5, 25);
    ctx.restore();
  }

}

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Player
/* harmony export */ });
/* harmony import */ var _cosnts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cosnts.js */ "./src/scripts/cosnts.js");

class Player {
  constructor(context, keys, mapObjects) {
    this.context = context;
    this.keys = keys;
    this.mapObjects = mapObjects.objects;
    this.center = {
      x: _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.centerX,
      y: _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.centerY
    }; // player specifications

    this.width = 22;
    this.height = 64; // start position

    this.position = {
      x: 64 * 5,
      y: 64 * 6
    }; // moving specifications

    this.currentSpeed = 0;
    this.speedAcceleration = 0.1;
    this.maxSpeed = 5;
    this.lastDirection = '';
    this.inertion = 0.15; // gravity specifications

    this.gravityCurrentSpeed = 0;
    this.gravityAcceleration = 0.1; // jump settings

    this.maxJumpHeight = 64 * 2.3;
    this.startJumpSpeed = Math.sqrt(this.gravityAcceleration * this.maxJumpHeight * 2) + this.gravityAcceleration;
    this.canJump = false;
    this.takeOff = false; // attack

    this.attackPressed = false;
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
    if (this.currentSpeed < this.maxSpeed && symbol == 1) this.currentSpeed += this.speedAcceleration;else if (this.currentSpeed > -1 * this.maxSpeed && symbol == -1) this.currentSpeed -= this.speedAcceleration;
    this.currentSpeed = Math.ceil(this.currentSpeed * 100) / 100;
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

    if (this.keys.right && this.position.x < rightWall) this.move(1);else if (this.keys.left && this.position.x > leftWall) this.move(-1);else {
      // inertion
      if (Math.floor(10 * Math.abs(this.currentSpeed)) == 0) this.currentSpeed = 0; // else this.currentSpeed *= this.inertion        
      else {
          let sign;
          if (this.currentSpeed > 0) sign = -1;else if (this.currentSpeed < 0) sign = 1;else sign = 0;
          this.currentSpeed += sign * this.inertion;
          this.currentSpeed = Math.ceil(this.currentSpeed * 100) / 100;
        }
    } // helper with braking

    if (this.keys.right && this.position.x < rightWall && this.currentSpeed < 0 || this.keys.left && this.position.x > leftWall && this.currentSpeed > 0) {
      // inertion
      if (Math.floor(10 * Math.abs(this.currentSpeed)) == 0) this.currentSpeed = 0; // else this.currentSpeed *= this.inertion        
      else {
          let sign;
          if (this.currentSpeed > 0) sign = -1;else if (this.currentSpeed < 0) sign = 1;else sign = 0;
          this.currentSpeed += sign * this.inertion;
          this.currentSpeed = Math.ceil(this.currentSpeed * 100) / 100;
        }
    } // left/right wall


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
    this.position.y += newSpeeds.y; // for testing

    ctx.save();
    ctx.fillStyle = 'red';
    ctx.fillRect(this.center.x, this.center.y, this.width, this.height);
    ctx.restore();
  }

}

/***/ }),

/***/ "./src/scripts/playerAnimation.js":
/*!****************************************!*\
  !*** ./src/scripts/playerAnimation.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PlayerAnimation
/* harmony export */ });
/* harmony import */ var _cosnts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cosnts.js */ "./src/scripts/cosnts.js");

class PlayerAnimation {
  constructor(context, player, keyPress, NumberOfHero) {
    this.ctx = context;
    this.keyPress = keyPress;
    this.player = player;
    this.centerX = _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.animationCenterX;
    this.centerY = _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.animationCenterY; // player sprites 

    this.hero = new Image();
    this.hero.src = _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.heros[NumberOfHero].src;
    this.size = 128; // moveing

    this.counter = 1;
    this.number = 2;
    this.X = 11; // direction

    this.lastDirection = 0; //attack animation: 

    this.currentImage = 0;
    this.count = 0;
    this.attackPressed = false;
  }

  leftRightAnimation(direction) {
    let imgRow = direction;
    if (this.lastDirection !== direction) this.counter = 0;
    if (this.counter < this.X) null;else if (this.number < 5) this.number++;else {
      this.counter = 0;
      this.number = 2;
    }
    this.X = (11 - Math.abs(Math.ceil(this.player.currentSpeed))) * (this.number - 1);
    this.drawStaticImage(this.size * this.number, imgRow);
    this.counter++;
    this.lastDirection = direction;
  }

  attack() {
    this.drawStaticImage(this.size * this.currentImage, this.size * 2 + this.lastDirection);
    this.attackPressed = true;
    this.player.attackPressed = true;

    if (this.count > 5) {
      this.count = 0;
      this.currentImage++;

      if (this.currentImage > 3) {
        this.currentImage = 0;
        this.attackPressed = false;
        this.player.attackPressed = false;
        this.stop = true;
      }
    } else this.count++;
  }

  drawStaticImage(xPosition, yPosition) {
    this.ctx.drawImage(this.hero, xPosition, yPosition, this.size, this.size, this.centerX, this.centerY, this.size, this.size);
  }

  render() {
    this.lastDirection = this.keyPress.right ? 0 : this.keyPress.left ? this.size : this.lastDirection;
    if (this.stop && !this.keyPress.attack) this.stop = false;
    if (this.attackPressed) this.attack(); //attack
    else if (this.keyPress.attack && !this.attackPressed && !this.stop) this.attack(); //attack
      else if (this.keyPress.block) this.drawStaticImage(4 * this.size, 2 * this.size + this.lastDirection); // block
        else if (!this.player.canJump) this.drawStaticImage(this.size, this.lastDirection); // fly         
          else {
              if (this.keyPress.right) this.leftRightAnimation(0); // right
              else if (this.keyPress.left) this.leftRightAnimation(this.size); // left
                else this.drawStaticImage(0, this.lastDirection); // stay      
            }
  }

}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  padding: 5px;\n  background: black;\n}\n\ncanvas {\n  border: 1px solid black;\n}\n\n.canvasContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://src/styles/style.sass","webpack://src/styles/style.css"],"names":[],"mappings":"AAAA;EACI,SAAS;EACT,UAAU;EACV,8BAAsB;UAAG,sBAAA;ACE7B;;AAEA;EDAI,YAAY;EAAQ,iBAAA;ACGxB;;AAEA;EDF8B,uBAAA;ACI9B;;AAEA;EDFI,oBAAiB;EACjB,oBAAmB;EACnB,aAAA;EACA,wBAAW;MAAG,qBAAA;UCKR,uBAAuB;EAC/B,yBAAyB;MACrB,sBAAsB;UAClB,mBAAmB;EAC3B,4BAA4B;EAC5B,6BAA6B;MACzB,0BAA0B;UACtB,sBAAsB;EAC9B,WAAW;AACb;AACA,oCAAoC","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

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

/***/ "./src/images/Objects.png":
/*!********************************!*\
  !*** ./src/images/Objects.png ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7a940e3c99a885d1cc2ffd4d43bf8313.png");

/***/ }),

/***/ "./src/images/deathThings.png":
/*!************************************!*\
  !*** ./src/images/deathThings.png ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7d5d9428177136b362e569053d9612b4.png");

/***/ }),

/***/ "./src/images/hero1.png":
/*!******************************!*\
  !*** ./src/images/hero1.png ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e50bb8587ee840add90e3317081c2b4f.png");

/***/ }),

/***/ "./src/images/hero2.png":
/*!******************************!*\
  !*** ./src/images/hero2.png ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3f0848e7afe8c768049f4fcf8db1f861.png");

/***/ }),

/***/ "./src/images/hero3.png":
/*!******************************!*\
  !*** ./src/images/hero3.png ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "09e4ba2c1e5797ffc65a9e8c0f3d0e97.png");

/***/ }),

/***/ "./src/images/hero4.png":
/*!******************************!*\
  !*** ./src/images/hero4.png ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "94c567f6cc1554e1572dbc92df9ef0d0.png");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
    var nonce =  true ? __webpack_require__.nc : 0;

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

  if (sourceMap && typeof btoa !== 'undefined') {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dhbWUvLi9zcmMvc2NyaXB0cy9JSS5qcyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzIiwid2VicGFjazovL2dhbWUvLi9zcmMvc2NyaXB0cy9jb3NudHMuanMiLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9zY3JpcHRzL2tleXByZXNzQWNpdG9uLmpzIiwid2VicGFjazovL2dhbWUvLi9zcmMvc2NyaXB0cy9tYXAuanMiLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9zY3JpcHRzL21hcE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9zY3JpcHRzL21pbmlNYXAuanMiLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9zY3JpcHRzL3BhcmFtZXRyc0ZvckZpeEJhZ3MuanMiLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL3NjcmlwdHMvcGxheWVyQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2dhbWUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL2ltYWdlcy9PYmplY3RzLnBuZyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL2ltYWdlcy9kZWF0aFRoaW5ncy5wbmciLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9pbWFnZXMvaGVybzEucG5nIiwid2VicGFjazovL2dhbWUvLi9zcmMvaW1hZ2VzL2hlcm8yLnBuZyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL2ltYWdlcy9oZXJvMy5wbmciLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9pbWFnZXMvaGVybzQucG5nIiwid2VicGFjazovL2dhbWUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZ2xvYmFsSWQiLCJhbmltYXRpb24iLCJtYXBPYmplY3RzIiwiTWFwT2JqZWN0Iiwia2V5UHJlc3NVcCIsIktleVByZXNzVXAiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJjdHgiLCJwbGF5ZXJBbmltYXRpb24iLCJQbGF5ZXJBbmltYXRpb24iLCJpaSIsIklJIiwibWFwIiwiTWFwIiwicG9zaXRpb24iLCJnYW1lTG9vcCIsImNhbnZhc193aWR0aCIsImNhbnZhc19oZWlnaHQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb25zdHJ1Y3RvciIsImNvbnRleHQiLCJrZXlzIiwib2JqZWN0cyIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJjdXJyZW50U3BlZWQiLCJzcGVlZEFjY2VsZXJhdGlvbiIsIm1heFNwZWVkIiwibGFzdERpcmVjdGlvbiIsImluZXJ0aW9uIiwiZ3Jhdml0eUN1cnJlbnRTcGVlZCIsImdyYXZpdHlBY2NlbGVyYXRpb24iLCJtYXhKdW1wSGVpZ2h0Iiwic3RhcnRKdW1wU3BlZWQiLCJNYXRoIiwic3FydCIsImNhbkp1bXAiLCJ0YWtlT2ZmIiwiYXR0YWNrUHJlc3NlZCIsImZpbmRNb3ZlTGltaXRzIiwiZmxvb3JzIiwicm9vZnMiLCJsZWZ0V2FsbHMiLCJyaWdodFdhbGxzIiwiZm9yRWFjaCIsImVsIiwieDEiLCJ5MSIsInB1c2giLCJtb3ZlIiwic3ltYm9sIiwiY2VpbCIsImp1bXAiLCJyb29mIiwiZmxvb3IiLCJncmF2aXR5IiwiY3VycmVudEp1bXBIZWlnaHQiLCJmdXR1cmVQb3NpdGlvbkluT2JqY2V0Iiwic3BlZWRYIiwic3BlZWRZIiwic3BlZWRzIiwiYWJzIiwibGltaXRzIiwibWluIiwibWF4IiwicmlnaHRXYWxsIiwibGVmdFdhbGwiLCJyaWdodCIsImxlZnQiLCJzaWduIiwidXAiLCJuZXdTcGVlZHMiLCJzYXZlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsInJlc3RvcmUiLCJyb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiYXBwZW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZSIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiR0FNRV9IRUlHSFQiLCJHQU1FX1dJRFRIIiwiV0FMTF9XSURUSCIsIlBMQVlFUl9TUEVDSUZJQ0FUSU9OIiwicGh5cyIsImFuaW1hdGlvbkNlbnRlclgiLCJhbmltYXRpb25DZW50ZXJZIiwiaGVyb3MiLCJzcmMiLCJoZXJvMSIsImF0dGNrUmFuZ2UiLCJoZXJvMiIsImhlcm8zIiwiaGVybzQiLCJhcnIiLCJpIiwib25lT3JUd28iLCJyYW5kb20iLCJrZXkiLCJhdHRhY2siLCJibG9jayIsImhhbmRsZUtleSIsImJpbmQiLCJhcnJLZXlzIiwidmFsdWUiLCJldmVudCIsImtleUNvZGUiLCJwbGF5ZXJQb3NpdGlvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwiaW1nIiwiSW1hZ2UiLCJXYWxsIiwiZGV0aEltZyIsIkRldGhUaGluZ3MiLCJqIiwiZHJhd0ltYWdlIiwiaW1hZ2UiLCJiZ0NvbG9yIiwic3RhbmRhcnRTaXplIiwiaW1hZ2VTdGFydFgiLCJpbWFnZVN0YXJ0WSIsImltYWdlVyIsImltYWdlSCIsIm5hbWUiLCJNaW5pTWFwIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsImtvZWYiLCJzdHJva2UiLCJjb2xvciIsIlBhcmFtZXRyc0ZvckZpeEJhZ3MiLCJmb250IiwiZmlsbFRleHQiLCJjZW50ZXIiLCJrZXlQcmVzcyIsIk51bWJlck9mSGVybyIsImhlcm8iLCJzaXplIiwiY291bnRlciIsIm51bWJlciIsIlgiLCJjdXJyZW50SW1hZ2UiLCJjb3VudCIsImxlZnRSaWdodEFuaW1hdGlvbiIsImRpcmVjdGlvbiIsImltZ1JvdyIsImRyYXdTdGF0aWNJbWFnZSIsInN0b3AiLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBLElBQUlBLFFBQVEsR0FBRztBQUNYQyxXQUFTLEVBQUU7QUFEQSxDQUFmO0FBSUEsSUFBSUMsVUFBVSxHQUFRLElBQUlDLDJEQUFKLEVBQXRCLEMsQ0FFQTs7QUFDQSxJQUFJQyxVQUFVLEdBQVEsSUFBSUMsK0RBQUosQ0FBZSxPQUFmLEVBQXdCTCxRQUF4QixDQUF0QjtBQUNBLElBQUlNLE1BQU0sR0FBWSxJQUFJQyx1REFBSixDQUFXQyx1REFBWCxFQUFnQkosVUFBaEIsRUFBNEJGLFVBQTVCLENBQXRCO0FBQ0EsSUFBSU8sZUFBZSxHQUFHLElBQUlDLGdFQUFKLENBQW9CRix1REFBcEIsRUFBeUJGLE1BQXpCLEVBQWlDRixVQUFqQyxFQUE2QyxD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QkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7OztVQzVRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7OztVQ2ZBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9zY3JpcHRzL3BsYXllci5qcydcclxuaW1wb3J0IFBsYXllckFuaW1hdGlvbiBmcm9tICcuL3NjcmlwdHMvcGxheWVyQW5pbWF0aW9uLmpzJ1xyXG5pbXBvcnQgS2V5UHJlc3NVcCBmcm9tICcuL3NjcmlwdHMva2V5cHJlc3NBY2l0b24uanMnXHJcblxyXG5pbXBvcnQgTWFwIGZyb20gJy4vc2NyaXB0cy9tYXAuanMnXHJcbmltcG9ydCBNYXBPYmplY3QgZnJvbSAnLi9zY3JpcHRzL21hcE9iamVjdHMuanMnXHJcbmltcG9ydCBNaW5pTWFwIGZyb20gJy4vc2NyaXB0cy9taW5pTWFwLmpzJ1xyXG5cclxuaW1wb3J0IFBhcmFtZXRyc0ZvckZpeEJhZ3MgZnJvbSAnLi9zY3JpcHRzL3BhcmFtZXRyc0ZvckZpeEJhZ3MuanMnXHJcbmltcG9ydCBjdHggZnJvbSAnLi9zY3JpcHRzL2NhbnZhcy5qcydcclxuaW1wb3J0IHtcclxuICAgIGNhbnZhc19oZWlnaHQsXHJcbiAgICBjYW52YXNfd2lkdGgsXHJcbn0gZnJvbSAnLi9zY3JpcHRzL2Nvc250cy5qcydcclxuXHJcbmltcG9ydCBJSSBmcm9tICcuL3NjcmlwdHMvSUkuanMnXHJcbmltcG9ydCAgJy4vc3R5bGVzL3N0eWxlLmNzcydcclxuXHJcblxyXG5sZXQgZ2xvYmFsSWQgPSB7XHJcbiAgICBhbmltYXRpb246ICcnXHJcbn1cclxuXHJcbmxldCBtYXBPYmplY3RzICAgICAgPSBuZXcgTWFwT2JqZWN0KClcclxuXHJcbi8vIHBsYXllciAxXHJcbmxldCBrZXlQcmVzc1VwICAgICAgPSBuZXcgS2V5UHJlc3NVcCgnYXdkZmcnLCBnbG9iYWxJZClcclxubGV0IHBsYXllciAgICAgICAgICA9IG5ldyBQbGF5ZXIoY3R4LCBrZXlQcmVzc1VwLCBtYXBPYmplY3RzKVxyXG5sZXQgcGxheWVyQW5pbWF0aW9uID0gbmV3IFBsYXllckFuaW1hdGlvbihjdHgsIHBsYXllciwga2V5UHJlc3NVcCwgMSlcclxuXHJcblxyXG5sZXQgaWkgPSBuZXcgSUkoY3R4LCB7fSwgbWFwT2JqZWN0cywgcGxheWVyKVxyXG5cclxuXHJcbmxldCBtYXAgICAgICAgICAgICAgPSBuZXcgTWFwKGN0eCwgbWFwT2JqZWN0cywgcGxheWVyLnBvc2l0aW9uKVxyXG4vLyBsZXQgbWluaU1hcCAgICAgICAgID0gbmV3IE1pbmlNYXAoY3R4LCBtYXBPYmplY3RzLm9iamVjdHMsIHBsYXllciwgY2FudmFzX3dpZHRoLCBjYW52YXNfaGVpZ2h0KVxyXG4vLyBsZXQgZGlzcGxheVBhcmFtICAgID0gbmV3IFBhcmFtZXRyc0ZvckZpeEJhZ3MoY3R4LCBwbGF5ZXIpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNfd2lkdGgsIGNhbnZhc19oZWlnaHQpXHJcbiAgICBtYXAucmVuZGVyKClcclxuXHJcbiAgICBwbGF5ZXIucmVuZGVyKClcclxuICAgIHBsYXllckFuaW1hdGlvbi5yZW5kZXIoKVxyXG5cclxuICAgIGlpLnJlbmRlcigpXHJcbiAgICAvLyBwbGF5ZXJBbmltYXRpb24yLnJlbmRlcigpXHJcblxyXG4gICAgLy8gbWluaU1hcC5yZW5kZXIoKVxyXG4gICAgLy8gZGlzcGxheVBhcmFtLnJlbmRlcigpXHJcblxyXG4gICAgZ2xvYmFsSWQuYW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxyXG59XHJcblxyXG5nYW1lTG9vcCgpXHJcbiIsImltcG9ydCB7XHJcbiAgICBjZW50ZXJYLFxyXG4gICAgY2VudGVyWSxcclxuICAgIFBMQVlFUl9TUEVDSUZJQ0FUSU9OXHJcbn0gZnJvbSAnLi9jb3NudHMuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJSSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBrZXlzLCBtYXBPYmplY3RzLCBwbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XHJcbiAgICAgICAgdGhpcy5rZXlzID0ga2V5cyBcclxuICAgICAgICB0aGlzLm1hcE9iamVjdHMgPSBtYXBPYmplY3RzLm9iamVjdHNcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcclxuIFxyXG4gICAgICAgIC8vIHBsYXllciBzcGVjaWZpY2F0aW9uc1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMlxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNjRcclxuXHJcbiAgICAgICAgLy8gc3RhcnQgcG9zaXRpb25cclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiA2NCAqIDIsXHJcbiAgICAgICAgICAgIHk6IDY0ICogNFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbW92aW5nIHNwZWNpZmljYXRpb25zXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgdGhpcy5zcGVlZEFjY2VsZXJhdGlvbiA9IDAuMVxyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSA1XHJcbiAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gJydcclxuXHJcbiAgICAgICAgdGhpcy5pbmVydGlvbiA9IDAuMTVcclxuXHJcbiAgICAgICAgLy8gZ3Jhdml0eSBzcGVjaWZpY2F0aW9uc1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuICAgICAgICB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb24gPSAwLjFcclxuXHJcbiAgICAgICAgLy8ganVtcCBzZXR0aW5nc1xyXG4gICAgICAgIHRoaXMubWF4SnVtcEhlaWdodCA9IDY0ICogMi4zXHJcbiAgICAgICAgdGhpcy5zdGFydEp1bXBTcGVlZCA9IE1hdGguc3FydCh0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb24gKiB0aGlzLm1heEp1bXBIZWlnaHQgKiAyKSArIHRoaXMuZ3Jhdml0eUFjY2VsZXJhdGlvblxyXG4gICAgICAgIHRoaXMuY2FuSnVtcCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50YWtlT2ZmID0gZmFsc2VcclxuXHJcbiAgICAgICAgLy8gYXR0YWNrXHJcbiAgICAgICAgdGhpcy5hdHRhY2tQcmVzc2VkID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmaW5kTW92ZUxpbWl0cygpIHtcclxuICAgICAgICBsZXQgZmxvb3JzID0gW11cclxuICAgICAgICBsZXQgcm9vZnMgPSBbXSBcclxuICAgICAgICBsZXQgbGVmdFdhbGxzID0gW10gXHJcbiAgICAgICAgbGV0IHJpZ2h0V2FsbHMgPSBbXVxyXG5cclxuICAgICAgICAvLyB0ZXN0LCBvdXIgcG9zaXRpb24gaXMgb24vdW5kZXIvbGVmdC9yaWdodCBtYXBPYmplY3QgP1xyXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgaW4gWCByYW5nZSBiYWxjb255IFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgZWwueDEgKyBlbC53aWR0aCAmJiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gZWwueDEpIHsgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gZmluZCBhbGwgZmxvb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPD0gZWwueTEpICAgIGZsb29ycy5wdXNoKGVsLnkxIC0gdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvLyBmaW5kIGFsbCByb29mc1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID49IGVsLnkxICsgZWwuaGVpZ2h0KSByb29mcy5wdXNoKGVsLnkxICsgZWwuaGVpZ2h0KVxyXG4gICAgICAgICAgICB9ICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGluIFkgcmFuZ2UgYmFsY29ueVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPiBlbC55MSAmJiB0aGlzLnBvc2l0aW9uLnkgPCBlbC55MSArIGVsLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAvLyBmaW5kIGFsbCByaWdodCB3YWxsc1xyXG4gICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA8PSBlbC54MSkgICAgcmlnaHRXYWxscy5wdXNoKGVsLngxIC0gdGhpcy53aWR0aClcclxuICAgICAgICAgICAgICAgLy8gZmluZCBhbGwgbGVmdCB3YWxsc1xyXG4gICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gZWwueDEgKyBlbC53aWR0aCkgbGVmdFdhbGxzLnB1c2goZWwueDEgKyBlbC53aWR0aClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4geyBmbG9vcnMsIHJvb2ZzLCBsZWZ0V2FsbHMsIHJpZ2h0V2FsbHMgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoc3ltYm9sKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWVkIDwgdGhpcy5tYXhTcGVlZCAmJiBzeW1ib2wgPT0gMSkgdGhpcy5jdXJyZW50U3BlZWQgKz0gIHRoaXMuc3BlZWRBY2NlbGVyYXRpb25cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA+IC0xICogdGhpcy5tYXhTcGVlZCAmJiBzeW1ib2wgPT0gLTEpIHRoaXMuY3VycmVudFNwZWVkIC09ICB0aGlzLnNwZWVkQWNjZWxlcmF0aW9uXHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gTWF0aC5jZWlsKHRoaXMuY3VycmVudFNwZWVkICogMTAwKSAvIDEwMCBcclxuICAgIH1cclxuXHJcbiAgICBqdW1wKHJvb2YpIHtcclxuXHJcbiAgICAgICAgLy8gd2Ugc3RhcnQganVtcFxyXG4gICAgICAgIGlmICh0aGlzLmNhbkp1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy50YWtlT2ZmID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gLXRoaXMuc3RhcnRKdW1wU3BlZWRcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzIHRha2VvZmYgbWVjaGFuaXNtXHJcbiAgICAgICAgaWYgKHRoaXMudGFrZU9mZikge1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoMTAgKiB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQpID09IDAgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkIDwgcm9vZikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWtlT2ZmID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkICs9IHRoaXMuZ3Jhdml0eUFjY2VsZXJhdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdyYXZpdHkoZmxvb3IpIHtcclxuICAgICAgICBsZXQgZ3Jhdml0eSA9IDBcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDwgZmxvb3Ipe1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA+IGZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5ID0gZmxvb3IgLSB0aGlzLnBvc2l0aW9uLnkgXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3Jhdml0eSArPSB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWRcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgKz0gdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FuSnVtcCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SnVtcEhlaWdodCA9IDBcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdyYXZpdHlcclxuICAgIH1cclxuXHJcbiAgICBmdXR1cmVQb3NpdGlvbkluT2JqY2V0KHNwZWVkWCwgc3BlZWRZKSB7XHJcbiAgICAgICAgbGV0IHNwZWVkcyA9IHtcclxuICAgICAgICAgICAgeDogc3BlZWRYLFxyXG4gICAgICAgICAgICB5OiBzcGVlZFlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgaW4gWCByYW5nZSBiYWxjb255ICBcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHNwZWVkWCA8IGVsLngxICsgZWwud2lkdGggJiYgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCArIHNwZWVkWCA+IGVsLngxKSB7ICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGluIFkgcmFuZ2UgYmFsY29ueSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHNwZWVkWSA+IGVsLnkxICYmIHRoaXMucG9zaXRpb24ueSArIHNwZWVkWSA8IGVsLnkxICsgZWwuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNwZWVkWCkgPiBNYXRoLmFicyhzcGVlZFkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcy55ID0gMCBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHNwZWVkWCkgPCBNYXRoLmFicyhzcGVlZFkpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZHMueCA9IDBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRha2VPZmYgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZHMgPSB7IHg6IDAsIHk6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0gIFxyXG5cclxuICAgICAgICB9KSBcclxuXHJcbiAgICAgICAgcmV0dXJuIHNwZWVkc1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jb250ZXh0XHJcbiAgICAgICAgbGV0IHNwZWVkWCA9IDBcclxuICAgICAgICBsZXQgc3BlZWRZID0gMFxyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSBtb3N0IG5lYXJlc3QgbGltaXRzXHJcbiAgICAgICAgbGV0IGxpbWl0cyA9IHRoaXMuZmluZE1vdmVMaW1pdHMoKVxyXG4gICBcclxuICAgICAgICBsZXQgZmxvb3IgICAgID0gTWF0aC5taW4oLi4ubGltaXRzLmZsb29ycylcclxuICAgICAgICBsZXQgcm9vZiAgICAgID0gTWF0aC5tYXgoLi4ubGltaXRzLnJvb2ZzKSBcclxuICAgICAgICBsZXQgcmlnaHRXYWxsID0gTWF0aC5taW4oLi4ubGltaXRzLnJpZ2h0V2FsbHMpIFxyXG4gICAgICAgIGxldCBsZWZ0V2FsbCAgPSBNYXRoLm1heCguLi5saW1pdHMubGVmdFdhbGxzKSAgXHJcblxyXG4gICAgICAgIC8vIG1vdmUgbGVmdC9yaWdodFxyXG4gICAgICAgIGlmICAgICAgKHRoaXMua2V5cy5yaWdodCAmJiB0aGlzLnBvc2l0aW9uLnggPCByaWdodFdhbGwpIHRoaXMubW92ZSgxKSAgICAgICAgXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5rZXlzLmxlZnQgICYmIHRoaXMucG9zaXRpb24ueCA+IGxlZnRXYWxsKSAgdGhpcy5tb3ZlKC0xKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpbmVydGlvblxyXG4gICAgICAgICAgICBpZiAoIE1hdGguZmxvb3IoMTAgKiBNYXRoLmFicyh0aGlzLmN1cnJlbnRTcGVlZCkpID09IDAgKSB0aGlzLmN1cnJlbnRTcGVlZCA9IDAgXHJcbiAgICAgICAgICAgIC8vIGVsc2UgdGhpcy5jdXJyZW50U3BlZWQgKj0gdGhpcy5pbmVydGlvbiAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpZ25cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA+IDApIHNpZ24gPSAtMVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJyZW50U3BlZWQgPCAwKSAgc2lnbiA9IDFcclxuICAgICAgICAgICAgICAgIGVsc2Ugc2lnbiA9IDBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkICs9IHNpZ24gKiB0aGlzLmluZXJ0aW9uICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVlZCA9ICBNYXRoLmNlaWwodGhpcy5jdXJyZW50U3BlZWQgKiAxMDApIC8gMTAwIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLy8gaGVscGVyIHdpdGggYnJha2luZ1xyXG4gICAgICAgIGlmICggKHRoaXMua2V5cy5yaWdodCAmJiB0aGlzLnBvc2l0aW9uLnggPCByaWdodFdhbGwgJiYgdGhpcy5jdXJyZW50U3BlZWQgPCAwKSB8fFxyXG4gICAgICAgICAgICAgKHRoaXMua2V5cy5sZWZ0ICAmJiB0aGlzLnBvc2l0aW9uLnggPiBsZWZ0V2FsbCAmJiB0aGlzLmN1cnJlbnRTcGVlZCA+IDApICkge1xyXG4gICAgICAgICAgICAvLyBpbmVydGlvblxyXG4gICAgICAgICAgICBpZiAoIE1hdGguZmxvb3IoMTAgKiBNYXRoLmFicyh0aGlzLmN1cnJlbnRTcGVlZCkpID09IDAgKSB0aGlzLmN1cnJlbnRTcGVlZCA9IDAgXHJcbiAgICAgICAgICAgIC8vIGVsc2UgdGhpcy5jdXJyZW50U3BlZWQgKj0gdGhpcy5pbmVydGlvbiAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpZ25cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA+IDApIHNpZ24gPSAtMVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdXJyZW50U3BlZWQgPCAwKSAgc2lnbiA9IDFcclxuICAgICAgICAgICAgICAgIGVsc2Ugc2lnbiA9IDBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkICs9IHNpZ24gKiB0aGlzLmluZXJ0aW9uICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVlZCA9ICBNYXRoLmNlaWwodGhpcy5jdXJyZW50U3BlZWQgKiAxMDApIC8gMTAwIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGxlZnQvcmlnaHQgd2FsbFxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA+IDApIHsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5jdXJyZW50U3BlZWQgPiByaWdodFdhbGwpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSByaWdodFdhbGwgLSB0aGlzLnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9ICBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA8IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMuY3VycmVudFNwZWVkIDwgbGVmdFdhbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gbGVmdFdhbGwgLSB0aGlzLnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwZWVkWCA9IHRoaXMuY3VycmVudFNwZWVkXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGp1bXBcclxuICAgICAgICBpZiAoICh0aGlzLmtleXMudXAgJiYgdGhpcy5jYW5KdW1wICkgfHwgdGhpcy50YWtlT2ZmKSBzcGVlZFkgKz0gdGhpcy5qdW1wKHJvb2YpXHJcbiAgICAgICAgLy8gZ3Jhdml0eVxyXG4gICAgICAgIGlmICghdGhpcy50YWtlT2ZmKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkWSArPSB0aGlzLmdyYXZpdHkoZmxvb3IpXHJcblxyXG4gICAgICAgIGxldCBuZXdTcGVlZHMgPSB0aGlzLmZ1dHVyZVBvc2l0aW9uSW5PYmpjZXQoc3BlZWRYLCBzcGVlZFkpXHJcblxyXG4gICAgICAgIC8vIG1vdmUgcG9zaXRpb25cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gbmV3U3BlZWRzLnhcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gbmV3U3BlZWRzLnlcclxuXHJcblxyXG4gICAgICAgIC8vIGZvciB0ZXN0aW5nXHJcbiAgICAgICAgY3R4LnNhdmUoKVxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KGNlbnRlclggLSB0aGlzLnBsYXllci5wb3NpdGlvbi54ICsgdGhpcy5wb3NpdGlvbi54LCBjZW50ZXJZIC0gdGhpcy5wbGF5ZXIucG9zaXRpb24ueSArIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgY2FudmFzX2hlaWdodCxcclxuICAgIGNhbnZhc193aWR0aCxcclxufSBmcm9tICcuL2Nvc250cy5qcydcclxuXHJcblxyXG5cclxuXHJcbmxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG5yb290LmNsYXNzTGlzdC5hZGQoJ2NhbnZhc0NvbnRhaW5lcicpXHJcblxyXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhc193aWR0aFxyXG4gICAgY2FudmFzLmhlaWdodCA9IGNhbnZhc19oZWlnaHRcclxuXHJcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG4gICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXHJcbiAgICBcclxucm9vdC5hcHBlbmQoY2FudmFzKVxyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjcmVhdGUoKSlcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb25sb2FkJywgY3JlYXRlKCkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjdHhcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcclxuICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDEwXHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIDE1XHJcbn0iLCJpbXBvcnQgaGVybzEgZnJvbSAnLi4vaW1hZ2VzL2hlcm8xLnBuZydcclxuaW1wb3J0IGhlcm8yIGZyb20gJy4uL2ltYWdlcy9oZXJvMi5wbmcnXHJcbmltcG9ydCBoZXJvMyBmcm9tICcuLi9pbWFnZXMvaGVybzMucG5nJ1xyXG5pbXBvcnQgaGVybzQgZnJvbSAnLi4vaW1hZ2VzL2hlcm80LnBuZydcclxuXHJcblxyXG5jb25zdCBHQU1FX0hFSUdIVCA9IDY0ICogMTRcclxuY29uc3QgR0FNRV9XSURUSCAgPSA2NCAqIDIwXHJcblxyXG5jb25zdCBjYW52YXNfaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIDE1XHJcbmNvbnN0IGNhbnZhc193aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDEwXHJcblxyXG5jb25zdCBXQUxMX1dJRFRIICA9IDY0XHJcblxyXG5jb25zdCBQTEFZRVJfU1BFQ0lGSUNBVElPTiA9IHtcclxuICAgIHBoeXM6IHtcclxuICAgICAgICB3aWR0aDogMjIsXHJcbiAgICAgICAgaGVpZ2h0OiA2NFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgIHdpZHRoOiAxMjgsXHJcbiAgICAgICAgaGVpZ2h0OiAxMjhcclxuICAgIH1cclxufVxyXG5cclxuLy8gcGh5c2ljYWwgY2VudGVyXHJcbmNvbnN0IGNlbnRlclggPSAoIGNhbnZhc193aWR0aCAtIFBMQVlFUl9TUEVDSUZJQ0FUSU9OLnBoeXMud2lkdGggKSAvIDIgXHJcbmNvbnN0IGNlbnRlclkgPSAoIGNhbnZhc19oZWlnaHQgLSBQTEFZRVJfU1BFQ0lGSUNBVElPTi5waHlzLmhlaWdodCApIC8gMiBcclxuXHJcblxyXG4vL2FuaW1hdGlvbiBjZW50ZXJcclxuY29uc3QgYW5pbWF0aW9uQ2VudGVyWCA9ICggY2FudmFzX3dpZHRoIC0gUExBWUVSX1NQRUNJRklDQVRJT04uYW5pbWF0aW9uLndpZHRoICkgLyAyIFxyXG5jb25zdCBhbmltYXRpb25DZW50ZXJZID0gKCBjYW52YXNfaGVpZ2h0IC0gUExBWUVSX1NQRUNJRklDQVRJT04uYW5pbWF0aW9uLmhlaWdodCApIC8gMiBcclxuXHJcblxyXG5cclxuY29uc3QgaGVyb3MgPSB7XHJcbiAgICAxOiB7XHJcbiAgICAgICAgc3JjOiBoZXJvMSxcclxuICAgICAgICBhdHRja1JhbmdlOiAzNFxyXG4gICAgfSxcclxuICAgIDI6IHtcclxuICAgICAgICBzcmM6IGhlcm8yLFxyXG4gICAgICAgIGF0dGNrUmFuZ2U6IDUyXHJcbiAgICB9LFxyXG4gICAgMzoge1xyXG4gICAgICAgIHNyYzogaGVybzMsXHJcbiAgICAgICAgYXR0Y2tSYW5nZTogNDNcclxuICAgIH0sXHJcbiAgICA0OiB7XHJcbiAgICAgICAgc3JjOiBoZXJvNCxcclxuICAgICAgICBhdHRja1JhbmdlOiA1MlxyXG4gICAgfSxcclxufVxyXG5cclxuXHJcbmNvbnN0IGFyciA9IFtdXHJcbmZvciAobGV0IGkgPSAxOyBpIDwgTWF0aC5jZWlsKEdBTUVfV0lEVEggLyA2NCk7IGkrKykge1xyXG4gICAgbGV0IG9uZU9yVHdvID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDAgOiA2NFxyXG4gICAgYXJyLnB1c2gob25lT3JUd28pXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBHQU1FX0hFSUdIVCxcclxuICAgIEdBTUVfV0lEVEgsXHJcbiAgICBjYW52YXNfaGVpZ2h0LFxyXG4gICAgY2FudmFzX3dpZHRoLFxyXG4gICAgV0FMTF9XSURUSCxcclxuICAgIGNlbnRlclgsXHJcbiAgICBjZW50ZXJZLFxyXG4gICAgYW5pbWF0aW9uQ2VudGVyWCxcclxuICAgIGFuaW1hdGlvbkNlbnRlclksXHJcbiAgICBoZXJvcyxcclxuICAgIFBMQVlFUl9TUEVDSUZJQ0FUSU9OLFxyXG4gICAgYXJyXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlQcmVzc1VwIHtcclxuICAgIGNvbnN0cnVjdG9yKGtleSkge1xyXG4gICAgICAgIHRoaXMubGVmdCAgID0gZmFsc2VcclxuICAgICAgICB0aGlzLnJpZ2h0ICA9IGZhbHNlIFxyXG4gICAgICAgIHRoaXMudXAgICAgID0gZmFsc2VcclxuICAgICAgICB0aGlzLmF0dGFjayA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ibG9jayAgPSBmYWxzZVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCB0cnVlKSApXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIGZhbHNlKSlcclxuXHJcbiAgICAgICAgdGhpcy5hcnJLZXlzID0gWyBbNjUsIDg3LCA2OCwgNzAsIDcxXSBdXHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXkgPT0gJ2F3ZGZnJyA/IDAgOiAxXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlS2V5KHZhbHVlLCBldmVudCkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmFycktleXNcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSwgdmFsdWUpXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIGxlZnRcclxuICAgICAgICAgICAgY2FzZSBhcnJbdGhpcy5rZXldWzBdOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICAvLyBqdW1wXHJcbiAgICAgICAgICAgIGNhc2UgYXJyW3RoaXMua2V5XVsxXTpcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgICAgIGNhc2UgYXJyW3RoaXMua2V5XVsyXTpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhdHRhY2tcclxuICAgICAgICAgICAgY2FzZSBhcnJbdGhpcy5rZXldWzNdOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2sgPSB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBibG9jayBcclxuICAgICAgICAgICAgY2FzZSBhcnJbdGhpcy5rZXldWzRdOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jayA9IHZhbHVlICBcclxuXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdhbGwgZnJvbSAnLi4vaW1hZ2VzL09iamVjdHMucG5nJ1xyXG5pbXBvcnQgRGV0aFRoaW5ncyBmcm9tICcuLi9pbWFnZXMvZGVhdGhUaGluZ3MucG5nJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEdBTUVfSEVJR0hULFxyXG4gICAgR0FNRV9XSURUSCxcclxuICAgIGNlbnRlclgsIFxyXG4gICAgY2VudGVyWSxcclxuICAgIGFyclxyXG59IGZyb20gJy4vY29zbnRzLmpzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBtYXBPYmplY3RzLCBwbGF5ZXJQb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwT2JqZWN0cy5vYmplY3RzXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJQb3NpdGlvbiA9IHBsYXllclBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jb250ZXh0XHJcblxyXG4gICAgICAgIGxldCBvZmZzZXRYID0gIGNlbnRlclggLSB0aGlzLnBsYXllclBvc2l0aW9uLnhcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IGNlbnRlclkgLSB0aGlzLnBsYXllclBvc2l0aW9uLnkgXHJcblxyXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgICAgIGltZy5zcmMgPSBXYWxsXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRldGhJbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgICAgIGRldGhJbWcuc3JjID0gRGV0aFRoaW5nc1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpXHJcblxyXG4gICAgICAgIC8vYmFja2dyb3VuZFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgTWF0aC5jZWlsKEdBTUVfV0lEVEggLyA2NCk7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IE1hdGguY2VpbChHQU1FX0hFSUdIVCAvNjQpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCA2NCwgMCwgNjQsIDY0LCA2NCAqIGkgKyBvZmZzZXRYLCA2NCAqIGogKyBvZmZzZXRZLCAgNjQsIDY0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkZXRoIHpvbmVcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IE1hdGguY2VpbChHQU1FX1dJRFRIIC8gNjQpOyBpKyspIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZGV0aEltZywgXHJcbiAgICAgICAgICAgICAgICBhcnJbaSAtIDFdLCAwLCBcclxuICAgICAgICAgICAgICAgIDY0LCAxNzIsIFxyXG4gICAgICAgICAgICAgICAgNjQgKiBpICsgb2Zmc2V0WCwgR0FNRV9IRUlHSFQgLSA2NCAqIDMuNSArIG9mZnNldFksICBcclxuICAgICAgICAgICAgICAgIDY0LCAxNzIpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gbWFwIG9iamVjdHNcclxuICAgICAgICB0aGlzLm1hcC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgbGV0IGRyYXdJbWFnZSA9IG5ldyBJbWFnZSgpXHJcbiAgICAgICAgICAgIGRyYXdJbWFnZS5zcmMgPSBlbC5pbWFnZVxyXG5cclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVsLmJnQ29sb3JcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGVsLngxICsgb2Zmc2V0WCwgZWwueTEgKyBvZmZzZXRZLCAgZWwud2lkdGgsIGVsLmhlaWdodClcclxuXHJcbiAgICAgICAgICAgIGlmIChlbC5zdGFuZGFydFNpemUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5jZWlsKGVsLndpZHRoIC8gNjQpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1hdGguY2VpbChlbC5oZWlnaHQgLzY0KTsgaisrKSB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShkcmF3SW1hZ2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5pbWFnZVN0YXJ0WCwgZWwuaW1hZ2VTdGFydFksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5pbWFnZVcsIGVsLmltYWdlSCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDY0ICogaSArIGVsLngxICsgb2Zmc2V0WCwgNjQgKiBqICsgZWwueTEgKyBvZmZzZXRZLCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDY0LCA2NClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV2FsbCBmcm9tICcuLi9pbWFnZXMvT2JqZWN0cy5wbmcnXHJcbmltcG9ydCBEZWF0aFRoaW5nIGZyb20gJy4uL2ltYWdlcy9kZWF0aFRoaW5ncy5wbmcnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgR0FNRV9IRUlHSFQsXHJcbiAgICBHQU1FX1dJRFRILFxyXG4gICAgV0FMTF9XSURUSFxyXG59IGZyb20gJy4vY29zbnRzLmpzJ1xyXG5cclxuY2xhc3MgTWFwT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2xlZnQgd2FsbCcsXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFdhbGwsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVN0YXJ0WTogMCxcclxuICAgICAgICAgICAgICAgIGltYWdlU3RhcnRYOiAwLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VXOiA2NCxcclxuICAgICAgICAgICAgICAgIGltYWdlSDogNjQsXHJcbiAgICAgICAgICAgICAgICB4MTogMCxcclxuICAgICAgICAgICAgICAgIHkxOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFdBTExfV0lEVEgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IEdBTUVfSEVJR0hULFxyXG4gICAgICAgICAgICAgICAgc3RhbmRhcnRTaXplOiB0cnVlXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncmlnaHQgd2FsbCcsXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFdhbGwsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVN0YXJ0WTogMCxcclxuICAgICAgICAgICAgICAgIGltYWdlU3RhcnRYOiAwLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VXOiA2NCxcclxuICAgICAgICAgICAgICAgIGltYWdlSDogNjQsXHJcbiAgICAgICAgICAgICAgICB4MTogIEdBTUVfV0lEVEggLSBXQUxMX1dJRFRILFxyXG4gICAgICAgICAgICAgICAgeTE6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogV0FMTF9XSURUSCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogR0FNRV9IRUlHSFQsXHJcbiAgICAgICAgICAgICAgICBzdGFuZGFydFNpemU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jvb2YnLFxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBXYWxsLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTdGFydFk6IDAsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVN0YXJ0WDogMCxcclxuICAgICAgICAgICAgICAgIGltYWdlVzogNjQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUg6IDY0LFxyXG4gICAgICAgICAgICAgICAgeDE6IDAsXHJcbiAgICAgICAgICAgICAgICB5MTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAgR0FNRV9XSURUSCAtIFdBTExfV0lEVEgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFdBTExfV0lEVEgsXHJcbiAgICAgICAgICAgICAgICBzdGFuZGFydFNpemU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zsb29yJyxcclxuICAgICAgICAgICAgICAgIGJnQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogV2FsbCxcclxuICAgICAgICAgICAgICAgIGltYWdlU3RhcnRZOiAwLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTdGFydFg6IDAsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVc6IDY0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VIOiA2NCxcclxuICAgICAgICAgICAgICAgIHgxOiAwLFxyXG4gICAgICAgICAgICAgICAgeTE6IEdBTUVfSEVJR0hUIC0gV0FMTF9XSURUSCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAgR0FNRV9XSURUSCAtIFdBTExfV0lEVEgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFdBTExfV0lEVEgsXHJcbiAgICAgICAgICAgICAgICBzdGFuZGFydFNpemU6IHRydWVcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdiYWxjb255IDEnLFxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBXYWxsLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTdGFydFk6IDAsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVN0YXJ0WDogMCxcclxuICAgICAgICAgICAgICAgIGltYWdlVzogNjQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUg6IDY0LFxyXG4gICAgICAgICAgICAgICAgeDE6IDUgKiBXQUxMX1dJRFRILCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeTE6ICBXQUxMX1dJRFRIICogOCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBXQUxMX1dJRFRIICogMTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFdBTExfV0lEVEgsXHJcbiAgICAgICAgICAgICAgICBzdGFuZGFydFNpemU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2JhbGNvbnkgMicsXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFdhbGwsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVN0YXJ0WTogMCxcclxuICAgICAgICAgICAgICAgIGltYWdlU3RhcnRYOiAwLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VXOiA2NCxcclxuICAgICAgICAgICAgICAgIGltYWdlSDogNjQsXHJcbiAgICAgICAgICAgICAgICB4MTogNiAqIFdBTExfV0lEVEgsICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB5MTogV0FMTF9XSURUSCAqIDQgLSAxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFdBTExfV0lEVEggKiA4LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBXQUxMX1dJRFRILFxyXG4gICAgICAgICAgICAgICAgc3RhbmRhcnRTaXplOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdiYWxjb255IDMnLFxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBXYWxsLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTdGFydFk6IDAsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVN0YXJ0WDogMCxcclxuICAgICAgICAgICAgICAgIGltYWdlVzogNjQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUg6IDY0LFxyXG4gICAgICAgICAgICAgICAgeDE6IDEgKiBXQUxMX1dJRFRILCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeTE6IFdBTExfV0lEVEggKiA2IC0gMSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBXQUxMX1dJRFRIICogMixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogV0FMTF9XSURUSCxcclxuICAgICAgICAgICAgICAgIHN0YW5kYXJ0U2l6ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnYmFsY29ueSA0JyxcclxuICAgICAgICAgICAgICAgIGJnQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogV2FsbCxcclxuICAgICAgICAgICAgICAgIGltYWdlU3RhcnRZOiAwLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTdGFydFg6IDAsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVc6IDY0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VIOiA2NCxcclxuICAgICAgICAgICAgICAgIHgxOiBHQU1FX1dJRFRIIC0gV0FMTF9XSURUSCAqIDMsICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB5MTogV0FMTF9XSURUSCAqIDYgLSAxLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFdBTExfV0lEVEggKiAyLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBXQUxMX1dJRFRILFxyXG4gICAgICAgICAgICAgICAgc3RhbmRhcnRTaXplOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBPYmplY3QiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5pTWFwe1xyXG4gICAgY29uc3RydWN0b3IoY3R4LCBtYXBPYmplY3RzLCBwbGF5ZXIsIGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyXHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzID0gWyBcclxuICAgICAgICAgICAgLi4ubWFwT2JqZWN0cywgICAgICAgICAgICBcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMua29lZiA9IDVcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGdhbWVXaWR0aCAvIHRoaXMua29lZlxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZUhlaWdodCAvIHRoaXMua29lZlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jdHhcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKVxyXG4gICAgICAgIGN0eC5zdHJva2UoKVxyXG5cclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOlxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAndHJhbnNwYXJlbnQnXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuXHJcblxyXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGVsLmNvbG9yXHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChlbC54MSAvIHRoaXMua29lZiwgZWwueTEgLyB0aGlzLmtvZWYsIGVsLndpZHRoIC8gdGhpcy5rb2VmLCBlbC5oZWlnaHQgLyB0aGlzLmtvZWYpXHJcbiAgICAgICAgfSkgICAgICAgIFxyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5wbGF5ZXIuY29sb3JcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wbGF5ZXIucG9zaXRpb24ueCAvIHRoaXMua29lZiwgdGhpcy5wbGF5ZXIucG9zaXRpb24ueSAvIHRoaXMua29lZiwgdGhpcy5wbGF5ZXIud2lkdGggLyB0aGlzLmtvZWYsIHRoaXMucGxheWVyLmhlaWdodCAvIHRoaXMua29lZilcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKVxyXG5cclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbWV0cnNGb3JGaXhCYWdzIHtcclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgcGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHggXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY3R4IFxyXG5cclxuICAgICAgICBjdHguc2F2ZSgpXHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIDEwMCwgODApXHJcblxyXG4gICAgICAgIGN0eC5mb250ID0gJzMwcHggQXJpYWwnXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnXHJcbiAgICAgICAgLy8gY3R4LmZpbGxUZXh0KCdzcDogJyArIHRoaXMucGxheWVyLmN1cnJlbnRTcGVlZCwgNSwgMjUpXHJcbiAgICAgICAgLy8gY3R4LmZpbGxUZXh0KCdhYzogJyArIHRoaXMucGxheWVyLmN1cnJlbnRTcGVlZCwgNSwgNTApXHJcbiAgICAgICAgLy8gY3R4LmZpbGxUZXh0KCd0aGluZyB3b3JrOiAnICsgdGhpcy5wbGF5ZXIuc29tZVRlc3QsIDUsIDc1KVxyXG4gICAgICAgIGN0eC5maWxsVGV4dCgneUFjOiAnICsgdGhpcy5wbGF5ZXIuZ3Jhdml0eUN1cnJlbnRTcGVlZCwgNSwgMjUpXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIGNlbnRlclgsXHJcbiAgICBjZW50ZXJZLFxyXG4gICAgUExBWUVSX1NQRUNJRklDQVRJT05cclxufSBmcm9tICcuL2Nvc250cy5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBrZXlzLCBtYXBPYmplY3RzKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxyXG4gICAgICAgIHRoaXMua2V5cyA9IGtleXMgXHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzID0gbWFwT2JqZWN0cy5vYmplY3RzXHJcblxyXG4gICAgICAgIHRoaXMuY2VudGVyID0ge1xyXG4gICAgICAgICAgICB4OiBjZW50ZXJYLFxyXG4gICAgICAgICAgICB5OiBjZW50ZXJZXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy8gcGxheWVyIHNwZWNpZmljYXRpb25zXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDIyXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2NFxyXG5cclxuICAgICAgICAvLyBzdGFydCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IDY0ICogNSxcclxuICAgICAgICAgICAgeTogNjQgKiA2XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBtb3Zpbmcgc3BlY2lmaWNhdGlvbnNcclxuICAgICAgICB0aGlzLmN1cnJlbnRTcGVlZCA9IDBcclxuICAgICAgICB0aGlzLnNwZWVkQWNjZWxlcmF0aW9uID0gMC4xXHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDVcclxuICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSAnJ1xyXG5cclxuICAgICAgICB0aGlzLmluZXJ0aW9uID0gMC4xNVxyXG5cclxuICAgICAgICAvLyBncmF2aXR5IHNwZWNpZmljYXRpb25zXHJcbiAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG4gICAgICAgIHRoaXMuZ3Jhdml0eUFjY2VsZXJhdGlvbiA9IDAuMVxyXG5cclxuICAgICAgICAvLyBqdW1wIHNldHRpbmdzXHJcbiAgICAgICAgdGhpcy5tYXhKdW1wSGVpZ2h0ID0gNjQgKiAyLjNcclxuICAgICAgICB0aGlzLnN0YXJ0SnVtcFNwZWVkID0gTWF0aC5zcXJ0KHRoaXMuZ3Jhdml0eUFjY2VsZXJhdGlvbiAqIHRoaXMubWF4SnVtcEhlaWdodCAqIDIpICsgdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uXHJcbiAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2VcclxuICAgICAgICB0aGlzLnRha2VPZmYgPSBmYWxzZVxyXG5cclxuICAgICAgICAvLyBhdHRhY2tcclxuICAgICAgICB0aGlzLmF0dGFja1ByZXNzZWQgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRNb3ZlTGltaXRzKCkge1xyXG4gICAgICAgIGxldCBmbG9vcnMgPSBbXVxyXG4gICAgICAgIGxldCByb29mcyA9IFtdIFxyXG4gICAgICAgIGxldCBsZWZ0V2FsbHMgPSBbXSBcclxuICAgICAgICBsZXQgcmlnaHRXYWxscyA9IFtdXHJcblxyXG4gICAgICAgIC8vIHRlc3QsIG91ciBwb3NpdGlvbiBpcyBvbi91bmRlci9sZWZ0L3JpZ2h0IG1hcE9iamVjdCA/XHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzLmZvckVhY2goKGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBpbiBYIHJhbmdlIGJhbGNvbnkgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCBlbC54MSArIGVsLndpZHRoICYmIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiBlbC54MSkgeyAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBmaW5kIGFsbCBmbG9vcnNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA8PSBlbC55MSkgICAgZmxvb3JzLnB1c2goZWwueTEgLSB0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIHJvb2ZzXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gZWwueTEgKyBlbC5oZWlnaHQpIHJvb2ZzLnB1c2goZWwueTEgKyBlbC5oZWlnaHQpXHJcbiAgICAgICAgICAgIH0gICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgaW4gWSByYW5nZSBiYWxjb255XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IGVsLnkxICYmIHRoaXMucG9zaXRpb24ueSA8IGVsLnkxICsgZWwuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIHJpZ2h0IHdhbGxzXHJcbiAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIDw9IGVsLngxKSAgICByaWdodFdhbGxzLnB1c2goZWwueDEgLSB0aGlzLndpZHRoKVxyXG4gICAgICAgICAgICAgICAvLyBmaW5kIGFsbCBsZWZ0IHdhbGxzXHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSBlbC54MSArIGVsLndpZHRoKSBsZWZ0V2FsbHMucHVzaChlbC54MSArIGVsLndpZHRoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB7IGZsb29ycywgcm9vZnMsIGxlZnRXYWxscywgcmlnaHRXYWxscyB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShzeW1ib2wpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3BlZWQgPCB0aGlzLm1heFNwZWVkICYmIHN5bWJvbCA9PSAxKSB0aGlzLmN1cnJlbnRTcGVlZCArPSAgdGhpcy5zcGVlZEFjY2VsZXJhdGlvblxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudFNwZWVkID4gLTEgKiB0aGlzLm1heFNwZWVkICYmIHN5bWJvbCA9PSAtMSkgdGhpcy5jdXJyZW50U3BlZWQgLT0gIHRoaXMuc3BlZWRBY2NlbGVyYXRpb25cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50U3BlZWQgKiAxMDApIC8gMTAwIFxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAocm9vZikge1xyXG5cclxuICAgICAgICAvLyB3ZSBzdGFydCBqdW1wXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuSnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRha2VPZmYgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAtdGhpcy5zdGFydEp1bXBTcGVlZFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMgdGFrZW9mZiBtZWNoYW5pc21cclxuICAgICAgICBpZiAodGhpcy50YWtlT2ZmKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5mbG9vcigxMCAqIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCkgPT0gMCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPCByb29mKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRha2VPZmYgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgKz0gdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eShmbG9vcikge1xyXG4gICAgICAgIGxldCBncmF2aXR5ID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCBmbG9vcil7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID4gZmxvb3IpIHtcclxuICAgICAgICAgICAgICAgIGdyYXZpdHkgPSBmbG9vciAtIHRoaXMucG9zaXRpb24ueSBcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5ICs9IHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCArPSB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb25cclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKdW1wSGVpZ2h0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ3Jhdml0eVxyXG4gICAgfVxyXG5cclxuICAgIGZ1dHVyZVBvc2l0aW9uSW5PYmpjZXQoc3BlZWRYLCBzcGVlZFkpIHtcclxuICAgICAgICBsZXQgc3BlZWRzID0ge1xyXG4gICAgICAgICAgICB4OiBzcGVlZFgsXHJcbiAgICAgICAgICAgIHk6IHNwZWVkWVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzLmZvckVhY2goKGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBpbiBYIHJhbmdlIGJhbGNvbnkgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgc3BlZWRYIDwgZWwueDEgKyBlbC53aWR0aCAmJiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoICsgc3BlZWRYID4gZWwueDEpIHsgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgaW4gWSByYW5nZSBiYWxjb255ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgc3BlZWRZID4gZWwueTEgJiYgdGhpcy5wb3NpdGlvbi55ICsgc3BlZWRZIDwgZWwueTEgKyBlbC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWRYKSA+IE1hdGguYWJzKHNwZWVkWSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlT2ZmID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRzLnkgPSAwIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoc3BlZWRYKSA8IE1hdGguYWJzKHNwZWVkWSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcy54ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcyA9IHsgeDogMCwgeTogMH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSAgXHJcblxyXG4gICAgICAgIH0pIFxyXG5cclxuICAgICAgICByZXR1cm4gc3BlZWRzXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNvbnRleHRcclxuICAgICAgICBsZXQgc3BlZWRYID0gMFxyXG4gICAgICAgIGxldCBzcGVlZFkgPSAwXHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIG1vc3QgbmVhcmVzdCBsaW1pdHNcclxuICAgICAgICBsZXQgbGltaXRzID0gdGhpcy5maW5kTW92ZUxpbWl0cygpXHJcbiAgIFxyXG4gICAgICAgIGxldCBmbG9vciAgICAgPSBNYXRoLm1pbiguLi5saW1pdHMuZmxvb3JzKVxyXG4gICAgICAgIGxldCByb29mICAgICAgPSBNYXRoLm1heCguLi5saW1pdHMucm9vZnMpIFxyXG4gICAgICAgIGxldCByaWdodFdhbGwgPSBNYXRoLm1pbiguLi5saW1pdHMucmlnaHRXYWxscykgXHJcbiAgICAgICAgbGV0IGxlZnRXYWxsICA9IE1hdGgubWF4KC4uLmxpbWl0cy5sZWZ0V2FsbHMpICBcclxuXHJcbiAgICAgICAgLy8gbW92ZSBsZWZ0L3JpZ2h0XHJcbiAgICAgICAgaWYgICAgICAodGhpcy5rZXlzLnJpZ2h0ICYmIHRoaXMucG9zaXRpb24ueCA8IHJpZ2h0V2FsbCkgdGhpcy5tb3ZlKDEpICAgICAgICBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleXMubGVmdCAgJiYgdGhpcy5wb3NpdGlvbi54ID4gbGVmdFdhbGwpICB0aGlzLm1vdmUoLTEpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGluZXJ0aW9uXHJcbiAgICAgICAgICAgIGlmICggTWF0aC5mbG9vcigxMCAqIE1hdGguYWJzKHRoaXMuY3VycmVudFNwZWVkKSkgPT0gMCApIHRoaXMuY3VycmVudFNwZWVkID0gMCBcclxuICAgICAgICAgICAgLy8gZWxzZSB0aGlzLmN1cnJlbnRTcGVlZCAqPSB0aGlzLmluZXJ0aW9uICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2lnblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWVkID4gMCkgc2lnbiA9IC0xXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA8IDApICBzaWduID0gMVxyXG4gICAgICAgICAgICAgICAgZWxzZSBzaWduID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgKz0gc2lnbiAqIHRoaXMuaW5lcnRpb24gICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gIE1hdGguY2VpbCh0aGlzLmN1cnJlbnRTcGVlZCAqIDEwMCkgLyAxMDAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyBoZWxwZXIgd2l0aCBicmFraW5nXHJcbiAgICAgICAgaWYgKCAodGhpcy5rZXlzLnJpZ2h0ICYmIHRoaXMucG9zaXRpb24ueCA8IHJpZ2h0V2FsbCAmJiB0aGlzLmN1cnJlbnRTcGVlZCA8IDApIHx8XHJcbiAgICAgICAgICAgICAodGhpcy5rZXlzLmxlZnQgICYmIHRoaXMucG9zaXRpb24ueCA+IGxlZnRXYWxsICYmIHRoaXMuY3VycmVudFNwZWVkID4gMCkgKSB7XHJcbiAgICAgICAgICAgIC8vIGluZXJ0aW9uXHJcbiAgICAgICAgICAgIGlmICggTWF0aC5mbG9vcigxMCAqIE1hdGguYWJzKHRoaXMuY3VycmVudFNwZWVkKSkgPT0gMCApIHRoaXMuY3VycmVudFNwZWVkID0gMCBcclxuICAgICAgICAgICAgLy8gZWxzZSB0aGlzLmN1cnJlbnRTcGVlZCAqPSB0aGlzLmluZXJ0aW9uICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2lnblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWVkID4gMCkgc2lnbiA9IC0xXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA8IDApICBzaWduID0gMVxyXG4gICAgICAgICAgICAgICAgZWxzZSBzaWduID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgKz0gc2lnbiAqIHRoaXMuaW5lcnRpb24gICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gIE1hdGguY2VpbCh0aGlzLmN1cnJlbnRTcGVlZCAqIDEwMCkgLyAxMDAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gbGVmdC9yaWdodCB3YWxsXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWVkID4gMCkgeyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmN1cnJlbnRTcGVlZCA+IHJpZ2h0V2FsbCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVlZCA9IHJpZ2h0V2FsbCAtIHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudFNwZWVkIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5jdXJyZW50U3BlZWQgPCBsZWZ0V2FsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSBsZWZ0V2FsbCAtIHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BlZWRYID0gdGhpcy5jdXJyZW50U3BlZWRcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8ganVtcFxyXG4gICAgICAgIGlmICggKHRoaXMua2V5cy51cCAmJiB0aGlzLmNhbkp1bXAgKSB8fCB0aGlzLnRha2VPZmYpIHNwZWVkWSArPSB0aGlzLmp1bXAocm9vZilcclxuICAgICAgICAvLyBncmF2aXR5XHJcbiAgICAgICAgaWYgKCF0aGlzLnRha2VPZmYpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRZICs9IHRoaXMuZ3Jhdml0eShmbG9vcilcclxuXHJcbiAgICAgICAgbGV0IG5ld1NwZWVkcyA9IHRoaXMuZnV0dXJlUG9zaXRpb25Jbk9iamNldChzcGVlZFgsIHNwZWVkWSlcclxuXHJcbiAgICAgICAgLy8gbW92ZSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBuZXdTcGVlZHMueFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBuZXdTcGVlZHMueVxyXG5cclxuXHJcbiAgICAgICAgLy8gZm9yIHRlc3RpbmdcclxuICAgICAgICBjdHguc2F2ZSgpXHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmVkJ1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLmNlbnRlci54LCB0aGlzLmNlbnRlci55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBhbmltYXRpb25DZW50ZXJYLFxyXG4gICAgYW5pbWF0aW9uQ2VudGVyWSxcclxuICAgIGhlcm9zXHJcbn0gZnJvbSAnLi9jb3NudHMuanMnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHBsYXllciwga2V5UHJlc3MsIE51bWJlck9mSGVybykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY29udGV4dFxyXG4gICAgICAgIHRoaXMua2V5UHJlc3MgPSBrZXlQcmVzc1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyXHJcblxyXG4gICAgICAgIHRoaXMuY2VudGVyWCA9IGFuaW1hdGlvbkNlbnRlclhcclxuICAgICAgICB0aGlzLmNlbnRlclkgPSBhbmltYXRpb25DZW50ZXJZXHJcblxyXG4gICAgICAgIC8vIHBsYXllciBzcHJpdGVzIFxyXG4gICAgICAgIHRoaXMuaGVybyA9IG5ldyBJbWFnZSgpXHJcbiAgICAgICAgdGhpcy5oZXJvLnNyYyA9IGhlcm9zW051bWJlck9mSGVyb10uc3JjXHJcbiAgICAgICAgdGhpcy5zaXplID0gMTI4XHJcblxyXG4gICAgICAgIC8vIG1vdmVpbmdcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSAxXHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSAyXHJcbiAgICAgICAgdGhpcy5YID0gMTFcclxuXHJcbiAgICAgICAgLy8gZGlyZWN0aW9uXHJcbiAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vYXR0YWNrIGFuaW1hdGlvbjogXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAwXHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDBcclxuICAgICAgICB0aGlzLmF0dGFja1ByZXNzZWQgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGxlZnRSaWdodEFuaW1hdGlvbihkaXJlY3Rpb24pIHtcclxuICAgICAgICBsZXQgaW1nUm93ID0gZGlyZWN0aW9uXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3REaXJlY3Rpb24gIT09IGRpcmVjdGlvbikgdGhpcy5jb3VudGVyID0gMFxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDwgdGhpcy5YKSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5udW1iZXIgPCA1KSB0aGlzLm51bWJlcisrXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IDBcclxuICAgICAgICAgICAgdGhpcy5udW1iZXIgPSAyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlggPSAoIDExIC0gTWF0aC5hYnMoIE1hdGguY2VpbCggdGhpcy5wbGF5ZXIuY3VycmVudFNwZWVkICkgKSkgKiAodGhpcy5udW1iZXIgLSAxKVxyXG5cclxuICAgICAgICB0aGlzLmRyYXdTdGF0aWNJbWFnZSh0aGlzLnNpemUgKiB0aGlzLm51bWJlciwgaW1nUm93KVxyXG5cclxuICAgICAgICB0aGlzLmNvdW50ZXIrKyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gZGlyZWN0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNrKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd1N0YXRpY0ltYWdlKHRoaXMuc2l6ZSAqIHRoaXMuY3VycmVudEltYWdlLCB0aGlzLnNpemUgKiAyICsgdGhpcy5sYXN0RGlyZWN0aW9uKSAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hdHRhY2tQcmVzc2VkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMucGxheWVyLmF0dGFja1ByZXNzZWQgPSB0cnVlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ID4gNSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSsrXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2UgPiAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja1ByZXNzZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYXR0YWNrUHJlc3NlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AgPSB0cnVlXHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgIH0gZWxzZSB0aGlzLmNvdW50KytcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3RhdGljSW1hZ2UoeFBvc2l0aW9uLCB5UG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5oZXJvLCBcclxuICAgICAgICAgICAgeFBvc2l0aW9uLCB5UG9zaXRpb24sIFxyXG4gICAgICAgICAgICB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWCwgdGhpcy5jZW50ZXJZLCAgXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSwgdGhpcy5zaXplKSBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gdGhpcy5rZXlQcmVzcy5yaWdodCA/IDAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleVByZXNzLmxlZnQgPyAgdGhpcy5zaXplIDogdGhpcy5sYXN0RGlyZWN0aW9uXHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdG9wICYmICF0aGlzLmtleVByZXNzLmF0dGFjaykgdGhpcy5zdG9wID0gZmFsc2VcclxuXHJcbiAgICAgICAgaWYgICAgICAodGhpcy5hdHRhY2tQcmVzc2VkKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2soKSAvL2F0dGFja1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMua2V5UHJlc3MuYXR0YWNrICYmICF0aGlzLmF0dGFja1ByZXNzZWQgJiYgIXRoaXMuc3RvcCkgIHRoaXMuYXR0YWNrKCkgLy9hdHRhY2tcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleVByZXNzLmJsb2NrKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTdGF0aWNJbWFnZSg0ICogdGhpcy5zaXplLCAyICogdGhpcy5zaXplICsgdGhpcy5sYXN0RGlyZWN0aW9uKSAvLyBibG9ja1xyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnBsYXllci5jYW5KdW1wKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1N0YXRpY0ltYWdlKHRoaXMuc2l6ZSwgdGhpcy5sYXN0RGlyZWN0aW9uKSAvLyBmbHkgICAgICAgICBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleVByZXNzLnJpZ2h0KSAgICAgdGhpcy5sZWZ0UmlnaHRBbmltYXRpb24oMCkgLy8gcmlnaHRcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5rZXlQcmVzcy5sZWZ0KSB0aGlzLmxlZnRSaWdodEFuaW1hdGlvbih0aGlzLnNpemUpIC8vIGxlZnRcclxuICAgICAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTdGF0aWNJbWFnZSgwLCB0aGlzLmxhc3REaXJlY3Rpb24pIC8vIHN0YXkgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYW52YXNDb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDViw4QkFBc0I7VUFBRyxzQkFBQTtBQ0U3Qjs7QUFFQTtFREFJLFlBQVk7RUFBUSxpQkFBQTtBQ0d4Qjs7QUFFQTtFREY4Qix1QkFBQTtBQ0k5Qjs7QUFFQTtFREZJLG9CQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsYUFBQTtFQUNBLHdCQUFXO01BQUcscUJBQUE7VUNLUix1QkFBdUI7RUFDL0IseUJBQXlCO01BQ3JCLHNCQUFzQjtVQUNsQixtQkFBbUI7RUFDM0IsNEJBQTRCO0VBQzVCLDZCQUE2QjtNQUN6QiwwQkFBMEI7VUFDdEIsc0JBQXNCO0VBQzlCLFdBQVc7QUFDYjtBQUNBLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3YTk0MGUzYzk5YTg4NWQxY2MyZmZkNGQ0M2JmODMxMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2Q1ZDk0MjgxNzcxMzZiMzYyZTU2OTA1M2Q5NjEyYjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU1MGJiODU4N2VlODQwYWRkOTBlMzMxNzA4MWMyYjRmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZjA4NDhlN2FmZThjNzY4MDQ5ZjRmY2Y4ZGIxZjg2MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDllNGJhMmMxZTU3OTdmZmM2NWE5ZThjMGYzZDBlOTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk0YzU2N2Y2Y2MxNTU0ZTE1NzJkYmM5MmRmOWVmMGQwLnBuZ1wiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=