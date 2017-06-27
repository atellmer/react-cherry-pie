/** @flow */
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';

import AppShell from '../shell';


export const history = createBrowserHistory();

function AppRouting() {
  return (
    <Router history={history}>
      <Route path='/' component={AppShell} />
    </Router>
  );
}

export default AppRouting;
