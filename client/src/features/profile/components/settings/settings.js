/** @flow */
import React, { Component } from 'react';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton/index';

import {
  TextInput,
  FileInput
} from '@/features/ui';


type Props = {
  handleSubmit: Function
};

class Settings extends Component<void, Props, *> {
  state = {
    canSubmit: false
  }

  handleEnableButton = () => {
    this.setState({ canSubmit: true });
  }

  handleDisableButton = () => {
    this.setState({ canSubmit: false });
  }

  render() {
    const {
      handleSubmit
    } = this.props;

    return (
      <div>
        Settings page:
        <Form
          onSubmit={handleSubmit}
          onValid={this.handleEnableButton}
          onInvalid={this.handleDisableButton}>
          <FileInput
            name='avatar'
            accept='image/jpeg, image/jpg, image/png'
            title='Выбрать...' />
          <TextInput
            value=''
            name='firstName'
            title='Имя'
            validations={{
              isAlphaLatCyr: true,
              minLength: 2,
              maxLength: 30
            }}
            validationErrors={{
              isAlphaLatCyr: 'Используйте только буквы',
              minLength: 'Минимальная длина 2 символа',
              maxLength: 'Максимальная длина 30 символов'
            }}
            required />
          <TextInput
            value=''
            name='lastName'
            title='Фамилия'
            validations={{
              isAlphaLatCyr: true,
              minLength: 2,
              maxLength: 30
            }}
            validationErrors={{
              isAlphaLatCyr: 'Используйте только буквы',
              minLength: 'Минимальная длина 2 символа',
              maxLength: 'Максимальная длина 30 символов'
            }} />
          <TextInput
            value=''
            name='nickName'
            title='Ник'
            validations={{
              isAlphanumeric: true,
              minLength: 4,
              maxLength: 30
            }}
            validationErrors={{
              isAlphanumeric: 'Используйте латинские буквы и\\или цифры',
              minLength: 'Минимальная длина 4 символа',
              maxLength: 'Максимальная длина 30 символов'
            }} />
          <RaisedButton
            label='Сохранить'
            type='submit'
            disabled={!this.state.canSubmit}
            secondary
            fullWidth />
        </Form>
      </div>
    );
  }
}

export default Settings;
