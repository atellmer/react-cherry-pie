/** @flow */
import { combineReducers } from 'redux';

import layout from './layout';
import dialogs from './dialogs';


const messenger = combineReducers({
  layout,
  dialogs
});

export default messenger;
