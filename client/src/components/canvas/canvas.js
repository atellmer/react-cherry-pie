/** @flow */
import React, { Component } from 'react';

import TmMessagePanel from '../message-panel';
import css from './canvas.css';

class TmCanvas extends Component {
	render() {
		return (
			<div className={css.root}>
				<div className='l-TmMessagePanel'>
					<TmMessagePanel/>
				</div>
			</div>
		);
	}
}

export default TmCanvas;
