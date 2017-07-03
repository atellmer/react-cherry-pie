/** @flow */
import { combineReducers } from 'redux';

import env from './env';
import user from './user';


const common = combineReducers({
  env,
  user
});

export default common;
