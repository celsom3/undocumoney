export const TOGGLE_DRAWER_ACTIVE = 'TOGGLE_DRAWER_ACTIVE';
export function toggleDrawerActive() {
	return {
		type: TOGGLE_DRAWER_ACTIVE
	};
}


export const SHOW_QUESTION_NAV = 'SHOW_QUESTION_NAV';
export function showQuestionNav() {
	return {
		type: SHOW_QUESTION_NAV
	};
}

export const HIDE_QUESTION_NAV = 'HIDE_QUESTION_NAV';
export function hideQuestionNav() {
	return {
		type: HIDE_QUESTION_NAV
	};
}

export const MAKE_SCROLLABLE = 'MAKE_SCROLLABLE';
export function makeScrollable() {
	return {
		type: MAKE_SCROLLABLE
	};
}

export const MAKE_NOT_SCROLLABLE = 'MAKE_NOT_SCROLLABLE';
export function makeNotScrollable() {
	return {
		type: MAKE_NOT_SCROLLABLE
	};
}

export const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
export const toggleDialog = () => {
	return {
		type: TOGGLE_DIALOG
	};
};

export const UPDATE_DIALOG = 'UPDATE_DIALOG';
export const updateDialog = (message) => {
	return {
		type: UPDATE_DIALOG,
		message
	};
};

export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const showSnackbar = (message) => {
	return {
		type: SHOW_SNACKBAR,
		message
	};
}

export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const closeSnackbar = () => {
	return {
		type: CLOSE_SNACKBAR
	};
}
