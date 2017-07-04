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

function authReducer(state: State = initialState, action: any) {
  switch (action.type) {

  case actionTypes.REGISTER_SUCCESS: {
    const { user } = action.payload;

    return {
      ...state,
      user,
      error: null
    };
  }

  case actionTypes.REGISTER_FAILURE: {
    const { error } = action.payload;

    return {
      ...state,
      user: null,
      error
    };
  }

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

export default authReducer;
