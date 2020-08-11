import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewListing extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Here is a form</h1>
          <div className="form">
            <div className="column">
              <div className="row">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: '2rem' }}>
                      Email address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label style={{ fontSize: '2rem' }}>
                      Vehicle Make
                    </Form.Label>
                    <Form.Control as="select">
                      <option>Select Make</option>
                      <option>___________</option>
                      <option>Audi</option>
                      <option>Acura</option>
                      <option>Alfa Romeo</option>
                      <option>AMC</option>
                      <option>BMW</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label style={{ fontSize: '2rem' }}>
                      Vehicle Make
                    </Form.Label>
                    <Form.Control as="select">
                      <option>Select Make</option>
                      <option>___________</option>
                      <option>Audi</option>
                      <option>Acura</option>
                      <option>Alfa Romeo</option>
                      <option>AMC</option>
                      <option>BMW</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{ fontSize: '2rem' }}>
                      Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewListing
