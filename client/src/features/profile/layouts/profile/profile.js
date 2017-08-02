import React from 'react';
import { pure } from 'recompose';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import MyProfile from '../../containers/myProfile';
import OtherProfile from '../../components/otherProfile';
import Settings from '../../components/settings';
import { Root } from './styled';
import { SETTINGS_ROUTE } from '@/constants';


type Props = {
  match: any
};

const ProfileView = ({ match }: Props) => {
  return (
    <Root>
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={MyProfile} />
        <Route
          exact
          path={`${match.url}/${SETTINGS_ROUTE}`}
          component={Settings} />
        <Route
          exact
          path={`${match.url}/:id`}
          component={OtherProfile} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </Root>
  );
};

export { ProfileView };
export default pure(ProfileView);
