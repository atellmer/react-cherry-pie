/** @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
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
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='*' component={App}/>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#react-root')
);
