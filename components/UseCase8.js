// UseCase8.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UseCase8 = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="my-2 p-3 bg-white">
      <Row className="align-items-start">
        <Col md={6}>
          <Image src="rwatokenization.png" fluid />
        </Col>
        <Col md={6}>
          <h1 className="display-5">Tokenization</h1>
          <h4>RWAs</h4>
          <p>RWAs (real-world assets) can be tokenized via a standard SPV (special purpose model) and then additional products can be engineered via Aquo (e.g. lending).</p>
        </Col>
      </Row>
    </Container>
  );
});

export default UseCase8;

