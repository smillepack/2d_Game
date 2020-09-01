"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(gameHeight, gameWidth, context, keys, wallWidth) {
    _classCallCheck(this, Player);

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

  _createClass(Player, [{
    key: "render",
    value: function render() {
      var ctx = this.context;
      var speed = 0;
      var gravity = 0;

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
  }]);

  return Player;
}();

exports["default"] = Player;