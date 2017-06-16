/** @flow */
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import cx from 'classnames';
import Avatar from 'material-ui/Avatar/index';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';

import type { IDialog } from '@/shared/models/dialogItem';
import TmBadge from '@/features/ui/badge';
import * as css from './dialogItem.css';


type Props = {
  interlocutor: any,
  changeInterlocutor: Function,
  dialog: IDialog
}

class TmDialogItem extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  handleClick = () => {
    const { user } = this.props.dialog;

    this.props.changeInterlocutor(user.id);
  }

  renderIndicators() {
    const { message } = this.props.dialog;
    const { status } = message;
    const timestamp = new Date(message.timestamp).toDateString();

    return (
      <div className={css.indicators}>
        { status.delivered &&
          <ActionDone className={css.icon}/>
        }
        { status.read &&
          <ActionDoneAll className={css.icon}/>
        }
        { status.new &&
          <div className={css.badgeLayout}>
            <TmBadge count='5'/>
          </div>
        }
        <div className={css.timestamp}>
          {timestamp}
        </div>
      </div>
    );
  }

  renderDialog() {
    if (this.props.dialog) {
      const { user, message } = this.props.dialog;
      const statusStyle = user.online ? css.online : css.offline;
      const selectedStyle = this.props.interlocutor.id === user.id ? css.selected : '';

      return (
        <div className={cx(css.root, selectedStyle)} onClick={this.handleClick}>
          <div className={css.flex}>
            <div className={cx(css.box, css.avatarLayout, statusStyle)}>
              <Avatar src={user.avatar.thumbnail} size={48} backgroundColor={'transparent'}/>
            </div>
            <div className={cx(css.box, css.flexAuto, css.messageLayout)}>
              <div className={css.message}>
                <div className={cx(css.name, css.textClip)}>
                  {`${user.name.first} ${user.name.last}`}
                </div>
                <div className={cx(css.text, css.textClip)}>
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

export default pureRender(TmDialogItem);
