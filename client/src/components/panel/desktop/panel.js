/** @flow */
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';

import type { IDialog } from '../../../models/dialogItem';
import TmLogo from '../../logo';
import TmSearchbar from '../../searchbar';
import TmTabs from '../../tabs';
import * as css from './panel.css';


type Props = {
  dialogs: Array<IDialog>
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

export default pureRender(TmPanelDesktop);
