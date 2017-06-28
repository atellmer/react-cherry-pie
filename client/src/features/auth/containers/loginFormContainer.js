/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '@/flux/actions/auth';
import TmLoginForm from '../components/loginForm';

type Props = {
  authorize: Function
}

class TmLoginFormContainer extends Component {
  props: Props;

  render() {
    const { authorize } = this.props;

    return (
      <TmLoginForm authorize={authorize}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  const { authorize } = authActions;

  return {
    authorize: bindActionCreators(authorize, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(TmLoginFormContainer);
