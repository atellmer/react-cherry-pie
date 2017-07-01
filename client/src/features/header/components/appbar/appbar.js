/** @flow */
import React, { Component } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { pure } from 'recompose';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';

import type { IUser } from '@/shared/models/user';
import * as s from './appbar.css';


const BACK_ROUTE = '/messenger';

type Props = {
  me: IUser
};

class Appbar extends Component {
  props: Props;

  render() {
    const avatar = this.props.me.avatar.thumbnail;

    return (
      <div className={cn(s.root)}>
        <div>
          <div className={cn(s.arrowBackLayout)}>
            <Link to={BACK_ROUTE}>
              <IconButton>
                <ArrowBackIcon color={'#fff'}/>
              </IconButton>
            </Link>
          </div>
        </div>
        <div className={cn(s.controlsLayout)}>
          <div className={cn(s.avatarLayout)}>
            <Avatar
              src={avatar}
              size={34}
              backgroundColor={'transparent'}/>
          </div>
          <div className={cn(s.iconButtonLayout)}>
            <IconButton>
              <MoreVertIcon color={'#fff'}/>
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default pure(Appbar);
