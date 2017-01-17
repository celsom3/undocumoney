import React, { PropTypes, Component } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Button } from 'react-toolbox';
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
        <a href="#" onClick={this.onClick.bind(this)}><Logo /></a>
        <div style={{width: '100%'}}>
          <Button style={{float: 'right', color: '#fff', fontFamily: 'Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontWeight: '400'}} label='Campaign' flat primary />
  <Button style={{float: 'right', color: '#fff', fontFamily: 'Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontWeight: '400'}} label='Stories' flat primary />
  <Button style={{float: 'right', color: '#fff', fontFamily: 'Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontWeight: '400'}} label='Participate' flat primary />
        </div>
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
