/** @flow */
import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs/index';
import TmMessagesView from '../messages-view';

import css from './tabs.css';


class TmTabs extends Component {
	render() {
		return (
			<div className={css.root}>
				<Tabs contentContainerClassName='content'>
					<Tab label='Все'>
						<TmMessagesView/>
					</Tab>
					<Tab label='Новые'>
						two
					</Tab>
				</Tabs>
			</div>
		);
	}
}

export default TmTabs;
