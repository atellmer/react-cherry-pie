import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import TmAppBar from '../components/app-bar';
import TmPanel from '../components/panel';
import './main.css';
import css from './app.css';

class App extends Component {
	render() {
		return (
			<div className={css.root}>
				<TmAppBar/>
				<Flex>
					<Box className='l-TmPanel'>
						<TmPanel/>
					</Box>
					<Box className='l-TmCanvas'>
						<div>TmCanvas</div>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default App;
