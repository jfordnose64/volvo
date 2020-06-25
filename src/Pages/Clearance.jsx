import React, { Component } from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from '../Pictures/image.jpg'
import CardSale from '../components/Card'

class Clearance extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <body className="clearance">
          <h1 style={{ fontSize: '4rem', color: 'red' }}>Clearance</h1>
          <div>
            <Container className="img-container">
              <CardSale
                image={Image}
                title="Subaru Parts"
                details="This is my POS"
                buttonName="Name1"
              />
              <CardSale
                image={Image}
                buttonName="Name1"
                title="Title"
                details="Lorem Ipsum"
              />
              <CardSale
                image={Image}
                buttonName="Name1"
                title="Title"
                details="Lorem Ipsum"
              />
            </Container>
          </div>
        </body>
      </div>
    )
  }
}
export default Clearance
