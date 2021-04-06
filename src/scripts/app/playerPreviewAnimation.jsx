import React from 'react'

import 'Style/playerPreviewAnimation.sass'

import IDGen from 'Scripts/idgen.js'
import {
    heros
} from '../cosnts.js'

export default function Canvas(props) {
    const [ctx, setCtx] = React.useState(null)
    let animeId = null
    let customId = IDGen()

    let size = 128
    let X = 11
    let number = 2
    let counter = 1


    let hero = new Image()
    hero.src = heros[props.heroNumber].src

    React.useEffect(() => {
        setCtx(document.getElementById(customId).getContext('2d'))

        animeId = requestAnimationFrame(() => {update()})

        return () => {
            cancelAnimationFrame(animeId)
        }
    })

    let update = () => {   
        if (ctx == null) return
        
        if (counter < X) null
        else if (number < 5) {
            number++
            counter = 1
        }
        else {
            counter = 0
            number = 2
        }

        ctx.save() 

        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 128, 128)

        ctx.drawImage(hero, 
            size * number, 0, 
            size, size, 
            0 , 0, 
            size, size) 
        
        ctx.restore()

        counter++        
        
        animeId = requestAnimationFrame(() => {update()})
    }

    return (
        <>
            <canvas id={customId} width={128} height={128}></canvas>
        </>
    )
}