/** @flow */
import { combineReducers } from 'redux';

import layout from './layout';
import environment from './environment';


const rootReducer = combineReducers({
	environment,
	layout
});

export default rootReducer;
