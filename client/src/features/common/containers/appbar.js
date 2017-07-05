/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pure, compose } from 'recompose';

import type { UserType } from '@/features/common';
import { Appbar } from '@/features/common';


type Props = {
  me: UserType,
};

class AppbarContainer extends Component<void, Props, *> {

  render() {
    const { me } = this.props;

    return <Appbar me={me}/>;
  }
}

function mapStateToProps({ common }) {
  const { user: { me } } = common;

  return {
    me
  };
}

export default compose(
  pure,
  connect(mapStateToProps),
)(AppbarContainer);
