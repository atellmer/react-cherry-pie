/* @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import css from './app-bar.css';
import TmLogo from '../logo';


class TmAppBar extends Component {
	render() {
		return (
			<div className={css.root}>
				<div>
					<TmLogo/>
				</div>
				<Flex align='center'>
					<Box className='l-Avatar'>
						<Avatar src={require('../../assets/images/user.jpg')} size={34} backgroundColor={'transparent'}/>
					</Box>
					<Box className='l-IconButton'>
						<IconButton>
							<MoreVertIcon color={'#fff'}/>
						</IconButton>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default TmAppBar;
