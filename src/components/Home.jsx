import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Header from './Header'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron>
          <h1>Welcome to Volvo 3D Prints!</h1>
          <p>We create 3d parts for vintage Volvo's</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default Home
