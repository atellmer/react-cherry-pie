import React, { Component } from 'react';

import style from './hello.css';


class Hello extends Component {
  render() {
    return (
      <div className={style.flex}>
        <img src={require('../../assets/images/cat.jpg')} alt=""/>
        <h1 className={style.title}>Hello, I am react-boilerplate!</h1>
      </div>
	  );
  }
}

export default Hello;