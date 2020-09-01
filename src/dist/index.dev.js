"use strict";

var _player = _interopRequireDefault(require("./scripts/player.js"));

var _keypressAciton = _interopRequireDefault(require("./scripts/keypressAciton.js"));

var _map = _interopRequireDefault(require("./scripts/map.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var GAME_HEIGHT = canvas.clientHeight;
var GAME_WIDHT = canvas.clientWidth;
var WALL_WIDTH = 5;
var keyPressUp = new _keypressAciton["default"]();
var player = new _player["default"](GAME_HEIGHT, GAME_WIDHT, ctx, keyPressUp, WALL_WIDTH);
var map = new _map["default"](GAME_HEIGHT, GAME_WIDHT, ctx, WALL_WIDTH);

function gameLoop() {
  ctx.clearRect(0, 0, GAME_WIDHT, GAME_HEIGHT);
  player.render();
  map.render();
  requestAnimationFrame(gameLoop);
}

gameLoop();