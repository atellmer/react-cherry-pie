/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import { Link } from 'react-router-dom';

import type { DialogType } from '../../../types';
import DialogView from '../../dialogView';
import {
  Root,
  ScrollableView
} from './styled';


type Props = {
  dialogItems: Array<DialogType>,
  match: {
    url: string
  },
  location: {
    pathname: string
  }
};

class DialogPanelPhone extends Component<void, Props, *> {

  renderDialogs = () => {
    const { dialogItems, match, location } = this.props;

    return dialogItems.map((item, index) => {
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
      <Root>
        <ScrollableView
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}>
          {this.renderDialogs()}
        </ScrollableView>
      </Root>
    );
  }
}

export {
  DialogPanelPhone
};

export default pure(DialogPanelPhone);
