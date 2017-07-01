/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';
import cn from 'classnames';
import IconButton from 'material-ui/IconButton/index';
import SentimentSatisfiedIcon from 'material-ui/svg-icons/social/sentiment-satisfied';
import SendIcon from 'material-ui/svg-icons/content/send';

import { Textarea } from '@/features/ui';
import * as s from './dialogForm.css';


type Props = {
  changeMessagePanelHeight: Function
}

type State = {
  value: string
}

class DialogForm extends Component {
  props: Props;
  state: State;
  rootNode: HTMLElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleHeightChange = () => {
    if (this.rootNode !== null) {
      this.props.changeMessagePanelHeight(this.rootNode.clientHeight);
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
      <form onSubmit={this.handleSubmit} ref={node => this.rootNode = node}>
        <div className={cn(s.root)}>
          <div>
            <IconButton>
              <SentimentSatisfiedIcon color={'#7f7f7f'}/>
            </IconButton>
          </div>
          <div className={cn(s.txtLayout)}>
            <Textarea
              value={this.state.value}
              onChangeInput={this.handleChangeInput}
              onHeightChange={this.handleHeightChange}/>
          </div>
          <div>
            <IconButton type={'submit'}>
              <SendIcon color={'#9a85cd'}/>
            </IconButton>
          </div>
        </div>
      </form>
    );
  }
}

export default pure(DialogForm);
