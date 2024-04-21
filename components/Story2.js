import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Story = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>IT Consultancy</h2>
          <p>
            Our expertise allows business owners to reap the benefits of tapping our IT specialists without having to hire a full-time employee. In addition, it also reduces the risks associated with not properly maintaining core...
          </p>
        </Col>
        <Col md={6}>
          <p>
            Must explain to you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth...
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Story;

