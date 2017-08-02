import React from 'react';
import { Link } from 'react-router-dom';

import {
  Root
} from './styled';


type Props = {
  match: any
};

const MyProfile = ({ match }: Props) => {
  return (
    <Root>
      <div>User</div>
      <Link to={`${match.url}/settings`}>Change profile</Link>
    </Root>
  );
};

export default MyProfile;
