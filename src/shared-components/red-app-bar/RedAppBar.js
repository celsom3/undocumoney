import React, { PropTypes, Component } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Logo from './Logo.js';
import theme from './RedAppBar.scss';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

const style = {
  'textAlign': 'center',
  'margin': '0px auto'
};

class RedAppBar extends Component {

  onClick(event) {
    event.preventDefault();

  }

  oldLink = () => <Link to={'/preliminary'} style={style}><Logo /></Link>;

  render() {
    const { children, other } = this.props;
    return (
      <AppBar {...other} theme={theme}>
        {children}
        <a href="#" style={style} onClick={this.onClick.bind(this)}><Logo /></a>
      </AppBar>
    );
  }
}

RedAppBar.propTypes = {
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({

	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RedAppBar);
