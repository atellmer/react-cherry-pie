/** @flow */
import { combineReducers } from 'redux';

import env from './env';
import user from './user';


const commonReducer = combineReducers({
  env,
  user
});

export default commonReducer;
