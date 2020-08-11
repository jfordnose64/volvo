import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

class NewListing extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Here is a form</h1>
          <Container>
            <Col md={4}>
              <h2>Select a Vehicle</h2>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                  <h6 style={{ textAlign: 'left' }}>Year</h6>
                  <Form.Control type="text" placeholder="Year" />
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                  <h6 style={{ textAlign: 'left' }}>Make</h6>
                  <Form.Control as="select">
                    <option>Make</option>
                    <option>Acura</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>{' '}
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                  <h6 style={{ textAlign: 'left' }}>Model</h6>
                  <Form.Control as="select">
                    <option>Model</option>
                    <option></option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>{' '}
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                  <h6 style={{ textAlign: 'left' }}>Description</h6>
                  <Form.Control as="textarea" rows="4" />
                </Form.Group>
              </Form>
              {/* <Row>
                <Col>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Zip Code" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Zip Code" />
                  </Form.Group>
                </Col>
              </Row> */}
            </Col>
          </Container>
        </div>
      </div>
    )
  }
}

export default NewListing
