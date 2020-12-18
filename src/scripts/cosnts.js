import hero1 from '../images/hero1.png'
import hero2 from '../images/hero2.png'
import hero3 from '../images/hero3.png'
import hero4 from '../images/hero4.png'


const GAME_HEIGHT = 64 * 14
const GAME_WIDTH  = 64 * 20

const canvas_height = document.documentElement.clientHeight - 15
const canvas_width = document.documentElement.clientWidth - 10

const WALL_WIDTH  = 64

const PLAYER_SPECIFICATION = {
    phys: {
        width: 22,
        height: 64
    },
    animation: {
        width: 128,
        height: 128
    }
}

// physical center
const centerX = ( canvas_width - PLAYER_SPECIFICATION.phys.width ) / 2 
const centerY = ( canvas_height - PLAYER_SPECIFICATION.phys.height ) / 2 


//animation center
const animationCenterX = ( canvas_width - PLAYER_SPECIFICATION.animation.width ) / 2 
const animationCenterY = ( canvas_height - PLAYER_SPECIFICATION.animation.height ) / 2 



const heros = {
    1: {
        src: hero1,
        attckRange: 34
    },
    2: {
        src: hero2,
        attckRange: 52
    },
    3: {
        src: hero3,
        attckRange: 43
    },
    4: {
        src: hero4,
        attckRange: 52
    },
}


const arr = []
for (let i = 1; i < Math.ceil(GAME_WIDTH / 64); i++) {
    let oneOrTwo = Math.random() > 0.5 ? 0 : 64
    arr.push(oneOrTwo)
}

export {
    GAME_HEIGHT,
    GAME_WIDTH,
    canvas_height,
    canvas_width,
    WALL_WIDTH,
    centerX,
    centerY,
    animationCenterX,
    animationCenterY,
    heros,
    PLAYER_SPECIFICATION,
    arr
}