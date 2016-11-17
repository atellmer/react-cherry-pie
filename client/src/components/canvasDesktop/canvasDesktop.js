/** @flow */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import TmMessagePanel from '../messagePanel';
import css from './canvasDesktop.css';

import items from '../../models/message-items.json';


type Props = {
	messagePanelHeight: number,
	changeMessagePanelHeight: Function
}

class TmCanvasDesktop extends Component {
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
					<TmMessagePanel changeMessagePanelHeight={this.props.changeMessagePanelHeight}/>
				</div>
			</div>
		);
	}
}

export default TmCanvasDesktop;
