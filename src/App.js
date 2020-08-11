import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Clearance from './Pages/Clearance'
import './App.css'
import Gallery from './Pages/Gallery'
import Volvo from './Pages/Volvo'
import SoonToCome from './Pages/SoonToCome'
import New from './Pages/New'
import Footer from './components/Footer'
import Header from './components/Header'
import NewListing from './Pages/NewListing'

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Header />
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
            <Route path="/New">
              <New />
            </Route>
            <Route path="/Gallery">
              <Gallery />
            </Route>
            <Route path="/Volvo">
              <Volvo />
            </Route>
            <Route exact path="/Create-New-Listing">
              <NewListing />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
