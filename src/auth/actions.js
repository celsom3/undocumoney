export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(profile, idToken) {
  return {
    type: LOGIN_SUCCESS,
    profile,
    idToken
  };
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

export const LOGOUT = 'LOGOUT';
export function logout() {
  return {
    type: LOGOUT
  };
}

export const TOGGLE_AGREEMENT = 'TOGGLE_AGREEMENT';
export function toggleAgreement() {
  return {
    type: TOGGLE_AGREEMENT
  };
}

export const SAVE_NEW_METADATA = 'SAVE_NEW_METADATA';
export const saveNewMetadata = (user_metadata) => {
	const localProfileToSave = {
		...JSON.parse(localStorage.getItem('profile')),
		user_metadata
	};
	localStorage.setItem('profile', JSON.stringify(localProfileToSave));

	return {
    type: SAVE_NEW_METADATA,
    user_metadata
  };
};
