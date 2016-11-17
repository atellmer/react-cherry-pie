/** @flow */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import items from '../../models/message-items.json';
import css from './panelPhone.css';


class TmPanelPhone extends Component {
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
				<Scrollbars autoHide autoHideTimeout={1000}
					autoHideDuration={200} className={css.scrollableView}>
					{itemsTemplate}
				</Scrollbars>
			</div>
		);
	}
}

export default TmPanelPhone;
