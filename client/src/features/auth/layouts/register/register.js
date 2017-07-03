/** @flow */
import React from 'react';

import RegisterFormContainer from '../../containers/registerForm';
import { Root } from './styled';


function RegisterView() {
  return (
    <Root>
      Register page
      <RegisterFormContainer />
    </Root>
  );
}

export default RegisterView;
