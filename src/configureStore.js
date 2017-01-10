import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import recycleState from 'redux-recycle';

import { reducer as appReducer } from './app';
import { reducer as authReducer, actions as authActions } from './auth';
import { reducer as langReducer } from './shared-components/language-picker';


import rootSaga from './rootSaga';

const reducer = combineReducers(
  {
    auth: authReducer,
    app: recycleState(appReducer, [authActions.LOGOUT], appReducer.initialState),
    routing: routerReducer,
    i18n: langReducer,

  }
);

export default function configureStore(browserHistory, initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(browserHistory)];


  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middlewares.push(logger);
  }


  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));

  sagaMiddleware.run(rootSaga);
  return store;
}
