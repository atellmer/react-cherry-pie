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
  PrivateRoute
} from '@/features/common';
import {
  LoginView,
  RegisterView
} from '@/features/auth';
import HomeView from '@/features/home';
import { MessengerView } from '@/features/messenger';
import { MESSENGER_ROUTE } from '@/vars';
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
                component={HomeView} />
              <Route
                exact
                path='/signin'
                component={LoginView} />
              <Route
                exact
                path='/signup'
                component={RegisterView} />
              <PrivateRoute
                path={`/${MESSENGER_ROUTE}`}
                component={MessengerView}
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
