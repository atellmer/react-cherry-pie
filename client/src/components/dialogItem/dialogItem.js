/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import cx from 'classnames';
import Avatar from 'material-ui/Avatar/index';

import type { DialogItemType } from '../../models/dialog-item';
import css from './dialogItem.css';


type Props = {
  interlocutor: any,
  changeInterlocutor: Function,
  message: DialogItemType
}

class TmDialogItem extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  handleClick = () => {
    const { user } = this.props.message;

    this.props.changeInterlocutor(user.id);
  }

  render() {
    const { user, message } = this.props.message;
    const statusStyle = user.online ? css.online : css.offline;
    const selectedStyle = this.props.interlocutor.id === user.id ? css.selected : '';

    return (
      <div className={cx(css.root, selectedStyle)} onClick={this.handleClick}>
        <Flex>
          <Box>
            <div className={cx(css.avatarLayout, statusStyle)}>
              <Avatar
                src={user.avatar.thumbnail}
                size={48}
                backgroundColor={'transparent'}/>
            </div>
          </Box>
          <Box flexAuto className={css.messageBodyLayout}>
            <div className={css.messageBody}>
              <div className={cx(css.name, css.textClip)}>
                {`${user.name.first} ${user.name.last}`}
              </div>
              <div className={cx(css.textMessage, css.textClip)}>
                {`${message.value.text}`}
              </div>
            </div>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default TmDialogItem;
