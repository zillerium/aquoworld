// UseCase3.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UseCase3 = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="my-2 p-3 bg-white">
      <Row className="align-items-start">
        <Col md={6}>
          <Image src="complexproducts.png" fluid />
        </Col>
        <Col md={6}>
          <h1 className="display-5">Complex Financial Products</h1>
          <h4>Building complete financial solutions</h4>
          <p>This allows a user to build a complete transaction to lend, borrow, buy or sell an option, exchange, and other actions within one transaction.</p>
        </Col>
      </Row>
    </Container>
  );
});

export default UseCase3;

