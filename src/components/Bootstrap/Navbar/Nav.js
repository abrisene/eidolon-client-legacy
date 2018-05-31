/*
 # Nav.js
 # Bootstrap Nav Component
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
  vertical: PropTypes.bool,
  align: PropTypes.string,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  pills: PropTypes.bool,
  tabs: PropTypes.bool,
};

const defaultProps = {
  className: '',
  vertical: false,
  justified: false,
  fill: false,
  pills: false,
  tabs: false,
};

export default function Nav({
  children,
  vertical,
  align,
  justified,
  fill,
  pills,
  tabs,
  className,
}) {
  const classes = ['nav'];
  if (vertical) classes.push('flex-column');
  if (align) classes.push(`justify-content-${align}`);
  if (justified) classes.push('nav-justified');
  if (fill) classes.push('nav-fill');
  if (pills) classes.push('nav-pills');
  if (tabs) classes.push('nav-tabs');
  if (className && typeof className === 'string') classes.push(className);

  return (
    <nav className={classes.join(' ')}>
      { children }
    </nav>
  )
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
