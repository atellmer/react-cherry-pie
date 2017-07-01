/** @flow */
import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pure, compose } from 'recompose';
import cn from 'classnames';

import * as environmentActions from '@/flux/actions/environmentActions';
import * as userActions from '@/flux/actions/userActions';
import PrivateRoute from '@/features/auth/components/privateRoute';
import AppbarContainer from '@/features/header';
import LoginPage from '@/features/auth/layouts/login';
import RegisterPage from '@/features/auth/layouts/register';
import HomePage from '@/features/home';
import MessengerPage from '@/features/messenger';
import checkRoute from '@/features/auth/services/checkRoute';
import * as s from './shell.css';


type Props = {
  detectDevice: Function,
  detectSizeWindow: Function,
  fetchUser: Function
};

export const history = createBrowserHistory();

class AppShell extends Component {
  props: Props;

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
        <div className={cn(s.root)}>
          <div className={cn(s.appbarLayout)}>
            <AppbarContainer />
          </div>
          <div className={cn(s.contentLayout)}>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/register' component={RegisterPage} />
              <PrivateRoute
                path='/messenger'
                component={MessengerPage}
                canActivate={checkRoute}
                redirectTo='/login'/>
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const { detectDevice, detectSizeWindow } = environmentActions;
  const { fetchUser } = userActions;

  return bindActionCreators({
    detectDevice,
    detectSizeWindow,
    fetchUser
  }, dispatch);
}

export default compose(
  pure,
  connect(null, mapDispatchToProps)
)(AppShell);
