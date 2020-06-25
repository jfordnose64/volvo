import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Clearance from './Pages/Clearance'
import './App.css'
import Gallery from './Pages/Gallery'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Clearance">
          <Clearance />
        </Route>
        <Route path="/Gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
