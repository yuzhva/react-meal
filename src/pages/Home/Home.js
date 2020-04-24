import React from 'react';
import AOS from 'aos';

import { Loader } from 'components';

import Header from './Header';
import * as Section from './Section';


const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="home-page">
      <Header />

      <Section.Welcome />
      <Section.FindYourBestFood />
      <Section.TheRestaurant />

      <Loader />
    </div>
  );
};

export default Home;
