import Player from './scripts/player.js'
import PlayerAnimation from './scripts/playerAnimation.js'
import KeyPressUp from './scripts/keypressAciton.js'

import Map from './scripts/map.js'
import MapObject from './scripts/mapObjects.js'
import MiniMap from './scripts/miniMap.js'

import ParametrsForFixBags from './scripts/parametrsForFixBags.js'
import ctx from './scripts/canvas.js'
import {
    canvas_height,
    canvas_width,
} from './scripts/cosnts.js'

import II from './scripts/II.js'
import  './styles/style.css'


let globalId = {
    animation: ''
}

let mapObjects      = new MapObject()

// player 1
let keyPressUp      = new KeyPressUp('awdfg', globalId)
let player          = new Player(ctx, keyPressUp, mapObjects)
let playerAnimation = new PlayerAnimation(ctx, player, keyPressUp, 1)


let ii = new II(ctx, {}, mapObjects, player)


let map             = new Map(ctx, mapObjects, player.position)
// let miniMap         = new MiniMap(ctx, mapObjects.objects, player, canvas_width, canvas_height)
// let displayParam    = new ParametrsForFixBags(ctx, player)



function gameLoop() {
    ctx.clearRect(0, 0, canvas_width, canvas_height)
    map.render()

    player.render()
    playerAnimation.render()

    ii.render()
    // playerAnimation2.render()

    // miniMap.render()
    // displayParam.render()

    globalId.animation = requestAnimationFrame(gameLoop)
}

gameLoop()
