/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import css from './appbar.css';
import TmLogo from '../logo';
import type { IUser } from '../../models/user';


type Props = {
  me: IUser
};

class TmAppbar extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    const avatar = this.props.me.avatar.thumbnail;

    return (
      <div className={css.root}>
        <div>
          <div className={css.logoLayout}>
            <TmLogo/>
          </div>
        </div>
        <Flex align='center'>
          <Box className={css.avatarLayout}>
            <Avatar
              src={avatar}
              size={34}
              backgroundColor={'transparent'}/>
          </Box>
          <Box className={css.iconButtonLayout}>
            <IconButton>
              <MoreVertIcon color={'#fff'}/>
            </IconButton>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default TmAppbar;
