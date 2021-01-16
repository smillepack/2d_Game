import Player from './scripts/player.js'
import PlayerAnimation from './scripts/playerAnimation.js'
import KeyPressUp from './scripts/keypressAciton.js'

import Map from './scripts/map.js'
import ctx from './scripts/canvas.js'
import {
    canvas_height,
    canvas_width,
} from './scripts/cosnts.js'

import II from './scripts/II.js'
import  './styles/style.css'


let globalId = {
    animation: null
}

// player 1
let keyPressUp      = new KeyPressUp('awdfg')
let player          = new Player(ctx, keyPressUp, {x: 64 * 5, y: 64 * 6})
let playerAnimation = new PlayerAnimation(ctx, player, keyPressUp, 1, true, {})



// II
let ii = new II()
let player2          = new Player(ctx, ii, {x: 64 * 8, y: 64 * 6})
let playerAnimation2 = new PlayerAnimation(ctx, player2, ii, 2, false, player.position)

player.addEnemyToTheMapObjects(player2)
player2.addEnemyToTheMapObjects(player)
ii.addPlayers(player, player2)

let map             = new Map(ctx, player.position)


function gameLoop() {
    ctx.clearRect(0, 0, canvas_width, canvas_height)
    map.render()

    ii.render()

    player.render()
    playerAnimation.render()
    
    player2.render()
    playerAnimation2.render()

    globalId.animation = requestAnimationFrame(gameLoop)
}

gameLoop()