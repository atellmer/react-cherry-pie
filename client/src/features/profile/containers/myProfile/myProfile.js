import React from 'react';

import XMyProfile from '../../components/myProfile';


type Props = {
  match: any
};

const MyProfile = ({ match }: Props) => {
  return (
    <XMyProfile
      match={match} />
  );
};

export default MyProfile;
