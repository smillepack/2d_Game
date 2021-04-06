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

    attackEnemy() {
        let p1 = this.player1 // player

        this.attack = true
        p1.enemyAttackedMe = true

        setTimeout(() => {
            this.attack = false
            p1.enemyAttackedMe = false
        }, 100)
    }
    
    render() {
        let p1 = this.player1 // player
        let p2 = this.player2 // II
        let timerIdLeft,
            timerIdRight,
            timerIdUp

        // move things
        // left
        if (p1.position.x + p1.width < p2.position.x) {
            timerIdLeft = setTimeout(() => this.left = true, 150) 
        } 
        else {
            clearTimeout(timerIdLeft)
            this.left = false
        }                                               

        // right
        if (p1.position.x > p2.position.x + p2.width) {
            timerIdRight = setTimeout(() => this.right = true, 150) 
        } 
        else {
            clearTimeout(timerIdRight)
            this.right = false
        }
        
        if (p1.position.y < p2.position.y) {
            timerIdUp = setTimeout(() => this.up = true, 200)   
        }   
        else {
            clearTimeout(timerIdUp)
            this.up = false
        }   


        // attack
        if (p2.lastDirection == 0) {
            if (p2.position.x + p2.width + p2.attackRange > p1.position.x &&
                p2.position.x + p2.width <= p1.position.x                   &&
                p2.position.y == p1.position.y) {
                
                if (!p1.keys.block || p1.lastDirection == p2.lastDirection) {
                    p1.position.x += 5
                    this.attackEnemy()
                }
                
                
            }

        } else if (p2.position.x - p2.attackRange < p1.position.x + p1.width &&
                   p2.position.x  >= p1.position.x + p1.width                  &&
                   p2.position.y == p1.position.y) {
                       
                    if (!p1.keys.block || p1.lastDirection == p2.lastDirection) {
                        p1.position.x -= 5
                        this.attackEnemy()
                    }
        }
    }
}