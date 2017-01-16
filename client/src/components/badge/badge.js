/** @flow */
// Core
import React from 'react';
import pureRender from 'pure-render-decorator';

// Styles
import * as css from './badge.css';


type Props = {
  count: number
}

function TmBagde(props: Props) {
  return (
    <div className={css.root}>{props.count}</div>
  );
}

export default pureRender(TmBagde);
