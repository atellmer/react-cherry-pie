/** @flow */
import * as types from '../constants/ActionTypes';

type State = {
  userId: number | null
}

type Action = {
  type: string,
  payload: any
}

const initialState = {
  userId: null
};

export default function interlocutor(state: State = initialState, action: Action): any {
  switch (action.type) {
  case types.CHANGE_CURRENT_INTERLOCUTOR:
    return {
      ...state,
      userId: action.payload.userId
    };

  default:
    return state;
  }
}
