/** @flow */
import { actionTypes } from '../actions/user';
import type { IUser } from '@/shared/models/user';
import type { IDialog } from '@/shared/models/dialogItem';


type State = {
  me: IUser,
  dialogs: Array<IDialog>
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
  dialogs: [],
  filteredDialogs: []
};

export default function user(state: State = initialState, action) {
  switch (action.type) {
  case actionTypes.FETCH_USER: {
    const { payload: { me } } = action;

    return {
      ...state,
      me
    };
  }

  case actionTypes.FETCH_DIALOGS: {
    const { payload: { dialogs } } = action;

    return {
      ...state,
      dialogs,
      filteredDialogs: dialogs
    };
  }

  case actionTypes.FILTER_DIALOGS: {
    const { payload: { filteredDialogs } } = action;

    return {
      ...state,
      filteredDialogs
    };
  }

  default:
    return state;
  }
}
