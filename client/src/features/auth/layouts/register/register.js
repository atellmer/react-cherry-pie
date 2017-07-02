/** @flow */
import React from 'react';
import cn from 'classnames';

import RegisterFormContainer from '../../containers/registerForm';
import * as s from './register.css';


function RegisterView() {
  return (
    <div className={cn(s.root)}>
      Register page
      <RegisterFormContainer />
    </div>
  );
}

export default RegisterView;
