
export default class ParametrsForFixBags {
    constructor(ctx, player) {
        this.ctx = ctx 
        this.player = player
    }

    render() {
        let ctx = this.ctx 

        ctx.save()

        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, 100, 80)

        ctx.font = '30px Arial'
        ctx.fillStyle = 'red'
        // ctx.fillText('sp: ' + this.player.currentSpeed, 5, 25)
        // ctx.fillText('ac: ' + this.player.currentSpeed, 5, 50)
        // ctx.fillText('thing work: ' + this.player.someTest, 5, 75)
        ctx.fillText('yAc: ' + this.player.gravityCurrentSpeed, 5, 25)
        ctx.restore()
    }
}