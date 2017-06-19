/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';

import type { IDialog } from '@/shared/models/dialogItem';
import TmLogo from '@/features/ui/logo';
import TmSearchbar from '@/features/ui/searchbar';
import TmTabs from '../../tabs';
import * as css from './panel.css';


type Props = {
  dialogs: Array<IDialog>,
  changeInterlocutor: Function
};

class TmPanelDesktop extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={css.rootDesktop}>
        <div className={css.headerLayout}>
          <div className={css.logoLayout}>
            <TmLogo/>
          </div>
          <div className={css.searchbarLayout}>
            <TmSearchbar/>
          </div>
        </div>
        <div>
          <TmTabs {...this.props} dialogs={this.props.dialogs}/>
        </div>
      </div>
    );
  }
}

export default pure(TmPanelDesktop);
