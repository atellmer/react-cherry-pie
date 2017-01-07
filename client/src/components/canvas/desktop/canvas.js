/** @flow */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import TmMessagePanel from '../../messagePanel';
import css from './canvas.css';


type Props = {
  params: any,
  messagePanelHeight: number,
  changeMessagePanelHeight: Function
}

class TmCanvasDesktop extends Component {
  props: Props;

  render() {
    const contentLayoutStyle = {
      paddingBottom: this.props.messagePanelHeight > 0 ? this.props.messagePanelHeight : ''
    };

    return (
      <div className={css.root}>
        <div className={css.contentLayout} style={contentLayoutStyle}>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className={css.scrollableView}>
            <div>{this.props.params.splat}</div>
          </Scrollbars>
        </div>
        <div className={css.messagePanelLayout}>
          <TmMessagePanel changeMessagePanelHeight={this.props.changeMessagePanelHeight}/>
        </div>
      </div>
    );
  }
}

export default TmCanvasDesktop;