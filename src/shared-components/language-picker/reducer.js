import { SET_ENGLISH, SET_SPANISH } from './actions';

export const initialState = {
  current: 'en'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ENGLISH:
      localStorage.setItem('userLanguage', 'en');
      return Object.assign({}, state, {
        current: 'en'
      });

    case SET_SPANISH:
      localStorage.setItem('userLanguage', 'es');
      return Object.assign({}, state, {
        current: 'es'
      });

    default:
      return state;
  }

}
