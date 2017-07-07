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
  signout: Function
};

class AppbarContainer extends Component<void, Props, *> {

  render() {
    const { me, signout } = this.props;

    return <Appbar me={me} signout={signout}/>;
  }
}

function mapStateToProps({ common }) {
  const { user: { me } } = common;

  return {
    me
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
