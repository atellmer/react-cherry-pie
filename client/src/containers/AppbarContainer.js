/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TmAppbar from '../components/appbar';


class TmAppbarContainer extends Component {
  render() {
    return <TmAppbar/>;
  }
}


export default connect()(TmAppbarContainer);
