import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import items from './items.json';
import css from './messages-view.css';

class TmMessagesView extends Component {
	render() {
		const itemsTemplate = items.map((item, index) => {
			return (
				<div key={index} className='item'>
					{`${item.firstname} ${item.lastname}`}
				</div>
			);
		});

		return (
			<div className={css.root}>
				<Scrollbars className='scrolable'>
					{itemsTemplate}
					{itemsTemplate}
					{itemsTemplate}
				</Scrollbars>
			</div>
		);
	}
}

export default TmMessagesView;
