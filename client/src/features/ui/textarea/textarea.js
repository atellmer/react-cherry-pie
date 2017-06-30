/** @flow */
import React, { Component } from 'react';
import { pure, compose } from 'recompose';
import cn from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

import * as s from './textarea.css';


type Props = {
  value: string,
  onChangeInput: Function,
  onHeightChange: Function
};

const PLACEHOLDER = 'Введите ваше сообщение...';

class Textarea extends Component {
  props: Props;

  handleHeightChange = () => {
    this.props.onHeightChange();
  }

  handleChange = ev => {
    this.props.onChangeInput(ev.target.value);
  }

  render() {
    return (
      <TextareaAutosize className={cn(s.root)}
        value={this.props.value}
        minRows={1}
        maxRows={10}
        onChange={this.handleChange}
        onHeightChange={this.handleHeightChange}
        placeholder={PLACEHOLDER}/>
    );
  }
}

export default compose(pure(Textarea));
