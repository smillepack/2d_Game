import React from 'react'
import { connect } from 'react-redux'
import {
    Link
} from 'react-router-dom'

import Player from 'Scripts/player.js'
import PlayerAnimation from 'Scripts/playerAnimation.js'
import KeyPressUp from 'Scripts/keypressAciton.js'

import Map from 'Scripts/map.js'
import II from 'Scripts/II.js'
import {
    canvas_height,
    canvas_width,
} from 'Scripts/cosnts.js'

import IDGen from 'Scripts/idgen.js'

import { changeCurrentHero } from 'ReduxComp/reduxThing.js'

import  'Style/style.sass'
import BackArrow from '../../icons/arrow.svg'

function Game(props) {
    const [ctx, setCtx] = React.useState(null)
    let animeId = null
    let customId = IDGen()

    // player 1
    let keyPressUp      = new KeyPressUp('awdfg')
    let player          = new Player(ctx, keyPressUp, {x: 64 * 8, y: 64 * 6})
    let playerAnimation = new PlayerAnimation(ctx, player, keyPressUp, props.currentHero, true, {})

    // II
    let ii = new II()
    let player2          = new Player(ctx, ii, {x: 64 * 5, y: 64 * 6})
    let playerAnimation2 = new PlayerAnimation(ctx, player2, ii, 3, false, player.position)

    player.addEnemyToTheMapObjects(player2)
    player2.addEnemyToTheMapObjects(player)
    ii.addPlayers(player, player2)

    let map             = new Map(ctx, player.position)


    React.useEffect(() => {
        setCtx(document.getElementById(customId).getContext('2d'))

        animeId = requestAnimationFrame(() => {update()})

        return () => {
            cancelAnimationFrame(animeId)
        }
    })

    let update = () => {   
        if (ctx == null) return
        
        ctx.clearRect(0, 0, canvas_width, canvas_height)
        map.render()
    
        player.render()
        playerAnimation.render()

        // ii.render()

        // player2.render()
        // playerAnimation2.render()
        
        animeId = requestAnimationFrame(() => {update()})
    }

    return(
        <>              
            <div>
                    <Link className={'headerContainerBackBtn'} to={'/start'}>
                            <img src={BackArrow} alt={"back arrow"}/>
                        <div>
                            back
                        </div>
                    </Link>
                 
            </div>
            <div>
                <canvas id={customId} className='canvasContainer' width={canvas_width} height={canvas_height}></canvas>             
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentHero: state.appReducer.currentHero
    }
}
  
const mapDispatchToProps = { changeCurrentHero } // actions
  
export default connect(mapStateToProps, mapDispatchToProps)(Game)