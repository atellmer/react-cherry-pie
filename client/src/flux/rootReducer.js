/** @flow */
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { client } from '../apollo/client';
import { authReducer as auth } from '@/features/auth';
import { commonReducer as common } from '@/features/common';
import { messengerReducer as messenger } from '@/features/messenger';


const rootReducer = combineReducers({
  apollo: client.reducer(),
  router,
  auth,
  common,
  messenger
});

export default rootReducer;
