import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Market = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>Aquo Optimization</h2>
          <p>This is a test line. Add more descriptive text here to elaborate on the Market.</p>
          {/* Additional content can go here */}
        </Col>
        <Col md={6}>
          <Image src="/market.png" alt="Market" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Market;

