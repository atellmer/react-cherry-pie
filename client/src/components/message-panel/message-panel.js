/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import IconButton from 'material-ui/IconButton/index';
import SentimentSatisfiedIcon from 'material-ui/svg-icons/social/sentiment-satisfied';
import SendIcon from 'material-ui/svg-icons/content/send';

import css from './message-panel.css';


class TmMessagePanel extends Component {
	render() {
		return (
			<Flex className={css.root} align='center'>
				<Box className='l-button'>
					<IconButton>
						<SentimentSatisfiedIcon color={'#7f7f7f'}/>
					</IconButton>
				</Box>
				<Box className='l-texarea' flexAuto>
					textarea
				</Box>
				<Box className='l-button'>
					<IconButton>
						<SendIcon color={'#9a85cd'}/>
					</IconButton>
				</Box>
			</Flex>
		);
	}
}

export default TmMessagePanel;
