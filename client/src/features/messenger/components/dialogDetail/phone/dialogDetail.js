/** @flow */
import React, { Component } from 'react';
import { compose, pure } from 'recompose';
import { Scrollbars } from 'react-custom-scrollbars';
import cn from 'classnames';

import DialogForm from '../../dialogForm';
import * as s from './dialogDetail.css';


type Props = {
  messagePanelHeight: number,
  changeMessagePanelHeight: Function,
  match: {
    params: {
      id: number
    }
  }
}

class DialogDetailPhone extends Component {
  props: Props;

  getContentLayoutStyle = () => {
    const { messagePanelHeight } = this.props;

    return {
      paddingBottom: messagePanelHeight > 0 ? messagePanelHeight : ''
    };
  }

  render() {
    const { changeMessagePanelHeight } = this.props;

    return (
      <div className={cn(s.root)}>
        <div className={cn(s.contentLayout)} style={this.getContentLayoutStyle()}>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className={cn(s.scrollableView)}>
            <div>{`Route: ${this.props.match.params.id}`}</div>
          </Scrollbars>
        </div>
        <div className={cn(s.dialogPanelLayout)}>
          <DialogForm changeMessagePanelHeight={changeMessagePanelHeight}/>
        </div>
      </div>
    );
  }
}

export default compose(pure(DialogDetailPhone));
