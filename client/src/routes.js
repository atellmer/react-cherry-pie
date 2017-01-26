/** @flow */
import React from 'react';
import {
  Router,
  browserHistory,
  Route,
  Redirect
} from 'react-router';

import App from './containers/App';
import TmCanvasContainer from './containers/CanvasContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/dialogs/:id' component={TmCanvasContainer}/>
    </Route>
    <Redirect from='*' to='/'/>
  </Router>
);

export default routes;
