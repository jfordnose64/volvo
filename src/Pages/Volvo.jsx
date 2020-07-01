import React, { Component } from 'react'
import Header from '../components/Header'
import CardSale from '../components/Card'
import Image from '../Pictures/image.jpg'
import data from '../data/test.json'

class Volvo extends Component {
  render() {
    const newModel = data.map((datas) => {
      return (
        <div>
          <CardSale
            image={`${datas.image}`}
            title={datas.title}
            details="This is my POS"
            buttonName="Name1"
          />
          {console.log(datas.image)}
        </div>
      )
    })

    return (
      <div className="app">
        <Header />
        <h1 className="header">Volvo Docs </h1>
        <div className="img-container">{newModel}</div>
      </div>
    )
  }
}

export default Volvo
