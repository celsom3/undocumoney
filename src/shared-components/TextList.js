import React, { Component, PropTypes } from 'react';
import { Chip } from 'react-toolbox';

class TextList extends Component {

	render() {

		const { question } = this.props;

		if (question.textList !== undefined) {
			return (
				<div>
					{question.textList.map((item) => {
						return (
							<Chip key={item}>{item}</Chip>
						);
					})}
				</div>
			);
		}
		else {
			return (<div />);
		}
	}
}

TextList.propTypes = {
	question: PropTypes.object
};

export default TextList;
