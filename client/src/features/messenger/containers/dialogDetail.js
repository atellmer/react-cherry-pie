/** @flow */
import React, { Component } from 'react';
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
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  widthWindow: number,
  dialogFormHeight: number,
  resizeDialogForm: Function,
  match: {}
}

class DialogDetailContainer extends Component<void, Props, *> {
  renderTemplate = () => {
    const { isPhone, isTablet, isDesktop, widthWindow } = this.props;
    const sharedProps = {
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

export default compose(
  pure,
  withPlatform,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogDetailContainer);
