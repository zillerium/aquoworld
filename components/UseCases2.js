import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UseCaseCard = ({ title, category, description, imageUrl }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" href="/path-to-detail-page">Learn More →</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const UseCase = () => {
  return (
    <Container className="my-5">
      <Row className="mb-2">
        <Col>
          <h2 className="text-center">Our Latest Case Studies</h2>
        </Col>
      </Row>
      <Row>
        {/* Repeat the UseCaseCard for as many use cases as you have */}
        <UseCaseCard
          title="Liquidity Aggregation"
          category="Liquidity"
          description="Using DeFi Composition and Optimization, Liquidity is aggregated."
          imageUrl="liquidity.png" // Replace with the actual image path
        />
        <UseCaseCard
          title="Risk Mitigation"
          category="Costs"
          description="Costs can be lowered by leverage multiple AMM bonding curves."
          imageUrl="amm.png" // Replace with the actual image path
        />
        <UseCaseCard
          title="Complex Financial Products"
          category="Financial Services"
          description="A full product life cycle can be integrated with lending, options, tokenization, DEXs, and more."
          imageUrl="complexproducts.png" // Replace with the actual image path
        />
      </Row>
    </Container>
  );
};

export default UseCase;

