/** @flow */
import { combineReducers } from 'redux';

import environment from './environment';
import layout from './layout';
import interlocutor from './interlocutor';
import user from './user';
import auth from './auth';


const rootReducer = combineReducers({
  environment,
  layout,
  interlocutor,
  user,
  auth
});

export default rootReducer;
