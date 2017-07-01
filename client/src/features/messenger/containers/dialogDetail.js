/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pure, compose } from 'recompose';

import * as layoutActions from '@/flux/actions/layoutActions';
import withPlatform from '@/shared/hocs/withPlatform';
import DialogDetailDesktop from '../components/dialogDetail/desktop';
import DialogDetailPhone from '../components/dialogDetail/phone';
import { PHONE_WIDTH } from '@/shared/constants';


type Props = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  widthWindow: number,
  messagePanelHeight: number,
  changeMessagePanelHeight: Function,
  match: {}
}

class DialogDetailContainer extends Component {
  props: Props;

  renderTemplate = () => {
    const { isPhone, isTablet, isDesktop, widthWindow } = this.props;
    const sharedProps = {
      messagePanelHeight: this.props.messagePanelHeight,
      changeMessagePanelHeight: this.props.changeMessagePanelHeight,
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

function mapStateToProps({ layout }) {
  const { messagePanel: { height } } = layout;

  return {
    messagePanelHeight: height
  };
}

function mapDispatchToProps(dispatch) {
  const { changeMessagePanelHeight } = layoutActions;

  return bindActionCreators({
    changeMessagePanelHeight
  }, dispatch);
}

export default compose(
  pure,
  withPlatform,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogDetailContainer);
