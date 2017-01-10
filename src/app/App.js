import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	Layout,
	Panel,
	NavDrawer,
	IconButton,
	Dialog,
	Snackbar
} from 'react-toolbox';
import RedAppBar from '../shared-components/red-app-bar/RedAppBar.js';
import SideBar from '../shared-components/sidebar/SideBar.js';
import theme from './App.scss';
import { setSpanish } from '../shared-components/language-picker/actions';

import { getDrawerActive, getQuestionNavVisible, getCurrentRoute } from './selectors';
import { closeSnackbar, showSnackbar, toggleDrawerActive, toggleDialog } from './actions';
import styles from './styles';

class App extends Component {
	componentWillMount() {
		if (localStorage.getItem('userLanguage') && localStorage.getItem('userLanguage') === 'es') {
			if (this.props.currentLanguage !== 'es') {
				this.props.setSpanish();
			}
		}
	}

	toggleDrawerActive = () => {
		this.props.toggleDrawerActive();
	};

	toggleDrawerPinned = () => {
		this.props.toggleDrawerPinned();
	};

	showingQuestions() {
		return this.props.currentRoute === ('/preliminary' || '/questions');
	}

	handleToggle() {
		this.props.toggleDialog();
	}


  handleSnackbarClick(event, instance) {
    console.log('handleSnackbarClick', event, instance);
    //this.setState({ active: false });
    this.props.closeSnackbar();
  };

  handleSnackbarTimeout(event, instance) {
    console.log('handleSnackbarClick', event, instance);
    //this.setState({ active: false });
    this.props.closeSnackbar();
  };

  showSnackbar() {
    this.props.showSnackbar('Testing snackbar');
  }

	render() {
		const { drawerActive, snackbarActive, app, i18n, showSnackbar, snackbarMessage } = this.props;

		return (
			<Layout theme={theme} >
				<NavDrawer
					active={drawerActive}
					pinned={false}
					onOverlayClick={this.toggleDrawerActive}
					>
					<SideBar />

				</NavDrawer>

				<RedAppBar><IconButton icon='menu' onClick={this.toggleDrawerActive} inverse /></RedAppBar>

				<Panel scrollY>

					<section style={styles.page}>
						{this.props.children}
					</section>

				</Panel>

				<Dialog
					actions={[
						{ label: i18n.got_it, onClick: this.handleToggle.bind(this) }
					]}
					active={app.dialogActive}
					onEscKeyDown={this.handleToggle.bind(this)}
					onOverlayClick={this.handleToggle.bind(this)}
					title={app.dialogTitle}
					>
					<p>{app.dialogMessage}</p>
				</Dialog>

				<Snackbar
          action='Dismiss'
          active={snackbarActive}
          label={snackbarMessage}
          timeout={3000}
          onClick={this.handleSnackbarClick.bind(this)}
          onTimeout={this.handleSnackbarTimeout.bind(this)}
          type='cancel'
        />
			</Layout>
		);
	}
}

App.propTypes = {
	app: PropTypes.object,
	children: PropTypes.node,
  closeSnackbar: PropTypes.func,
	currentLanguage: PropTypes.oneOf(['es', 'en']),
	currentRoute: PropTypes.string,
	drawerActive: PropTypes.bool,
	drawerPinned: PropTypes.bool,
	i18n: PropTypes.object,
	questionNavVisible: PropTypes.bool,
	scrollable: PropTypes.bool,
	setSpanish: PropTypes.func,
  showSnackbar: PropTypes.func,
	snackbarActive: PropTypes.bool,
	toggleDialog: PropTypes.func,
	toggleDrawerActive: PropTypes.func,
	toggleDrawerPinned: PropTypes.func
};

function mapStateToProps(state) {
	return {
		i18n: state.i18n.copy[state.i18n.ui.current],
		drawerActive: getDrawerActive(state),
		questionNavVisible: getQuestionNavVisible(state),
		currentRoute: getCurrentRoute(state),
		scrollable: state.app.scrollable,
		app: state.app,
		currentLanguage: state.i18n.ui.current,
		snackbarActive: state.app.snackbarActive,
    snackbarMessage: state.app.snackbarMessage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    closeSnackbar,
		toggleDrawerActive,
		toggleDialog,
		setSpanish,
    showSnackbar
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
