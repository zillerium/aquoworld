// components/VideoPlayer.js

import React from 'react';
import { Container } from 'react-bootstrap';

const VideoPlayer = () => {
    const videoId = "myWSmT_jGJU";
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Container className="d-flex justify-content-center mt-5">
            <div style={{ width: '100%', position: 'relative', paddingBottom: '56.25%' }}>
                <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src={embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </Container>
    );
};

export default VideoPlayer;

