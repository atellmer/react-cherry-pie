/** @flow */
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router';

import TmDialogItem from '../../dialogItem';
import { FakeUserService } from '../../../utils/fakeUsers';
import type { IDialog } from '../../../models/dialogItem';
import css from './panel.css';


type Props = {};
type State = {
  dialogs: Array<IDialog>
};

class TmPanelPhone extends Component {
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

  renderDialogs = () => {
    return this.state.dialogs.map((dialog, index) => {
      return (
        <Link to={`/dialogs/${dialog.id}`} key={index}>
          <TmDialogItem {...this.props} dialog={dialog}/>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className={css.root}>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          className={css.scrollableView}>
          {this.renderDialogs()}
        </Scrollbars>
      </div>
    );
  }
}

export default TmPanelPhone;
