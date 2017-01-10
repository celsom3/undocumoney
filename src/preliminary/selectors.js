export const getQuestions = (state) => state.i18n[state.nav.answering][state.i18n.ui.current];
export const getCurrentQuestion = (state) => state.nav.currentQuestion;
export const getPreliminaryAnswers = (state) => state.answers.preliminary;
