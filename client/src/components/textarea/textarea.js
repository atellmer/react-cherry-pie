/** @flow */
// Core
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import TextareaAutosize from 'react-textarea-autosize';

// Styles
import * as css from './textarea.css';


type Props = {
  onHeightChange: Function
};

class TmTextarea extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  handleHeightChange = () => {
    this.props.onHeightChange();
  }

  render() {
    const plaseholder = 'Введите ваше сообщение...';

    return (
      <TextareaAutosize className={css.root}
        minRows={1}
        maxRows={10}
        onHeightChange={this.handleHeightChange}
        placeholder={plaseholder}/>
    );
  }
}

export default pureRender(TmTextarea);
