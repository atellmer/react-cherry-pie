/** @flow */
import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs/index';
import SwipeableViews from 'react-swipeable-views';
import { Scrollbars } from 'react-custom-scrollbars';

import items from '../../models/message-items.json';
import css from './tabs.css';

type Props = {};
type State = {
	slideIndex: number
}

class TmTabs extends Component {
	props: Props;
	state: State;

	constructor(props: Props) {
		super(props);
		this.state = {
			slideIndex: 0
		};
	}

	handleChange = (value: number): void => {
		this.setState({
			slideIndex: value
		});
	}

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
				<Tabs onChange={this.handleChange} value={this.state.slideIndex}>
					<Tab label='Все' value={0}/>
					<Tab label='Новые' value={1}/>
				</Tabs>
				<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
					<Scrollbars autoHide autoHideTimeout={1000}
						autoHideDuration={200} className={css.scrollableView}>
						{itemsTemplate}
						{itemsTemplate}
						{itemsTemplate}
					</Scrollbars>
					<div>
						tab #2
					</div>
				</SwipeableViews>
			</div>
		);
	}
}

export default TmTabs;
