/** @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store/configureStore';
import muiTheme from './config/theme';
import { routes } from './routes';
import './main.css';


injectTapEventPlugin();
const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#react-root')
);
