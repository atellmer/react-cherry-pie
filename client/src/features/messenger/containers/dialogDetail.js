/** @flow */
import React, { Component } from 'react';
import {
  gql,
  graphql
} from 'react-apollo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { pure, compose } from 'recompose';

import {
  resizeDialogForm,
  DialogDetailDesktop,
  DialogDetailPhone
} from '@/features/messenger';
import { withPlatform } from '@/features/common';
import { PHONE_WIDTH } from '@/vars';


type Props = {
  data: any,
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  widthWindow: number,
  dialogFormHeight: number,
  resizeDialogForm: Function,
  match: {}
}

class DialogDetailContainer extends Component<void, Props, *> {
  componentWillMount() {
    this.props.data.subscribeToMore({
      document: messagesSubscription,
      variables: {
        channelId: 1
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newMessage = subscriptionData.data.messageAdded;

        if (!prev.channels[0].messages.find((msg) => msg.id === newMessage.id)) {
          return {
            ...prev,
            channels: Object.assign([], prev.channels, {
              '0': {
                ...prev.channels[0],
                messages: [...prev.channels[0].messages, newMessage]
              }
            })
          };
        }

        return prev;
      }
    });
  }

  renderTemplate = () => {
    const { isPhone, isTablet, isDesktop, widthWindow } = this.props;
    const sharedProps = {
      data: this.props.data,
      dialogFormHeight: this.props.dialogFormHeight,
      resizeDialogForm: this.props.resizeDialogForm,
      match: this.props.match
    };

    if (isPhone) {
      return <DialogDetailPhone {...sharedProps}/>;
    }

    if (isTablet) {
      return <DialogDetailDesktop {...sharedProps}/>;
    }

    if (isDesktop && widthWindow > 0 && widthWindow <= PHONE_WIDTH) {
      return <DialogDetailPhone {...sharedProps}/>;
    }

    if (isDesktop && widthWindow > PHONE_WIDTH) {
      return <DialogDetailDesktop {...sharedProps}/>;
    }

    return null;
  }

  render() {
    return this.renderTemplate();
  }
}

function mapStateToProps({ messenger }) {
  const { layout: { dialogForm: { height } } } = messenger;

  return {
    dialogFormHeight: height
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return bindActionCreators({
    resizeDialogForm
  }, dispatch);
}

const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
      messages {
        id
        text
      }
    }
  }
`;

const messagesSubscription = gql`
  subscription messageAdded($channelId: ID!) {
    messageAdded(channelId: $channelId) {
      id
      text
    }
  }
`;

const withData = graphql(channelsListQuery, {
  options: { pollInterval: 2000000 }
});

export default compose(
  pure,
  withPlatform,
  withData,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogDetailContainer);
