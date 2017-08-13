/** @flow */
import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { pure, compose } from 'recompose';

import {
  detectDevice,
  detectSizeWindow,
  fetchUser,
  AppbarContainer,
  PrivateRoute,
  lazyLoad
} from '@/features/common';
import {
  PROFILE_ROUTE,
  MESSENGER_ROUTE
} from '@/vars';
import {
  Root,
  AppbarLayout,
  ContentLayout
} from './styled';


type Props = {
  detectDevice: Function,
  detectSizeWindow: Function,
  fetchUser: Function,
  isLogged: boolean
};

const history = createBrowserHistory();

const HomeViewLazy = lazyLoad(() => import('../features/home'));
const LoginViewLazy = lazyLoad(() => import('../features/auth/layouts/login'));
const RegisterViewLazy = lazyLoad(() => import('../features/auth/layouts/register'));
const MessengerViewLazy = lazyLoad(() => import('../features/messenger/layouts/messenger'));
const ProfileViewLazy = lazyLoad(() => import('../features/profile/layouts/profile'));

class AppShell extends Component<void, Props, *> {
  componentWillMount() {
    this.props.detectDevice();
    this.props.detectSizeWindow();
    window.addEventListener('resize', () => this.props.detectSizeWindow());
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.props.detectSizeWindow());
  }

  render() {
    const { isLogged } = this.props;

    return (
      <ConnectedRouter
        history={history}>
        <Root>
          <AppbarLayout>
            <AppbarContainer />
          </AppbarLayout>
          <ContentLayout>
            <Switch>
              <Route
                exact
                path='/'
                component={HomeViewLazy} />
              <Route
                exact
                path='/signin'
                component={LoginViewLazy} />
              <Route
                exact
                path='/signup'
                component={RegisterViewLazy} />
              <PrivateRoute
                path={`/${PROFILE_ROUTE}`}
                component={ProfileViewLazy}
                isLogged={isLogged}
                redirectTo='/signin' />
              <PrivateRoute
                path={`/${MESSENGER_ROUTE}`}
                component={MessengerViewLazy}
                isLogged={isLogged}
                redirectTo='/signin'/>
              <Redirect to='/' />
            </Switch>
          </ContentLayout>
        </Root>
      </ConnectedRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    isLogged: !!auth.user
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return bindActionCreators({
    detectDevice,
    detectSizeWindow,
    fetchUser
  }, dispatch);
}

export {
  history
};

export default compose(
  pure,
  connect(mapStateToProps, mapDispatchToProps)
)(AppShell);
