/** @flow */
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '@/flux/actions/authActions';
import TmLoginForm from '../components/form';

type Props = {
  login: Function
}

class TmLoginFormContainer extends Component {
  props: Props;

  render() {
    const { login } = this.props;

    return (
      <TmLoginForm login={login}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const { login } = authActions;

  return {
    login: bindActionCreators(login, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(TmLoginFormContainer);
