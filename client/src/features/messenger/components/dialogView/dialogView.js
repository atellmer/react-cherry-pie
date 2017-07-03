/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import Avatar from 'material-ui/Avatar/index';

import type { IDialog } from '@/shared/models/dialogItem';
import TmBadge from '@/features/ui/badge';
import {
  Root,
  AvatarLayout,
  MessageLayout,
  MessageStyled,
  NameStyled,
  TextStyled,
  IndicatorsStyled,
  ActionDoneIconStyled,
  ActionDoneAllIconStyled,
  BadgeLayout,
  TimestampStyled
} from './styled';


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
      <IndicatorsStyled>
        { status.delivered && <ActionDoneIconStyled /> }
        { status.read && <ActionDoneAllIconStyled /> }
        { status.new &&
          <BadgeLayout>
            <TmBadge count='1'/>
          </BadgeLayout>
        }
        <TimestampStyled>{timestamp}</TimestampStyled>
      </IndicatorsStyled>
    );
  }

  renderDialog() {
    const { dialog: { user, message }, isActive } = this.props;

    return (
      <Root isActive={isActive}>
        <AvatarLayout isOnline={user.online}>
          <Avatar
            src={user.avatar.thumbnail}
            size={48}
            backgroundColor={'transparent'}/>
        </AvatarLayout>
        <MessageLayout>
          <MessageStyled>
            <NameStyled>{`${user.name.first} ${user.name.last}`}</NameStyled>
            <TextStyled>{`${message.value.text}`}</TextStyled>
            {this.renderIndicators()}
          </MessageStyled>
        </MessageLayout>
      </Root>
    );
  }

  render() {
    return this.renderDialog();
  }
}

export default pure(DialogView);
