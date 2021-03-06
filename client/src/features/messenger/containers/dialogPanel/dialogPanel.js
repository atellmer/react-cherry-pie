/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { pure, compose } from 'recompose';

import { filterDialogs } from '../../actions/dialogs';
import DialogPanelDesktop from '../../components/dialogPanel/desktop';
import DialogPanelPhone from '../../components/dialogPanel/phone';
import { withPlatform } from '@/features/common';
import type { DialogType } from '../../types';
import { PHONE_WIDTH } from '@/vars';
import { getFilteredDialogs } from '../../selectors';


type Props = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  widthWindow: number,
  dialogItems: DialogType,
  filterDialogs: Function,
  match: {},
  location: {}
};

class DialogPanel extends Component<void, Props, *> {
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

function mapStateToProps(state: any) {
  return {
    dialogItems: getFilteredDialogs(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch<*>)  {
  return bindActionCreators({
    filterDialogs
  }, dispatch);
}

export {
  DialogPanel,
  mapStateToProps,
  mapDispatchToProps
};

export default compose(
  pure,
  connect(mapStateToProps, mapDispatchToProps),
  withPlatform,
)(DialogPanel);
