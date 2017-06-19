/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import type { IUser } from '@/shared/models/user';
import TmLogo from '@/features/ui/logo';
import * as css from './appbar.css';


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
        <div className={css.controlsLayout}>
          <div className={css.avatarLayout}>
            <Avatar
              src={avatar}
              size={34}
              backgroundColor={'transparent'}/>
          </div>
          <div className={css.iconButtonLayout}>
            <IconButton>
              <MoreVertIcon color={'#fff'}/>
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default pure(TmAppbar);
