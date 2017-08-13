/** @flow */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton/index';

import {
  Root,
  Input
} from './styled';


type Props = {
  name: string,
  accept: string,
  title: string,
  onChange: Function
};

type CustomEvent = {
  target: {
    files: Array<any>
  }
};

const FileInput = (props: Props) => {
  const {
    name,
    accept,
    title,
    onChange
  } = props;

  const handleChange = (ev: CustomEvent) => {
    onChange(ev.target.files);
  };

  return (
    <Root>
      <RaisedButton
        containerElement='label'
        label={title}
        fullWidth
        secondary>
        <Input
          name={name}
          accept={accept}
          type='file'
          onChange={handleChange} />
      </RaisedButton>
    </Root>
  );
};

export default FileInput;
