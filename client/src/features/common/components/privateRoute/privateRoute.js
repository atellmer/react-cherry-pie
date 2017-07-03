import React from 'react';
import { Route, Redirect } from 'react-router-dom';


type Props = {
  component: any,
  canActivate: Function,
  redirectTo: boolean
}

function PrivateRoute({ component: Component, ...rest }: Props) {
  const { canActivate, redirectTo } = rest;

  return (
    <Route
      {...rest}
      render={routerProps => (
        canActivate() ? (
          <Component {...rest} {...routerProps}/>
        ) : (
          <Redirect to={{
            pathname: redirectTo,
            state: { from: routerProps.location }
          }}/>
        )
    )}/>
  );
}

export default PrivateRoute;
