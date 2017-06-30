/** @flow */
import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tabs, Tab } from 'material-ui/Tabs/index';
import SwipeableViews from 'react-swipeable-views';
import { Scrollbars } from 'react-custom-scrollbars';

import type { IDialog } from '@/shared/models/dialogItem';
import DialogView from '../dialogView';
import { filterItemsByPath } from '@/shared/utils/methods';
import * as s from './dialogTabs.css';


type Props = {
  interlocutor: any,
  changeInterlocutor: Function,
  dialogs: Array<IDialog>,
  match: {
    url: string
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

  constructor(props: Props) {
    super(props);

    this.state = {
      slideIndex: 0
    };
  }

  handleChange = (value: number): void => {
    this.setState({
      slideIndex: value
    });
  }

  getDialogs = dialogs => {
    const { match } = this.props;

    return dialogs.map((item, index) => {
      return (
        <Link
          to={`${match.url}/${item.id}`}
          key={index}>
          <DialogView {...this.props} dialog={item}/>
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
      <div className={cn(s.root)}>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label={TAB_ONE} value={0}/>
          <Tab label={TAB_TWO} value={1}/>
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className={cn(s.scrollableView)}>
            {this.renderDialogs()}
          </Scrollbars>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className={cn(s.scrollableView)}>
            {this.renderFilteredDialogs({
              path: ['message', 'status', 'new'],
              value: true
            })}
          </Scrollbars>
        </SwipeableViews>
      </div>
    );
  }
}

export default compose(pure(DialogTabs));
