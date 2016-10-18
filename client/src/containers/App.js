/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import TmAppbar from '../components/appbar';
import TmPanel from '../components/panel';
import TmCanvas from '../components/canvas';
import '../main.css';
import css from './App.css';

class App extends Component {
	render() {
		return (
			<div className={css.root}>
				<div className={css.appbarLayout}>
					<TmAppbar/>
				</div>
				<Flex className={css.contentLayout}>
					<Box className={css.panelLayout}>
						<TmPanel/>
					</Box>
					<Box className={css.canvasLayout}>
						<TmCanvas/>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default App;
