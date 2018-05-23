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

import { leagueGothic } from '../../fonts';
import './styles.css';

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
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

/*
 # Module Exports
 */

export default connect(mapStateToProps, mapDispatchToProps)(App);
