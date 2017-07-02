/** @flow */
import React from 'react';
import cn from 'classnames';

import * as s from './login.css';
import LoginFormContainer from '../../containers/loginForm';


function LoginView() {
  return (
    <div className={cn(s.root)}>
      Login page
      <LoginFormContainer />
    </div>
  );
}

export default LoginView;
