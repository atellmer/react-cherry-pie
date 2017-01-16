/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import IconButton from 'material-ui/IconButton/index';
import SentimentSatisfiedIcon from 'material-ui/svg-icons/social/sentiment-satisfied';
import SendIcon from 'material-ui/svg-icons/content/send';
import TmTextarea from '../textarea';

import * as css from './messagePanel.css';


type Props = {
  changeMessagePanelHeight: Function
}

class TmMessagePanel extends Component {
  props: Props;
  rootNode: HTMLElement;

  handleHeightChange = () => {
    if (this.rootNode !== null) {
      this.props.changeMessagePanelHeight(this.rootNode.clientHeight);
    }
  }

  render() {
    return (
      <div ref={node => this.rootNode = node}>
        <Flex className={css.root} align='center'>
          <Box>
            <IconButton>
              <SentimentSatisfiedIcon color={'#7f7f7f'}/>
            </IconButton>
          </Box>
          <Box flexAuto>
            <TmTextarea onHeightChange={this.handleHeightChange}/>
          </Box>
          <Box>
            <IconButton>
              <SendIcon color={'#9a85cd'}/>
            </IconButton>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default TmMessagePanel;
