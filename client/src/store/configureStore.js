/** @flow */
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

export default function configureStore(initialState: any) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV !== 'production' ? devTools : f => f
  ));

  return store;
}
