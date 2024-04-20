// TechTabs.js
import React from 'react';
import { Image, Tab, Row, Col, Nav } from 'react-bootstrap';

const TechTabs = () => {
  return (

    <Tab.Container id="tech-tabs" defaultActiveKey="first">
	     <Row className="justify-content-center">
        <Col sm={12} lg={8} className="tech-tab-nav-container">
          <Nav variant="pills" className="tech-tab-nav">
            {/* ... Nav Items ... */}
            <Nav.Item>
              <Nav.Link eventKey="first">Reinforcement Learning</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">DeFi Composition</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Optimization</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Simulations</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
	   <Row className="justify-content-center">
        <Col sm={12} lg={8}>
          <Tab.Content className="tech-tab-content">
	  <Tab.Pane eventKey="first">
              <Row>
                <Col md={6}>
                  <Image src="rl.png" fluid />
                </Col>
                <Col md={6}>
                  <h4>Reinforcement Learning</h4>
                  <p>We used reinforcement and PyTorch to get the rewards and observations to optimize Aquo transaction.</p>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
	  <Row>
                <Col md={6}>
                  <Image src="deficomposition2.png" fluid />
                </Col>
                <Col md={6}>
                  <h4>DeFi Composition</h4>
                  <p>DeFi Composition is used to call DeFi Protocols.</p>
                </Col>
              </Row>
	  {/* Content for DeFi Composition */}
            </Tab.Pane>
            <Tab.Pane eventKey="third">
	  <Row>
                <Col md={6}>
                  <Image src="optimize.png" fluid />
                </Col>
                <Col md={6}>
                  <h4>Optimization</h4>
                  <p>We implement optimization strategies using RL.</p>
                </Col>
              </Row>
              {/* Content for Optimization */}
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
	         <Row>
                <Col md={6}>
                  <Image src="simulations.png" fluid />
                </Col>
                <Col md={6}>
                  <h4>Simulation</h4>
                  <p>We simulate DeFi Protocols using python to build training datasets.</p>
                </Col>
              </Row>
              {/* Content for Simulations */}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default TechTabs;

