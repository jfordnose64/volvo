import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Image from '../Pictures/image.jpg'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import NewItems from './NewItems'

class Home extends Component {
  render() {
    return (
      <div className="app">
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
        <div className="carousel-1">
          <Carousel
            style={{
              padding: '2rem',
              borderRadius: '1rem',
            }}
          >
            <Carousel.Item
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '.7rem',
                borderRadius: '1rem',
              }}
            >
              <img className="d-block w-100" src={Image} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '.7rem',
                borderRadius: '1rem',
              }}
            >
              <img className="d-block w-100" src={Image} alt="Third slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '.7rem',
                borderRadius: '1rem',
              }}
            >
              <img className="d-block w-100" src={Image} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <NewItems />
        <Footer />
      </div>
    )
  }
}

export default Home
