/** @flow */
import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import cn from 'classnames';
import Avatar from 'material-ui/Avatar/index';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';

import type { IDialog } from '@/shared/models/dialogItem';
import TmBadge from '@/features/ui/badge';
import * as s from './dialogView.css';


type Props = {
  interlocutor: any,
  changeInterlocutor: Function,
  dialog: IDialog
}

class DialogView extends Component {
  props: Props;


  handleClick = () => {
    const { user } = this.props.dialog;

    this.props.changeInterlocutor(user.id);
  }

  renderIndicators() {
    const { message } = this.props.dialog;
    const { status } = message;
    const timestamp = new Date(message.timestamp).toDateString();

    return (
      <div className={cn(s.indicators)}>
        { status.delivered &&
          <ActionDone className={cn(s.icon)}/>
        }
        { status.read &&
          <ActionDoneAll className={cn(s.icon)}/>
        }
        { status.new &&
          <div className={cn(s.badgeLayout)}>
            <TmBadge count='1'/>
          </div>
        }
        <div className={cn(s.timestamp)}>
          {timestamp}
        </div>
      </div>
    );
  }

  renderDialog() {
    if (this.props.dialog) {
      const { user, message } = this.props.dialog;
      const statusStyle = user.online ? s.online : s.offline;
      const selectedStyle = this.props.interlocutor.id === user.id ? s.selected : '';

      return (
        <div className={cn(s.root, selectedStyle)} onClick={this.handleClick}>
          <div className={cn(s.flex)}>
            <div className={cn(s.box, s.avatarLayout, statusStyle)}>
              <Avatar
                src={user.avatar.thumbnail}
                size={48}
                backgroundColor={'transparent'}/>
            </div>
            <div className={cn(s.box, s.flexAuto, s.messageLayout)}>
              <div className={cn(s.message)}>
                <div className={cn(s.name, s.textClip)}>
                  {`${user.name.first} ${user.name.last}`}
                </div>
                <div className={cn(s.text, s.textClip)}>
                  {`${message.value.text}`}
                </div>
                {this.renderIndicators()}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return this.renderDialog();
  }
}

export default compose(pure(DialogView));
