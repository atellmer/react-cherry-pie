/** @flow */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import css from './panel.css';


class TmPanelPhone extends Component {
  render() {
    return (
      <div className={css.root}>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          className={css.scrollableView}/>
      </div>
    );
  }
}

export default TmPanelPhone;
