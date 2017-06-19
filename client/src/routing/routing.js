/** @flow */
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import AppShell from '../shell';


function AppRouting() {
  return (
    <Router>
      <Route path='/' component={AppShell} />
    </Router>
  );
}

export default AppRouting;
