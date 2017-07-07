/** @flow */
import React, { Component } from 'react';


type Props = {
  signup: Function
}

class RegisterForm extends Component<void, Props, *> {

  handleSubmit = (ev: Event & {target: {email: any, password: any}}) => {
    ev.preventDefault();

    this.props.signup(
      ev.target.email.value,
      ev.target.password.value
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
