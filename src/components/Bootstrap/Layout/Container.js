/*
 # Container.js
 # Booststrap Container Component
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
  className: PropTypes.string,
  fluid: PropTypes.bool,
};

const defaultProps = {
  className: '',
  fluid: false,
};

export default function Container({
  children,
  className,
  fluid,
}) {
  const classes = fluid ? ['container-fluid'] : ['container'];
  if (className && typeof className === 'string') classes.push(className);

  return (
    <div className={classes.join(' ')}>
      { children }
    </div>
  )
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
