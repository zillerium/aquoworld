// UseCase7.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UseCase7 = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="my-2 p-3 bg-white">
      <Row className="align-items-start">
        <Col md={6}>
          <Image src="infrastructure.png" fluid />
        </Col>
        <Col md={6}>
          <h1 className="display-5">Developing Nations</h1>
          <h4>Infrastructure</h4>
          <p>When users have limited access to financial systems and agent model can be used to top-up the Aquo app which then enables access to DeFi DAapps, e.g. for tokenization of RWAs.</p>
        </Col>
      </Row>
    </Container>
  );
});

export default UseCase7;

