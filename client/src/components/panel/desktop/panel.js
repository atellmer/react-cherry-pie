/** @flow */
import React, { Component } from 'react';
import { Flex } from 'reflexbox';

import { FakeUserService } from '../../../utils/fakeUsers';
import type { IDialog } from '../../../models/dialogItem';
import css from './panel.css';
import TmLogo from '../../logo';
import TmSearchbar from '../../searchbar';
import TmTabs from '../../tabs';


type Props = {};
type State = {
  dialogs: Array<IDialog>
};

class TmPanelDesktop extends Component {
  props: Props;
  state: State;
  fakeUserService: FakeUserService;

  constructor(props: Props) {
    super(props);

    this.fakeUserService = new FakeUserService();
    this.state = {
      dialogs: []
    };
  }

  componentWillMount() {
    this.fakeUserService
      .getFakeUser({ results: 20 })
      .map(res => {
        return res.results.map((item, index) => {
          return {
            id: index,
            user: {
              id: item.login.salt,
              name: {
                first: item.name.first,
                last: item.name.last
              },
              avatar: {
                thumbnail: item.picture.thumbnail
              },
              online: false
            },
            message: {
              from: {
                id: item.login.salt,
                name: {
                  first: item.name.first,
                  last: item.name.last
                },
                avatar: {
                  thumbnail: item.picture.thumbnail
                },
                online: false
              },
              to: {
                id: item.login.salt,
                name: {
                  first: item.name.first,
                  last: item.name.last
                },
                avatar: {
                  thumbnail: item.picture.thumbnail
                },
                online: false
              },
              value: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
              },
              status: {
                delivered: false,
                read: true,
                new: false
              },
              timestamp: new Date()
            }
          };
        });
      })
      .subscribe((res: Array<IDialog>) => {
        this.setState({
          dialogs: res
        });
      });
  }

  render() {
    return (
      <div className={css.root}>
        <div className={css.headerLayout}>
          <Flex className={css.logoLayout} align='center'>
            <TmLogo/>
          </Flex>
          <Flex className={css.searchbarLayout} align='center'>
            <TmSearchbar/>
          </Flex>
        </div>
        <div>
          <TmTabs {...this.props} dialogs={this.state.dialogs}/>
        </div>
      </div>
    );
  }
}

export default TmPanelDesktop;
