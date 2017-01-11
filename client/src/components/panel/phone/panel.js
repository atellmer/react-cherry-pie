/** @flow */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router';

import TmDialogItem from '../../dialogItem';
import type { IDialog } from '../../../models/dialogItem';
import css from './panel.css';


type Props = {
  dialogs: Array<IDialog>
};

class TmPanelPhone extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  renderDialogs = () => {
    return this.props.dialogs.map((dialog, index) => {
      return (
        <Link to={`/dialogs/${dialog.id}`} key={index}>
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

export default TmPanelPhone;
