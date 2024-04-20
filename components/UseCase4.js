// UseCase4.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UseCase4 = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="my-2 p-3 bg-white">
      <Row className="align-items-start">
        <Col md={6}>
          <Image src="options.png" fluid />
        </Col>
        <Col md={6}>
          <h1 className="display-5">More Financial Products</h1>
          <h4>Flexible Financial Products</h4>
          <p>More flexible and far reaching financial products can be created such as options.
	  </p>
        </Col>
      </Row>
    </Container>
  );
});

export default UseCase4;

