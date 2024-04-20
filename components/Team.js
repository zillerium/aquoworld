import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa';

const TeamMember = ({ name, title, imageSrc, bio }) => {
  return (
    <Col md={12} className="d-flex justify-content-center mb-4">
      <Card style={{ width: '18rem' }}> {/* Adjust the width as needed */}
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
          <Card.Text>{bio}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="outline-primary" href="https://www.linkedin.com/in/your-profile" target="_blank">
              <FaLinkedinIn />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default function Team() {
  return (
    <Container>
      <Row className="my-4">
        <Col className="text-center">
          <h2>Our Team</h2>
          <p>Meet the individual behind our success.</p>
        </Col>
      </Row>
      <Row>
        <TeamMember
          name="Trevor Lee Oakley"
          title="Founder"
          imageSrc="oakleyface.jpeg" // Replace with the actual image path
          bio="Trevor is a visionary leader with over 20 years of experience in the tech industry. He's passionate about innovation and dedicated to empowering the team to exceed their goals."
        />
      </Row>
    </Container>
  );
}

