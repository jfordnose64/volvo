import React, { Component } from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'

class About extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="header">About Page</h1>
        <Container>
          <h4>Who we are</h4>
          <p>
            We are a couple of people who love cars but find that there was
            never a good way to find cars that are being parted out
          </p>
          <hr />
        </Container>
      </div>
    )
  }
}
export default About
