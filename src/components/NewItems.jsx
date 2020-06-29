import React, { Component } from 'react'
import CardSale from './Card'
import Image from '../Pictures/image.jpg'
import Button from 'react-bootstrap/Button'

class NewItems extends Component {
  render() {
    return (
      <div className="new-items">
        <h1 style={{ margin: '1rem' }}>New Items</h1>
        <div className="img-container">
          <CardSale
            image={Image}
            title="Control Arms"
            details="More angle for the turbo brick"
            buttonName="Learn More"
          />
          <CardSale
            image={Image}
            title="Cup Holder"
            details="3D Printed"
            buttonName="Learn More"
          />
          <CardSale
            image={Image}
            title="Turbo Manifold"
            details="90+ Turbo Manifold"
            buttonName="Learn More"
          />
          <CardSale
            image={Image}
            title="Volvo 16t"
            details="More boost for the B230FT"
            buttonName="Learn More"
          />
          <Button className="new-item-button">More Items</Button>
        </div>
      </div>
    )
  }
}

export default NewItems
