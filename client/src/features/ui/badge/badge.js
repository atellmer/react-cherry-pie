/** @flow */
import React from 'react';
import { pure } from 'recompose';
import cn from 'classnames';

import * as s from './badge.css';


type Props = {
  count: number
}

function Bagde(props: Props) {
  const { count } = props;

  return (
    <div className={cn(s.root)}>{count}</div>
  );
}

export default pure(Bagde);
