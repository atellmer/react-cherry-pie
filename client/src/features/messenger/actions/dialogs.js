/** @flow */
import { FakeUserService } from '@/shared/services/fakeUsers';
import type { IDialog } from '@/shared/models/dialogItem';


export const actionTypes = {
  FETCH_DIALOGS: '[Messenger] Fetch Dialogs',
  FILTER_DIALOGS: '[Messenger] Filter Dialogs'
};

const fakeUserService = new FakeUserService();

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
          type: actionTypes.FETCH_DIALOGS,
          payload: {
            dialogs: res
          }
        });
      });
  };
}

function filterDialogs(term) {
  return (dispatch: Function, getState: Function) => {
    const dialogs = getState().messenger.dialogs.dialogs;
    let filteredDialogs = [];
    const regexp = new RegExp(`${term}`, 'ig');

    filteredDialogs = dialogs.filter((item) => {
      const fullname = `${item.user.name.first} ${item.user.name.last}`;

      return regexp.test(fullname);
    });

    dispatch({
      type: actionTypes.FILTER_DIALOGS,
      payload: {
        filteredDialogs
      }
    });
  };
}

export {
  fetchDialogs,
  filterDialogs
};
