/** @flow */
import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import TextareaAutosize from 'react-textarea-autosize';

import * as css from './textarea.css';


type Props = {
  value: string,
  onChangeInput: Function,
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

  handleChange = (ev: any) => {
    this.props.onChangeInput(ev.target.value);
  }

  render() {
    const plaseholder = 'Введите ваше сообщение...';

    return (
      <TextareaAutosize className={css.root}
        value={this.props.value}
        minRows={1}
        maxRows={10}
        onChange={this.handleChange}
        onHeightChange={this.handleHeightChange}
        placeholder={plaseholder}/>
    );
  }
}

export default pureRender(TmTextarea);
