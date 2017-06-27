/** @flow */
import { actionTypes } from '../actions/auth';


type State = {
  user: any,
  error: string | null
}

const initialState = {
  user: null,
  error: null
};

export default function auth(state: State = initialState, action) {
  switch (action.type) {

  case actionTypes.AUTHORIZE_SUCCESS: {
    const { user } = action.payload;

    return {
      ...state,
      user,
      error: null
    };
  }

  case actionTypes.AUTHORIZE_FAILURE: {
    const { error } = action.payload;

    return {
      ...state,
      user: null,
      error
    };
  }

  case actionTypes.LOGOUT: {
    return state;
  }

  default:
    return state;
  }
}
