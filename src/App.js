import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Clearance from './Pages/Clearance'
import './App.css'
import Gallery from './Pages/Gallery'
import Volvo from './Pages/Volvo'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Shop">
          <Shop />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Clearance">
          <Clearance />
        </Route>
        <Route path="/Gallery">
          <Gallery />
        </Route>
        <Route path="/Volvo">
          <Volvo />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
