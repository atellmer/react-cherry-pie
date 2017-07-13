import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';

import { UserProfile } from '@/features/profile';

type Props = {
  location: {
    search: string
  }
};

class UserProfileContainer extends Component<void, Props, *> {
  render() {
    const { location: { search: query } } = this.props;

    const userProfileProps = {
      query: parse(query)
    };

    return (
      <UserProfile {...userProfileProps}/>
    );
  }
}

export default compose(
  pure,
  withRouter
)(UserProfileContainer);
