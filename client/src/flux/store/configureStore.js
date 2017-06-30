/** @flow */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';
import AuthSaga from '../effects/auth';
import { history } from '@/shell';


const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(
      routerMiddleware,
      sagaMiddleware,
      thunk
    ),
    process.env.NODE_ENV !== 'production' ? devTools : f => f
  ));

  sagaMiddleware.run(AuthSaga);

  return store;
}
