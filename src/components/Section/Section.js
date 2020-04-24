import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, className, ...props }) => (
  <div className={`section ${className}`} {...props}>
    {children}
  </div>
);

Section.defaultProps = {
  className: '',
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.Heading = ({ children, className, ...props }) => (
  <div className={`section-heading ${className}`} {...props}>
    {children}
  </div>
);

Section.Heading.defaultProps = {
  className: '',
};

Section.Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};


export default Section;
