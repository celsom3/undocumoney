import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startAnsweringQuestions } from '../shared-components/question-nav/actions';
import { showQuestionNav, makeNotScrollable } from '../app/actions';
import { getQuestions, getCurrentQuestion, getQuestionAnswers, getQuestionQueue } from './selectors';
import QuestionInput from '../shared-components/question-input/QuestionInput';
import TextList from '../shared-components/TextList';
import FullscreenLoader from '../shared-components/FullscreenLoader';


class Questions extends Component {

	componentWillMount() {
		//this.props.makeNotScrollable();
		this.props.showQuestionNav();
		//this.props.startAnsweringQuestions();

		const { currentQuestion } = this.props;
		if (!currentQuestion) {
			browserHistory.push('relief');
		}

	}


	render() {

		const { questions, currentQuestion } = this.props;
		if (currentQuestion) {
			return (
				<div style={{marginBottom:'100px'}}>

					<h6>
						{questions[currentQuestion].text}
					</h6>
					<br />
					<TextList question={questions[currentQuestion]} />
					<br />
					<QuestionInput to="questions" />


				</div>
			);
		}
		else {
			return <FullscreenLoader />;
		}
	}
}

Questions.propTypes = {
	currentQuestion: PropTypes.number,
	questionQueue: PropTypes.array,
	questions: PropTypes.object,
	showQuestionNav: PropTypes.func,
	startAnsweringQuestions: PropTypes.func
};

function mapStateToProps(state) {
	return {
		questions: getQuestions(state),
		currentQuestion: getCurrentQuestion(state),
		answers: getQuestionAnswers(state),
		questionQueue: getQuestionQueue(state)
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		startAnsweringQuestions,
		showQuestionNav,
		makeNotScrollable
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
