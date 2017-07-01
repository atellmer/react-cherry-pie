/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import cn from 'classnames';
import Avatar from 'material-ui/Avatar/index';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';

import type { IDialog } from '@/shared/models/dialogItem';
import TmBadge from '@/features/ui/badge';
import * as s from './dialogView.css';


type Props = {
  isActive: boolean,
  dialog: IDialog
}

class DialogView extends Component {
  props: Props;

  renderIndicators() {
    const { dialog: { message } } = this.props;
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
      const { dialog: { user, message }, isActive } = this.props;

      const avatarLayoutStyle = cn(s.box, s.avatarLayout, {
        [s.online]: user.online,
        [s.offline]: !user.online
      });

      return (
        <div className={cn(s.root, { [s.isActive]: isActive })}>
          <div className={cn(s.flex)}>
            <div className={avatarLayoutStyle}>
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

export default pure(DialogView);
