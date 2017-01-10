export const getLanguage = (state) => state.i18n.ui.current;
export const geti18n = (state) => state.i18n.copy[state.i18n.ui.current];
