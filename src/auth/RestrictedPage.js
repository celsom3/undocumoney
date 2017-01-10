import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginRequest } from './actions';
import { getIdToken } from './selectors';

class RestrictedPage extends Component {
  componentWillMount() {
    const { idToken, doLoginRequest } = this.props;

    if (!idToken) {
      doLoginRequest();
    }
  }

  render() {
    const { children, idToken } = this.props;

    if (idToken) {
      return children;
    }

    return <div />;
  }
}

RestrictedPage.propTypes = {
  children: PropTypes.node.isRequired,
  doLoginRequest: PropTypes.func,
  idToken: PropTypes.string,
  location: PropTypes.object.isRequired,
  loginRequest: PropTypes.func
};

function mapStateToProps(state) {
  return {
    idToken: getIdToken(state),
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doLoginRequest: loginRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestrictedPage);
