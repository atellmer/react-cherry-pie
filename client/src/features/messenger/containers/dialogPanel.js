/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pure, compose } from 'recompose';

import * as userActions from '@/flux/actions/userActions';
import withPlatform from '@/shared/hocs/withPlatform';
import type { IDialog } from '@/shared/models/dialogItem';
import DialogPanelDesktop from '../components/dialogPanel/desktop';
import DialogPanelPhone from '../components/dialogPanel/phone';
import { PHONE_WIDTH } from '@/shared/constants';


type Props = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  widthWindow: number,
  heightWindow: number,
  dialogs: IDialog,
  filterDialogs: Function,
  match: {},
  location: {}
}

class DialogPanelContainer extends Component {
  props: Props;

  renderTemplate = () => {
    const { isPhone, isTablet, isDesktop, widthWindow } = this.props;

    const sharedProps = {
      dialogs: this.props.dialogs,
      match: this.props.match,
      location: this.props.location,
      filterDialogs: this.props.filterDialogs
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

function mapStateToProps({ user }) {
  const { filteredDialogs } = user;

  return {
    dialogs: filteredDialogs
  };
}

function mapDispatchToProps(dispatch)  {
  const { filterDialogs } = userActions;

  return bindActionCreators({
    filterDialogs
  }, dispatch);
}

export default compose(
  pure,
  withPlatform,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogPanelContainer);
