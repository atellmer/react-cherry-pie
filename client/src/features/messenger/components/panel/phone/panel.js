/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

import type { IDialog } from '@/shared/models/dialogItem';
import TmDialogItem from '../../dialogItem';
import * as css from './panel.css';


type Props = {
  dialogs: Array<IDialog>,
  changeInterlocutor: Function,
  match: {
    url: string
  }
};

class TmPanelPhone extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  renderDialogs = () => {
    return this.props.dialogs.map((dialog, index) => {
      return (
        <Link to={`${this.props.match.url}/${dialog.id}`} key={index}>
          <TmDialogItem {...this.props} dialog={dialog}/>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className={css.rootPhone}>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          className={css.scrollableView}>
          {this.renderDialogs()}
        </Scrollbars>
      </div>
    );
  }
}

export default pure(TmPanelPhone);
