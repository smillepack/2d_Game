export default class MiniMap{
    constructor(ctx, mapObjects, player, gameWidth, gameHeight) {
        this.ctx = ctx

        this.player = player
        this.mapObjects = [ 
            ...mapObjects,            
        ]

        this.position = {
            x: 0,
            y: 0
        }

        this.koef = 3

        this.width = gameWidth / this.koef
        this.height = gameHeight / this.koef
    }

    render() {
        let ctx = this.ctx

        ctx.save()

        ctx.rect(this.position.x, this.position.y, this.width, this.height)
        ctx.stroke()

        ctx.fillStyle = 'gray'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)


        this.mapObjects.forEach(el => {
            ctx.fillStyle = el.color
            ctx.fillRect(el.x1 / this.koef, el.y1 / this.koef, el.width / this.koef, el.height / this.koef)
        })        

        ctx.fillStyle = this.player.color
        ctx.fillRect(this.player.position.x / this.koef, this.player.position.y / this.koef, this.player.width / this.koef, this.player.height / this.koef)

        ctx.restore()

    }
}