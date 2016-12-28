/** @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store/configureStore';
import muiTheme from './config/theme';
import './main.css';
import App from './containers/App';

injectTapEventPlugin();

const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#react-root')
);
