/** @flow */
import React, { Component } from 'react';


type Props = {
  signin: Function
}

class LoginForm extends Component<void, Props, *> {

  handleSubmit = (ev: Event & {target: {login: any, password: any}}) => {
    ev.preventDefault();

    this.props.signin(
      ev.target.login.value,
      ev.target.password.value
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
