import Appbar from './components/appbar';
import AppbarContainer from './containers/appbar';
import AppbarMenu from './components/appbarMenu';
import PrivateRoute from './components/privateRoute';
import { detectDevice, detectSizeWindow } from './actions/env';
import { fetchUser } from './actions/user';
import withPlatform from './hocs/withPlatform';
import commonReducer from './reducers';
import type { UserType } from './types';

export {
  Appbar,
  AppbarContainer,
  AppbarMenu,
  PrivateRoute,
  detectDevice,
  detectSizeWindow,
  fetchUser,
  withPlatform,
  commonReducer
};

export type {
  UserType
};
