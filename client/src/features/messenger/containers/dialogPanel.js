/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pure, compose } from 'recompose';

import * as interlocutorActions from '@/flux/actions/interlocutorActions';
import * as userActions from '@/flux/actions/userActions';
import type { IDialog } from '@/shared/models/dialogItem';
import DialogPanelDesktop from '../components/dialogPanel/desktop';
import DialogPanelPhone from '../components/dialogPanel/phone';
import { PHONE_WIDTH } from '@/shared/constants';


type Props = {
  dialogs: IDialog,
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  heightWindow: number,
  widthWindow: number,
  changeInterlocutor: Function,
  filterDialogs: Function
}

class DialogPanelContainer extends Component {
  props: Props;

  renderTemplate = () => {
    const { isPhone, isTablet, isDesktop, widthWindow } = this.props;

    if (isPhone) {
      return <DialogPanelPhone {...this.props}/>;
    }

    if (isTablet) {
      return <DialogPanelDesktop {...this.props}/>;
    }

    if (isDesktop && widthWindow > 0 && widthWindow <= PHONE_WIDTH) {
      return <DialogPanelPhone {...this.props}/>;
    }

    if (isDesktop && widthWindow > PHONE_WIDTH) {
      return <DialogPanelDesktop {...this.props}/>;
    }

    return null;
  }

  render() {
    return this.renderTemplate();
  }
}

function mapStateToProps({ interlocutor, user }) {
  const { filteredDialogs } = user;

  return {
    interlocutor,
    dialogs: filteredDialogs
  };
}

function mapDispatchToProps(dispatch)  {
  const { changeInterlocutor } = interlocutorActions;
  const { filterDialogs } = userActions;

  return {
    changeInterlocutor: bindActionCreators(changeInterlocutor, dispatch),
    filterDialogs: bindActionCreators(filterDialogs, dispatch)
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure
)(DialogPanelContainer);
