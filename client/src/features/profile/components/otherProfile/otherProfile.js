import React from 'react';

import {
  Root
} from './styled';


type Props = {
  match: any
};

const OtherProfile = ({ match }: Props) => {
  return (
    <Root>
      <div>Another user's profile: {match.params.id}</div>
    </Root>
  );
};

export default OtherProfile;
