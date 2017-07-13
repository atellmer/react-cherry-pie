/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { pure, compose } from 'recompose';

import type { UserType } from '@/features/common';
import { Appbar } from '@/features/common';
import { signout as signoutAction } from '@/features/auth';


type Props = {
  me: UserType,
  user: any,
  signout: Function
};

class AppbarContainer extends Component<void, Props, *> {

  render() {
    const { me, user, signout } = this.props;
    const propsForAppbar = {
      me,
      user,
      signout
    };

    return <Appbar {...propsForAppbar}/>;
  }
}

function mapStateToProps({ common, auth }) {
  const { user: { me } } = common;
  const { user } = auth;

  return {
    me,
    user
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return bindActionCreators({
    signout: signoutAction
  }, dispatch);
}

export default compose(
  pure,
  connect(mapStateToProps, mapDispatchToProps),
)(AppbarContainer);
