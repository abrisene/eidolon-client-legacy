/*
 # App.jsx
 # App Root Component
 */

/*
 # Module Dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';


/*
 # Component
 */

const propTypes = {
  children: PropTypes.node,
  config: PropTypes.object,
  env: PropTypes.object,
  status: PropTypes.object,
  store: PropTypes.object,
};

const defaultProps = {
  light: false,
  dark: false,
  fixedTop: false,
  fixedBottom: false,
  className: '',
};

export default function Navbar({
  children,
  light,
  dark,
  fixedTop,
  fixedBottom,
  className,
}) {
  const classes = ['navbar'];
  if (light) classes.push('navbar-light bg-light');
  if (dark) classes.push('navbar-dark bg-dark');
  if (fixedTop) classes.push('fixed-top');
  if (fixedBottom) classes.push('fixed-bottom');
  if (className && typeof className === 'string') classes.push(className);

  return (
    <nav className={classes.join(' ')}>
      { children }
    </nav>
  )
}

/*
class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      children,
      status,
      env,
      stores,
    } = this.props;

    const childProps = {
      status,
      env,
      stores,
    };
    const descendants = children ? React.cloneElement(children, { ...childProps }) : '';
    return (
      <div id="l-app" className="l-app">
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-1">
              <img id="app-logo" src={logo} />
            </div>
            <div className="col-md-11">
              <h1 id="app-test">EIDOLON</h1>
            </div>
          </div>
        </div>
        { descendants }
      </div>
    )
  }
}*/

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
