/** @flow */
import { actionTypes } from '../actions/auth';


type State = {
  success?: boolean,
  user?: any,
  error?: string | null
}

const initialState = {};

function authReducer(state: State = initialState, action: any) {
  switch (action.type) {

  case actionTypes.SIGNUP_SUCCESS: {
    const { success } = action.payload;

    return {
      ...state,
      success,
      error: null
    };
  }

  case actionTypes.SIGNUP_FAILURE: {
    const { success, error } = action.payload;

    return {
      ...state,
      success,
      error
    };
  }

  case actionTypes.SIGNIN_SUCCESS: {
    const { success, user } = action.payload;

    return {
      ...state,
      success,
      user,
      error: null
    };
  }

  case actionTypes.SIGNIN_FAILURE: {
    const { success, error } = action.payload;

    return {
      ...state,
      success,
      error
    };
  }

  case actionTypes.SIGNOUT_SUCCESS: {
    return {
      ...state,
      user: null
    };
  }

  default:
    return state;
  }
}

export default authReducer;
