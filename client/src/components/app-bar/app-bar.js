import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import TmLogo from '../logo';
import style from './app-bar.css';

const iconButtonOverrideStyle = {
	margin: '0 -16px 0 0'
};


class TmAppBar extends Component {
	render() {
		return (
			<div className={style.root}>
				<TmLogo/>
				<Flex align='center'>
					<Box>
						<Avatar src={require('../../assets/images/user.jpg')} size={34}/>
					</Box>
					<Box>
						<IconButton style={iconButtonOverrideStyle}>
							<MoreVertIcon color={'#fff'}/>
						</IconButton>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default TmAppBar;
