import React from 'react';
import { Route, Redirect } from 'react-router-dom';


type Props = {
  component: any,
  isLogged: boolean,
  redirectTo: boolean
}

function PrivateRoute({ component: Child, redirectTo, computedMatch, ...rest }: Props) {
  const { isLogged } = rest;

  return (
    <Route
      {...rest}
      render={routerProps => (
        isLogged ? (
          <Child
            {...rest}
            match={computedMatch} />
        ) : (
          <Redirect to={{
            pathname: redirectTo,
            state: { from: routerProps.location }
          }} />
        )
    )}/>
  );
}

export default PrivateRoute;
