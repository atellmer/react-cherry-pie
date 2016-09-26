import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import rootReducer from '../reducers/index';
import ReduxPromise from 'redux-promise';

export default function configureStore(initialState) {
	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(ReduxPromise),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}
