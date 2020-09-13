export default class Player {
    constructor(context, keys, mapObjects) {
        this.context = context
        this.keys = keys 
        this.mapObjects = mapObjects.objects

        // player specifications
        this.width = 10
        this.height = 10
        this.position = {
            x: 50,
            y: 10
        }
        this.color = 'red'

        // moving specifications
        this.currentSpeed = 0
        this.speedAcceleration = 0.1
        this.maxSpeed = 5
        this.lastDirection = ''

        this.inertion = 0.95

        // gravity specifications
        this.gravityCurrentSpeed = 0
        this.gravityAcceleration = 0.1

        // jump settings
        this.maxJumpHeight = 40
        this.startJumpSpeed = Math.sqrt(this.gravityAcceleration * this.maxJumpHeight * 2) + this.gravityAcceleration
        this.canJump = false
        this.takeOff = false
    }

    findMoveLimits() {
        let floors = []
        let roofs = [] 
        let leftWalls = [] 
        let rightWalls = []

        // test, our position is on/under/left/right mapObject ?
        this.mapObjects.forEach((el) => {

            // if we in X range balcony 
            if (this.position.x < el.x1 + el.width && this.position.x + this.width > el.x1) {     
                // find all floors
                if (this.position.y + this.height <= el.y1)    floors.push(el.y1 - this.height)
                // find all roofs
                else if (this.position.y >= el.y1 + el.height) roofs.push(el.y1 + el.height)
            }     

            // if we in Y range balcony
            if (this.position.y + this.height > el.y1 && this.position.y < el.y1 + el.height) {
               // find all right walls
               if (this.position.x + this.width <= el.x1)    rightWalls.push(el.x1 - this.width)
               // find all left walls
               else if (this.position.x >= el.x1 + el.width) leftWalls.push(el.x1 + el.width)
            }

        })

        return { floors, roofs, leftWalls, rightWalls }
    }

    move(direction, wall, symbol) {
        if (Math.abs(this.currentSpeed) < this.maxSpeed) this.currentSpeed += symbol * this.speedAcceleration

        if (direction == 'right') {
            if (this.position.x + this.currentSpeed > wall) this.currentSpeed = wall - this.position.x
        } 
        else if (direction == 'left') {
            if (this.position.x + this.currentSpeed < wall) this.currentSpeed = wall - this.position.x
        }

        this.lastDirection = direction

        return this.currentSpeed
    }

    jump(roof) {

        // we start jump
        if (this.canJump) {
            this.canJump = false
            this.takeOff = true

            this.gravityCurrentSpeed = -this.startJumpSpeed
        }


        // this takeoff mechanism
        if (this.takeOff) {

            if (Math.floor(10 * this.gravityCurrentSpeed) == 0 || this.position.y + this.gravityCurrentSpeed < roof) {
                this.takeOff = false
                this.gravityCurrentSpeed = 0

                return 0
            } else {
                this.gravityCurrentSpeed += this.gravityAcceleration

                return this.gravityCurrentSpeed
            }
            
        }

    }

    gravity(floor) {
        let gravity = 0
        
        if (this.position.y < floor){
        

            if (this.position.y + this.gravityCurrentSpeed > floor) {
                gravity = floor - this.position.y 

            } else {
                gravity += this.gravityCurrentSpeed

                this.gravityCurrentSpeed += this.gravityAcceleration
            }                        

            this.canJump = false
        } else {

            this.canJump = true
            this.currentJumpHeight = 0
            this.gravityCurrentSpeed = 0
        }

        return gravity
    }

    futurePositionInObjcet(speedX, speedY) {
        let speeds = {
            x: speedX,
            y: speedY
        }

        this.mapObjects.forEach((el) => {

            // if we in X range balcony  
            if (this.position.x + speedX < el.x1 + el.width && this.position.x + this.width + speedX > el.x1) {     
                // if we in Y range balcony                
                if (this.position.y + this.height + speedY > el.y1 && this.position.y + speedY < el.y1 + el.height) {
                    if (Math.abs(speedX) > Math.abs(speedY)) {
                        this.takeOff = false
                        this.gravityCurrentSpeed = 0

                        speeds.y = 0 
                    } else if (Math.abs(speedX) < Math.abs(speedY)) {

                        speeds.x = 0
                    } else {
                        this.takeOff = false
                        this.gravityCurrentSpeed = 0

                        speeds = { x: 0, y: 0}
                    }
            
                } 
            }  

        }) 

        return speeds
    }

    render() {
        let ctx = this.context
        let speedX = 0
        let speedY = 0

        // find the most nearest limits
        let limits = this.findMoveLimits()
   
        let floor     = Math.min(...limits.floors)
        let roof      = Math.max(...limits.roofs) 
        let rightWall = Math.min(...limits.rightWalls) 
        let leftWall  = Math.max(...limits.leftWalls)  

        // move left/right
        if      (this.keys.right && this.position.x < rightWall) speedX = this.move('right',rightWall,  1)
        else if (this.keys.left  && this.position.y > leftWall)  speedX = this.move('left', leftWall,  -1)
        else {

            // inertion

            if ( Math.floor(10 * Math.abs(this.currentSpeed)) == 0 ) {
                this.lastDirection = ''
                this.currentSpeed = 0
            } else {           

                if (this.currentSpeed > 0) {
                            
                    if (this.position.x + this.currentSpeed > rightWall) {
                        this.currentSpeed = rightWall - this.position.x
                    } else {
                        this.currentSpeed *= this.inertion
                        speedX = this.currentSpeed
                    }
                }  
                else if (this.currentSpeed < 0) {
                    if (this.position.x + this.currentSpeed < leftWall) {
                        this.currentSpeed = leftWall - this.position.x
                    } else {
                        this.currentSpeed *= this.inertion
                        speedX = this.currentSpeed
                    }
                }

                
            }
        } 

        

        // jump
        if ( (this.keys.up && this.canJump ) || this.takeOff) speedY += this.jump(roof)
        // gravity
        if (!this.takeOff)                                    speedY += this.gravity(floor)

        let newSpeeds = this.futurePositionInObjcet(speedX, speedY)

        // move position
        this.position.x += newSpeeds.x
        this.position.y += newSpeeds.y
        
        // draw
        ctx.save()

        ctx.fillStyle = this.color 
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

        ctx.restore()
    }
}
