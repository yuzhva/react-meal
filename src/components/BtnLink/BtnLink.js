import React from 'react';
import PropTypes from 'prop-types';

const BtnLink = ({ href }) => (
  <a className="btn-link" href={href}>
    Learn More
    <span className="ion-android-arrow-forward" />
  </a>
);

BtnLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default BtnLink;
