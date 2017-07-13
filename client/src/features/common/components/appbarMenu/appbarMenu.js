/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton/index';
import IconMenu from 'material-ui/IconMenu/index';
import MenuItem from 'material-ui/MenuItem/index';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PersonIcon from 'material-ui/svg-icons/social/person';
import ChatBubbleOutlineIcon from 'material-ui/svg-icons/communication/chat-bubble-outline';
import ExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import Divider from 'material-ui/Divider/index';

import {
  PROFILE_ROUTE,
  MESSENGER_ROUTE
} from '@/vars';


type Props = {
  signout: Function
}

const PROFILE_TEXT = 'Профиль';
const MESSAGES_TEXT = 'Сообщения';
const SIGNOUT_TEXT = 'Выход';

class AppbarMenu extends Component <void, Props, *> {
  handleSignout = () => {
    this.props.signout();
  }

  renderMenuBtn = () => {
    return (
      <IconButton>
        <MoreVertIcon color={'#fff'}/>
      </IconButton>
    );
  }

  render() {
    return (
      <IconMenu
        listStyle={{ top: '10px' }}
        iconButtonElement={this.renderMenuBtn()}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}>
        <MenuItem
          primaryText={`${PROFILE_TEXT}`}
          leftIcon={<PersonIcon />}
          containerElement={<Link to={`/${PROFILE_ROUTE}`} />} />
        <MenuItem
          primaryText={`${MESSAGES_TEXT}`}
          leftIcon={<ChatBubbleOutlineIcon />}
          containerElement={<Link to={`/${MESSENGER_ROUTE}`} />} />
        <Divider />
        <MenuItem
          primaryText={`${SIGNOUT_TEXT}`}
          onClick={this.handleSignout}
          leftIcon={<ExitToAppIcon />} />
      </IconMenu>
    );
  }
}

export default pure(AppbarMenu);
