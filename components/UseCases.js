import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import UseCaseCard from './UseCaseCard'; // Make sure the path is correct based on your project structure
import UseCaseList from './UseCaseList'; // Make sure the path is correct based on your project structure



const UseCase = ({onLearnMoreClick}) => {

	  console.log("Received onLearnMoreClick in UseCases:", onLearnMoreClick);  // This logs the function or undefined

  // State to track the active page
  const [activePage, setActivePage] = useState(0);

  // This will be your data for the case studies (can be fetched from an API or defined here)

  // Calculating the number of pages needed
  const itemsPerPage = 3;
  const pageCount = Math.ceil(UseCaseList.length / itemsPerPage);

  // Function to calculate the case studies to show on the current page
  const paginatedData = () => {
    const start = activePage * itemsPerPage;
    return UseCaseList.slice(start, start + itemsPerPage);
  };

  return (
    <Container className="my-5">
      <Row className="mb-2">
        <Col>
          <h2 className="text-center">Our Latest Case Studies</h2>
        </Col>
      </Row>
	  <Row>

{paginatedData().map((useCase, index) => {
    console.log(`Index: ${index}`);
    console.log("Use Case Details:", useCase);
    return (
        <UseCaseCard
            key={index}
            {...useCase}
	    onLearnMoreClick={() => onLearnMoreClick(`useCase${useCase.page}Ref`)}

        />
    );
})}

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

