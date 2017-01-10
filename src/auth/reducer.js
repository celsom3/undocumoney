import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  TOGGLE_AGREEMENT,
  SAVE_NEW_METADATA
} from './actions';

import { getStoredAuthData } from '../helpers/utils';

export const initialState = {
  isLoggingIn: false,
  idToken: null,
  profile: null,
  error: null
};

function initializeState() {
  const storedAuthData = getStoredAuthData();
  return Object.assign({}, initialState, storedAuthData);
}

export default function auth(state = initializeState(), action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        idToken: action.idToken,
        profile: action.profile,
        error: null
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        idToken: null,
        profile: null,
        error: action.error
      };

    case LOGOUT:
      return initialState;

    case TOGGLE_AGREEMENT:
      return {
        ...state,
        profile: {
          ...state.profile,
          user_metadata: {
            ...state.profile.user_metadata,
            agreedToTerms: !state.profile.user_metadata.agreedToTerms
          }
        }
      };

    case SAVE_NEW_METADATA:
      return {
        ...state,
        profile: {
          ...state.profile,
          user_metadata: action.user_metadata
        }
      };

    default:
      return state;
  }
}
