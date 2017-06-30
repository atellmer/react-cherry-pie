/** @flow */
import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import cn from 'classnames';

import type { IDialog } from '@/shared/models/dialogItem';
import { Logo, Searchbar }  from '@/features/ui';
import DialogTabs from '../../dialogTabs';
import * as s from './dialogPanel.css';


type Props = {
  dialogs: Array<IDialog>,
  changeInterlocutor: Function,
  filterDialogs: Function
};

class DialogPanelDesktop extends Component {
  props: Props;

  filterDialogs = term => {
    this.props.filterDialogs(term);
  }

  render() {
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
          <DialogTabs {...this.props} dialogs={this.props.dialogs}/>
        </div>
      </div>
    );
  }
}

export default compose(pure(DialogPanelDesktop));
