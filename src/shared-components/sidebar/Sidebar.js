import React, { Component } from 'react';
import { Panel, Navigation, Input, Button, Link as aLink } from 'react-toolbox';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { geti18n } from '../language-picker/selectors';
import LanguagePicker from '../language-picker/LanguagePicker.js';
import { logout } from '../../auth/actions.js';
import { toggleDrawerActive } from '../../app/actions';
import { browserHistory } from 'react-router';
import theme from './Sidebar.scss';

const styles= {
  'panel': {
    'padding': '20px'
  },
  'nav': {
    'listStyleType': 'none'
  },
  'langOpt': {
    'float': 'left'
  },
  'langBlock': {
    'display': 'block',
    'position': 'relative'
  }
};

class SideBar extends Component {

	handleLogout(e){
		e.preventDefault();
		this.props.logout();
		this.props.toggleDrawerActive();

	}

  onClick(event) {
    event.preventDefault();

  }

  render() {

		const { i18n, logout } = this.props;

    return (
      <Panel theme={theme}>
        <div style={styles.panel}>

          <div className="language">

            <h3>{i18n['language']}</h3>

            <LanguagePicker />

          </div>

          <Navigation type='vertical'>
            <ul className="navlist" style={styles.nav}>
              <li><a href="#" onClick={this.onClick.bind(this)}><h3>{i18n['menu1']}</h3></a></li>

							<li><aLink href='#' onClick={this.handleLogout.bind(this)} style={{'cursor':'pointer'}} ><h3>{i18n['logout']}</h3></aLink></li>
						
            </ul>
          </Navigation>
        </div>
      </Panel>
    )
  }
}

function mapStateToProps( state ) {
  return {
    i18n: geti18n(state)
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({
		logout: logout,
		toggleDrawerActive: toggleDrawerActive,
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )(SideBar);
