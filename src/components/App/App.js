/*
 # App.jsx
 # App Root Component
 */

/*
 # Module Dependencies
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../stores';

import './styles.css';

/*
 # Redux
 */

function mapStateToProps(state) {
  const { app } = state;
  return { ...app };
}

function mapDispatchToProps(dispatch) {
  return {
    updateAppConfig: bindActionCreators(actions.app.updateAppConfig, dispatch),
    updateAppStore: bindActionCreators(actions.app.updateAppStore, dispatch),
  };
}

/*
 # Component
 */

/*const propTypes = {
  children: PropTypes.element,
  config: PropTypes.object,
};

const defaultProps = {

};*/

class App extends Component {
  constructor(props) {
    super(props)

    const { listenAccount } = this.props;

    listenAccount();
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
        { descendants }
      </div>
    )
  }
}

/*App.propTypes = propTypes;
App.defaultProps = defaultProps;*/

/*
 # Module Exports
 */

export default connect(mapStateToProps, mapDispatchToProps)(App);
