import React, { Component } from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from '../Pictures/image.jpg'

class Clearance extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <body className="clearance">
          <h1 style={{ fontSize: '4rem', color: 'red' }}>Clearance</h1>
          <div>
            <Container className="img-container">
              <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Check Out the Deal</Button>
                </Card.Body>
              </Card>
              <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Check Out the Deal</Button>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </body>
      </div>
    )
  }
}
export default Clearance
