import React from 'react';

import welcomeBg from './slider-1.jpg';

const SectionWelcome = () => (
  <div className="cover_1 overlay">
    <div
      className="img_bg"
      style={{ backgroundImage: `url(${welcomeBg})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-10" data-aos="fade-up">
            <h2 className="heading mb-5">Welcome to Meal</h2>
            <p>
              <a
                href="#section-reservation"
                className="btn btn-welcome btn-welcome--outline-white px-5 py-3"
              >
                Reserve A Table
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SectionWelcome;
