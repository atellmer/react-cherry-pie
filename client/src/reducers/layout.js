/** @flow */
import * as types from '../constants/ActionTypes';

type State = {
  messagePanel: {
    height: number
  }
}

type Action = {
  type: string,
  payload: any
}

const initialState = {
  messagePanel: {
    height: 0
  }
};

export default function layout(state: State = initialState, action: Action): any {
  switch (action.type) {
  case types.CHANGE_MESSAGE_PANEL_HEIGHT:
    return {
      ...state,
      messagePanel: {
        height: action.payload.height
      }
    };

  default:
    return state;
  }
}
