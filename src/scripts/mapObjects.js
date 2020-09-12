class MapObject {
    constructor(gameHeight, gameWidth, wallWidth) {
        this.objects = [
            {
                name: 'left wall',
                x1: 0,
                y1: 0,
                width: wallWidth,
                height: gameHeight,
                color: 'grey'
            }, 
            {
                name: 'right wall',
                x1: gameWidth - wallWidth,
                y1: 0,
                width: wallWidth,
                height: gameHeight,
                color: 'grey'
            },
            {
                name: 'roof',
                x1: 0,
                y1: 0,
                width: gameWidth - wallWidth,
                height: wallWidth,
                color: 'grey'
            },
            {
                name: 'floor',
                x1: 0,
                y1: gameHeight - wallWidth,
                width: gameWidth - wallWidth,
                height: wallWidth,
                color: 'grey'
            }, 
            {
                name: 'balcony 1',
                x1: 80,            
                y1: gameHeight - wallWidth - 21,
                width: 50,
                height: wallWidth,
                color: 'yellow'
            },
            {
                name: 'balcony 2',                
                x1: 20,
                y1: gameHeight - wallWidth - 41,
                width: 50,
                height: wallWidth,
                color: 'yellow'
            }
        ]
    }
}

export default MapObject