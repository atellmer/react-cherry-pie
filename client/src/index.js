import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store/configureStore';

import App from './containers/App';

injectTapEventPlugin();

const store = configureStore();
const root = document.querySelector('#root');

render(
	<Provider store={store}>
		<MuiThemeProvider>
			<App/>
		</MuiThemeProvider>
	</Provider>,
	root
);
