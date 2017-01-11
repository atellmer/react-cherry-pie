/** @flow */
import * as types from '../constants/ActionTypes';
import type { IUser } from '../models/user';
import type { IDialog } from '../models/dialogItem';


type State = {
  me: IUser,
  dialogs: Array<IDialog>
}

type Action = {
  type: string,
  payload: any
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
  },
  dialogs: []
};

export default function user(state: State = initialState, action: Action): any {
  switch (action.type) {
  case types.FETCH_USER:
    return {
      ...state,
      me: action.payload.me
    };

  case types.FETCH_DIALOGS:
    return {
      ...state,
      dialogs: action.payload.dialogs
    };

  default:
    return state;
  }
}
