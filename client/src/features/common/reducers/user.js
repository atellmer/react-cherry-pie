/** @flow */
import { actionTypes } from '../actions/user';
import type { IUser } from '@/shared/models/user';


type State = {
  me: IUser
}

const initialState = {
  me: {
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

function user(state: State = initialState, action: any) {
  switch (action.type) {
  case actionTypes.FETCH_USER: {
    const { payload: { me } } = action;

    return {
      ...state,
      me
    };
  }

  default:
    return state;
  }
}

export default user;
