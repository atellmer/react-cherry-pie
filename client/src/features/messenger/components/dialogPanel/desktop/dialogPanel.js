/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';

import type { IDialog } from '@/shared/models/dialogItem';
import { Logo, Searchbar }  from '@/features/ui';
import DialogTabs from '../../dialogTabs';
import {
  Root,
  HeaderLayout,
  LogoLayout,
  SearchbarLayout,
  ContentLayout
} from './styled';


type Props = {
  dialogItems: Array<IDialog>,
  filterDialogs: Function,
  match: {},
  location: {}
};

class DialogPanelDesktop extends Component<void, Props, *> {

  filterDialogs = term => {
    this.props.filterDialogs(term);
  }

  render() {
    const tabsProps = {
      dialogItems: this.props.dialogItems,
      match: this.props.match,
      location: this.props.location
    };

    return (
      <Root>
        <HeaderLayout>
          <LogoLayout>
            <Logo/>
          </LogoLayout>
          <SearchbarLayout>
            <Searchbar filterItems={this.filterDialogs}/>
          </SearchbarLayout>
        </HeaderLayout>
        <ContentLayout>
          <DialogTabs {...tabsProps}/>
        </ContentLayout>
      </Root>
    );
  }
}

export default pure(DialogPanelDesktop);
