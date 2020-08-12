import React, { Component } from 'react'
import CardSale from './Card'
import Image from '../Pictures/image.jpg'
import Volvo240 from '../Pictures/240.jpg'
import Volvo740 from '../Pictures/740.jpg'
import Volvo940 from '../Pictures/940.jpg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class NewItems extends Component {
  render() {
    return (
      <div className="new-items">
        <h1 style={{ margin: '1rem' }}>New Part Outs</h1>
        <div className="img-container">
          <CardSale
            style={{
              boxShadow:
                '0 5px 10px rgba(154,160,185,.025), 0 15px 40px rgba(166,173,201,.2);',
            }}
            image={Volvo240}
            title="1982 Volvo 240"
            details="Full part out"
            buttonName="Learn More"
          />
          <CardSale
            style={{
              boxShadow:
                '0 5px 10px rgba(154,160,185,.025), 0 15px 40px rgba(166,173,201,.2);',
            }}
            image={Volvo740}
            title="1989 Volvo 740"
            details="No Interior"
            buttonName="Learn More"
          />
          <CardSale
            style={{
              boxShadow:
                '0 5px 10px rgba(154,160,185,.025), 0 15px 40px rgba(166,173,201,.2);',
            }}
            image={Volvo940}
            title="1992 Volvo 940"
            details="Engine only"
            buttonName="Learn More"
          />
          <CardSale
            style={{
              boxShadow:
                '0 5px 10px rgba(154,160,185,.025), 0 15px 40px rgba(166,173,201,.2);',
            }}
            image={Image}
            title="2005 Subaru Outback XT"
            details="Trans and engine gone"
            buttonName="Learn More"
          />
          <Button className="new-item-button">
            <Link to="/New" className="link" style={{ color: 'white' }}>
              More
            </Link>
          </Button>
        </div>
      </div>
    )
  }
}

export default NewItems
