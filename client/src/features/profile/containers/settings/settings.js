import React from 'react';
import {
  graphql,
  gql
} from 'react-apollo';
import { connect } from 'react-redux';
import { pure, compose } from 'recompose';

import XSettings from '../../components/settings';
import type { UserInfo } from '../../types';


type Props = {
  mutate: any,
  userId: string
};

const Settings = (props: Props) => {
  const {
    mutate,
    userId
  } = props;

  const handleSubmit = (data: UserInfo) => {
    const {
      avatar,
      firstName,
      lastName,
      nickName
    } = data;

    mutate({
      variables: {
        userId,
        avatar: avatar[0],
        firstName,
        lastName,
        nickName
      }
    });
  };

  return (
    <XSettings
      handleSubmit={handleSubmit} />
  );
};

Settings.displayName = 'SettingsContainer';

function mapStateToProps({ auth }: any) {
  const { user: { _id } } = auth;

  return {
    userId: _id
  };
}

const updateUserInfoMutation = gql`
  mutation updateUserInfo(
    $userId: String!,
    $avatar: Upload,
    $firstName: String,
    $lastName: String,
    $nickName: String
  ) {
    updateUserInfo(
      userId: $userId,
      avatar: $avatar,
      firstName: $firstName,
      lastName: $lastName,
      nickName: $nickName
    )
  }`;

const withMutation = graphql(updateUserInfoMutation);

export default compose(
  pure,
  connect(mapStateToProps),
  withMutation
)(Settings);
