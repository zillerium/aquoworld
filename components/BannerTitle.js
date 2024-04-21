import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

const BannerTitle = () => {
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
        <h1 className="text-black">Aquo DeFi Optimization</h1>
        <p className="text-black-50">DeFi Protocols Composed and Optimized</p>
      </Container>
    </div>
  );
};

export default BannerTitle;

