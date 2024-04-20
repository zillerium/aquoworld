// TechTabs.js
import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Image } from 'react-bootstrap';

const techTabContents = [
  {
    eventKey: "tech1",
    title: "Reinforcement Learning",
    content: "We used reinforcement and PyTorch to get the rewards and observations to optimize Aquo transaction",
    imageUrl: "rl.png", // replace with the path to your image
  },
  {
    eventKey: "tech2",
    title: "DeFi Composition",
    content: "DeFi Composition is used to call DeFi Protocols",
    imageUrl: "deficomposition2.png",
  },
  {
    eventKey: "tech3",
    title: "Optimization",
    content: "We implement optimization strategies using RL",
    imageUrl: "optimize.png",
  },
  {
    eventKey: "tech4",
    title: "Simulations",
    content: "We simulate DeFi Protocols using python to build training datasets.",
    imageUrl: "simulations.png",
  },
];

const TechTabs = () => {
  const [key, setKey] = useState('tech1');

  return (
    <Container>
      <Tabs
        id="tech-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {techTabContents.map((tech, idx) => (
          <Tab eventKey={tech.eventKey} title={tech.title} key={idx}>
            <Row className="align-items-center">
              <Col md={6}>
                <Image src={tech.imageUrl} fluid />
              </Col>
              <Col md={6}>
                <h4>{tech.title}</h4>
                <p>{tech.content}</p>
              </Col>
            </Row>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default TechTabs;

