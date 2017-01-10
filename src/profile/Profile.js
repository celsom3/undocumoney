import React, { Component, PropTypes } from 'react';
import { Input, Button, Dropdown } from 'react-toolbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserMetadata_local, updateUserMetadata_remote, startEditing, stopEditing } from './actions';
import { geti18n } from '../shared-components/language-picker/selectors';
import { getProfile } from './selectors';
import { hideQuestionNav, makeNotScrollable, toggleDialog, updateDialog } from '../app/actions';


class Profile extends Component {

	componentWillMount() {
		//this.props.makeNotScrollable();
		this.props.hideQuestionNav();
	}

	onClick() {
		const { startEditing, stopEditing, profileLocal, profile, updateUserMetadata_remote } = this.props;

		if (profileLocal.isEditing) {
			stopEditing();
      updateUserMetadata_remote(profileLocal);
		}
		else {
			startEditing(profile);
		}

	}

	onInputChange(name, value) {
    const { updateUserMetadata_local, profileLocal } = this.props;

		updateUserMetadata_local(name, value);
    //updateUserMetadata_remote(profileLocal);

	}

	render() {
		const { i18n, profile, profileLocal } = this.props;

		let firstName = '';
		let lastName = '';
		let phone = '';
		let zip = '';
		let where_heard = '';

		if (profileLocal.isEditing) {
			firstName = profileLocal.first_name;
			lastName = profileLocal.last_name;
			phone = profileLocal.phone;
			zip = profileLocal.zip;
			where_heard = profileLocal.where_heard;
		}
		else if (profile.user_metadata) {
			if (profile.user_metadata.first_name) {
				firstName = profile.user_metadata.first_name;
			}

			if (profile.user_metadata.last_name) {
				lastName = profile.user_metadata.last_name;
			}

			if (profile.user_metadata.phone) {
				phone = profile.user_metadata.phone;
			}

			if (profile.user_metadata.zip) {
				zip = profile.user_metadata.zip;
			}

			if (profile.user_metadata.where_heard) {
				where_heard = profile.user_metadata.where_heard;
			}
		}


		return (
			<div>
				<h3>{i18n.profile}</h3>
				<Input
					onChange={this.onInputChange.bind(this, 'first_name')}
					type='text'
					label={i18n.firstName}
					value={firstName}
					disabled={!profileLocal.isEditing}
					/>
				<br />

				<Input
					onChange={this.onInputChange.bind(this, 'last_name')}
					type='text'
					label={i18n.lastName}
					value={lastName}
					disabled={!profileLocal.isEditing}
					/>
				<br />

				<Input
					onChange={this.onInputChange.bind(this, 'phone')}
					type='tel'
					label={i18n.phone}
					value={phone}
					disabled={!profileLocal.isEditing} />
				<br />

				<Input
					onChange={this.onInputChange.bind(this, 'zip')}
					type='number'
					label={i18n.zip}
					value={zip}
					disabled={!profileLocal.isEditing} />
				<br />

				<p>{i18n.where_heard}</p>
				<Dropdown
						auto
						source={i18n.where_heard_options}
						value={where_heard}
						onChange={this.onInputChange.bind(this, 'where_heard')}
						disabled={!profileLocal.isEditing}
						/>
				<br />

				<Input
					onChange={this.onInputChange.bind(this, 'email')}
					type='text'
					label={i18n.email}
					value={profile.email}
					disabled />
				<br />

				<Button
					style={{ 'width': '100%' }}
					label={profileLocal.isEditing ? i18n.save : i18n.edit}
					onClick={this.onClick.bind(this)}
					raised primary />
			</div>
		);
	}
}

Profile.propTypes = {
	hideQuestionNav: PropTypes.func,
	i18n: PropTypes.object,
	profile: PropTypes.object,
	profileLocal: PropTypes.object,
	startEditing: PropTypes.func,
	stopEditing: PropTypes.func,
	updateDialog: PropTypes.func,
	updateUserMetadata_local: PropTypes.func,
  updateUserMetadata_remote: PropTypes.func
};

function mapStateToProps(state) {
	return {
		i18n: geti18n(state),
		profile: getProfile(state),
		profileLocal: state.profile
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		updateUserMetadata_local,
    updateUserMetadata_remote,
		startEditing,
		stopEditing,
		hideQuestionNav,
		makeNotScrollable,
		toggleDialog,
		updateDialog
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
