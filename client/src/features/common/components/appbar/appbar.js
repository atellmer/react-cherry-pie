/** @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import { pure } from 'recompose';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';

import AppbarMenu from '../appbarMenu';
import {
  Logo
} from '@/features/ui';
import {
  PROFILE_ROUTE,
  MESSENGER_ROUTE
} from '@/vars';
import type {
  UserType
} from '@/features/common';
import {
  Root,
  ArrowBackLayout,
  LogoLayout,
  ControlsLayout,
  AvatarLayout,
  IconButtonLayout
} from './styled';


type Props = {
  me: UserType,
  user: any,
  signout: Function
};

const Appbar = (props: Props) => {
  const renderBackBtn = () => {
    const {
      user
    } = props;

    if (user) {
      return (
        <ArrowBackLayout>
          <Link
            to={`/${MESSENGER_ROUTE}`}>
            <IconButton>
              <ArrowBackIcon
                color={'#fff'} />
            </IconButton>
          </Link>
        </ArrowBackLayout>
      );
    }

    return null;
  };

  const renderControls = () => {
    const {
      me: { avatar: { thumbnail: avatar } },
      user,
      signout
    } = props;

    if (user) {
      return (
        <ControlsLayout>
          <AvatarLayout>
            <Link
              to={`/${PROFILE_ROUTE}`}>
              <Avatar
                src={avatar}
                size={34}
                backgroundColor={'transparent'} />
            </Link>
          </AvatarLayout>
          <IconButtonLayout>
            <AppbarMenu
              signout={signout} />
          </IconButtonLayout>
        </ControlsLayout>
      );
    }

    return null;
  };


  return (
    <Root>
      {renderBackBtn()}
      <LogoLayout>
        <Logo />
      </LogoLayout>
      {renderControls()}
    </Root>
  );
};

export { Appbar };
export default pure(Appbar);
