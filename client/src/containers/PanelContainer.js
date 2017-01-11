/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TmPanelDesktop from '../components/panel/desktop';
import TmPanelPhone from '../components/panel/phone';
import * as interlocutorActions from '../actions/InterlocutorActions';
import type { IDialog } from '../models/dialogItem';


type Props = {
  dialogs: IDialog,
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  heightWindow: number,
  widthWindow: number
}

class TmPanelContainer extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  renderTemplate = () => {
    const { isPhone, isTablet, isDesktop, widthWindow } = this.props;

    if (isPhone) {
      return <TmPanelPhone {...this.props}/>;
    }

    if (isTablet) {
      return <TmPanelDesktop {...this.props}/>;
    }

    if (isDesktop && widthWindow > 0 && widthWindow <= 600) {
      return <TmPanelPhone {...this.props}/>;
    }

    if (isDesktop && widthWindow > 600) {
      return <TmPanelDesktop {...this.props}/>;
    }

    return null;
  }

  render() {
    return this.renderTemplate();
  }
}

function mapStateToProps(state: any): any {
  const { interlocutor, user } = state;

  return {
    interlocutor,
    dialogs: user.dialogs
  };
}

function mapDispatchToProps(dispatch: Function): any {
  const { changeInterlocutor } = interlocutorActions;

  return {
    changeInterlocutor: bindActionCreators(changeInterlocutor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TmPanelContainer);
