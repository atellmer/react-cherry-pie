/** @flow */
// Core
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Tabs, Tab } from 'material-ui/Tabs/index';
import SwipeableViews from 'react-swipeable-views';
import { Scrollbars } from 'react-custom-scrollbars';

// Components
import TmDialogItem from '../dialogItem';

// Styles
import * as css from './tabs.css';

// Types
import type { IDialog } from '../../models/dialogItem';


type Props = {
  interlocutor: any,
  changeInterlocutor: Function,
  dialogs: Array<IDialog>
};

type State = {
  slideIndex: number
}

class TmTabs extends Component {
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

  renderDialogs = () => {
    const { dialogs } = this.props;

    return dialogs.map((dialog, index) => {
      return (
        <Link to={`/dialogs/${dialog.id}`} key={index}>
          <TmDialogItem {...this.props} dialog={dialog}/>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className={css.root}>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label='Все' value={0}/>
          <Tab label='Новые' value={1}/>
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className={css.scrollableView}>
            {this.renderDialogs()}
          </Scrollbars>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className={css.scrollableView}>
            tab #2
          </Scrollbars>
        </SwipeableViews>
      </div>
    );
  }
}

export default TmTabs;
