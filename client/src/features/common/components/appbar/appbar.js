/** @flow */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { pure } from 'recompose';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';

import type { UserType } from '@/features/common';
import { AppbarMenu } from '@/features/common';
import { Logo } from '@/features/ui';
import {
  PROFILE_ROUTE,
  MESSENGER_ROUTE
} from '@/vars';
import {
  Root,
  ArrowBackLayout,
  LogoLayout,
  ControlsLayout,
  AvatarLayout,
  IconButtonLayout
} from './styled';


const BACK_ROUTE = `/${MESSENGER_ROUTE}`;

type Props = {
  me: UserType,
  user: any,
  signout: Function
};

class Appbar extends Component <void, Props, *> {
  renderBackBtn = () => {
    const { user } = this.props;

    if (user) {
      return (
        <ArrowBackLayout>
          <Link to={BACK_ROUTE}>
            <IconButton>
              <ArrowBackIcon color={'#fff'}/>
            </IconButton>
          </Link>
        </ArrowBackLayout>
      );
    }
  }

  renderControls = () => {
    const avatar = this.props.me.avatar.thumbnail;
    const { signout, user } = this.props;
    const propsForMenu = {
      signout
    };

    if (user) {
      return (
        <ControlsLayout>
          <AvatarLayout>
            <Link to={`/${PROFILE_ROUTE}`}>
              <Avatar
                src={avatar}
                size={34}
                backgroundColor={'transparent'}/>
            </Link>
          </AvatarLayout>
          <IconButtonLayout>
            <AppbarMenu {...propsForMenu}/>
          </IconButtonLayout>
        </ControlsLayout>
      );
    }

    return null;
  }

  render() {
    return (
      <Root>
        {this.renderBackBtn()}
        <LogoLayout>
          <Logo />
        </LogoLayout>
        {this.renderControls()}
      </Root>
    );
  }
}

export default pure(Appbar);
