/** @flow */
import React from 'react';
import {
  Link
} from 'react-router-dom';

import * as s from './home.css';


function TmHome() {
  return (
    <div className={s.root}>
      <Link to='/messenger'>Messenger</Link>
      <br/>
      <Link to='/login'>Login</Link>
      <br/>
      <Link to='/register'>Register</Link>
    </div>
  );
}

export default TmHome;
