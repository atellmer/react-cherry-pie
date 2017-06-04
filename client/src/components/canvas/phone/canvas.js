/** @flow */
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import { Scrollbars } from 'react-custom-scrollbars';

import TmMessagePanel from '../../messagePanel';
import * as css from './canvas.css';


type Props = {
  params: any,
  messagePanelHeight: number,
  changeMessagePanelHeight: Function
}

class TmCanvasPhone extends Component {
  props: Props;

  render() {
    return (
      <div className={css.root}>
        <div className={css.contentLayout} style={{ paddingBottom: this.props.messagePanelHeight }}>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className={css.scrollableView}>
            <div>{`Route: ${this.props.params.id}`}</div>
          </Scrollbars>
        </div>
        <div className={css.messagePanelLayout}>
          <TmMessagePanel changeMessagePanelHeight={this.props.changeMessagePanelHeight}/>
        </div>
      </div>
    );
  }
}

export default pureRender(TmCanvasPhone);
