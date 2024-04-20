// UseCase1.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UseCase1 = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="my-2 p-3 bg-white">
      <Row className="align-items-start">
        <Col md={6}>
          <Image src="liquidity.png" fluid />
        </Col>
        <Col md={6}>
          <h1 className="display-5">Liquidity Aggregation</h1>
          <h4>Liquidity decreases slippage</h4>
          <p>By using DeFi Composition we access liquidity pools under optimal conditions.</p>
        </Col>
      </Row>
    </Container>
  );
});

export default UseCase1;

