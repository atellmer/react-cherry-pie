/** @flow */
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import IconButton from 'material-ui/IconButton/index';
import SentimentSatisfiedIcon from 'material-ui/svg-icons/social/sentiment-satisfied';
import SendIcon from 'material-ui/svg-icons/content/send';

import TmTextarea from '@/components/textarea';
import * as css from './messagePanel.css';


type Props = {
  changeMessagePanelHeight: Function
}

type State = {
  value: string
}

class TmMessagePanel extends Component {
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

  handleSubmit = (ev) => {
    ev.preventDefault();
  }

  handleChangeInput = (message: string) => {
    this.setState({ value: message });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={node => this.rootNode = node}>
        <div className={css.root}>
          <div>
            <IconButton>
              <SentimentSatisfiedIcon color={'#7f7f7f'}/>
            </IconButton>
          </div>
          <div className={css.txtLayout}>
            <TmTextarea
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

export default pureRender(TmMessagePanel);
