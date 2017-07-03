/** @flow */
import React, { Component } from 'react';


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
