/** @flow */
import React, { Component } from 'react';
import { pure } from 'recompose';

import { Root } from './styled';


type Props = {
  value: string,
  onChangeInput: Function,
  onHeightChange: Function
};

const PLACEHOLDER = 'Введите ваше сообщение...';

class Textarea extends Component <void, Props, *> {

  handleHeightChange = () => {
    this.props.onHeightChange();
  }

  handleChange = ev => {
    this.props.onChangeInput(ev.target.value);
  }

  render() {
    return (
      <Root
        value={this.props.value}
        minRows={1}
        maxRows={10}
        onChange={this.handleChange}
        onHeightChange={this.handleHeightChange}
        placeholder={PLACEHOLDER}/>
    );
  }
}

export default pure(Textarea);
