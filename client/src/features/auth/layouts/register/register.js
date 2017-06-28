/** @flow */
import React from 'react';

import TmRegisterFormContainer from '../../containers/registerFormContainer';
import * as s from './register.css';


function TmRegister() {
  return (
    <div className={s.root}>
      Register page
      <TmRegisterFormContainer />
    </div>
  );
}

export default TmRegister;
