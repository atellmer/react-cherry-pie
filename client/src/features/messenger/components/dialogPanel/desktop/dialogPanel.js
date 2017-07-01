/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import cn from 'classnames';

import type { IDialog } from '@/shared/models/dialogItem';
import { Logo, Searchbar }  from '@/features/ui';
import DialogTabs from '../../dialogTabs';
import * as s from './dialogPanel.css';


type Props = {
  dialogs: Array<IDialog>,
  filterDialogs: Function,
  match: {},
  location: {}
};

class DialogPanelDesktop extends Component {
  props: Props;

  filterDialogs = term => {
    this.props.filterDialogs(term);
  }

  render() {
    const tabsProps = {
      dialogs: this.props.dialogs,
      match: this.props.match,
      location: this.props.location
    };

    return (
      <div className={cn(s.rootDesktop)}>
        <div className={cn(s.headerLayout)}>
          <div className={cn(s.logoLayout)}>
            <Logo/>
          </div>
          <div className={cn(s.searchbarLayout)}>
            <Searchbar filterItems={this.filterDialogs}/>
          </div>
        </div>
        <div>
          <DialogTabs {...tabsProps}/>
        </div>
      </div>
    );
  }
}

export default pure(DialogPanelDesktop);
