import React, { Component } from 'react';

import style from './hello.css';


class Hello extends Component {
  render() {
    return (
      <div className={style.flex}>
        <img src={require('../../assets/images/cat.jpg')} alt=""/>
        <div className={style.title}>Hello, I am react-boilerplate!</div>
        <button>Press me</button>
      </div>
	  );
  }
}

export default Hello;