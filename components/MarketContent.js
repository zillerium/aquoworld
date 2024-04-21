import React from 'react';
import { Accordion } from 'react-bootstrap';

const MarketContent = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>DEX</Accordion.Header>
        <Accordion.Body>
	  DEXs are decentralized exchanges, and Uniswap is one of the big DEXs with revenues of more than a 100 million dollars monthly.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Lending</Accordion.Header>
        <Accordion.Body>
	  Lending is typically overcollateralized in DeFi, with DeFi Protocols such as Aave, and JustLend leading that space.
        </Accordion.Body>
      </Accordion.Item>
	       <Accordion.Item eventKey="2">
        <Accordion.Header>Liquid Staking</Accordion.Header>
        <Accordion.Body>
	  Liquid Staking is big in DeFi with protocols such as Lido leading that space.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MarketContent;

