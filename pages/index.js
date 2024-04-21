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
import Pitch from '../components/Pitch';
import UseCaseContainer from '../components/UseCaseContainer';
import BannerTitle from '../components/BannerTitle';
import Roadmap from '../components/Roadmap';
import Story from '../components/Story';

function Home() {
  const { userAddress, setUserAddress } = useContext(WalletContext);

  const [activePage, setActivePage] = useState(0);


  return (
    <div>
	  <div className="mb-5">
	  <BannerTitle />
	  </div>
      <div id="Story">
	    <h1 className="text-center">Our Story</h1>
        <Story />
      </div>
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
      <div id="Pitch">
        <Pitch />
      </div>

      <div id="Market" >
	    <h1 className="text-center">Markets</h1>

        <Market />
      </div>
	  <div id="Roadmap">
	  <Roadmap />
	  </div>
	  <div>
<UseCaseContainer />
	  </div>
    </div>
  );
}

export default Home;

