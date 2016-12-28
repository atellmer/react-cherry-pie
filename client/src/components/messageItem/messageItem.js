/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import Avatar from 'material-ui/Avatar/index';

import css from './messageItem.css';


type Props = {
  currentInterlocutor: any,
  changeCurrentInterlocutor: Function,
  message: {
    userId: number,
    avatar: string,
    firstname: string,
    lastname: string,
    lastMessage: string,
    timestamp: string,
    sender: string,
    messageStatus: string,
    newMessageCount: number,
    online: boolean
  }
}

class TmMessageItem extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  handleClick = () => {
    const { userId } = this.props.message;

    this.props.changeCurrentInterlocutor(userId);
  }

  render() {
    const {
      userId,
      avatar,
      firstname,
      lastname,
      lastMessage: message,
      online,
      sender } = this.props.message;
    const avatarStatusClass = online ? css.online : css.offline;
    const you = sender === 'you' ? 'Вы:' : '';
    const selectedMessageClass = this.props.currentInterlocutor.userId === userId ? css.selected : '';

    return (
      <div className={`${css.root} ${selectedMessageClass}`} onClick={this.handleClick}>
        <Flex>
          <Box>
            <div className={`${css.avatarLayout} ${avatarStatusClass}`}>
              <Avatar src={avatar} size={48} backgroundColor={'transparent'}/>
            </div>
          </Box>
          <Box flexAuto className={css.messageBodyLayout}>
            <div className={css.messageBody}>
              <div className={`${css.name} ${css.textClip}`}>{`${firstname} ${lastname}`}</div>
              <div className={`${css.textMessage} ${css.textClip}`}>{`${you} ${message}`}</div>
            </div>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default TmMessageItem;
