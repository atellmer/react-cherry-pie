/** @flow */
import React, { Component } from 'react';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton/index';

import { TextInput } from '@/features/ui';


type Props = {
  signup: Function
};
type State = {
  canSubmit: boolean
};

class RegisterForm extends Component<void, Props, State> {
  state = {
    canSubmit: false
  }

  handleSubmit = (data: {login: string, password: string}) => {
    this.props.signup(data.login, data.password);
    console.log(JSON.stringify(data, null, 4));
  }

  handleEnableButton = () => {
    this.setState({ canSubmit: true });
  }

  handleDisableButton = () => {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        onValid={this.handleEnableButton}
        onInvalid={this.handleDisableButton}>
        <TextInput
          value=''
          name='login'
          title='Email'
          validations='isEmail'
          validationError='This is not a valid email'
          required />
        <TextInput
          value=''
          name='password'
          title='Password'
          type='password'
          validations={{
            minLength: 6,
            maxLength: 12
          }}
          validationError='Password should contain from 6 to 12 characters'
          required />
        <TextInput
          value=''
          name='repeatedPassword'
          title='Repeated Password'
          type='password'
          validations='equalsField:password'
          validationError='Password not matches'
          required />
        <RaisedButton
          label='Sign Up'
          type='submit'
          disabled={!this.state.canSubmit}
          secondary
          fullWidth />
      </Form>
    );
  }
}

export default RegisterForm;

