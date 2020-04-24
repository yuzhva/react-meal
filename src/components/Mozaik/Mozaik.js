import React from 'react';
import PropTypes from 'prop-types';

// Mozaik
const Mozaik = ({ children, size }) => (
  <div className={`ftco-${size}`}>
    {children}
  </div>
);

Mozaik.defaultProps = {
  size: 46,
};

Mozaik.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([46]),
};

// Row
Mozaik.Row = ({ children, size }) => (
  <div className={`ftco-${size}-row d-flex flex-column flex-lg-row`}>
    {children}
  </div>
);

Mozaik.Row.defaultProps = {
  size: 46,
};

Mozaik.Row.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([46]),
};

// Image
Mozaik.Image = ({ size, url }) => (
  <div
    className={`ftco-${size}-image`}
    style={{ backgroundImage: `url(${url})` }}
  />
);

Mozaik.Image.defaultProps = {
  size: 46,
};

Mozaik.Image.propTypes = {
  size: PropTypes.oneOf([46]),
  url: PropTypes.string.isRequired,
};

// Text
Mozaik.Text = ({ children, size, arrowDirection }) => (
  <div className={`ftco-${size}-text ftco-46-arrow-${arrowDirection}`}>
    {children}
  </div>
);

Mozaik.Text.defaultProps = {
  size: 46,
};

Mozaik.Text.propTypes = {
  arrowDirection: PropTypes.oneOf(['left', 'right', 'up']).isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([46]),
};

export default Mozaik;
