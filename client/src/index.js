/** @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './reset.css';
import './styles';
import configureStore from './flux/configureStore';
import muiTheme from './shared/config/theme';
import AppShell from './shell';


injectTapEventPlugin();

render(
  <Provider store={configureStore()}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppShell />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#react-root')
);
