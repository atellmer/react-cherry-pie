/** @flow */
import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import css from './panel.css';
import TmLogo from '../logo';
import TmSearchBar from '../search-bar';
import TmTabs from '../tabs';


class TmPanel extends Component {
	render() {
		return (
			<div className={css.root}>
				<div className='header'>
					<Flex className='l-Logo' align='center'>
						<TmLogo/>
					</Flex>
					<Flex className='l-SearchBar' align='center'>
						<TmSearchBar/>
					</Flex>
				</div>
				<div className='content'>
					<TmTabs/>
				</div>
			</div>
		);
	}
}

export default TmPanel;
