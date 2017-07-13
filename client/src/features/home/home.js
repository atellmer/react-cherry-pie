/** @flow */
import React from 'react';
import { Link } from 'react-router-dom';

import { Root } from './styled';
import {
  PROFILE_ROUTE,
  MESSENGER_ROUTE
} from '@/vars';


function HomeView() {
  return (
    <Root>
      <Link to={`/${PROFILE_ROUTE}`}>Profile</Link>
      <br/>
      <Link to={`/${MESSENGER_ROUTE}`}>Messenger</Link>
      <br/>
      <Link to='/signin'>Login</Link>
      <br/>
      <Link to='/signup'>Register</Link>
    </Root>
  );
}

export default HomeView;
