/** @flow */
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import { Scrollbars } from 'react-custom-scrollbars';

import TmMessagePanel from '../../messagePanel';
import * as css from './canvas.css';


type Props = {
  params: any,
  messagePanelHeight: number,
  changeMessagePanelHeight: Function,
  match: {
    params: {
      id: number
    }
  }
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
            <div>{`Route: ${this.props.match.params.id}`}</div>
          </Scrollbars>
        </div>
        <div className={css.messagePanelLayout}>
          <TmMessagePanel changeMessagePanelHeight={this.props.changeMessagePanelHeight}/>
        </div>
      </div>
    );
  }
}

export default pureRender(TmCanvasDesktop);
