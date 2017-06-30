/** @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import * as s from './home.css';


function HomePage() {
  return (
    <div className={cn(s.root)}>
      <Link to='/messenger'>Messenger</Link>
      <br/>
      <Link to='/login'>Login</Link>
      <br/>
      <Link to='/register'>Register</Link>
    </div>
  );
}

export default HomePage;
