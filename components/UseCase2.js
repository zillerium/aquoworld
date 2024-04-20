// UseCase2.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UseCase2 = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="my-2 p-3 bg-white">
      <Row className="align-items-start">
        <Col md={6}>
          <Image src="amm.png" fluid />
        </Col>
        <Col md={6}>
          <h1 className="display-5">Risk Mitigation</h1>
          <h4>Optimize transactions on bonding curves</h4>
          <p>By splitting transactions across DeFi Protocols slippage is reduced. </p>
        </Col>
      </Row>
    </Container>
  );
});

export default UseCase2;

