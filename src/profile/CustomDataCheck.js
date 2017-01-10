import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { getInitialCheck } from './selectors';

class CustomDataCheck extends Component {
    componentWillMount() {
        const { initialCheck } = this.props;

        if (!initialCheck) {
            browserHistory.push('/one-more-thing');
        }
    }

    render() {
        const { children, initialCheck } = this.props;

        if (initialCheck) {
            return children;
        }
        else {
            return <div />;
        }


    }
}

CustomDataCheck.propTypes = {
    children: PropTypes.node.isRequired,
    initialCheck: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        initialCheck: getInitialCheck(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDataCheck);
