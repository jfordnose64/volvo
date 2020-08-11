import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Image from '../Pictures/image.jpg'
import { Link } from 'react-router-dom'
import Header from './Header'
import NewItems from './NewItems'
import '../index.css'

class Home extends Component {
  render() {
    return (
      <div className="app">
        <Jumbotron
          className="shadow"
          style={{
            textAlign: 'center',
            margin: '1rem',
            // borderColor: 'black',
            // borderWidth: '0.1rem',
            // borderStyle: 'solid',
            backgroundImage:
              'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
          }}
        >
          <h1>Welcome to PartOut.com!</h1>
          <p>We are THE solution for parting out vehicles</p>
          <p>
            <Button variant="primary">
              <Link to="/about" style={{ color: 'white' }} className="link">
                Learn More
              </Link>
            </Button>
          </p>
        </Jumbotron>
        <NewItems />
      </div>
    )
  }
}

export default Home
