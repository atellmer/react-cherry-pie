/** @flow */
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { authReducer as auth } from '@/features/auth';
import common from '@/features/common/reducers';
import messenger from '@/features/messenger/reducers';


const rootReducer = combineReducers({
  router,
  auth,
  common,
  messenger
});

export default rootReducer;
