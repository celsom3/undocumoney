import { UPDATE_PROFILE, START_EDITING, STOP_EDITING, SET_SAVED, PASS_INITIAL_CHECK } from './actions';
import { TOGGLE_AGREED_TO_TERMS } from '../terms/actions';

let initialState = {
    first_name: '',
    last_name: '',
    phone: '',
    // email: '',
    zip: '',
    where_heard: '',
    isEditing: false,
    // isSaving: false,
    // isSaved: false,
    initialCheck: false,
		agreedToTerms: false
};

const localStorage_profile = localStorage.getItem('profile');
if(localStorage_profile){
  initialState = {
    ...localStorage_profile.user_metadata
  };
}

export default function(state = initialState, action = {}) {

    switch (action.type) {
        case UPDATE_PROFILE:
						const newState = {
                ...state,
                [action.payload.field]: action.payload.entry
            };
						const local_user_metadata = JSON.stringify(newState);
						localStorage.setItem('user_metadata', local_user_metadata);
            return newState;

        case START_EDITING:
            let first_name = '';
            let last_name = '';
            let phone = '';
            let zip = '';

            if (action.profile.user_metadata) {
                if (action.profile.user_metadata.first_name) {
                    first_name = action.profile.user_metadata.first_name;
                }

                if (action.profile.user_metadata.last_name) {
                    last_name = action.profile.user_metadata.last_name;
                }

                if (action.profile.user_metadata.phone) {
                    phone = action.profile.user_metadata.phone;
                }

                if (action.profile.user_metadata.zip) {
                    zip = action.profile.user_metadata.zip;
                }
            }

            return {
                ...state,
                isEditing: true,
                isSaving: false,
                isSaved: false,
                first_name,
                last_name,
                phone,
                email: action.profile.email,
                zip
            };

        case STOP_EDITING:
            return {
                ...state,
                isEditing: false,
                isSaving: true,
                isSaved: false,
                initialCheck: true
            };

        case SET_SAVED:
            return {
                ...state,
                isSaved: true,
                isSaving: false
            };

        case PASS_INITIAL_CHECK:
            return {
                ...state,
                initialCheck: true
            };

				case TOGGLE_AGREED_TO_TERMS:
					return {
						...state,
						agreedToTerms: !state.agreedToTerms
					};

        default:
            return state;
    }

}
