import React from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import 'Style/info.sass'

import Heart from '../../images/3.png'
import Shield from '../../images/4.png'
import BackArrow from '../../icons/arrow.svg'

import { changeCurrentCompoent } from 'ReduxComp/reduxThing.js'

function Info(props) {
    // const handleHome = () => {
    //     props.changeCurrentCompoent('home')
    // }
    return (
        <>
            <header className={'header2'}>
                <div className={'header2Container'}>
                    <Link className={'header2ContainerBackBtn'} to={'/'}>
                        <img src={BackArrow} alt={"back arrow"}/>
                        <div>
                            back
                        </div>
                    </Link>
                    <div className={'header2ContainerInfoText'}>
                        Info
                    </div>
                    <div>
                        {/* empty */}
                    </div>
                </div>                
            </header>

            <main className={'main2'}>
                <div className={'main2Container'}>
                    <div className="main2ContinerLCol">
                        <div className={'main2ContainerRow'}>
                            <div className={'keyboardLetter'}>
                                a
                            </div>
                            <div className={'keyboardLetter'}>
                                w
                            </div>
                            <div className={'keyboardLetter'}>
                                d
                            </div>
                        </div>
                        <div className={'main2ContainerRow'}>
                            <div className="keyboardLetter">
                                f
                            </div>
                            
                        </div>
                        <div className={'main2ContainerRow'}>
                            <div className="keyboardLetter">
                                g
                            </div>
                        </div>
                        <div className={'main2ContainerRow'}>                         
                            <img src={Heart} alt=""/>                           
                        </div>
                        <div className={'main2ContainerRow'}>                        
                            <img src={Shield} alt=""/>              
                        </div>
                    </div>
                    <div className="main2ContinerRCol">
                        <div className={'main2ContainerRow'}>
                            - moving
                        </div>
                        <div className={'main2ContainerRow'}>
                            - attack
                        </div>
                        <div className={'main2ContainerRow'}>                        
                            - block
                        </div>
                        <div className={'main2ContainerRow'}>                            
                            - Health
                        </div>
                        <div className={'main2ContainerRow'}>
                            - value of block
                        </div>
                    </div>

                    
                </div>
            </main>
        </>
    )
}


  
export default Info