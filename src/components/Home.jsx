import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from '../Pictures/image.jpg'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron
          style={{
            textAlign: 'center',
            margin: '1rem',
            borderColor: 'black',
            borderWidth: '0.1rem',
            borderStyle: 'solid',
            backgroundImage: { Image },
          }}
        >
          <h1>Welcome to Volvo 3D Prints!</h1>
          <p>We create 3d parts for vintage Volvo's</p>
          <p>
            <Button variant="primary">
              <Link to="/about" style={{ color: 'white' }} className="link">
                Learn More
              </Link>
            </Button>
          </p>
        </Jumbotron>
        <Footer />
      </div>
    )
  }
}

export default Home
