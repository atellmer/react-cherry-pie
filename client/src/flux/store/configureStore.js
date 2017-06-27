/** @flow */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import AuthSaga from '../sagas/auth';


const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(
      thunk,
      sagaMiddleware
    ),
    process.env.NODE_ENV !== 'production' ? devTools : f => f
  ));

  sagaMiddleware.run(AuthSaga);

  return store;
}
