/** @flow */
// Core
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import { Flex, Box } from 'reflexbox';
import IconButton from 'material-ui/IconButton/index';
import SentimentSatisfiedIcon from 'material-ui/svg-icons/social/sentiment-satisfied';
import SendIcon from 'material-ui/svg-icons/content/send';

// API
import fromAPI from '../../api';

// Components
import TmTextarea from '../textarea';

// Styles
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

    fromAPI.testItems.call('addItem', this.state.value)
      .then(() => {
        this.setState({ value: '' });
      });

    fromAPI.testItems.call('getItems')
      .then(data => {
        console.log('all items: ', data);
      });
  }

  handleChangeInput = (message: string) => {
    this.setState({ value: message });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={node => this.rootNode = node}>
        <Flex className={css.root} align='center'>
          <Box>
            <IconButton>
              <SentimentSatisfiedIcon color={'#7f7f7f'}/>
            </IconButton>
          </Box>
          <Box flexAuto>
            <TmTextarea
              value={this.state.value}
              onChangeInput={this.handleChangeInput}
              onHeightChange={this.handleHeightChange}/>
          </Box>
          <Box>
            <IconButton type={'submit'}>
              <SendIcon color={'#9a85cd'}/>
            </IconButton>
          </Box>
        </Flex>
      </form>
    );
  }
}

export default pureRender(TmMessagePanel);
