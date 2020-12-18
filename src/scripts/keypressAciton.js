export default class KeyPressUp {
    constructor(key) {
        this.left   = false
        this.right  = false 
        this.up     = false
        this.attack = false
        this.block  = false

        document.addEventListener('keydown', this.handleKey.bind(this, true) )
        document.addEventListener('keyup', this.handleKey.bind(this, false))

        this.arrKeys = [ [65, 87, 68, 70, 71] ]
        this.key = key == 'awdfg' ? 0 : 1
    }

    handleKey(value, event) {
        let arr = this.arrKeys

        // console.log(event.keyCode, value)
        switch (event.keyCode) {
            // left
            case arr[this.key][0]:
                this.left = value
                break

            // jump
            case arr[this.key][1]:
                this.up = value
                break

            // right
            case arr[this.key][2]:
                this.right = value

                break
            
            // attack
            case arr[this.key][3]:
                this.attack = value

                break
            
            // block 
            case arr[this.key][4]:
                this.block = value  

                break
            
            default:
                break
        }



    }
}