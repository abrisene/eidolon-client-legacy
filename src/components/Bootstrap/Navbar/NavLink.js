/*
 # NavLInk.js
 # Bootstrap Nav Link Component
 */

/*
 # Module Dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as RouterDom /*{ Link }*/ from 'react-router-dom'

import './styles.less';


/*
 # Component
 */

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
  replace: PropTypes.bool,
  innerRef: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

const defaultProps = {
  className: '',
  to: '/',
  replace: false,
  active: false,
  disabled: false,
};

export default function NavLink({
  children,
  className,
  to,
  replace,
  innerRef,
  active,
  disabled,
}) {
  const classes = ['nav-link'];
  if (active) classes.push('active');
  if (disabled) classes.push('disabled');
  if (className && typeof className === 'string') classes.push(className);

  return (
    <RouterDom.NavLink to={to} innerRef={innerRef} replace={replace} className={classes.join(' ')}>
      {children}
    </RouterDom.NavLink>
  )
}

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;
