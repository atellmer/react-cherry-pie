/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pure, compose } from 'recompose';

import type { IUser } from '@/shared/models/user';
import TmAppbar from '../components/appbar';


type Props = {
  me: IUser,
};

class TmAppbarContainer extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { me } = this.props;

    return <TmAppbar me={me}/>;
  }
}

function mapStateToProps(state: any) {
  const { user } = state;

  return {
    me: user.me
  };
}

export default compose(connect(mapStateToProps), pure)(TmAppbarContainer);
