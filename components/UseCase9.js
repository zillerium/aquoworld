// UseCase9.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UseCase9 = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} className="my-2 p-3 bg-white">
      <Row className="align-items-start">
        <Col md={6}>
          <Image src="energyusecase.png" fluid />
        </Col>
        <Col md={6}>
          <h1 className="display-5">Decentralized Energy</h1>
          <h4>Energy</h4>
          <p>Decentralized Energy markets can exist via Aquo in which separate markets can be connected to one trading product. This is applicable for example to locally engineered energy via solar panels and the energy generated can then be traded.</p>
        </Col>
      </Row>
    </Container>
  );
});

export default UseCase9;

