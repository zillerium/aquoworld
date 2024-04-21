import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Story = () => {
  return (
    <Container fluid>
      <Row >
        <Col md={7} className="fs-3">
          {/* Left side with larger text */}
          <h2 className="fw-bold">DeFi Composition and Optimization</h2>
          <p>
	  A combination of dozens of conversations with DeFi professionals, feedback from investors, and finally doctoral research (part-time) led to the Aquo model.

          </p>
        </Col>
        <Col md={5} className="fs-5">
          {/* Right side with smaller text */}
          <p>
	  The original ideas were to create derivatives on RWAs (real-world assets) to allow more markets to exist for RWAs. These ideas were shaped into DeFi Composition and then Reinforcement Learning (RL). As of today, we are testing RL systems.

          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Story;

