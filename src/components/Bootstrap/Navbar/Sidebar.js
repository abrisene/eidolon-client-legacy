/*
 # Sidebar.js
 # Bootstrap Sidebar Component
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
  col: PropTypes.number,
  light: PropTypes.bool,
  dark: PropTypes.bool,
};

const defaultProps = {
  className: '',
  col: 2,
  light: false,
  dark: false,
};

export default function Sidebar({
  children,
  col,
  light,
  dark,
  className,
}) {
  const classes = [`col-md-${col}`, 'd-none', 'd-md-block', 'sidebar'];
  if (light) classes.push('bg-light');
  if (dark) classes.push('bg-dark');
  if (className && typeof className === 'string') classes.push(className);

  return (
    <nav className={classes.join(' ')}>
      { children }
    </nav>
  )
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
