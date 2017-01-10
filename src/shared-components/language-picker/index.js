import { combineReducers } from 'redux';

import * as actions from './actions';
import * as selectors from './selectors';
import LanguagePicker from './LanguagePicker';
import indexReducer from './reducer';
import uiEnglish from './uiEnglish';
import uiSpanish from './uiSpanish';

const reducer = combineReducers({
	ui: indexReducer,
	copy: combineReducers({
		en: uiEnglish,
		es: uiSpanish
	})
});

const components = {
	LanguagePicker
};

export { actions, reducer, components, selectors };
