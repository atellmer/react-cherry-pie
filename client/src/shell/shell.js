/** @flow */
import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { pure, compose } from 'recompose';

import * as envActions from '@/features/common/actions/env';
import * as userActions from '@/features/common/actions/user';
import { AppbarContainer, PrivateRoute } from '@/features/common';
import {
  LoginView,
  RegisterView,
  checkRoute
} from '@/features/auth';
import HomeView from '@/features/home';
import MessengerView from '@/features/messenger';
import {
  Root,
  AppbarLayout,
  ContentLayout
} from './styled';


type Props = {
  detectDevice: Function,
  detectSizeWindow: Function,
  fetchUser: Function
};

const history = createBrowserHistory();

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
    return (
      <ConnectedRouter history={history}>
        <Root>
          <AppbarLayout>
            <AppbarContainer />
          </AppbarLayout>
          <ContentLayout>
            <Switch>
              <Route exact path='/' component={HomeView} />
              <Route exact path='/login' component={LoginView} />
              <Route exact path='/register' component={RegisterView} />
              <PrivateRoute
                path='/messenger'
                component={MessengerView}
                canActivate={checkRoute}
                redirectTo='/login'/>
              <Redirect to='/' />
            </Switch>
          </ContentLayout>
        </Root>
      </ConnectedRouter>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  const { detectDevice, detectSizeWindow } = envActions;
  const { fetchUser } = userActions;

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
  connect(null, mapDispatchToProps)
)(AppShell);
