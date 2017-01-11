/** @flow */
import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import type { IDialog } from '../../../models/dialogItem';
import css from './panel.css';
import TmLogo from '../../logo';
import TmSearchbar from '../../searchbar';
import TmTabs from '../../tabs';


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

export default TmPanelDesktop;
