/** @flow */
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import Avatar from 'material-ui/Avatar/index';
import IconButton from 'material-ui/IconButton/index';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { FakeUserService } from '../../utils/fakeUsers';
import type { UserType } from '../../models/user';
import css from './appbar.css';
import TmLogo from '../logo';

type Props = {};
type State = {
  user: UserType
}

class TmAppbar extends Component {
  props: Props;
  state: State;
  fakeUserService: FakeUserService;
  user: UserType;

  constructor(props: Props) {
    super(props);
    this.state = {
      user: {
        id: '',
        name: {
          first: '',
          last: ''
        },
        avatar: {
          thumbnail: ''
        },
        online: false
      }
    };
    this.fakeUserService = new FakeUserService();
  }

  componentWillMount() {
    this.fakeUserService
      .getFakeUser({ results: 1 })
      .map(res => {
        return res.results.map(item => {
          return {
            id: item.login.salt,
            name: {
              first: item.name.first,
              last: item.name.last
            },
            avatar: {
              thumbnail: item.picture.thumbnail
            },
            online: true
          };
        });
      })
      .subscribe((res: Array<UserType>) => {
        this.setState({
          user: res[0]
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
            <Avatar
              src={this.state.user.avatar.thumbnail}
              size={34}
              backgroundColor={'transparent'}/>
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
