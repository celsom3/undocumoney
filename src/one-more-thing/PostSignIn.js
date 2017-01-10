import React, { Component, PropTypes } from 'react';
import { Button, Input, Dropdown } from 'react-toolbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserMetadata_local, stopEditing, passInitialCheck, updateUserMetadata_remote } from '../profile/actions';
import { saveNewMetadata } from '../auth/actions';
import { geti18n } from '../shared-components/language-picker/selectors';
import { browserHistory } from 'react-router';
import { getProfile } from '../profile/selectors';


class SignInPostFB extends Component {

    onInputChange(name, value) {
        this.props.updateUserMetadata_local(name, value);
    }

    onSubmit() {
        const { stopEditing, profileLocal, passInitialCheck, saveNewMetadata, updateUserMetadata_remote, updateUserMetadata_local } = this.props;
        // Validate the fields:
        updateUserMetadata_local('initialCheck', true);
				updateUserMetadata_remote(profileLocal);


        setTimeout(() => {
          browserHistory.push('/preliminary');
        }, 3000);

    }

    render() {
        const { i18n, profileLocal } = this.props;

        let firstName = '';
        let lastName = '';
        let phone = '';
        let zip = '';
        let where_heard = '';

        firstName = profileLocal.first_name;
        lastName = profileLocal.last_name;
        phone = profileLocal.phone;
        zip = profileLocal.zip;
        where_heard = profileLocal.where_heard;


        return (
            <div>
                <h2>{i18n['1moreThing']}</h2>

                <Input
                    onChange={this.onInputChange.bind(this, 'first_name')}
                    type='text'
                    label={i18n.firstName}
                    value={firstName}
                    disabled={false}
                    required
                    />
                <br />

                <Input
                    onChange={this.onInputChange.bind(this, 'last_name')}
                    type='text'
                    label={i18n.lastName}
                    value={lastName}
                    disabled={false}
                    required
                    />
                <br />

                <Input
                    onChange={this.onInputChange.bind(this, 'phone')}
                    type='tel'
                    label={i18n.phone}
                    value={phone}
                    disabled={false}
                    required
                />
                <br />

                <Input
                    onChange={this.onInputChange.bind(this, 'zip')}
                    type='number'
                    label={i18n.zip}
                    value={zip}
                    disabled={false}
                    required
                    />
                <br />

                <p>{i18n.where_heard}</p>
				<Dropdown
						auto
						source={i18n.where_heard_options}
						value={where_heard}
						onChange={this.onInputChange.bind(this, 'where_heard')}
						disabled={false}
						/>
				<br />

                <Button onClick={this.onSubmit.bind(this)} style={{ 'width': '100%' }} label={i18n.continue} raised primary />
            </div>
        );
    }
}

SignInPostFB.propTypes = {
    i18n: PropTypes.object,
    passInitialCheck: PropTypes.func,
    profile: PropTypes.object,
    profileLocal: PropTypes.object,
		updateUserMetadata_remote: PropTypes.func,
    saveNewMetadata: PropTypes.func,
    stopEditing: PropTypes.func,
    updateUserMetadata_local: PropTypes.func
};

function mapStateToProps(state) {
    return {
        i18n: geti18n(state),
        profileLocal: state.profile,
        profile: getProfile(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateUserMetadata_local,
        stopEditing,
        passInitialCheck,
				updateUserMetadata_remote,
        saveNewMetadata
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPostFB);
