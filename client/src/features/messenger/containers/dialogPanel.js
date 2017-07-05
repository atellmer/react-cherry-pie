/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { pure, compose } from 'recompose';

import {
  filterDialogs,
  DialogPanelDesktop,
  DialogPanelPhone
} from '@/features/messenger';
import { withPlatform } from '@/features/common';
import type { DialogType } from '@/features/messenger';
import { PHONE_WIDTH } from '@/vars';
import { getFilteredDialogs } from '../selectors';


type Props = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  widthWindow: number,
  heightWindow: number,
  dialogItems: DialogType,
  filterDialogs: Function,
  match: {},
  location: {}
}

class DialogPanelContainer extends Component<void, Props, *> {

  renderTemplate = () => {
    const { isPhone, isTablet, isDesktop, widthWindow } = this.props;

    const sharedProps = {
      dialogItems: this.props.dialogItems,
      filterDialogs: this.props.filterDialogs,
      match: this.props.match,
      location: this.props.location
    };

    if (isPhone) {
      return <DialogPanelPhone {...sharedProps}/>;
    }

    if (isTablet) {
      return <DialogPanelDesktop {...sharedProps}/>;
    }

    if (isDesktop && widthWindow > 0 && widthWindow <= PHONE_WIDTH) {
      return <DialogPanelPhone {...sharedProps}/>;
    }

    if (isDesktop && widthWindow > PHONE_WIDTH) {
      return <DialogPanelDesktop {...sharedProps}/>;
    }

    return null;
  }

  render() {
    return this.renderTemplate();
  }
}

function mapStateToProps(state) {
  return {
    dialogItems: getFilteredDialogs(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>)  {
  return bindActionCreators({
    filterDialogs
  }, dispatch);
}

export default compose(
  pure,
  withPlatform,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogPanelContainer);
