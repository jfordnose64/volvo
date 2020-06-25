import React, { Component } from 'react'
// import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

class Footer extends Component {
  render() {
    return (
      <Container>
        <Navbar style={{ justifyContent: 'center' }}>
          <NavbarBrand>Volvo Parts LLC.</NavbarBrand>
        </Navbar>
      </Container>
    )
  }
}
export default Footer
