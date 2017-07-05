/** @flow */
import { createStore, applyMiddleware, compose } from 'redux';
import type { Store } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import { client } from '../apollo/client';
import rootReducer from './rootReducer';
import { history } from '@/shell';
import AuthSaga from '@/features/auth/effects/auth';


function configureStore(initialState: any): Store<*, *> {
  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
  const enhancers = compose(
    applyMiddleware(
      client.middleware(),
      routerMiddleware,
      sagaMiddleware,
      thunk
    ),
    process.env.NODE_ENV !== 'production' ? devTools : f => f
  );
  const store = createStore(rootReducer, initialState, enhancers);

  sagaMiddleware.run(AuthSaga);

  return store;
}

export default configureStore;
