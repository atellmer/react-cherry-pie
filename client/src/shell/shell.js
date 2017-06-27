/** @flow */
import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pure, compose } from 'recompose';

import * as environmentActions from '@/flux/actions/environmentActions';
import * as userActions from '@/flux/actions/userActions';
import TmAppbarContainer from '@/features/header/containers/appbarContainer';
import TmLogin from '@/features/auth/login';
import TmRegister from '@/features/auth/register';
import TmHome from '@/features/home';
import TmMessenger from '@/features/messenger';
import * as s from './shell.css';


type Props = {
  detectDevice: Function,
  detectSizeWindow: Function,
  fetchUser: Function,
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  heightWindow: number,
  widthWindow: number
};

class AppShell extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

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
    const sharedProps = {
      isPhone: this.props.isPhone,
      isTablet: this.props.isTablet,
      isDesktop: this.props.isDesktop,
      heightWindow: this.props.heightWindow,
      widthWindow: this.props.widthWindow
    };

    return (
      <div className={s.root}>
        <div className={s.appbarLayout}>
          <TmAppbarContainer {...sharedProps}/>
        </div>
        <div className={s.contentLayout}>
          <Switch>
            <Route exact path='/' component={TmHome} />
            <Route exact path='/login' component={TmLogin} />
            <Route exact path='/register' component={TmRegister} />
            <Route
              path='/messenger'
              render={(props) => (
                <TmMessenger {...sharedProps} {...props}/>
              )}/>
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const { environment } = state;

  return {
    isPhone: environment.isPhone,
    isTablet: environment.isTablet,
    isDesktop: environment.isDesktop,
    widthWindow: environment.width,
    heightWindow: environment.height
  };
}

function mapDispatchToProps(dispatch: any) {
  const { detectDevice, detectSizeWindow } = environmentActions;
  const { fetchUser } = userActions;

  return {
    detectDevice: bindActionCreators(detectDevice, dispatch),
    detectSizeWindow: bindActionCreators(detectSizeWindow, dispatch),
    fetchUser: bindActionCreators(fetchUser, dispatch)
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), pure)(AppShell);
