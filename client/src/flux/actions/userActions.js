/** @flow */
import * as types from '../constants/ActionTypes';
import { FakeUserService } from '@/shared/services/fakeUsers';
import type { IUser } from '../models/user';
import type { IDialog } from '../models/dialogItem';


const fakeUserService = new FakeUserService();

function fetchUser() {
  return (dispatch: Function) => {
    fakeUserService.getFakeUser({ results: 1 })
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
      .subscribe((res: Array <IUser>) => {
        dispatch({
          type: types.FETCH_USER,
          payload: {
            me: res[0]
          }
        });
      });
  };
}

function fetchDialogs() {
  return (dispatch: Function) => {
    fakeUserService.getFakeUser({ results: 20 })
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
              online: Math.random() > 0.5
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
                online: Math.random() > 0.5
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
                online: Math.random() > 0.5
              },
              value: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
              },
              status: {
                delivered: Math.random() > 0.5,
                read: false,
                new: Math.random() > 0.5
              },
              timestamp: new Date()
            }
          };
        });
      })
      .subscribe((res: Array <IDialog>) => {
        dispatch({
          type: types.FETCH_DIALOGS,
          payload: {
            dialogs: res
          }
        });
      });
  };
}

function filterDialogs(term) {
  return (dispatch: Function, getState: Function) => {
    const dialogs = getState().user.dialogs;
    let filteredDialogs = [];
    const regexp = new RegExp(`${term}`, 'ig');

    filteredDialogs = dialogs.filter((item) => {
      const fullname = `${item.user.name.first} ${item.user.name.last}`;

      return regexp.test(fullname);
    });

    dispatch({
      type: types.FILTER_DIALOGS,
      payload: {
        filteredDialogs
      }
    });
  };
}

export { fetchUser, fetchDialogs, filterDialogs };
