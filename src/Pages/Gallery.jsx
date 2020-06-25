import React, { Component } from 'react'
import Header from '../components/Header'
import CardSale from '../components/Card'
import Image from '../Pictures/image.jpg'
import Footer from '../components/Footer'
let Test = require('../data/test.json')
class Gallery extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h1 className="header"> Gallery</h1>
        <div className="img-container">
          <CardSale
            image={Image}
            title="Title"
            buttonName="Name1"
            details="Lorem Ipsum"
            linkTo="/shop"
          />
          <CardSale
            image={Image}
            title="Title"
            details="Lorem Ipsum"
            buttonName="Name1"
            linkTo="/shop"
          />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <CardSale image={Image} title="Title" details="Lorem Ipsum" />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Gallery
