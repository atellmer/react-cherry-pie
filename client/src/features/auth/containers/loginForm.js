/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { signin as signinAction } from '@/features/auth';
import LoginForm from '../components/loginForm';

type Props = {
  signin: Function
}

class LoginFormContainer extends Component<void, Props, *> {

  render() {
    const { signin } = this.props;

    return (
      <LoginForm signin={signin}/>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return bindActionCreators({
    signin: signinAction
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginFormContainer);
