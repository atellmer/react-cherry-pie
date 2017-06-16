/** @flow */
import React from 'react';
import {
  Router,
  browserHistory,
  Route,
  Redirect
} from 'react-router';

import App from './App';
import TmCanvasContainer from './features/messenger/containers/canvasContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/dialogs/:id' component={TmCanvasContainer} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
);

export default routes;
