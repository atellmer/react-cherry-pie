import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import css from './panel.css';
import TmLogo from '../logo';


class TmPanel extends Component {
	render() {
		return (
			<div className={css.root}>
				<Flex className='l-Header' align='center'>
					<Box>
						<TmLogo/>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default TmPanel;
