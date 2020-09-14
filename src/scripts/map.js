export default class Map {
    constructor(context, mapObjects, playerPosition, centerX, centerY) {
        this.map = mapObjects.objects
        
        this.center = {
            x: centerX,
            y: centerY
        }
        this.playerPosition = playerPosition

        this.context = context
    }

    render() {
        let ctx = this.context

        let offsetX =  this.center.x - this.playerPosition.x
        let offsetY = this.center.y - this.playerPosition.y 

        ctx.save()

        this.map.forEach(el => {
            ctx.fillStyle = el.color

            ctx.fillRect(el.x1 + offsetX, el.y1 + offsetY, el.width, el.height)
        })

        ctx.restore()
    }
}