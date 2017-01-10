import React, { Component, PropTypes } from 'react';
import { Navigation, Link } from 'react-toolbox';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setEnglish, setSpanish } from './actions';
import { geti18n, getLanguage } from './selectors';

class LanguagePicker extends Component {
  constructor(props){
    super(props);

  }

  setEnglish(event){
    event.preventDefault();
		this.props.setEnglish();
  }

  setSpanish(event){
    event.preventDefault();
		this.props.setSpanish();
  }


  render() {
		const { i18n, currentLanguage } = this.props;

    return (
      <Navigation type='vertical' >
        <Link href="#" onClick={this.setEnglish.bind(this)} active={currentLanguage === 'en'} >{i18n.english}</Link>
        <Link href="#" onClick={this.setSpanish.bind(this)} active={currentLanguage === 'es'} >{i18n.spanish}</Link>
      </Navigation>
    );
  }
}

LanguagePicker.propTypes = {
  currentLanguage: PropTypes.oneOf(['es', 'en']),
  i18n: PropTypes.object,
  setEnglish: PropTypes.func,
  setSpanish: PropTypes.func
};

function mapStateToProps(state) {
  return {
		i18n: geti18n(state),
		currentLanguage: getLanguage(state)
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setEnglish,
    setSpanish
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LanguagePicker);
