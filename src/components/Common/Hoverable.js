/*
 # Hoverable.js
 # Hoverable Utility Component
 */

/*
 # Module Dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.less';


/*
 # Component
 */

const propTypes = {
  children: PropTypes.node,
  onMouseEnter: propTypes.function,
  onMouseEnter: propTypes.function,
};

const defaultProps = {
  onMouseEnter: (x) => x,
  onMouseLeave: (x) => x,
};

export default function Hoverable({
  children,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  )
}

Hoverable.propTypes = propTypes;
Hoverable.defaultProps = defaultProps;
