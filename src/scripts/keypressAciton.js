export default class KeyPressUp {
    constructor() {
        this.left  = false
        this.right = false 
        this.up    = false

        document.addEventListener('keydown', this.handleKey.bind(this, true) )
        document.addEventListener('keyup', this.handleKey.bind(this, false))
    }

    handleKey(value, event) {
        switch (event.keyCode) {
            // left
            case 37:
            case 65: 
                this.left = value
                break

            // jump
            case 38:
            case 87: 
                this.up = value
                break

            // right
            case 39: 
            case 68:
                this.right = value

                break
            default:
                break
        }

    }
}