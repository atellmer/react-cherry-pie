/** @flow */
import { combineReducers } from 'redux';

import environment from './environment';
import layout from './layout';
import interlocutor from './interlocutor';


const rootReducer = combineReducers({
	environment,
	layout,
	interlocutor
});

export default rootReducer;
