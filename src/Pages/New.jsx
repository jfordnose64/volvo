import React, { Component } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from '../Pictures/image.jpg'
import PartOutItem from '../components/PartOutItem'

class New extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <PartOutItem
          header="New"
          image={Image}
          title="2005 Subaru Outback XT Limited 5spd"
          bodyText="215,000 miles with rear end damage."
          buttonTitle="Learn More"
          createdAt="1 week ago"
        />
      </div>
    )
  }
}

export default New
