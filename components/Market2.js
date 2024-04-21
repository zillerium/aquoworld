import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Market = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-start">
        <Col md={6}>
          <h2>DeFi Markets</h2>
          <p>The markets are divided into sectors such as Lending, Yield, DEXs, and Yield Aggregators.</p>
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

