import React from 'react';

import { Section } from 'components';

import bgHero from './bg_hero.png';

const SectionTheRestaurant = () => (
  <>
    <Section
      className="pb-3 bg-white"
      id="section-about"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <Section.Heading className="col-md-12 col-lg-8">
            <h2 className="heading mb-5">The Restaurant</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics,
              a large language ocean.
            </p>
            <p>
              It is a paradisematic country, in which roasted parts of
              sentences fly into your mouth.
            </p>
          </Section.Heading>
        </div>
      </div>
    </Section>

    <Section className="bg-white pt-2 pb-2 text-center" data-aos="fade">
      <p>
        <img
          src={bgHero}
          alt="background"
          className="img-fluid"
        />
      </p>
    </Section>
  </>
);

export default SectionTheRestaurant;
