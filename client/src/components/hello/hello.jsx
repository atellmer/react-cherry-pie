import React, { Component } from 'react';

import style from './hello.css';


class Hello extends Component {
	render() {
		console.log('environment:', environment);
		return (
			<div className={style.flex}>
				<img src={require('../../assets/images/cat.jpg')} alt=''/>
				<div className={style.title}>Hello, I am react-boilerplate!22333</div>
				<button>Press me</button>
			</div>
		);
	}
}

export default Hello;
