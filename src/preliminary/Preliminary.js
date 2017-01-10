import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startAnsweringPrelim, initializePrelimQueue } from '../shared-components/question-nav/actions';
import { showQuestionNav, makeNotScrollable } from '../app/actions';
import { getQuestions, getCurrentQuestion } from './selectors';
import QuestionInput from '../shared-components/question-input/QuestionInput';


class Preliminary extends Component {

	componentWillMount() {
		//this.props.makeNotScrollable();
		this.props.showQuestionNav();
		this.props.startAnsweringPrelim();
		// this.props.initializePrelimQueue();
	}

	render() {
		const { questions, currentQuestion } = this.props;
		return (
			<div style={{marginBottom:'100px'}}>
				<h6>
					{questions[currentQuestion || 1].text}
				</h6>
				<br />
				<QuestionInput to="preliminary" />
			</div>
		);
	}
}

Preliminary.propTypes = {
	currentQuestion: PropTypes.number,
	questions: PropTypes.object,
	showQuestionNav: PropTypes.func,
	startAnsweringPrelim: PropTypes.func
};

function mapStateToProps(state) {
	return {
		questions: getQuestions(state),
		currentQuestion: getCurrentQuestion(state)
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		startAnsweringPrelim,
		showQuestionNav,
		makeNotScrollable,
		initializePrelimQueue
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Preliminary);
