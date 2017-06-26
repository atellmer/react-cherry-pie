/** @flow */
import * as types from '../constants/ActionTypes';

type State = {
  userName: string,
  userPass: string,
}

type Action = {
  type: string,
  payload: any
}

const initialState = {
  userName: null,
  userPass: null
};

export default function auth(state: State = initialState, action: Action): any {
  switch (action.type) {
  case types.LOGIN:
    return {
      ...state,
      userName: action.payload.userName,
      userPass: action.payload.userPass
    };

  case types.LOGOUT:
    return state;

  default:
    return state;
  }
}
