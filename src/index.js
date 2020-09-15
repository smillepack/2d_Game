import Player from './scripts/player.js'
import KeyPressUp from './scripts/keypressAciton.js'
import Map from './scripts/map.js'
import MapObject from './scripts/mapObjects.js'
import MiniMap from './scripts/miniMap.js'
import { buttons } from './scripts/buttons.js'
import style from './styles/style.css'

const GAME_HEIGHT = 160
const GAME_WIDHT  = 200
const WALL_WIDTH  = 5

let root = document.getElementById('root')
root.classList.add('canvasContainer')

let canvasContainer = document. createElement('div')
let canvas = document.createElement('canvas')
    canvas.width = GAME_WIDHT
    canvas.height = GAME_HEIGHT

canvasContainer.append(canvas)

root.append(canvasContainer)
root.append(buttons)

let ctx = canvas.getContext('2d')

let centerX = GAME_WIDHT / 2 - 5
let centerY = GAME_HEIGHT / 2 - 5

let mapObjects = new MapObject(GAME_HEIGHT, GAME_WIDHT, WALL_WIDTH)

let keyPressUp = new KeyPressUp()
let player     = new Player(ctx, keyPressUp, mapObjects, GAME_WIDHT, GAME_HEIGHT)
let map        = new Map(ctx, mapObjects, player.position, centerX, centerY)
let miniMap    = new MiniMap(ctx, mapObjects.objects, player, GAME_WIDHT, GAME_HEIGHT)

function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDHT, GAME_HEIGHT)

    player.render()
    map.render()
    miniMap.render()

    requestAnimationFrame(gameLoop)
}

gameLoop()
