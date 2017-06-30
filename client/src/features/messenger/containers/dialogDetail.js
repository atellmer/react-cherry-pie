/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pure, compose } from 'recompose';

import * as layoutActions from '@/flux/actions/layoutActions';
import DialogDetailDesktop from '../components/dialogDetail/desktop';
import DialogDetailPhone from '../components/dialogDetail/phone';
import { PHONE_WIDTH } from '@/shared/constants';


type Props = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  heightWindow: number,
  widthWindow: number,
  messagePanelHeight: number,
  changeMessagePanelHeight: Function
}

class DialogDetailContainer extends Component {
  props: Props;

  renderTemplate = () => {
    const { isPhone, isTablet, isDesktop, widthWindow } = this.props;

    if (isPhone) {
      return <DialogDetailPhone {...this.props}/>;
    }

    if (isTablet) {
      return <DialogDetailDesktop {...this.props}/>;
    }

    if (isDesktop && widthWindow > 0 && widthWindow <= PHONE_WIDTH) {
      return <DialogDetailPhone {...this.props}/>;
    }

    if (isDesktop && widthWindow > PHONE_WIDTH) {
      return <DialogDetailDesktop {...this.props}/>;
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

  return {
    changeMessagePanelHeight: bindActionCreators(changeMessagePanelHeight, dispatch)
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(DialogDetailContainer);
