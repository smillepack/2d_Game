import {
    canvas_height,
    canvas_width,
} from './cosnts.js'




let root = document.getElementById('root')
root.classList.add('canvasContainer')

let canvas = document.createElement('canvas')
    canvas.width = canvas_width
    canvas.height = canvas_height

let ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = false
    
root.append(canvas)


window.addEventListener('resize', create())
document.addEventListener('onload', create())

export default ctx

function create() {
    canvas.width = document.documentElement.clientWidth - 10
    canvas.height = document.documentElement.clientHeight - 15
}