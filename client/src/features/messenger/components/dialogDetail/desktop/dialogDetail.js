/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';

import { DialogForm } from '@/features/messenger';
import {
  Root,
  ContentLayout,
  ScrollableView,
  DialogFormLayout
 } from './styled';


type Props = {
  dialogFormHeight: number,
  resizeDialogForm: Function,
  match: {
    params: {
      id: number
    }
  }
}

class DialogDetailDesktop extends Component<void, Props, *> {

  render() {
    const { resizeDialogForm, dialogFormHeight } = this.props;

    return (
      <Root>
        <ContentLayout paddingBottom={dialogFormHeight} >
          <ScrollableView
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}>
            <div>
              {`Route: ${this.props.match.params.id}`}
            </div>
          </ScrollableView>
        </ContentLayout>
        <DialogFormLayout>
          <DialogForm resizeDialogForm={resizeDialogForm}/>
        </DialogFormLayout>
      </Root>
    );
  }
}

export default pure(DialogDetailDesktop);
