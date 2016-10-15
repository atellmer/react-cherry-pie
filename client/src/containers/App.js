/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import TmAppBar from '../components/app-bar';
import TmPanel from '../components/panel';
import TmCanvas from '../components/canvas';
import '../main.css';
import css from './app.css';

class App extends Component {
	render() {
		return (
			<div className={css.root}>
				<div className='l-TmAppBar'>
					<TmAppBar/>
				</div>
				<Flex>
					<Box className='l-TmPanel'>
						<TmPanel/>
					</Box>
					<Box className='l-TmCanvas'>
						<TmCanvas/>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default App;
