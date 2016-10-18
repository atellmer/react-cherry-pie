/** @flow */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import TmMessagePanel from '../message-panel';
import css from './canvas.css';

import items from '../../models/message-items.json';

class TmCanvas extends Component {
	render() {
		const itemsTemplate = items.map((item, index) => {
			return (
				<div key={index} className={css.item}>
					{`${item.firstname} ${item.lastname}`}
				</div>
			);
		});

		return (
			<div className={css.root}>
				<div className={css.contentLayout}>
					<Scrollbars className={css.scrollableView}>
						{itemsTemplate}
						{itemsTemplate}
						{itemsTemplate}
					</Scrollbars>
				</div>
				<div className={css.messagePanelLayout}>
					<TmMessagePanel/>
				</div>
			</div>
		);
	}
}

export default TmCanvas;
