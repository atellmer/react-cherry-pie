/** @flow */
import React from 'react';
import { Route, Redirect } from 'react-router';

import App from './containers/App';
import TmCanvasContainer from './containers/CanvasContainer';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <Route path='/dialogs/:id' component={TmCanvasContainer}/>
    </Route>
    <Redirect from='*' to='/'/>
  </div>
);
