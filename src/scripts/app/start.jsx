import React from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import 'Style/start.sass'
import BackArrow from '../../icons/arrow.svg'

import { changeCurrentHero } from 'ReduxComp/reduxThing.js'
import Canvas from './playerPreviewAnimation.jsx'
import IDGen from 'Scripts/idgen.js'


function Start(props) {
    let formId = IDGen()

    let handleFormChange = (val) => {
        props.changeCurrentHero(String(val.target.id)[5])
    }

    return (
        <>
            <header className={'header header22'}>
                <div className={'headerContainer'}>
                    <Link className={'headerContainerBackBtn'} to={'/'}>
                            <img src={BackArrow} alt={"back arrow"}/>
                        <div>
                            back
                        </div>
                    </Link>
                    <div className={'containerButtons'}>
                        <div className={'containerButtonsEl'}>
                            <div className={'leftRightContainer'}>
                                <div  className={'leftRightContainerEl'}>left arrow</div>
                                <div className={'leftRightContainerEl'}>right arrow</div>
                            </div>
                            <div  className={''}>- choose hero</div>
                        </div>
                        <div className={'containerButtonsEl'}>                     
                            <div  className={'enterBtnContainer'}>
                                <div  className={'enterBtnEl1'}>
                                    enter
                                </div>
                                <div  className={'enterBtnEl2'}>

                                </div>
                                <div  className={'enterBtnEl3'}>

                                </div>
                            </div>
                            <div  className={''}>- select</div>
                        </div>
                    </div>
                </div>                
            </header>

            <main>
                <form id={formId} onChange={handleFormChange}>
                    <div>
                        <input type="radio" name="heros" id="radio1" defaultChecked />
                        <label htmlFor="radio1">                                                            
                            <Canvas heroNumber={1}></Canvas>
                        </label>
                    </div>
                    <div>
                        <input type="radio" name="heros" id="radio2" />
                        <label htmlFor="radio2">                                            
                            <Canvas heroNumber={2}></Canvas>
                        </label>
                    </div>
                    <div>
                        <input type="radio" name="heros" id="radio3" />
                        <label htmlFor="radio3">                                           
                            <Canvas heroNumber={3}></Canvas>
                        </label>
                    </div>
                    <div>
                        <input type="radio" name="heros" id="radio4"/>
                        <label htmlFor="radio4">                                            
                            <Canvas heroNumber={4}></Canvas>
                        </label>
                    </div>                                                            
                </form>
            </main>
            <Link to="/game">Play</Link>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        currentHero: state.appReducer.currentHero
    }
}
  
const mapDispatchToProps = { changeCurrentHero } // actions
  
export default connect(mapStateToProps, mapDispatchToProps)(Start)