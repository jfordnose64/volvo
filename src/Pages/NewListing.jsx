import React, { Component, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export const NewListing = (props) => {
  let intialListing = {
    year: '1992',
    make: '',
    model: '',
    zipcode: '',
    description: '',
  }
  const [listing, setListing] = useState(intialListing)
  // let [year, setYear] = useState('')
  // const [make, setMake] = useState('')
  // const [model, setModel] = useState('')
  let { year, make, model, zipcode, description } = listing

  const handleInputChange = (e) => {
    console.log()
  }

  const handleFinalSubmit = (e) => {
    console.log()
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Here is a form</h1>
        <Container>
          <Col md={4}>
            <h2>Select a Vehicle</h2>
            <Form onSubmit={handleFinalSubmit}>
              <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <h6 style={{ textAlign: 'left' }}>Year</h6>
                <Form.Control
                  type="text"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => {
                    year = e.target.value
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <h6 style={{ textAlign: 'left' }}>Make</h6>
                <Form.Control
                  as="select"
                  value={make}
                  onChange={(e) => {
                    // setMake(e.target.value)
                  }}
                >
                  <option>Make</option>
                  <option>Acura</option>
                  <option>Aston Martin</option>
                  <option>Audi</option>
                  <option>BMW</option>
                </Form.Control>{' '}
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <h6 style={{ textAlign: 'left' }}>Model</h6>
                <Form.Control
                  as="select"
                  value={model}
                  onChange={(e) => {
                    // setModel(e.target.value)
                  }}
                >
                  <option>Model</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>{' '}
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <h6 style={{ textAlign: 'left' }}>Description</h6>
                <Form.Control as="textarea" rows="4" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
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

export default NewListing
