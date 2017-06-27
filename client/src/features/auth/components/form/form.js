/** @flow */
import React, { Component } from 'react';
import * as s from './form.css';


type Props = {
  authorize: Function
}

class TmLoginForm extends Component {
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
      <form className={s.root} onSubmit={this.handleSubmit}>
        <input type='text' name='login'/>
        <br/>
        <input type='password' name='password'/>
        <br/>
        <button type='submit'>Log In</button>
      </form>
    );
  }
}

export default TmLoginForm;
