/** @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './flux/store/configureStore';
import muiTheme from './shared/config/theme';
import AppRouting from './routing';
import './styles.css';


injectTapEventPlugin();
const store = configureStore();
const mount = document.querySelector('#react-root');

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppRouting />
    </MuiThemeProvider>
  </Provider>,
  mount
);
