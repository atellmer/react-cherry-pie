/** @flow */
import React, { Component } from 'react';
import cn from 'classnames';

import * as s from './registerForm.css';


type Props = {
  register: Function
}

class RegisterForm extends Component {
  props: Props;

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.register(
      ev.target.email.value,
      ev.target.password.value
    );
  }

  render() {
    return (
      <form className={cn(s.root)} onSubmit={this.handleSubmit}>
        <input type='email' name='email'/>
        <br/>
        <input type='password' name='password'/>
        <br/>
        <button type='submit'>Register me!</button>
      </form>
    );
  }
}

export default RegisterForm;
