import React from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';


import 'Style/home.sass'
import HeroOne from '../../images/1.png'
import HeroTwo from '../../images/2.png'

import { changeCurrentCompoent } from 'ReduxComp/reduxThing.js'
import Canvas from './playerPreviewAnimation.jsx'

function Home(props) {

    return (
        <>
            <header className={'header'}>
                <div className={'headerContianer'}>
                    <div className={'headerContaienrMainText'}> 
                        2D PLATFORM GAME
                    </div>
                </div>
            </header>

            <main className={"main"}>
                <div className={"mainContainer"}>
                    <Canvas heroNumber={1}></Canvas>
                    <Canvas heroNumber={2}></Canvas>
                    <div className={"mainContainerElement mainContainerElementLinkContainer"}>
                        <Link className={"mainContainerElementLinkContainerEl"} to={'/start'}>start</Link>
                        <Link className={"mainContainerElementLinkContainerEl"} to={'/info'}>info</Link>
                    </div>
                    <Canvas heroNumber={3}></Canvas>
                    <Canvas heroNumber={4}></Canvas>
                </div>
            </main>
        </>
    )
}


  
export default Home