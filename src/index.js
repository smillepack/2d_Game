import  'Style/style.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider  } from 'react-redux'

import { store } from 'ReduxComp/reduxThing.js'
import App from './scripts/app/app.jsx'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)