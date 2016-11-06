/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import Avatar from 'material-ui/Avatar/index';

import css from './messageItem.css';


type Props = {
	message: {
		avatar: string,
		firstname: string,
		lastname: string,
		lastMessage: string,
		timestamp: string,
		sender: string,
		messageStatus: string,
		newMessageCount: number,
		online: boolean
	}
}

class TmMessageItem extends Component {
	props: Props;

	constructor(props: Props) {
		super(props);
	}

	render() {
		const avatar: string = this.props.message.avatar;
		const firstname: string = this.props.message.firstname;
		const lastname: string = this.props.message.lastname;
		const message: string = this.props.message.lastMessage;
		const online: boolean = this.props.message.online;
		const sender = this.props.message.sender;

		const avatarStatusClass = online ? css.online : css.offline;
		const you = sender === 'you' ? 'Вы:' : '';

		return (
			<div className={css.root}>
				<Flex>
					<Box>
						<div className={`${css.avatarLayout} ${avatarStatusClass}`}>
							<Avatar src={avatar} size={48} backgroundColor={'transparent'}/>
						</div>
					</Box>
					<Box flexAuto className={css.messageBodyLayout}>
						<div className={css.messageBody}>
							<div className={`${css.name} ${css.textClip}`}>{`${firstname} ${lastname}`}</div>
							<div className={`${css.textMessage} ${css.textClip}`}>{`${you} ${message}`}</div>
						</div>
					</Box>
				</Flex>
			</div>
		);
	}
}

export default TmMessageItem;
