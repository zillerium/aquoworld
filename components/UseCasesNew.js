import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';

const UseCaseCard1 = ({ title, category, description, imageUrl }) => {
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

const UseCaseCard = ({ title, category, description, imageUrl, onLearnMoreClick }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          {/* Update the button's onClick to call the onLearnMoreClick function */}
          <Button variant="primary" onClick={onLearnMoreClick}>Learn More →</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const UseCase = ({onLearnMoreClick}) => {
  // State to track the active page
  const [activePage, setActivePage] = useState(0);

  // This will be your data for the case studies (can be fetched from an API or defined here)
  const useCaseData = [
    {
      title: "Liquidity Aggregation",
      category: "Liquidity",
      description: "Using DeFi Composition and Optimization, Liquidity is aggregated.",
      imageUrl: "liquidity.png"
    },
    {
      title: "Risk Mitigation",
      category: "Slippage",
      description: "Slippage can be reduced by leveraging multiple AMM bonding curves.",
      imageUrl: "amm.png"
    },
    {
      title: "Complex Financial Products",
      category: "Financial Services",
      description: "A full product life cycle can be integrated with DeFi Protocols",
      imageUrl: "complexproducts.png"
    },
    {
      title: "More Financial Products",
      category: "Financial Services",
      description: "More financial products can be offered, transparent to the user.",
      imageUrl: "options.png"
    },
    {
      title: "More Efficient use of Capital",
      category: "Efficiency",
      description: "Capital can be invested across mutliple products, transparent to the user.",
      imageUrl: "capital.png"
    },
    {
      title: "Single Contact Point",
      category: "Accessibility",
      description: "Financial Services via a single point enabling access to lending.",
      imageUrl: "access.png"
    },
    // ... Add more case studies as needed
  ];

  // Calculating the number of pages needed
  const itemsPerPage = 3;
  const pageCount = Math.ceil(useCaseData.length / itemsPerPage);

  // Function to calculate the case studies to show on the current page
  const paginatedData = () => {
    const start = activePage * itemsPerPage;
    return useCaseData.slice(start, start + itemsPerPage);
  };

  return (
    <Container className="my-5">
      <Row className="mb-2">
        <Col>
          <h2 className="text-center">Our Latest Case Studies</h2>
        </Col>
      </Row>
      <Row>
        {paginatedData().map((useCase, index) => (
          <UseCaseCard key={index} {...useCase} />
        ))}
      </Row>
	  <Row>
        {paginatedData().map((useCase, index) => (
          // Pass the onLearnMoreClick function to each UseCaseCard
          <UseCaseCard key={index} {...useCase} onLearnMoreClick={onLearnMoreClick} />
        ))}
      </Row>
	  <Row>
        <Col className="d-flex justify-content-center">
          <Pagination className="unique-pagination-dots">
            {Array.from({ length: pageCount }, (_, idx) => (
              <Pagination.Item
                key={idx}
                active={idx === activePage}
                onClick={() => setActivePage(idx)}
                className="page-item" // Removed the 'unique-' prefix for better readability
              >
                {/* Accessibility: Indicates the purpose of the link for screen readers */}
                <span className="page-link" aria-label={`Go to page ${idx + 1}`}>
                  <span className="visually-hidden">{idx + 1}</span>
                </span>
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default UseCase;

