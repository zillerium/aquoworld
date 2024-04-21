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
import Logos from '../components/Logos';
import VideoManager2 from '../components/VideoManager2';

function Home() {
  const { userAddress, setUserAddress } = useContext(WalletContext);

  const [activePage, setActivePage] = useState(0);


  return (
    <div>
	     <Head>
        <title>Aquo DeFi Protocol</title>
        <meta name="description" content="Aquo" />
	   {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aquo.world" />
        <meta property="og:title" content="Aquo" />
        <meta property="og:description" content="Aquo" />
        <meta property="og:image" content="https://aquo.world/aquologo10.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="https://aquo.world/aquologo10.png" />
        <meta name="twitter:url" content="https://aquo.world" />
        <meta name="twitter:title" content="Aquo" />
        <meta name="twitter:description" content="Aquo" />
        <meta name="twitter:image" content="https://aquo.world/aquologo10.png" />

        {/* Other meta tags */}
      </Head>

	  <div className="mb-5">
	  <BannerTitle />
	  </div>
      <div id="Story">
	    <h1 className="text-center">Our Story</h1>
        <Story />
      </div>
	  <div id="video-section">
	    <h1 className="text-center">The Aquo DeFi Protocol</h1>
<VideoManager2 />
	  </div>
      <div id="AboutUs">
        <AboutUs />
      </div>
	  <div>
	    <h1 className="text-center">DeFi Protocols</h1>
<Logos />
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

