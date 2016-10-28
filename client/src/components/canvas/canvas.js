/** @flow */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import TmMessagePanel from '../message-panel';
import css from './canvas.css';

import items from '../../models/message-items.json';


type Props = {
	messagePanelHeight: number,
	reciveMessagePanelHeight: Function
}

class TmCanvas extends Component {
	props: Props;

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
				<div className={css.contentLayout} style={{ paddingBottom: this.props.messagePanelHeight }}>
					<Scrollbars autoHide autoHideTimeout={1000}
						autoHideDuration={200} className={css.scrollableView}>
						{itemsTemplate}
						{itemsTemplate}
						{itemsTemplate}
					</Scrollbars>
				</div>
				<div className={css.messagePanelLayout}>
					<TmMessagePanel reciveMessagePanelHeight={this.props.reciveMessagePanelHeight}/>
				</div>
			</div>
		);
	}
}

export default TmCanvas;
