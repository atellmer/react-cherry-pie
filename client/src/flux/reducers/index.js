/** @flow */
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import env from './env';
import layout from './layout';
import user from './user';
import auth from './auth';


const rootReducer = combineReducers({
  router,
  env,
  layout,
  user,
  auth
});

export default rootReducer;
