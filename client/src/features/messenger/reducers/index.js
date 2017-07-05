/** @flow */
import { combineReducers } from 'redux';

import layout from './layout';
import dialogs from './dialogs';


const messengerReducer = combineReducers({
  layout,
  dialogs
});

export default messengerReducer;
