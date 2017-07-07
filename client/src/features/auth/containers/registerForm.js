/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { signup as signupAction } from '@/features/auth';
import RegisterForm from '../components/registerFrom';

type Props = {
  signup: Function
}

class RegisterFormContainer extends Component <void, Props, *> {

  render() {
    const { signup } = this.props;

    return (
      <RegisterForm signup={signup}/>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return bindActionCreators({
    signup: signupAction
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(RegisterFormContainer);
