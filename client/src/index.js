/** @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import muiTheme from './config/theme';
import routes from './routes';
import './main.css';


injectTapEventPlugin();
const store = configureStore();
const mount = document.querySelector('#react-root');

render(
  <AppContainer>
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        {routes}
      </MuiThemeProvider>
    </Provider>
  </AppContainer>,
  mount
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default;

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
