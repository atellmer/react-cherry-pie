import React from 'react';

import css from './badge.css';


type Props = {
  count: number
}

function TmBagde(props: Props) {
  return (
    <div className={css.root}>{props.count}</div>
  );
}

export default TmBagde;
