/** @flow */
import { FakeUserService } from '@/shared/services/fakeUsers';
import type { UserType } from '@/features/common';
import type { Dispatch } from 'redux';


const actionTypes = {
  FETCH_USER: '[Common] Fetch User'
};

const fakeUserService = new FakeUserService();

function fetchUser() {
  return (dispatch: Dispatch<*>) => {
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
      .subscribe((res: Array <UserType>) => {
        dispatch({
          type: actionTypes.FETCH_USER,
          payload: {
            me: res[0]
          }
        });
      });
  };
}

export {
  actionTypes,
  fetchUser
};
