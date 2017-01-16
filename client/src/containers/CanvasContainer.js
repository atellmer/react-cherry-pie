/** @flow */
// Core
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as layoutActions from '../actions/LayoutActions';

// Components
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

function mapStateToProps(state: any): any {
  const { layout } = state;

  return {
    messagePanelHeight: layout.messagePanel.height
  };
}

function mapDispatchToProps(dispatch: Function): any {
  const { changeMessagePanelHeight } = layoutActions;

  return {
    changeMessagePanelHeight: bindActionCreators(changeMessagePanelHeight, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(pureRender(TmCanvasContainer));
