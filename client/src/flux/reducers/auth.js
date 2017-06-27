/** @flow */
import { actionTypes } from '../actions/auth';


type State = {
  status: string,
  error: string | null,
  user: any
}

const initialState = {
  status: null,
  error: null,
  user: {}
};

export default function auth(state: State = initialState, action) {
  switch (action.type) {

  case actionTypes.AUTH_SUCCESS: {
    const { status, user } = action.payload;

    return {
      ...state,
      status,
      error: null,
      user
    };
  }

  case actionTypes.AUTH_FAILURE: {
    const { status, error } = action.payload;

    return {
      ...state,
      status,
      error,
      user: {}
    };
  }

  case actionTypes.LOGOUT: {
    return state;
  }

  default:
    return state;
  }
}
