// components/VideoManager2.js

import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';

// Update placeholder texts to include bespoke titles
const slidesData = [
  {
    title: "Emerging DeFi Composition",
    text: "We use emerging DeFi Composition."
  },
  {
    title: "AI Optimization",
    text: "We use Reinforcement Learning to optimize trades."
  },
  {
    title: "Complex Financial Products",
    text: "We create complex financial products via DeFi Composition."
  },
  {
    title: "DeFi Integrations",
    text: "We integrate lending, yield, yield aggregators, DEXs, and Tokenization Dapps."
  },
  {
    title: "The DeFi Paradigm",
    text: "DeFi is an emerging paradigm."
  }
];

const VideoManager2 = () => {
  return (
    <Container>
      <Row className="align-items-start mt-5">
        <Col md={6}>
          <VideoPlayer />
        </Col>
        <Col md={6}>
          <h1>The Aquo Journey</h1>
          <p>
            Aquo implements AI learning systems for optimization in an emerging DeFi sector which has over a 100 billion dollars in assets and revenues of billions of dollars.
          </p>
          <Carousel indicators={false} interval={3000}>
            {slidesData.map((slide, idx) => (
              <Carousel.Item key={idx}>
                <div className="p-4">
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoManager2;

