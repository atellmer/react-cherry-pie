/** @flow */
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import environment from './environment';
import layout from './layout';
import user from './user';
import auth from './auth';


const rootReducer = combineReducers({
  router,
  environment,
  layout,
  user,
  auth
});

export default rootReducer;
