/** @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleRoot } from 'radium';

import configureStore from './store/configureStore';
import muiTheme from './config/theme';
import App from './containers/App';

injectTapEventPlugin();

const store = configureStore();
const root = document.querySelector('#react-root');

render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<StyleRoot>
				<App/>
			</StyleRoot>
		</MuiThemeProvider>
	</Provider>,
	root
);
