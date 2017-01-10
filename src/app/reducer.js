import {
	TOGGLE_DRAWER_ACTIVE,
	SHOW_QUESTION_NAV,
	HIDE_QUESTION_NAV,
  SHOW_SNACKBAR,
  CLOSE_SNACKBAR,
	MAKE_SCROLLABLE,
	MAKE_NOT_SCROLLABLE,
	TOGGLE_DIALOG,
	UPDATE_DIALOG
} from './actions';

// Note that sidebarPinned isn't really used. This is for an unused feature:
// a sidebar on the left side of the app. Keeping it here to remind me in case
// the need for it arises in the future.

export const initialState = {
	drawerActive: false,
	sidebarPinned: false,
	questionNavVisible: false,
	scrollable: false,
	dialogActive: false,
	snackbarActive: false,
  snackbarMessage: '',
  snackbarSuccess: false,
	dialogMessage: '',
	dialogTitle: ''
};


export default function app(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_DRAWER_ACTIVE:
			return {
				...state,
				drawerActive: !state.drawerActive
			};

		case SHOW_QUESTION_NAV:
			return {
				... state,
				questionNavVisible: true
			};

		case HIDE_QUESTION_NAV:
			return {
				...state,
				questionNavVisible: false
			};

		case MAKE_SCROLLABLE:
			return {
				...state,
				scrollable: true
			};


		case MAKE_NOT_SCROLLABLE:
			return {
				...state,
				scrollable: false
			};


		case TOGGLE_DIALOG:
			return {
				...state,
				dialogActive: !state.dialogActive
			};


		case UPDATE_DIALOG:
			return {
				...state,
				dialogTitle: action.message.title,
				dialogMessage: action.message.message
			};

    case SHOW_SNACKBAR:
      return {
        ...state,
        snackbarMessage: action.message,
        snackbarActive: true
      };

    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarActive: false,
        snackbarMessage: ''
      };

		default:
			return state;
	}
}
