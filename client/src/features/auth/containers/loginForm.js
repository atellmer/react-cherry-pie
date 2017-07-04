/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '../actions/auth';
import LoginForm from '../components/loginForm';

type Props = {
  authorize: Function
}

class LoginFormContainer extends Component<void, Props, *> {

  render() {
    const { authorize } = this.props;

    return (
      <LoginForm authorize={authorize}/>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  const { authorize } = authActions;

  return {
    authorize: bindActionCreators(authorize, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginFormContainer);
