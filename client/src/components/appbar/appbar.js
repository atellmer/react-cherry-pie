/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { FakeUserService } from '../../utils/fakeUsers';
import css from './appbar.css';
import TmLogo from '../logo';

type Props = {};
type State = {
	userAvatar: string
}

class TmAppbar extends Component {
	props: Props;
	state: State;
	fakeUserService: FakeUserService;
	userAvatar: string;

	constructor(props: Props) {
		super(props);
		this.state = {
			userAvatar: ''
		};
		this.fakeUserService = new FakeUserService();
	}

	componentWillMount() {
		this.fakeUserService
			.getFakeUser()
			.subscribe(res => {
				this.setState({
					userAvatar: res.results[0].picture.thumbnail
				});
			});
	}

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
						<Avatar src={this.state.userAvatar} size={34} backgroundColor={'transparent'}/>
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
