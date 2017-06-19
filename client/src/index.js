/** @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppContainer } from 'react-hot-loader';

import configureStore from './flux/store/configureStore';
import muiTheme from './shared/config/theme';
import AppRouting from './routing';
import './styles.css';


injectTapEventPlugin();
const store = configureStore();
const mount = document.querySelector('#react-root');

render(
  <AppContainer>
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppRouting />
      </MuiThemeProvider>
    </Provider>
  </AppContainer>,
  mount
);

if (module.hot) {
  module.hot.accept('./routing', () => {
    const nextRoutes = require('./routing').default;

    render(
      <AppContainer>
        <Provider store={store}>
          <MuiThemeProvider muiTheme={muiTheme}>
            {nextRoutes}
          </MuiThemeProvider>
        </Provider>
      </AppContainer>,
      mount
    );
  });
}
