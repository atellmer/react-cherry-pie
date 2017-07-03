/** @flow */
import React, { Component } from 'react';


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
