/** @flow */
import * as types from '../constants/ActionTypes';

type changeInterlocutorAction = {
  type: string,
  payload: {
    id: string
  }
}

export function changeInterlocutor(id: string): changeInterlocutorAction {
  return {
    type: types.CHANGE_INTERLOCUTOR,
    payload: { id }
  };
}
