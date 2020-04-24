import React from 'react';

import { Section, Mozaik, BtnLink } from 'components';

import imgFoodOne from './img_1.jpg';
import imgFoodTwo from './img_2.jpg';
import imgFoodThree from './img_3.jpg';

const SectionFindYourBestFood = () => (
  <Section data-aos="fade-up">
    <div className="container">
      <Section.Heading className="row justify-content-center mb-5">
        <div className="col-md-8 text-center">
          <h2 className="heading mb-3">Find your best food</h2>
          <p className="sub-heading mb-5">
            Free Website Template For Restaurants Made by Colorlib
          </p>
        </div>
      </Section.Heading>
      <div className="row">
        <Mozaik>
          <Mozaik.Row>
            <Mozaik.Image url={imgFoodOne} />
            <Mozaik.Text arrowDirection="left">
              <h4 className="ftco-46-subheading">Vegies</h4>
              <h3 className="ftco-46-heading">Beef Empanadas</h3>
              <p className="mb-5">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p>
                <BtnLink href="#" />
              </p>
            </Mozaik.Text>
            <Mozaik.Image url={imgFoodTwo} />
          </Mozaik.Row>

          <Mozaik.Row>
            <Mozaik.Text arrowDirection="right">
              <h4 className="ftco-46-subheading">Food</h4>
              <h3 className="ftco-46-heading">Buttermilk Chicken Jibaritos</h3>
              <p className="mb-5">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <p>
                <BtnLink href="#" />
              </p>
            </Mozaik.Text>
            <Mozaik.Image url={imgFoodThree} />
            <Mozaik.Text arrowDirection="up">
              <h4 className="ftco-46-subheading">Food</h4>
              <h3 className="ftco-46-heading">Chicken Chimichurri Croquettes</h3>
              <p className="mb-5">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life.
              </p>
              <p>
                <BtnLink href="#" />
              </p>
            </Mozaik.Text>
          </Mozaik.Row>
        </Mozaik>
      </div>
    </div>
  </Section>
);

export default SectionFindYourBestFood;
