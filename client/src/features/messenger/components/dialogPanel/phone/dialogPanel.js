/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import cn from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

import type { IDialog } from '@/shared/models/dialogItem';
import DialogView from '../../dialogView';
import * as s from './dialogPanel.css';


type Props = {
  dialogs: Array<IDialog>,
  match: {
    url: string
  },
  location: {
    pathname: string
  }
};

class DialogPanelPhone extends Component {
  props: Props;

  renderDialogs = () => {
    const { dialogs, match, location } = this.props;

    return dialogs.map((item, index) => {
      const url = `${match.url}/${item.id}`;
      const isActive = location.pathname === url;

      return (
        <Link to={url} key={index}>
          <DialogView
            dialog={item}
            isActive={isActive}/>
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

export default pure(DialogPanelPhone);
