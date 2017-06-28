/** @flow */
import React from 'react';

import * as s from './login.css';
import TmLoginFormContainer from '../../containers/loginFormContainer';


function TmLogin() {
  return (
    <div className={s.root}>
      Login page
      <TmLoginFormContainer />
    </div>
  );
}

export default TmLogin;
