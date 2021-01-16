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
/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/canvas.js */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_cosnts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/cosnts.js */ "./src/scripts/cosnts.js");
/* harmony import */ var _scripts_II_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/II.js */ "./src/scripts/II.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_7__);








let globalId = {
  animation: null
}; // player 1

let keyPressUp = new _scripts_keypressAciton_js__WEBPACK_IMPORTED_MODULE_2__.default('awdfg');
let player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__.default(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_4__.default, keyPressUp, {
  x: 64 * 5,
  y: 64 * 6
});
let playerAnimation = new _scripts_playerAnimation_js__WEBPACK_IMPORTED_MODULE_1__.default(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_4__.default, player, keyPressUp, 1, true, {}); // II

let ii = new _scripts_II_js__WEBPACK_IMPORTED_MODULE_6__.default();
let player2 = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__.default(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_4__.default, ii, {
  x: 64 * 8,
  y: 64 * 6
});
let playerAnimation2 = new _scripts_playerAnimation_js__WEBPACK_IMPORTED_MODULE_1__.default(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_4__.default, player2, ii, 2, false, player.position);
player.addEnemyToTheMapObjects(player2);
player2.addEnemyToTheMapObjects(player);
ii.addPlayers(player, player2);
let map = new _scripts_map_js__WEBPACK_IMPORTED_MODULE_3__.default(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_4__.default, player.position);

function gameLoop() {
  _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_4__.default.clearRect(0, 0, _scripts_cosnts_js__WEBPACK_IMPORTED_MODULE_5__.canvas_width, _scripts_cosnts_js__WEBPACK_IMPORTED_MODULE_5__.canvas_height);
  map.render();
  ii.render();
  player.render();
  playerAnimation.render();
  player2.render();
  playerAnimation2.render();
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
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ II
/* harmony export */ });
class II {
  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.attack = false;
    this.block = false;
    this.player1 = {};
    this.player2 = {};
  }

  addPlayers(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  render() {
    let p1 = this.player1;
    let p2 = this.player2;
    if (p1.position.x + p1.width < p2.position.x) this.left = true;else this.left = false;
    if (p1.position.x > p2.position.x - p2.width) this.right = true;else this.right = false;
    if (p1.position.y < p2.position.y) setTimeout(() => this.up = true, 200);else this.up = false;
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
/*! export mapObjects [provided] [no usage info] [missing usage info prevents renaming] */
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
/* harmony export */   "arr": () => /* binding */ arr,
/* harmony export */   "mapObjects": () => /* binding */ mapObjects
/* harmony export */ });
/* harmony import */ var _images_hero1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hero1.png */ "./src/images/hero1.png");
/* harmony import */ var _images_hero2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/hero2.png */ "./src/images/hero2.png");
/* harmony import */ var _images_hero3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hero3.png */ "./src/images/hero3.png");
/* harmony import */ var _images_hero4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hero4.png */ "./src/images/hero4.png");
/* harmony import */ var _images_objects_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/objects.png */ "./src/images/objects.png");





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

const mapObjects = [{
  name: 'left wall',
  bgColor: 'black',
  imageSrc: _images_objects_png__WEBPACK_IMPORTED_MODULE_4__.default,
  imageStartY: 0,
  imageStartX: 0,
  imageW: 64,
  imageH: 64,
  x1: 0,
  y1: 0,
  width: WALL_WIDTH,
  height: GAME_HEIGHT,
  standartSize: true
}, {
  name: 'right wall',
  bgColor: 'black',
  imageSrc: _images_objects_png__WEBPACK_IMPORTED_MODULE_4__.default,
  imageStartY: 0,
  imageStartX: 0,
  imageW: 64,
  imageH: 64,
  x1: GAME_WIDTH - WALL_WIDTH,
  y1: 0,
  width: WALL_WIDTH,
  height: GAME_HEIGHT,
  standartSize: true
}, {
  name: 'roof',
  bgColor: 'black',
  imageSrc: _images_objects_png__WEBPACK_IMPORTED_MODULE_4__.default,
  imageStartY: 0,
  imageStartX: 0,
  imageW: 64,
  imageH: 64,
  x1: 0,
  y1: 0,
  width: GAME_WIDTH - WALL_WIDTH,
  height: WALL_WIDTH,
  standartSize: true
}, {
  name: 'floor',
  bgColor: 'black',
  imageSrc: _images_objects_png__WEBPACK_IMPORTED_MODULE_4__.default,
  imageStartY: 0,
  imageStartX: 0,
  imageW: 64,
  imageH: 64,
  x1: 0,
  y1: GAME_HEIGHT - WALL_WIDTH,
  width: GAME_WIDTH - WALL_WIDTH,
  height: WALL_WIDTH,
  standartSize: true
}, {
  name: 'balcony 1',
  bgColor: 'black',
  imageSrc: _images_objects_png__WEBPACK_IMPORTED_MODULE_4__.default,
  imageStartY: 0,
  imageStartX: 0,
  imageW: 64,
  imageH: 64,
  x1: 5 * WALL_WIDTH,
  y1: WALL_WIDTH * 8,
  width: WALL_WIDTH * 10,
  height: WALL_WIDTH,
  standartSize: true
}, {
  name: 'balcony 2',
  bgColor: 'black',
  imageSrc: _images_objects_png__WEBPACK_IMPORTED_MODULE_4__.default,
  imageStartY: 0,
  imageStartX: 0,
  imageW: 64,
  imageH: 64,
  x1: 6 * WALL_WIDTH,
  y1: WALL_WIDTH * 4 - 1,
  width: WALL_WIDTH * 8,
  height: WALL_WIDTH,
  standartSize: true
}, {
  name: 'balcony 3',
  bgColor: 'black',
  imageSrc: _images_objects_png__WEBPACK_IMPORTED_MODULE_4__.default,
  imageStartY: 0,
  imageStartX: 0,
  imageW: 64,
  imageH: 64,
  x1: 1 * WALL_WIDTH,
  y1: WALL_WIDTH * 6 - 1,
  width: WALL_WIDTH * 2,
  height: WALL_WIDTH,
  standartSize: true
}, {
  name: 'balcony 4',
  bgColor: 'black',
  imageSrc: _images_objects_png__WEBPACK_IMPORTED_MODULE_4__.default,
  imageStartY: 0,
  imageStartX: 0,
  imageW: 64,
  imageH: 64,
  x1: GAME_WIDTH - WALL_WIDTH * 3,
  y1: WALL_WIDTH * 6 - 1,
  width: WALL_WIDTH * 2,
  height: WALL_WIDTH,
  standartSize: true
}];


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
/* harmony import */ var _images_objects_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/objects.png */ "./src/images/objects.png");
/* harmony import */ var _images_deathThings_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/deathThings.png */ "./src/images/deathThings.png");
/* harmony import */ var _cosnts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cosnts.js */ "./src/scripts/cosnts.js");



class Map {
  constructor(context, playerPosition) {
    this.map = _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.mapObjects;
    this.playerPosition = playerPosition;
    this.context = context;
  }

  render() {
    let ctx = this.context;
    let offsetX = _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.centerX - this.playerPosition.x;
    let offsetY = _cosnts_js__WEBPACK_IMPORTED_MODULE_2__.centerY - this.playerPosition.y;
    let img = new Image();
    img.src = _images_objects_png__WEBPACK_IMPORTED_MODULE_0__.default;
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
      drawImage.src = el.imageSrc; // fill bg for clean view of image

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
  constructor(context, keys, startPostion) {
    this.context = context;
    this.keys = keys;
    this.mapObjects = [];
    this.center = {
      x: _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.centerX,
      y: _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.centerY
    }; // player specifications

    this.width = 22;
    this.height = 64; // start position

    this.position = { ...startPostion
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

  addEnemyToTheMapObjects(enemy) {
    this.mapObjects = [..._cosnts_js__WEBPACK_IMPORTED_MODULE_0__.mapObjects, enemy];
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
    this.position.y += newSpeeds.y; // enemy will be real object

    this.x1 = this.position.x;
    this.y1 = this.position.y; // for testing
    // ctx.save()
    // ctx.fillStyle = 'red'
    // ctx.fillRect(this.center.x, this.center.y, this.width, this.height)
    // ctx.restore()
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
  constructor(context, player, keyPress, NumberOfHero, centerKey, speacialPostion) {
    this.ctx = context;
    this.keyPress = keyPress;
    this.player = player;
    this.centerX = _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.animationCenterX;
    this.centerY = _cosnts_js__WEBPACK_IMPORTED_MODULE_0__.animationCenterY;
    this.centerKey = centerKey;
    this.speacialPostion = speacialPostion; // player sprites 

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
    let x, y;

    if (this.centerKey) {
      x = this.centerX;
      y = this.centerY;
    } else {
      x = this.centerX - this.speacialPostion.x + this.player.position.x;
      y = this.centerY - this.speacialPostion.y + this.player.position.y;
    }

    this.ctx.drawImage(this.hero, xPosition, yPosition, this.size, this.size, x, y, this.size, this.size);
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

/***/ "./src/images/objects.png":
/*!********************************!*\
  !*** ./src/images/objects.png ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dhbWUvLi9zcmMvc2NyaXB0cy9JSS5qcyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzIiwid2VicGFjazovL2dhbWUvLi9zcmMvc2NyaXB0cy9jb3NudHMuanMiLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9zY3JpcHRzL2tleXByZXNzQWNpdG9uLmpzIiwid2VicGFjazovL2dhbWUvLi9zcmMvc2NyaXB0cy9tYXAuanMiLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL3NjcmlwdHMvcGxheWVyQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2dhbWUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL2ltYWdlcy9kZWF0aFRoaW5ncy5wbmciLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9pbWFnZXMvaGVybzEucG5nIiwid2VicGFjazovL2dhbWUvLi9zcmMvaW1hZ2VzL2hlcm8yLnBuZyIsIndlYnBhY2s6Ly9nYW1lLy4vc3JjL2ltYWdlcy9oZXJvMy5wbmciLCJ3ZWJwYWNrOi8vZ2FtZS8uL3NyYy9pbWFnZXMvaGVybzQucG5nIiwid2VicGFjazovL2dhbWUvLi9zcmMvaW1hZ2VzL29iamVjdHMucG5nIiwid2VicGFjazovL2dhbWUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZ2xvYmFsSWQiLCJhbmltYXRpb24iLCJrZXlQcmVzc1VwIiwiS2V5UHJlc3NVcCIsInBsYXllciIsIlBsYXllciIsImN0eCIsIngiLCJ5IiwicGxheWVyQW5pbWF0aW9uIiwiUGxheWVyQW5pbWF0aW9uIiwiaWkiLCJJSSIsInBsYXllcjIiLCJwbGF5ZXJBbmltYXRpb24yIiwicG9zaXRpb24iLCJhZGRFbmVteVRvVGhlTWFwT2JqZWN0cyIsImFkZFBsYXllcnMiLCJtYXAiLCJNYXAiLCJnYW1lTG9vcCIsImNhbnZhc193aWR0aCIsImNhbnZhc19oZWlnaHQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb25zdHJ1Y3RvciIsImxlZnQiLCJyaWdodCIsInVwIiwiYXR0YWNrIiwiYmxvY2siLCJwbGF5ZXIxIiwicDEiLCJwMiIsIndpZHRoIiwic2V0VGltZW91dCIsInJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImhlaWdodCIsImdldENvbnRleHQiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJhcHBlbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJHQU1FX0hFSUdIVCIsIkdBTUVfV0lEVEgiLCJXQUxMX1dJRFRIIiwiUExBWUVSX1NQRUNJRklDQVRJT04iLCJwaHlzIiwiY2VudGVyWCIsImNlbnRlclkiLCJhbmltYXRpb25DZW50ZXJYIiwiYW5pbWF0aW9uQ2VudGVyWSIsImhlcm9zIiwic3JjIiwiaGVybzEiLCJhdHRja1JhbmdlIiwiaGVybzIiLCJoZXJvMyIsImhlcm80IiwiYXJyIiwiaSIsIk1hdGgiLCJjZWlsIiwib25lT3JUd28iLCJyYW5kb20iLCJwdXNoIiwibWFwT2JqZWN0cyIsIm5hbWUiLCJiZ0NvbG9yIiwiaW1hZ2VTcmMiLCJXYWxsIiwiaW1hZ2VTdGFydFkiLCJpbWFnZVN0YXJ0WCIsImltYWdlVyIsImltYWdlSCIsIngxIiwieTEiLCJzdGFuZGFydFNpemUiLCJrZXkiLCJoYW5kbGVLZXkiLCJiaW5kIiwiYXJyS2V5cyIsInZhbHVlIiwiZXZlbnQiLCJrZXlDb2RlIiwiY29udGV4dCIsInBsYXllclBvc2l0aW9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJpbWciLCJJbWFnZSIsImRldGhJbWciLCJEZXRoVGhpbmdzIiwic2F2ZSIsImoiLCJkcmF3SW1hZ2UiLCJmb3JFYWNoIiwiZWwiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJlc3RvcmUiLCJrZXlzIiwic3RhcnRQb3N0aW9uIiwiY2VudGVyIiwiY3VycmVudFNwZWVkIiwic3BlZWRBY2NlbGVyYXRpb24iLCJtYXhTcGVlZCIsImxhc3REaXJlY3Rpb24iLCJpbmVydGlvbiIsImdyYXZpdHlDdXJyZW50U3BlZWQiLCJncmF2aXR5QWNjZWxlcmF0aW9uIiwibWF4SnVtcEhlaWdodCIsInN0YXJ0SnVtcFNwZWVkIiwic3FydCIsImNhbkp1bXAiLCJ0YWtlT2ZmIiwiYXR0YWNrUHJlc3NlZCIsImVuZW15IiwiZmluZE1vdmVMaW1pdHMiLCJmbG9vcnMiLCJyb29mcyIsImxlZnRXYWxscyIsInJpZ2h0V2FsbHMiLCJtb3ZlIiwic3ltYm9sIiwianVtcCIsInJvb2YiLCJmbG9vciIsImdyYXZpdHkiLCJjdXJyZW50SnVtcEhlaWdodCIsImZ1dHVyZVBvc2l0aW9uSW5PYmpjZXQiLCJzcGVlZFgiLCJzcGVlZFkiLCJzcGVlZHMiLCJhYnMiLCJsaW1pdHMiLCJtaW4iLCJtYXgiLCJyaWdodFdhbGwiLCJsZWZ0V2FsbCIsInNpZ24iLCJuZXdTcGVlZHMiLCJrZXlQcmVzcyIsIk51bWJlck9mSGVybyIsImNlbnRlcktleSIsInNwZWFjaWFsUG9zdGlvbiIsImhlcm8iLCJzaXplIiwiY291bnRlciIsIm51bWJlciIsIlgiLCJjdXJyZW50SW1hZ2UiLCJjb3VudCIsImxlZnRSaWdodEFuaW1hdGlvbiIsImRpcmVjdGlvbiIsImltZ1JvdyIsImRyYXdTdGF0aWNJbWFnZSIsInN0b3AiLCJ4UG9zaXRpb24iLCJ5UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBLElBQUlBLFFBQVEsR0FBRztBQUNYQyxXQUFTLEVBQUU7QUFEQSxDQUFmLEMsQ0FJQTs7QUFDQSxJQUFJQyxVQUFVLEdBQVEsSUFBSUMsK0RBQUosQ0FBZSxPQUFmLENBQXRCO0FBQ0EsSUFBSUMsTUFBTSxHQUFZLElBQUlDLHVEQUFKLENBQVdDLHVEQUFYLEVBQWdCSixVQUFoQixFQUE0QjtBQUFDSyxHQUFDLEVBQUUsS0FBSyxDQUFUO0FBQVlDLEdBQUMsRUFBRSxLQUFLO0FBQXBCLENBQTVCLENBQXRCO0FBQ0EsSUFBSUMsZUFBZSxHQUFHLElBQUlDLGdFQUFKLENBQW9CSix1REFBcEIsRUFBeUJGLE1BQXpCLEVBQWlDRixVQUFqQyxFQUE2QyxDQUE3QyxFQUFnRCxJQUFoRCxFQUFzRCxFQUF0RCxDQUF0QixDLENBSUE7O0FBQ0EsSUFBSVMsRUFBRSxHQUFHLElBQUlDLG1EQUFKLEVBQVQ7QUFDQSxJQUFJQyxPQUFPLEdBQVksSUFBSVIsdURBQUosQ0FBV0MsdURB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL3NjcmlwdHMvcGxheWVyLmpzJ1xyXG5pbXBvcnQgUGxheWVyQW5pbWF0aW9uIGZyb20gJy4vc2NyaXB0cy9wbGF5ZXJBbmltYXRpb24uanMnXHJcbmltcG9ydCBLZXlQcmVzc1VwIGZyb20gJy4vc2NyaXB0cy9rZXlwcmVzc0FjaXRvbi5qcydcclxuXHJcbmltcG9ydCBNYXAgZnJvbSAnLi9zY3JpcHRzL21hcC5qcydcclxuaW1wb3J0IGN0eCBmcm9tICcuL3NjcmlwdHMvY2FudmFzLmpzJ1xyXG5pbXBvcnQge1xyXG4gICAgY2FudmFzX2hlaWdodCxcclxuICAgIGNhbnZhc193aWR0aCxcclxufSBmcm9tICcuL3NjcmlwdHMvY29zbnRzLmpzJ1xyXG5cclxuaW1wb3J0IElJIGZyb20gJy4vc2NyaXB0cy9JSS5qcydcclxuaW1wb3J0ICAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xyXG5cclxuXHJcbmxldCBnbG9iYWxJZCA9IHtcclxuICAgIGFuaW1hdGlvbjogbnVsbFxyXG59XHJcblxyXG4vLyBwbGF5ZXIgMVxyXG5sZXQga2V5UHJlc3NVcCAgICAgID0gbmV3IEtleVByZXNzVXAoJ2F3ZGZnJylcclxubGV0IHBsYXllciAgICAgICAgICA9IG5ldyBQbGF5ZXIoY3R4LCBrZXlQcmVzc1VwLCB7eDogNjQgKiA1LCB5OiA2NCAqIDZ9KVxyXG5sZXQgcGxheWVyQW5pbWF0aW9uID0gbmV3IFBsYXllckFuaW1hdGlvbihjdHgsIHBsYXllciwga2V5UHJlc3NVcCwgMSwgdHJ1ZSwge30pXHJcblxyXG5cclxuXHJcbi8vIElJXHJcbmxldCBpaSA9IG5ldyBJSSgpXHJcbmxldCBwbGF5ZXIyICAgICAgICAgID0gbmV3IFBsYXllcihjdHgsIGlpLCB7eDogNjQgKiA4LCB5OiA2NCAqIDZ9KVxyXG5sZXQgcGxheWVyQW5pbWF0aW9uMiA9IG5ldyBQbGF5ZXJBbmltYXRpb24oY3R4LCBwbGF5ZXIyLCBpaSwgMiwgZmFsc2UsIHBsYXllci5wb3NpdGlvbilcclxuXHJcbnBsYXllci5hZGRFbmVteVRvVGhlTWFwT2JqZWN0cyhwbGF5ZXIyKVxyXG5wbGF5ZXIyLmFkZEVuZW15VG9UaGVNYXBPYmplY3RzKHBsYXllcilcclxuaWkuYWRkUGxheWVycyhwbGF5ZXIsIHBsYXllcjIpXHJcblxyXG5sZXQgbWFwICAgICAgICAgICAgID0gbmV3IE1hcChjdHgsIHBsYXllci5wb3NpdGlvbilcclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzX3dpZHRoLCBjYW52YXNfaGVpZ2h0KVxyXG4gICAgbWFwLnJlbmRlcigpXHJcblxyXG4gICAgaWkucmVuZGVyKClcclxuXHJcbiAgICBwbGF5ZXIucmVuZGVyKClcclxuICAgIHBsYXllckFuaW1hdGlvbi5yZW5kZXIoKVxyXG4gICAgXHJcbiAgICBwbGF5ZXIyLnJlbmRlcigpXHJcbiAgICBwbGF5ZXJBbmltYXRpb24yLnJlbmRlcigpXHJcblxyXG4gICAgZ2xvYmFsSWQuYW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxyXG59XHJcblxyXG5nYW1lTG9vcCgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0ICAgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucmlnaHQgID0gZmFsc2UgXHJcbiAgICAgICAgdGhpcy51cCAgICAgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYXR0YWNrID0gZmFsc2VcclxuICAgICAgICB0aGlzLmJsb2NrICA9IGZhbHNlXHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyMSA9IHt9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0ge31cclxuICAgIH1cclxuXHJcbiAgICBhZGRQbGF5ZXJzKHBsYXllcjEsIHBsYXllcjIpIHtcclxuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMlxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBwMSA9IHRoaXMucGxheWVyMVxyXG4gICAgICAgIGxldCBwMiA9IHRoaXMucGxheWVyMlxyXG5cclxuICAgICAgICBpZiAocDEucG9zaXRpb24ueCArIHAxLndpZHRoIDwgcDIucG9zaXRpb24ueCkgdGhpcy5sZWZ0ID0gdHJ1ZVxyXG4gICAgICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZVxyXG5cclxuICAgICAgICBpZiAocDEucG9zaXRpb24ueCA+IHAyLnBvc2l0aW9uLnggLSBwMi53aWR0aCkgdGhpcy5yaWdodCA9IHRydWVcclxuICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlXHJcblxyXG4gICAgICAgIGlmIChwMS5wb3NpdGlvbi55IDwgcDIucG9zaXRpb24ueSkgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXAgPSB0cnVlLCAyMDApICAgXHJcbiAgICAgICAgZWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXAgPSBmYWxzZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIGNhbnZhc19oZWlnaHQsXHJcbiAgICBjYW52YXNfd2lkdGgsXHJcbn0gZnJvbSAnLi9jb3NudHMuanMnXHJcblxyXG5cclxuXHJcblxyXG5sZXQgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcclxucm9vdC5jbGFzc0xpc3QuYWRkKCdjYW52YXNDb250YWluZXInKVxyXG5cclxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXNfd2lkdGhcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNfaGVpZ2h0XHJcblxyXG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxyXG4gICAgXHJcbnJvb3QuYXBwZW5kKGNhbnZhcylcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY3JlYXRlKCkpXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29ubG9hZCcsIGNyZWF0ZSgpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3R4XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgICBjYW52YXMud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSAxMFxyXG4gICAgY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSAxNVxyXG59IiwiaW1wb3J0IGhlcm8xIGZyb20gJy4uL2ltYWdlcy9oZXJvMS5wbmcnXHJcbmltcG9ydCBoZXJvMiBmcm9tICcuLi9pbWFnZXMvaGVybzIucG5nJ1xyXG5pbXBvcnQgaGVybzMgZnJvbSAnLi4vaW1hZ2VzL2hlcm8zLnBuZydcclxuXHJcbmltcG9ydCBoZXJvNCBmcm9tICcuLi9pbWFnZXMvaGVybzQucG5nJ1xyXG5pbXBvcnQgV2FsbCBmcm9tICcuLi9pbWFnZXMvb2JqZWN0cy5wbmcnXHJcbiBcclxuXHJcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjQgKiAxNFxyXG5jb25zdCBHQU1FX1dJRFRIICA9IDY0ICogMjBcclxuXHJcbmNvbnN0IGNhbnZhc19oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gMTVcclxuY29uc3QgY2FudmFzX3dpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gMTBcclxuXHJcbmNvbnN0IFdBTExfV0lEVEggID0gNjRcclxuXHJcbmNvbnN0IFBMQVlFUl9TUEVDSUZJQ0FUSU9OID0ge1xyXG4gICAgcGh5czoge1xyXG4gICAgICAgIHdpZHRoOiAyMixcclxuICAgICAgICBoZWlnaHQ6IDY0XHJcbiAgICB9LFxyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgd2lkdGg6IDEyOCxcclxuICAgICAgICBoZWlnaHQ6IDEyOFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBwaHlzaWNhbCBjZW50ZXJcclxuY29uc3QgY2VudGVyWCA9ICggY2FudmFzX3dpZHRoIC0gUExBWUVSX1NQRUNJRklDQVRJT04ucGh5cy53aWR0aCApIC8gMiBcclxuY29uc3QgY2VudGVyWSA9ICggY2FudmFzX2hlaWdodCAtIFBMQVlFUl9TUEVDSUZJQ0FUSU9OLnBoeXMuaGVpZ2h0ICkgLyAyIFxyXG5cclxuXHJcbi8vYW5pbWF0aW9uIGNlbnRlclxyXG5jb25zdCBhbmltYXRpb25DZW50ZXJYID0gKCBjYW52YXNfd2lkdGggLSBQTEFZRVJfU1BFQ0lGSUNBVElPTi5hbmltYXRpb24ud2lkdGggKSAvIDIgXHJcbmNvbnN0IGFuaW1hdGlvbkNlbnRlclkgPSAoIGNhbnZhc19oZWlnaHQgLSBQTEFZRVJfU1BFQ0lGSUNBVElPTi5hbmltYXRpb24uaGVpZ2h0ICkgLyAyIFxyXG5cclxuXHJcblxyXG5jb25zdCBoZXJvcyA9IHtcclxuICAgIDE6IHtcclxuICAgICAgICBzcmM6IGhlcm8xLFxyXG4gICAgICAgIGF0dGNrUmFuZ2U6IDM0XHJcbiAgICB9LFxyXG4gICAgMjoge1xyXG4gICAgICAgIHNyYzogaGVybzIsXHJcbiAgICAgICAgYXR0Y2tSYW5nZTogNTJcclxuICAgIH0sXHJcbiAgICAzOiB7XHJcbiAgICAgICAgc3JjOiBoZXJvMyxcclxuICAgICAgICBhdHRja1JhbmdlOiA0M1xyXG4gICAgfSxcclxuICAgIDQ6IHtcclxuICAgICAgICBzcmM6IGhlcm80LFxyXG4gICAgICAgIGF0dGNrUmFuZ2U6IDUyXHJcbiAgICB9LFxyXG59XHJcblxyXG5cclxuY29uc3QgYXJyID0gW11cclxuZm9yIChsZXQgaSA9IDE7IGkgPCBNYXRoLmNlaWwoR0FNRV9XSURUSCAvIDY0KTsgaSsrKSB7XHJcbiAgICBsZXQgb25lT3JUd28gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMCA6IDY0XHJcbiAgICBhcnIucHVzaChvbmVPclR3bylcclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcE9iamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2xlZnQgd2FsbCcsXHJcbiAgICAgICAgYmdDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICBpbWFnZVNyYzogV2FsbCxcclxuICAgICAgICBpbWFnZVN0YXJ0WTogMCxcclxuICAgICAgICBpbWFnZVN0YXJ0WDogMCxcclxuICAgICAgICBpbWFnZVc6IDY0LFxyXG4gICAgICAgIGltYWdlSDogNjQsXHJcbiAgICAgICAgeDE6IDAsXHJcbiAgICAgICAgeTE6IDAsXHJcbiAgICAgICAgd2lkdGg6IFdBTExfV0lEVEgsXHJcbiAgICAgICAgaGVpZ2h0OiBHQU1FX0hFSUdIVCxcclxuICAgICAgICBzdGFuZGFydFNpemU6IHRydWVcclxuICAgIH0sIFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdyaWdodCB3YWxsJyxcclxuICAgICAgICBiZ0NvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIGltYWdlU3JjOiBXYWxsLFxyXG4gICAgICAgIGltYWdlU3RhcnRZOiAwLFxyXG4gICAgICAgIGltYWdlU3RhcnRYOiAwLFxyXG4gICAgICAgIGltYWdlVzogNjQsXHJcbiAgICAgICAgaW1hZ2VIOiA2NCxcclxuICAgICAgICB4MTogIEdBTUVfV0lEVEggLSBXQUxMX1dJRFRILFxyXG4gICAgICAgIHkxOiAwLFxyXG4gICAgICAgIHdpZHRoOiBXQUxMX1dJRFRILFxyXG4gICAgICAgIGhlaWdodDogR0FNRV9IRUlHSFQsXHJcbiAgICAgICAgc3RhbmRhcnRTaXplOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdyb29mJyxcclxuICAgICAgICBiZ0NvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIGltYWdlU3JjOiBXYWxsLFxyXG4gICAgICAgIGltYWdlU3RhcnRZOiAwLFxyXG4gICAgICAgIGltYWdlU3RhcnRYOiAwLFxyXG4gICAgICAgIGltYWdlVzogNjQsXHJcbiAgICAgICAgaW1hZ2VIOiA2NCxcclxuICAgICAgICB4MTogMCxcclxuICAgICAgICB5MTogMCxcclxuICAgICAgICB3aWR0aDogIEdBTUVfV0lEVEggLSBXQUxMX1dJRFRILFxyXG4gICAgICAgIGhlaWdodDogV0FMTF9XSURUSCxcclxuICAgICAgICBzdGFuZGFydFNpemU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2Zsb29yJyxcclxuICAgICAgICBiZ0NvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIGltYWdlU3JjOiBXYWxsLFxyXG4gICAgICAgIGltYWdlU3RhcnRZOiAwLFxyXG4gICAgICAgIGltYWdlU3RhcnRYOiAwLFxyXG4gICAgICAgIGltYWdlVzogNjQsXHJcbiAgICAgICAgaW1hZ2VIOiA2NCxcclxuICAgICAgICB4MTogMCxcclxuICAgICAgICB5MTogR0FNRV9IRUlHSFQgLSBXQUxMX1dJRFRILFxyXG4gICAgICAgIHdpZHRoOiAgR0FNRV9XSURUSCAtIFdBTExfV0lEVEgsXHJcbiAgICAgICAgaGVpZ2h0OiBXQUxMX1dJRFRILFxyXG4gICAgICAgIHN0YW5kYXJ0U2l6ZTogdHJ1ZVxyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2JhbGNvbnkgMScsXHJcbiAgICAgICAgYmdDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICBpbWFnZVNyYzogV2FsbCxcclxuICAgICAgICBpbWFnZVN0YXJ0WTogMCxcclxuICAgICAgICBpbWFnZVN0YXJ0WDogMCxcclxuICAgICAgICBpbWFnZVc6IDY0LFxyXG4gICAgICAgIGltYWdlSDogNjQsXHJcbiAgICAgICAgeDE6IDUgKiBXQUxMX1dJRFRILCAgICAgICAgICAgIFxyXG4gICAgICAgIHkxOiAgV0FMTF9XSURUSCAqIDgsXHJcbiAgICAgICAgd2lkdGg6IFdBTExfV0lEVEggKiAxMCxcclxuICAgICAgICBoZWlnaHQ6IFdBTExfV0lEVEgsXHJcbiAgICAgICAgc3RhbmRhcnRTaXplOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdiYWxjb255IDInLFxyXG4gICAgICAgIGJnQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgaW1hZ2VTcmM6IFdhbGwsXHJcbiAgICAgICAgaW1hZ2VTdGFydFk6IDAsXHJcbiAgICAgICAgaW1hZ2VTdGFydFg6IDAsXHJcbiAgICAgICAgaW1hZ2VXOiA2NCxcclxuICAgICAgICBpbWFnZUg6IDY0LFxyXG4gICAgICAgIHgxOiA2ICogV0FMTF9XSURUSCwgICAgICAgICAgICBcclxuICAgICAgICB5MTogV0FMTF9XSURUSCAqIDQgLSAxLFxyXG4gICAgICAgIHdpZHRoOiBXQUxMX1dJRFRIICogOCxcclxuICAgICAgICBoZWlnaHQ6IFdBTExfV0lEVEgsXHJcbiAgICAgICAgc3RhbmRhcnRTaXplOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdiYWxjb255IDMnLFxyXG4gICAgICAgIGJnQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgaW1hZ2VTcmM6IFdhbGwsXHJcbiAgICAgICAgaW1hZ2VTdGFydFk6IDAsXHJcbiAgICAgICAgaW1hZ2VTdGFydFg6IDAsXHJcbiAgICAgICAgaW1hZ2VXOiA2NCxcclxuICAgICAgICBpbWFnZUg6IDY0LFxyXG4gICAgICAgIHgxOiAxICogV0FMTF9XSURUSCwgICAgICAgICAgICBcclxuICAgICAgICB5MTogV0FMTF9XSURUSCAqIDYgLSAxLFxyXG4gICAgICAgIHdpZHRoOiBXQUxMX1dJRFRIICogMixcclxuICAgICAgICBoZWlnaHQ6IFdBTExfV0lEVEgsXHJcbiAgICAgICAgc3RhbmRhcnRTaXplOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdiYWxjb255IDQnLFxyXG4gICAgICAgIGJnQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgaW1hZ2VTcmM6IFdhbGwsXHJcbiAgICAgICAgaW1hZ2VTdGFydFk6IDAsXHJcbiAgICAgICAgaW1hZ2VTdGFydFg6IDAsXHJcbiAgICAgICAgaW1hZ2VXOiA2NCxcclxuICAgICAgICBpbWFnZUg6IDY0LFxyXG4gICAgICAgIHgxOiBHQU1FX1dJRFRIIC0gV0FMTF9XSURUSCAqIDMsICAgICAgICAgICAgXHJcbiAgICAgICAgeTE6IFdBTExfV0lEVEggKiA2IC0gMSxcclxuICAgICAgICB3aWR0aDogV0FMTF9XSURUSCAqIDIsXHJcbiAgICAgICAgaGVpZ2h0OiBXQUxMX1dJRFRILFxyXG4gICAgICAgIHN0YW5kYXJ0U2l6ZTogdHJ1ZVxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IHtcclxuICAgIEdBTUVfSEVJR0hULFxyXG4gICAgR0FNRV9XSURUSCxcclxuICAgIGNhbnZhc19oZWlnaHQsXHJcbiAgICBjYW52YXNfd2lkdGgsXHJcbiAgICBXQUxMX1dJRFRILFxyXG4gICAgY2VudGVyWCxcclxuICAgIGNlbnRlclksXHJcbiAgICBhbmltYXRpb25DZW50ZXJYLFxyXG4gICAgYW5pbWF0aW9uQ2VudGVyWSxcclxuICAgIGhlcm9zLFxyXG4gICAgUExBWUVSX1NQRUNJRklDQVRJT04sXHJcbiAgICBhcnIsXHJcbiAgICBtYXBPYmplY3RzXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlQcmVzc1VwIHtcclxuICAgIGNvbnN0cnVjdG9yKGtleSkge1xyXG4gICAgICAgIHRoaXMubGVmdCAgID0gZmFsc2VcclxuICAgICAgICB0aGlzLnJpZ2h0ICA9IGZhbHNlIFxyXG4gICAgICAgIHRoaXMudXAgICAgID0gZmFsc2VcclxuICAgICAgICB0aGlzLmF0dGFjayA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ibG9jayAgPSBmYWxzZVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkuYmluZCh0aGlzLCB0cnVlKSApXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleS5iaW5kKHRoaXMsIGZhbHNlKSlcclxuXHJcbiAgICAgICAgdGhpcy5hcnJLZXlzID0gWyBbNjUsIDg3LCA2OCwgNzAsIDcxXSBdXHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXkgPT0gJ2F3ZGZnJyA/IDAgOiAxXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlS2V5KHZhbHVlLCBldmVudCkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmFycktleXNcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSwgdmFsdWUpXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIGxlZnRcclxuICAgICAgICAgICAgY2FzZSBhcnJbdGhpcy5rZXldWzBdOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICAvLyBqdW1wXHJcbiAgICAgICAgICAgIGNhc2UgYXJyW3RoaXMua2V5XVsxXTpcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuXHJcbiAgICAgICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgICAgIGNhc2UgYXJyW3RoaXMua2V5XVsyXTpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhdHRhY2tcclxuICAgICAgICAgICAgY2FzZSBhcnJbdGhpcy5rZXldWzNdOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2sgPSB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBibG9jayBcclxuICAgICAgICAgICAgY2FzZSBhcnJbdGhpcy5rZXldWzRdOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jayA9IHZhbHVlICBcclxuXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdhbGwgZnJvbSAnLi4vaW1hZ2VzL29iamVjdHMucG5nJ1xyXG5pbXBvcnQgRGV0aFRoaW5ncyBmcm9tICcuLi9pbWFnZXMvZGVhdGhUaGluZ3MucG5nJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEdBTUVfSEVJR0hULFxyXG4gICAgR0FNRV9XSURUSCxcclxuICAgIGNlbnRlclgsIFxyXG4gICAgY2VudGVyWSxcclxuICAgIGFycixcclxuICAgIG1hcE9iamVjdHNcclxufSBmcm9tICcuL2Nvc250cy5qcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcGxheWVyUG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcE9iamVjdHNcclxuICAgICAgICB0aGlzLnBsYXllclBvc2l0aW9uID0gcGxheWVyUG9zaXRpb25cclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNvbnRleHRcclxuXHJcbiAgICAgICAgbGV0IG9mZnNldFggPSAgY2VudGVyWCAtIHRoaXMucGxheWVyUG9zaXRpb24ueFxyXG4gICAgICAgIGxldCBvZmZzZXRZID0gY2VudGVyWSAtIHRoaXMucGxheWVyUG9zaXRpb24ueSBcclxuXHJcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpXHJcbiAgICAgICAgaW1nLnNyYyA9IFdhbGxcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGV0aEltZyA9IG5ldyBJbWFnZSgpXHJcbiAgICAgICAgZGV0aEltZy5zcmMgPSBEZXRoVGhpbmdzXHJcblxyXG4gICAgICAgIGN0eC5zYXZlKClcclxuXHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBNYXRoLmNlaWwoR0FNRV9XSURUSCAvIDY0KTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgTWF0aC5jZWlsKEdBTUVfSEVJR0hUIC82NCk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDY0LCAwLCA2NCwgNjQsIDY0ICogaSArIG9mZnNldFgsIDY0ICogaiArIG9mZnNldFksICA2NCwgNjQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRldGggem9uZVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgTWF0aC5jZWlsKEdBTUVfV0lEVEggLyA2NCk7IGkrKykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShkZXRoSW1nLCBcclxuICAgICAgICAgICAgICAgIGFycltpIC0gMV0sIDAsIFxyXG4gICAgICAgICAgICAgICAgNjQsIDE3MiwgXHJcbiAgICAgICAgICAgICAgICA2NCAqIGkgKyBvZmZzZXRYLCBHQU1FX0hFSUdIVCAtIDY0ICogMy41ICsgb2Zmc2V0WSwgIFxyXG4gICAgICAgICAgICAgICAgNjQsIDE3MilcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBtYXAgb2JqZWN0c1xyXG4gICAgICAgIHRoaXMubWFwLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZHJhd0ltYWdlID0gbmV3IEltYWdlKClcclxuICAgICAgICAgICAgZHJhd0ltYWdlLnNyYyA9IGVsLmltYWdlU3JjXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gZmlsbCBiZyBmb3IgY2xlYW4gdmlldyBvZiBpbWFnZVxyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZWwuYmdDb2xvclxyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoZWwueDEgKyBvZmZzZXRYLCBlbC55MSArIG9mZnNldFksICBlbC53aWR0aCwgZWwuaGVpZ2h0KVxyXG5cclxuICAgICAgICAgICAgaWYgKGVsLnN0YW5kYXJ0U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmNlaWwoZWwud2lkdGggLyA2NCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgTWF0aC5jZWlsKGVsLmhlaWdodCAvNjQpOyBqKyspIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGRyYXdJbWFnZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmltYWdlU3RhcnRYLCBlbC5pbWFnZVN0YXJ0WSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmltYWdlVywgZWwuaW1hZ2VILCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNjQgKiBpICsgZWwueDEgKyBvZmZzZXRYLCA2NCAqIGogKyBlbC55MSArIG9mZnNldFksICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNjQsIDY0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBjZW50ZXJYLFxyXG4gICAgY2VudGVyWSxcclxuICAgIG1hcE9iamVjdHNcclxufSBmcm9tICcuL2Nvc250cy5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBrZXlzLCBzdGFydFBvc3Rpb24pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XHJcbiAgICAgICAgdGhpcy5rZXlzID0ga2V5cyBcclxuICAgICAgICB0aGlzLm1hcE9iamVjdHMgPSBbXVxyXG5cclxuICAgICAgICB0aGlzLmNlbnRlciA9IHtcclxuICAgICAgICAgICAgeDogY2VudGVyWCxcclxuICAgICAgICAgICAgeTogY2VudGVyWVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIC8vIHBsYXllciBzcGVjaWZpY2F0aW9uc1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMlxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNjRcclxuXHJcbiAgICAgICAgLy8gc3RhcnQgcG9zaXRpb25cclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAuLi5zdGFydFBvc3Rpb25cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIG1vdmluZyBzcGVjaWZpY2F0aW9uc1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gMFxyXG4gICAgICAgIHRoaXMuc3BlZWRBY2NlbGVyYXRpb24gPSAwLjFcclxuICAgICAgICB0aGlzLm1heFNwZWVkID0gNVxyXG4gICAgICAgIHRoaXMubGFzdERpcmVjdGlvbiA9ICcnXHJcblxyXG4gICAgICAgIHRoaXMuaW5lcnRpb24gPSAwLjE1XHJcblxyXG4gICAgICAgIC8vIGdyYXZpdHkgc3BlY2lmaWNhdGlvbnNcclxuICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uID0gMC4xXHJcblxyXG4gICAgICAgIC8vIGp1bXAgc2V0dGluZ3NcclxuICAgICAgICB0aGlzLm1heEp1bXBIZWlnaHQgPSA2NCAqIDIuM1xyXG4gICAgICAgIHRoaXMuc3RhcnRKdW1wU3BlZWQgPSBNYXRoLnNxcnQodGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uICogdGhpcy5tYXhKdW1wSGVpZ2h0ICogMikgKyB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb25cclxuICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcblxyXG4gICAgICAgIC8vIGF0dGFja1xyXG4gICAgICAgIHRoaXMuYXR0YWNrUHJlc3NlZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRW5lbXlUb1RoZU1hcE9iamVjdHMoZW5lbXkpIHtcclxuICAgICAgICB0aGlzLm1hcE9iamVjdHMgPSBbLi4ubWFwT2JqZWN0cywgZW5lbXldXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZpbmRNb3ZlTGltaXRzKCkge1xyXG4gICAgICAgIGxldCBmbG9vcnMgPSBbXVxyXG4gICAgICAgIGxldCByb29mcyA9IFtdIFxyXG4gICAgICAgIGxldCBsZWZ0V2FsbHMgPSBbXSBcclxuICAgICAgICBsZXQgcmlnaHRXYWxscyA9IFtdXHJcblxyXG4gICAgICAgIC8vIHRlc3QsIG91ciBwb3NpdGlvbiBpcyBvbi91bmRlci9sZWZ0L3JpZ2h0IG1hcE9iamVjdCA/XHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzLmZvckVhY2goKGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBpbiBYIHJhbmdlIGJhbGNvbnkgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCBlbC54MSArIGVsLndpZHRoICYmIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiBlbC54MSkgeyAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBmaW5kIGFsbCBmbG9vcnNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA8PSBlbC55MSkgICAgZmxvb3JzLnB1c2goZWwueTEgLSB0aGlzLmhlaWdodClcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIHJvb2ZzXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gZWwueTEgKyBlbC5oZWlnaHQpIHJvb2ZzLnB1c2goZWwueTEgKyBlbC5oZWlnaHQpXHJcbiAgICAgICAgICAgIH0gICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgaW4gWSByYW5nZSBiYWxjb255XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IGVsLnkxICYmIHRoaXMucG9zaXRpb24ueSA8IGVsLnkxICsgZWwuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgIC8vIGZpbmQgYWxsIHJpZ2h0IHdhbGxzXHJcbiAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIDw9IGVsLngxKSAgICByaWdodFdhbGxzLnB1c2goZWwueDEgLSB0aGlzLndpZHRoKVxyXG4gICAgICAgICAgICAgICAvLyBmaW5kIGFsbCBsZWZ0IHdhbGxzXHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueCA+PSBlbC54MSArIGVsLndpZHRoKSBsZWZ0V2FsbHMucHVzaChlbC54MSArIGVsLndpZHRoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB7IGZsb29ycywgcm9vZnMsIGxlZnRXYWxscywgcmlnaHRXYWxscyB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShzeW1ib2wpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50U3BlZWQgPCB0aGlzLm1heFNwZWVkICYmIHN5bWJvbCA9PSAxKSB0aGlzLmN1cnJlbnRTcGVlZCArPSAgdGhpcy5zcGVlZEFjY2VsZXJhdGlvblxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudFNwZWVkID4gLTEgKiB0aGlzLm1heFNwZWVkICYmIHN5bWJvbCA9PSAtMSkgdGhpcy5jdXJyZW50U3BlZWQgLT0gIHRoaXMuc3BlZWRBY2NlbGVyYXRpb25cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50U3BlZWQgKiAxMDApIC8gMTAwIFxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAocm9vZikge1xyXG5cclxuICAgICAgICAvLyB3ZSBzdGFydCBqdW1wXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuSnVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkp1bXAgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRha2VPZmYgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAtdGhpcy5zdGFydEp1bXBTcGVlZFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMgdGFrZW9mZiBtZWNoYW5pc21cclxuICAgICAgICBpZiAodGhpcy50YWtlT2ZmKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5mbG9vcigxMCAqIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCkgPT0gMCB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPCByb29mKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRha2VPZmYgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgKz0gdGhpcy5ncmF2aXR5QWNjZWxlcmF0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eShmbG9vcikge1xyXG4gICAgICAgIGxldCBncmF2aXR5ID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCBmbG9vcil7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID4gZmxvb3IpIHtcclxuICAgICAgICAgICAgICAgIGdyYXZpdHkgPSBmbG9vciAtIHRoaXMucG9zaXRpb24ueSBcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5ICs9IHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCArPSB0aGlzLmdyYXZpdHlBY2NlbGVyYXRpb25cclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW5KdW1wID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRKdW1wSGVpZ2h0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlDdXJyZW50U3BlZWQgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ3Jhdml0eVxyXG4gICAgfVxyXG5cclxuICAgIGZ1dHVyZVBvc2l0aW9uSW5PYmpjZXQoc3BlZWRYLCBzcGVlZFkpIHtcclxuICAgICAgICBsZXQgc3BlZWRzID0ge1xyXG4gICAgICAgICAgICB4OiBzcGVlZFgsXHJcbiAgICAgICAgICAgIHk6IHNwZWVkWVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzLmZvckVhY2goKGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3ZSBpbiBYIHJhbmdlIGJhbGNvbnkgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgc3BlZWRYIDwgZWwueDEgKyBlbC53aWR0aCAmJiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoICsgc3BlZWRYID4gZWwueDEpIHsgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgaW4gWSByYW5nZSBiYWxjb255ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICsgc3BlZWRZID4gZWwueTEgJiYgdGhpcy5wb3NpdGlvbi55ICsgc3BlZWRZIDwgZWwueTEgKyBlbC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWRYKSA+IE1hdGguYWJzKHNwZWVkWSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlT2ZmID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF2aXR5Q3VycmVudFNwZWVkID0gMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRzLnkgPSAwIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoc3BlZWRYKSA8IE1hdGguYWJzKHNwZWVkWSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcy54ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZU9mZiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3Jhdml0eUN1cnJlbnRTcGVlZCA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkcyA9IHsgeDogMCwgeTogMH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSAgXHJcblxyXG4gICAgICAgIH0pIFxyXG5cclxuICAgICAgICByZXR1cm4gc3BlZWRzXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNvbnRleHRcclxuICAgICAgICBsZXQgc3BlZWRYID0gMFxyXG4gICAgICAgIGxldCBzcGVlZFkgPSAwXHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIG1vc3QgbmVhcmVzdCBsaW1pdHNcclxuICAgICAgICBsZXQgbGltaXRzID0gdGhpcy5maW5kTW92ZUxpbWl0cygpXHJcbiAgIFxyXG4gICAgICAgIGxldCBmbG9vciAgICAgPSBNYXRoLm1pbiguLi5saW1pdHMuZmxvb3JzKVxyXG4gICAgICAgIGxldCByb29mICAgICAgPSBNYXRoLm1heCguLi5saW1pdHMucm9vZnMpIFxyXG4gICAgICAgIGxldCByaWdodFdhbGwgPSBNYXRoLm1pbiguLi5saW1pdHMucmlnaHRXYWxscykgXHJcbiAgICAgICAgbGV0IGxlZnRXYWxsICA9IE1hdGgubWF4KC4uLmxpbWl0cy5sZWZ0V2FsbHMpICBcclxuXHJcbiAgICAgICAgLy8gbW92ZSBsZWZ0L3JpZ2h0XHJcbiAgICAgICAgaWYgICAgICAodGhpcy5rZXlzLnJpZ2h0ICYmIHRoaXMucG9zaXRpb24ueCA8IHJpZ2h0V2FsbCkgdGhpcy5tb3ZlKDEpICAgICAgICBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleXMubGVmdCAgJiYgdGhpcy5wb3NpdGlvbi54ID4gbGVmdFdhbGwpICB0aGlzLm1vdmUoLTEpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGluZXJ0aW9uXHJcbiAgICAgICAgICAgIGlmICggTWF0aC5mbG9vcigxMCAqIE1hdGguYWJzKHRoaXMuY3VycmVudFNwZWVkKSkgPT0gMCApIHRoaXMuY3VycmVudFNwZWVkID0gMCBcclxuICAgICAgICAgICAgLy8gZWxzZSB0aGlzLmN1cnJlbnRTcGVlZCAqPSB0aGlzLmluZXJ0aW9uICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2lnblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWVkID4gMCkgc2lnbiA9IC0xXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA8IDApICBzaWduID0gMVxyXG4gICAgICAgICAgICAgICAgZWxzZSBzaWduID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgKz0gc2lnbiAqIHRoaXMuaW5lcnRpb24gICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gIE1hdGguY2VpbCh0aGlzLmN1cnJlbnRTcGVlZCAqIDEwMCkgLyAxMDAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyBoZWxwZXIgd2l0aCBicmFraW5nXHJcbiAgICAgICAgaWYgKCAodGhpcy5rZXlzLnJpZ2h0ICYmIHRoaXMucG9zaXRpb24ueCA8IHJpZ2h0V2FsbCAmJiB0aGlzLmN1cnJlbnRTcGVlZCA8IDApIHx8XHJcbiAgICAgICAgICAgICAodGhpcy5rZXlzLmxlZnQgICYmIHRoaXMucG9zaXRpb24ueCA+IGxlZnRXYWxsICYmIHRoaXMuY3VycmVudFNwZWVkID4gMCkgKSB7XHJcbiAgICAgICAgICAgIC8vIGluZXJ0aW9uXHJcbiAgICAgICAgICAgIGlmICggTWF0aC5mbG9vcigxMCAqIE1hdGguYWJzKHRoaXMuY3VycmVudFNwZWVkKSkgPT0gMCApIHRoaXMuY3VycmVudFNwZWVkID0gMCBcclxuICAgICAgICAgICAgLy8gZWxzZSB0aGlzLmN1cnJlbnRTcGVlZCAqPSB0aGlzLmluZXJ0aW9uICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2lnblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWVkID4gMCkgc2lnbiA9IC0xXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1cnJlbnRTcGVlZCA8IDApICBzaWduID0gMVxyXG4gICAgICAgICAgICAgICAgZWxzZSBzaWduID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgKz0gc2lnbiAqIHRoaXMuaW5lcnRpb24gICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNwZWVkID0gIE1hdGguY2VpbCh0aGlzLmN1cnJlbnRTcGVlZCAqIDEwMCkgLyAxMDAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gbGVmdC9yaWdodCB3YWxsXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNwZWVkID4gMCkgeyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmN1cnJlbnRTcGVlZCA+IHJpZ2h0V2FsbCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTcGVlZCA9IHJpZ2h0V2FsbCAtIHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudFNwZWVkIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5jdXJyZW50U3BlZWQgPCBsZWZ0V2FsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3BlZWQgPSBsZWZ0V2FsbCAtIHRoaXMucG9zaXRpb24ueFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BlZWRYID0gdGhpcy5jdXJyZW50U3BlZWRcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8ganVtcFxyXG4gICAgICAgIGlmICggKHRoaXMua2V5cy51cCAmJiB0aGlzLmNhbkp1bXAgKSB8fCB0aGlzLnRha2VPZmYpIHNwZWVkWSArPSB0aGlzLmp1bXAocm9vZilcclxuICAgICAgICAvLyBncmF2aXR5XHJcbiAgICAgICAgaWYgKCF0aGlzLnRha2VPZmYpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRZICs9IHRoaXMuZ3Jhdml0eShmbG9vcilcclxuXHJcbiAgICAgICAgbGV0IG5ld1NwZWVkcyA9IHRoaXMuZnV0dXJlUG9zaXRpb25Jbk9iamNldChzcGVlZFgsIHNwZWVkWSlcclxuXHJcbiAgICAgICAgLy8gbW92ZSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBuZXdTcGVlZHMueFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBuZXdTcGVlZHMueVxyXG5cclxuXHJcbiAgICAgICAgLy8gZW5lbXkgd2lsbCBiZSByZWFsIG9iamVjdFxyXG4gICAgICAgIHRoaXMueDEgPSB0aGlzLnBvc2l0aW9uLnhcclxuICAgICAgICB0aGlzLnkxID0gdGhpcy5wb3NpdGlvbi55XHJcblxyXG4gICAgICAgIC8vIGZvciB0ZXN0aW5nXHJcbiAgICAgICAgLy8gY3R4LnNhdmUoKVxyXG5cclxuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJ3JlZCdcclxuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5jZW50ZXIueCwgdGhpcy5jZW50ZXIueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcblxyXG4gICAgICAgIC8vIGN0eC5yZXN0b3JlKClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgYW5pbWF0aW9uQ2VudGVyWCxcclxuICAgIGFuaW1hdGlvbkNlbnRlclksXHJcbiAgICBoZXJvc1xyXG59IGZyb20gJy4vY29zbnRzLmpzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwbGF5ZXIsIGtleVByZXNzLCBOdW1iZXJPZkhlcm8sIGNlbnRlcktleSwgc3BlYWNpYWxQb3N0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjb250ZXh0XHJcbiAgICAgICAgdGhpcy5rZXlQcmVzcyA9IGtleVByZXNzXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcclxuXHJcbiAgICAgICAgdGhpcy5jZW50ZXJYID0gYW5pbWF0aW9uQ2VudGVyWFxyXG4gICAgICAgIHRoaXMuY2VudGVyWSA9IGFuaW1hdGlvbkNlbnRlcllcclxuXHJcbiAgICAgICAgdGhpcy5jZW50ZXJLZXkgPSBjZW50ZXJLZXlcclxuICAgICAgICB0aGlzLnNwZWFjaWFsUG9zdGlvbiA9IHNwZWFjaWFsUG9zdGlvblxyXG5cclxuICAgICAgICAvLyBwbGF5ZXIgc3ByaXRlcyBcclxuICAgICAgICB0aGlzLmhlcm8gPSBuZXcgSW1hZ2UoKVxyXG4gICAgICAgIHRoaXMuaGVyby5zcmMgPSBoZXJvc1tOdW1iZXJPZkhlcm9dLnNyY1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IDEyOFxyXG5cclxuICAgICAgICAvLyBtb3ZlaW5nXHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMVxyXG4gICAgICAgIHRoaXMubnVtYmVyID0gMlxyXG4gICAgICAgIHRoaXMuWCA9IDExXHJcblxyXG4gICAgICAgIC8vIGRpcmVjdGlvblxyXG4gICAgICAgIHRoaXMubGFzdERpcmVjdGlvbiA9IDBcclxuICAgICAgICBcclxuICAgICAgICAvL2F0dGFjayBhbmltYXRpb246IFxyXG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0gMFxyXG4gICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICAgICAgdGhpcy5hdHRhY2tQcmVzc2VkID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBsZWZ0UmlnaHRBbmltYXRpb24oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IGltZ1JvdyA9IGRpcmVjdGlvblxyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0RGlyZWN0aW9uICE9PSBkaXJlY3Rpb24pIHRoaXMuY291bnRlciA9IDBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8IHRoaXMuWCkgbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubnVtYmVyIDwgNSkgdGhpcy5udW1iZXIrK1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwXHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyID0gMlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5YID0gKCAxMSAtIE1hdGguYWJzKCBNYXRoLmNlaWwoIHRoaXMucGxheWVyLmN1cnJlbnRTcGVlZCApICkpICogKHRoaXMubnVtYmVyIC0gMSlcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3U3RhdGljSW1hZ2UodGhpcy5zaXplICogdGhpcy5udW1iZXIsIGltZ1JvdylcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudGVyKysgICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFzdERpcmVjdGlvbiA9IGRpcmVjdGlvblxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaygpIHtcclxuICAgICAgICB0aGlzLmRyYXdTdGF0aWNJbWFnZSh0aGlzLnNpemUgKiB0aGlzLmN1cnJlbnRJbWFnZSwgdGhpcy5zaXplICogMiArIHRoaXMubGFzdERpcmVjdGlvbikgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXR0YWNrUHJlc3NlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnBsYXllci5hdHRhY2tQcmVzc2VkID0gdHJ1ZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3VudCA+IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDBcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UrK1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEltYWdlID4gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAwXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tQcmVzc2VkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmF0dGFja1ByZXNzZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wID0gdHJ1ZVxyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICB9IGVsc2UgdGhpcy5jb3VudCsrXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRyYXdTdGF0aWNJbWFnZSh4UG9zaXRpb24sIHlQb3NpdGlvbikge1xyXG4gICAgICAgIGxldCB4LCB5XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNlbnRlcktleSkge1xyXG4gICAgICAgICAgICB4ID0gdGhpcy5jZW50ZXJYXHJcbiAgICAgICAgICAgIHkgPSB0aGlzLmNlbnRlcllcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB4ID0gdGhpcy5jZW50ZXJYIC0gdGhpcy5zcGVhY2lhbFBvc3Rpb24ueCArIHRoaXMucGxheWVyLnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgeSA9IHRoaXMuY2VudGVyWSAtIHRoaXMuc3BlYWNpYWxQb3N0aW9uLnkgICsgdGhpcy5wbGF5ZXIucG9zaXRpb24ueVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaGVybywgXHJcbiAgICAgICAgICAgIHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBcclxuICAgICAgICAgICAgdGhpcy5zaXplLCB0aGlzLnNpemUsIFxyXG4gICAgICAgICAgICB4LCB5LCBcclxuICAgICAgICAgICAgdGhpcy5zaXplLCB0aGlzLnNpemUpIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSB0aGlzLmtleVByZXNzLnJpZ2h0ID8gMCA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2V5UHJlc3MubGVmdCA/ICB0aGlzLnNpemUgOiB0aGlzLmxhc3REaXJlY3Rpb25cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0b3AgJiYgIXRoaXMua2V5UHJlc3MuYXR0YWNrKSB0aGlzLnN0b3AgPSBmYWxzZVxyXG5cclxuICAgICAgICBpZiAgICAgICh0aGlzLmF0dGFja1ByZXNzZWQpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaygpIC8vYXR0YWNrXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5rZXlQcmVzcy5hdHRhY2sgJiYgIXRoaXMuYXR0YWNrUHJlc3NlZCAmJiAhdGhpcy5zdG9wKSAgdGhpcy5hdHRhY2soKSAvL2F0dGFja1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMua2V5UHJlc3MuYmxvY2spICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1N0YXRpY0ltYWdlKDQgKiB0aGlzLnNpemUsIDIgKiB0aGlzLnNpemUgKyB0aGlzLmxhc3REaXJlY3Rpb24pIC8vIGJsb2NrXHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMucGxheWVyLmNhbkp1bXApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U3RhdGljSW1hZ2UodGhpcy5zaXplLCB0aGlzLmxhc3REaXJlY3Rpb24pIC8vIGZseSAgICAgICAgIFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5UHJlc3MucmlnaHQpICAgICB0aGlzLmxlZnRSaWdodEFuaW1hdGlvbigwKSAvLyByaWdodFxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmtleVByZXNzLmxlZnQpIHRoaXMubGVmdFJpZ2h0QW5pbWF0aW9uKHRoaXMuc2l6ZSkgLy8gbGVmdFxyXG4gICAgICAgICAgICBlbHNlICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1N0YXRpY0ltYWdlKDAsIHRoaXMubGFzdERpcmVjdGlvbikgLy8gc3RheSAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbmNhbnZhcyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNhbnZhc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9zdHlsZS5zYXNzXCIsXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDhCQUFzQjtVQUFHLHNCQUFBO0FDRTdCOztBQUVBO0VEQUksWUFBWTtFQUFRLGlCQUFBO0FDR3hCOztBQUVBO0VERjhCLHVCQUFBO0FDSTlCOztBQUVBO0VERkksb0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixhQUFBO0VBQ0Esd0JBQVc7TUFBRyxxQkFBQTtVQ0tSLHVCQUF1QjtFQUMvQix5QkFBeUI7TUFDckIsc0JBQXNCO1VBQ2xCLG1CQUFtQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO01BQ3pCLDBCQUEwQjtVQUN0QixzQkFBc0I7RUFDOUIsV0FBVztBQUNiO0FBQ0Esb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdkNWQ5NDI4MTc3MTM2YjM2MmU1NjkwNTNkOTYxMmI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNTBiYjg1ODdlZTg0MGFkZDkwZTMzMTcwODFjMmI0Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2YwODQ4ZTdhZmU4Yzc2ODA0OWY0ZmNmOGRiMWY4NjEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5ZTRiYTJjMWU1Nzk3ZmZjNjVhOWU4YzBmM2QwZTk3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NGM1NjdmNmNjMTU1NGUxNTcyZGJjOTJkZjllZjBkMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2E5NDBlM2M5OWE4ODVkMWNjMmZmZDRkNDNiZjgzMTMucG5nXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==