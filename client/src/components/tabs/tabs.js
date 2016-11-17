/** @flow */
import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs/index';
import SwipeableViews from 'react-swipeable-views';
import { Scrollbars } from 'react-custom-scrollbars';

import TmMessageItem from '../messageItem';
import messages from '../../models/message-items.json';
import css from './tabs.css';


type Props = {
	currentInterlocutor: any,
	changeCurrentInterlocutor: Function
};

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

	renderMessages = () => {
		const { currentInterlocutor, changeCurrentInterlocutor } = this.props;

		return messages.map((message, index) => {
			return (
				<TmMessageItem
					key={index}
					message={message}
					currentInterlocutor={currentInterlocutor}
					changeCurrentInterlocutor={changeCurrentInterlocutor}/>
			);
		});
	}

	render() {
		return (
			<div className={css.root}>
				<Tabs onChange={this.handleChange} value={this.state.slideIndex}>
					<Tab label='Все' value={0}/>
					<Tab label='Новые' value={1}/>
				</Tabs>
				<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
					<Scrollbars autoHide autoHideTimeout={1000}
						autoHideDuration={200} className={css.scrollableView}>
						{this.renderMessages()}
					</Scrollbars>
					<Scrollbars autoHide autoHideTimeout={1000}
						autoHideDuration={200} className={css.scrollableView}>
						tab #2
					</Scrollbars>
				</SwipeableViews>
			</div>
		);
	}
}

export default TmTabs;
