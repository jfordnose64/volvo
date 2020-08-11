import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function CardSale(props) {
  return (
    <div>
      <Card style={{ width: '18rem', height: 'auto' }} className="shadow">
        <Card.Img
          variant="top"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          src={props.image}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.details}</Card.Text>
          <Button variant="dark">
            <Link to={props.linkTo} style={{ color: 'white' }} className="link">
              {props.buttonName}
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardSale
