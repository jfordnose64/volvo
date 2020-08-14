import React, { Component, useState } from 'react'
import PartOutItem from '../components/PartOutItem'
import Image from '../Pictures/image.jpg'

export const VehiclesPage = (props) => {
  return (
    <>
      <div className="app">
        <div className="header">
          <h3>Current Listing's </h3>
          <h4 style={{ color: 'red' }}>13 current listings </h4>
        </div>
        <div className="new-item-container">
          <PartOutItem
            image={Image}
            title="1973 Porsche 911T Coupe"
            details="This 1974 Porsche 911T coupe was built in March of 1973 and is powered by its numbers-matching 2.4L flat-six. Finished in Viper Green over black, the car is equipped with fuel injection, a Type 915 five-speed manual transaxle, 15″ Fuchs wheels, Koni dampers, lower rocker trim, and a 911S-style front spoiler."
            buttonName="Learn More"
          />
          <PartOutItem
            image={Image}
            title="2005 Subaru Outback XT Limited 5spd"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis facilisis ex. Vivamus tempus urna nec porta aliquam. Vivamus nec massa varius arcu tincidunt ullamcorper. Donec eget risus vel nisl dictum vehicula. Nam tristique imperdiet augue, ac eleifend velit consequat in."
            buttonName="Learn More"
          />
          <PartOutItem
            image={Image}
            title="2007 Audi RS4"
            details="This 2007 Audi RS4 is powered by a 4.2-liter V8 paired with a six-speed manual transaxle and Quattro all-wheel drive. The car was first registered in Massachusetts and spent time in Rhode Island prior to its acquisition by the seller in 2014, and it now has 95k miles"
            buttonName="Learn More"
          />
          <PartOutItem
            image={Image}
            title="1973 Porsche 911T Coupe"
            details="This 1973 Porsche 911T coupe was built in March of 1973 and is powered by its numbers-matching 2.4L flat-six. Finished in Viper Green over black, the car is equipped with fuel injection, a Type 915 five-speed manual transaxle, 15″ Fuchs wheels, Koni dampers, lower rocker trim, and a 911S-style front spoiler."
            buttonName="Learn More"
          />
          <PartOutItem
            image={Image}
            title="2005 Subaru Outback XT Limited 5spd"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis facilisis ex. Vivamus tempus urna nec porta aliquam. Vivamus nec massa varius arcu tincidunt ullamcorper. Donec eget risus vel nisl dictum vehicula. Nam tristique imperdiet augue, ac eleifend velit consequat in."
            buttonName="Learn More"
          />
          <PartOutItem
            image={Image}
            title="2007 Audi RS4"
            details="This 2007 Audi RS4 is powered by a 4.2-liter V8 paired with a six-speed manual transaxle and Quattro all-wheel drive. The car was first registered in Massachusetts and spent time in Rhode Island prior to its acquisition by the seller in 2014, and it now has 95k miles"
            buttonName="Learn More"
          />
        </div>
      </div>
    </>
  )
}

export default VehiclesPage
