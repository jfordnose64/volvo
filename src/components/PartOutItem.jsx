import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function PartOutItem(props) {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
          <Card.Img
            variant="left"
            src={props.image}
            style={{
              height: '10rem',
              width: 'auto',
              backgroundSize: 'auto 100%',
            }}
          />
          <Card.Title style={{ padding: '0.5rem' }}>{props.title}</Card.Title>
          <Card.Text>{props.bodyText}</Card.Text>
          <Button variant="primary">{props.buttonTitle}</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{props.createdAt}</Card.Footer>
      </Card>
    </div>
  )
}

export default PartOutItem
