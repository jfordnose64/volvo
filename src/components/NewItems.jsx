import React, { Component } from 'react'
import CardSale from './Card'
import Image from '../Pictures/image.jpg'
import Volvo240 from '../Pictures/240.jpg'
import Volvo740 from '../Pictures/740.jpg'
import Volvo940 from '../Pictures/940.jpg'
import Button from 'react-bootstrap/Button'

class NewItems extends Component {
  render() {
    return (
      <div className="new-items">
        <h1 style={{ margin: '1rem' }}>New Part Outs</h1>
        <div className="img-container">
          <CardSale
            image={Volvo240}
            title="1982 Volvo 240"
            details="Full part out"
            buttonName="Learn More"
          />
          <CardSale
            image={Volvo740}
            title="1989 Volvo 740"
            details="No Interior"
            buttonName="Learn More"
          />
          <CardSale
            image={Volvo940}
            title="1992 Volvo 940"
            details="Engine only"
            buttonName="Learn More"
          />
          <CardSale
            image={Image}
            title="2005 Subaru Outback XT"
            details="Trans and engine gone"
            buttonName="Learn More"
          />
          <Button className="new-item-button">More Items</Button>
        </div>
      </div>
    )
  }
}

export default NewItems
