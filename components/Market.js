import React, { useState } from 'react';
import { Container, Row, Col, Image, Accordion, Card } from 'react-bootstrap';
import { FiChevronDown } from 'react-icons/fi'; // Assuming you're using react-icons for the chevron icon
import MarketContent  from './MarketContent.js'

const Market = () => {
  // State to track the expansion of each list item
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the expansion state
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className="my-5">
      <Row className="align-items-start">
        <Col md={6}>
          <h2>DeFi Markets</h2>
          <p>DeFi markets are split into DEXs, Lending, Yield, Yield Aggregators, and more.
          </p>{/* Expandable List */}
          <MarketContent />         
 

 
	  </Col>
        <Col md={6}>
          <Image src="/market.png" alt="Market" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Market;

