/** @flow */
import React from 'react';
import { Link } from 'react-router-dom';

import { Root } from './styled';
import { MESSENGER_ROUTE } from '@/vars';


function HomeView() {
  return (
    <Root>
      <Link to={`/${MESSENGER_ROUTE}`}>Messenger</Link>
      <br/>
      <Link to='/login'>Login</Link>
      <br/>
      <Link to='/register'>Register</Link>
    </Root>
  );
}

export default HomeView;
