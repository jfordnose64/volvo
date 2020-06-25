import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'
import '../index.css'

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Volvo 240 3D Prints</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/">
              <Link to="/" className="link-header">
                Home
              </Link>
            </Nav.Link>
            <NavDropdown title="Store" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Volvo" className="link">
                  Volvo 240
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Clearance" className="link">
                  Clearance
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Soon to come</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/about" className="link-header">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/gallery" className="link-header">
                Gallery
              </Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
