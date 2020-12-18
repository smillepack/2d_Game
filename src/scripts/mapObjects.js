import Wall from '../images/Objects.png'
import DeathThing from '../images/deathThings.png'

import {
    GAME_HEIGHT,
    GAME_WIDTH,
    WALL_WIDTH
} from './cosnts.js'

class MapObject {
    constructor() {
        this.objects = [
            {
                name: 'left wall',
                bgColor: 'black',
                image: Wall,
                imageStartY: 0,
                imageStartX: 0,
                imageW: 64,
                imageH: 64,
                x1: 0,
                y1: 0,
                width: WALL_WIDTH,
                height: GAME_HEIGHT,
                standartSize: true
            }, 
            {
                name: 'right wall',
                bgColor: 'black',
                image: Wall,
                imageStartY: 0,
                imageStartX: 0,
                imageW: 64,
                imageH: 64,
                x1:  GAME_WIDTH - WALL_WIDTH,
                y1: 0,
                width: WALL_WIDTH,
                height: GAME_HEIGHT,
                standartSize: true
            },
            {
                name: 'roof',
                bgColor: 'black',
                image: Wall,
                imageStartY: 0,
                imageStartX: 0,
                imageW: 64,
                imageH: 64,
                x1: 0,
                y1: 0,
                width:  GAME_WIDTH - WALL_WIDTH,
                height: WALL_WIDTH,
                standartSize: true
            },
            {
                name: 'floor',
                bgColor: 'black',
                image: Wall,
                imageStartY: 0,
                imageStartX: 0,
                imageW: 64,
                imageH: 64,
                x1: 0,
                y1: GAME_HEIGHT - WALL_WIDTH,
                width:  GAME_WIDTH - WALL_WIDTH,
                height: WALL_WIDTH,
                standartSize: true
            }, 
            {
                name: 'balcony 1',
                bgColor: 'black',
                image: Wall,
                imageStartY: 0,
                imageStartX: 0,
                imageW: 64,
                imageH: 64,
                x1: 5 * WALL_WIDTH,            
                y1:  WALL_WIDTH * 8,
                width: WALL_WIDTH * 10,
                height: WALL_WIDTH,
                standartSize: true
            },
            {
                name: 'balcony 2',
                bgColor: 'black',
                image: Wall,
                imageStartY: 0,
                imageStartX: 0,
                imageW: 64,
                imageH: 64,
                x1: 6 * WALL_WIDTH,            
                y1: WALL_WIDTH * 4 - 1,
                width: WALL_WIDTH * 8,
                height: WALL_WIDTH,
                standartSize: true
            },
            {
                name: 'balcony 3',
                bgColor: 'black',
                image: Wall,
                imageStartY: 0,
                imageStartX: 0,
                imageW: 64,
                imageH: 64,
                x1: 1 * WALL_WIDTH,            
                y1: WALL_WIDTH * 6 - 1,
                width: WALL_WIDTH * 2,
                height: WALL_WIDTH,
                standartSize: true
            },
            {
                name: 'balcony 4',
                bgColor: 'black',
                image: Wall,
                imageStartY: 0,
                imageStartX: 0,
                imageW: 64,
                imageH: 64,
                x1: GAME_WIDTH - WALL_WIDTH * 3,            
                y1: WALL_WIDTH * 6 - 1,
                width: WALL_WIDTH * 2,
                height: WALL_WIDTH,
                standartSize: true
            },
        ]
    }
}

export default MapObject