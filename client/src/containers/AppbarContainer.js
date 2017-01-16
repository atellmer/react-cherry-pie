/** @flow */
// Core
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import { connect } from 'react-redux';

// Models
import type { IUser } from '../models/user';

// Components
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


export default connect(mapStateToProps)(pureRender(TmAppbarContainer));
