import React, { Component } from 'react'
// import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

class Footer extends Component {
  render() {
    return (
      <div
        className="main-footer"
        style={{
          backgroundColor: '#333b3f',
          color: 'white',
          paddingTop: '3rem',
          position: 'relative',
          bottom: 0,
          width: '100%',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Contact Information</h4>
              <ul className="list-unstyled">
                <li>(727) 432 - 4253</li>
                <li> Florida, United States</li>
                <li>1234 56th Street South 75643</li>
              </ul>
            </div>
            <div className="col">
              <h4>PartOut LLC</h4>
              <ul className="list-unstyled">
                <li>Contact</li>
                <li> Florida, United States</li>
                <li>1234 56th Street South 75643</li>
              </ul>
            </div>
            <div className="col">
              <h4>PartOut LLC</h4>
              <ul className="list-unstyled">
                <li>(727) 432 - 4253</li>
                <li> Florida, United States</li>
                <li>1234 56th Street South 75643</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row" style={{ textAlign: 'center' }}>
            <div className="col-sm" style={{ padding: '1rem' }}>
              &copy;{new Date().getFullYear()} PartOut LLC |All Rights Reserved
              | Terms of Service | Privacy
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
