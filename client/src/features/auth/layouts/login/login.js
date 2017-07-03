/** @flow */
import React from 'react';

import LoginFormContainer from '../../containers/loginForm';
import { Root } from './styled';


function LoginView() {
  return (
    <Root>
      Login page
      <LoginFormContainer />
    </Root>
  );
}

export default LoginView;
