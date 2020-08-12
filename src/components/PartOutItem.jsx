import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function PartOutItem(props) {
  // New PartOut Items will be "NEW" if less than 2 weeks
  return (
    <div>
      <Card className="shadow part-out-item-card">
        <Card.Img
          variant="top"
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          src={props.image}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: 'left' }}>
            <Link to={props.linkTo} className="link part-out-item-link">
              {props.title}
            </Link>
          </Card.Title>
          <Card.Text style={{ textAlign: 'left' }}>{props.details}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PartOutItem
