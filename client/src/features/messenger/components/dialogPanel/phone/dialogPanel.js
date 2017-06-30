/** @flow */
import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import cn from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

import type { IDialog } from '@/shared/models/dialogItem';
import DialogView from '../../dialogView';
import * as s from './dialogPanel.css';


type Props = {
  dialogs: Array<IDialog>,
  changeInterlocutor: Function,
  match: {
    url: string
  }
};

class DialogPanelPhone extends Component {
  props: Props;

  renderDialogs = () => {
    return this.props.dialogs.map((dialog, index) => {
      return (
        <Link to={`${this.props.match.url}/${dialog.id}`} key={index}>
          <DialogView {...this.props} dialog={dialog}/>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className={cn(s.rootPhone)}>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          className={cn(s.scrollableView)}>
          {this.renderDialogs()}
        </Scrollbars>
      </div>
    );
  }
}

export default compose(pure(DialogPanelPhone));
