/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import IconButton from 'material-ui/IconButton/index';
import SentimentSatisfiedIcon from 'material-ui/svg-icons/social/sentiment-satisfied';
import SendIcon from 'material-ui/svg-icons/content/send';

import { Textarea } from '@/features/ui';
import {
  Form,
  TextareaLayout,
  WrapLayout
} from './styled';


type Props = {
  resizeDialogForm: Function
}

type State = {
  value: string
}

class DialogForm extends Component <void, Props, State> {
  rootNode: HTMLElement;

  state = {
    value: ''
  };

  handleHeightChange = () => {
    if (this.rootNode !== null) {
      this.props.resizeDialogForm(this.rootNode.clientHeight);
    }
  }

  handleSubmit = ev => {
    ev.preventDefault();
  }

  handleChangeInput = (message: string) => {
    this.setState({ value: message });
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        innerRef={node => this.rootNode = node}>
        <WrapLayout>
          <IconButton>
            <SentimentSatisfiedIcon color={'#7f7f7f'}/>
          </IconButton>
        </WrapLayout>
        <TextareaLayout>
          <Textarea
            value={this.state.value}
            onChangeInput={this.handleChangeInput}
            onHeightChange={this.handleHeightChange}/>
        </TextareaLayout>
        <WrapLayout>
          <IconButton type={'submit'}>
            <SendIcon color={'#9a85cd'}/>
          </IconButton>
        </WrapLayout>
      </Form>
    );
  }
}

export default pure(DialogForm);
