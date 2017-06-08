/** @flow */
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as interlocutorActions from '../actions/InterlocutorActions';
import type { IDialog } from '../models/dialogItem';
import TmPanelDesktop from '../components/panel/desktop';
import TmPanelPhone from '../components/panel/phone';


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

function mapStateToProps(state: any) {
  const { interlocutor, user } = state;

  return {
    interlocutor,
    dialogs: user.dialogs
  };
}

function mapDispatchToProps(dispatch: any)  {
  const { changeInterlocutor } = interlocutorActions;

  return {
    changeInterlocutor: bindActionCreators(changeInterlocutor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(pureRender(TmPanelContainer));
