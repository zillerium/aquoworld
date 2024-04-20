// UseCase5.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UseCase5 = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="my-2 p-3 bg-white">
      <Row className="align-items-start">
        <Col md={6}>
          <Image src="capital.png" fluid />
        </Col>
        <Col md={6}>
          <h1 className="display-5">More Efficient use of Capital</h1>
          <h4>Capital Efficiency</h4>
          <p>Several DeFi Protocols can be integrated into one DeFi Composition Protocol (Aquo) allowing capital to be used across DeFi Protocols.</p>
        </Col>
      </Row>
    </Container>
  );
});

export default UseCase5;

