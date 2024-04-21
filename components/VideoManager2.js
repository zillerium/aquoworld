// components/VideoManager2.js

import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';

const textBoxesData = [
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


// Array of all text boxes data

// Prepare the slides with three text boxes each
const slidesData = textBoxesData.reduce((acc, curr, idx, src) => {
  if (idx % 3 === 0) {
    acc.push(src.slice(idx, idx + 3).concat(src.slice(0, Math.max(0, 3 - (src.length - idx)))));
  }
  return acc;
}, []);

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
                <Row>
                  {slide.map((box, idx) => (
                    <Col key={idx} md={4}>
                      <div className="p-4 h-100 d-flex flex-column">
			    <h5 style={{ color: 'blue' }}>{box.title}</h5>
                        <p >{box.text}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoManager2;

