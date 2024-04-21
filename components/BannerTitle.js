// components/BannerTitle.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Image from 'next/image';

const BannerTitle = () => {
  // Function to handle the click event on the button
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDeck = () => {
    const videoSection = document.getElementById('Pitch');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="bannerTitle">
      <Image
        src="/aquocover.png" // Path to your image file
        alt="Background"
        layout="fill" // This will make the image fill the div
        objectFit="cover" // This will cover the entire space without stretching the image
        quality={100}
      />
      <Container className="position-relative" style={{ zIndex: 10 }}>
        <h1 className="text-black">Aquo DeFi Protocol</h1>
        <p className="text-black-50">Based on DeFi Composition and Reinforcement Learning</p>
        {/* Button to scroll to the video section */}
        <Button onClick={scrollToVideo} variant="primary" className="me-2">
          Learn More
        </Button>
        <Button variant="primary"  onClick={scrollToDeck}>Pitchdeck</Button>
      </Container>
    </div>
  );
};

export default BannerTitle;

