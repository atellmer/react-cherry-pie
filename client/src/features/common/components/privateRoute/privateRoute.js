import React from 'react';
import { Route, Redirect } from 'react-router-dom';


type Props = {
  component: any,
  isLogged: boolean,
  redirectTo: boolean
}

function PrivateRoute({ component: Child, ...rest }: Props) {
  const { isLogged, redirectTo } = rest;

  return (
    <Route
      {...rest}
      render={routerProps => (
        isLogged ? (
          <Child {...rest}/>
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
