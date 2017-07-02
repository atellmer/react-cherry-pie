/** @flow */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { pure } from 'recompose';
import cn from 'classnames';

import DialogForm from '../../dialogForm';
import * as s from './dialogDetail.css';


type Props = {
  dialogFormHeight: number,
  resizeDialogForm: Function,
  match: {
    params: {
      id: number
    }
  }
}

class DialogDetailDesktop extends Component {
  props: Props;

  getContentLayoutStyle = () => {
    const { dialogFormHeight } = this.props;

    return {
      paddingBottom: dialogFormHeight > 0 ? dialogFormHeight : ''
    };
  }

  render() {
    const { resizeDialogForm } = this.props;

    return (
      <div className={cn(s.root)}>
        <div className={cn(s.contentLayout)} style={this.getContentLayoutStyle()}>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className={cn(s.scrollableView)}>
            <div>
              {`Route: ${this.props.match.params.id}`}
            </div>
          </Scrollbars>
        </div>
        <div className={cn(s.messagePanelLayout)}>
          <DialogForm resizeDialogForm={resizeDialogForm}/>
        </div>
      </div>
    );
  }
}

export default pure(DialogDetailDesktop);
