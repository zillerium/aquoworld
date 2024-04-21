// components/Logos.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import logoData from './LogoData';  // Import the data from LogoData.js

const Logos = () => {
    return (
        <Container fluid style={{ backgroundColor: '#f8f9fa' }}>
            <Row className="justify-content-center align-items-center text-center" style={{ padding: '20px 0' }}>
                {logoData.map((logo, index) => (
                    <Col key={index} xs={6} sm={6} md={6} lg={2} xl={2} style={{ marginBottom: '20px' }}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={100}  // You can adjust the size as needed
                            height={100}
                            layout="intrinsic"
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Logos;

