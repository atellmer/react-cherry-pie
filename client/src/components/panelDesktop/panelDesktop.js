/** @flow */
import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import css from './panelDesktop.css';
import TmLogo from '../logo';
import TmSearchbar from '../searchbar';
import TmTabs from '../tabs';


type Props = {};

class TmPanelDesktop extends Component {
	props: Props;

	constructor(props: Props) {
		super(props);
	}

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
					<TmTabs {...this.props}/>
				</div>
			</div>
		);
	}
}

export default TmPanelDesktop;
