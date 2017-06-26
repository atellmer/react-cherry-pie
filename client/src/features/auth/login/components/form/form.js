/** @flow */
import React, { Component } from 'react';
import * as s from './form.css';


type Props = {
  login: Function
}

class TmLoginForm extends Component {
  props: Props;

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.login({
      userName: ev.target.userName.value,
      userPass: ev.target.userPass.value
    });
  }

  render() {
    return (
      <form className={s.root} onSubmit={this.handleSubmit}>
        <input type='text' name='userName'/>
        <br/>
        <input type='password' name='userPass'/>
        <br/>
        <button type='submit'>Log In</button>
      </form>
    );
  }
}

export default TmLoginForm;
