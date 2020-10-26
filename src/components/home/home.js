import React from 'react';
import { Element } from 'react-scroll';

import Header from './header/header';
import Main from './main/main';
import ThreeColumns from './three-columns/three-columns';
import FourSteps from './four-steps/four-steps';
import AboutUs from './about-us/about-us';
import WhomWeHelp from './whom-we-help/whom-we-help';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Element name="main">
        <Main />  
      </Element>
      <ThreeColumns />
      <Element name="fourSteps">
        <FourSteps />
      </Element>
      <Element name="aboutUs">
        <AboutUs />
      </Element>
      <Element name="whomWeHelp">
        <WhomWeHelp />
      </Element>
    </div>
  );
}

export default Home;
