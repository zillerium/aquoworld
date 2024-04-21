// components/VideoManager2.js

import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';

const placeholderTexts = [
  "DeFi Composition: We use emerging DeFi Composition.",
  "AI: We use Reinforcement Learning to optimize trades.",
  "Complex Financial Products: We create complex financial products via DeFi Composition",
  "DeFi Integrations: We integrate lending, yield, yield aggregartors, DEXs, and Tokenization Dapps.",
  "DeFi: DeFi is an emerging paradigm"
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
            {placeholderTexts.map((text, idx) => (
              <Carousel.Item key={idx}>
                <div className="p-4">
                  <h3>{`Title ${idx + 1}`}</h3>
                  <p>{text}</p>
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

