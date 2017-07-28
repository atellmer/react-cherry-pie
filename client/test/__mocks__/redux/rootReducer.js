/** @flow */
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import authReducer from '../../../src/features/auth/reducers/auth';
import commonReducer from '../../../src/features/common/reducers';
import messengerReducer from '../../../src/features/messenger/reducers';


const rootReducer = combineReducers({
  router,
  auth: authReducer,
  common: commonReducer,
  messenger: messengerReducer
});

export default rootReducer;
