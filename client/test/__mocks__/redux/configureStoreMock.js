/** @flow */
import { createStore, applyMiddleware } from 'redux';
import type { Store } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { history } from '../../../src/shell';
import AuthSaga from '../../../src/features/auth/effects/auth';


function configureStore(initialState: any): Store<*, *> {
  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = applyMiddleware(
    routerMiddleware,
    sagaMiddleware,
    thunk
  );
  const store = createStore(rootReducer, initialState, enhancers);

  sagaMiddleware.run(AuthSaga);

  return store;
}

export default configureStore;
