/** @flow */
import React, { Component } from 'react';
import cn from 'classnames';

import * as s from './loginForm.css';


type Props = {
  authorize: Function
}

class LoginForm extends Component {
  props: Props;

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.authorize(
      ev.target.login.value,
      ev.target.password.value
    );
  }

  render() {
    return (
      <form className={cn(s.root)} onSubmit={this.handleSubmit}>
        <input type='text' name='login'/>
        <br/>
        <input type='password' name='password'/>
        <br/>
        <button type='submit'>Log In</button>
      </form>
    );
  }
}

export default LoginForm;
