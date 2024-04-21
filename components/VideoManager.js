import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';

const VideoWithText = () => {
    return (
        <Container>
            <Row className="align-items-start mt-5">
                <Col md={6}>
                    <VideoPlayer />
                </Col>
                <Col md={6}>
                    <h1>The Aquo Journey</h1>
                    <p>
                        This is a placeholder text section where you can add more information about the video or content related to it. Customize this area to suit your content needs. Its a great space to provide viewers with context or background information.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default VideoWithText;

