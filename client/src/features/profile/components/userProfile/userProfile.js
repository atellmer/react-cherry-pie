import React, { Component } from 'react';

import {
  Root
} from './styled';

type Props = {
  query: any
}

class UserProfile extends Component <void, Props, *> {
  render() {
    return (
      <Root>
        user
      </Root>
    );
  }
}

export default UserProfile;
