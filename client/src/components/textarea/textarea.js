/** @flow */
import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import css from './textarea.css';

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
    return (
      <TextareaAutosize className={css.root}
        minRows={1}
        maxRows={10}
        onHeightChange={this.handleHeightChange}
        placeholder='Ввведите ваше сообщение...'/>
    );
  }
}

export default TmTextarea;
