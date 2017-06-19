/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pure, compose } from 'recompose';

import * as layoutActions from '@/flux/actions/layoutActions';
import TmCanvasDesktop from '../components/canvas/desktop';
import TmCanvasPhone from '../components/canvas/phone';


type Props = {
  isPhone: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  heightWindow: number,
  widthWindow: number,
  messagePanelHeight: number,
  changeMessagePanelHeight: Function
}

class TmCanvasContainer extends Component {
  props: Props;

  renderTemplate = () => {
    const { isPhone, isTablet, isDesktop, widthWindow } = this.props;

    if (isPhone) {
      return <TmCanvasPhone {...this.props}/>;
    }

    if (isTablet) {
      return <TmCanvasDesktop {...this.props}/>;
    }

    if (isDesktop && widthWindow > 0 && widthWindow <= 600) {
      return <TmCanvasPhone {...this.props}/>;
    }

    if (isDesktop && widthWindow > 600) {
      return <TmCanvasDesktop {...this.props}/>;
    }

    return null;
  }

  render() {
    return this.renderTemplate();
  }
}

function mapStateToProps(state: any) {
  const { layout } = state;

  return {
    messagePanelHeight: layout.messagePanel.height
  };
}

function mapDispatchToProps(dispatch: any) {
  const { changeMessagePanelHeight } = layoutActions;

  return {
    changeMessagePanelHeight: bindActionCreators(changeMessagePanelHeight, dispatch)
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), pure)(TmCanvasContainer);
