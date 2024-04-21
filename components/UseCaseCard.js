import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const UseCaseCard = ({ title, category, description, imageUrl, onLearnMoreClick }) => {
    console.log("console log function ===", onLearnMoreClick)
	return (
    <Col md={4} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={onLearnMoreClick}>Learn More →</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UseCaseCard;

