// UseCase6.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UseCase6 = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="my-2 p-3 bg-white">
      <Row className="align-items-start">
        <Col md={6}>
          <Image src="access.png" fluid />
        </Col>
        <Col md={6}>
          <h1 className="display-5">Single Point Contact</h1>
          <h4>Accessibility</h4>
          <p>A user can access the Aquo platform and access all DeFi Protocols from a single point.</p>
        </Col>
      </Row>
    </Container>
  );
});

export default UseCase6;

