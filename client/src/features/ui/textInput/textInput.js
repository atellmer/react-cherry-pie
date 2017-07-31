/** @flow */
import React from 'react';
import { HOC as withFormsy } from 'formsy-react';
import TextField from 'material-ui/TextField/index';


type Props = {
  name: string,
  title: string,
  type: string,
  getValue: Function,
  setValue: Function,
  getErrorMessage: Function
};

const TextInput = (props: Props) => {
  const {
    name,
    title,
    type,
    getValue,
    setValue,
    getErrorMessage
  } = props;

  const changeValue = (e: Event & {target: {value: string}}) => {
    setValue(e.target.value);
  };

  return (
    <TextField
      name={name}
      type={type || 'text'}
      hintText={title || ''}
      fullWidth
      onChange={changeValue}
      value={getValue()}
      errorText={getErrorMessage()} />
  );
};

export { TextInput };
export default withFormsy(TextInput);
