/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '@/flux/actions/auth';
import RegisterForm from '../components/registerFrom';

type Props = {
  register: Function
}

class RegisterFormContainer extends Component {
  props: Props;

  render() {
    const { register } = this.props;

    return (
      <RegisterForm register={register}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const { register } = authActions;

  return {
    register: bindActionCreators(register, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(RegisterFormContainer);
