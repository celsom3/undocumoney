export const getProfile = (state) => state.auth.profile;
export const getInitialCheck = (state) => {
    if (state.auth.profile.user_metadata && state.auth.profile.user_metadata.initialCheck){
        return state.auth.profile.user_metadata.initialCheck;
    }
    else {
        return false;
    }
};
