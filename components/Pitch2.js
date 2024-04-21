import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

const Pitch = () => {
  return (
    <div className="bannerTitle">
      <Image
        src="/pitchdeck.png" // Path to your image file
        alt="Background"
        layout="fill" // This will make the image fill the div
        objectFit="cover" // This will cover the entire space without stretching the image
        quality={100}
      />
      <Container className="position-relative" style={{ zIndex: 10 }}>
        <h1 className="text-white">Aquo Pitchdeck</h1>
        <p className="text-white-50">Aquo is to revolutionize DeFi</p>
      </Container>
    </div>
  );
};

export default Pitch;

