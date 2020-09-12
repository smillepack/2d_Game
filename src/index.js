import Player from './scripts/player.js'
import KeyPressUp from './scripts/keypressAciton.js'
import Map from './scripts/map.js'
import MapObject from './scripts/mapObjects.js'
import { buttons } from './scripts/buttons.js'
import style from './styles/style.css'

let root = document.getElementById('root')
root.classList.add('canvasContainer')

let canvasContainer = document. createElement('div')
let canvas = document.createElement('canvas')
    canvas.width = 200
    canvas.height = 160

canvasContainer.append(canvas)

root.append(canvasContainer)
root.append(buttons)

let ctx = canvas.getContext('2d')

const GAME_HEIGHT = canvas.clientHeight 
const GAME_WIDHT  = canvas.clientWidth
const WALL_WIDTH  = 5

let mapObjects = new MapObject(GAME_HEIGHT, GAME_WIDHT, WALL_WIDTH)

let keyPressUp = new KeyPressUp()
let player     = new Player(ctx, keyPressUp, mapObjects)
let map        = new Map(ctx, mapObjects)

function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDHT, GAME_HEIGHT)

    player.render()
    map.render()

    requestAnimationFrame(gameLoop)
}

gameLoop()
