import React, { Component } from 'react';

import {
  UserProfileContainer
} from '@/features/profile';
import { Root } from './styled';


class ProfileView extends Component {
  render() {
    return (
      <Root>
        User Profile:
        <UserProfileContainer />
      </Root>
    );
  }
}

export default ProfileView;
