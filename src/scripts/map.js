import Wall from '../images/objects.png'
import DethThings from '../images/deathThings.png'

import {
    GAME_HEIGHT,
    GAME_WIDTH,
    centerX, 
    centerY,
    arr,
    mapObjects
} from './cosnts.js'


export default class Map {
    constructor(context, playerPosition) {
        this.map = mapObjects
        this.playerPosition = playerPosition
        this.context = context
    }

    render() {
        let ctx = this.context

        let offsetX =  centerX - this.playerPosition.x
        let offsetY = centerY - this.playerPosition.y 

        let img = new Image()
        img.src = Wall
        
        let dethImg = new Image()
        dethImg.src = DethThings

        ctx.save()

        //background
        for (let i = 1; i < Math.ceil(GAME_WIDTH / 64); i++) {
            for (let j = 1; j < Math.ceil(GAME_HEIGHT /64); j++) {
                ctx.drawImage(img, 64, 0, 64, 64, 64 * i + offsetX, 64 * j + offsetY,  64, 64)
            }
        }

        // deth zone
        for (let i = 1; i < Math.ceil(GAME_WIDTH / 64); i++) {
            
            ctx.drawImage(dethImg, 
                arr[i - 1], 0, 
                64, 172, 
                64 * i + offsetX, GAME_HEIGHT - 64 * 3.5 + offsetY,  
                64, 172)
        }


        // map objects
        this.map.forEach(el => {
            let drawImage = new Image()
            drawImage.src = el.imageSrc


            // fill bg for clean view of image
            ctx.fillStyle = el.bgColor
            ctx.fillRect(el.x1 + offsetX, el.y1 + offsetY,  el.width, el.height)

            if (el.standartSize) {
                for (let i = 0; i < Math.ceil(el.width / 64); i++) {
                    for (let j = 0; j < Math.ceil(el.height /64); j++) {                    
                        ctx.drawImage(drawImage, 
                                    el.imageStartX, el.imageStartY, 
                                    el.imageW, el.imageH, 
                                    64 * i + el.x1 + offsetX, 64 * j + el.y1 + offsetY,  
                                    64, 64)
                    }
                }
            } 
            
        })
                    


        ctx.restore()
    }
}