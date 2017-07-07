/** @flow */
import { actionTypes } from '../actions/auth';


type State = {
  success?: boolean,
  user?: any,
  error?: string
}

const initialState = {};

function authReducer(state: State = initialState, action: any) {
  switch (action.type) {

  case actionTypes.SIGNUP_SUCCESS: {
    const { success } = action.payload;

    return {
      ...state,
      success
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
      user
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
    return state;
  }

  default:
    return state;
  }
}

export default authReducer;
