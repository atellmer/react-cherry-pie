/** @flow */
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import AppShell from '../shell';


export const history = createBrowserHistory();

function AppRouting() {
  return (
    <ConnectedRouter history={history}>
      <Route path='/' component={AppShell} />
    </ConnectedRouter>
  );
}

export default AppRouting;
