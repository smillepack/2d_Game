export default class Map {
    constructor(context, mapObjects) {
        this.map = mapObjects.objects
        
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