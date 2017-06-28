/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '@/flux/actions/auth';
import TmRegisterForm from '../components/registerFrom';

type Props = {
  register: Function
}

class TmRegisterFormContainer extends Component {
  props: Props;

  render() {
    const { register } = this.props;

    return (
      <TmRegisterForm register={register}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const { register } = authActions;

  return {
    register: bindActionCreators(register, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(TmRegisterFormContainer);
