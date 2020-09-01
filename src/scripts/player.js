export default class Player {
    constructor(gameHeight, gameWidth, context, keys, wallWidth) {
        this.context = context
        this.keys = keys 

        this.gameHeight = gameHeight
        this.gameWidth = gameWidth
        this.wallWidth = wallWidth

        this.width = 10
        this.height = 10

        this.speed = 2

        this.position = {
            x: 50,
            y: 10
        }
        this.color = 'red'
    }

    render() {
        let ctx = this.context
        let speed = 0
        let gravity = 0

        if (this.keys.right && this.position.x < this.gameWidth - this.wallWidth - this.width) {
            speed = this.speed
        } else if (this.keys.left && this.position.x > this.wallWidth) {
            speed = -this.speed
        }


        if (this.position.y < this.gameHeight - this.height - this.wallWidth){
            gravity = this.speed
        } 

        this.position.x += speed
        this.position.y += gravity
        
        // draw
        ctx.save()

        ctx.fillStyle = this.color 
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

        ctx.restore()
    }
}
