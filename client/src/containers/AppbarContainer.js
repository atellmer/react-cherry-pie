/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TmAppbar from '../components/appbar';
import type { IUser } from '../models/user';


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


export default connect(mapStateToProps)(TmAppbarContainer);
