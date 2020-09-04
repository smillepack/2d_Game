import Player from './scripts/player.js'
import KeyPressUp from './scripts/keypressAciton.js'
import Map from './scripts/map.js'

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

const GAME_HEIGHT = canvas.clientHeight 
const GAME_WIDHT  = canvas.clientWidth
const WALL_WIDTH  = 5

let keyPressUp = new KeyPressUp()
let player = new Player(GAME_HEIGHT, GAME_WIDHT, ctx, keyPressUp, WALL_WIDTH)
let map    = new Map(GAME_HEIGHT, GAME_WIDHT, ctx, WALL_WIDTH)
// hi from another pc

function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDHT, GAME_HEIGHT)

    player.render()
    map.render()

    requestAnimationFrame(gameLoop)
}

gameLoop()

console.log('hi from new laptop')