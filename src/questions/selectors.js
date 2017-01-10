export const getQuestions = (state) => state.i18n.questions[state.i18n.ui.current];
export const getCurrentQuestion = (state) => state.nav.currentQuestion;
export const getQuestionAnswers = (state) => state.answers.questions;
export const getQuestionQueue = (state) => state.nav['queue-questions'];
