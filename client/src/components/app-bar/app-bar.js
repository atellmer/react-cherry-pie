import React, { Component } from 'react';
import Radium from 'radium';
import { Flex, Box } from 'reflexbox';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import css from './app-bar.css';
import TmLogo from '../logo';


@Radium
class TmAppBar extends Component {
	render() {
		return (
			<div className={css.root}>
				<TmLogo/>
				<Flex align='center'>
					<Box className='l-Avatar'>
						<Avatar src={require('../../assets/images/user.jpg')} size={34} backgroundColor={'#fff'}/>
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
