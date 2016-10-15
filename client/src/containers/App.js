/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import TmAppBar from '../components/app-bar';
import TmPanel from '../components/panel';
import TmCanvas from '../components/canvas';
import '../main.css';
import css from './App.css';

class App extends Component {
	render() {
		return (
			<div className={css.root}>
				<div className='l-TmAppBar'>
					<TmAppBar/>
				</div>
				<Flex>
					<Box className='l-TmPanel' flexAuto>
						<div className='animatable'>
							<TmPanel/>
						</div>
					</Box>
					<Box className='l-TmCanvas' flexAuto>
						<div className='animatable'>
							<TmCanvas/>
						</div>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default App;
