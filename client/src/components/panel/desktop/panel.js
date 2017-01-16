/** @flow */
// Core
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import { Flex } from 'reflexbox';

// Models
import type { IDialog } from '../../../models/dialogItem';

// Components
import TmLogo from '../../logo';
import TmSearchbar from '../../searchbar';
import TmTabs from '../../tabs';

// Styles
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
          <Flex className={css.logoLayout} align='center'>
            <TmLogo/>
          </Flex>
          <Flex className={css.searchbarLayout} align='center'>
            <TmSearchbar/>
          </Flex>
        </div>
        <div>
          <TmTabs {...this.props} dialogs={this.props.dialogs}/>
        </div>
      </div>
    );
  }
}

export default pureRender(TmPanelDesktop);
