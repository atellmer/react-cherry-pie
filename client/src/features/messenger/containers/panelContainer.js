/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pure, compose } from 'recompose';

import * as interlocutorActions from '@/flux/actions/interlocutorActions';
import * as userActions from '@/flux/actions/userActions';
import type { IDialog } from '@/shared/models/dialogItem';
import TmPanelDesktop from '../components/panel/desktop';
import TmPanelPhone from '../components/panel/phone';


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
    dialogs: user.filteredDialogs
  };
}

function mapDispatchToProps(dispatch: any)  {
  const { changeInterlocutor } = interlocutorActions;
  const { filterDialogs } = userActions;

  return {
    changeInterlocutor: bindActionCreators(changeInterlocutor, dispatch),
    filterDialogs: bindActionCreators(filterDialogs, dispatch)
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), pure)(TmPanelContainer);
