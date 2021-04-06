import React from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'



import Home from './home.jsx'
import Start from './start.jsx'
import Info from './info.jsx'
import Game from './game.jsx'


   
  const App = () => (
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/start" component={Start} />
        <Route path="/info" component={Info} />
        <Route path="/game" component={Game} />
        <Route path="*">
          not found
        </Route>
      </Switch>
      
    </Router>
  );


export default App