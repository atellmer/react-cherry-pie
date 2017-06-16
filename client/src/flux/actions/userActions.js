/** @flow */
import * as types from '../constants/ActionTypes';
import { FakeUserService } from '@/shared/services/fakeUsers';
import type { IUser } from '../models/user';
import type { IDialog } from '../models/dialogItem';


const fakeUserService = new FakeUserService();

export function fetchUser() {
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

export function fetchDialogs() {
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
