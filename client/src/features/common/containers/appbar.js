/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pure, compose } from 'recompose';

import type { IUser } from '@/shared/models/user';
import Appbar from '../components/appbar';


type Props = {
  me: IUser,
};

class AppbarContainer extends Component {
  props: Props;

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
