/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import css from './appbar.css';
import TmLogo from '../logo';


class TmAppbar extends Component {
	render() {
		return (
			<div className={css.root}>
				<div>
					<div className={css.logoLayout}>
						<TmLogo/>
					</div>
				</div>
				<Flex align='center'>
					<Box className={css.avatarLayout}>
						<Avatar src={require('../../assets/images/user.jpg')} size={34} backgroundColor={'transparent'}/>
					</Box>
					<Box className={css.iconButtonLayout}>
						<IconButton>
							<MoreVertIcon color={'#fff'}/>
						</IconButton>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default TmAppbar;
