export default class KeyPressUp {
    constructor() {
        this.left  = false
        this.right = false 
        this.up    = false

        document.querySelectorAll('button').forEach((el, index) => {
            document.querySelectorAll('button')[index].addEventListener('mousedown', this.handleKey.bind(this, true, el.innerHTML))
            document.querySelectorAll('button')[index].addEventListener('mouseup', this.handleKey.bind(this, false, el.innerHTML))
        })

        document.addEventListener('keydown', this.handleKey.bind(this, true) )
        document.addEventListener('keyup', this.handleKey.bind(this, false))
    }

    handleKey(value, event, text) {
        switch (event) {
            case 'up':
                
                this.up = value
                break
            
            case 'left':
                this.left = value
                break

            case 'right':
                this.right = value
                break

            default:
                break
        }


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