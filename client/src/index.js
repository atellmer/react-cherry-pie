/** @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './reset.css';
import './styles';
import configureStore from './flux/store/configureStore';
import muiTheme from './shared/config/theme';
import AppShell from './shell';


injectTapEventPlugin();
const store = configureStore();

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppShell />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#react-root')
);
