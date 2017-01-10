export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateUserMetadata_local = (field, entry) => {
  return {
    type: UPDATE_PROFILE,
    payload: {
      field,
      entry
    }
  };
};

export const START_EDITING = 'START_EDITING';
export const startEditing = (profile) => {
  return {
    type: START_EDITING,
    profile
  };
};

export const STOP_EDITING = 'STOP_EDITING';
export const stopEditing = (profile) => {
  // const profileToSave = {
  //   first_name: profile.first_name,
  //   last_name: profile.last_name,
  //   phone: profile.phone,
  //   zip: profile.zip,
  //   where_heard: profile.where_heard,
  //   initialCheck: true
  // };
  // localStorage.setItem('profiletosave', JSON.stringify(profileToSave));
  return {
    type: STOP_EDITING
  };
};

export const SET_SAVED = 'SET_SAVED';
export const setSaved = () => {
  return {
    type: SET_SAVED
  };
};

export const PASS_INITIAL_CHECK = 'PASS_INITIAL_CHECK';
export const passInitialCheck = () => {
  return {
    type: PASS_INITIAL_CHECK
  };
};

export const SAVE_METADATA_TO_REMOTE = 'SAVE_METADATA_TO_REMOTE';
export const updateUserMetadata_remote = (user_metadata) => {
  return {
    type: SAVE_METADATA_TO_REMOTE,
    user_metadata
  };
};
