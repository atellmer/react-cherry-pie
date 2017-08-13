/** @flow */
import React from 'react';
import { HOC as withFormsy } from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton/index';

import {
  Root,
  Input
} from './styled';


type Props = {
  name: string,
  accept: string,
  title: string,
  setValue: Function
};

const FileInput = (props: Props) => {
  const {
    name,
    accept,
    title,
    setValue
  } = props;

  const changeValue = (e: Event & {target: {files: Array<any>}}) => {
    const files = [ ...e.target.files ];

    setValue(files);
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
          onChange={changeValue} />
      </RaisedButton>
    </Root>
  );
};

export default withFormsy(FileInput);
