/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs/index';
import SwipeableViews from 'react-swipeable-views';

import type { IDialog } from '@/shared/models/dialogItem';
import DialogView from '../dialogView';
import { filterItemsByPath } from '@/shared/utils/methods';
import {
  Root,
  ScrollableView
} from './styled';


type Props = {
  dialogs: Array<IDialog>,
  match: {
    url: string
  },
  location: {
    pathname: string
  }
};

type State = {
  slideIndex: number
}

const TAB_ONE = 'Все';
const TAB_TWO = 'Новые';

class DialogTabs extends Component {
  props: Props;
  state: State;

  state: State = {
    slideIndex: 0
  };

  handleChange = (value: number) => {
    this.setState({
      slideIndex: value
    });
  }

  getDialogs = dialogs => {
    const { match, location } = this.props;

    return dialogs.map((item, index) => {
      const url = `${match.url}/${item.id}`;
      const isActive = location.pathname === url;

      return (
        <Link to={url} key={index}>
          <DialogView dialog={item} isActive={isActive}/>
        </Link>
      );
    });
  }

  renderDialogs = () => {
    const { dialogs } = this.props;

    return dialogs.length ? this.getDialogs(dialogs) : null;
  }

  renderFilteredDialogs = ({ path, value }) => {
    const { dialogs } = this.props;
    const items = filterItemsByPath(path)(value)(dialogs);

    return items.length ? this.getDialogs(items) : null;
  }

  render() {
    return (
      <Root>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label={TAB_ONE} value={0}/>
          <Tab label={TAB_TWO} value={1}/>
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}>
          <ScrollableView
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}>
            {this.renderDialogs()}
          </ScrollableView>
          <ScrollableView
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}>
            {this.renderFilteredDialogs({
              path: ['message', 'status', 'new'],
              value: true
            })}
          </ScrollableView>
        </SwipeableViews>
      </Root>
    );
  }
}

export default pure(DialogTabs);
