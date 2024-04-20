import React, { useState, useContext, useRef } from "react";
import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";
import { ListGroup, Tab } from 'react-bootstrap';
import Head from 'next/head';
import Link from 'next/link';

import { WalletContext } from "../lib/WalletContext";
import Navigation from "../components/Navigation"; // Assuming you have the Navigation component already
import AboutUs from '../components/AboutUs';
import Tech from '../components/Tech';
import Market from '../components/Market';
import TechTabs from '../components/TechTabs';
import Team from '../components/Team';
import UseCases from '../components/UseCases';
import UseCase1 from '../components/UseCase1';
import UseCase2 from '../components/UseCase2';
import UseCase3 from '../components/UseCase3';
import UseCase4 from '../components/UseCase4';
import UseCase5 from '../components/UseCase5';
import UseCase6 from '../components/UseCase6';
import Pitch from '../components/Pitch';

function Home() {
  const { userAddress, setUserAddress } = useContext(WalletContext);

  const [activePage, setActivePage] = useState(0);
  const useCase1Ref = useRef(null); // Ref for the UseCase1 component
  const useCase2Ref = useRef(null); // Ref for the UseCase1 component
  const useCase3Ref = useRef(null); // Ref for the UseCase1 component
  const useCase4Ref = useRef(null); // Ref for the UseCase1 component
  const useCase5Ref = useRef(null); // Ref for the UseCase1 component
  const useCase6Ref = useRef(null); // Ref for the UseCase1 component

 const handleLearnMoreClick = () => {
    useCase1Ref.current?.scrollIntoView({ behavior: 'smooth' });
    useCase2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    useCase3Ref.current?.scrollIntoView({ behavior: 'smooth' });
    useCase4Ref.current?.scrollIntoView({ behavior: 'smooth' });
    useCase5Ref.current?.scrollIntoView({ behavior: 'smooth' });
    useCase6Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div id="AboutUs">
        <AboutUs />
      </div>
	        <div id="TechTabs" className="tech-tabs-background">
        <h1 className="tech-tabs-title">Our Technologies</h1>

        <TechTabs />
      </div>
      <div id="Team">
        <Team />
      </div>
      <div id="UseCases">
        {/* Pass the handleLearnMoreClick function as a prop to UseCases */}
        <UseCases onLearnMoreClick={handleLearnMoreClick} />
      </div>
      <div>
        <UseCase1 ref={useCase1Ref} />
      </div>

      <div>
        <UseCase2 ref={useCase2Ref} />
      </div>
      <div>
        <UseCase3 ref={useCase3Ref} />
      </div>
      <div>
        <UseCase4 ref={useCase4Ref} />
      </div>
      <div>
        <UseCase5 ref={useCase5Ref} />
      </div>
      <div>
        <UseCase6 ref={useCase6Ref} />
      </div>
      <div id="Pitch">
        <Pitch />
      </div>
      <div id="Market">
        <Market />
      </div>
    </div>
  );
}

export default Home;

