import {
    animationCenterX,
    animationCenterY,
    heros
} from './cosnts.js'


export default class PlayerAnimation {
    constructor(context, player, keyPress, NumberOfHero, centerKey, speacialPostion) {
        this.ctx = context
        this.keyPress = keyPress
        this.player = player

        this.centerX = animationCenterX
        this.centerY = animationCenterY

        this.centerKey = centerKey
        this.speacialPostion = speacialPostion

        // player sprites 
        this.hero = new Image()
        this.hero.src = heros[NumberOfHero].src
        this.size = 128

        // moveing
        this.counter = 1
        this.number = 2
        this.X = 11

        // direction
        this.lastDirection = 0
        
        //attack animation: 
        this.currentImage = 0
        this.count = 0
        this.attackPressed = false
    }

    leftRightAnimation(direction) {
        let imgRow = direction

        if (this.lastDirection !== direction) this.counter = 0

        if (this.counter < this.X) null
        else if (this.number < 5) this.number++
        else {
            this.counter = 0
            this.number = 2
        }

        this.X = ( 11 - Math.abs( Math.ceil( this.player.currentSpeed ) )) * (this.number - 1)

        this.drawStaticImage(this.size * this.number, imgRow)

        this.counter++        
        this.lastDirection = direction
    }

    attack() {
        this.drawStaticImage(this.size * this.currentImage, this.size * 2 + this.lastDirection)     
           
        this.attackPressed = true
        this.player.attackPressed = true

        if (this.count > 5) {
            this.count = 0
            this.currentImage++

            if (this.currentImage > 3) {
                this.currentImage = 0

                this.attackPressed = false
                this.player.attackPressed = false
                this.stop = true
            } 

        } else this.count++
        
    }


    drawStaticImage(xPosition, yPosition) {
        let x, y

        if (this.centerKey) {
            x = this.centerX
            y = this.centerY
        } else {
            x = this.centerX - this.speacialPostion.x + this.player.position.x
            y = this.centerY - this.speacialPostion.y  + this.player.position.y
        }

        this.ctx.drawImage(this.hero, 
            xPosition, yPosition, 
            this.size, this.size, 
            x, y, 
            this.size, this.size) 
    }

    render() {
        this.lastDirection = this.keyPress.right ? 0 : 
                             this.keyPress.left ?  this.size : this.lastDirection


        if (this.stop && !this.keyPress.attack) this.stop = false

        if      (this.attackPressed)                                         this.attack() //attack
        else if (this.keyPress.attack && !this.attackPressed && !this.stop)  this.attack() //attack
        else if (this.keyPress.block)                                        this.drawStaticImage(4 * this.size, 2 * this.size + this.lastDirection) // block
        else if (!this.player.canJump)                                       this.drawStaticImage(this.size, this.lastDirection) // fly         
        else {
            
            if (this.keyPress.right)     this.leftRightAnimation(0) // right
            else if (this.keyPress.left) this.leftRightAnimation(this.size) // left
            else                         this.drawStaticImage(0, this.lastDirection) // stay      
        }

        
    }
}