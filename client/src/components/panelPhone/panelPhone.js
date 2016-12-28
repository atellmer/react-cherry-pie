/** @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';

import items from '../../models/message-items.json';
import css from './panelPhone.css';


class TmPanelPhone extends Component {
  render() {
    const itemsTemplate = items.map((item, index) => {
      return (
        <Link to={`/dialogs/${item.id}`} key={index}>
          <div className={css.item}>
            {`${item.user.name.first} ${item.user.name.last}`}
          </div>
        </Link>
      );
    });

    return (
      <div className={css.root}>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          className={css.scrollableView}>
          {itemsTemplate}
        </Scrollbars>
      </div>
    );
  }
}

export default TmPanelPhone;
