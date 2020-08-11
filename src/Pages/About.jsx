import React, { Component } from 'react'
import Header from '../components/Header'

class About extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="header">About Page</h1>
        <div>
          <h4>Who we are</h4>
          <p>
            We are a couple of people who love cars but find that there was
            never a good way to find cars that are being parted out
          </p>
          <hr />
        </div>
      </div>
    )
  }
}
export default About
