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
  data: any,
  dialogFormHeight: number,
  resizeDialogForm: Function,
  match: {
    params: {
      id: number
    }
  }
}

class DialogDetailDesktop extends Component<void, Props, *> {

  renderTestApolloData = () => {
    const { data: { loading, error, channels } } = this.props;

    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <ul>
        { channels.map(item => <li key={item.id}>{item.name}</li>) }
      </ul>
    );
  }

  render() {
    const {
      resizeDialogForm,
      dialogFormHeight
    } = this.props;

    return (
      <Root>
        <ContentLayout paddingBottom={dialogFormHeight} >
          <ScrollableView
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}>
            <div>
              {`Route: ${this.props.match.params.id}`}
              <br/>
              {this.renderTestApolloData()}
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
