export default class Map {
    constructor(gameHeight, gameWidth, context, wallWidth) {
        this.wallWidth = wallWidth
        this.map = [
            {
                // leftwall
                x1: 0,
                y1: 0,
                width: this.wallWidth,
                height: gameHeight,
                color: 'grey'
            }, 
            {
                // right
                x1: gameWidth - this.wallWidth,
                y1: 0,
                width: this.wallWidth,
                height: gameHeight,
                color: 'grey'
            },
            {
                // top
                x1: 0,
                y1: 0,
                width: gameWidth - this.wallWidth,
                height: this.wallWidth,
                color: 'grey'
            },
            {
                // bottom
                x1: 0,
                y1: gameHeight - this.wallWidth,
                width: gameWidth - this.wallWidth,
                height: this.wallWidth,
                color: 'grey'
            }
        ]
        
        this.context = context
    }

    render() {
        let ctx = this.context
        ctx.save()

        this.map.forEach(el => {
            ctx.fillStyle = el.color
            ctx.fillRect(el.x1, el.y1, el.width, el.height)
        })

        ctx.restore()
    }
}