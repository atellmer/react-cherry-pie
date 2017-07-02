/** @flow */
import React from 'react';
import { pure } from 'recompose';

import { Root } from './styled';


type Props = {
  count: number
}

function Bagde(props: Props) {
  return (
    <Root>{props.count}</Root>
  );
}

export default pure(Bagde);
