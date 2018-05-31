/*
 # Row.js
 # Booststrap Row Component
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
  gutters: PropTypes.bool,
};

const defaultProps = {
  className: '',
  gutters: true,
};

export default function Row({
  children,
  className,
  gutters,
}) {
  const classes = ['row'];
  if (!gutters) classes.push('no-gutters');
  if (className && typeof className === 'string') classes.push(className);

  return (
    <div className={classes.join(' ')}>
      { children }
    </div>
  )
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
