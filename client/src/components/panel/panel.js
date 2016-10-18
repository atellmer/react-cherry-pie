/** @flow */
import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import css from './panel.css';
import TmLogo from '../logo';
import TmSearchbar from '../searchbar';
import TmTabs from '../tabs';


class TmPanel extends Component {
	render() {
		return (
			<div className={css.root}>
				<div className={css.headerLayout}>
					<Flex className={css.logoLayout} align='center'>
						<TmLogo/>
					</Flex>
					<Flex className={css.searchbarLayout} align='center'>
						<TmSearchbar/>
					</Flex>
				</div>
				<div>
					<TmTabs/>
				</div>
			</div>
		);
	}
}

export default TmPanel;
