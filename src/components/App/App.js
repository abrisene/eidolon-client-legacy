/*
 # App.jsx
 # App Root Component
 */

/*
 # Module Dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../stores';

import { Route, Link } from 'react-router-dom'

import { Container, Row, Nav, NavLink, Navbar, Sidebar } from '../Bootstrap';

import { leagueGothic } from '../../fonts';
import './styles.less';

import logo from './images/app.logo.png';

/*
 # Redux
 */

function mapStateToProps(state) {
  const { app } = state;
  return { ...app };
}

function mapDispatchToProps(dispatch) {
  return {
    updateAppConfig: bindActionCreators(actions.app.updateConfig, dispatch),
    updateAppStore: bindActionCreators(actions.app.updateStore, dispatch),
  };
}

/*
 # Component
 */

const propTypes = {
  children: PropTypes.element,
  config: PropTypes.object,
  env: PropTypes.object,
  status: PropTypes.object,
  store: PropTypes.object,
};

const defaultProps = {
  config: {},
  env: {},
  status: {},
  store: {},
};

class App extends Component {
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

    const appName = env.appName.toUpperCase() || 'EIDOLON';

    const childProps = {
      status,
      env,
      stores,
    };
    const descendants = children ? React.cloneElement(children, { ...childProps }) : '';
    return (
      <div id="l-app" className="l-app">
        <Navbar light className="c-navbar-primary">
          <div className="col">
            <div id="app-logo">
              <Link to="/">
                <img src={logo} />
                <span>{appName}</span>
              </Link>
            </div>
          </div>
        </Navbar>
        <Navbar dark className="c-navbar-secondary">
          <Nav>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/store'}>Store</NavLink>
          </Nav>
        </Navbar>
        <Container>
          <Row>
            <Route exact path="/" render={() => 'Home' } />
            <Route path="/about" render={() => 'About'} />
            <Route path="/store" render={() => 'Some Stuff' } />
          </Row>
        </Container>
      </div>
    )
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

/*
 # Module Exports
 */

export default connect(mapStateToProps, mapDispatchToProps)(App);
