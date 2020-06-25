import React, { Component } from 'react'
import Header from '../components/Header'

class Volvo extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h1 style={{ fontSize: '4rem' }}>Volvo 240</h1>
      </div>
    )
  }
}

export default Volvo
