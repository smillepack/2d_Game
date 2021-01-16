export default class II {
    constructor() {
        this.left   = false
        this.right  = false 
        this.up     = false
        this.attack = false
        this.block  = false

        this.player1 = {}
        this.player2 = {}
    }

    addPlayers(player1, player2) {
        this.player1 = player1
        this.player2 = player2

    }
    
    render() {
        let p1 = this.player1
        let p2 = this.player2

        if (p1.position.x + p1.width < p2.position.x) this.left = true
        else                                          this.left = false

        if (p1.position.x > p2.position.x - p2.width) this.right = true
        else                                          this.right = false

        if (p1.position.y < p2.position.y)         setTimeout(() => this.up = true, 200)   
        else                                          this.up = false
    }
}