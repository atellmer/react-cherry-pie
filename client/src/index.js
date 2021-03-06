/** @flow */
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './reset.css';
import './styles';
import configureStore from './flux/configureStore';
import injectValidators from './shared/injectValidators';
import { client } from './apollo/client';
import muiTheme from './shared/config/theme';
import AppShell from './shell';
import registerServiceWorker from './registerServiceWorker';


injectTapEventPlugin();
injectValidators();

const localState = JSON.parse(String(localStorage.getItem('APP_STATE')));
const store = configureStore(localState || {});

render(
  <ApolloProvider store={store} client={client}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppShell />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.querySelector('#react-root')
);
registerServiceWorker();
