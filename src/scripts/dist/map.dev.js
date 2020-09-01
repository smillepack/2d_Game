"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Map =
/*#__PURE__*/
function () {
  function Map(gameHeight, gameWidth, context, wallWidth) {
    _classCallCheck(this, Map);

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

  _createClass(Map, [{
    key: "render",
    value: function render() {
      var ctx = this.context;
      ctx.save();
      this.map.forEach(function (el) {
        ctx.fillStyle = el.color;
        ctx.fillRect(el.x1, el.y1, el.width, el.height);
      });
      ctx.restore();
    }
  }]);

  return Map;
}();

exports["default"] = Map;