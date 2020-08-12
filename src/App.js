import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './Pages/About'
import './App.css'
import Gallery from './Pages/Gallery'
import New from './Pages/New'
import Footer from './components/Footer'
import Header from './components/Header'
import NewListing from './Pages/NewListing'
import VehiclesPage from './Pages/VehiclesPage'

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

            <Route path="/About">
              <About />
            </Route>
            <Route path="/New">
              <New />
            </Route>
            <Route path="/Gallery">
              <Gallery />
            </Route>
            <Route path="/Vehicles">
              <VehiclesPage />
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
