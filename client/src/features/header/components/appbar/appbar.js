/** @flow */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { pure } from 'recompose';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';

import type { IUser } from '@/shared/models/user';
import {
  Root,
  ArrowBackLayout,
  ControlsLayout,
  AvatarLayout,
  IconButtonLayout
} from './styled';


const BACK_ROUTE = '/messenger';

type Props = {
  me: IUser
};

class Appbar extends Component {
  props: Props;

  render() {
    const avatar = this.props.me.avatar.thumbnail;

    return (
      <Root>
        <ArrowBackLayout>
          <Link to={BACK_ROUTE}>
            <IconButton>
              <ArrowBackIcon color={'#fff'}/>
            </IconButton>
          </Link>
        </ArrowBackLayout>
        <ControlsLayout>
          <AvatarLayout>
            <Avatar
              src={avatar}
              size={34}
              backgroundColor={'transparent'}/>
          </AvatarLayout>
          <IconButtonLayout>
            <IconButton>
              <MoreVertIcon color={'#fff'}/>
            </IconButton>
          </IconButtonLayout>
        </ControlsLayout>
      </Root>
    );
  }
}

export default pure(Appbar);
