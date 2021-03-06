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
        <Navbar.Brand>PartOut.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/">
              <Link to="/" className="link-header">
                Home
              </Link>
            </Nav.Link>
            <NavDropdown title="Vehicles" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/New" className="link">
                  New
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Vehicles" className="link">
                  Vehicles Available
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/Create-New-Listing" className="link">
                  Post your Vehicle
                </Link>
              </NavDropdown.Item>
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
