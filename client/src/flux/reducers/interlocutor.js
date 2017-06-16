/** @flow */
import * as types from '../constants/ActionTypes';

type State = {
  id: string
}

type Action = {
  type: string,
  payload: any
}

const initialState = {
  id: ''
};

export default function interlocutor(state: State = initialState, action: Action): any {
  switch (action.type) {
  case types.CHANGE_INTERLOCUTOR:
    return {
      ...state,
      id: action.payload.id
    };

  default:
    return state;
  }
}
