/** @flow */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TmPanelDesktop from '../components/panelDesktop';
import TmPanelPhone from '../components/panelPhone';
import * as interlocutorActions from '../actions/InterlocutorActions';


type Props = {
  dispatch: Function,
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  heightWindow: number,
  widthWindow: number
}

type State = {
  interlocutor: {
    userId: number
  }
}

class TmPanelContainer extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  renderTemplate = () => {
    const { isPhone, widthWindow } = this.props;

    if (isPhone || widthWindow <= 600) {
      return (
        <TmPanelPhone {...this.props}/>
      );
    }
    return (
      <TmPanelDesktop {...this.props}/>
    );
  }

  render() {
    return this.renderTemplate();
  }
}

function mapStateToProps(state: State): any {
  const { interlocutor } = state;

  return { interlocutor };
}

function mapDispatchToProps(dispatch: Function): any {
  const { changeInterlocutor } = interlocutorActions;

  return {
    changeInterlocutor: bindActionCreators(changeInterlocutor, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TmPanelContainer);
