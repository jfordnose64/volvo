import React, { Component } from 'react'
import Header from '../components/Header'
import CardSale from '../components/Card'
import Image from '../Pictures/image.jpg'

class Shop extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h1 className="header">Print Shop</h1>
        <h2>Volvo Models Available</h2>
        <div className="img-container">
          <CardSale
            image={Image}
            title="Volvo 240"
            details="This is my POS"
            buttonName="Name1"
          />
          <CardSale
            image={Image}
            title="Volvo 740"
            details="This is my POS"
            buttonName="Name1"
          />
          <CardSale
            image={Image}
            title="Volvo 940"
            details="This is my POS"
            buttonName="Name1"
          />
          <CardSale
            image={Image}
            title="Volvo V70"
            details="This is my POS"
            buttonName="Name1"
          />
          <CardSale
            image={Image}
            title="Volvo 850"
            details="This is my POS"
            buttonName="Name1"
          />
          <CardSale
            image={Image}
            title="Volvo 850"
            details="This is my POS"
            buttonName="Name1"
          />
        </div>
      </div>
    )
  }
}

export default Shop
